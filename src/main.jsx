import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { initAnimations } from './animations.js'

// Prevent the browser from restoring the previous scroll position on refresh.
// Our ScrollToTop component in App.jsx handles scrolling back to the top on
// every navigation, so native scroll restoration would fight against it and
// drop the user mid-page (or at the footer) after a hard reload.
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SpeedInsights />
  </StrictMode>,
)

/* ─────────────────────────────────────────────────────────────────
   Centralized Global Scroll-Reveal Observer
   Uses exactly one IntersectionObserver instance for the entire site
   to maximize scroll performance and reduce CPU utilization.
   ───────────────────────────────────────────────────────────────── */
let globalRevealObserver = null;

window.observeForReveal = function(el) {
  if (!el) return;
  if (!globalRevealObserver) {
    globalRevealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            globalRevealObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
  }
  globalRevealObserver.observe(el);
};

window.unobserveForReveal = function(el) {
  if (el && globalRevealObserver) {
    globalRevealObserver.unobserve(el);
  }
};

function initReveal() {
  document.querySelectorAll('[data-reveal]:not(.revealed)').forEach((el) => {
    window.observeForReveal(el);
  });
}

// Scan 1 — right after first paint
requestAnimationFrame(initReveal);

// ── Launch all premium animations after React first render ──
// Use 200ms timeout — React needs at least one paint cycle to mount components
setTimeout(initAnimations, 200);

// Scan 2 — retry if mutations happen during hydration
const revealRetry = setTimeout(() => {
  const unrevealed = document.querySelectorAll('[data-reveal]:not(.revealed)');
  if (unrevealed.length > 0) initReveal();
}, 500);

// Expose cleanup handle so HMR can clear it
if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    clearTimeout(revealRetry);
    if (globalRevealObserver) {
      globalRevealObserver.disconnect();
      globalRevealObserver = null;
    }
  });
}
