import { useEffect, useRef, useState } from 'react';

/**
 * GlassShapes — 2-3 small chrome/glass SVG shapes that float and
 * optionally react to mouse position on desktop.
 *
 * Props:
 *   variant  — 'hero' | 'cta' (controls which shapes + positions)
 *   mouseX   — normalised 0-1 cursor X within parent (optional)
 *   mouseY   — normalised 0-1 cursor Y within parent (optional)
 */

/* ── SVG shape definitions ─────────────────────────────────────── */

function ChromeRing({ className, style }) {
  return (
    <svg className={className} style={style} width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ringGrad" x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00F5D4" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#7B2FFF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FF3AF2" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="ringHighlight" x1="18" y1="8" x2="54" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
        </linearGradient>
        <filter id="ringShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#7B2FFF" floodOpacity="0.35" />
        </filter>
      </defs>
      <circle cx="36" cy="36" r="28" stroke="url(#ringGrad)" strokeWidth="5" fill="none" filter="url(#ringShadow)" />
      <circle cx="36" cy="36" r="28" stroke="url(#ringHighlight)" strokeWidth="3" fill="none" />
    </svg>
  );
}

function ChromeArrow({ className, style }) {
  return (
    <svg className={className} style={style} width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="arrowGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF3AF2" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#7B2FFF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#00F5D4" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="arrowHighlight" x1="14" y1="4" x2="42" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id="arrowShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#FF3AF2" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* Pointer / cursor triangle shape */}
      <path d="M12 8 L44 28 L12 48 Z" fill="url(#arrowGrad)" filter="url(#arrowShadow)" />
      <path d="M12 8 L44 28 L12 48 Z" fill="url(#arrowHighlight)" />
    </svg>
  );
}

function GlassBlob({ className, style }) {
  return (
    <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="blobGrad" cx="40%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#00F5D4" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#7B2FFF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FF3AF2" stopOpacity="0.15" />
        </radialGradient>
        <radialGradient id="blobHighlight" cx="35%" cy="25%" r="40%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="blobShadow">
          <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#00F5D4" floodOpacity="0.25" />
        </filter>
      </defs>
      {/* Organic blob shape */}
      <path
        d="M32 6 C48 6, 58 18, 58 32 C58 46, 48 58, 32 58 C16 58, 6 46, 6 32 C6 18, 16 6, 32 6 Z"
        fill="url(#blobGrad)"
        filter="url(#blobShadow)"
        style={{ transform: 'rotate(-15deg)', transformOrigin: 'center' }}
      />
      <path
        d="M32 6 C48 6, 58 18, 58 32 C58 46, 48 58, 32 58 C16 58, 6 46, 6 32 C6 18, 16 6, 32 6 Z"
        fill="url(#blobHighlight)"
        style={{ transform: 'rotate(-15deg)', transformOrigin: 'center' }}
      />
    </svg>
  );
}

/* ── real glossy 3D-rendered icon images (replacing SVG approximations) ── */

