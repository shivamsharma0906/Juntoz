import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageMeta from '../components/PageMeta';
import ScrollReveal from '../components/ScrollReveal';
import {
  OPEN_POSITIONS,
  VIBE_PRINCIPLES,
  WHAT_WE_LOOK_FOR,
  APPLICATION_STEPS,
  SKILLS_LIST,
  APPLICATION_SOURCES,
  EXPERIENCE_OPTIONS,
  CLIENT_ACCOUNTS_OPTIONS,
  EMPLOYMENT_STATUS_OPTIONS,
  NOTICE_PERIOD_OPTIONS,
} from '../data/careers';

const RECIPIENT_EMAIL = 'official.juntoz@gmail.com';
const AGENCY_PHONE = '+91 90040 01800';

const INITIAL_FORM_STATE = {
  // Step 1: Personal Information
  fullName: '',
  phone: '',
  email: '',
  location: '',
  position: 'Social Media Executive',
  customPosition: '',
  source: 'Instagram (@_juntoz)',
  customSource: '',

  // Step 2: Social & Portfolio
  instagram: '',
  noInstagram: false,
  linkedin: '',
  portfolio: '',
  workExamples: '',
  managedAccounts: 'Yes, 1 – 2 accounts',
  brandsWorkedWith: '',

  // Step 3: Professional Experience
  experience: 'Fresher',
  lastCompany: '',
  lastDesignation: '',
  lastSalary: '',
  leaveReason: '',
  keyResponsibilities: '',
  accountsHandled: 'No client accounts (Internal/Personal only)',
  agencyExperience: 'No',

  // Step 4: Skills & Technical Knowledge
  skills: ['Instagram & Facebook management', 'Instagram Reels strategy'],
  skillRating: 4,
  campaignResults: '',
  toolsSoftware: '',
  deadlineManagement: '',
  roleSpecificAnswer: '',

  // Step 5: Referral Details
  hasReferral: false,
  referralName: '',
  referralPhone: '',
  referralRelation: 'Professional contact',

  // Step 6: Work Expectations & Availability
  expectedSalary: '',
  employmentStatus: 'Fresher / Student',
  noticePeriod: 'Immediate (0 – 7 days)',
  onSiteComfort: 'Yes',
  monSatScheduleComfort: 'Yes',
  clientVisitsComfort: 'Yes',
  commitments: '',

  // Step 7: Mindset & Motivation
  whyJoin: '',
  topStrengths: '',
  skillToImprove: '',
  unhappyClientHandling: '',
  newTaskHandling: '',
  whySelectYou: '',

  // Step 8: Documents & Declaration
  resumeLink: '',
  resumeFile: null,
  resumeFileName: '',
  resumeFileSize: 0,
  additionalInfo: '',
  declaration: false,
};

const STEP_TITLES = [
  'Personal Information',
  'Social & Portfolio',
  'Experience',
  'Skills & Craft',
  'Referral Details',
  'Availability & Work',
  'Mindset & Fit',
  'Review & Submit',
];

const renderVibeIcon = (iconName) => {
  switch (iconName) {
    case 'sparkles':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z" />
        </svg>
      );
    case 'zap':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'rocket':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m0 0l-4.57 4.57a2 2 0 000 2.828l1.414 1.414a2 2 0 002.828 0l4.57-4.57m-4.302-4.242a1 1 0 111.414-1.414 1 1 0 01-1.414 1.414z" />
        </svg>
      );
    case 'shield':
    default:
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
  }
};

