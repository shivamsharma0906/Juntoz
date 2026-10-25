import { Link } from 'react-router-dom';

export default function ServiceCard({
  num,
  title,
  highlight,
  teaser,
  href = '/services',
  icon,
}) {
  return (
    <Link
      to={href}
      className="group h-full p-4 sm:p-5 lg:p-4 xl:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#DEDED7] hover:border-[#111111] transition-all duration-300 shadow-subtle hover:shadow-card hover:-translate-y-1 flex flex-col justify-between"
    >
      <div className="flex flex-col flex-1">
        {/* Top Row: Circular Icon Badge & Service Number */}
        <div className="flex items-center justify-between gap-1.5 sm:gap-2 mb-3.5 sm:mb-5 min-h-[38px] sm:min-h-[44px] xl:min-h-[48px]">
          {/* Circular Icon Container */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-9 lg:h-9 xl:w-11 xl:h-11 rounded-full bg-[#F1E7F9] border border-[#5D2E85]/20 flex items-center justify-center text-[#5D2E85] group-hover:bg-[#5D2E85] group-hover:text-white transition-all duration-300 shadow-xs shrink-0">
            {icon}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="font-heading font-black text-[11px] sm:text-xs text-[#5D2E85] tracking-wider shrink-0">
              {num}
            </span>
            {highlight && (
              <span className="hidden sm:inline-flex items-center justify-center px-2 xl:px-2.5 py-0.5 sm:py-1 rounded-full bg-white group-hover:bg-[#F7F6F2] border border-[#DEDED7] font-body font-bold text-[8.5px] sm:text-[9px] xl:text-[10px] text-[#111111] uppercase tracking-wider whitespace-nowrap transition-colors shadow-xs">
                {highlight}
              </span>
            )}
          </div>
        </div>

        {/* Card Title - Fixed min-height ensures identical baseline across all cards */}
        <h3 className="font-heading font-black text-xs sm:text-base lg:text-[15px] xl:text-lg text-[#111111] uppercase tracking-tight mb-2 sm:mb-2.5 group-hover:text-[#5D2E85] transition-colors leading-snug min-h-[2.4rem] sm:min-h-[2.8rem] lg:min-h-[3rem] xl:min-h-[3.25rem] flex items-start">
          {title}
        </h3>

        {/* Descriptive Body - Uniform min-height ensures identical vertical spacing */}
        <p className="hidden sm:block font-body text-xs sm:text-[13px] xl:text-sm text-[#5F5F5A] leading-relaxed mb-5 min-h-[3.8rem] sm:min-h-[4.2rem] xl:min-h-[4.5rem]">
          {teaser}
        </p>
      </div>

      {/* Understated Explore Link with Sliding Arrow - Pinned to bottom */}
      <div className="pt-3 sm:pt-4 border-t border-[#DEDED7]/80 flex items-center justify-between font-heading font-bold text-[10px] sm:text-xs uppercase tracking-wider text-[#111111] group-hover:text-[#5D2E85] transition-colors mt-auto">
        <span className="hidden sm:inline">Explore Deliverables</span>
        <span className="sm:hidden">Explore</span>
        <svg
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1.5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </Link>
  );
}
