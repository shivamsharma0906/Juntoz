import { useEffect, useRef, useState } from 'react';
import GlassShapes from './GlassShapes.jsx';

const WA = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20book%20a%20strategy%20call.';

const TICKER = ['FREE STRATEGY CALL','LIMITED JUNE SLOTS','200+ BRANDS SCALED','5.0 GOOGLE RATING','3× AVG GROWTH','JUNTOZ DIGITAL','BOOK NOW'];

const PROOF = [
  { num: '200+', label: 'Brands Scaled' },
  { num: '5.0 ★', label: 'Google Rating' },
  { num: '3×',   label: 'Avg. Growth'   },
  { num: '3yrs', label: 'Experience'    },
];

export default function CTASection() {
  const ref = useRef(null);
  const headingRef = useRef(null);
  const rafRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* ── IntersectionObserver for entrance ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  /* ── Scroll-driven parallax on heading ── */
  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!ref.current || !headingRef.current) return;
        const rect = ref.current.getBoundingClientRect();
        // progress: 0 when section top hits viewport top → 1 when section is 70% scrolled past
        const raw = -rect.top / (rect.height * 0.7);
        const p = Math.max(0, Math.min(1, raw));
        const ty  = -(p * 110);          // move up 110px at full scroll
        const sc  = 1 - p * 0.12;        // shrink to 88%
        const op  = 1 - p * 0.75;        // fade to 25%
        headingRef.current.style.transform  = `translateY(${ty}px) scale(${sc})`;
        headingRef.current.style.opacity    = op;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section ref={ref} id="cta" className="relative flex flex-col overflow-hidden" style={{ background: '#04040C', minHeight: 'min(90vh, 100svh)' }}>

      {/* ── Aurora background ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="aurora-1 absolute w-[900px] h-[600px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(ellipse, rgba(123,47,255,0.5) 0%, rgba(255,58,242,0.2) 40%, transparent 70%)', top: '10%', left: '-10%' }} />
        <div className="aurora-2 absolute w-[700px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(ellipse, rgba(0,245,212,0.4) 0%, rgba(123,47,255,0.15) 50%, transparent 70%)', bottom: '5%', right: '-5%' }} />
        <div className="aurora-3 absolute w-[500px] h-[400px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(ellipse, rgba(255,58,242,0.3) 0%, transparent 70%)', top: '50%', left: '40%' }} />
      </div>

      {/* ── Chrome/glass floating shapes — desktop only ── */}
      <GlassShapes variant="cta" />

      {/* ── GRID ── */}
      <div className="absolute inset-0 pattern-grid opacity-20 pointer-events-none z-0" />

      {/* ── VERTICAL ACCENT LINES ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full opacity-[0.06]"
          style={{ background: 'linear-gradient(to bottom, transparent, #FF3AF2 30%, #FF3AF2 70%, transparent)' }} />
        <div className="absolute top-0 right-1/4 w-px h-full opacity-[0.06]"
          style={{ background: 'linear-gradient(to bottom, transparent, #00F5D4 30%, #00F5D4 70%, transparent)' }} />
      </div>

      {/* ── TOP TICKER ── */}
      <div className="relative z-10 py-3 overflow-hidden border-b border-white/[0.05]"
        style={{ background: 'rgba(255,58,242,0.04)' }}>
        <div className="cta-ticker-fwd flex whitespace-nowrap w-max">
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-5 font-heading font-black text-[11px] uppercase tracking-[0.22em] text-white/25">
              {t}<span className="w-1 h-1 rounded-full bg-accent-1/40 shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ══════ MAIN CONTENT ══════ */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-6 py-10 sm:py-16 text-center">

          {/* ── STATUS BADGE ── */}
          <div className={`inline-flex items-center gap-2.5 px-5 py-2 rounded-full border mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            style={{ borderColor: 'rgba(255,58,242,0.3)', background: 'rgba(255,58,242,0.07)' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-1 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-1" />
            </span>
            <span className="font-body text-accent-1 text-[11px] font-bold uppercase tracking-[0.25em]">
              Strategy Calls Open — June 2025
            </span>
          </div>

          {/* ── HEADING (parallax target) ── */}
          <div
            ref={headingRef}
            className={`mb-8 transition-[opacity,transform] delay-100 will-change-transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDuration: visible ? '0ms' : '1000ms' }}
          >
            <h2 className="font-heading font-black uppercase leading-[0.82] tracking-tighter select-none">

              {/* Line 1: solid white */}
              <span className="block text-white" style={{ fontSize: 'clamp(2rem,7vw,8.5rem)' }}>
                READY TO BE
              </span>

              {/* Line 2: massive gradient italic — focal point */}
              <span className="relative block cta-glitch" style={{ fontSize: 'clamp(2.8rem,10vw,12rem)', fontStyle: 'italic' }}
                data-text="BOOKED SOLID">
                <span style={{
                  background: 'linear-gradient(120deg,#FF3AF2 0%,#7B2FFF 55%,#00F5D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 40px rgba(255,58,242,0.45))',
                  display: 'block',
                }}>
                  BOOKED SOLID
                </span>
              </span>

              <span className="block" style={{
                fontSize: 'clamp(1.6rem,5.5vw,6.5rem)',
                color: 'transparent',
                WebkitTextStroke: '1.5px rgba(255,255,255,0.22)',
              }}>
                EVERY SINGLE MONTH?
              </span>
            </h2>
          </div>

          {/* ── SUBTITLE ── */}
          <p className={`font-body text-white/40 text-sm sm:text-lg md:text-xl max-w-lg mx-auto leading-relaxed mb-8 sm:mb-10 transition-all duration-1000 delay-200 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            One free call. We map your entire growth system.&nbsp;
            <span className="text-white/65 font-semibold">You leave with a plan — or it's on us.</span>
          </p>

          

          {/* ── CTA BUTTON with spinning gradient ring ── */}
          <div className={`mb-16 transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative inline-block p-[3px] rounded-full overflow-hidden">
              {/* Spinning ring */}
              <div className="absolute cta-spin-ring"
                style={{ inset: '-40px', background: 'conic-gradient(from 0deg, #FF3AF2, #7B2FFF, #00F5D4, #7B2FFF, #FF3AF2)' }} />
              {/* Button */}
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 px-7 py-4 sm:px-12 sm:py-5 md:px-20 md:py-7 rounded-full font-heading font-black text-base sm:text-xl md:text-2xl uppercase tracking-widest text-white overflow-hidden transition-transform duration-300 hover:scale-[1.04] active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #1a0a2e 0%, #0d0d2a 50%, #0a1a2e 100%)',
                  boxShadow: '0 0 60px rgba(255,58,242,0.3), 0 20px 60px rgba(0,0,0,0.6)',
                }}
              >
                {/* Hover fill */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: 'linear-gradient(135deg, rgba(255,58,242,0.15), rgba(123,47,255,0.2), rgba(0,245,212,0.1))' }} />
                {/* Shimmer */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }} />
                {/* WhatsApp icon */}
                <svg className="relative z-10 w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.139.564 4.147 1.549 5.878L0 24l6.272-1.524A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.5-5.24-1.375l-.374-.222-3.724.904.938-3.617-.243-.387A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                <span className="relative z-10">Book Your Free Call</span>
              </a>
            </div>
            <p className="mt-4 font-body text-white/20 text-xs uppercase tracking-[0.2em]">
              20 min · Free · No long-term contracts
            </p>
          </div>

          {/* ── PROOF CARDS ── */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto transition-all duration-1000 delay-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {PROOF.map((p, i) => (
              <div key={i} className="glass-card px-4 py-5 text-center group hover:border-white/15 hover:-translate-y-1 transition-all duration-300">
                <div className="font-heading font-black text-2xl text-white group-hover:text-accent-2 transition-colors duration-300">{p.num}</div>
                <div className="font-body text-white/35 text-[10px] uppercase tracking-widest mt-1">{p.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── BOTTOM TICKER (reversed) ── */}
      <div className="relative z-10 py-3 overflow-hidden border-t border-white/[0.05]"
        style={{ background: 'rgba(0,245,212,0.025)' }}>
        <div className="cta-ticker-rev flex whitespace-nowrap w-max">
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-5 font-heading font-black text-[11px] uppercase tracking-[0.22em] text-white/15">
              {t}<span className="w-1 h-1 rounded-full bg-accent-2/25 shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ── CORNER BRACKETS ── */}
      <div className="absolute top-16 left-6 w-10 h-10 border-t-2 border-l-2 border-accent-1/25 pointer-events-none z-10" />
      <div className="absolute top-16 right-6 w-10 h-10 border-t-2 border-r-2 border-accent-1/25 pointer-events-none z-10" />
      <div className="absolute bottom-16 left-6 w-10 h-10 border-b-2 border-l-2 border-accent-2/25 pointer-events-none z-10" />
      <div className="absolute bottom-16 right-6 w-10 h-10 border-b-2 border-r-2 border-accent-2/25 pointer-events-none z-10" />

      {/* ── STYLES ── */}
      <style>{`
        @keyframes aurora-shift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(80px, -60px) scale(1.1); }
          66%       { transform: translate(-60px, 40px) scale(0.95); }
        }
        @keyframes aurora-shift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(-80px, 60px) scale(1.08); }
          66%       { transform: translate(50px, -40px) scale(1.02); }
        }
        @keyframes aurora-shift-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(40px, 30px) scale(1.05); }
        }
        .aurora-1 { animation: aurora-shift-1 18s ease-in-out infinite; }
        .aurora-2 { animation: aurora-shift-2 22s ease-in-out infinite; }
        .aurora-3 { animation: aurora-shift-3 15s ease-in-out infinite; }

        @keyframes cta-ticker-fwd {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .cta-ticker-fwd { animation: cta-ticker-fwd 22s linear infinite; }

        @keyframes cta-ticker-rev {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .cta-ticker-rev { animation: cta-ticker-rev 28s linear infinite; }

        @keyframes cta-ring-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .cta-spin-ring {
          border-radius: 0;
          animation: cta-ring-spin 3s linear infinite;
        }

        @keyframes cta-glitch-anim {
          0%,90%,100% { clip-path: none; transform: none; }
          91% { clip-path: polygon(0 15%,100% 15%,100% 35%,0 35%); transform: translateX(-5px); }
          92% { clip-path: polygon(0 60%,100% 60%,100% 75%,0 75%); transform: translateX(5px); }
          93% { clip-path: none; transform: none; }
        }
        .cta-glitch { animation: cta-glitch-anim 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
