import React from 'react';
import type { PlatformId } from '../types/onboarding';

interface PlatformOption {
  id: PlatformId;
  name: string;
  desc: string;
  logo: React.ReactNode;
}

const FacebookLogo = () => (
  <svg className="w-13 h-13 sm:w-14 sm:h-14 drop-shadow-sm" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="24" fill="#1877F2" />
    <path
      d="M33.3713 30.9375L34.4344 24H27.7781V19.5C27.7781 17.6006 28.7081 15.75 31.6913 15.75H34.7156V9.84375C34.7156 9.84375 31.9631 9.375 29.3306 9.375C23.8331 9.375 20.25 12.6975 20.25 18.7125V24H14.1562V30.9375H20.25V47.7084C21.4884 47.9025 22.7475 48 24 48C25.2525 48 26.5116 47.9025 27.75 47.7084V30.9375H33.3713Z"
      fill="white"
    />
  </svg>
);

const InstagramLogo = () => (
  <svg className="w-13 h-13 sm:w-14 sm:h-14 drop-shadow-sm" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ig-grad-picker" cx="20%" cy="105%" r="115%" fx="20%" fy="105%">
        <stop offset="0%" stopColor="#FED576" />
        <stop offset="10%" stopColor="#F47133" />
        <stop offset="50%" stopColor="#BC3081" />
        <stop offset="100%" stopColor="#4C63D2" />
      </radialGradient>
    </defs>
    <rect width="48" height="48" rx="14" fill="url(#ig-grad-picker)" />
    <rect x="10" y="10" width="28" height="28" rx="7.5" stroke="white" strokeWidth="2.8" fill="none" />
    <circle cx="24" cy="24" r="6.8" stroke="white" strokeWidth="2.8" fill="none" />
    <circle cx="32" cy="16" r="1.8" fill="white" />
  </svg>
);

const GoogleLogo = () => (
  <svg className="w-13 h-13 sm:w-14 sm:h-14 drop-shadow-sm" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M44.5 24.328c0-1.637-.145-3.212-.416-4.728H24v8.944h11.51c-.496 2.68-2.008 4.95-4.27 6.471v5.38h6.914C42.196 36.657 44.5 30.938 44.5 24.328z"
      fill="#4285F4"
    />
    <path
      d="M24 45.2c5.724 0 10.528-1.898 14.037-5.143l-6.914-5.38c-1.921 1.288-4.38 2.05-7.123 2.05-5.502 0-10.162-3.716-11.828-8.716H4.996v5.548C8.5 40.548 15.684 45.2 24 45.2z"
      fill="#34A853"
    />
    <path
      d="M12.172 28.011c-.426-1.288-.672-2.66-.672-4.011s.246-2.723.672-4.011V14.44H4.996C3.59 17.234 2.8 20.522 2.8 24s.79 6.766 2.196 9.56l7.176-5.549z"
      fill="#FBBC05"
    />
    <path
      d="M24 10.822c3.114 0 5.912 1.07 8.11 3.17l6.082-6.082C34.522 4.49 29.718 2.8 24 2.8 15.684 2.8 8.5 7.452 4.996 14.44l7.176 5.549c1.666-5 6.326-8.716 11.828-8.716z"
      fill="#EA4335"
    />
  </svg>
);

const PLATFORMS: PlatformOption[] = [
  {
    id: 'meta-ads',
    name: 'Meta ads',
    desc: 'Facebook, Instagram, Stories, Reels & Messenger campaigns',
    logo: <FacebookLogo />,
  },
  {
    id: 'instagram-handling',
    name: 'Instagram management and curation',
    desc: 'Aesthetic grid curation, viral reels editing, story funnels & DM lead qualification',
    logo: <InstagramLogo />,
  },
  {
    id: 'gmb',
    name: 'Google My Business & Local SEO(GMB)',
    desc: 'Local 3-Pack Maps ranking, geo-keyword SEO, Google Maps & review defense',
    logo: <GoogleLogo />,
  },
];

interface PlatformPickerProps {
  selectedPlatform: PlatformId | null;
  onSelectPlatform: (platformId: PlatformId) => void;
}

export const PlatformPicker: React.FC<PlatformPickerProps> = ({
  selectedPlatform,
  onSelectPlatform,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
      {/* ── Top Welcome Card (Minimalist with Orange Accent Bar on Left) ── */}
      <div className="relative bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 sm:p-8 text-center overflow-hidden mb-6 sm:mb-8">
        {/* Left Orange Accent Bar matching Image 1 */}
        <div
          className="absolute left-0 top-0 bottom-0 w-2.5 sm:w-3 bg-[#FF7A00] rounded-l-2xl"
          aria-hidden="true"
        />

        <div className="pl-2">
          <h1
            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" }}
            className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight mb-2"
          >
            Welcome
          </h1>
          <p
            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" }}
            className="text-xs sm:text-sm text-[#475569] font-normal max-w-lg mx-auto"
          >
            Please select the advertising platform you'd like to onboard for.
          </p>
        </div>
      </div>

      {/* ── Platform Selection Cards (3-Column Minimalist Grid) ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {PLATFORMS.map((p) => {
          const isSelected = selectedPlatform === p.id;

          return (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelectPlatform(p.id)}
              className={`group relative bg-white rounded-2xl border text-center p-6 sm:p-8 flex flex-col items-center justify-between transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#5D2E85]/30 ${
                isSelected
                  ? 'border-[#5D2E85] ring-2 ring-[#5D2E85]/20 shadow-md bg-[#FAF7FC]'
                  : 'border-[#E5E7EB] hover:border-[#CBD5E1]'
              }`}
            >
              {/* Real Platform Logo */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-5 shrink-0 transition-transform duration-200 group-hover:scale-105">
                {p.logo}
              </div>

              {/* Platform Title & Description */}
              <div className="flex-1 flex flex-col justify-center">
                <h2
                  style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" }}
                  className="text-base sm:text-lg font-bold text-[#0F172A] leading-snug mb-2 group-hover:text-[#5D2E85] transition-colors"
                >
                  {p.name}
                </h2>
                <p
                  style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" }}
                  className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal"
                >
                  {p.desc}
                </p>
              </div>

              {/* Active Selection Indicator */}
              {isSelected && (
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#5D2E85] bg-[#F1E7F9] px-3 py-1 rounded-full border border-[#5D2E85]/20">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Selected
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Subtle reassurance note */}
      <div className="text-center mt-8">
        <p
          style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" }}
          className="text-xs text-[#64748B]"
        >
          Your onboarding draft is auto-saved locally so you can resume at any step.
        </p>
      </div>
    </div>
  );
};
