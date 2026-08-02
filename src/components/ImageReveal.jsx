/**
 * ImageReveal — GPU-composited curtain wipe
 * ──────────────────────────────────────────
 * HOW IT WORKS (zero-jank approach):
 *   • ONE curtain div, always in DOM (no costly DOM insertions mid-animation)
 *   • Uses scaleX(1→0) with transform-origin: left/right
 *     → pure GPU composite, zero layout/paint triggered
 *   • IntersectionObserver adds a CSS class — no React setState after mount
 *   • Image uses CSS opacity transition (also GPU composited)
 *   • animation-fill-mode: forwards keeps end-state without JS cleanup
 *
 * Props:
 *   src       — image src
 *   alt       — alt text
 *   color     — curtain hex color (default '#00F5D4')
 *   direction — 'left' | 'right' (side curtain slides FROM, default 'left')
 *   delay     — extra delay in seconds before animation starts (default 0)
 *   style     — forwarded to the outer wrapper div
 *   imgStyle  — forwarded to <img>
 */
import { useEffect, useRef, useMemo } from 'react';

let _idCounter = 0;

export default function ImageReveal({
  src,
  alt = '',
  color = '#00F5D4',
  direction = 'left',
  delay = 0,
  style = {},
  imgStyle = {},
}) {
  const wrapRef    = useRef(null);
  const curtainRef = useRef(null);
  const imgRef     = useRef(null);
  const triggeredRef = useRef(false);

  // Unique CSS class per instance so keyframes don't collide
  const uid = useMemo(() => `ir-${++_idCounter}`, []);

  useEffect(() => {
    const wrap    = wrapRef.current;
    const curtain = curtainRef.current;
    const img     = imgRef.current;
    if (!wrap || !curtain || !img) return;

    const trigger = () => {
      if (triggeredRef.current) return;
      triggeredRef.current = true;

      // Small delay before starting
      setTimeout(() => {
        // GPU: set will-change right before animating, clear after
        curtain.style.willChange = 'transform';
        curtain.classList.add(`${uid}-reveal`);

        img.style.willChange = 'opacity';
        img.classList.add(`${uid}-fadein`);

        // Clear will-change after animation ends (saves GPU memory)
        const TOTAL_MS = (0.7 + delay + 0.1) * 1000 + 800;
        setTimeout(() => {
          curtain.style.willChange = 'auto';
          img.style.willChange     = 'auto';
        }, TOTAL_MS);
      }, delay * 1000);
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trigger();
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(wrap);
    return () => obs.disconnect();
  }, [uid, delay]);

  const origin = direction === 'left' ? 'left center' : 'right center';
  const DURATION = '0.7s';
  const EASING   = 'cubic-bezier(0.76, 0, 0.24, 1)';
  const DELAY_S  = `${delay}s`;

  return (
    <>
      {/* Scoped keyframes — injected once per instance */}
      <style>{`
        .${uid}-reveal {
          animation: ${uid}-wipe ${DURATION} ${EASING} ${DELAY_S} forwards !important;
        }
        .${uid}-fadein {
          animation: ${uid}-fade 0.4s ease ${delay + 0.25}s forwards !important;
        }
        @keyframes ${uid}-wipe {
          from { transform: scaleX(1); }
          to   { transform: scaleX(0); }
        }
        @keyframes ${uid}-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      <div
        ref={wrapRef}
        style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%', ...style }}
      >
        {/* Image — hidden until curtain clears */}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0,            /* starts hidden; fadein class reveals */
            ...imgStyle,
          }}
        />

        {/* Single curtain — scaleX from 1→0 along transform-origin */}
        <div
          ref={curtainRef}
          aria-hidden="true"
          style={{
            position:        'absolute',
            inset:           0,
            background:      color,
            transform:       'scaleX(1)',
            transformOrigin: origin,
            zIndex:          2,
          }}
        />
      </div>
    </>
  );
}
