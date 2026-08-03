import { useState } from 'react';
import ScrollReveal from './ScrollReveal.jsx';
import { clientData, featuredQuote } from '../data/clients.js';

const testimonials = clientData.filter(c => c.quote).map(c => ({
  quote: c.quote,
  name: c.name,
  role: c.role,
  city: c.city,
  metric: c.metric,
  color: c.color,
  rating: c.rating
}));

const StarRow = ({ color }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, j) => (
      <svg key={j} className="w-3.5 h-3.5 drop-shadow-md" fill={color} viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="relative py-14 sm:py-20 md:py-24 bg-background overflow-hidden" aria-label="Client testimonials">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none z-0 opacity-30" style={{ background: '#00F5D4' }} />
      <div className="absolute bottom-10 right-[-10%] w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none z-0 opacity-25" style={{ background: '#7B2FFF' }} />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <ScrollReveal data-reveal="up" className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FFE600] animate-pulse" />
            <span className="font-body font-semibold text-white/80 text-[10px] tracking-widest uppercase">Rated 5.0 by Growth Partners</span>
          </div>
          
          <h2 className="font-heading font-black text-white text-3xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tighter mb-6">
            Real Clients. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-[#7B2FFF] to-[#FF3AF2]">Real Results.</span>
          </h2>
          <p className="font-body text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            See how ambitious companies across India are scaling their revenue with our integrated growth engine.
          </p>
        </ScrollReveal>

        {/* ── Desktop Optimized Split Showcase Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Featured Highlight Card (7 cols - Desktop Only) */}
          <ScrollReveal data-reveal="left" className="hidden lg:flex lg:col-span-7">
            <div className="relative w-full rounded-[2.5rem] p-[1px] overflow-hidden bg-gradient-to-br from-white/15 via-white/5 to-transparent shadow-2xl flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F5D4]/10 via-transparent to-[#7B2FFF]/10 pointer-events-none" />
              
              <div className="relative h-full bg-[#080812]/95 backdrop-blur-2xl rounded-[39px] p-8 sm:p-12 flex flex-col justify-between z-10 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 font-heading font-black text-9xl text-white pointer-events-none select-none">
                  “
                </div>

                <div className="mb-8">
                  <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#00F5D4]/30 bg-[#00F5D4]/10 mb-8">
                    <span className="w-2 h-2 rounded-full bg-[#00F5D4]" />
                    <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#00F5D4]">Featured Case Study</span>
                  </div>

                  <h3 className="font-heading font-black text-2xl sm:text-4xl text-white uppercase tracking-tight leading-snug mb-6"
                    dangerouslySetInnerHTML={{ __html: featuredQuote.quote }}
                  />
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-white/10 mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#00F5D4] to-[#7B2FFF] p-[2px]">
                      <div className="w-full h-full rounded-[14px] bg-[#05050C] flex items-center justify-center font-heading font-black text-white text-lg">
                        {featuredQuote.initials}
                      </div>
                    </div>
                    <div>
                      <p className="font-heading font-black text-white text-lg uppercase tracking-tight">{featuredQuote.name}</p>
                      <p className="font-body text-xs text-[#00F5D4] font-semibold tracking-wide">{featuredQuote.role}</p>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-heading font-black text-white text-sm">5.0</span>
                    <StarRow color="#00F5D4" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Testimonial Cards Grid (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Mobile Featured Card */}
            <ScrollReveal data-reveal="up" className="flex lg:hidden flex-1">
              <div
                className="group relative p-6 rounded-[2rem] transition-all duration-500 hover:-translate-y-1 overflow-hidden h-full flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: '#00F5D415', border: '1px solid #00F5D435', color: '#00F5D4' }}>
                    Featured Case Study
                  </span>
                  <StarRow color="#00F5D4" />
                </div>
                <p className="font-body text-white/80 text-sm leading-relaxed mb-6 italic" dangerouslySetInnerHTML={{ __html: featuredQuote.quote }} />
                <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                  <div>
                    <p className="font-heading font-black text-white text-sm uppercase">{featuredQuote.name}</p>
                    <p className="font-body text-xs text-white/40">{featuredQuote.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {testimonials.slice(0, 3).map((t, idx) => (
              <ScrollReveal key={idx} data-reveal="right" delay={idx * 100} className="flex-1">
                <div
                  className="group relative p-6 rounded-[2rem] transition-all duration-500 hover:-translate-y-1 overflow-hidden h-full flex flex-col justify-between"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-body font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ background: `${t.color}15`, border: `1px solid ${t.color}35`, color: t.color }}>
                      {t.metric}
                    </span>
                    <StarRow color={t.color} />
                  </div>

                  <p className="font-body text-white/80 text-sm leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                    <div>
                      <p className="font-heading font-black text-white text-sm uppercase">{t.name}</p>
                      <p className="font-body text-xs text-white/40">{t.role} · {t.city}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

        {/* Bottom Callout & CTA */}
        <ScrollReveal data-reveal="up" className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-3 sm:pr-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            <span className="px-6 py-3 rounded-full bg-[#00F5D4] text-background font-heading font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(0,245,212,0.4)]">
              Partner With Juntoz
            </span>
            <p className="font-body text-white/70 text-xs sm:text-sm font-medium">
              Join 200+ scaled companies & growth partners driving predictable revenue.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}