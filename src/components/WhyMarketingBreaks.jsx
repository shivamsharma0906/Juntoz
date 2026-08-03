import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal.jsx';

export default function WhyMarketingBreaks() {
  return (
    <section id="why-marketing-breaks" className="py-12 sm:py-16 md:py-24 relative z-10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24">
            <span className="font-heading font-bold tracking-widest text-[#FF3AF2] uppercase text-sm mb-4 block">
              The Agency Problem
            </span>
            <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter leading-tight max-w-4xl mx-auto">
              Why Most Marketing <br className="hidden sm:block" /> Breaks Down.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-stretch">
          
          {/* Traditional Agency */}
          <ScrollReveal delay={0.1}>
            <div className="h-full p-6 sm:p-12 rounded-3xl sm:rounded-[2.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-20 group-hover:opacity-10 transition-opacity">
                <svg className="w-16 h-16 sm:w-24 sm:h-24 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="font-heading font-black text-xl sm:text-2xl text-white/50 uppercase tracking-widest mb-6 sm:mb-10 relative z-10">
                Traditional Agency
              </h3>
              
              <ul className="space-y-4 sm:space-y-6 relative z-10">
                {[
                  "Different freelancers for different tasks",
                  "No cross-channel communication",
                  "Generic campaigns without business context",
                  "Slow revisions that kill momentum",
                  "Reports that show clicks, not revenue"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 sm:gap-4">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-red-500/50" />
                    </span>
                    <span className="font-body text-white/60 text-sm sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Juntoz */}
          <ScrollReveal delay={0.2}>
            <div className="h-full p-6 sm:p-12 rounded-3xl sm:rounded-[2.5rem] relative overflow-hidden group border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F5D4]/10 via-[#7B2FFF]/10 to-[#FF3AF2]/10" />
              <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <svg className="w-16 h-16 sm:w-24 sm:h-24 text-[#00F5D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-widest mb-6 sm:mb-10 drop-shadow-md">
                  Juntoz Growth System
                </h3>
                
                <ul className="space-y-4 sm:space-y-6">
                  {[
                    "One integrated team under one roof",
                    "Strategy, Creative, and Ads working in sync",
                    "Fast iteration based on real data",
                    "Continuous optimization for scaling",
                    "A complete growth engine focused on ROI"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 sm:gap-4">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00F5D4]/20 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(0,245,212,0.3)]">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#00F5D4]" />
                      </span>
                      <span className="font-body text-white text-sm sm:text-lg font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
