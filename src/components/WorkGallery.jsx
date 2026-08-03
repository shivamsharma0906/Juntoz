import { motion } from 'framer-motion';
import { caseStudies } from '../data/caseStudies.js';
import ScrollReveal from './ScrollReveal.jsx';

export default function WorkGallery() {
  return (
    <section id="work" className="py-12 sm:py-16 md:py-24 relative z-10 bg-background overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#7B2FFF]/10 to-[#00F5D4]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <ScrollReveal>
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
            <div className="max-w-2xl">
              <span className="font-heading font-bold tracking-widest text-[#00F5D4] uppercase text-sm mb-4 block">
                Selected Work
              </span>
              <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9]">
                Proof <br className="hidden sm:block" /> Over Promises.
              </h2>
            </div>
            <p className="font-body text-white/50 max-w-sm md:text-right text-sm sm:text-base">
              We don't sell metrics; we build businesses. Here is how we've transformed our partners' growth trajectories.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-12 sm:space-y-24">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.slug} delay={index * 150}>
              <div className="group flex flex-col lg:flex-row gap-8 lg:gap-16 items-center p-6 sm:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors duration-500 relative overflow-hidden">
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <motion.img 
                    src={study.image}
                    alt={study.clientName}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="inline-block px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 font-heading font-bold text-xs uppercase tracking-widest text-white mb-3">
                      {study.industry}
                    </span>
                    <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                      {study.clientName}
                    </h3>
                  </div>
                </div>

                {/* Story Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 lg:pr-8">
                  
                  <div className="space-y-2 hidden sm:block">
                    <span className="font-heading font-bold text-xs tracking-[0.2em] uppercase text-white/40">The Problem</span>
                    <p className="font-body text-white/80 text-base sm:text-lg leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  <div className="space-y-2 hidden sm:block">
                    <span className="font-heading font-bold text-xs tracking-[0.2em] uppercase text-white/40">Our Solution</span>
                    <p className="font-body text-white/80 text-base sm:text-lg leading-relaxed">
                      {study.approach}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <span className="font-heading font-bold text-xs tracking-[0.2em] uppercase text-[#00F5D4] mb-3 block">
                      The Result
                    </span>
                    <p className="font-body text-white text-lg sm:text-xl leading-relaxed font-medium">
                      {study.result}
                    </p>
                  </div>

                  {study.quote && (
                    <div className="mt-8 p-6 rounded-2xl bg-black/20 border-l-4 border-[#7B2FFF] italic font-body text-white/70">
                      "{study.quote}"
                    </div>
                  )}

                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