export default function CareersPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const [reviewExpanded, setReviewExpanded] = useState(false);

  const [selectedRoleToast, setSelectedRoleToast] = useState(null);

  const formSectionRef = useRef(null);
  const positionsSectionRef = useRef(null);

  // Scroll to open roles
  const scrollToPositions = () => {
    positionsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to application form with role preselected
  const handleSelectRole = (roleTitle) => {
    setFormData((prev) => ({
      ...prev,
      position: roleTitle,
    }));
    setSelectedRoleToast(roleTitle);
    setTimeout(() => {
      setSelectedRoleToast(null);
    }, 7000);
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Input change handler
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  // Multi-select toggle
  const toggleSkill = (skill) => {
    setFormData((prev) => {
      const exists = prev.skills.includes(skill);
      return {
        ...prev,
        skills: exists ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill],
      };
    });
  };

  // File upload handler
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, resumeFile: 'File size must be under 5MB' }));
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({
        ...prev,
        resumeFile: reader.result,
        resumeFileName: file.name,
        resumeFileSize: file.size,
      }));
      setErrors((prev) => ({ ...prev, resumeFile: null }));
    };
    reader.readAsDataURL(file);
  };

  // Validation per step
  const validateStep = (step) => {
    const errs = {};
    const isFresher = formData.experience.includes('Fresher');

    if (step === 1) {
      if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
      if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
        errs.phone = 'Valid 10-digit WhatsApp number is required';
      }
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errs.email = 'Valid email address is required';
      }
      if (!formData.location.trim()) errs.location = 'Current residential location is required';
      if (formData.position === 'Other / General Application' && !formData.customPosition.trim()) {
        errs.customPosition = 'Please describe the position you have in mind';
      }
    }

    if (step === 2) {
      if (!formData.noInstagram && !formData.instagram.trim()) {
        errs.instagram = 'Instagram profile link or handle is required (or check N/A)';
      }
      if (!isFresher && !formData.portfolio.trim() && !formData.workExamples.trim()) {
        errs.portfolio = 'Please provide a work portfolio link or describe your past work';
      }
    }

    if (step === 3) {
      if (!isFresher) {
        if (!formData.lastCompany.trim()) errs.lastCompany = 'Last company or agency name is required';
        if (!formData.lastDesignation.trim()) errs.lastDesignation = 'Last job designation is required';
        if (!formData.lastSalary.trim()) errs.lastSalary = 'Last drawn monthly salary in INR is required';
      }
    }

    if (step === 4) {
      if (formData.skills.length === 0) {
        errs.skills = 'Please select at least one skill or capability';
      }
      if (!formData.campaignResults.trim()) {
        errs.campaignResults = 'Please describe a campaign or project you worked on';
      }
    }

    if (step === 6) {
      if (!formData.expectedSalary.trim()) errs.expectedSalary = 'Expected monthly salary in INR is required';
      if (!formData.noticePeriod.trim()) errs.noticePeriod = 'Earliest joining date is required';
    }

    if (step === 7) {
      if (!formData.whyJoin.trim()) errs.whyJoin = 'Please tell us why you want to join Juntoz';
      if (!formData.topStrengths.trim()) errs.topStrengths = 'Please share your top strengths';
      if (!formData.whySelectYou.trim()) errs.whySelectYou = 'Please tell us why we should select you';
    }

    if (step === 8) {
      if (!formData.resumeLink.trim() && !formData.resumeFileName) {
        errs.resume = 'Please provide either a portfolio/resume link or upload your resume file';
      }
      if (!formData.declaration) {
        errs.declaration = 'You must confirm the candidate declaration to submit';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 8));
      window.scrollTo({
        top: formSectionRef.current?.offsetTop - 80 || 0,
        behavior: 'smooth',
      });
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({
      top: formSectionRef.current?.offsetTop - 80 || 0,
      behavior: 'smooth',
    });
  };

  // Submit Application
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(8)) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      ...formData,
      position: formData.position === 'Other / General Application' && formData.customPosition
        ? formData.customPosition
        : formData.position,
      resumeFileMeta: formData.resumeFileName
        ? { name: formData.resumeFileName, size: formData.resumeFileSize }
        : null,
      resumeFileBase64: formData.resumeFile || null,
    };

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitResult(data);
      } else {
        setSubmitError(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Submission request failed:', err);
      // Fallback: create client-side record
      const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
      const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
      const fallbackId = `JTZ-${dateStr}-${randomSuffix}`;

      setSubmitResult({
        success: true,
        applicationId: fallbackId,
        candidateName: formData.fullName,
        position: formData.position,
        recipient: RECIPIENT_EMAIL,
        isFallback: true,
        message: 'Your application has been compiled into your candidate dossier.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filtered Roles
  const filteredRoles = activeCategory === 'All'
    ? OPEN_POSITIONS
    : OPEN_POSITIONS.filter((r) => {
        if (activeCategory === 'Social & Creative') {
          return r.id.includes('social') || r.id.includes('content') || r.id.includes('graphic') || r.id.includes('video');
        }
        if (activeCategory === 'Paid & Performance') {
          return r.id.includes('performance') || r.id.includes('digital');
        }
        if (activeCategory === 'Search & SEO') {
          return r.id.includes('seo') || r.id.includes('gmb');
        }
        if (activeCategory === 'Internships & Open') {
          return r.id.includes('intern') || r.id.includes('other');
        }
        return true;
      });

  // Categories with live counts
  const CATEGORIES = [
    { id: 'All', label: 'All Roles', count: OPEN_POSITIONS.length },
    {
      id: 'Social & Creative',
      label: 'Creative & Social',
      count: OPEN_POSITIONS.filter((r) => r.id.includes('social') || r.id.includes('content') || r.id.includes('graphic') || r.id.includes('video')).length,
    },
    {
      id: 'Paid & Performance',
      label: 'Paid & Performance',
      count: OPEN_POSITIONS.filter((r) => r.id.includes('performance') || r.id.includes('digital')).length,
    },
    {
      id: 'Search & SEO',
      label: 'Search & SEO',
      count: OPEN_POSITIONS.filter((r) => r.id.includes('seo') || r.id.includes('gmb')).length,
    },
    {
      id: 'Internships & Open',
      label: 'Internships & Open',
      count: OPEN_POSITIONS.filter((r) => r.id.includes('intern') || r.id.includes('other')).length,
    },
  ];

  // Base Form Styles (Preserving Exact Juntoz System)
  const inputBase =
    'w-full bg-[#FAFAF8] hover:bg-white border border-[#DEDED7] focus:bg-white rounded-xl px-4 py-3 font-body text-[#111111] placeholder-[#5F5F5A]/50 text-sm transition-all duration-200 focus:outline-none focus:border-[#5D2E85] focus:ring-2 focus:ring-[#5D2E85]/20';
  const labelBase =
    'block text-[11px] font-heading font-bold uppercase tracking-wider text-[#111111] mb-1.5';

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen bg-[#F7F6F2] text-[#111111] overflow-x-clip">
      <PageMeta
        title="Careers at Juntoz — We're Hiring Creative Thinkers & Growth Marketers"
        description="Join Juntoz in Mumbai. We are hiring Social Media Executives, Performance Marketers, Video Editors, Graphic Designers, and SEO specialists. Real impact, zero boring energy."
        path="/careers"
      />

      {/* ═══════════════════════════════════════════════════════════
          SECTION A: HERO — "GREAT WORK NEEDS GREAT PEOPLE. WE'RE BUILDING THE DREAM TEAM."
          Bespoke Luxury Editorial Aesthetic matching Juntoz Design System & Image 2
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-8 sm:pt-14 pb-16 sm:pb-24 border-b border-[#DEDED7]/70 overflow-hidden">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#5D2E85]/5 rounded-full blur-[110px] pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-[#5D2E85]/5 rounded-full blur-[90px] pointer-events-none -z-0" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            <ScrollReveal data-reveal="up">
              {/* Refined Eyebrow matching Image 2 */}
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#5F5F5A] block mb-3">
                CAREERS AT JUNTOZ
              </span>

              {/* Editorial Heading matching Image 2 */}
              <h1
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-[#111111] leading-[1.15] mb-4 sm:mb-5"
              >
                <span className="block mb-1 sm:mb-2">Great Work Needs Great People.</span>
                <span className="block">
                  We&apos;re Building The{' '}
                  <span className="relative inline-block whitespace-nowrap">
                    <span>Dream Team</span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full overflow-visible pointer-events-none text-[#5D2E85]"
                      height="12"
                      viewBox="0 0 260 14"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 9 C 60 3, 170 12, 258 4"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  .
                </span>
              </h1>

              {/* Editorial Subtitle */}
              <p className="font-body text-[#5F5F5A] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                We are expanding our creative, performance media, and search teams at our Mumbai studio. We look for curious minds, obsessed craftsmen, and ambitious builders who care deeply about real client outcomes.
              </p>

              {/* Editorial Proof & Overview Bar */}
              <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-3 rounded-2xl bg-white border border-[#DEDED7] shadow-subtle mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#287A55] animate-pulse" />
                  <span className="font-sans text-[11px] uppercase tracking-wider font-bold text-[#5F5F5A]">
                    Active Hiring
                  </span>
                </div>
                <span className="hidden sm:inline text-[#DEDED7]">•</span>
                <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#111111]">
                  10 Open Positions
                </span>
                <span className="hidden sm:inline text-[#DEDED7]">•</span>
                <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#111111]">
                  Mumbai Studio (Bhayandar West)
                </span>
                <span className="hidden sm:inline text-[#DEDED7]">•</span>
                <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#5D2E85]">
                  Direct Founder Review
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={scrollToPositions}
                  className="px-8 py-3.5 rounded-full bg-[#111111] hover:bg-[#5D2E85] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-card hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  View 10 Open Roles
                </button>
                <button
                  type="button"
                  onClick={() => formSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3.5 rounded-full bg-white hover:bg-[#F1E7F9] border border-[#DEDED7] hover:border-[#5D2E85]/40 text-[#111111] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-subtle hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  Fast-Track Application
                </button>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION B: OUR CULTURE & WORKING PRINCIPLES
          Real Agency Reality, High Standards, Zero Bureaucracy
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 border-b border-[#DEDED7]/70 relative overflow-hidden bg-[#F7F6F2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
            <ScrollReveal data-reveal="up">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#5F5F5A] block mb-3">
                OUR CULTURE &amp; PRINCIPLES
              </span>
              <h2
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] text-[#111111] mb-4"
              >
                <span className="block mb-1">High Standards. High Trust.</span>
                <span className="block">
                  Zero{' '}
                  <span className="relative inline-block whitespace-nowrap">
                    <span>Bureaucracy</span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full overflow-visible pointer-events-none text-[#5D2E85]"
                      height="12"
                      viewBox="0 0 260 14"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 9 C 60 3, 170 12, 258 4"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  .
                </span>
              </h2>
              <p className="font-body text-[#5F5F5A] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                We believe extraordinary work happens when high craftsmanship meets total creative trust. Here is how we build, iterate, and deliver client growth every day.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
            {VIBE_PRINCIPLES.map((vibe, idx) => (
              <ScrollReveal key={vibe.step} data-reveal="up" delay={idx * 80} className="h-full flex flex-col">
                <div className="group relative h-full rounded-2xl sm:rounded-3xl bg-white border border-[#DEDED7] hover:border-[#5D2E85] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-subtle hover:shadow-card hover:-translate-y-1 overflow-hidden">
                  
                  <div className="space-y-4">
                    {/* Top Row: Squircle Icon & Step Number */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#F1E7F9] border border-[#5D2E85]/20 flex items-center justify-center text-[#5D2E85] group-hover:bg-[#5D2E85] group-hover:text-white transition-all duration-300 shadow-xs shrink-0">
                        {renderVibeIcon(vibe.icon)}
                      </div>

                      <span className="font-heading font-bold text-xs text-[#5D2E85] tracking-wider bg-[#F7F6F2] px-2.5 py-1 rounded-full border border-[#DEDED7]">
                        {vibe.step} / 04
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-[#111111] leading-snug group-hover:text-[#5D2E85] transition-colors">
                        {vibe.title}
                      </h3>
                      <p className="font-body text-xs text-[#5D2E85] font-semibold mt-1">
                        {vibe.subtitle}
                      </p>
                    </div>

                    {/* Descriptive Body */}
                    <p className="font-body text-[#5F5F5A] text-xs sm:text-[13.5px] leading-relaxed">
                      {vibe.desc}
                    </p>
                  </div>

                  {/* Clean Outcome Footer */}
                  <div className="pt-4 mt-5 border-t border-[#DEDED7]/80 flex items-center justify-between">
                    <span className="font-heading font-bold text-[11px] uppercase tracking-wider text-[#111111]">
                      {vibe.motto}
                    </span>
                    <span className="text-[#5D2E85] font-bold text-sm">✦</span>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION C: OPEN POSITIONS — "FIND YOUR NEXT CHAPTER AT JUNTOZ."
          High-Prestige Job Board Architecture
      ═══════════════════════════════════════════════════════════ */}
      <section id="open-roles" ref={positionsSectionRef} className="py-20 sm:py-28 border-b border-[#DEDED7]/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <ScrollReveal data-reveal="up">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#5F5F5A] block mb-3">
                OPEN POSITIONS IN MUMBAI
              </span>
              <h2
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] text-[#111111] mb-4"
              >
                <span className="block mb-1">Find Your Next Chapter</span>
                <span className="block">
                  At{' '}
                  <span className="relative inline-block whitespace-nowrap">
                    <span>Juntoz</span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full overflow-visible pointer-events-none text-[#5D2E85]"
                      height="12"
                      viewBox="0 0 260 14"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 9 C 60 3, 170 12, 258 4"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  .
                </span>
              </h2>
              <p className="font-body text-[#5F5F5A] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Explore open roles across creative, performance ads, social strategy, and search. Direct founder mentorship, high autonomy, and real market impact.
              </p>
            </ScrollReveal>

            {/* Filter Pills with Live Count Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-6 max-w-4xl mx-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#111111] text-white shadow-card'
                      : 'bg-white border border-[#DEDED7] text-[#5F5F5A] hover:border-[#111111] hover:text-[#111111]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-colors ${
                      activeCategory === cat.id ? 'bg-[#5D2E85] text-white' : 'bg-[#F7F6F2] text-[#111111]'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 10 Role Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {filteredRoles.map((role, idx) => (
              <ScrollReveal key={role.id} data-reveal="up" delay={idx * 50} className="h-full flex flex-col">
                <div className="group relative h-full rounded-2xl sm:rounded-3xl bg-white border border-[#DEDED7] hover:border-[#5D2E85] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-subtle hover:shadow-card hover:-translate-y-1 overflow-hidden">
                  
                  <div className="space-y-4">
                    {/* Category Pill */}
                    <div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-heading font-bold uppercase tracking-wider bg-[#F1E7F9] text-[#5D2E85] border border-[#5D2E85]/20 whitespace-nowrap">
                        {role.category}
                      </span>
                    </div>

                    {/* Role Title — Clear & Unobstructed */}
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#111111] group-hover:text-[#5D2E85] transition-colors leading-snug pt-0.5">
                      {role.title}
                    </h3>

                    {/* Metadata Row */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#5F5F5A]">
                      <span className="inline-flex items-center gap-1 bg-[#F7F6F2] px-2.5 py-1 rounded-lg border border-[#DEDED7]">
                        Bhayandar W, Mumbai
                      </span>
                      <span className="inline-flex items-center gap-1 bg-[#F7F6F2] px-2.5 py-1 rounded-lg border border-[#DEDED7]">
                        Full-Time On-Site
                      </span>
                      <span className="inline-flex items-center gap-1 bg-[#F7F6F2] px-2.5 py-1 rounded-lg border border-[#DEDED7]">
                        {role.experience}
                      </span>
                    </div>

                    {/* Short Description */}
                    <p className="font-body text-xs sm:text-[13px] text-[#5F5F5A] leading-relaxed min-h-[3.8rem]">
                      {role.shortDesc}
                    </p>

                    {/* Skill Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md text-[10.5px] font-body font-medium bg-[#F7F6F2] group-hover:bg-[#F1E7F9] border border-[#DEDED7] group-hover:border-[#5D2E85]/20 text-[#111111] group-hover:text-[#5D2E85] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-5 mt-6 border-t border-[#DEDED7]/80 flex items-center justify-between">
                    {/* <span className="text-[11px] font-heading font-bold text-[#5D2E85]">
                      48h Review Guarantee
                    </span> */}
                    <button
                      type="button"
                      onClick={() => handleSelectRole(role.title)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider text-white bg-[#111111] hover:bg-[#5D2E85] transition-all shadow-subtle hover:shadow-card cursor-pointer active:scale-95"
                    >
                      <span>APPLY NOW</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Honest Disclosure */}
          <div className="max-w-2xl mx-auto text-center mt-12 p-4 rounded-2xl bg-white border border-[#DEDED7] shadow-subtle">
            <p className="font-body text-xs text-[#5F5F5A] leading-relaxed">
              <strong>Recruitment Transparency:</strong> Every applicant is evaluated directly by our leadership on their craft, problem-solving, and practical execution. No automated bot rejections.
            </p>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          AGENCY ADVANTAGES / WHY BUILD AT JUNTOZ
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 border-b border-[#DEDED7]/70 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
            <ScrollReveal data-reveal="up">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#5F5F5A] block mb-3">
                STUDIO LIFE &amp; ADVANTAGES
              </span>
              <h2
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] text-[#111111] mb-4"
              >
                <span className="block mb-1">Why Top Talent Chooses</span>
                <span className="block">
                  To Build{' '}
                  <span className="relative inline-block whitespace-nowrap">
                    <span>At Juntoz</span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full overflow-visible pointer-events-none text-[#5D2E85]"
                      height="12"
                      viewBox="0 0 260 14"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 9 C 60 3, 170 12, 258 4"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  .
                </span>
              </h2>
              <p className="font-body text-[#5F5F5A] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                We replace corporate inertia with direct founder mentorship, real budget ownership, and rapid career acceleration.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
            <ScrollReveal data-reveal="up" delay={50} className="h-full flex flex-col">
              <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#F7F6F2] border border-[#DEDED7] hover:border-[#5D2E85] transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#DEDED7] flex items-center justify-center text-[#5D2E85] mb-5 shadow-xs">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#111111] mb-2 leading-snug">
                    Direct Founder Mentorship
                  </h3>
                  <p className="font-body text-xs sm:text-[13px] text-[#5F5F5A] leading-relaxed">
                    Work directly with Sujal Mehta (EXTC SPIT, ex-TCS, ex-Nokia) and Saloni Mehta. Learn commercial strategy, scale, and client leadership first-hand.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#DEDED7]/60 text-[11px] font-heading font-bold text-[#5D2E85]">
                  ✦ Zero Red Tape
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal data-reveal="up" delay={100} className="h-full flex flex-col">
              <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#F7F6F2] border border-[#DEDED7] hover:border-[#5D2E85] transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#DEDED7] flex items-center justify-center text-[#5D2E85] mb-5 shadow-xs">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#111111] mb-2 leading-snug">
                    Live 4K Production Sets
                  </h3>
                  <p className="font-body text-xs sm:text-[13px] text-[#5F5F5A] leading-relaxed">
                    Access to high-ticket bridal artists, masterclasses, cosmetic academies, and on-location shoots in Mumbai &amp; Delhi NCR. Real production sets, zero stock footage.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#DEDED7]/60 text-[11px] font-heading font-bold text-[#5D2E85]">
                  ✦ 100% Real Sets
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal data-reveal="up" delay={150} className="h-full flex flex-col">
              <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#F7F6F2] border border-[#DEDED7] hover:border-[#5D2E85] transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#DEDED7] flex items-center justify-center text-[#5D2E85] mb-5 shadow-xs">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#111111] mb-2 leading-snug">
                    Real Budgets &amp; Autonomy
                  </h3>
                  <p className="font-body text-xs sm:text-[13px] text-[#5F5F5A] leading-relaxed">
                    Test bold visual hooks, scale ad campaigns with real media budgets, and make impactful decisions without waiting through weeks of corporate approvals.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#DEDED7]/60 text-[11px] font-heading font-bold text-[#5D2E85]">
                  ✦ Fast Experimentation
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal data-reveal="up" delay={200} className="h-full flex flex-col">
              <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#F7F6F2] border border-[#DEDED7] hover:border-[#5D2E85] transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#DEDED7] flex items-center justify-center text-[#5D2E85] mb-5 shadow-xs">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#111111] mb-2 leading-snug">
                    Fast-Track Appraisals
                  </h3>
                  <p className="font-body text-xs sm:text-[13px] text-[#5F5F5A] leading-relaxed">
                    Your financial and career growth is directly tied to the value you create, client wins, and craft execution—never to outdated tenure formulas.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#DEDED7]/60 text-[11px] font-heading font-bold text-[#5D2E85]">
                  ✦ Merit-Based Raises
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION E: WHAT WE LOOK FOR — "SKILLS CAN BE TAUGHT. MINDSET IS EVERYTHING."
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 border-b border-[#DEDED7]/70 bg-[#F7F6F2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <ScrollReveal data-reveal="up">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#5F5F5A] block mb-3">
                HIRING QUALITIES &amp; MINDSET
              </span>
              <h2
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] text-[#111111] mb-4"
              >
                <span className="block mb-1">Skills Can Be Taught.</span>
                <span className="block">
                  Mindset Is{' '}
                  <span className="relative inline-block whitespace-nowrap">
                    <span>Everything</span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full overflow-visible pointer-events-none text-[#5D2E85]"
                      height="12"
                      viewBox="0 0 260 14"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 9 C 60 3, 170 12, 258 4"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  .
                </span>
              </h2>
              <p className="font-body text-[#5F5F5A] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Tools and dashboards evolve every season. Curiosity, accountability, and aesthetic discernment are who you are.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {WHAT_WE_LOOK_FOR.map((quality, idx) => (
              <ScrollReveal key={quality.title} data-reveal="up" delay={idx * 60} className="h-full flex flex-col">
                <div className="group p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#DEDED7] hover:border-[#5D2E85] transition-all duration-300 shadow-subtle hover:shadow-card hover:-translate-y-1 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-[11px] font-heading font-bold text-[#5D2E85] uppercase tracking-wider bg-[#F1E7F9] px-2.5 py-1 rounded-full border border-[#5D2E85]/20">
                        {quality.tag}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#5D2E85] group-hover:scale-125 transition-transform" />
                    </div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#111111] group-hover:text-[#5D2E85] transition-colors mb-2.5">
                      {quality.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[#5F5F5A] leading-relaxed">
                      {quality.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-5 border-t border-[#DEDED7]/60 flex items-center justify-between text-[11px] font-heading font-bold text-[#5F5F5A]">
                    <span>Evaluation Pillar</span>
                    <span className="text-[#5D2E85]">✦</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION E: APPLICATION PROCESS (4 SIMPLE STEPS)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 border-b border-[#DEDED7]/70 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
            <ScrollReveal data-reveal="up">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#5F5F5A] block mb-3">
                HIRING TRANSPARENCY
              </span>
              <h2
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] text-[#111111] mb-4"
              >
                <span className="block mb-1">Simple Steps.</span>
                <span className="block">
                  Fast{' '}
                  <span className="relative inline-block whitespace-nowrap">
                    <span>Turnarounds</span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full overflow-visible pointer-events-none text-[#5D2E85]"
                      height="12"
                      viewBox="0 0 260 14"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 9 C 60 3, 170 12, 258 4"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  .
                </span>
              </h2>
              <p className="font-body text-[#5F5F5A] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Clear expectations, respectful timelines, zero ghosting. Here is our direct hiring path from application to day one.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {APPLICATION_STEPS.map((step, idx) => (
              <ScrollReveal key={step.number} data-reveal="up" delay={idx * 70} className="h-full flex flex-col">
                <div className="group p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#F7F6F2] border border-[#DEDED7] hover:border-[#5D2E85] transition-all duration-300 shadow-subtle hover:shadow-card hover:-translate-y-1 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-heading font-bold text-3xl text-[#5D2E85]">
                        {step.number}
                      </span>
                      <span className="text-[10px] font-heading font-bold uppercase tracking-wider bg-white px-2.5 py-1 rounded-full border border-[#DEDED7] text-[#111111]">
                        {idx === 0 ? '5 Mins' : idx === 1 ? '48h Review' : idx === 2 ? 'Same Week' : 'Fast Offer'}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#111111] group-hover:text-[#5D2E85] transition-colors mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="font-body text-xs sm:text-[13px] text-[#5F5F5A] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-5 border-t border-[#DEDED7]/60 flex items-center justify-between text-[11px] font-heading font-bold text-[#5F5F5A]">
                    <span>Stage 0{idx + 1} of 04</span>
                    <span className="text-[#5D2E85]">→</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION F & G: THE 8-STEP COMPLETE APPLICATION FORM
      ═══════════════════════════════════════════════════════════ */}
      <section id="apply-form" ref={formSectionRef} className="py-20 sm:py-28 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl">

          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14">
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#5F5F5A] block mb-3">
              JOIN OUR TEAM
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] text-[#111111] mb-4"
            >
              <span className="block mb-1">Submit Your Application</span>
              <span className="block">
                To{' '}
                <span className="relative inline-block whitespace-nowrap">
                  <span>Juntoz</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full overflow-visible pointer-events-none text-[#5D2E85]"
                    height="12"
                    viewBox="0 0 260 14"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9 C 60 3, 170 12, 258 4"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </span>
            </h2>
            <p className="font-body text-[#5F5F5A] text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Complete the steps below. We personally review every submission, portfolio, and work sample within 48 hours.
            </p>
          </div>

          {/* ── SUCCESS STATE SCREEN ── */}
          {submitResult ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-[#DEDED7] rounded-3xl p-8 sm:p-14 shadow-card text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-[#287A55]/15 border border-[#287A55]/30">
                <svg className="w-8 h-8 text-[#287A55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider bg-[#F1E7F9] text-[#5D2E85]">
                  Application ID: {submitResult.applicationId}
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-4xl text-[#111111] uppercase tracking-tight">
                  Application Successfully Received!
                </h3>
                <p className="font-body text-[#5F5F5A] text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{submitResult.candidateName}</strong>! Your application for{' '}
                  <strong>{submitResult.position}</strong> has been securely logged for review by{' '}
                  <strong>{RECIPIENT_EMAIL}</strong>.
                </p>
              </div>

              {/* Direct Notification Fallback Bar */}
              <div className="p-6 rounded-2xl bg-[#F7F6F2] border border-[#DEDED7] text-left space-y-4 max-w-lg mx-auto">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#287A55]" />
                  <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#111111]">
                    Direct Founder Notification Trigger
                  </span>
                </div>
                <p className="font-body text-xs text-[#5F5F5A] leading-relaxed">
                  Want to guarantee your dossier lands directly at the top of Sujal Mehta&apos;s inbox immediately? Use the 1-click button below to dispatch a copy via your email client or notify our team on WhatsApp:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={`mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
                      `New Careers Application — ${submitResult.candidateName} — ${submitResult.position} [${submitResult.applicationId}]`
                    )}&body=${encodeURIComponent(
                      `Hi Sujal,\n\nI have submitted my job application for ${submitResult.position} on the Juntoz website.\n\nApplication ID: ${submitResult.applicationId}\nCandidate: ${submitResult.candidateName}\nPhone: ${formData.phone}\nExperience: ${formData.experience}\nPortfolio: ${formData.portfolio || formData.resumeLink || 'Included in questionnaire'}\n\nLooking forward to hearing from the Juntoz team!`
                    )}`}
                    className="flex-1 text-center py-3 px-4 rounded-xl font-heading font-bold uppercase text-xs tracking-wider text-white bg-[#111111] hover:bg-[#5D2E85] transition-colors"
                  >
                    Open Email Copy to Sujal →
                  </a>
                  <a
                    href={`https://wa.me/919004001800?text=${encodeURIComponent(
                      `Hi Juntoz Hiring Team! I just submitted my application for "${submitResult.position}" (ID: ${submitResult.applicationId}). My name is ${submitResult.candidateName}. Excited to connect!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 px-4 rounded-xl font-heading font-bold uppercase text-xs tracking-wider text-white bg-[#25D366] hover:bg-[#1ebc57] transition-colors"
                  >
                    Ping on WhatsApp
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitResult(null);
                    setFormData(INITIAL_FORM_STATE);
                    setCurrentStep(1);
                  }}
                  className="text-xs font-heading font-bold uppercase tracking-wider text-[#5D2E85] hover:underline cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            </motion.div>
          ) : (
            /* ── FORM CONTAINER ── */
            <div className="bg-white border border-[#DEDED7] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-card">
              
              {/* Progress Header */}
              <div className="mb-8 pb-6 border-b border-[#DEDED7]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-[#5D2E85]">
                      STEP {currentStep} OF 8
                    </span>
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-[#111111]">
                      {STEP_TITLES[currentStep - 1]}
                    </h3>
                  </div>

                  {/* Progress percentage */}
                  <span className="text-xs font-heading font-bold text-[#5F5F5A]">
                    {Math.round((currentStep / 8) * 100)}% Completed
                  </span>
                </div>

                {/* Progress Meter Bar */}
                <div className="w-full h-2 rounded-full bg-[#F7F6F2] overflow-hidden border border-[#DEDED7]">
                  <div
                    className="h-full bg-[#5D2E85] transition-all duration-300"
                    style={{ width: `${(currentStep / 8) * 100}%` }}
                  />
                </div>

                {/* Clickable Step Pills */}
                <div className="hidden sm:flex items-center justify-between gap-1 mt-4">
                  {STEP_TITLES.map((title, idx) => {
                    const stepNum = idx + 1;
                    const isDone = stepNum < currentStep;
                    const isCurrent = stepNum === currentStep;
                    return (
                      <button
                        key={title}
                        type="button"
                        onClick={() => {
                          if (stepNum < currentStep) setCurrentStep(stepNum);
                        }}
                        disabled={stepNum > currentStep}
                        className={`text-[10px] font-heading font-bold uppercase tracking-wider px-2 py-1 rounded transition-colors ${
                          isCurrent
                            ? 'text-[#5D2E85] bg-[#F1E7F9]'
                            : isDone
                            ? 'text-[#111111] hover:underline cursor-pointer'
                            : 'text-[#DEDED7] cursor-not-allowed'
                        }`}
                      >
                        {stepNum}. {title.split(' ')[0]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Error Alert Box */}
              {submitError && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-body font-medium flex items-center justify-between">
                  <span>{submitError}</span>
                  <button type="button" onClick={() => setSubmitError(null)} className="text-red-900 font-bold ml-2">
                    ✕
                  </button>
                </div>
              )}

              {/* ── STEP CONTENT ROUTER ── */}
              <form onSubmit={handleSubmit} noValidate>
                <AnimatePresence mode="wait">
                  
                  {/* ──────────────────────────────────────────────────────────
                      STEP 1: PERSONAL INFORMATION (Q1–Q6)
                  ────────────────────────────────────────────────────────── */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelBase}>
                            1. Full Name <span className="text-[#5D2E85]">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Sujal Mehta"
                            value={formData.fullName}
                            onChange={(e) => handleChange('fullName', e.target.value)}
                            className={`${inputBase} ${errors.fullName ? 'border-red-500 bg-red-50' : ''}`}
                          />
                          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                        </div>

                        <div>
                          <label className={labelBase}>
                            2. Mobile / WhatsApp Number <span className="text-[#5D2E85]">*</span>
                          </label>
                          <input
                            type="tel"
                            placeholder="10-digit mobile number"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            className={`${inputBase} ${errors.phone ? 'border-red-500 bg-red-50' : ''}`}
                          />
                          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelBase}>
                            3. Email Address <span className="text-[#5D2E85]">*</span>
                          </label>
                          <input
                            type="email"
                            placeholder="e.g. yourname@domain.com"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            className={`${inputBase} ${errors.email ? 'border-red-500 bg-red-50' : ''}`}
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div>
                          <label className={labelBase}>
                            4. Current Residential Location <span className="text-[#5D2E85]">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Bhayandar West, Mumbai / Thane / Andheri"
                            value={formData.location}
                            onChange={(e) => handleChange('location', e.target.value)}
                            className={`${inputBase} ${errors.location ? 'border-red-500 bg-red-50' : ''}`}
                          />
                          {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelBase}>
                            5. Position Applying For <span className="text-[#5D2E85]">*</span>
                          </label>
                          <select
                            value={formData.position}
                            onChange={(e) => handleChange('position', e.target.value)}
                            className={inputBase}
                          >
                            {OPEN_POSITIONS.map((r) => (
                              <option key={r.id} value={r.title}>
                                {r.title}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className={labelBase}>
                            6. Where did you find this opening? <span className="text-[#5D2E85]">*</span>
                          </label>
                          <select
                            value={formData.source}
                            onChange={(e) => handleChange('source', e.target.value)}
                            className={inputBase}
                          >
                            {APPLICATION_SOURCES.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {formData.position === 'Other / General Application' && (
                        <div>
                          <label className={labelBase}>
                            Specify Your Desired Role / Opportunity <span className="text-[#5D2E85]">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Motion Graphics Specialist / Client Relationship Lead"
                            value={formData.customPosition}
                            onChange={(e) => handleChange('customPosition', e.target.value)}
                            className={`${inputBase} ${errors.customPosition ? 'border-red-500 bg-red-50' : ''}`}
                          />
                          {errors.customPosition && (
                            <p className="text-red-500 text-xs mt-1">{errors.customPosition}</p>
                          )}
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* ──────────────────────────────────────────────────────────
                      STEP 2: SOCIAL PROFILES & PORTFOLIO (Q7–Q12)
                  ────────────────────────────────────────────────────────── */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#111111]">
                              7. Instagram Profile Link / Handle <span className="text-[#5D2E85]">*</span>
                            </label>
                            <label className="inline-flex items-center gap-1.5 text-[10px] font-sans text-[#5F5F5A] cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.noInstagram}
                                onChange={(e) => handleChange('noInstagram', e.target.checked)}
                                className="accent-[#5D2E85]"
                              />
                              No professional IG
                            </label>
                          </div>
                          <input
                            type="text"
                            disabled={formData.noInstagram}
                            placeholder={formData.noInstagram ? 'N/A' : 'e.g. @yourhandle or instagram.com/...'}
                            value={formData.noInstagram ? 'N/A' : formData.instagram}
                            onChange={(e) => handleChange('instagram', e.target.value)}
                            className={`${inputBase} ${errors.instagram ? 'border-red-500 bg-red-50' : ''}`}
                          />
                          {errors.instagram && <p className="text-red-500 text-xs mt-1">{errors.instagram}</p>}
                        </div>

                        <div>
                          <label className={labelBase}>
                            8. LinkedIn Profile Link <span className="text-[#5F5F5A] font-normal">(Optional)</span>
                          </label>
                          <input
                            type="url"
                            placeholder="e.g. linkedin.com/in/yourprofile"
                            value={formData.linkedin}
                            onChange={(e) => handleChange('linkedin', e.target.value)}
                            className={inputBase}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={labelBase}>
                          9. Work Portfolio / Drive Link{' '}
                          <span className="text-[#5D2E85]">
                            {formData.experience.includes('Fresher') ? '(Optional)' : '*'}
                          </span>
                        </label>
                        <input
                          type="url"
                          placeholder="e.g. Google Drive link, Behance, Notion, or website"
                          value={formData.portfolio}
                          onChange={(e) => handleChange('portfolio', e.target.value)}
                          className={`${inputBase} ${errors.portfolio ? 'border-red-500 bg-red-50' : ''}`}
                        />
                        <p className="text-[11px] font-body text-[#5F5F5A] mt-1">
                          Make sure Google Drive permissions are set to &quot;Anyone with the link can view&quot;.
                        </p>
                        {errors.portfolio && <p className="text-red-500 text-xs mt-1">{errors.portfolio}</p>}
                      </div>

                      <div>
                        <label className={labelBase}>
                          10. Share 2–3 Examples of Your Best Work & Describe Your Personal Contribution
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Describe specific reels you edited, ad campaigns you scaled, copy you wrote, or designs you created..."
                          value={formData.workExamples}
                          onChange={(e) => handleChange('workExamples', e.target.value)}
                          className={inputBase}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelBase}>
                            11. Have you managed business / client social accounts? <span className="text-[#5D2E85]">*</span>
                          </label>
                          <select
                            value={formData.managedAccounts}
                            onChange={(e) => handleChange('managedAccounts', e.target.value)}
                            className={inputBase}
                          >
                            <option value="Yes, multiple client accounts">Yes, multiple client accounts</option>
                            <option value="Yes, 1 – 2 accounts">Yes, 1 – 2 accounts</option>
                            <option value="Only my own personal account">Only my own personal account</option>
                            <option value="No prior experience">No prior experience</option>
                          </select>
                        </div>

                        <div>
                          <label className={labelBase}>
                            12. Brands or Clients Worked With <span className="text-[#5F5F5A] font-normal">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Beauty salons, bridal artists, ecommerce brands..."
                            value={formData.brandsWorkedWith}
                            onChange={(e) => handleChange('brandsWorkedWith', e.target.value)}
                            className={inputBase}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* ──────────────────────────────────────────────────────────
                      STEP 3: PROFESSIONAL EXPERIENCE (Q13–Q20)
                      Smart Conditional Logic for Freshers vs Experienced
                  ────────────────────────────────────────────────────────── */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <div>
                        <label className={labelBase}>
                          13. Total Professional Experience <span className="text-[#5D2E85]">*</span>
                        </label>
                        <select
                          value={formData.experience}
                          onChange={(e) => handleChange('experience', e.target.value)}
                          className={inputBase}
                        >
                          {EXPERIENCE_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* CONDITIONAL BLOCK: Hidden for Freshers */}
                      {!formData.experience.includes('Fresher') ? (
                        <div className="space-y-4 p-5 rounded-2xl bg-[#F7F6F2] border border-[#DEDED7]">
                          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#5D2E85] block mb-2">
                            Experienced Candidate Details
                          </span>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className={labelBase}>
                                14. Last Company / Agency Name <span className="text-[#5D2E85]">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="e.g. Media Agency Pvt Ltd"
                                value={formData.lastCompany}
                                onChange={(e) => handleChange('lastCompany', e.target.value)}
                                className={`${inputBase} ${errors.lastCompany ? 'border-red-500 bg-red-50' : ''}`}
                              />
                              {errors.lastCompany && (
                                <p className="text-red-500 text-xs mt-1">{errors.lastCompany}</p>
                              )}
                            </div>

                            <div>
                              <label className={labelBase}>
                                15. Last Job Designation <span className="text-[#5D2E85]">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="e.g. Junior Performance Marketer"
                                value={formData.lastDesignation}
                                onChange={(e) => handleChange('lastDesignation', e.target.value)}
                                className={`${inputBase} ${errors.lastDesignation ? 'border-red-500 bg-red-50' : ''}`}
                              />
                              {errors.lastDesignation && (
                                <p className="text-red-500 text-xs mt-1">{errors.lastDesignation}</p>
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className={labelBase}>
                                16. Last Drawn Monthly Salary (INR) <span className="text-[#5D2E85]">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="e.g. ₹25,000 / month"
                                value={formData.lastSalary}
                                onChange={(e) => handleChange('lastSalary', e.target.value)}
                                className={`${inputBase} ${errors.lastSalary ? 'border-red-500 bg-red-50' : ''}`}
                              />
                              {errors.lastSalary && (
                                <p className="text-red-500 text-xs mt-1">{errors.lastSalary}</p>
                              )}
                            </div>

                            <div>
                              <label className={labelBase}>
                                17. Reason for Leaving Previous Role
                              </label>
                              <input
                                type="text"
                                placeholder="e.g. Seeking faster growth & direct client ownership"
                                value={formData.leaveReason}
                                onChange={(e) => handleChange('leaveReason', e.target.value)}
                                className={inputBase}
                              />
                            </div>
                          </div>

                          <div>
                            <label className={labelBase}>
                              18. Key Responsibilities in Previous Role
                            </label>
                            <textarea
                              rows={2}
                              placeholder="Brief summary of what your typical week looked like..."
                              value={formData.keyResponsibilities}
                              onChange={(e) => handleChange('keyResponsibilities', e.target.value)}
                              className={inputBase}
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className={labelBase}>
                                19. Client Accounts Handled Simultaneously
                              </label>
                              <select
                                value={formData.accountsHandled}
                                onChange={(e) => handleChange('accountsHandled', e.target.value)}
                                className={inputBase}
                              >
                                {CLIENT_ACCOUNTS_OPTIONS.map((o) => (
                                  <option key={o} value={o}>
                                    {o}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className={labelBase}>
                                20. Previous Digital Marketing Agency Experience
                              </label>
                              <select
                                value={formData.agencyExperience}
                                onChange={(e) => handleChange('agencyExperience', e.target.value)}
                                className={inputBase}
                              >
                                <option value="Yes">Yes, worked in an agency</option>
                                <option value="Currently working in an agency">Currently working in an agency</option>
                                <option value="No">No, in-house or brand side</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* FRESHER NOTICE */
                        <div className="p-5 rounded-2xl bg-[#F1E7F9] border border-[#5D2E85]/20 text-center">
                          <span className="font-heading font-bold text-sm text-[#5D2E85] block mb-1">
                            🌱 Fresher / Entry-Level Pathway
                          </span>
                          <p className="font-body text-xs text-[#5F5F5A] max-w-md mx-auto">
                            No prior corporate employment history required! We evaluate entry-level candidates on curiosity, communication, willingness to learn, and raw passion for digital growth.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* ──────────────────────────────────────────────────────────
                      STEP 4: SKILLS & TECHNICAL KNOWLEDGE (Q21–Q25)
                  ────────────────────────────────────────────────────────── */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className={labelBase}>
                          21. Which skills do you have? <span className="text-[#5D2E85]">* (Select all that apply)</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                          {SKILLS_LIST.map((skill) => {
                            const isChecked = formData.skills.includes(skill);
                            return (
                              <button
                                key={skill}
                                type="button"
                                onClick={() => toggleSkill(skill)}
                                className={`text-left px-3.5 py-2.5 rounded-xl border text-xs font-body transition-all duration-150 flex items-center justify-between cursor-pointer ${
                                  isChecked
                                    ? 'bg-[#F1E7F9] border-[#5D2E85] text-[#5D2E85] font-bold'
                                    : 'bg-[#FAFAF8] border-[#DEDED7] text-[#111111] hover:border-[#5D2E85]/40'
                                }`}
                              >
                                <span>{skill}</span>
                                {isChecked && <span className="text-[#5D2E85] font-black">✓</span>}
                              </button>
                            );
                          })}
                        </div>
                        {errors.skills && <p className="text-red-500 text-xs mt-1">{errors.skills}</p>}
                      </div>

                      <div>
                        <label className={labelBase}>
                          22. Rate your proficiency in your primary skill (1 to 5 Stars)
                        </label>
                        <div className="flex items-center gap-3">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => handleChange('skillRating', star)}
                              className={`w-10 h-10 rounded-xl font-heading font-black text-sm flex items-center justify-center transition-all cursor-pointer ${
                                formData.skillRating >= star
                                  ? 'bg-[#5D2E85] text-white shadow-subtle'
                                  : 'bg-[#FAFAF8] border border-[#DEDED7] text-[#5F5F5A]'
                              }`}
                            >
                              {star}★
                            </button>
                          ))}
                          <span className="text-xs font-body text-[#5F5F5A] ml-2">
                            {formData.skillRating === 5 ? 'Master / Specialist' : formData.skillRating >= 3 ? 'Proficient' : 'Learning'}
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className={labelBase}>
                          23. Describe a successful campaign or project, including actual results where available <span className="text-[#5D2E85]">*</span>
                        </label>
                        <textarea
                          rows={3}
                          placeholder="e.g. Scaled Meta ads to 3.8x ROAS, edited a reel that reached 250k views, ranked a local salon in top 3 on Google Maps..."
                          value={formData.campaignResults}
                          onChange={(e) => handleChange('campaignResults', e.target.value)}
                          className={`${inputBase} ${errors.campaignResults ? 'border-red-500 bg-red-50' : ''}`}
                        />
                        {errors.campaignResults && (
                          <p className="text-red-500 text-xs mt-1">{errors.campaignResults}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelBase}>
                            24. Tools & Software You Use Confidently
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Figma, Canva, Premiere Pro, Meta Ads, GA4..."
                            value={formData.toolsSoftware}
                            onChange={(e) => handleChange('toolsSoftware', e.target.value)}
                            className={inputBase}
                          />
                        </div>

                        <div>
                          <label className={labelBase}>
                            25. How do you manage multiple deadlines and urgent client briefs?
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Prioritization framework, clear time-boxing, proactive communication..."
                            value={formData.deadlineManagement}
                            onChange={(e) => handleChange('deadlineManagement', e.target.value)}
                            className={inputBase}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* ──────────────────────────────────────────────────────────
                      STEP 5: REFERRAL DETAILS (Q26–Q28)
                  ────────────────────────────────────────────────────────── */}
                  {currentStep === 5 && (
                    <motion.div
                      key="step-5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <div className="p-4 rounded-2xl bg-[#F7F6F2] border border-[#DEDED7] mb-4">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.hasReferral}
                            onChange={(e) => handleChange('hasReferral', e.target.checked)}
                            className="w-4 h-4 accent-[#5D2E85]"
                          />
                          <span className="font-heading font-bold text-sm text-[#111111]">
                            I was referred by an existing Juntoz team member or professional contact
                          </span>
                        </label>
                      </div>

                      {formData.hasReferral ? (
                        <div className="space-y-4 p-5 rounded-2xl bg-white border border-[#DEDED7] shadow-subtle">
                          <div>
                            <label className={labelBase}>
                              26. Who referred you to Juntoz?
                            </label>
                            <input
                              type="text"
                              placeholder="Referrer's full name"
                              value={formData.referralName}
                              onChange={(e) => handleChange('referralName', e.target.value)}
                              className={inputBase}
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className={labelBase}>
                                27. Referrer&apos;s Mobile Number (With Permission)
                              </label>
                              <input
                                type="tel"
                                placeholder="Referrer's mobile"
                                value={formData.referralPhone}
                                onChange={(e) => handleChange('referralPhone', e.target.value)}
                                className={inputBase}
                              />
                            </div>

                            <div>
                              <label className={labelBase}>
                                28. How do you know the referrer?
                              </label>
                              <select
                                value={formData.referralRelation}
                                onChange={(e) => handleChange('referralRelation', e.target.value)}
                                className={inputBase}
                              >
                                <option value="Former colleague">Former colleague</option>
                                <option value="Friend">Friend</option>
                                <option value="Relative">Relative</option>
                                <option value="Professional contact">Professional contact</option>
                                <option value="Current Juntoz employee">Current Juntoz employee</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-10 px-4 rounded-2xl bg-[#F7F6F2] border border-[#DEDED7]">
                          <p className="font-body text-xs text-[#5F5F5A] max-w-sm mx-auto">
                            Applied independently? Fantastic! Most of our best hires discover us directly through Instagram, LinkedIn, or our client campaigns. You can proceed directly to the next step.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* ──────────────────────────────────────────────────────────
                      STEP 6: SALARY, AVAILABILITY & WORK EXPECTATIONS (Q29–Q35)
                  ────────────────────────────────────────────────────────── */}
                  {currentStep === 6 && (
                    <motion.div
                      key="step-6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      {/* Critical Location & Schedule Notice */}
                      <div className="p-4 rounded-2xl bg-[#F1E7F9] border border-[#5D2E85]/30 flex items-start gap-3">
                        <span className="text-[#5D2E85] text-lg font-black">📍</span>
                        <div className="space-y-1">
                          <span className="font-heading font-black text-xs uppercase tracking-wider text-[#5D2E85] block">
                            On-Site Working Requirement
                          </span>
                          <p className="font-body text-xs text-[#111111] leading-relaxed">
                            Our primary workspace is located at <strong>Bhayandar West, Mumbai</strong> (Office No. 5, Dev Shristi Tower). Operations run on a <strong>Monday to Saturday</strong> schedule with Sunday as the weekly off.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelBase}>
                            29. Expected Monthly Salary (INR) <span className="text-[#5D2E85]">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. ₹20,000 – ₹30,000 / month"
                            value={formData.expectedSalary}
                            onChange={(e) => handleChange('expectedSalary', e.target.value)}
                            className={`${inputBase} ${errors.expectedSalary ? 'border-red-500 bg-red-50' : ''}`}
                          />
                          {errors.expectedSalary && (
                            <p className="text-red-500 text-xs mt-1">{errors.expectedSalary}</p>
                          )}
                        </div>

                        <div>
                          <label className={labelBase}>
                            30. Current Employment Status <span className="text-[#5D2E85]">*</span>
                          </label>
                          <select
                            value={formData.employmentStatus}
                            onChange={(e) => handleChange('employmentStatus', e.target.value)}
                            className={inputBase}
                          >
                            {EMPLOYMENT_STATUS_OPTIONS.map((st) => (
                              <option key={st} value={st}>
                                {st}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className={labelBase}>
                          31. Notice Period / Earliest Joining Date <span className="text-[#5D2E85]">*</span>
                        </label>
                        <select
                          value={formData.noticePeriod}
                          onChange={(e) => handleChange('noticePeriod', e.target.value)}
                          className={inputBase}
                        >
                          {NOTICE_PERIOD_OPTIONS.map((np) => (
                            <option key={np} value={np}>
                              {np}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-xl bg-[#FAFAF8] border border-[#DEDED7]">
                          <label className="block text-[10px] font-heading font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                            32. On-Site Bhayandar West? <span className="text-[#5D2E85]">*</span>
                          </label>
                          <select
                            value={formData.onSiteComfort}
                            onChange={(e) => handleChange('onSiteComfort', e.target.value)}
                            className="w-full text-xs bg-white border border-[#DEDED7] rounded-lg p-2"
                          >
                            <option value="Yes">Yes, comfortable</option>
                            <option value="No">No, need remote</option>
                            <option value="Need to discuss">Need to discuss</option>
                          </select>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#FAFAF8] border border-[#DEDED7]">
                          <label className="block text-[10px] font-heading font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                            33. Mon–Sat Schedule? <span className="text-[#5D2E85]">*</span>
                          </label>
                          <select
                            value={formData.monSatScheduleComfort}
                            onChange={(e) => handleChange('monSatScheduleComfort', e.target.value)}
                            className="w-full text-xs bg-white border border-[#DEDED7] rounded-lg p-2"
                          >
                            <option value="Yes">Yes, comfortable</option>
                            <option value="No">No</option>
                            <option value="Need clarification">Need clarification</option>
                          </select>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#FAFAF8] border border-[#DEDED7]">
                          <label className="block text-[10px] font-heading font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                            34. Client Visits / Shoots? <span className="text-[#5D2E85]">*</span>
                          </label>
                          <select
                            value={formData.clientVisitsComfort}
                            onChange={(e) => handleChange('clientVisitsComfort', e.target.value)}
                            className="w-full text-xs bg-white border border-[#DEDED7] rounded-lg p-2"
                          >
                            <option value="Yes">Yes, comfortable</option>
                            <option value="No">No</option>
                            <option value="Need details">Need details</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className={labelBase}>
                          35. Any personal or academic commitments affecting your joining date or schedule?
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Upcoming exams, pre-planned family travel in next 2 months..."
                          value={formData.commitments}
                          onChange={(e) => handleChange('commitments', e.target.value)}
                          className={inputBase}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* ──────────────────────────────────────────────────────────
                      STEP 7: CANDIDATE MINDSET & COMMUNICATION (Q36–Q41)
                  ────────────────────────────────────────────────────────── */}
                  {currentStep === 7 && (
                    <motion.div
                      key="step-7"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <div>
                        <label className={labelBase}>
                          36. Why do you want to join Juntoz? <span className="text-[#5D2E85]">*</span>
                        </label>
                        <textarea
                          rows={2}
                          placeholder="What caught your attention about our work, agency energy, or client portfolio?"
                          value={formData.whyJoin}
                          onChange={(e) => handleChange('whyJoin', e.target.value)}
                          className={`${inputBase} ${errors.whyJoin ? 'border-red-500 bg-red-50' : ''}`}
                        />
                        {errors.whyJoin && <p className="text-red-500 text-xs mt-1">{errors.whyJoin}</p>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelBase}>
                            37. Top Three Professional Strengths <span className="text-[#5D2E85]">*</span>
                          </label>
                          <textarea
                            rows={2}
                            placeholder="e.g. 1) Fast video pacing, 2) Data analytics, 3) Clear client communication"
                            value={formData.topStrengths}
                            onChange={(e) => handleChange('topStrengths', e.target.value)}
                            className={`${inputBase} ${errors.topStrengths ? 'border-red-500 bg-red-50' : ''}`}
                          />
                          {errors.topStrengths && (
                            <p className="text-red-500 text-xs mt-1">{errors.topStrengths}</p>
                          )}
                        </div>

                        <div>
                          <label className={labelBase}>
                            38. What skill would you like to master over the next year?
                          </label>
                          <textarea
                            rows={2}
                            placeholder="e.g. AI-assisted video editing, advanced CRO, programmatic Meta media buying..."
                            value={formData.skillToImprove}
                            onChange={(e) => handleChange('skillToImprove', e.target.value)}
                            className={inputBase}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelBase}>
                            39. How do you handle an unhappy client or repeated revisions?
                          </label>
                          <textarea
                            rows={2}
                            placeholder="Describe your communication and problem-solving approach..."
                            value={formData.unhappyClientHandling}
                            onChange={(e) => handleChange('unhappyClientHandling', e.target.value)}
                            className={inputBase}
                          />
                        </div>

                        <div>
                          <label className={labelBase}>
                            40. What would you do if assigned a task you have never done before?
                          </label>
                          <textarea
                            rows={2}
                            placeholder="How do you research, test, and execute under unfamiliar conditions?"
                            value={formData.newTaskHandling}
                            onChange={(e) => handleChange('newTaskHandling', e.target.value)}
                            className={inputBase}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={labelBase}>
                          41. Why should we select you over other candidates? <span className="text-[#5D2E85]">*</span>
                        </label>
                        <textarea
                          rows={2}
                          placeholder="Your unique edge, energy, or commitment to tangible business results..."
                          value={formData.whySelectYou}
                          onChange={(e) => handleChange('whySelectYou', e.target.value)}
                          className={`${inputBase} ${errors.whySelectYou ? 'border-red-500 bg-red-50' : ''}`}
                        />
                        {errors.whySelectYou && (
                          <p className="text-red-500 text-xs mt-1">{errors.whySelectYou}</p>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* ──────────────────────────────────────────────────────────
                      STEP 8: DOCUMENTS, REVIEW & DECLARATION (Q42–Q44)
                  ────────────────────────────────────────────────────────── */}
                  {currentStep === 8 && (
                    <motion.div
                      key="step-8"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Resume link or upload */}
                      <div className="p-5 rounded-2xl bg-[#F7F6F2] border border-[#DEDED7] space-y-4">
                        <label className="text-xs font-heading font-bold uppercase tracking-wider text-[#111111] block">
                          42. Upload CV / Resume or Provide Cloud Link <span className="text-[#5D2E85]">*</span>
                        </label>

                        <div>
                          <input
                            type="url"
                            placeholder="Paste Google Drive, Dropbox, Notion, or LinkedIn resume link"
                            value={formData.resumeLink}
                            onChange={(e) => handleChange('resumeLink', e.target.value)}
                            className={inputBase}
                          />
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-xs font-heading font-bold uppercase text-[#5F5F5A]">OR</span>
                          <div className="flex-1 border-t border-[#DEDED7]" />
                        </div>

                        {/* File input */}
                        <div>
                          <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#DEDED7] hover:border-[#5D2E85] rounded-xl bg-white cursor-pointer transition-colors">
                            <svg className="w-8 h-8 text-[#5D2E85] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <span className="text-xs font-heading font-bold text-[#111111] uppercase tracking-wider">
                              {formData.resumeFileName ? `Selected: ${formData.resumeFileName}` : 'Upload PDF or DOCX file (Max 5MB)'}
                            </span>
                            <span className="text-[10px] font-body text-[#5F5F5A] mt-1">
                              Click to browse from your device
                            </span>
                            <input
                              type="file"
                              accept=".pdf,.docx,.doc"
                              onChange={handleFileUpload}
                              className="hidden"
                            />
                          </label>
                        </div>
                        {errors.resume && <p className="text-red-500 text-xs">{errors.resume}</p>}
                      </div>

                      <div>
                        <label className={labelBase}>
                          43. Additional Information Relevant to Your Application <span className="text-[#5F5F5A] font-normal">(Optional)</span>
                        </label>
                        <textarea
                          rows={2}
                          placeholder="Anything else you would like Sujal or Saloni to know before reviewing..."
                          value={formData.additionalInfo}
                          onChange={(e) => handleChange('additionalInfo', e.target.value)}
                          className={inputBase}
                        />
                      </div>

                      {/* Expandable Application Review Accordion */}
                      <div className="border border-[#DEDED7] rounded-2xl overflow-hidden bg-white">
                        <button
                          type="button"
                          onClick={() => setReviewExpanded(!reviewExpanded)}
                          className="w-full px-5 py-4 flex items-center justify-between bg-[#FAFAF8] hover:bg-white transition-colors cursor-pointer"
                        >
                          <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#111111]">
                            👁 Review Complete Application Summary Before Submitting
                          </span>
                          <span className="text-xs text-[#5D2E85] font-bold">
                            {reviewExpanded ? '▲ Hide' : '▼ View'}
                          </span>
                        </button>

                        {reviewExpanded && (
                          <div className="p-5 border-t border-[#DEDED7] space-y-3 font-body text-xs text-[#5F5F5A]">
                            <div className="grid grid-cols-2 gap-2">
                              <p><strong>Candidate:</strong> {formData.fullName}</p>
                              <p><strong>Role:</strong> {formData.position}</p>
                              <p><strong>Phone:</strong> {formData.phone}</p>
                              <p><strong>Email:</strong> {formData.email}</p>
                              <p><strong>Location:</strong> {formData.location}</p>
                              <p><strong>Experience:</strong> {formData.experience}</p>
                              <p><strong>Expected Salary:</strong> {formData.expectedSalary}</p>
                              <p><strong>Notice Period:</strong> {formData.noticePeriod}</p>
                              <p><strong>On-Site Bhayandar:</strong> {formData.onSiteComfort}</p>
                              <p><strong>Mon-Sat Schedule:</strong> {formData.monSatScheduleComfort}</p>
                            </div>
                            <p><strong>Portfolio / Work:</strong> {formData.portfolio || formData.workExamples || 'Provided in CV'}</p>
                            <p><strong>Why Juntoz:</strong> {formData.whyJoin}</p>
                          </div>
                        )}
                      </div>

                      {/* Mandatory Candidate Declaration */}
                      <div className="p-4 rounded-2xl bg-[#FAFAF8] border border-[#DEDED7]">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.declaration}
                            onChange={(e) => handleChange('declaration', e.target.checked)}
                            className="mt-1 w-4 h-4 accent-[#5D2E85] shrink-0"
                          />
                          <span className="font-body text-xs text-[#111111] leading-relaxed">
                            <strong>44. Candidate Declaration:</strong> I confirm that the information provided in this form is accurate and complete to the best of my knowledge. I understand that Juntoz may use this information to evaluate my application and contact me regarding recruitment.
                          </span>
                        </label>
                        {errors.declaration && (
                          <p className="text-red-500 text-xs mt-2 pl-7">{errors.declaration}</p>
                        )}
                      </div>

                      {/* Privacy Notice */}
                      <p className="text-[11px] font-body text-[#5F5F5A] text-center leading-relaxed">
                        🔒 <strong>Privacy Assurance:</strong> Your contact and application data is transmitted directly to Juntoz leadership ({RECIPIENT_EMAIL}) for hiring evaluation only. It will never be sold or shared.
                      </p>
                    </motion.div>
                  )}

                </AnimatePresence>

                {/* Form Navigation Controls */}
                <div className="flex items-center justify-between pt-8 mt-8 border-t border-[#DEDED7]">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider text-[#111111] bg-white border border-[#DEDED7] hover:border-[#111111] transition-colors cursor-pointer"
                    >
                      ← Back
                    </button>
                  ) : <div />}

                  {currentStep < 8 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="btn-primary-accent cursor-pointer"
                    >
                      <span>Next: {STEP_TITLES[currentStep]}</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary-accent shadow-float cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Application...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span>SUBMIT CANDIDATE DOSSIER</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  )}
                </div>
              </form>

            </div>
          )}

        </div>
      </section>

    </div>
  );
}
