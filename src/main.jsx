import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* ─────────────────────────────────────────────────────────────────
   Global scroll-reveal
   Runs at 3 intervals to catch elements that React renders lazily.
   The observer fires once per element then stops watching it.
───────────────────────────────────────────────────────────────── */
let revealObs = null;

function initReveal() {
  if (!revealObs) {
    revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            revealObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );
  }
  // Pick up any newly rendered [data-reveal] elements not yet observed
  document.querySelectorAll('[data-reveal]:not(.revealed)').forEach((el) => {
    revealObs.observe(el);
  });
}

// Scan 1 — right after first paint
requestAnimationFrame(initReveal);

// Scan 2 — after React finishes rendering child components (~100–200 ms)
setTimeout(initReveal, 200);

// Scan 3 — safety net for any slow or conditional renders
setTimeout(initReveal, 800);
