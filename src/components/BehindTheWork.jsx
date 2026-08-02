import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal.jsx';

const PROCESS_STEPS = [
  'Strategy Meeting',
  'Deep Research',
  'Brand Direction',
  'Photography',
  'Post-Production',
  'Web Architecture',
  'Ad Deployment',
  'Optimization',
  'Scale & Reporting'
];

export default function BehindTheWork() {
  const scrollRef = useRef(null);
  
  return (
    <section id="process" className="py-16 sm:py-24 lg:py-32 relative z-10 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <ScrollReveal>
          <div className="mb-12 sm:mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 border-b border-white/10 pb-6 sm:pb-8">
            <div className="max-w-2xl">
              <span className="font-heading font-bold tracking-widest text-[#FF3AF2] uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
                Behind The Work
              </span>
              <h2 className="font-heading font-black text-white text-3xl sm:text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9]">
                How We <br className="hidden sm:block" /> Build Growth.
              </h2>
            </div>
            <p className="font-body text-white/50 max-w-sm md:text-right text-sm sm:text-base">
              No black boxes. Just a systematic, transparent approach to scaling your business from the ground up.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Horizontal scroll container */}
          <div 
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 pb-12 overflow-x-auto snap-x snap-mandatory hide-scrollbar"
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
                className="w-[280px] sm:w-[320px] shrink-0 snap-center first:ml-0 last:mr-0 relative"
              >
                <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
                  <div className="font-heading font-black text-6xl text-white/5 mb-4 group-hover:text-[#00F5D4]/10 transition-colors">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white uppercase tracking-wider mb-2">
                    {step}
                  </h3>
                  
                  {/* Connecting Line (except last) */}
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="absolute top-1/2 -right-4 w-8 h-[1px] bg-white/20 hidden sm:block" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Swipe Hint */}
          <div className="flex items-center justify-center gap-2 mt-4 sm:hidden opacity-50">
            <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span className="font-heading font-bold text-[10px] uppercase tracking-widest text-white">Swipe to see process</span>
          </div>
        </div>
      </div>
    </section>
  );
}
