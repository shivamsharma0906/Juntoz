/**
 * ScrollReveal — Global 3D Scroll-Driven Entrance Animation
 *
 * Drop-in replacement for the CSS [data-reveal] observer system.
 * Uses Framer Motion `whileInView` for a true 3D tilt + rise + fade
 * entrance that fires as each element enters the viewport.
 *
 * API is 100% backward-compatible with the old ScrollReveal:
 *   <ScrollReveal data-reveal="up" delay={120}>…</ScrollReveal>
 *
 * data-reveal variants:
 *   "up"           → rise from below (default)
 *   "left"         → slide from left
 *   "right"        → slide from right
 *   "fade"         → fade + subtle scale
 *   "zoom"         → cinematic zoom reveal
 *   "flip-3d"      → full 3D rotateX tilt-rise
 *   "zoom-cinematic" → blur + scale + fade (hero-worthy)
 *   "slide-spin"   → slide + slight rotate
 */

import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// ─── Variant Definitions ───────────────────────────────────────────────────────
// Each variant defines the hidden state (initial) and the visible state (animate).
// All share the same smooth spring-eased transition.
const VARIANTS = {
  up: {
    hidden: {
      opacity: 0,
      y: 32,
      scale: 0.99,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  },
  left: {
    hidden: {
      opacity: 0,
      x: -36,
      scale: 0.99,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  },
  right: {
    hidden: {
      opacity: 0,
      x: 36,
      scale: 0.99,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  },
  fade: {
    hidden: {
      opacity: 0,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },
  zoom: {
    hidden: {
      opacity: 0,
      scale: 0.84,
      y: 24,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  },
  'flip-3d': {
    hidden: {
      opacity: 0,
      y: 56,
      rotateX: 22,
      scale: 0.94,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
    },
  },
  'zoom-cinematic': {
    hidden: {
      opacity: 0,
      scale: 0.86,
      y: 20,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
    },
  },
  'slide-spin': {
    hidden: {
      opacity: 0,
      x: -44,
      rotate: -1.5,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
    },
  },
};

// Fallback for unknown variants
const FALLBACK_VARIANT = VARIANTS.up;

// ─── Shared transition (spring-eased, cinematic feel) ─────────────────────────
const TRANSITION_BASE = {
  type: 'spring',
  stiffness: 60,
  damping: 20,
  mass: 0.9,
};

// Reduced-motion fallback: instant opacity-only fade
const REDUCED_TRANSITION = {
  duration: 0.3,
  ease: 'easeOut',
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
  style = {},
  as: Tag = 'div',
  'data-reveal': dataReveal = 'up',
}) {
  const prefersReduced = useReducedMotion();
  const variant = VARIANTS[dataReveal] ?? FALLBACK_VARIANT;

  // When reduced motion is preferred, only animate opacity
  const hiddenState = prefersReduced
    ? { opacity: 0 }
    : variant.hidden;

  const visibleState = prefersReduced
    ? { opacity: 1 }
    : variant.visible;

  const transition = prefersReduced
    ? REDUCED_TRANSITION
    : { ...TRANSITION_BASE, delay: delay / 1000 };

  // Map the `as` tag to a motion component
  // motion.div covers the vast majority of use cases
  const MotionTag = motion[Tag] ?? motion.div;

  return (
    <MotionTag
      className={className}
      style={{
        ...style,
        // Required for 3D transforms to render correctly
        transformPerspective: 1200,
        willChange: 'opacity, transform',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
      variants={{
        hidden: hiddenState,
        visible: visibleState,
      }}
      transition={transition}
    >
      {children}
    </MotionTag>
  );
}
