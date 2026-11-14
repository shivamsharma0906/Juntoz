import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal.jsx';
import CardImageShader from './effects/CardImageShader.jsx';
import { showcaseCaseStudies, showcaseAggregateStats } from '../data/caseStudies.js';
import { motionConfig } from '../config/motion';

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
  const isRecomposeActive = motionConfig.recomposeTypography;

  return (
    <section 
      id="case-studies"
      className={`relative bg-[#F7F6F2] overflow-hidden border-b border-[#DEDED7]/70 ${
        isRecomposeActive
          ? 'py-16 sm:py-24 md:py-32'
          : 'py-10 sm:py-16 md:py-20 lg:py-28'
      }`}
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
              <p className="font-mono text-xs uppercase tracking-widest text-[#5D2E85] mb-3">
                Client Success
              </p>

              {/* Headline */}
              <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-[3.2rem] leading-[1.06] uppercase tracking-tight text-[#111111] mb-4">
                <span className="block">REAL STORIES.</span>
                <span className="block">REAL</span>
                <span className="block text-[#5D2E85]">IMPACT.</span>
              </h2>

              {/* Subtext */}
              <p className="font-body text-[#5F5F5A] text-sm sm:text-base leading-relaxed max-w-md">
                We build scalable growth systems designed around your business, turning brand potential into measurable commercial results.
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
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full border border-[#DEDED7] bg-white flex items-center justify-center text-[#111111] hover:border-[#5D2E85] hover:bg-[#F1E7F9] hover:text-[#5D2E85] transition-all duration-200 active:scale-95 shadow-subtle cursor-pointer"
                  aria-label="Next Case Study"
                >
                  <ArrowRight className="w-4 h-4" />
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
                  <div className="md:col-span-7 relative rounded-2xl overflow-hidden min-h-[260px] sm:min-h-[340px] bg-[#111111] group">
                    <CardImageShader
                      src={current.coverImage}
                      alt={current.client}
                      loading="lazy"
                      className="w-full h-full min-h-[260px] sm:min-h-[340px]"
                    />
                    
                    {/* Gradient Overlay Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                    {/* Bottom Info Scrim Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none z-10">
                      <p className="text-[11px] font-mono font-medium uppercase tracking-wider text-white/90 mb-1">
                        {current.category}
                      </p>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-white leading-tight">
                        {current.client}
                      </h3>
                    </div>

                    {/* Editorial Overlay Caption */}
                    <div className="absolute top-4 left-4 pointer-events-none z-10">
                      <span className="font-heading italic text-white/90 text-sm tracking-wide drop-shadow-md">
                        {current.overlayQuote}
                      </span>
                    </div>
                  </div>

                  {/* Right Live Result Panel (5 Cols) */}
                  <div className="md:col-span-5 bg-[#FAFAF8] border border-[#DEDED7] rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Panel Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#DEDED7] mb-4">
                        <span className="font-mono font-bold text-[11px] uppercase tracking-wider text-[#111111]">
                          Live Result
                        </span>
                        <span className="text-[10px] font-mono text-[#5F5F5A]">
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
                              <span className="p-1 rounded bg-[#287A55]/10">
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#287A55]" />
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
                      to={`/case-study/${current.slug}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#5D2E85] hover:bg-[#4C266D] text-white font-sans font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                    >
                      <span>View Full Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ════ ZONE 3: RIGHT-SIDE VERTICAL PROCESS TABS (2 Cols - XL Screens Only) ════ */}
          <div className="hidden xl:flex xl:col-span-2 flex-col justify-center items-start pl-4 space-y-6">
            <div className="flex items-center gap-1.5 text-xs font-script text-[#5D2E85]">
              <span>Ideas to Impact</span>
              <svg className="w-4 h-4 text-[#5D2E85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

            <div className="space-y-3">
              {STAGES.map((stage, idx) => (
                <button
                  key={stage}
                  onClick={() => setActiveIdx(idx % total)}
                  className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
                  aria-label={`Jump to process stage ${stage}`}
                >
                  <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeStageIdx ? 'bg-[#5D2E85] scale-125 ring-4 ring-[#5D2E85]/15' : 'border border-[#DEDED7] bg-white group-hover:border-[#5D2E85]'
                  }`} />
                  <span className={`font-sans font-bold text-xs uppercase tracking-wider transition-colors duration-300 ${
                    idx === activeStageIdx ? 'text-[#5D2E85]' : 'text-[#5F5F5A]/60 group-hover:text-[#111111]'
                  }`}>
                    {stage}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* ════ ZONE 4: THUMBNAILS (Responsive 5-Col Grid on Desktop, Snap Carousel on Mobile) ════ */}
        <ScrollReveal data-reveal="up" delay={150} className="mb-14 sm:mb-18">
          <div className="flex lg:grid lg:grid-cols-5 gap-3.5 sm:gap-4 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 snap-x snap-mandatory hide-scrollbar">
            {showcaseCaseStudies.map((study, idx) => {
              const isActive = activeIdx === idx;
              const primaryMetric = study.metrics[0];
              return (
                <button
                  key={study.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-[200px] sm:w-[230px] lg:w-auto shrink-0 snap-start text-left rounded-2xl p-3 border transition-all duration-300 relative cursor-pointer group ${
                    isActive
                      ? 'bg-white border-2 border-[#5D2E85] shadow-card scale-[1.02] ring-2 ring-[#5D2E85]/20'
                      : 'bg-white/85 border-[#DEDED7] hover:border-[#5D2E85]/40 hover:bg-white hover:scale-[1.01] opacity-80 hover:opacity-100'
                  }`}
                  aria-label={`Select ${study.client} case study`}
                >
                  <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-2.5 bg-[#111111]">
                    <img
                      src={study.coverImage}
                      alt={study.client}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Primary Metric Tag */}
                    <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-black/75 rounded text-white font-mono font-bold text-[10px] tracking-wide pointer-events-none">
                      {primaryMetric.value}
                    </div>

                    {/* Active State Indicator Dot */}
                    {isActive && (
                      <span className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-[#5D2E85] border-2 border-white shadow-sm pointer-events-none" />
                    )}
                  </div>
                  
                  <p className="font-sans text-[9.5px] uppercase tracking-wider font-bold text-[#5D2E85] mb-1">
                    {study.category}
                  </p>
                  <h4 className="font-heading font-bold text-xs text-[#111111] line-clamp-2 leading-snug min-h-[2.1rem]">
                    {study.client}
                  </h4>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* ════ ZONE 5: BOTTOM STATS ROW (Aggregate Verified Metrics) ════ */}
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
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
