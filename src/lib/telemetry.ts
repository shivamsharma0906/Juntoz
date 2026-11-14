/**
 * Juntoz Telemetry & CTA Conversion Tracking
 * Lightweight event emitter to monitor Hero -> WhatsApp and CTA conversion rates.
 */

export type TelemetryEvent = {
  event: 'cta_click' | 'page_view' | 'form_submission';
  ctaName: string;
  metadata?: Record<string, unknown>;
  timestamp: number;
};

const telemetryBuffer: TelemetryEvent[] = [];

export function trackCtaClick(ctaName: string, metadata: Record<string, unknown> = {}) {
  const payload: TelemetryEvent = {
    event: 'cta_click',
    ctaName,
    metadata,
    timestamp: Date.now(),
  };

  telemetryBuffer.push(payload);

  if (typeof window !== 'undefined') {
    // 1. Dispatch custom DOM event
    window.dispatchEvent(new CustomEvent('juntoz:telemetry', { detail: payload }));

    // 2. Push to dataLayer if present (Google Tag Manager / GA4)
    if (Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push({
        event: 'cta_conversion',
        cta_name: ctaName,
        ...metadata,
      });
    }

    // 3. Dev logger
    if (typeof import.meta !== 'undefined' && (import.meta as any)?.env?.DEV) {
      console.log(`[Telemetry] CTA Click: ${ctaName}`, metadata);
    }
  }
}

export function getTelemetryBuffer(): readonly TelemetryEvent[] {
  return telemetryBuffer;
}
