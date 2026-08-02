import { useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal.jsx';

const DEPARTMENTS = [
  {
    num: '01',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Brand & Creative',
    subtitle: 'Identity & Storytelling',
    desc: 'We craft magnetic visual identities and scroll-stopping creative assets that capture attention and build authority.',
    what: 'Attention → Trust',
    points: ['Brand Identity & Guidelines', 'Ad Creatives & Video Production', 'Social Media Content Strategy', 'Copywriting & Storytelling'],
    color: '#FF3AF2',
  },
  {
    num: '02',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Performance Marketing',
    subtitle: 'Traffic & Leads',
    desc: 'Laser-targeted, data-driven advertising campaigns designed to acquire high-value customers at a profitable CAC.',
    what: 'Traffic → Conversions',
    points: ['Meta & Instagram Ads', 'Google Search & Display', 'Local SEO Dominance', 'Continuous A/B Testing'],
    color: '#00F5D4',
  },
  {
    num: '03',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Web & Engineering',
    subtitle: 'Digital Storefronts',
    desc: 'Lightning-fast, highly optimized landing pages and web applications built specifically for conversion.',
    what: 'Clicks → Customers',
    points: ['High-Converting Landing Pages', 'Custom Web Applications', 'E-commerce Optimization', 'Funnel Architecture'],
    color: '#7B2FFF',
  },
  {
    num: '04',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'WhatsApp & CRM',
    subtitle: 'Nurture & Retention',
    desc: 'Automated communication systems that turn inquiries into booked appointments while you sleep.',
    what: 'Leads → Revenue',
    points: ['WhatsApp Automation', 'Lead Nurturing Sequences', 'CRM Integration', 'Loyalty & Retention Programs'],
    color: '#FF6B35',
  },
];

const SCROLL_PADDING_PX = 24;
const GAP_PX = 24; 

export default function Services() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const card = scrollRef.current.children[0];
    if (card) {
      const cardWidth = card.offsetWidth + GAP_PX;
      const rawIndex = Math.round(scrollLeft / cardWidth);
      const index = Math.max(0, Math.min(rawIndex, DEPARTMENTS.length - 1));
      setActiveIdx(index);
    }
  };

  const scrollToCard = (index) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[index];
    if (card) {
      scrollRef.current.scrollTo({ left: card.offsetLeft - SCROLL_PADDING_PX, behavior: 'smooth' });
      setActiveIdx(index);
    }
  };

  return (
    <section id="services" ref={sectionRef} className="relative py-14 sm:py-20 md:py-32 bg-background overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[150px] pointer-events-none z-0 opacity-20"
        style={{ background: 'radial-gradient(ellipse, rgba(0,245,212,0.8), transparent)' }} aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0 opacity-10"
        style={{ background: 'radial-gradient(circle, #FF3AF2, transparent)' }} aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <ScrollReveal data-reveal="up" className="text-center mb-10 md:mb-24 px-4 sm:px-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] header-pulse" />
            <span className="font-body font-semibold text-white/80 text-[10px] tracking-widest uppercase">Departments</span>
          </div>
          <h2 className="font-heading font-black text-white text-2xl xs:text-3xl sm:text-5xl md:text-6xl uppercase leading-tight sm:leading-none tracking-tight sm:tracking-tighter mb-4">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#7B2FFF]">Build</span>
          </h2>
          <p className="font-body text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed px-2 sm:px-0">
            A full-stack growth team. From the first creative spark to the final conversion, we handle every moving part.
          </p>
        </ScrollReveal>

        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
            overscroll-behavior-x: contain;
          }

          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50%       { background-position: 100% 50%; }
          }
          .service-border-anim {
            background-size: 200% 200%;
            animation: gradient-shift 4s ease-in-out infinite;
          }

          .header-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

          @media (prefers-reduced-motion: reduce) {
            .service-border-anim,
            .header-pulse,
            .dot-ping {
              animation: none !important;
            }
          }
        `}</style>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-4 gap-6 pb-12 overflow-x-auto snap-x snap-mandatory lg:snap-none hide-scrollbar scroll-px-6"
        >
          {DEPARTMENTS.map((s, i) => (
            <ScrollReveal key={i} data-reveal="up" delay={i * 100} className="w-[calc(100vw-3rem)] sm:w-[350px] lg:w-auto lg:min-w-0 snap-center shrink-0 overflow-hidden">
              <div
                className="group relative h-full bg-[#05050C] rounded-[2rem] p-[1px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
                style={{ boxShadow: `0 10px 40px rgba(0,0,0,0.3)` }}
              >
                <div
                  className="service-border-anim absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${s.color}60, transparent, ${s.color}60)` }}
                />

                <div className="relative h-full bg-[#080810]/95 backdrop-blur-2xl rounded-[31px] p-5 xs:p-6 sm:p-8 flex flex-col z-10 overflow-hidden">

                  <div
                    className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[50px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                    style={{ background: s.color }}
                    aria-hidden="true"
                  />

                  <div className="flex items-start justify-between mb-6 sm:mb-8 relative z-10">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                      style={{ backgroundColor: `${s.color}15`, border: `1px solid ${s.color}35`, color: s.color, boxShadow: `0 0 20px ${s.color}20` }}
                    >
                      {s.icon}
                    </div>
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-heading font-black text-xs shadow-lg transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundColor: s.color, color: '#08080f', boxShadow: `0 0 15px ${s.color}40` }}
                    >
                      {s.num}
                    </div>
                  </div>

                  <div className="mb-5 sm:mb-6 relative z-10">
                    <h3 className="font-heading font-black text-white text-lg sm:text-xl md:text-2xl uppercase leading-tight tracking-tight mb-1.5 sm:mb-2">
                      {s.title}
                    </h3>
                    <p className="font-body text-xs font-bold uppercase tracking-[0.2em]" style={{ color: s.color }}>
                      {s.subtitle}
                    </p>
                  </div>

                  <div
                    className="mb-5 sm:mb-6 px-3.5 py-1.5 rounded-full font-body text-[10px] font-bold uppercase tracking-widest w-fit relative z-10"
                    style={{ background: `${s.color}15`, border: `1px solid ${s.color}30`, color: s.color }}
                  >
                    {s.what}
                  </div>

                  <p className="font-body text-white/60 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 flex-1 relative z-10 break-words">
                    {s.desc}
                  </p>

                  <ul className="space-y-2.5 sm:space-y-3 relative z-10 pt-5 sm:pt-6 border-t border-white/10">
                    {s.points.map((pt, j) => (
                      <li key={j} className="flex items-center gap-2.5 sm:gap-3 font-body text-white/70 text-xs md:text-sm break-words">
                        <span className="w-2 h-2 rounded-full shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-150" style={{ backgroundColor: s.color, boxShadow: `0 0 8px ${s.color}` }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mb-8 px-5 lg:hidden">
          <div className="flex flex-wrap items-center justify-center gap-1" role="tablist" aria-label="Service slides">
            {DEPARTMENTS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                aria-label={`Go to service ${i + 1}`}
                aria-current={activeIdx === i ? 'true' : undefined}
                role="tab"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none"
              >
                <span
                  className="relative rounded-full transition-all duration-300 inline-block"
                  style={{
                    width: activeIdx === i ? '32px' : '10px',
                    height: '10px',
                    background: activeIdx === i ? DEPARTMENTS[i].color : 'rgba(255,255,255,0.2)',
                    boxShadow: activeIdx === i ? `0 0 12px ${DEPARTMENTS[i].color}` : 'none',
                  }}
                >
                  {activeIdx === i && (
                    <span className="dot-ping absolute inset-0 rounded-full animate-ping opacity-40" style={{ background: DEPARTMENTS[i].color }} />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}