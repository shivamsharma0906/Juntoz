import { useEffect, useRef } from 'react';

/**
 * ScrollReveal
 * Unified component that integrates with the index.css [data-reveal] system.
 * It uses an IntersectionObserver to add the 'revealed' class once it enters the viewport.
 * 
 * Props:
 *   data-reveal : 'up' | 'fade' | 'zoom' | 'left' | 'right' (default 'up')
 *   delay       : Number (ms) to delay the transition (default 0)
 */
export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
  style = {},
  as: Tag = 'div',
  'data-reveal': dataReveal = 'up',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add the CSS class defined in index.css
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag 
      ref={ref} 
      data-reveal={dataReveal} 
      className={className} 
      style={{ 
        ...style, 
        transitionDelay: delay ? `${delay}ms` : undefined 
      }}
    >
      {children}
    </Tag>
  );
}
