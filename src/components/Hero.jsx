import { useEffect, useRef, useState, useCallback } from 'react';
import InteractiveParticleField from './InteractiveParticleField.jsx';
import { COMPANY_STATS } from '../data/clients.js';
import useCountUp from '../hooks/useCountUp.js';
import GlassShapes from './GlassShapes.jsx';

const WA = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%27d%20like%20to%20know%20how%20you%20can%20grow%20my%20business.';

/* ─── rotating headline words ────────────────────────────────── */
const ROTATING_WORDS = ['Calendar.', 'Bookings.', 'Revenue.', 'Growth.'];

/* ─── stat pills ──────────────────────────────────────────────── */
const STATS = [
  { value: COMPANY_STATS.clientsScaled, suffix: '+', label: 'Beauty Clients', color: '#00F5D4' },
  { value: COMPANY_STATS.googleRating, suffix: '★', label: 'Google Rating',  color: '#FFE600', decimal: true },
  { value: COMPANY_STATS.yearsActive,   suffix: '+', label: 'Years Active',   color: '#7B2FFF' },
];

/* ─── floating particles — reduced count for performance ─────── */
const PARTICLES = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x: 10 + Math.random() * 80,
  y: 10 + Math.random() * 80,
  size: `${1 + Math.random() * 1.4}px`,
  duration: 6 + Math.random() * 6,
  delay: Math.random() * 5,
  color: i % 3 === 0 ? 'rgba(0,245,212,0.6)' : i % 3 === 1 ? 'rgba(123,47,255,0.5)' : 'rgba(255,58,242,0.45)',
  opacity: 0.10 + Math.random() * 0.15,
}));

/* ════════════════════════════════════════════════════════════════
   SUB-COMPONENTS
════════════════════════════════════════════════════════════════ */

/* word-by-word 3D flip reveal */
function SplitHeading({ children, visible, baseDelay = 0.12 }) {
  const words = children.trim().split(' ');
  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) rotateX(0deg)' : 'translateY(40px) rotateX(20deg)',
            transition: `opacity 0.65s ease ${(baseDelay + i * 0.08).toFixed(2)}s,
                         transform 0.65s cubic-bezier(0.22,1,0.36,1) ${(baseDelay + i * 0.08).toFixed(2)}s`,
            marginRight: '0.26em',
            transformOrigin: 'bottom center',
            willChange: 'opacity, transform',
          }}
        >
          {word}
        </span>
      ))}
    </>
  );
}

