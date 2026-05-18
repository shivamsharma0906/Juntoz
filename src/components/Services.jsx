import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal.jsx';

const services = [
  {
    num: '01',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Instagram Growth',
    subtitle: 'Content & Strategy',
    desc: 'Content strategies to turn your profile into a high-converting client magnet. We build your authority, not just your follower count.',
    what: 'Content → Trust → Clients',
    points: ['Instagram page handling', 'Content calendar & ideas', 'Reels editing & upload', 'Organic growth system'],
    color: '#00F5D4',
  },
  {
    num: '02',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
      </svg>
    ),
    title: 'Lead Generation Ads',
    subtitle: 'Meta & Google',
    desc: 'Laser-targeted campaigns designed to put your business in front of brides and beauty lovers exactly when they are searching.',
    what: 'Ads → Real Leads',
    points: ['Facebook & Instagram Ads', 'Google Search & Display', 'Lead capture funnels', 'Performance scaling'],
    color: '#FF3AF2',
  },
  {
    num: '03',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO & Visibility',
    subtitle: 'Rank Where It Counts',
    desc: 'Dominate local search results and get found when it matters most. We make sure you show up first for "bridal makeup near me".',
    what: 'SEO → Bookings',
    points: ['Google Business Profile', 'Local keyword optimization', 'Review generation', 'Map pack dominance'],
    color: '#7B2FFF',
  },
  {
    num: '04',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: 'WhatsApp Funnels',
    subtitle: 'DMs → Bookings',
    desc: 'Turn conversations into conversions with automated sequences that nurture leads while you sleep.',
    what: 'Automation → Sales',
    points: ['WhatsApp automation', 'Follow-up sequences', 'Enquiry capture', 'Frictionless booking'],
    color: '#FF6B35',
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const card = scrollRef.current.children[0];
    if (card) {
      const cardWidth = card.offsetWidth + 24; // gap is 24px
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIdx(Math.min(index, services.length - 1));
    }
  };

  const scrollToCard = (index) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[index];
    if (card) {
      const paddingOffset = 20; 
      scrollRef.current.scrollTo({ left: card.offsetLeft - paddingOffset, behavior: 'smooth' });
      setActiveIdx(index);
    }
  };

  return (
    <section id="services" ref={sectionRef} className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[150px] pointer-events-none z-0 opacity-20"
        style={{ background: 'radial-gradient(ellipse, rgba(0,245,212,0.8), transparent)' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0 opacity-10"
        style={{ background: 'radial-gradient(circle, #FF3AF2, transparent)' }} />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <ScrollReveal data-reveal="up" className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
            <span className="font-body font-semibold text-white/80 text-[10px] tracking-widest uppercase">What We Do</span>
          </div>
          <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl uppercase leading-none tracking-tighter mb-4">
            Services Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#7B2FFF] drop-shadow-[0_0_20px_rgba(0,245,212,0.4)]">Convert</span>
          </h2>
          <p className="font-body text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Every service is a piece of a proven system. We don't just run ads; we build client acquisition machines.
          </p>
        </ScrollReveal>

        {/* ── CSS Grid Desktop / Scroll Snap Mobile ── */}
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-4 gap-6 pb-12 overflow-x-auto snap-x snap-mandatory lg:snap-none hide-scrollbar scroll-px-6"
        >
          {services.map((s, i) => (
            <ScrollReveal key={i} data-reveal="up" delay={i * 100} className="min-w-[85vw] sm:min-w-[350px] lg:min-w-0 snap-center shrink-0">
              <div 
                className="group relative h-full bg-[#05050C] rounded-[2rem] p-[1px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
                style={{ boxShadow: `0 10px 40px rgba(0,0,0,0.3)` }}
              >
                {/* Animated Border Gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-100 transition-opacity duration-500 animate-[gradient-shift_4s_ease-in-out_infinite]"
                  style={{ background: `linear-gradient(135deg, ${s.color}60, transparent, ${s.color}60)` }} 
                />

                <div className="relative h-full bg-[#080810]/95 backdrop-blur-2xl rounded-[31px] p-8 flex flex-col z-10 overflow-hidden">
                  
                  {/* Subtle Inner Glow */}
                  <div 
                    className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[50px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                    style={{ background: s.color }} 
                  />

                  {/* Header: Icon & Number */}
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                      style={{ backgroundColor: `${s.color}15`, border: `1px solid ${s.color}35`, color: s.color, boxShadow: `0 0 20px ${s.color}20` }}
                    >
                      {s.icon}
                    </div>
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-black text-xs shadow-lg transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundColor: s.color, color: '#08080f', boxShadow: `0 0 15px ${s.color}40` }}
                    >
                      {s.num}
                    </div>
                  </div>

                  {/* Titles */}
                  <div className="mb-6 relative z-10">
                    <h3 className="font-heading font-black text-white text-xl md:text-2xl uppercase leading-tight tracking-tight mb-2">
                      {s.title}
                    </h3>
                    <p className="font-body text-xs font-bold uppercase tracking-[0.2em]" style={{ color: s.color }}>
                      {s.subtitle}
                    </p>
                  </div>

                  {/* Badge */}
                  <div 
                    className="mb-6 px-4 py-1.5 rounded-full font-body text-[10px] font-bold uppercase tracking-widest w-fit relative z-10"
                    style={{ background: `${s.color}15`, border: `1px solid ${s.color}30`, color: s.color }}
                  >
                    {s.what}
                  </div>

                  {/* Description */}
                  <p className="font-body text-white/60 text-sm leading-relaxed mb-8 flex-1 relative z-10">
                    {s.desc}
                  </p>

                  {/* List Points */}
                  <ul className="space-y-3 relative z-10 pt-6 border-t border-white/10">
                    {s.points.map((pt, j) => (
                      <li key={j} className="flex items-center gap-3 font-body text-white/70 text-xs md:text-sm">
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

        {/* Enhanced Dots (Mobile Only) */}
        <div className="mb-12 px-5 lg:hidden">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                aria-label={`Go to service ${i + 1}`}
                className="relative rounded-full transition-all duration-300 hover:scale-125 focus:outline-none"
                style={{
                  width: activeIdx === i ? '36px' : '10px',
                  height: '10px',
                  background: activeIdx === i ? services[i].color : 'rgba(255,255,255,0.2)',
                  boxShadow: activeIdx === i ? `0 0 12px ${services[i].color}` : 'none',
                }}
              >
                {activeIdx === i && (
                  <span className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ background: services[i].color }} />
                )}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}