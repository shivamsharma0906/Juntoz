const REVEAL_OPTIONS = { threshold: 0.08, rootMargin: '0px 0px -20px 0px' };

let revealObserver = null;

function getObserver() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, REVEAL_OPTIONS);
  }
  return revealObserver;
}

/** Observe a single reveal element with the shared IntersectionObserver. */
export function observeRevealElement(el) {
  if (!el || el.classList.contains('revealed')) return;
  getObserver().observe(el);
}

/** Scan the DOM for unrevealed [data-reveal] elements and observe them. */
export function scanRevealElements() {
  document.querySelectorAll('[data-reveal]:not(.revealed)').forEach(observeRevealElement);
}

/** Alias kept for compatibility with animations.js and route-change rescans. */
export function initReveal() {
  scanRevealElements();
}

export function disconnectRevealObserver() {
  if (revealObserver) {
    revealObserver.disconnect();
    revealObserver = null;
  }
}
