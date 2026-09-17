import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { industries } from '../data/industries';

const CATEGORIES = [
  { id: 'all',       label: 'All' },
  { id: 'consumer',  label: 'Consumer' },
  { id: 'b2b',       label: 'B2B' },
  { id: 'local',     label: 'Local' },
  { id: 'trust-led', label: 'Trust-Led' },
];

export default function IndustryFinder({
  initialCategory = 'all',
  showHeader = true,
  title    = '36 Specialized Industry Playbooks',
  subtitle = 'Search or filter the industries we build full-funnel digital growth, SEO, performance advertising, and conversion engines for.',
}) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchInput, setSearchInput]           = useState('');
  const [debouncedSearch, setDebouncedSearch]   = useState('');

  /* 150 ms debounce */
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchInput.trim().toLowerCase()), 150);
    return () => clearTimeout(t);
  }, [searchInput]);

  const filteredIndustries = useMemo(() => {
    return industries.filter((item) => {
      const matchCat    = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch = !debouncedSearch
        || item.title.toLowerCase().includes(debouncedSearch)
        || item.description.toLowerCase().includes(debouncedSearch)
        || item.tag.toLowerCase().includes(debouncedSearch);
      return matchCat && matchSearch;
    });
  }, [selectedCategory, debouncedSearch]);

  const handleReset = () => {
    setSelectedCategory('all');
    setSearchInput('');
    setDebouncedSearch('');
  };

  return (
    <div id="industries-section" className="w-full">

      {/* ── OPTIONAL HEADER ── */}
      {showHeader && (
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-12">
          <h2 className="font-heading font-black text-[#111111] text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.06] mb-3">
            {title.includes('Industry') ? (
              <>
                {title.split('Industry')[0]}
                <span className="text-[#5D2E85]">Industry{title.split('Industry')[1]}</span>
              </>
            ) : title}
          </h2>
          {/* Full subtitle desktop only */}
          <p className="hidden sm:block font-sans text-[#5F5F5A] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
          {/* Short subtitle mobile */}
          <p className="sm:hidden font-sans text-[#5F5F5A] text-sm leading-relaxed">
            36 industry playbooks. One growth engine.
          </p>
        </div>
      )}

      {/* ── SEARCH BAR ── */}
      <div className="max-w-2xl mx-auto mb-4 sm:mb-7">
        <div className="relative flex items-center">
          <div className="absolute left-3.5 sm:left-4.5 pointer-events-none text-[#777772]">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search — salon, clinic, ecommerce, SaaS…"
            className="w-full pl-9 sm:pl-12 pr-10 py-3 sm:py-4 rounded-full bg-white border border-[#DEDED7] text-[#111111] placeholder-[#8A8A84] text-xs sm:text-base font-sans shadow-xs transition-all duration-200 focus:outline-none focus:border-[#5D2E85] focus:ring-4 focus:ring-[#5D2E85]/15"
          />
          {searchInput && (
            <button
              type="button"
              onClick={() => setSearchInput('')}
              aria-label="Clear search"
              className="absolute right-3 sm:right-4 p-1 rounded-full text-[#777772] hover:text-[#111111] hover:bg-black/5 transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* ── CATEGORY FILTER TABS ── */}
      {/* Mobile: compact pill row that scrolls horizontally */}
      <div className="mb-4 sm:mb-7 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-max sm:justify-center">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full font-heading font-semibold text-[11px] sm:text-sm tracking-wide transition-all duration-200 cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#5D2E85] text-white shadow-[0_4px_14px_rgba(93,46,133,0.3)]'
                    : 'bg-white border border-[#DEDED7] text-[#5F5F5A] hover:text-[#111111] hover:border-[#5D2E85]/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── RESULTS COUNT ROW ── */}
      <div className="flex items-center justify-between pb-3 mb-4 sm:mb-6 border-b border-[#DEDED7]/80 text-xs text-[#5F5F5A]">
        <span>
          Showing <strong className="text-[#111111]">{filteredIndustries.length}</strong> of{' '}
          <strong className="text-[#111111]">{industries.length}</strong> industries
        </span>
        {(selectedCategory !== 'all' || searchInput) && (
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-semibold text-[#5D2E85] hover:underline cursor-pointer"
          >
            Reset
          </button>
        )}
      </div>

      {/* ── INDUSTRY CARDS GRID ── */}
      {filteredIndustries.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 mb-10 sm:mb-12"
        >
          <AnimatePresence>
            {filteredIndustries.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-white border border-[#DEDED7] hover:border-[#5D2E85]/60 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 flex flex-col shadow-card hover:shadow-hover transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#F1E7F9] text-[#5D2E85] flex items-center justify-center text-base sm:text-2xl mb-2.5 sm:mb-4 group-hover:scale-105 transition-transform duration-300 shrink-0">
                  <span>{item.icon}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-[13px] sm:text-[1.125rem] text-[#111111] mb-1 sm:mb-2 group-hover:text-[#5D2E85] transition-colors leading-tight flex-1">
                  {item.title}
                </h3>

                {/* Description — desktop only */}
                <p className="hidden sm:block font-sans text-xs sm:text-sm text-[#5F5F5A] leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Bottom: tag + playbook — stacked on mobile, row on desktop */}
                <div className="pt-2.5 sm:pt-3 border-t border-[#F0EFEB] mt-auto">
                  {/* Mobile: tag on top, playbook link below */}
                  <div className="flex flex-col gap-1.5 sm:hidden">
                    <span className="inline-block text-[9px] font-mono font-bold uppercase tracking-wide text-[#5D2E85] bg-[#F1E7F9] border border-[#5D2E85]/25 px-2 py-0.5 rounded-full w-fit leading-tight">
                      {item.tag}
                    </span>
                    <a
                      href={`https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20am%20interested%20in%20your%20growth%20playbook%20for%20${encodeURIComponent(item.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-bold text-[#5D2E85] hover:underline"
                    >
                      Playbook →
                    </a>
                  </div>
                  {/* Desktop: side by side */}
                  <div className="hidden sm:flex items-center justify-between gap-2">
                    <span className="inline-flex items-center text-[10px] font-mono font-bold uppercase tracking-wider text-[#5D2E85] bg-[#F1E7F9] border border-[#5D2E85]/25 px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                    <a
                      href={`https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20am%20interested%20in%20your%20growth%20playbook%20for%20${encodeURIComponent(item.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-[#5F5F5A] hover:text-[#5D2E85] transition-colors shrink-0"
                    >
                      Playbook →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Empty state */
        <div className="py-12 sm:py-16 text-center bg-white rounded-2xl sm:rounded-3xl border border-[#DEDED7] p-6 sm:p-8 max-w-lg mx-auto mb-10 sm:mb-12 shadow-xs">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F1E7F9] text-[#5D2E85] flex items-center justify-center text-xl sm:text-2xl mx-auto mb-3 sm:mb-4">
            🔍
          </div>
          <h3 className="font-heading font-bold text-base sm:text-lg text-[#111111] mb-1.5 sm:mb-2">
            No industries match your search
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#5F5F5A] mb-4 sm:mb-5">
            Try adjusting your keywords or clearing the filter.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="px-5 py-2.5 rounded-full bg-[#5D2E85] text-white font-heading font-semibold text-xs uppercase tracking-wider shadow-sm hover:bg-[#4C266D] transition-colors cursor-pointer"
          >
            Show All Industries
          </button>
        </div>
      )}
    </div>
  );
}
