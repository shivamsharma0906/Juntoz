import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { PlatformId, OnboardingSubmissionResult } from '../types/onboarding';
import { ALL_FLOWS } from '../config/flows';
import { validateStep } from '../schemas/onboardingSchema';
import { useOnboardingDraft } from '../hooks/useOnboardingDraft';
import { PlatformPicker } from './PlatformPicker';
import { StepTracker } from './StepTracker';
import { FieldRenderer } from './FieldRenderer';
import { ConfirmationScreen } from './ConfirmationScreen';

export const OnboardingShell: React.FC = () => {
  const {
    formState,
    setPlatform,
    updateField,
    setStepIndex,
    clearDraft,
  } = useOnboardingDraft();

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [submissionResult, setSubmissionResult] = useState<OnboardingSubmissionResult | null>(null);
  const [showSwitchConfirm, setShowSwitchConfirm] = useState<PlatformId | null>(null);

  const activeFlow = formState.platform ? ALL_FLOWS[formState.platform] : null;
  const currentStep = activeFlow ? activeFlow.steps[formState.currentStepIndex] : null;
  const totalSteps = activeFlow ? activeFlow.steps.length : 0;
  const isFirstStep = formState.currentStepIndex === 0;
  const isLastStep = activeFlow && formState.currentStepIndex === totalSteps - 1;
  const progressPercent = totalSteps > 0 ? ((formState.currentStepIndex + 1) / totalSteps) * 100 : 0;

  // ── Step completion & navigation derived from validation ──
  // Step completion is determined by actual field validity, not by historical step index.
  const { completedIndices, maxAccessibleIndex } = useMemo(() => {
    if (!activeFlow) return { completedIndices: [], maxAccessibleIndex: 0 };

    const completed: number[] = [];
    let maxAccessible = 0;
    let foundFirstIncomplete = false;

    for (let i = 0; i < activeFlow.steps.length; i++) {
      const stepValidation = validateStep(activeFlow.steps[i], formState.data);
      if (stepValidation.isValid) {
        completed.push(i);
        if (!foundFirstIncomplete) {
          maxAccessible = Math.min(i + 1, activeFlow.steps.length - 1);
        }
      } else {
        if (!foundFirstIncomplete) {
          maxAccessible = i;
          foundFirstIncomplete = true;
        }
      }
    }

    return { completedIndices: completed, maxAccessibleIndex: maxAccessible };
  }, [activeFlow, formState.data]);

  // Handle continuing to next step
  const handleNext = () => {
    if (!currentStep || !activeFlow) return;

    const validation = validateStep(currentStep, formState.data);
    if (!validation.isValid) {
      setErrors(validation.errors);
      window.scrollTo({ top: 120, behavior: 'smooth' });
      return;
    }

    setErrors({});
    setSubmissionError(null);

    if (isLastStep) {
      handleSubmit();
    } else {
      setStepIndex(formState.currentStepIndex + 1);
      window.scrollTo({ top: 80, behavior: 'smooth' });
    }
  };

  // Handle previous step
  const handlePrev = () => {
    setErrors({});
    setSubmissionError(null);
    if (formState.currentStepIndex > 0) {
      setStepIndex(formState.currentStepIndex - 1);
      window.scrollTo({ top: 80, behavior: 'smooth' });
    } else {
      setShowSwitchConfirm('google-ads');
    }
  };

  // Handle final submission to /api/onboarding
  const handleSubmit = async () => {
    if (!activeFlow) return;

    // Safety sweep: Verify that EVERY step in the flow is valid
    for (let i = 0; i < activeFlow.steps.length; i++) {
      const stepVal = validateStep(activeFlow.steps[i], formState.data);
      if (!stepVal.isValid) {
        setStepIndex(i);
        setErrors(stepVal.errors);
        setSubmissionError(
          `Please complete all required fields in "${activeFlow.steps[i].title}" before submitting.`
        );
        window.scrollTo({ top: 120, behavior: 'smooth' });
        return;
      }
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    const payload = {
      platform: formState.platform,
      clientName: formState.data.clientName,
      designation: formState.data.designation,
      businessName: formState.data.businessName,
      phone: formState.data.phone,
      email: formState.data.email,
      websiteUrl: formState.data.websiteUrl,
      instagramHandle: formState.data.instagramHandle,
      cityAndRadius: formState.data.cityAndRadius,
      beautyVerticals: formState.data.beautyVerticals,
      data: formState.data,
      honeypot: '',
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch('/api/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (!res.ok || json.success === false) {
        throw new Error(json.error || json.message || 'Submission failed. Please check connection.');
      }

      // Success: clear saved draft and display confirmation screen
      clearDraft(formState.platform!);
      setSubmissionResult({
        success: true,
        submissionId: json.submissionId,
        businessName: formState.data.businessName,
        platform: formState.platform!,
        clientName: formState.data.clientName,
        recipient: json.recipient || 'official.juntoz@gmail.com',
        submittedAt: json.submittedAt || payload.submittedAt,
        textDossier: json.textDossier,
        slotDetails: json.slotDetails,
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      console.error('Submission error:', err);
      setSubmissionError(
        err.message || 'Network error dispatching your intake. Please retry or contact us directly on WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show confirmation screen if completed
  if (submissionResult) {
    return (
      <div className="min-h-screen bg-[#F7F6F2] pt-28 md:pt-36 pb-24 px-4 sm:px-6">
        <ConfirmationScreen
          result={submissionResult}
          onRestart={() => {
            setSubmissionResult(null);
            clearDraft();
          }}
        />
      </div>
    );
  }

  // Show platform picker if no platform is selected yet
  if (!activeFlow || !currentStep) {
    return (
      <div className="min-h-screen bg-[#F7F6F2] pt-28 md:pt-36 pb-24 px-4 sm:px-6">
        <PlatformPicker
          selectedPlatform={formState.platform}
          onSelectPlatform={(pid) => setPlatform(pid)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#111111] pt-24 sm:pt-28 md:pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1360px]">
        {/* Top Breadcrumb / Platform Switcher Header */}
        <div className="flex items-center justify-between pb-6 mb-6 sm:mb-8 border-b border-[#E7E3DA]">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="font-heading text-lg font-bold tracking-tight text-[#111111] hover:text-[#5D2E85] transition-colors"
            >
              Juntoz
            </Link>
            <span className="text-[#DEDED7]">•</span>
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#5D2E85] bg-[#F1E7F9] px-2.5 py-0.5 rounded-full border border-[#5D2E85]/15">
              {activeFlow.badge}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setShowSwitchConfirm('google-ads')}
            className="text-xs font-sans font-semibold text-[#5F5F5A] hover:text-[#5D2E85] transition-colors cursor-pointer"
          >
            Change Engine Flow ↺
          </button>
        </div>

        {/* ── Mobile In-Flow Step Progress Indicator ── */}
        <div className="lg:hidden mb-6 bg-white p-3.5 rounded-2xl border border-[#E7E3DA] shadow-2xs">
          <div className="flex items-center justify-between text-xs font-sans mb-2">
            <span className="font-semibold text-[#111111]">
              Step {formState.currentStepIndex + 1} of {totalSteps}
            </span>
            <span className="text-[#5D2E85] font-bold">
              {Math.round(progressPercent)}% completed
            </span>
          </div>
          <div className="h-1.5 w-full bg-[#F1E7F9] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#5D2E85] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* ── 2-COLUMN SPLIT LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* ════ LEFT COLUMN: STICKY CONCIERGE HUD (4 Cols) ════ */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#5F5F5A] block">
                {currentStep.eyebrow}
              </span>

              <h2
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-[#111111] leading-tight"
              >
                {currentStep.title}
              </h2>

              <p className="font-body text-xs sm:text-sm text-[#5F5F5A] leading-relaxed pt-1">
                {currentStep.subtitle}
              </p>
            </div>

            {/* Reassurance pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E7E3DA] text-[11px] text-[#5F5F5A] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#287A55]" />
              <span>Takes ~{activeFlow.estimatedMinutes} mins · Autosaved to your browser</span>
            </div>

            {/* Desktop Vertical Step Tracker */}
            <div className="hidden lg:block pt-4 border-t border-[#E7E3DA]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#111111]/70">
                  FLOW ROADMAP
                </span>
                <span className="text-[11px] font-mono text-[#5D2E85] font-semibold">
                  Step {formState.currentStepIndex + 1}/{totalSteps}
                </span>
              </div>
              <StepTracker
                steps={activeFlow.steps}
                currentIndex={formState.currentStepIndex}
                maxAccessibleIndex={maxAccessibleIndex}
                completedStepIndices={completedIndices}
                onSelectStep={(idx) => {
                  setStepIndex(idx);
                  window.scrollTo({ top: 80, behavior: 'smooth' });
                }}
              />
            </div>
          </aside>

          {/* ════ RIGHT COLUMN: ACTIVE STEP FIELDS (8 Cols) ════ */}
          <main className="lg:col-span-8">
            <div className="bg-white border border-[#E7E3DA] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-card relative overflow-hidden">
              
              {/* Form Content Cross-Fade Animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  {/* Fields list */}
                  <div className="space-y-6">
                    {currentStep.fields.map((field) => (
                      <FieldRenderer
                        key={field.name}
                        field={field}
                        value={formState.data[field.name]}
                        onChange={(val) => {
                          updateField(field.name, val);
                          if (errors[field.name]) {
                            setErrors((prev) => {
                              const updated = { ...prev };
                              delete updated[field.name];
                              return updated;
                            });
                          }
                        }}
                        error={errors[field.name]}
                        allFormData={formState.data}
                      />
                    ))}
                  </div>

                  {/* Trust indicator on last step */}
                  {isLastStep && (
                    <div className="pt-2 text-xs text-[#5F5F5A] flex items-center gap-2 border-t border-[#E7E3DA]/60 pt-4">
                      <svg className="w-4 h-4 text-[#5D2E85] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span>
                        Your intake data is shared strictly with the Juntoz core team under NDA. Zero spam, zero third-party disclosure.
                      </span>
                    </div>
                  )}

                  {/* Submission error alert */}
                  {submissionError && (
                    <div className="p-4 rounded-xl bg-[#FEF2F2] border border-[#F87171]/40 text-xs text-[#991B1B] flex items-center justify-between gap-3">
                      <span>{submissionError}</span>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="px-3 py-1 rounded-md bg-[#991B1B] text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-[#7F1D1D] transition-colors cursor-pointer shrink-0"
                      >
                        Retry
                      </button>
                    </div>
                  )}

                  {/* Navigation Actions */}
                  <div className="pt-6 border-t border-[#E7E3DA] flex items-center justify-between gap-4">
                    {!isFirstStep ? (
                      <button
                        type="button"
                        onClick={handlePrev}
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F7F6F2] border border-[#E7E3DA] text-xs font-sans font-semibold uppercase tracking-wider text-[#111111] transition-all cursor-pointer active:scale-98"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Back</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setShowSwitchConfirm('google-ads')}
                        className="text-xs font-sans font-semibold text-[#5F5F5A] hover:text-[#111111] transition-colors cursor-pointer"
                      >
                        ← Choose Another Platform
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#5D2E85] hover:bg-[#4C266D] text-white text-xs font-sans font-bold uppercase tracking-wider transition-all duration-200 shadow-card hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Routing Intake...</span>
                        </>
                      ) : isLastStep ? (
                        <>
                          <span>Submit Onboarding Dossier</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </>
                      ) : (
                        <>
                          <span>Save &amp; Continue</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </main>

        </div>
      </div>

      {/* ── Switch Platform Modal ── */}
      {showSwitchConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-[#E7E3DA] shadow-card space-y-4 text-center">
            <h3
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="text-2xl font-normal text-[#111111]"
            >
              Switch Marketing Engine?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#5F5F5A] leading-relaxed">
              Your business identity details will be preserved, but platform-specific fields for {activeFlow.title} will pause until you return.
            </p>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowSwitchConfirm(null)}
                className="flex-1 py-3 rounded-full border border-[#E7E3DA] text-xs font-semibold uppercase tracking-wider text-[#5F5F5A] hover:bg-[#F7F6F2] transition-colors cursor-pointer"
              >
                Continue Current
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowSwitchConfirm(null);
                  setPlatform(null);
                }}
                className="flex-1 py-3 rounded-full bg-[#5D2E85] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#4C266D] transition-colors cursor-pointer"
              >
                Switch Platform
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
