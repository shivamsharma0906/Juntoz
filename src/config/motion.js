/**
 * Centralized motion & 3D feature flags.
 * Each feature can be toggled on/off with a single boolean flag.
 * Reads from window.__ENABLE_HERO_3D__ (for runtime override/testing),
 * or import.meta.env.VITE_HERO3D ('true') for Vercel preview, defaulting to false.
 */
export const motionConfig = {
  // Homepage Hero 3D WebGL particle progressive enhancement (default: false)
  hero3d: (typeof window !== 'undefined' && typeof window.__ENABLE_HERO_3D__ === 'boolean')
    ? window.__ENABLE_HERO_3D__
    : ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_HERO3D === 'true') || false),
};
