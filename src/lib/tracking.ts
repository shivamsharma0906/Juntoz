/**
 * Global Analytics & Conversion Telemetry Tracker
 * Detects existing analytics (gtag, dataLayer) with graceful fallback.
 */

export function getDetectedAnalyticsEngine(): 'gtag' | 'dataLayer' | 'none' {
  if (typeof window === 'undefined') return 'none';
  if (typeof (window as any).gtag === 'function') return 'gtag';
  if (Array.isArray((window as any).dataLayer)) return 'dataLayer';
  return 'none';
}

/**
 * Dispatches an event to gtag if present, else dataLayer if present, else no-op.
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;

  const w = window as any;

  if (typeof w.gtag === 'function') {
    w.gtag('event', name, params);
  } else if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({
      event: name,
      ...params,
    });
  }

  // Developer mode telemetry debug logger
  if ((import.meta as any)?.env?.DEV) {
    console.log(`[Analytics Event: ${name}]`, params);
  }
}

/**
 * Initializes a single delegated click listener on the document.
 * 1. whatsapp_click: any <a> whose href contains wa.me or api.whatsapp.com
 * 2. cta_click: primary CTAs ("Book a Strategy Call", "View Case Study", "Request Business Growth Audit")
 */
export function initDelegatedTracking(): () => void {
  if (typeof window === 'undefined') return () => {};

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;

    // 1. Detect WhatsApp anchor clicks
    const anchor = target.closest('a') as HTMLAnchorElement | null;
    if (anchor && anchor.href) {
      const isWhatsApp = anchor.href.includes('wa.me') || anchor.href.includes('api.whatsapp.com');
      if (isWhatsApp) {
        const nearestSection = anchor.closest('section[id], [data-section]') as HTMLElement | null;
        const location = nearestSection?.id || nearestSection?.dataset.section || 'global';
        trackEvent('whatsapp_click', {
          location,
          destination: anchor.href,
        });
        return;
      }
    }

    // 2. Detect primary CTA clicks
    const ctaElement = target.closest('a, button') as HTMLElement | null;
    if (ctaElement) {
      const text = ctaElement.textContent?.trim().toLowerCase() || '';
      const isPrimaryCta =
        ctaElement.dataset.cta ||
        text.includes('book a strategy call') ||
        text.includes('book a call') ||
        text.includes('request business growth audit') ||
        text.includes('view case study') ||
        text.includes('request gmb profile audit');

      if (isPrimaryCta) {
        const nearestSection = ctaElement.closest('section[id], [data-section]') as HTMLElement | null;
        const location = nearestSection?.id || nearestSection?.dataset.section || 'global';
        trackEvent('cta_click', {
          cta_text: ctaElement.textContent?.trim() || 'CTA',
          location,
        });
      }
    }
  };

  document.addEventListener('click', handleClick, { passive: true });
  return () => {
    document.removeEventListener('click', handleClick);
  };
}

