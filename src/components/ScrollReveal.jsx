import { useEffect, useRef } from 'react';



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

    if (typeof window.observeForReveal === 'function') {
      window.observeForReveal(el);
    }
    
    return () => {
      if (el && typeof window.unobserveForReveal === 'function') {
        window.unobserveForReveal(el);
      }
    };
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

