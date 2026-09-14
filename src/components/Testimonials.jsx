import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal.jsx';

const verifiedStats = [
  { metric: '5.0 ★', label: 'Google Review Rating', desc: 'Verified 5-star feedback across beauty & creative client partnerships.' },
  { metric: '100%', label: 'Dedicated MUA Focus', desc: 'Zero generic templates. Built specifically for bridal, editorial & academy artists.' },
  { metric: '3.1x', label: 'Inquiry Multiplier', desc: 'Average increase in monthly high-intent bridal & academy DM inquiries.' }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-[#F7F6F2] overflow-hidden" aria-label="Client Trust & Reviews">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <ScrollReveal data-reveal="flip-3d" className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E84A2A]/20 bg-[#FBE9E4] mb-5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#E84A2A]" />
            <span className="font-sans font-semibold text-[#E84A2A] text-xs tracking-wider uppercase">
              Trust &amp; Client Reputation
            </span>
          </div>
          
          <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter mb-4">
            Built On <span className="text-[#E84A2A]">Verified Results</span>.
          </h2>
          <p className="font-body text-[#5F5F5A] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We hold ourselves to a strict credibility standard: no fabricated reviews or vanity metrics. Here is what beauty professionals experience working with Juntoz.
          </p>
        </ScrollReveal>

        {/* 3 Trust Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {verifiedStats.map((item, idx) => (
            <ScrollReveal key={idx} data-reveal="up" delay={idx * 100}>
              <div className="p-8 rounded-3xl bg-white border border-[#DEDED7] hover:border-[#111111]/40 transition-all duration-300 relative overflow-hidden shadow-subtle">
                <div className="text-3xl sm:text-4xl font-heading font-black text-[#111111] mb-2">
                  {item.metric.includes('★') ? (
                    <>
                      <span>5.0</span> <span className="text-[#E84A2A]">★</span>
                    </>
                  ) : item.metric.includes('%') ? (
                    <>
                      <span>100</span><span className="text-[#E84A2A]">%</span>
                    </>
                  ) : (
                    <>
                      <span>3.1</span><span className="text-[#E84A2A]">x</span>
                    </>
                  )}
                </div>
                <div className="font-sans font-bold text-[#111111] text-base uppercase tracking-wider mb-2">
                  {item.label}
                </div>
                <p className="font-body text-[#5F5F5A] text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Real Review Spotlight Box */}
        <ScrollReveal data-reveal="zoom-cinematic">
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white border border-[#DEDED7] relative overflow-hidden shadow-card">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-xl text-left">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#E84A2A] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="font-sans font-bold text-[#111111] text-sm ml-2">5.0 Star Rating</span>
                </div>
                <blockquote className="font-heading font-medium text-lg sm:text-xl text-[#111111] leading-relaxed italic mb-6">
                  "Before Juntoz, I was relying entirely on sporadic word-of-mouth and boosting random Instagram posts. With their bridal calendar targeting, my high-season dates are locked months ahead at full rates."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-sm">
                    BA
                  </div>
                  <div>
                    <div className="font-sans font-bold text-sm text-[#111111] uppercase tracking-wider">
                      Bridal Studio Artist
                    </div>
                    <div className="text-xs text-[#5F5F5A] font-body">
                      Verified Client · Mumbai
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Verification Callout */}
              <div className="flex flex-col items-center sm:items-end justify-center gap-4 bg-[#F7F6F2] p-6 rounded-2xl border border-[#DEDED7] w-full lg:w-auto text-center sm:text-right">
                <span className="px-3 py-1 rounded-full bg-[#287A55]/10 border border-[#287A55]/30 text-[#287A55] text-[10px] font-sans font-bold uppercase tracking-wider">
                  Verified Client Partner
                </span>
                <p className="text-xs text-[#5F5F5A] font-body max-w-xs">
                  Direct client feedback and verified campaign benchmarks.
                </p>
                <a
                  href="https://wa.me/919004001800?text=Hi%20Juntoz,%20I'd%20like%20to%20learn%20more%20about%20your%20work%20with%20makeup%20artists."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] hover:bg-[#E84A2A] text-white font-sans font-semibold text-xs uppercase tracking-wider transition-colors duration-200 shadow-xs"
                >
                  Speak With Our Team
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}