/**
 * InteractiveParticleField — Canvas-based particle system
 * - 100 brand-colored particles with spring physics
 * - Mouse repels particles in a radius of ~130px
 * - Particles are connected by fading lines when near each other
 * - Desktop only (returns null on touch devices)
 */
import { useEffect, useRef } from 'react';

const COLORS = ['#00F5D4', '#7B2FFF', '#FF3AF2'];
const N = 100;
const REPEL_R = 130;    // px radius of mouse repulsion
const REPEL_F = 7;      // repulsion force multiplier
const CONN_D = 95;     // max distance for line connections

export default function InteractiveParticleField({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Skip canvas on touch devices — use CSS fallback
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const ctx = canvas.getContext('2d');
    const mouse = { x: -9999, y: -9999 };
    let particles = [];
    let raf;

    const init = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles = Array.from({ length: N }, () => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        return {
          x, y,
          ox: x, oy: y,        // origin (spring target)
          vx: 0, vy: 0,
          size: 0.8 + Math.random() * 2.2,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          opacity: 0.25 + Math.random() * 0.45,
        };
      });
    };

    const onMouseMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    /* parent section tracks mouse globally so particles react even
       when cursor is over text children */
    const section = canvas.closest('section') || canvas.parentElement;
    section?.addEventListener('mousemove', onMouseMove, { passive: true });
    section?.addEventListener('mouseleave', onMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        /* repulsion */
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPEL_R && dist > 0) {
          const force = ((REPEL_R - dist) / REPEL_R) ** 1.5 * REPEL_F;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        /* spring back */
        p.vx += (p.ox - p.x) * 0.045;
        p.vy += (p.oy - p.y) * 0.045;

        /* damping */
        p.vx *= 0.82;
        p.vy *= 0.82;

        p.x += p.vx;
        p.y += p.vy;

        /* draw particle */
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fill();

        /* draw connections to nearby particles */
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const ex = p.x - q.x;
          const ey = p.y - q.y;
          const d = Math.sqrt(ex * ex + ey * ey);
          if (d < CONN_D) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - d / CONN_D) * 0.12;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(init, 150);
    };
    window.addEventListener('resize', onResize);

    init();
    raf = requestAnimationFrame(draw);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      section?.removeEventListener('mousemove', onMouseMove);
      section?.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
