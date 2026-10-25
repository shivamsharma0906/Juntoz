import React, { useEffect } from 'react';
import type { CallingSlotData } from '../types/onboarding';
import { CALL_CONFIRMATION_SLA } from '../config/constants';
import {
  TIME_SLOT_WINDOWS,
  POPULAR_TIMEZONES,
  detectUserTimezone,
  getTomorrowDateInTimezone,
  formatTimeWindowLabel,
} from '../utils/timezoneUtils';

interface CallingSlotPickerProps {
  value: CallingSlotData | undefined;
  onChange: (val: CallingSlotData) => void;
  defaultPhone?: string;
  error?: string;
  errors?: Record<string, string>;
}

export const CallingSlotPicker: React.FC<CallingSlotPickerProps> = ({
  value,
  onChange,
  defaultPhone = '',
  error,
  errors = {},
}) => {
  // Ensure default state is initialized
  const timezone = value?.timezone || detectUserTimezone();
  const anyTimeWorks = value?.anyTimeWorks ?? false;
  const preferredDate = value?.preferredDate || '';
  const secondChoiceDate = value?.secondChoiceDate || '';
  const timeWindows = value?.timeWindows || ['morning'];
  const callMode = value?.callMode || 'whatsapp';
  const callPhone = value?.callPhone ?? defaultPhone;
  const callNote = value?.callNote || '';
  const dpdpConsent = value?.dpdpConsent ?? false;

  // Sync default phone if value.callPhone is empty and defaultPhone becomes available
  useEffect(() => {
    if (!value?.callPhone && defaultPhone) {
      onChange({
        anyTimeWorks,
        preferredDate,
        secondChoiceDate,
        timeWindows,
        timezone,
        callMode,
        callPhone: defaultPhone,
        callNote,
        dpdpConsent,
      });
    }
  }, [defaultPhone]);

  const minDate = getTomorrowDateInTimezone(timezone);

  const updateState = (updates: Partial<CallingSlotData>) => {
    onChange({
      anyTimeWorks,
      preferredDate,
      secondChoiceDate,
      timeWindows,
      timezone,
      callMode,
      callPhone,
      callNote,
      dpdpConsent,
      ...updates,
    });
  };

  const toggleTimeWindow = (winId: string) => {
    if (timeWindows.includes(winId)) {
      if (timeWindows.length > 1) {
        updateState({ timeWindows: timeWindows.filter((id) => id !== winId) });
      }
    } else {
      updateState({ timeWindows: [...timeWindows, winId] });
    }
  };

  const CALL_MODES = [
    { value: 'whatsapp', label: 'WhatsApp Call (Audio / Video)', icon: '💬' },
    { value: 'google-meet', label: 'Google Meet (Link sent via Email)', icon: '🎥' },
    { value: 'phone', label: 'Direct Cellular Phone Call', icon: '📞' },
  ];

  const baseInputStyles =
    'w-full h-[50px] bg-white border border-[#E7E3DA] hover:border-[#DEDED7] focus:border-[#5D2E85] focus:ring-2 focus:ring-[#5D2E85]/15 rounded-xl px-4 font-sans text-sm text-[#111111] placeholder-[#5F5F5A]/45 transition-all duration-200 focus:outline-none';
  const errorInputStyles = 'border-[#991B1B] focus:border-[#991B1B] focus:ring-[#991B1B]/15 text-[#991B1B]';

  return (
    <div className="space-y-7">
      {/* ── Prominent Request Disclaimer Banner ── */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#F1E7F9]/70 border border-[#5D2E85]/20 space-y-1 text-left">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#5D2E85] animate-pulse" />
          <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#5D2E85]">
            Kickoff Strategy Session · Request Booking
          </h4>
        </div>
        <p className="text-xs sm:text-sm font-sans text-[#111111] leading-relaxed pt-1">
          This is a slot <strong>request</strong>, not a confirmed calendar booking.{' '}
          <span className="text-[#5D2E85] font-semibold">{CALL_CONFIRMATION_SLA}</span>
        </p>
      </div>

      {/* ── "Any time works" Toggle ── */}
      <div className="p-4 rounded-2xl bg-[#F7F6F2] border border-[#E7E3DA] flex items-center justify-between gap-4">
        <div className="space-y-0.5">
          <label htmlFor="anytime-toggle" className="text-xs sm:text-sm font-sans font-bold text-[#111111] cursor-pointer">
            Any time works (Flexible availability)
          </label>
          <p className="text-[11px] text-[#5F5F5A] leading-relaxed">
            I am flexible with scheduling. Contact me whenever your growth lead is ready for our review.
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer shrink-0">
          <input
            id="anytime-toggle"
            type="checkbox"
            checked={anyTimeWorks}
            onChange={(e) => updateState({ anyTimeWorks: e.target.checked })}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-[#E7E3DA] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#5D2E85]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5D2E85]" />
        </label>
      </div>

      {/* ── Timezone & Date Grid ── */}
      <div className={`space-y-5 ${anyTimeWorks ? 'opacity-40 pointer-events-none' : ''}`}>
        
        {/* Timezone Selector */}
        <div>
          <label htmlFor="slot-timezone" className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#111111] mb-1.5">
            Your Timezone <span className="text-[#5D2E85]">*</span>
          </label>
          <div className="relative">
            <select
              id="slot-timezone"
              value={timezone}
              onChange={(e) => updateState({ timezone: e.target.value })}
              className={`${baseInputStyles} appearance-none pr-10 cursor-pointer`}
            >
              {POPULAR_TIMEZONES.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#5F5F5A]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <p className="text-[11px] text-[#5F5F5A] pt-1">
            Slot windows are converted and displayed according to this timezone and DST rules.
          </p>
        </div>

        {/* Date Pickers (Preferred & Second Choice) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="slot-pref-date" className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#111111] mb-1.5">
              Preferred Date <span className="text-[#5D2E85]">*</span>
            </label>
            <input
              id="slot-pref-date"
              type="date"
              min={minDate}
              value={preferredDate}
              onChange={(e) => updateState({ preferredDate: e.target.value })}
              className={`${baseInputStyles} ${errors.preferredDate ? errorInputStyles : ''}`}
            />
            {errors.preferredDate ? (
              <p className="text-xs text-[#991B1B] font-medium pt-1" aria-live="polite">
                {errors.preferredDate}
              </p>
            ) : (
              <p className="text-[11px] text-[#5F5F5A] pt-1">Earliest available date is tomorrow ({minDate}).</p>
            )}
          </div>

          <div>
            <label htmlFor="slot-second-date" className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#111111] mb-1.5">
              Alternative Date (Optional)
            </label>
            <input
              id="slot-second-date"
              type="date"
              min={minDate}
              value={secondChoiceDate}
              onChange={(e) => updateState({ secondChoiceDate: e.target.value })}
              className={baseInputStyles}
            />
            <p className="text-[11px] text-[#5F5F5A] pt-1">Backup date if your primary choice is fully booked.</p>
          </div>
        </div>

        {/* Time Window Chips */}
        <div>
          <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#111111] mb-2">
            Preferred Time Windows <span className="text-[#5D2E85]">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {TIME_SLOT_WINDOWS.map((win) => {
              const isSelected = timeWindows.includes(win.id);
              const { mainLabel, subLabel } = formatTimeWindowLabel(win, timezone, preferredDate);

              return (
                <button
                  key={win.id}
                  type="button"
                  role="button"
                  aria-pressed={isSelected}
                  onClick={() => toggleTimeWindow(win.id)}
                  className={`p-3.5 rounded-2xl text-left border transition-all duration-200 cursor-pointer active:scale-98 ${
                    isSelected
                      ? 'bg-[#F1E7F9] border-[#5D2E85] text-[#111111] shadow-xs ring-2 ring-[#5D2E85]/15'
                      : 'bg-white border-[#E7E3DA] hover:border-[#5D2E85]/40 text-[#5F5F5A] hover:text-[#111111]'
                  }`}
                >
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-xs font-sans font-bold uppercase tracking-wider">
                      {mainLabel}
                    </span>
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-[#5D2E85] text-white' : 'border border-[#DEDED7]'
                      }`}
                    >
                      {isSelected && (
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                  </div>
                  <span className="block text-[11px] font-sans text-[#5F5F5A] leading-tight pt-0.5">
                    {subLabel || win.istHours}
                  </span>
                </button>
              );
            })}
          </div>
          {errors.timeWindows && (
            <p className="text-xs text-[#991B1B] font-medium pt-1.5" aria-live="polite">
              {errors.timeWindows}
            </p>
          )}
        </div>
      </div>

      {/* ── Call Mode & Contact Details ── */}
      <div className="pt-4 border-t border-[#E7E3DA] space-y-5">
        <div>
          <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#111111] mb-2">
            Preferred Call Mode <span className="text-[#5D2E85]">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {CALL_MODES.map((mode) => {
              const isSelected = callMode === mode.value;
              return (
                <button
                  key={mode.value}
                  type="button"
                  role="button"
                  aria-pressed={isSelected}
                  onClick={() => updateState({ callMode: mode.value })}
                  className={`p-3.5 rounded-2xl text-left border transition-all duration-200 cursor-pointer active:scale-98 ${
                    isSelected
                      ? 'bg-[#F1E7F9] border-[#5D2E85] text-[#5D2E85] shadow-xs'
                      : 'bg-white border-[#E7E3DA] hover:border-[#5D2E85]/40 text-[#5F5F5A]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{mode.icon}</span>
                    <span className="text-xs font-sans font-semibold leading-tight">{mode.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Best Contact Number */}
        <div>
          <label htmlFor="slot-phone" className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#111111] mb-1.5">
            Best Contact Number for Call <span className="text-[#5D2E85]">*</span>
          </label>
          <input
            id="slot-phone"
            type="tel"
            value={callPhone}
            onChange={(e) => updateState({ callPhone: e.target.value })}
            placeholder="e.g. 98200 12345 or +91 98200 12345"
            className={`${baseInputStyles} ${errors.callPhone ? errorInputStyles : ''}`}
          />
          {errors.callPhone ? (
            <p className="text-xs text-[#991B1B] font-medium pt-1" aria-live="polite">
              {errors.callPhone}
            </p>
          ) : (
            <p className="text-[11px] text-[#5F5F5A] pt-1">
              Pre-filled from your profile information. Feel free to adjust if someone else is attending.
            </p>
          )}
        </div>

        {/* Optional Note */}
        <div>
          <label htmlFor="slot-note" className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#111111] mb-1.5">
            Additional Call Agenda or Notes (Optional)
          </label>
          <textarea
            id="slot-note"
            rows={2}
            value={callNote}
            onChange={(e) => updateState({ callNote: e.target.value })}
            placeholder="Any specific colleagues joining, agenda topics, or special considerations..."
            className="w-full bg-white border border-[#E7E3DA] hover:border-[#DEDED7] focus:border-[#5D2E85] focus:ring-2 focus:ring-[#5D2E85]/15 rounded-xl p-3 font-sans text-xs sm:text-sm text-[#111111] placeholder-[#5F5F5A]/45 leading-relaxed resize-y"
          />
        </div>
      </div>

      {/* ── DPDP Consent Checkbox ── */}
      <div className="pt-2">
        <label className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F6F2] border border-[#E7E3DA] hover:border-[#5D2E85]/40 transition-colors cursor-pointer select-none">
          <input
            id="slot-dpdp-consent"
            type="checkbox"
            checked={dpdpConsent === true}
            onChange={(e) => updateState({ dpdpConsent: e.target.checked })}
            className="w-4 h-4 mt-0.5 rounded border-[#E7E3DA] text-[#5D2E85] focus:ring-[#5D2E85]/20 cursor-pointer"
          />
          <div className="space-y-1 text-xs text-[#5F5F5A] leading-relaxed">
            <span className="font-semibold text-[#111111] block">
              Data Protection &amp; Intake Authorization <span className="text-[#5D2E85]">*</span>
            </span>
            <span>
              I confirm the information provided is accurate and authorize Juntoz to review these business assets and schedule a kickoff consultation under strict confidentiality (Digital Personal Data Protection Act, 2023).
            </span>
          </div>
        </label>
        {errors.dpdpConsent && (
          <p className="text-xs text-[#991B1B] font-medium pt-1.5" aria-live="polite">
            {errors.dpdpConsent}
          </p>
        )}
      </div>

      {/* Step Level Error */}
      {error && (
        <p className="text-xs text-[#991B1B] font-medium flex items-center gap-1.5 pt-1" aria-live="polite">
          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};
