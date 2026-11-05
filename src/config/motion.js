/**
 * Centralized motion & 3D feature flags.
 * Enabled by default for local development preview.
 * Can be overridden via window.__ENABLE_* flags or VITE_* environment variables.
 */
export const motionConfig = {
  // Homepage Hero 3D WebGL particle progressive enhancement (default: true for preview)
  hero3d: (typeof window !== 'undefined' && typeof window.__ENABLE_HERO_3D__ === 'boolean')
    ? window.__ENABLE_HERO_3D__
    : ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_HERO3D === 'false') ? false : true),

  // Phase 1: Continuous scroll-story particle funnel across homepage sections (default: true for preview)
  scrollStory: (typeof window !== 'undefined' && typeof window.__ENABLE_SCROLL_STORY__ === 'boolean')
    ? window.__ENABLE_SCROLL_STORY__
    : ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_SCROLL_STORY === 'false') ? false : true),

  // Phase 2: Case-study card shader hover distortion (default: true for preview)
  caseHover: (typeof window !== 'undefined' && typeof window.__ENABLE_CASE_HOVER__ === 'boolean')
    ? window.__ENABLE_CASE_HOVER__
    : ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_CASE_HOVER === 'false') ? false : true),

  // Phase 3: Final conversion CTA typography motion & advocacy halo (default: true for preview)
  ctaMotion: (typeof window !== 'undefined' && typeof window.__ENABLE_CTA_MOTION__ === 'boolean')
    ? window.__ENABLE_CTA_MOTION__
    : ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_CTA_MOTION === 'false') ? false : true),
};