/* animated rotating gradient word */
function RotatingWord({ words, visible }) {
  const [index, setIndex] = useState(0);
  const [state, setState] = useState('idle');

  useEffect(() => {
    if (!visible) return;
    const iv = setInterval(() => {
      setState('exit');
      setTimeout(() => {
        setIndex(i => (i + 1) % words.length);
        setState('enter');
        setTimeout(() => setState('idle'), 50);
      }, 380);
    }, 2400);
    return () => clearInterval(iv);
  }, [visible, words.length]);

  const isOut = state === 'exit';

  return (
    <span className="relative inline-block" style={{ perspective: '400px' }}>
      <span
        className="relative inline-block glossy-3d-text"
        data-text={words[index]}
        style={{
          opacity: isOut ? 0 : 1,
          transform: isOut
            ? 'translateY(-18px) rotateX(-18deg) skewY(-3deg)'
            : 'translateY(0) rotateX(0deg) skewY(0deg)',
          filter: isOut ? 'blur(4px)' : 'blur(0)',
          transition: 'opacity 0.35s ease, transform 0.38s cubic-bezier(0.4,0,0.2,1), filter 0.35s ease',
          willChange: 'opacity, transform, filter',
        }}
      >
        <span 
          className="relative z-10 text-transparent bg-clip-text inline-block"
          style={{ backgroundImage: 'linear-gradient(120deg, #00F5D4 0%, #7B2FFF 55%, #FF3AF2 100%)' }}
        >
          {words[index]}
        </span>
        {/* Glossy top highlight overlay */}
        <span 
          className="absolute inset-0 z-20 pointer-events-none text-transparent bg-clip-text"
          style={{ backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 35%, rgba(0,0,0,0.3) 80%, rgba(255,255,255,0.3) 100%)' }}
          aria-hidden="true"
        >
          {words[index]}
        </span>
      </span>
      {/* glow halo — reduced on mobile */}
      <span
        className="absolute inset-0 pointer-events-none hidden sm:block"
        style={{
          background: 'radial-gradient(ellipse 80% 60%, rgba(0,245,212,0.22) 0%, transparent 70%)',
          filter: 'blur(16px)',
          animation: 'hero-glow 4s ease-in-out infinite',
        }}
      />
    </span>
  );
}

/* single marquee row */
function MarqueeRow({ tags, reverse = false, speed = 30 }) {
  const set = [...tags, ...tags, ...tags, ...tags];
  return (
    <div
      className="overflow-hidden"
      style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          width: 'max-content',
          animation: `marquee-${reverse ? 'rev' : 'fwd'} ${speed}s linear infinite`,
        }}
      >
        {set.map((tag, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 font-heading font-black text-[10px] sm:text-xs uppercase tracking-widest cursor-default select-none"
            style={{ color: i % 3 === 0 ? 'rgba(0,245,212,0.35)' : i % 3 === 1 ? 'rgba(123,47,255,0.4)' : 'rgba(255,58,242,0.35)' }}
          >
            <span style={{ color: i % 2 === 0 ? '#00F5D4' : '#FF3AF2', fontSize: '8px' }}>◆</span>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* floating stat pill — compact on mobile */
function StatPill({ stat, started, index }) {
  const { value } = useCountUp(stat.value, { duration: 1600, started });
  const display = stat.decimal ? value.toFixed(1) : value;

  return (
    <div
      className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md"
      style={{
        background: `${stat.color}10`,
        border: `1px solid ${stat.color}30`,
        boxShadow: `0 0 14px ${stat.color}15`,
        animation: `stat-float ${3 + index * 0.8}s ease-in-out ${index * 0.3}s infinite`,
      }}
    >
      <span
        className="font-heading font-black text-xs sm:text-sm tabular-nums"
        style={{ color: stat.color, textShadow: `0 0 10px ${stat.color}55` }}
      >
        {display}{stat.suffix}
      </span>
      <span className="font-body text-white/40 text-[9px] sm:text-[10px] uppercase tracking-wider">
        {stat.label}
      </span>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════════ */
export default function Hero() {
  const sectionRef  = useRef(null);
  const headingRef  = useRef(null);
  const glowRef     = useRef(null);
  const ctaRef      = useRef(null);
  const rafRef      = useRef(null);
  const mouseRaf    = useRef(null);
  const magnetRaf   = useRef(null);

  const [visible,      setVisible]      = useState(false);
  const [statsStarted, setStatsStarted] = useState(false);
  const [isDesktop,    setIsDesktop]    = useState(false);
  const [mousePos,     setMousePos]     = useState({ x: 0.5, y: 0.5 });

  /* detect desktop once (avoids SSR mismatch) */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDesktop(window.innerWidth >= 768);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  /* entrance + stats trigger */
  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 60);
    const t2 = setTimeout(() => setStatsStarted(true), 1000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  /* mouse-tracking glow blob — desktop only */
  const onMouseMove = useCallback((e) => {
    if (window.innerWidth < 768) return;
    if (mouseRaf.current) return;
    mouseRaf.current = requestAnimationFrame(() => {
      mouseRaf.current = null;
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect || !glowRef.current) return;
      const mx = (e.clientX - rect.left) / rect.width;
      const my = (e.clientY - rect.top) / rect.height;
      setMousePos({ x: mx, y: my });
      glowRef.current.style.transform =
        `translate(calc(-50% + ${(mx - 0.5) * 120}px), calc(-50% + ${(my - 0.5) * 80}px))`;
    });
  }, []);

  /* magnetic primary CTA — desktop only */
  const onCtaMouseMove = useCallback((e) => {
    if (window.innerWidth < 768) return;
    const el = ctaRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.28;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.28;
    if (magnetRaf.current) cancelAnimationFrame(magnetRaf.current);
    magnetRaf.current = requestAnimationFrame(() => {
      el.style.transform = `translate(${dx}px, ${dy}px) scale(1.03)`;
    });
  }, []);

  const onCtaMouseLeave = useCallback(() => {
    if (!ctaRef.current) return;
    ctaRef.current.style.transition = 'transform 0.55s cubic-bezier(0.34,1.56,0.64,1)';
    ctaRef.current.style.transform  = 'translate(0,0) scale(1)';
    setTimeout(() => { if (ctaRef.current) ctaRef.current.style.transition = ''; }, 550);
  }, []);

  /* scroll-out parallax on heading — desktop only */
  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth < 768) return;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!sectionRef.current || !headingRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const p = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.8)));
        headingRef.current.style.transform = `translateY(${-(p * 60)}px)`;
        // Note: opacity is handled by CSS to avoid gradient text rendering glitches
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current)    cancelAnimationFrame(rafRef.current);
      if (mouseRaf.current)  cancelAnimationFrame(mouseRaf.current);
      if (magnetRaf.current) cancelAnimationFrame(magnetRaf.current);
    };
  }, []);

  /* staggered item entrance helper */
  const item = (delay = 0) => ({
    opacity:    visible ? 1 : 0,
    transform:  visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  /* ── JSX ── */
  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={onMouseMove}
      className="relative flex flex-col overflow-hidden"
      style={{
        minHeight: '100svh',
        paddingTop: 'clamp(3.5rem, 9vh, 5.5rem)',
      }}
    >

      {/* ════ BACKGROUND LAYER ════ */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/40 pointer-events-none" />

        {/* Interactive canvas particle field — DESKTOP ONLY, not mounted on mobile */}
        {isDesktop && (
          <div className="absolute inset-0">
            <InteractiveParticleField />
          </div>
        )}

        {/* CSS particle fallback — mobile only, no animation on low-end */}
        {!isDesktop && (
          <div className="absolute inset-0 pointer-events-none">
            {PARTICLES.map(p => (
              <div
                key={p.id}
                className="absolute rounded-full"
                style={{
                  left: `${p.x}%`, top: `${p.y}%`,
                  width: p.size, height: p.size,
                  background: p.color,
                  opacity: p.opacity,
                  /* no animation on mobile — saves battery */
                }}
              />
            ))}
          </div>
        )}

        {/* mouse-tracking glow blob — desktop only */}
        <div
          ref={glowRef}
          className="hidden md:block absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full will-change-transform pointer-events-none"
          style={{
            transform: 'translate(-50%,-50%)',
            background: 'radial-gradient(circle, rgba(123,47,255,0.12) 0%, rgba(0,245,212,0.06) 50%, transparent 70%)',
            transition: 'transform 0.14s linear',
          }}
        />

        {/* ambient corner glows — smaller on mobile */}
        <div
          className="absolute top-0 right-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at top right, rgba(255,58,242,0.07) 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at bottom left, rgba(0,245,212,0.05) 0%, transparent 65%)' }}
        />

        {/* Chrome/glass floating SVG shapes — desktop only */}
        {isDesktop && <GlassShapes variant="hero" mouseX={mousePos.x} mouseY={mousePos.y} />}
      </div>

      {/* ════ CONTENT — pushes marquee to bottom via flex-1 ════ */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center w-full flex-1 justify-center py-6 sm:py-0">

        {/* ── availability badge ── */}
        <div style={item(0.0)} className="mb-3 sm:mb-6">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{
              background: 'rgba(0,245,212,0.06)',
              border: '1px solid rgba(0,245,212,0.22)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-70" style={{ background: '#00F5D4' }} />
              <span className="relative inline-flex rounded-full h-full w-full" style={{ background: '#00F5D4' }} />
            </span>
            <span className="font-body font-semibold text-white/75 text-[9px] sm:text-xs tracking-[0.1em] sm:tracking-[0.14em] uppercase whitespace-nowrap">
              India's Premier Beauty Growth Agency
            </span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full font-heading font-black text-[8px] sm:text-[9px] uppercase tracking-widest" style={{ background: 'rgba(0,245,212,0.15)', color: '#00F5D4' }}>
              Accepting Clients
            </span>
          </div>
        </div>

        {/* ── headline — clamp for smooth mobile scaling ── */}
        <h1
          ref={headingRef}
          className="font-heading font-black uppercase tracking-tighter text-white max-w-[18rem] sm:max-w-2xl md:max-w-4xl mb-3 sm:mb-5 will-change-transform"
          style={{
            fontSize: 'clamp(2rem, 8vw, 6rem)',
            lineHeight: 0.92,
            perspective: '800px',
          }}
        >
          <SplitHeading visible={visible} baseDelay={0.1}>
            We Don't Run Ads.
          </SplitHeading>
          <br />
          <SplitHeading visible={visible} baseDelay={0.3}>
            We Fill Your
          </SplitHeading>{' '}
          <RotatingWord words={ROTATING_WORDS} visible={visible} />
        </h1>

        {/* ── subtext ── */}
        <p
          className="font-body text-white/50 max-w-[16rem] sm:max-w-md leading-relaxed mb-4 sm:mb-7"
          style={{ fontSize: 'clamp(0.78rem, 2.5vw, 1rem)', ...item(0.65) }}
        >
          We help beauty businesses in India turn their Instagram presence into
          a consistent, predictable stream of real bookings — every month.
        </p>

        {/* ── animated stat pills — compact on mobile ── */}
        <div
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mb-4 sm:mb-7"
          style={item(0.78)}
        >
          {STATS.map((s, i) => (
            <StatPill key={i} stat={s} started={statsStarted} index={i} />
          ))}
        </div>

        {/* ── CTA buttons ── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 w-full max-w-[280px] sm:max-w-none"
          style={item(0.9)}
        >
          {/* primary */}
          <a
            ref={ctaRef}
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={onCtaMouseMove}
            onMouseLeave={onCtaMouseLeave}
            className="hero-cta-primary relative inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full font-heading font-black uppercase tracking-widest text-background overflow-hidden"
            style={{
              background: '#00F5D4',
              willChange: 'transform',
              fontSize: 'clamp(0.65rem, 2.2vw, 0.8rem)',
              padding: 'clamp(0.6rem, 2.5vw, 1rem) clamp(1.25rem, 5vw, 2rem)',
            }}
          >
            <span className="hero-cta-sweep absolute inset-0 pointer-events-none" />
            <span className="relative z-10 whitespace-nowrap">Get Your Growth Plan</span>
            <svg className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* secondary */}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full font-heading font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.55)',
              fontSize: 'clamp(0.65rem, 2.2vw, 0.8rem)',
              padding: 'clamp(0.6rem, 2.5vw, 1rem) clamp(1.25rem, 5vw, 2rem)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
            }}
          >
            See Our Work
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Scroll hint — desktop only */}
        <div className="hidden sm:flex flex-col items-center gap-1 mt-5 opacity-40" style={item(1.1)}>
          <span className="font-heading font-black text-white/30 text-[8px] tracking-[0.35em] uppercase">Scroll</span>
          <div className="w-px h-5 bg-white/10 relative overflow-hidden rounded-full">
            <div className="w-full h-1/2 bg-white/35 absolute top-0" style={{ animation: 'hero-scroll-line 1.6s cubic-bezier(0.4,0,0.2,1) infinite' }} />
          </div>
        </div>
      </div>{/* end content container */}

      {/* ══════════════════════════════════════════════════════════
          TRUST BADGE STRIP
      ══════════════════════════════════════════════════════════ */}
      <div
        className="w-full relative z-10 mt-auto py-3 sm:py-4 flex items-center justify-center"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(255,255,255,0.012)',
          ...(isDesktop ? { backdropFilter: 'blur(4px)' } : {}),
          ...item(1.15),
        }}
      >
        <span className="flex items-center gap-3 text-[9px] sm:text-[11px] text-white/30 font-heading font-bold uppercase tracking-[0.3em]">
          <span className="w-1.5 h-1.5 bg-[#FF3AF2] rounded-full animate-pulse shadow-[0_0_8px_#FF3AF2]" />
          Trusted by 200+ beauty businesses across India
          <span className="w-1.5 h-1.5 bg-[#00F5D4] rounded-full shadow-[0_0_8px_#00F5D4]" />
        </span>
      </div>

      {/* ════ KEYFRAMES + COMPONENT STYLES ════ */}
      <style>{`
        /* ── glossy 3d text effect ── */
        .glossy-3d-text::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          z-index: 0;
          color: transparent;
          text-shadow: 
            0 1px 0 rgba(255,255,255,0.4),
            0 2px 0 #00F5D4,
            0 3px 0 #7B2FFF,
            0 4px 0 #FF3AF2,
            0 5px 0 rgba(255,58,242,0.5),
            0 8px 15px rgba(0,0,0,0.6);
        }

        /* ── hero glow pulse ── */
        @keyframes hero-glow {
          0%, 100% { opacity: 0.5; transform: scale(0.95); }
          50%       { opacity: 1;  transform: scale(1.05); }
        }

        /* ── scroll indicator ── */
        @keyframes hero-scroll-line {
          0%   { transform: translateY(-100%); opacity: 0.8; }
          100% { transform: translateY(250%);  opacity: 0; }
        }

        /* ── particle float ── */
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) scale(1); }
          40%       { transform: translateY(-14px) scale(1.2); }
          70%       { transform: translateY(8px) scale(0.85); }
        }

        /* ── stat pill float ── */
        @keyframes stat-float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-4px); }
        }

        /* ── stat pill float ── */
        @keyframes stat-float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-4px); }
        }

        /* ── primary CTA ── */
        .hero-cta-primary {
          box-shadow: 0 0 24px rgba(0,245,212,0.22), 0 4px 20px rgba(0,0,0,0.28);
          transition: box-shadow 0.35s ease, filter 0.35s ease;
        }
        .hero-cta-primary:hover {
          box-shadow: 0 0 44px rgba(0,245,212,0.42), 0 4px 28px rgba(0,0,0,0.3);
          filter: brightness(1.06);
        }

        /* ── CTA shimmer sweep ── */
        .hero-cta-sweep {
          background: linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.2) 50%, transparent 65%);
          background-size: 200% 100%;
          background-position: -100% 0;
          border-radius: inherit;
          transition: background-position 0.6s ease;
        }
        .hero-cta-primary:hover .hero-cta-sweep {
          background-position: 200% 0;
        }

        /* ── mobile: kill expensive effects ── */
        @media (max-width: 767px) {
          @keyframes stat-float    { 0%, 100% { transform: none; } }
          @keyframes float-particle { 0%, 100% { transform: none; } }
          .hero-cta-primary {
            box-shadow: 0 0 16px rgba(0,245,212,0.18);
          }
          /* Remove glow filters from bg blobs */
          #hero .absolute[style*="blur"] {
            filter: none !important;
          }
        }

        /* ── reduced-motion ── */
        @media (prefers-reduced-motion: reduce) {
          .hero-cta-primary, .hero-cta-sweep,
          [style*="float-particle"], [style*="stat-float"] {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}