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

  // Phase 2: Case-study card shader hover distortion (default: false)
  caseHover: (typeof window !== 'undefined' && typeof window.__ENABLE_CASE_HOVER__ === 'boolean')
    ? window.__ENABLE_CASE_HOVER__
    : ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_CASE_HOVER === 'true') || false),

  // Phase 3: Final conversion CTA typography motion & advocacy halo (default: false)
  ctaMotion: (typeof window !== 'undefined' && typeof window.__ENABLE_CTA_MOTION__ === 'boolean')
    ? window.__ENABLE_CTA_MOTION__
    : ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_CTA_MOTION === 'true') || false),
};
