import { useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal.jsx';

const PROCESS_STEPS = [
  {
    title: 'Strategy Meeting',
    desc: 'We map your commercial goals, average booking value, and target customer profiles to establish clear unit economics.',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
  },
  {
    title: 'Deep Research',
    desc: 'We analyze your local competitors, map top-performing creatives in your niche, and audit search volume patterns.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
  },
  {
    title: 'Brand Direction',
    desc: 'We craft your high-ticket positioning, choosing custom typography, color palettes, and copywriting guidelines.',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  {
    title: 'Content Strategy',
    desc: 'High-production visual capture guidelines for reels, bridal portraits, and conversion-optimized ad creatives.',
    icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM15 13a3 3 0 11-6 0 3 3 0 016 0z'
  },
  {
    title: 'Post-Production',
    desc: 'Color grading, editing for high hook retention, caption writing, and audio syncing for maximum Instagram feed impact.',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
  },
  {
    title: 'Web Architecture',
    desc: 'We build speed-optimized, lightning-fast landing pages and booking engines that convert cold clicks into clients.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  },
  {
    title: 'Ad Deployment',
    desc: 'We launch hyper-targeted Meta and Google campaigns targeting premium zip codes, brides-to-be, and beauty searchers.',
    icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
  },
  {
    title: 'WhatsApp Pipelines',
    desc: 'Integrating automated sequences for zero lead drop-off: calendar booking links, reminders, and reviews.',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
  },
  {
    title: 'Scale & Optimization',
    desc: 'Weekly performance updates, ad creative fatigue analysis, budget scaling, and continuous conversion optimization.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
  }
];

export default function BehindTheWork() {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScrollProgress = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const totalScrollable = scrollWidth - clientWidth;
      const progress = totalScrollable > 0 ? (scrollLeft / totalScrollable) : 0;
      setScrollProgress(progress);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = 340; // Card width + gap
      const offset = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' });
    }
  };
  
  return (
    <section id="process" className="py-24 md:py-32 relative z-10 bg-[#FFFFFF] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <ScrollReveal data-reveal="flip-3d">
          <div className="mb-14 sm:mb-18 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 border-b border-[#DEDED7] pb-8">
            <div className="max-w-2xl">
              <span className="font-sans font-bold tracking-[0.16em] text-[#5D2E85] uppercase text-xs mb-3 block">
                Behind The Work
              </span>
              <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter leading-[0.95]">
                How We <br className="hidden sm:block" /> Build <span className="text-[#5D2E85]">Growth</span>.
              </h2>
            </div>
            
            <div className="flex flex-col md:items-end gap-6">
              <p className="font-body text-[#5F5F5A] max-w-sm md:text-right text-xs sm:text-sm leading-relaxed">
                No black boxes. Just a systematic, transparent blueprint to scaling your beauty brand from the ground up.
              </p>
              
              {/* Carousel Navigation Buttons */}
              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={() => scroll('left')}
                  className="w-10 h-10 rounded-full border border-[#DEDED7] bg-[#F7F6F2] flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all duration-200 active:scale-95 cursor-pointer"
                  aria-label="Scroll process left"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-10 h-10 rounded-full border border-[#DEDED7] bg-[#F7F6F2] flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all duration-200 active:scale-95 cursor-pointer"
                  aria-label="Scroll process right"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Horizontal scroll container */}
          <div 
            ref={scrollRef}
            onScroll={handleScrollProgress}
            className="flex gap-6 pb-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {PROCESS_STEPS.map((step, index) => (
              <div 
                key={index}
                className="w-[290px] sm:w-[330px] shrink-0 snap-center first:ml-0 last:mr-0 relative py-2"
              >
                <div 
                  className="relative h-[290px] p-7 rounded-[2rem] bg-[#F7F6F2] border border-[#DEDED7] overflow-hidden group hover:border-[#111111]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-subtle"
                >
                  {/* Header Row: Number and Icon */}
                  <div className="flex items-center justify-between relative z-10">
                    <span 
                      className="font-sans font-bold text-[10px] px-3.5 py-1.5 rounded-full border tracking-widest bg-[#F1E7F9] text-[#5D2E85] border-[#5D2E85]/25"
                    >
                      STEP {(index + 1).toString().padStart(2, '0')}
                    </span>
                    
                    {/* SVG Icon */}
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-[#DEDED7] text-[#111111] group-hover:scale-105 transition-transform duration-200 shadow-xs"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                      </svg>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="relative z-10 flex flex-col mt-6 flex-1 justify-end">
                    <h3 className="font-heading font-bold text-lg text-[#111111] uppercase tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-xs text-[#5F5F5A] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar tracking timeline scroll */}
          <div className="hidden md:block w-full h-[2px] bg-[#DEDED7] rounded-full mt-10 relative overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-[#5D2E85] transition-all duration-150 ease-out origin-left rounded-full"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Swipe Hint — mobile only */}
          <div className="flex items-center justify-center gap-2 mt-6 sm:hidden opacity-60">
            <svg className="w-4 h-4 animate-pulse text-[#5D2E85]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="font-sans font-semibold text-[10px] uppercase tracking-wider text-[#5F5F5A]">Swipe to explore workflow</span>
          </div>
        </div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
