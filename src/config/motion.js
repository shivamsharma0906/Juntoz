/**
 * Centralized motion & 3D feature flags.
 * Each feature can be toggled on/off with a single boolean flag.
 * Reads from window override (for runtime testing) or VITE_ env var for Vercel preview.
 */
export const motionConfig = {
  // Homepage Hero 3D WebGL particle progressive enhancement (default: false)
  hero3d: (typeof window !== 'undefined' && typeof window.__ENABLE_HERO_3D__ === 'boolean')
    ? window.__ENABLE_HERO_3D__
    : ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_HERO3D === 'true') || false),

  // Phase 1: Continuous scroll-story particle funnel across homepage sections (default: false)
  scrollStory: (typeof window !== 'undefined' && typeof window.__ENABLE_SCROLL_STORY__ === 'boolean')
    ? window.__ENABLE_SCROLL_STORY__
    : ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_SCROLL_STORY === 'true') || false),
};
