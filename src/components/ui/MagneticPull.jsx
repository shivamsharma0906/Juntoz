import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

/**
 * MagneticPull: Smooth magnetic attraction towards the pointer on primary CTAs.
 * Active strictly on desktop fine pointer devices (`@media (hover: hover) and (pointer: fine)`).
 * Maintains system native cursor.
 */
export default function MagneticPull({
  children,
  strength = 0.28,
  maxOffset = 10,
  className = '',
  onClick,
}) {
  const [isFinePointer, setIsFinePointer] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(hover: hover) and (pointer: fine)').matches : false
  );
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');

    const handler = (e) => setIsFinePointer(e.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e) => {
    if (!isFinePointer || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = (e.clientX - centerX) * strength;
    const dy = (e.clientY - centerY) * strength;

    const clampedX = Math.max(-maxOffset, Math.min(maxOffset, dx));
    const clampedY = Math.max(-maxOffset, Math.min(maxOffset, dy));

    setOffset({ x: clampedX, y: clampedY });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={isFinePointer ? { x: offset.x, y: offset.y } : { x: 0, y: 0 }}
      transition={{ type: 'spring', damping: 15, stiffness: 220, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

