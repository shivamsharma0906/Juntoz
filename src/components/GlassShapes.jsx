import { useEffect, useRef, useCallback } from 'react';

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

/* ── Placement configs ─────────────────────────────────────────── */

const PLACEMENTS = {
  hero: [
    { Shape: ChromeRing,  pos: { top: '18%', right: '8%' },  size: 72, anim: 'glass-float-a', parallaxFactor: 18 },
    { Shape: ChromeArrow, pos: { bottom: '28%', left: '6%' }, size: 48, anim: 'glass-float-b', parallaxFactor: 12 },
  ],
  cta: [
    { Shape: GlassBlob,   pos: { top: '15%', left: '5%' },   size: 56, anim: 'glass-float-c', parallaxFactor: 14 },
    { Shape: ChromeRing,  pos: { bottom: '20%', right: '7%' }, size: 52, anim: 'glass-float-a', parallaxFactor: 16 },
  ],
};

export default function GlassShapes({ variant = 'hero' }) {
  const shapesRef = useRef([]);
  const rafRef = useRef(null);

  /* Mouse parallax — desktop only, uses rAF */
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Find the closest section to track mouse movement within the section
    const firstShape = shapesRef.current[0];
    const container = firstShape ? (firstShape.closest('section') || document.body) : document.body;

    const onMouseMove = (e) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        // Calculate normalized mouse coordinates (0 to 1)
        const mx = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const my = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

        shapesRef.current.forEach((el, i) => {
          if (!el) return;
          const factor = PLACEMENTS[variant]?.[i]?.parallaxFactor || 10;
          const dx = (mx - 0.5) * factor;
          const dy = (my - 0.5) * factor;
          el.style.transform = `translate(${dx}px, ${dy}px)`;
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
      {items.map(({ Shape, pos, size, anim }, i) => (
        <div
          key={i}
          ref={el => { shapesRef.current[i] = el; }}
          className="absolute pointer-events-none z-10 hidden md:block glass-shape-wrapper"
          style={{
            ...pos,
            width: size,
            height: size,
            animation: `${anim} ${6 + i * 2}s ease-in-out infinite`,
            willChange: 'transform',
            transition: 'transform 0.15s linear',
          }}
        >
          <Shape
            className="w-full h-full"
            style={{ opacity: 0.7 }}
          />
        </div>
      ))}

      <style>{`
        @keyframes glass-float-a {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33%      { transform: translateY(-10px) rotate(8deg); }
          66%      { transform: translateY(6px) rotate(-4deg); }
        }
        @keyframes glass-float-b {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          40%      { transform: translateY(8px) rotate(-10deg); }
          75%      { transform: translateY(-6px) rotate(5deg); }
        }
        @keyframes glass-float-c {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          50%      { transform: translateY(-8px) rotate(6deg) scale(1.05); }
        }

        @media (max-width: 767px) {
          .glass-shape-wrapper { display: none !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .glass-shape-wrapper {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
