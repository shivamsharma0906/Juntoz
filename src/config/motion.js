/**
 * Centralized motion & 3D feature flags.
 * Each feature can be toggled on/off with a single boolean flag.
 * Reads from window override (for runtime testing) or VITE_ env var for local/preview.
 */
export const motionConfig = {
  // Homepage Hero 3D WebGL particle progressive enhancement (default: true)
  hero3d: (typeof window !== 'undefined' && typeof window.__ENABLE_HERO_3D__ === 'boolean')
    ? window.__ENABLE_HERO_3D__
    : ((typeof import.meta !== 'undefined' && (import.meta.env?.VITE_HERO_3D === 'false' || import.meta.env?.VITE_HERO3D === 'false')) ? false : true),

  // Phase 1: Continuous scroll-story particle funnel across homepage sections (default: true)
  scrollStory: (typeof window !== 'undefined' && typeof window.__ENABLE_SCROLL_STORY__ === 'boolean')
    ? window.__ENABLE_SCROLL_STORY__
    : ((typeof import.meta !== 'undefined' && (import.meta.env?.VITE_SCROLL_FX === 'false' || import.meta.env?.VITE_SCROLL_STORY === 'false')) ? false : true),

  // Phase 2: Case-study card shader hover distortion (default: false)
  caseHover: (typeof window !== 'undefined' && typeof window.__ENABLE_CASE_HOVER__ === 'boolean')
    ? window.__ENABLE_CASE_HOVER__
    : ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_CASE_HOVER === 'true') || false),

  // Phase 3: Final conversion CTA typography motion & advocacy halo (default: false)
  ctaMotion: (typeof window !== 'undefined' && typeof window.__ENABLE_CTA_MOTION__ === 'boolean')
    ? window.__ENABLE_CTA_MOTION__
    : ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_CTA_MOTION === 'true') || false),

  // Phase 1 Recomposition: Editorial typography scale, relaxed spacing, and refined reveals (default: false)
  recomposeTypography: (typeof window !== 'undefined' && typeof window.__ENABLE_RECOMPOSE_TYPOGRAPHY__ === 'boolean')
    ? window.__ENABLE_RECOMPOSE_TYPOGRAPHY__
    : ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_RECOMPOSE_TYPOGRAPHY === 'true') || false),

  // Liquid metaball reveal cursor interaction (selective to portfolio images, default: true)
  liquidCursor: (typeof window !== 'undefined' && typeof window.__ENABLE_LIQUID_CURSOR__ === 'boolean')
    ? window.__ENABLE_LIQUID_CURSOR__
    : ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_LIQUID_CURSOR === 'false') ? false : true),

  // Pinned GSAP card fan scroll section (default: false, superseded by Services Spine Accordion)
  fanScroll: (typeof window !== 'undefined' && typeof window.__ENABLE_FAN_SCROLL__ === 'boolean')
    ? window.__ENABLE_FAN_SCROLL__
    : ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_FAN_SCROLL === 'true') || false),

  // Made for Award Spine Accordion interaction (default: true for Services section)
  spineAccordion: (typeof window !== 'undefined' && typeof window.__ENABLE_SPINE_ACCORDION__ === 'boolean')
    ? window.__ENABLE_SPINE_ACCORDION__
    : ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_SPINE_ACCORDION === 'false') ? false : true),

  // Made for Award FocusLensImage interaction (default: true)
  focusLens: (typeof window !== 'undefined' && typeof window.__ENABLE_FOCUS_LENS__ === 'boolean')
    ? window.__ENABLE_FOCUS_LENS__
    : ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_FOCUS_LENS === 'false') ? false : true),

  // Carousel Wall Scroll (PaperFlowHero) for /work portfolio showcase (default: false)
  paperFlowHero: (typeof window !== 'undefined' && typeof window.__ENABLE_PAPER_FLOW_HERO__ === 'boolean')
    ? window.__ENABLE_PAPER_FLOW_HERO__
    : ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_PAPER_FLOW_HERO === 'true') || false),
};
