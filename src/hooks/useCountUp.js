import { useState, useEffect, useRef } from 'react';

export default function useCountUp(target, options = {}) {
  const {
    duration = 1800,
    started = undefined, // If boolean, ignores observer and relies on this value
    threshold = 0.1,
    delay = 0,
  } = options;

  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (started === false) return;

    let timeoutId;
    let rAFId;
    
    const startAnimation = () => {
      timeoutId = setTimeout(() => {
        let startTime = null;
        const tick = (ts) => {
          if (!startTime) startTime = ts;
          const p = Math.min((ts - startTime) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          
          const end = parseFloat(target);
          const current = target % 1 !== 0 ? +(ease * end).toFixed(1) : Math.round(ease * end);
          setValue(current);
          
          if (p < 1) {
            rAFId = requestAnimationFrame(tick);
          } else {
            setValue(target);
          }
        };
        rAFId = requestAnimationFrame(tick);
      }, delay);
    };

    if (started === true) {
      startAnimation();
      return () => {
        clearTimeout(timeoutId);
        if (rAFId) cancelAnimationFrame(rAFId);
      };
    }

    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);

    return () => {
      obs.disconnect();
      clearTimeout(timeoutId);
      if (rAFId) cancelAnimationFrame(rAFId);
    };
  }, [target, duration, started, threshold, delay]);

  return { value, ref };
}
