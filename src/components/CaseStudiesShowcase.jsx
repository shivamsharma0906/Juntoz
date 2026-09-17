import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal.jsx';
import { showcaseCaseStudies, showcaseAggregateStats } from '../data/caseStudies.js';

const STAGES = ['STRATEGY', 'EXECUTION', 'RESULTS', 'GROWTH'];

export default function CaseStudiesShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = showcaseCaseStudies.length;
  const current = showcaseCaseStudies[activeIdx];

  const handleNext = () => setActiveIdx((prev) => (prev + 1) % total);
  const handlePrev = () => setActiveIdx((prev) => (prev - 1 + total) % total);

  // Auto-advance slideshow every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, total, activeIdx]);

  // Active process stage maps dynamically to case study index
  const activeStageIdx = activeIdx % STAGES.length;

  return (
    <section 
      className="relative py-10 sm:py-16 md:py-20 lg:py-28 bg-[#F7F6F2] overflow-hidden border-b border-[#DEDED7]/70"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* ── TOP SECTION: ZONE 1 + ZONE 2 + ZONE 3 ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12 sm:mb-16">

          {/* ════ ZONE 1: LEFT TEXT COLUMN (4 Cols) ════ */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <ScrollReveal data-reveal="up">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 font-sans font-bold text-xs uppercase tracking-widest text-[#5D2E85] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#5D2E85] animate-pulse" />
                <span>CLIENT SUCCESS</span>
              </div>

              {/* Headline */}
              <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-[3.2rem] leading-[1.06] uppercase tracking-tight text-[#111111] mb-4">
                <span className="block">REAL STORIES.</span>
                <span className="block">REAL</span>
                <span className="block text-[#5D2E85]">IMPACT.</span>
              </h2>

              {/* Subtext */}
              <p className="font-body text-[#5F5F5A] text-sm sm:text-base leading-relaxed max-w-md">
                We engineer scalable acquisition systems tailored to unit economics, turning brand potential into documented commercial ROI.
              </p>

              {/* Decorative Squiggle Underline */}
              <div className="pt-2">
                <svg className="w-28 h-3 text-[#5D2E85]" viewBox="0 0 120 12" fill="none">
                  <path d="M2 9 C 35 3, 70 11, 118 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </ScrollReveal>

            {/* Pagination Controls */}
            <ScrollReveal data-reveal="up" delay={100} className="flex items-center gap-6 pt-4">
              <span className="font-mono text-sm font-bold text-[#111111] tracking-wider">
                {String(activeIdx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full border border-[#DEDED7] bg-white flex items-center justify-center text-[#111111] hover:border-[#5D2E85] hover:bg-[#F1E7F9] hover:text-[#5D2E85] transition-all duration-200 active:scale-95 shadow-subtle cursor-pointer"
                  aria-label="Previous Case Study"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full border border-[#DEDED7] bg-white flex items-center justify-center text-[#111111] hover:border-[#5D2E85] hover:bg-[#F1E7F9] hover:text-[#5D2E85] transition-all duration-200 active:scale-95 shadow-subtle cursor-pointer"
                  aria-label="Next Case Study"
                >
                  →
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* ════ ZONE 2: CENTER-RIGHT FEATURED CASE STUDY MODULE (6 Cols) ════ */}
          <div className="lg:col-span-6 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative"
              >
                {/* Layered Rotated Dark Background Frame */}
                <div className="absolute inset-0 bg-[#111111] rounded-3xl transform rotate-[-2deg] scale-[0.99] opacity-90 shadow-lg pointer-events-none" />

                {/* Main Card Content */}
                <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 rounded-3xl bg-white border border-[#DEDED7] p-4 sm:p-5 shadow-card overflow-hidden">
                  
                  {/* Left Visual Image Frame (7 Cols) */}
                  <div className="md:col-span-7 relative rounded-2xl overflow-hidden min-h-[260px] sm:min-h-[320px]">
                    <img
                      src={current.coverImage}
                      alt={current.client}
                      className="w-full h-full object-cover block"
                    />
                    
                    {/* Gradient Overlay Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Bottom Info Scrim Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white mb-1.5 inline-block">
                        {current.category}
                      </span>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-white leading-tight">
                        {current.client}
                      </h3>
                    </div>

                    {/* Decorative Script Overlay Phrase */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      <span className="font-script text-white text-base tracking-wide">
                        {current.overlayQuote}
                      </span>
                      <span className="text-white text-xs">✨</span>
                    </div>
                  </div>

                  {/* Right Live Result Panel (5 Cols) */}
                  <div className="md:col-span-5 bg-[#FAFAF8] border border-[#DEDED7] rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Panel Badge */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#DEDED7] mb-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#287A55] animate-pulse" />
                          <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-[#111111]">
                            LIVE RESULT
                          </span>
                        </div>
                        <span className="text-[9.5px] font-sans text-[#5F5F5A] font-semibold">
                          {current.liveResultDateRange}
                        </span>
                      </div>

                      {/* 3 Metric Rows */}
                      <div className="space-y-3">
                        {current.metrics.map((m, i) => (
                          <div key={i} className="p-2.5 rounded-xl bg-white border border-[#DEDED7] shadow-xs">
                            <div className="flex items-center justify-between">
                              <span className="font-heading font-black text-xl sm:text-2xl text-[#111111]">
                                {m.value}
                              </span>
                              <span className="text-[10px] font-sans font-bold text-[#287A55] bg-[#287A55]/10 px-1.5 py-0.5 rounded">
                                ↗
                              </span>
                            </div>
                            <span className="font-body text-[11px] text-[#5F5F5A] block mt-0.5 font-medium leading-tight">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to="/case-studies"
                      onClick={() => window.scrollTo(0, 0)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#5D2E85] hover:bg-[#4C266D] text-white font-sans font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <span>View Full Case Study</span>
                      <span>→</span>
                    </Link>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ════ ZONE 3: RIGHT-SIDE VERTICAL PROCESS TABS (2 Cols - XL Screens Only) ════ */}
          <div className="hidden xl:flex xl:col-span-2 flex-col justify-center items-start pl-4 space-y-6">
            {/* Script Doodle Header */}
            <div className="space-y-1">
              <span className="font-script text-[#5D2E85] text-xl font-bold block">
                Ideas to Impact
              </span>
              <svg className="w-8 h-6 text-[#5D2E85]" viewBox="0 0 32 24" fill="none">
                <path d="M4 4 C 12 18, 24 16, 28 20 M20 22 L 28 20 L 26 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Stage List */}
            <div className="space-y-3">
              {STAGES.map((stage, idx) => (
                <div key={stage} className="flex items-center gap-2.5">
                  <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeStageIdx ? 'bg-[#5D2E85] scale-125' : 'border border-[#DEDED7] bg-white'
                  }`} />
                  <span className={`font-sans font-bold text-xs uppercase tracking-wider transition-colors duration-300 ${
                    idx === activeStageIdx ? 'text-[#5D2E85]' : 'text-[#5F5F5A]/60'
                  }`}>
                    {stage}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ════ ZONE 4: THUMBNAIL STRIP ════ */}
        <ScrollReveal data-reveal="up" delay={150} className="mb-14 sm:mb-18">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar">
            {showcaseCaseStudies.map((study, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={study.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-[190px] sm:w-[220px] shrink-0 snap-start text-left rounded-2xl p-2.5 border transition-all duration-300 relative cursor-pointer ${
                    isActive
                      ? 'bg-white border-2 border-[#5D2E85] shadow-card scale-[1.02]'
                      : 'bg-white/80 border-[#DEDED7] hover:border-[#111111]/30 opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-2.5">
                    <img src={study.coverImage} alt={study.client} className="w-full h-full object-cover" />
                    {isActive && (
                      <span className="absolute bottom-1.5 left-1.5 w-3 h-3 rounded-full bg-[#5D2E85] border-2 border-white shadow-xs" />
                    )}
                  </div>
                  <h4 className="font-heading font-bold text-xs text-[#111111] truncate">
                    {study.client}
                  </h4>
                  <p className="font-body text-[10px] text-[#5F5F5A] uppercase tracking-wider font-semibold">
                    {study.category}
                  </p>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* ════ ZONE 5: BOTTOM STATS ROW ════ */}
        <ScrollReveal data-reveal="up" delay={200}>
          <div className="pt-8 border-t border-[#DEDED7] flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            
            {/* Left Label Stack */}
            <div className="text-left font-sans font-bold text-[10px] sm:text-xs uppercase tracking-widest text-[#5F5F5A] leading-tight shrink-0">
              <span className="block">DIFFERENT JOURNEYS.</span>
              <span className="block text-[#111111]">A BRIGHTER TOMORROW.</span>
            </div>

            {/* 4 Stat Items Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full md:w-auto">
              {showcaseAggregateStats.map((stat, i) => (
                <div key={i} className={`text-left ${!stat.isVerified ? 'opacity-80' : ''}`}>
                  <div className="flex items-center gap-1.5">
                    <span className="font-heading font-black text-2xl sm:text-3xl text-[#111111]">
                      {stat.value}
                    </span>
                    {!stat.isVerified && (
                      <span className="text-[9px] font-mono text-amber-600 bg-amber-50 px-1 rounded border border-amber-200" title="[NEEDS REAL METRIC]">
                        Est.
                      </span>
                    )}
                  </div>
                  <span className="font-body text-xs text-[#5F5F5A] font-medium block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Action Button */}
            <div className="shrink-0 w-full md:w-auto text-right">
              <Link
                to="/case-studies"
                onClick={() => window.scrollTo(0, 0)}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#F1E7F9] hover:bg-[#5D2E85] text-[#5D2E85] hover:text-white font-sans font-bold text-xs uppercase tracking-wider transition-colors border border-[#5D2E85]/20 shadow-xs"
              >
                <span>See All Case Studies</span>
                <span>→</span>
              </Link>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
