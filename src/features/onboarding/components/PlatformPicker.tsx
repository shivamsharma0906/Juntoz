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
    id: 'meta-ads',
    title: 'Meta & Instagram Performance Funnel',
    badge: 'Scroll-Stopping Reels & DMs',
    desc: 'Algorithm-friendly 9:16 reels, Meta audience targeting, and 1-tap WhatsApp booking funnels.',
    scope: 'Ideal for clinics, bridal artists & salons scaling high-ticket monthly bookings.',
    iconPath: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z', // Video camera
  },
  {
    id: 'instagram-handling',
    title: 'Instagram Handling & Curation',
    badge: 'Aesthetic Feed & Inbound DMs',
    desc: 'Signature aesthetic grid curation, viral reel editing, and daily story DM lead qualification.',
    scope: 'Ideal for beauty professionals seeking an authoritative luxury aesthetic.',
    iconPath: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', // Gallery photo
  },
  {
    id: 'gmb',
    title: 'Google My Business & Local Maps (GMB)',
    badge: 'Search & Maps Dominance',
    desc: 'Local 3-Pack Maps dominance, geo-keyword rankings, and automated 5-star review defense.',
    scope: 'Ideal for salons, clinics & studios capturing clients searching "near me" today.',
    iconPath: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', // Map Pin
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
      <div className="text-center mb-6 sm:mb-8">
        <span
          style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
          className="text-xs font-bold uppercase tracking-widest text-[#5F5F5A] block mb-2"
        >
          CONCIERGE ONBOARDING · SELECT PLATFORM
        </span>
        <h1
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          className="text-2xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#111111] leading-tight mb-2.5 sm:mb-3"
        >
          Which engine are we building for you?
        </h1>
        <p
          style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" }}
          className="font-body text-xs sm:text-base text-[#5F5F5A] max-w-xl mx-auto leading-relaxed"
        >
          Select your primary marketing channel below to begin your tailored onboarding dossier. Your progress is saved automatically.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        {PLATFORMS.map((p) => {
          const isSelected = selectedPlatform === p.id;

          return (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelectPlatform(p.id)}
              className={`group relative text-left p-4 sm:p-6 rounded-2xl bg-white border transition-all duration-200 cursor-pointer shadow-subtle hover:shadow-card hover:-translate-y-0.5 ${
                isSelected
                  ? 'border-[#5D2E85] bg-[#F1E7F9]/30 ring-1 ring-[#5D2E85]'
                  : 'border-[#E7E3DA] hover:border-[#5D2E85]/50 hover:bg-[#F1E7F9]/15'
              }`}
            >
              <div className="flex items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                  {/* Icon Container */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#5D2E85] text-white border-[#5D2E85]'
                        : 'bg-[#F7F6F2] text-[#111111] border-[#E7E3DA] group-hover:border-[#5D2E85]/30 group-hover:text-[#5D2E85]'
                    }`}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={p.iconPath} />
                    </svg>
                  </div>

                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
                        className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#5D2E85] bg-[#F1E7F9] px-2.5 py-0.5 rounded-full border border-[#5D2E85]/15"
                      >
                        {p.badge}
                      </span>
                    </div>

                    <h2
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      className="text-base sm:text-xl font-bold text-[#111111] group-hover:text-[#5D2E85] transition-colors leading-snug tracking-tight"
                    >
                      {p.title}
                    </h2>

                    <p
                      style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif" }}
                      className="font-body text-xs sm:text-[13px] text-[#4A4A45] leading-relaxed font-normal"
                    >
                      {p.desc}
                    </p>

                    <p
                      style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif" }}
                      className="font-body text-[11px] sm:text-xs text-[#6B6B65] leading-normal pt-0.5 font-normal"
                    >
                      {p.scope}
                    </p>
                  </div>
                </div>

                {/* Subtle Action Arrow */}
                <div className="text-[#5D2E85] shrink-0 transition-transform duration-200 group-hover:translate-x-1 pl-1">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="text-center pt-5">
        <p
          style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" }}
          className="font-body text-xs text-[#5F5F5A]"
        >
          Need multi-platform synchronization? You can complete one flow now, and your business details will automatically carry over for the next platform.
        </p>
      </div>
    </div>
  );
};
