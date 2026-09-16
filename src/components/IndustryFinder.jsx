import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { industries } from '../data/industries';

const CATEGORIES = [
  { id: 'all', label: 'All Industries' },
  { id: 'consumer', label: 'Consumer' },
  { id: 'b2b', label: 'B2B' },
  { id: 'local', label: 'Local' },
  { id: 'trust-led', label: 'Trust-Led' },
];

export default function IndustryFinder({ initialCategory = 'all', showHeader = true, title = '36 Specialized Industry Playbooks', subtitle = 'Search or filter the industries we build full-funnel digital growth, SEO, performance advertising, and conversion engines for.' }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchInput, setSearchInput] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // 150ms debounce for search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchInput.trim().toLowerCase());
    }, 150);
    return () => clearTimeout(timer);
  }, [searchInput]);

  // Combined AND filter
  const filteredIndustries = useMemo(() => {
    return industries.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        !debouncedSearch ||
        item.title.toLowerCase().includes(debouncedSearch) ||
        item.description.toLowerCase().includes(debouncedSearch) ||
        item.tag.toLowerCase().includes(debouncedSearch);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, debouncedSearch]);

  const handleReset = () => {
    setSelectedCategory('all');
    setSearchInput('');
    setDebouncedSearch('');
  };

  return (
    <div id="industries-section" className="w-full">
      {/* Optional Header */}
      {showHeader && (
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#DEDED7] bg-white shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#5D2E85]" />
            <span className="font-sans font-bold text-[#5F5F5A] text-[11px] tracking-widest uppercase">
              36 Growth Playbooks
            </span>
          </div>

          <h2 className="font-heading font-black text-[#111111] text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.06] mb-3">
            {title.includes('Industry') ? (
              <>
                {title.split('Industry')[0]}
                <span className="text-[#5D2E85]">Industry{title.split('Industry')[1]}</span>
              </>
            ) : (
              title
            )}
          </h2>

          <p className="font-sans text-[#5F5F5A] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      )}

      {/* ── Search Bar (Centered, 150ms debounce) ── */}
      <div className="max-w-2xl mx-auto mb-7">
        <div className="relative flex items-center">
          <div className="absolute left-4.5 pointer-events-none text-[#777772]">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search industries — ecommerce, clinic, salon, luxury, finance, SaaS..."
            className="w-full pl-12 pr-11 py-3.5 sm:py-4 rounded-full bg-white border border-[#DEDED7] text-[#111111] placeholder-[#8A8A84] text-sm sm:text-base font-sans shadow-xs transition-all duration-200 focus:outline-none focus:border-[#5D2E85] focus:ring-4 focus:ring-[#5D2E85]/15"
          />
          {searchInput && (
            <button
              type="button"
              onClick={() => setSearchInput('')}
              aria-label="Clear search"
              className="absolute right-4 p-1 rounded-full text-[#777772] hover:text-[#111111] hover:bg-black/5 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* ── Category Filter Tabs (Horizontal snap on mobile) ── */}
      <div className="mb-7 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none snap-x snap-mandatory">
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 min-w-max">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-heading font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-pointer snap-start shrink-0 ${
                  isActive
                    ? 'bg-[#5D2E85] text-white shadow-[0_4px_14px_rgba(93,46,133,0.3)]'
                    : 'bg-white border border-[#DEDED7] text-[#5F5F5A] hover:text-[#111111] hover:border-[#5D2E85]/40 hover:bg-[#F1E7F9]/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Live Results Count Line ── */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DEDED7]/80 text-xs sm:text-sm text-[#5F5F5A]">
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
            Reset Filters
          </button>
        )}
      </div>

      {/* ── Grid of Industry Cards (Animated reflow) ── */}
      {filteredIndustries.length > 0 ? (
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 mb-12">
          <AnimatePresence>
            {filteredIndustries.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-white border border-[#DEDED7] hover:border-[#5D2E85]/60 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  {/* Icon Chip (Consistent soft purple tint) */}
                  <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#F1E7F9] text-[#5D2E85] flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
                    <span>{item.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-base sm:text-[1.125rem] text-[#111111] mb-2 group-hover:text-[#5D2E85] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description (line-clamp-2) */}
                  <p className="font-sans text-xs sm:text-sm text-[#5F5F5A] leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Outlined Tag Pill at Bottom */}
                <div className="pt-3 border-t border-[#F0EFEB] mt-auto flex items-center justify-between">
                  <span className="inline-flex items-center text-[10px] font-mono font-bold uppercase tracking-wider text-[#5D2E85] bg-[#F1E7F9] border border-[#5D2E85]/25 px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <a
                    href={`https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20am%20interested%20in%20your%20growth%20playbook%20for%20${encodeURIComponent(item.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#5F5F5A] hover:text-[#5D2E85] transition-colors"
                  >
                    Playbook →
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Empty State */
        <div className="py-16 text-center bg-white rounded-3xl border border-[#DEDED7] p-8 max-w-lg mx-auto mb-12 shadow-xs">
          <div className="w-14 h-14 rounded-full bg-[#F1E7F9] text-[#5D2E85] flex items-center justify-center text-2xl mx-auto mb-4">
            🔍
          </div>
          <h3 className="font-heading font-bold text-lg text-[#111111] mb-2">
            No industries match your search
          </h3>
          <p className="font-sans text-sm text-[#5F5F5A] mb-5">
            We couldn’t find any industries matching &quot;{searchInput}&quot;. Try adjusting your keywords or clearing the category filter.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="px-5 py-2.5 rounded-full bg-[#5D2E85] text-white font-heading font-semibold text-xs uppercase tracking-wider shadow-sm hover:bg-[#4C266D] transition-colors cursor-pointer"
          >
            Show All 36 Industries
          </button>
        </div>
      )}
    </div>
  );
}
