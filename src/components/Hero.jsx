import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const WA = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%27d%20like%20to%20know%20how%20you%20can%20grow%20my%20business.';

export default function Hero() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const rafRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  /* ── Fade-in on mount ── */
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  /* ── Scroll-driven parallax — desktop only ── */
  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth < 768) return; // disable on mobile
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!sectionRef.current || !headingRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const p = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.8)));
        headingRef.current.style.transform = `translateY(${-(p * 80)}px)`;
        headingRef.current.style.opacity = String(1 - p * 0.9);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100svh] sm:min-h-[95svh] flex flex-col items-center justify-center overflow-hidden bg-background pt-20 pb-16 sm:pt-24 sm:pb-28"
    >
      {/* ── Single soft background glow — CSS only, no JS ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 pattern-grid opacity-100" />
        {/* Centre glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(123,47,255,0.12) 0%, rgba(0,245,212,0.05) 50%, transparent 70%)' }} />
        {/* Top-right accent */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle at top right, rgba(255,58,242,0.07) 0%, transparent 60%)' }} />
      </div>

      {/* ── Content ── */}
      <div
        className="container mx-auto px-5 sm:px-6 relative z-10 flex flex-col items-center text-center"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
        }}
      >
        {/* Eyebrow label */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent-2/25 bg-accent-2/6 backdrop-blur-sm mb-7 sm:mb-9">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-2 opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-2" />
          </span>
          <span className="font-body font-semibold text-white/75 text-xs sm:text-sm tracking-[0.16em] uppercase">
            India's Premier Beauty Growth Agency
          </span>
        </div>

        {/* ── Headline — parallax target ── */}
        <h1
          ref={headingRef}
          className="font-heading font-black uppercase tracking-tighter text-white max-w-5xl mb-4 sm:mb-7 will-change-transform"
          style={{
            fontSize: 'clamp(2.4rem, 8vw, 7rem)',
            lineHeight: 0.92,
            transition: 'opacity 0.2s ease',
          }}
        >
          We Don't Run Ads.{' '}
          <br className="hidden sm:block" />
          We Fill Your{' '}
          <span className="relative inline-block">
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(120deg, #00F5D4 0%, #7B2FFF 60%, #FF3AF2 100%)' }}
            >
              Calendar.
            </span>
            {/* Soft glow — CSS only */}
            <span
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse, rgba(0,245,212,0.18) 0%, transparent 70%)',
                filter: 'blur(16px)',
                animation: 'hero-glow 4s ease-in-out infinite',
              }}
            />
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="font-body text-white/60 max-w-xl leading-relaxed mb-6 sm:mb-10 text-sm sm:text-base"
        >
          We help beauty businesses in India turn their Instagram presence into
          a consistent, predictable stream of real bookings — every month.
        </p>

        {/* ── Trust strip ── */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 mb-8 sm:mb-12">
          {[
            '200+ beauty clients',
            '5.0 Google rating',
            'Trusted across India',
          ].map((text, i) => (
            <span key={i} className="inline-flex items-center gap-2 font-body text-white/40 text-[11px] sm:text-sm">
              {i > 0 && <span className="text-white/15">|</span>}
              <span className="w-1 h-1 rounded-full bg-accent-2 inline-block" />
              {text}
            </span>
          ))}
        </div>

        {/* ── CTAs ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">

          {/* Primary CTA */}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-primary w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-full font-heading font-black text-sm sm:text-base uppercase tracking-widest text-background transition-all duration-300 hover:brightness-105 hover:scale-[1.02]"
            style={{ background: '#00F5D4' }}
          >
            Get Your Growth Plan
          </a>

          {/* Secondary */}
          <Link
            to="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 sm:py-5 bg-transparent border border-white/12 text-white/55 rounded-full font-heading font-black text-sm sm:text-base uppercase tracking-widest hover:text-white hover:border-white/25 hover:bg-white/4 transition-all duration-300"
          >
            See Our Work
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Microtext */}

      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: mounted ? 1 : 0, transition: 'opacity 1s ease 0.8s' }}
      >
        <span className="font-heading font-black text-white/15 text-[9px] tracking-[0.35em] uppercase">Scroll</span>
        <div className="w-px h-7 bg-white/8 relative overflow-hidden rounded-full">
          <div className="w-full h-1/2 bg-white/30 absolute top-0" style={{ animation: 'hero-scroll-line 1.6s cubic-bezier(0.4,0,0.2,1) infinite' }} />
        </div>
      </div>

      {/* ── Minimal CSS animations — no JS loops ── */}
      <style>{`
        @keyframes hero-glow {
          0%, 100% { opacity: 0.6; transform: scale(0.95); }
          50%       { opacity: 1;   transform: scale(1.05); }
        }
        @keyframes hero-scroll-line {
          0%   { transform: translateY(-100%); opacity: 0.8; }
          100% { transform: translateY(250%);  opacity: 0;   }
        }
        .hero-cta-primary {
          box-shadow: 0 0 24px rgba(0,245,212,0.2);
        }
        .hero-cta-primary:hover {
          box-shadow: 0 0 36px rgba(0,245,212,0.35);
        }
      `}</style>
    </section>
  );
}