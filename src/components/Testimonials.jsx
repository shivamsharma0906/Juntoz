import { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal.jsx';
import { clientData, featuredQuote } from '../data/clients.js';

const testimonials = [
  {
    name: featuredQuote.name,
    role: featuredQuote.role,
    quote: featuredQuote.quote.replace(/"/g, ''),
    initials: featuredQuote.initials,
    metric: 'Predictable growth engine',
    color: '#00F5D4',
    city: 'Mumbai',
    businessName: 'CloudKitchens India',
  },
  ...clientData.filter(c => c.quote).map(c => ({
    name: c.name,
    role: c.role,
    quote: c.quote,
    initials: c.name.split(' ').map(n => n[0]).join(''),
    metric: c.metric,
    color: c.color,
    city: c.city,
    businessName: c.businessName,
  }))
];

const StarRow = ({ color }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, j) => (
      <svg key={j} className="w-3 h-3 drop-shadow-md" fill={color} viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = testimonials[activeIndex];

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000); // Auto-rotate every 6 seconds

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section id="testimonials" className="relative py-14 sm:py-20 md:py-24 bg-background overflow-hidden" aria-label="Client testimonials">
      
      {/* ── Ambient Radial Glow Backdrops ── */}
      <div 
        className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none z-0 opacity-15 transition-all duration-700" 
        style={{ background: active.color }} 
      />
      <div 
        className="absolute bottom-10 right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none z-0 opacity-10 transition-all duration-700" 
        style={{ background: active.color }} 
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* ── Section Header ── */}
        <ScrollReveal data-reveal="flip-3d" className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] animate-pulse" />
            <span className="font-body font-semibold text-white/80 text-[10px] tracking-widest uppercase">Rated 5.0 by Growth Partners</span>
          </div>
          
          <h2 className="font-heading font-black text-white text-3xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tighter mb-6">
            Real Clients. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-[#7B2FFF] to-[#FF3AF2]">Real Results.</span>
          </h2>
          <p className="font-body text-white/60 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            See how ambitious companies across India scale their revenue with our integrated growth engine.
          </p>
        </ScrollReveal>

        {/* ── Interactive Showcase Dashboard Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* ── LEFT: Active Testimonial Viewport (Stage) ── */}
          <ScrollReveal data-reveal="left" className="lg:col-span-7 flex flex-col">
            <div className="group relative rounded-[2.5rem] p-[1px] overflow-hidden transition-all duration-500 h-full flex flex-col">
              
              {/* Glowing Outline Frame */}
              <div 
                className="absolute inset-0 transition-opacity duration-700"
                style={{ background: `linear-gradient(135deg, ${active.color}80, transparent 65%, ${active.color}80)` }}
              />

              <div className="relative h-full bg-[#0E0E1C]/45 backdrop-blur-2xl rounded-[39px] p-8 sm:p-12 flex flex-col justify-between z-10 overflow-hidden min-h-[420px] sm:min-h-[460px]">
                
                {/* Massive Decorative Watermark Quote mark */}
                <div 
                  key={`quote-${activeIndex}`}
                  className="absolute -top-10 -right-2 font-display text-[15rem] leading-none pointer-events-none select-none animate-[quote-spin_0.85s_ease-out_both]"
                  style={{ color: `${active.color}08` }}
                >
                  “
                </div>

                {/* Ambient glow spotlight */}
                <div 
                  key={`glow-${activeIndex}`}
                  className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-[80px] pointer-events-none animate-[glow-pulse-active_1.4s_ease-out_both]"
                  style={{ background: active.color }}
                />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div 
                      key={`badge-${activeIndex}`}
                      className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border animate-[badge-pop_0.5s_cubic-bezier(0.22,1,0.36,1)_both]"
                      style={{
                        borderColor: `${active.color}35`,
                        color: active.color,
                        background: `${active.color}08`,
                        boxShadow: `0 0 15px ${active.color}15`
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: active.color }} />
                      <span className="font-heading font-bold text-[10px] uppercase tracking-widest">{active.metric}</span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="font-heading font-black text-white text-[11px]">5.0</span>
                      <StarRow color={active.color} />
                    </div>
                  </div>

                  {/* Animated Quote Stage */}
                  <div key={activeIndex} className="animate-[fade-in-up_0.6s_ease-out_both] min-h-[140px] sm:min-h-[160px] flex items-center">
                    <h3 
                      className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-snug"
                      dangerouslySetInnerHTML={{ __html: `"${active.quote}"` }}
                    />
                  </div>
                </div>

                {/* Footer details + Carousel navigation controls */}
                <div className="relative z-10 flex items-end justify-between pt-8 border-t border-white/5 mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl p-[1px]" style={{ background: `linear-gradient(135deg, ${active.color}, transparent)` }}>
                      <div className="w-full h-full rounded-[11px] bg-[#05050C] flex items-center justify-center font-heading font-black text-white text-base">
                        {active.initials}
                      </div>
                    </div>
                    <div>
                      <p className="font-heading font-black text-white text-base uppercase tracking-tight">{active.name}</p>
                      <p className="font-body text-xs text-white/50">{active.role} · <span className="opacity-75">{active.businessName || active.city}</span></p>
                    </div>
                  </div>

                  {/* Navigator Controls */}
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={prev}
                      className="w-10 h-10 rounded-xl border border-white/10 bg-[#0E0E1C]/40 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={next}
                      className="w-10 h-10 rounded-xl border border-white/10 bg-[#0E0E1C]/40 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer"
                      aria-label="Next testimonial"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>

          {/* ── RIGHT: Interactive Impact Navigator (List) ── */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {testimonials.map((t, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <ScrollReveal key={idx} data-reveal="right" delay={idx * 80} className="flex-1">
                  <div
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative p-5 rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden h-full flex items-center border select-none ${
                      isSelected
                        ? 'bg-[#0E0E1C]/50 border-white/20 shadow-2xl'
                        : 'bg-[#0E0E1C]/15 border-white/5 opacity-50 hover:opacity-100'
                    }`}
                  >
                    {/* Glowing highlight strip */}
                    <div 
                      className={`absolute top-0 left-0 w-[2px] h-full transition-all duration-500 ${isSelected ? 'opacity-100' : 'opacity-0'}`} 
                      style={{ background: t.color, boxShadow: `0 0 10px ${t.color}` }}
                    />

                    <div className="w-full flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-9 h-9 rounded-lg flex items-center justify-center font-heading font-black text-xs transition-colors duration-500"
                          style={{
                            background: isSelected ? t.color : 'rgba(255,255,255,0.05)',
                            color: isSelected ? '#08080f' : '#ffffff'
                          }}
                        >
                          {t.initials}
                        </div>
                        <div>
                          <p className="font-heading font-black text-white text-sm uppercase tracking-tight leading-none mb-1.5">{t.name}</p>
                          <p className="font-body text-[10px] text-white/40 font-semibold">{t.company || t.role}</p>
                        </div>
                      </div>

                      <span 
                        className="font-body font-bold text-[9px] tracking-widest uppercase px-3 py-1 rounded-full border shrink-0"
                        style={{
                          color: isSelected ? t.color : 'rgba(255,255,255,0.4)',
                          borderColor: isSelected ? `${t.color}35` : 'rgba(255,255,255,0.1)',
                          background: isSelected ? `${t.color}08` : 'transparent'
                        }}
                      >
                        {t.metric.split(' ')[0]} {t.metric.split(' ')[1] || ''}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

        {/* ── Bottom Callout CTA ── */}
        <ScrollReveal data-reveal="up" className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-3 sm:pr-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            <span className="px-6 py-3 rounded-full bg-[#00F5D4] text-background font-heading font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(0,245,212,0.4)]">
              Partner With Juntoz
            </span>
            <p className="font-body text-white/60 text-xs sm:text-sm font-medium">
              Join 200+ scaled companies & growth partners driving predictable revenue.
            </p>
          </div>
        </ScrollReveal>

      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(18px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes badge-pop {
          0% { transform: scale(0.92); opacity: 0; }
          50% { transform: scale(1.04); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes quote-spin {
          0% { transform: scale(0.8) rotate(-10deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg); opacity: 0.08; }
        }
        @keyframes glow-pulse-active {
          0% { opacity: 0; transform: scale(0.85); }
          50% { opacity: 0.35; transform: scale(1.08); }
          100% { opacity: 0.20; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}