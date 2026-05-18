/**
 * MagneticCursor — Premium agency custom cursor
 * - Small cyan dot that tracks exactly
 * - Larger ring that lerps behind with spring
 * - Morphs on hover: buttons → expand pink, headings → pill shape
 * - Desktop-only (hidden on touch devices)
 *
 * FIXES:
 * - Uses stateRef so RAF loop always reads fresh state (no stale closure jitter)
 * - Skips <nav> elements to avoid double-transform conflict with Navbar magnetics
 * - Cleans up dataset flags on unmount so HMR re-mounts work correctly
 */
import { useEffect, useRef, useState } from 'react';

export default function MagneticCursor() {
  const dotRef   = useRef(null);
  const ringRef  = useRef(null);
  const pos      = useRef({ x: -200, y: -200 });
  const ringPos  = useRef({ x: -200, y: -200 });
  const rafRef   = useRef(null);
  const stateRef = useRef('default'); // always fresh — no stale closure

  const [state,   setState]   = useState('default');
  const [visible, setVisible] = useState(false);

  // Keep the ref in sync with React state
  useEffect(() => { stateRef.current = state; }, [state]);

  useEffect(() => {
    // Only run on pointer-fine (mouse) devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onOver = (e) => {
      const el = e.target;
      if (el.closest('a, button, [role="button"]')) setState('button');
      else if (el.closest('h1, h2, h3, h4'))        setState('text');
      else                                            setState('default');
    };

    /* ── magnetic pull on interactive elements ──
       Skip elements inside <nav> — the Navbar component has its own magnetic
       handlers on CTA + links, causing double-transforms if we also attach here. */
    const magnetEls = [];

    const setupMagnets = () => {
      document.querySelectorAll('a, button').forEach(el => {
        if (
          el.dataset.magnetCursorInited ||
          el.closest('nav') ||
          el.dataset.noMagnet
        ) return;

        el.dataset.magnetCursorInited = '1';

        const onEnterEl = (e) => {
          const rect = el.getBoundingClientRect();
          const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.3;
          const dy = (e.clientY - (rect.top  + rect.height / 2)) * 0.3;
          el.style.transition = 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)';
          el.style.transform  = `translate(${dx}px, ${dy}px)`;
        };
        const onMoveEl = (e) => {
          const rect = el.getBoundingClientRect();
          const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
          const dy = (e.clientY - (rect.top  + rect.height / 2)) * 0.25;
          el.style.transform  = `translate(${dx}px, ${dy}px)`;
        };
        const onLeaveEl = () => {
          el.style.transition = 'transform 0.55s cubic-bezier(0.34,1.56,0.64,1)';
          el.style.transform  = 'translate(0,0)';
          setTimeout(() => {
            if (el.style.transform === 'translate(0,0)') el.style.transition = '';
          }, 550);
        };

        el.addEventListener('mouseenter', onEnterEl);
        el.addEventListener('mousemove',  onMoveEl);
        el.addEventListener('mouseleave', onLeaveEl);
        magnetEls.push({ el, onEnterEl, onMoveEl, onLeaveEl });
      });
    };

    // Delay setup so DOM is fully rendered
    const t = setTimeout(setupMagnets, 800);

    document.addEventListener('mousemove',  onMove,  { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseover',  onOver,  { passive: true });

    /* ── RAF animation loop — reads state from ref (always fresh) ── */
    const animate = () => {
      const dot  = dotRef.current;
      const ring = ringRef.current;
      if (dot && ring) {
        dot.style.transform = `translate(${pos.current.x - 3}px, ${pos.current.y - 3}px)`;

        ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.10;
        ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.10;

        const curState = stateRef.current;
        const hw = curState === 'button' ? 28 : curState === 'text' ? 40 : 18;
        const hh = curState === 'text'   ? 12 : hw;
        ring.style.transform = `translate(${ringPos.current.x - hw}px, ${ringPos.current.y - hh}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      clearTimeout(t);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      document.removeEventListener('mousemove',  onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseover',  onOver);

      magnetEls.forEach(({ el, onEnterEl, onMoveEl, onLeaveEl }) => {
        el.removeEventListener('mouseenter', onEnterEl);
        el.removeEventListener('mousemove',  onMoveEl);
        el.removeEventListener('mouseleave', onLeaveEl);
        delete el.dataset.magnetCursorInited;
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isBtn  = state === 'button';
  const isText = state === 'text';

  return (
    <>
      {/* Hide native cursor on desktop */}
      <style>{`
        @media (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
        }
      `}</style>

      {/* Cyan dot — snaps to exact cursor position */}
      <div
        ref={dotRef}
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          width:         '6px',
          height:        '6px',
          borderRadius:  '50%',
          background:    '#00F5D4',
          pointerEvents: 'none',
          zIndex:        999999,
          opacity:       visible ? 1 : 0,
          transition:    'opacity 0.3s',
          mixBlendMode:  'screen',
          boxShadow:     '0 0 8px #00F5D4, 0 0 16px #00F5D460',
          willChange:    'transform',
        }}
      />

      {/* Outer ring — lerps behind with spring */}
      <div
        ref={ringRef}
        style={{
          position:       'fixed',
          top:            0,
          left:           0,
          width:          isBtn  ? '56px' : isText ? '80px' : '36px',
          height:         isBtn  ? '56px' : isText ? '24px' : '36px',
          borderRadius:   isText ? '4px'  : '50%',
          border:         `1.5px solid ${isBtn ? '#FF3AF2' : 'rgba(0,245,212,0.5)'}`,
          background:     isBtn  ? 'rgba(255,58,242,0.06)' : 'transparent',
          backdropFilter: isBtn  ? 'blur(4px)' : 'none',
          pointerEvents:  'none',
          zIndex:         999998,
          opacity:        visible ? 1 : 0,
          transition:     [
            'width 0.4s cubic-bezier(0.34,1.56,0.64,1)',
            'height 0.4s cubic-bezier(0.34,1.56,0.64,1)',
            'border-color 0.25s',
            'border-radius 0.3s',
            'background 0.25s',
            'opacity 0.3s',
          ].join(', '),
          willChange: 'transform',
        }}
      />
    </>
  );
}
