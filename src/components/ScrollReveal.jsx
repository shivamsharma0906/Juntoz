import { useEffect, useRef } from 'react';

/**
 * ScrollReveal
 * Wraps children in a div that fades in + slides up when it enters the viewport.
 * Uses IntersectionObserver — triggers exactly once, never repeats.
 * GPU-friendly: only animates opacity + transform.
 *
 * Props:
 *   delay   — ms stagger delay (default 0)
 *   y       — initial translateY offset in px (default 40)
 *   duration — animation duration in ms (default 600)
 *   className — forwarded to wrapper div
 */
export default function ScrollReveal({
  children,
  delay = 0,
  y = 40,
  duration = 600,
  className = '',
  style = {},
  as: Tag = 'div',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial state without touching layout-affecting properties
    el.style.opacity = '0';
    el.style.transform = `translateY(${y}px)`;
    el.style.willChange = 'opacity, transform';
    // Delay transition start so it doesn't flash before observer fires
    el.style.transition = `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0px)';
          // Clean up will-change after animation completes
          setTimeout(() => {
            if (el) el.style.willChange = 'auto';
          }, duration + delay + 50);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []); // empty deps — intentional, runs once on mount

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