function IconImage({ src, alt, glow, className, style }) {
  return (
    <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
      {/* 3D Depth Shadow — pushed back in Z-space so it shifts realistically when tilted */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${glow} 0%, transparent 65%)`,
          transform: 'translateY(12%) translateZ(-35px) scale(0.85)',
          filter: 'blur(12px)',
          opacity: 0.65
        }}
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        draggable="false"
        className={className}
        style={{
          ...style,
          transform: 'translateZ(15px)', // lift image forward
          filter: `drop-shadow(0 4px 8px rgba(0,0,0,0.3))` // ambient contact shadow
        }}
      />
    </div>
  );
}

/* ── Placement configs ─────────────────────────────────────────── */
/* Real rendered icons: mirror + sparkle used in hero, heart + perfume in
   CTA. lipstick.webp and brush.webp are available in /public/icons for
   future use elsewhere (e.g. Portfolio/Services) — not wired in yet. */

const PLACEMENTS = {
  hero: [
    { Icon: props => <IconImage src="/icons/icon-mirror.webp"  alt="" glow="rgba(0,245,212,0.35)" {...props} />,  pos: { top: '18%', right: '8%' },  size: 76, anim: 'glass-float-a', parallaxFactor: 18 },
    { Icon: props => <IconImage src="/icons/icon-sparkle.webp" alt="" glow="rgba(255,58,242,0.35)" {...props} />, pos: { bottom: '28%', left: '6%' }, size: 52, anim: 'glass-float-b', parallaxFactor: 12 },
  ],
  cta: [
    { Icon: props => <IconImage src="/icons/icon-heart.webp"   alt="" glow="rgba(123,47,255,0.35)" {...props} />, pos: { top: '15%', left: '5%' },   size: 60, anim: 'glass-float-c', parallaxFactor: 14 },
    { Icon: props => <IconImage src="/icons/icon-perfume.webp" alt="" glow="rgba(0,245,212,0.3)"  {...props} />,  pos: { bottom: '20%', right: '7%' }, size: 58, anim: 'glass-float-a', parallaxFactor: 16 },
  ],
};

export default function GlassShapes({ variant = 'hero' }) {
  /* refs point to the INNER parallax layer only — the outer wrapper owns
     the CSS float animation, so JS-driven transform and the CSS keyframe
     transform never fight over the same element/property. */
  const parallaxRef = useRef([]);
  const rafRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger entrance animation shortly after mount
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  /* Mouse parallax — desktop only, uses rAF */
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const firstEl = parallaxRef.current[0];
    const container = firstEl ? (firstEl.closest('section') || document.body) : document.body;

    const onMouseMove = (e) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const mx = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const my = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

        parallaxRef.current.forEach((el, i) => {
          if (!el) return;
          const factor = PLACEMENTS[variant]?.[i]?.parallaxFactor || 10;
          const dx = (mx - 0.5) * factor;
          const dy = (my - 0.5) * factor;
          
          // 3D Tilt calculation (max ~14 degrees)
          // rx: cursor at top (my=0) -> positive rotateX (lifts top edge toward viewer)
          // ry: cursor at left (mx=0) -> negative rotateY (lifts left edge toward viewer)
          const tiltMax = 14;
          const rx = -(my - 0.5) * tiltMax * 2;
          const ry = (mx - 0.5) * tiltMax * 2;

          el.style.transform = `translate(${dx}px, ${dy}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        });
      });
    };

    container.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [variant]);

  const items = PLACEMENTS[variant] || PLACEMENTS.hero;

  return (
    <>
      {items.map(({ Icon, pos, size, anim }, i) => (
        /* LAYER 1 (Outer): Absolute positioning, perspective root, and CSS float/rotate animation */
        <div
          key={i}
          className="absolute pointer-events-none z-10 hidden md:block glass-shape-wrapper"
          style={{
            ...pos,
            width: size,
            height: size,
            perspective: '800px',
            animation: `${anim} ${6 + i * 2}s ease-in-out infinite`,
          }}
        >
          {/* LAYER 2 (Entrance): 3D flip-in transition on mount */}
          <div
            className="w-full h-full glass-shape-entrance"
            style={{
              transformStyle: 'preserve-3d',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'rotateY(0deg)' : 'rotateY(75deg) scale(0.9)',
              transition: `opacity 0.8s ease-out ${i * 0.15}s, transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) ${i * 0.15}s`,
            }}
          >
            {/* LAYER 3 (Idle Tilt): Continuous slow pendulum rotation */}
            <div
              className="w-full h-full glass-shape-idle"
              style={{
                transformStyle: 'preserve-3d',
                animation: `glass-tilt-idle ${10 + i * 2}s ease-in-out infinite alternate`,
              }}
            >
              {/* LAYER 4 (JS Parallax): Mouse translate + mouse tilt */}
              <div
                ref={el => { parallaxRef.current[i] = el; }}
                className="w-full h-full glass-shape-inner"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translate(0px, 0px) rotateX(0deg) rotateY(0deg)',
                  willChange: 'transform',
                  transition: 'transform 0.15s linear',
                }}
              >
                <Icon className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      ))}

      <style>{`
        @keyframes glass-tilt-idle {
          0%   { transform: rotateY(-6deg) rotateX(3deg); }
          100% { transform: rotateY(6deg) rotateX(-3deg); }
        }
        @keyframes glass-float-a {
          0%, 100% { transform: translateY(0); }
          33%      { transform: translateY(-10px); }
          66%      { transform: translateY(6px); }
        }
        @keyframes glass-float-b {
          0%, 100% { transform: translateY(0); }
          40%      { transform: translateY(8px); }
          75%      { transform: translateY(-6px); }
        }
        @keyframes glass-float-c {
          0%, 100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-8px) scale(1.05); }
        }

        @media (max-width: 767px) {
          .glass-shape-wrapper { display: none !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .glass-shape-wrapper, .glass-shape-idle {
            animation: none !important;
          }
          .glass-shape-inner, .glass-shape-entrance {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </>
  );
}
