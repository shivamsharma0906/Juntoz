import React from 'react';
import type { PlatformId } from '../types/onboarding';

interface PlatformOption {
  id: PlatformId;
  title: string;
  badge: string;
  desc: string;
  scope: string;
  iconPath: string;
}

const PLATFORMS: PlatformOption[] = [
  {
    id: 'google-ads',
    title: 'Google Ads Acquisition Engine',
    badge: 'Search & Maps Dominance',
    desc: 'High-intent search keywords, Local 3-Pack Maps optimization, Display retargeting, and YouTube discovery funnels.',
    scope: 'Ideal for bridal makeup artists, clinics, and salons capturing commercial clients actively searching to book today.',
    iconPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', // Search lens monochrome
  },
  {
    id: 'meta-ads',
    title: 'Meta & Instagram Performance Funnel',
    badge: 'Scroll-Stopping Reels & DMs',
    desc: 'Visual storytelling, algorithm-friendly 9:16 reels, Meta lookalike audiences, and high-converting 1-tap WhatsApp booking flows.',
    scope: 'Ideal for aesthetic beauty brands, luxury hair studios, masterclasses, and transformation portfolios.',
    iconPath: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z', // Video camera monochrome
  },
  {
    id: 'merchant-center',
    title: 'Google Merchant Center & Feeds',
    badge: 'Shopping Sync & Policy Resolution',
    desc: 'E-commerce shopping feed configuration, Free Product Listings sync, and fixing complex Misrepresentation policy disapprovals.',
    scope: 'Ideal for D2C skincare, cosmetics, and salon product lines selling directly to pan-India consumers.',
    iconPath: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z', // Shopping bag monochrome
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
    <div className="space-y-4 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#5F5F5A] block mb-2">
          CONCIERGE ONBOARDING · SELECT PLATFORM
        </span>
        <h1
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#111111] leading-tight mb-3"
        >
          Which engine are we building for you?
        </h1>
        <p className="font-sans text-sm sm:text-base text-[#5F5F5A] max-w-xl mx-auto leading-relaxed">
          Select your primary marketing channel below to begin your tailored onboarding dossier. Your progress is saved automatically.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {PLATFORMS.map((p) => {
          const isSelected = selectedPlatform === p.id;

          return (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelectPlatform(p.id)}
              className={`group relative text-left p-6 sm:p-7 rounded-2xl bg-white border transition-all duration-300 cursor-pointer shadow-subtle hover:shadow-card hover:-translate-y-0.5 ${
                isSelected
                  ? 'border-[#5D2E85] bg-[#F1E7F9]/30 ring-1 ring-[#5D2E85]'
                  : 'border-[#E7E3DA] hover:border-[#5D2E85]/50 hover:bg-[#F1E7F9]/15'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Monochrome Icon Container */}
                  <div
                    className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#5D2E85] text-white border-[#5D2E85]'
                        : 'bg-[#F7F6F2] text-[#111111] border-[#E7E3DA] group-hover:border-[#5D2E85]/30 group-hover:text-[#5D2E85]'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={p.iconPath} />
                    </svg>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#5D2E85] bg-[#F1E7F9] px-2.5 py-0.5 rounded-full border border-[#5D2E85]/15">
                        {p.badge}
                      </span>
                    </div>

                    <h2
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      className="text-xl sm:text-2xl font-normal text-[#111111] group-hover:text-[#5D2E85] transition-colors leading-snug"
                    >
                      {p.title}
                    </h2>

                    <p className="font-sans text-xs sm:text-sm text-[#111111]/85 leading-relaxed pt-0.5">
                      {p.desc}
                    </p>

                    <p className="font-sans text-[11px] text-[#5F5F5A] leading-relaxed pt-1">
                      {p.scope}
                    </p>
                  </div>
                </div>

                {/* Subtle Nudging Arrow */}
                <div className="pt-2 text-[#5D2E85] shrink-0 transition-transform duration-200 group-hover:translate-x-1.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="text-center pt-6">
        <p className="text-xs text-[#5F5F5A]">
          Need multi-platform synchronization? You can complete one flow now, and your business details will automatically carry over for the next platform.
        </p>
      </div>
    </div>
  );
};
