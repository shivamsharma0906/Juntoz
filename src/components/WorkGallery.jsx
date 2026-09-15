import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies.js';
import ScrollReveal from './ScrollReveal.jsx';

export default function WorkGallery() {
  return (
    <section id="work" className="py-24 md:py-32 relative z-10 bg-[#F7F6F2] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <ScrollReveal data-reveal="zoom-cinematic">
          <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#DEDED7] pb-8">
            <div className="max-w-2xl">
              <span className="font-sans font-bold tracking-[0.16em] text-[#5D2E85] uppercase text-xs mb-3 block">
                Selected Client Case Studies
              </span>
              <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter leading-[0.95]">
                Proof Over <span className="text-[#5D2E85]">Promises.</span>
              </h2>
            </div>
            <div className="md:text-right">
              <p className="font-body text-[#5F5F5A] max-w-sm text-sm sm:text-base mb-4">
                Real growth blueprints engineered across performance advertising, search dominance, and strategic brand repositioning.
              </p>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 font-sans font-semibold text-xs uppercase tracking-wider text-[#111111] hover:text-[#5D2E85] transition-colors"
              >
                <span>View All Case Studies</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-12 sm:space-y-16">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.slug} data-reveal="zoom-cinematic" delay={index * 120}>
              <div className="group flex flex-col lg:flex-row gap-8 lg:gap-14 items-center p-6 sm:p-10 rounded-[2.5rem] bg-white border border-[#DEDED7] hover:border-[#111111]/40 transition-all duration-300 relative overflow-hidden shadow-card">
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[480px] rounded-3xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <motion.img 
                    src={study.image}
                    alt={study.clientName}
                    width={800}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Category and Client Floating Tag */}
                  <div className="absolute bottom-6 left-6 z-20 right-6">
                    <div className="flex flex-wrap gap-2 items-center mb-3">
                      <span className="px-3.5 py-1.5 rounded-full bg-[#111111] text-white font-sans font-semibold text-[10px] uppercase tracking-wider">
                        {study.specialty || study.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/90 text-[#111111] font-sans font-medium text-[10px]">
                        {study.timeline}
                      </span>
                    </div>
                    <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                      {study.clientName}
                    </h3>
                    <p className="text-xs text-white/80 font-body mt-1">
                      {study.location}
                    </p>
                  </div>
                </div>

                {/* Story & Metrics Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-6 lg:pr-4">
                  
                  <div className="space-y-4">
                    <div>
                      <span className="font-sans font-bold text-[11px] tracking-[0.14em] uppercase text-[#5D2E85] block mb-1">
                        The Challenge
                      </span>
                      <p className="font-body text-[#5F5F5A] text-sm sm:text-base leading-relaxed">
                        {study.problem}
                      </p>
                    </div>

                    <div>
                      <span className="font-sans font-bold text-[11px] tracking-[0.14em] uppercase text-[#111111] block mb-1">
                        Juntoz Strategy
                      </span>
                      <p className="font-body text-[#5F5F5A] text-sm sm:text-base leading-relaxed">
                        {study.approach}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#DEDED7]">
                    {study.stats && study.stats.map((stat, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-[#F7F6F2] border border-[#DEDED7]">
                        <div className="font-heading font-black text-xl sm:text-2xl text-[#5D2E85]">
                          {stat.value}
                        </div>
                        <div className="font-body text-[11px] text-[#5F5F5A] mt-0.5">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA & Verified notice */}
                  <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <Link
                      to={`/work/${study.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] hover:bg-[#5D2E85] text-white font-sans font-semibold text-xs uppercase tracking-wider transition-colors duration-200 shadow-xs"
                    >
                      <span>Read Case Study</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    <span className="text-[11px] font-body text-[#5F5F5A] italic">
                      Verified Client Study · {study.clientName}
                    </span>
                  </div>

                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
