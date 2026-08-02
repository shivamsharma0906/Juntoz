import { useRef, useState, useCallback } from 'react';
import ScrollReveal from './ScrollReveal.jsx';

import { clientData } from '../data/clients.js';


const projects = clientData.filter(c => c.projectTag).map(c => ({
  tag: c.projectTag,
  label: c.projectLabel,
  result: c.projectResult,
  desc: c.projectDesc,
  hex: c.projectColor || c.color,
  location: c.city,
}));

export default function Portfolio() {
  const sectionRef = useRef(null);
  const dragRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  /* Mouse drag-to-scroll (desktop) */
  const onMouseDown = useCallback((e) => {
    isDragging.current = true;
    startX.current = e.pageX - dragRef.current.offsetLeft;
    scrollLeft.current = dragRef.current.scrollLeft;
    dragRef.current.style.cursor = 'grabbing';
  }, []);

  const onMouseLeave = useCallback(() => {
    isDragging.current = false;
    if (dragRef.current) dragRef.current.style.cursor = 'grab';
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    if (dragRef.current) dragRef.current.style.cursor = 'grab';
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - dragRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    dragRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const highlightAmount = (text) => {
    const amountRegex = /(₹[\d,]+|[\d]+%|[\d]+K)/g;
    return text.split(amountRegex).map((part, i) =>
      amountRegex.test(part) ? <span key={i} className="font-black text-accent-2 drop-shadow-[0_0_8px_rgba(0,245,212,0.4)]">{part}</span> : part
    );
  };

  return (
    <section ref={sectionRef} id="portfolio" className="relative py-14 sm:py-20 md:py-32 bg-background overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-2/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-20">

        {/* ── Header ── */}
        <ScrollReveal data-reveal="up" className="text-center mb-10 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-ping" />
            <p className="font-body text-white/80 text-[10px] font-bold uppercase tracking-[0.2em]">
              The Portfolio
            </p>
          </div>
          <h2 className="font-heading font-black text-white text-3xl xs:text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.95] tracking-tighter">
            Our Best{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#FF3AF2]">
              Work
            </span>
          </h2>
          <p className="font-body text-white/50 text-sm sm:text-lg max-w-xl mx-auto mt-4 sm:mt-6 leading-relaxed">
            We build systems that actually generate revenue. Here's a snapshot of the impact we've made for beauty businesses.
          </p>
        </ScrollReveal>

        {/* ── Mobile: horizontal drag-scroll / Desktop: 3-col grid ── */}
        {/* Drag hint — mobile only */}
        <div className="flex sm:hidden items-center gap-2 mb-4 text-white/30 px-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="font-body text-[10px] uppercase tracking-widest font-bold">Swipe to explore</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        <div
          ref={dragRef}
          className="
            flex sm:grid sm:grid-cols-2 lg:grid-cols-3
            gap-6 lg:gap-8 mb-16 sm:mb-24
            overflow-x-auto sm:overflow-visible
            scroll-smooth snap-x snap-mandatory sm:snap-none
            hide-scrollbar
            cursor-grab select-none
          "
          style={{
            WebkitOverflowScrolling: 'touch',
            overscrollBehaviorX: 'contain',
            maskImage: 'linear-gradient(to right, transparent, black 3%, black 97%, transparent)',
          }}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[85vw] sm:w-auto"
              style={{
                opacity: 1,
                transform: 'translateY(0)',
                animation: `portfolio-card-in 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 120}ms both`,
              }}
            >
              <div
                className="group relative bg-[#05050C] rounded-[2rem] overflow-hidden p-[1px] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
                style={{ boxShadow: `0 10px 40px rgba(0,0,0,0.5)` }}
              >
                {/* Border Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-100 transition-opacity duration-500 animate-[gradient-shift_4s_ease-in-out_infinite]"
                  style={{ background: `linear-gradient(135deg, ${p.hex}60, transparent, ${p.hex}60)` }} />

                <div className="relative h-full bg-[#080810]/95 backdrop-blur-2xl rounded-[31px] p-5 xs:p-6 sm:p-8 flex flex-col z-10 overflow-hidden">
                  
                  {/* Internal ambient glow */}
                  <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                    style={{ background: p.hex }} />

                  {/* Top Labels */}
                  <div className="flex items-start justify-between mb-6 sm:mb-8 relative z-10">
                    <span
                      className="font-body font-bold text-[10px] tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.3)]"
                      style={{ background: `${p.hex}15`, border: `1px solid ${p.hex}40`, color: p.hex }}
                    >
                      {p.tag}
                    </span>
                    <span className="font-body text-[10px] font-bold uppercase tracking-widest text-white/30 pt-1 text-right pl-2">{p.location}</span>
                  </div>

                  {/* Main Metric */}
                  <div className="flex-1 flex flex-col justify-center mb-6 sm:mb-8 relative z-10">
                    <p className="font-body text-white/40 text-xs uppercase tracking-widest mb-2 font-bold">{p.label}</p>
                    <div
                      className="font-heading font-black uppercase leading-[1.05] tracking-tight whitespace-pre-line group-hover:scale-[1.03] transition-transform duration-500 origin-left"
                      style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: p.hex, textShadow: `0 0 30px ${p.hex}40` }}
                    >
                      {p.result}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="pt-5 sm:pt-6 relative z-10" style={{ borderTop: `1px solid ${p.hex}20` }}>
                    <p className="font-body text-white/60 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* Action Call */}
        <ScrollReveal data-reveal="fade" delay={400} className="mt-20 text-center">
          <div className="relative group inline-block">
             <div className="absolute -inset-2 bg-gradient-to-r from-[#FF3AF2] to-[#7B2FFF] rounded-full blur-xl opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse" />
             <a
              href="https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20grow%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-heading font-black text-sm md:text-base uppercase tracking-widest text-white bg-[#05050C] border border-white/10 transition-transform duration-300 hover:scale-[1.02]"
             >
               💬 Start Your Success Story 
             </a>
          </div>
        </ScrollReveal>

      </div>
      
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes portfolio-card-in {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @media (prefers-reduced-motion: reduce) {
          [style*="portfolio-card-in"] { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
