/**
 * animations.js — Juntoz Premium 3D Animation Layer v2
 * ─────────────────────────────────────────────────────
 * Waits for React to fully mount before attaching effects.
 * Zero layout changes. GPU-only (transform + opacity).
 * Respects prefers-reduced-motion.
 */

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Module-level MutationObserver handles so they can be disconnected */
let _cardTiltMO     = null;
let _magneticMO     = null;
let _imageParallaxMO = null;

/* ───────────────────────────────────────────────────────────────
   UTIL: retry a function until its target DOM element appears,
   or give up after maxMs milliseconds.
─────────────────────────────────────────────────────────────── */
function waitForEl(selector, cb, maxMs = 5000, interval = 100) {
  const el = document.querySelector(selector);
  if (el) { cb(el); return; }
  let elapsed = 0;
  const t = setInterval(() => {
    elapsed += interval;
    const found = document.querySelector(selector);
    if (found || elapsed >= maxMs) {
      clearInterval(t);
      if (found) cb(found);
    }
  }, interval);
}

/* ═══════════════════════════════════════════════════════════════
   1. HERO — MOUSE PARALLAX
   NOTE: #hero h1 has `opacity:1 !important; transform:none !important`
   in index.css for LCP reasons. We use a wrapper div instead
   so we don't fight the CSS.
═══════════════════════════════════════════════════════════════ */
function initHeroParallax() {
  if (prefersReduced) return;

  waitForEl('#hero', (hero) => {
    // Target the content wrapper (z-10 div), not the h1 directly —
    // the h1 is locked by CSS for Lighthouse LCP
    const content = hero.querySelector('.relative.z-10');
    const bgLayer = hero.querySelector('.absolute.inset-0.pointer-events-none');

    if (!content) return;

    let rafId = null;
    let isInHero = false;

    hero.addEventListener('mouseenter', () => { isInHero = true; }, { passive: true });
    hero.addEventListener('mouseleave', () => {
      isInHero = false;
      content.style.transition = 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
      content.style.transform = 'translate(0, 0)';
      content.style.willChange = 'auto';
      if (bgLayer) {
        bgLayer.style.transition = 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
        bgLayer.style.transform = 'translate(0, 0)';
        bgLayer.style.willChange = 'auto';
      }
    }, { passive: true });

    window.addEventListener('mousemove', (e) => {
      if (!isInHero) return;
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const rect = hero.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        // Move content opposite to cursor
        const dx = ((e.clientX - cx) / rect.width) * -18;
        const dy = ((e.clientY - cy) / rect.height) * -12;

        content.style.transition = 'none';
        content.style.transform = `translate(${dx}px, ${dy}px)`;
        content.style.willChange = 'transform';

        // Background glows move at half speed
        if (bgLayer) {
          bgLayer.style.transition = 'none';
          bgLayer.style.transform = `translate(${dx * 0.4}px, ${dy * 0.4}px)`;
          bgLayer.style.willChange = 'transform';
        }
      });
    }, { passive: true });
  });
}

/* ═══════════════════════════════════════════════════════════════
   2. SCROLL REVEAL — for elements NOT already using [data-reveal]
   We add [data-reveal="up"] to common elements then piggyback on
   the existing IntersectionObserver in main.jsx
═══════════════════════════════════════════════════════════════ */
function initScrollReveal() {
  if (prefersReduced) return;

  // Elements we want to reveal but that don't already have data-reveal
  const candidates = document.querySelectorAll(
    'section > .container h3, section > .container p, section > .container img, ' +
    '.glass-card-strong, footer p, footer a'
  );

  candidates.forEach((el) => {
    // Skip if already handled
    if (
      el.hasAttribute('data-reveal') ||
      el.dataset.srInited ||
      el.closest('#hero') ||
      el.closest('nav') ||
      el.closest('[data-reveal]')
    ) return;

    el.setAttribute('data-reveal', 'up');
  });

  // Trigger the existing reveal scanner from main.jsx
  if (typeof window.__initReveal === 'function') {
    window.__initReveal();
  } else if (typeof window.observeForReveal === 'function') {
    document.querySelectorAll('[data-reveal]:not(.revealed)').forEach((el) => {
      window.observeForReveal(el);
    });
  }
}

/* ═══════════════════════════════════════════════════════════════
   3. CARD 3D TILT — glass-card, glass-card-strong, glass-card-cyan
   Desktop only. Skips cards already handled in React (Services/Results).
═══════════════════════════════════════════════════════════════ */
function initCardTilt() {
  if (prefersReduced || window.innerWidth < 1024) return;

  const attachTilt = (card) => {
    if (card.dataset.tiltInited) return;
    card.dataset.tiltInited = '1';
    card.style.transformStyle = 'preserve-3d';

    let rafId = null;

    card.addEventListener('mousemove', (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        card.style.transition = 'none';
        card.style.transform = `perspective(1000px) rotateX(${-y * 10}deg) rotateY(${x * 14}deg) scale(1.02)`;
        card.style.willChange = 'transform';
      });
    }, { passive: true });

    card.addEventListener('mouseenter', () => {
      card.style.willChange = 'transform';
    }, { passive: true });

    card.addEventListener('mouseleave', () => {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      card.style.transition = 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      card.style.willChange = 'auto';
    }, { passive: true });
  };

  const scan = () => {
    document.querySelectorAll('.glass-card, .glass-card-strong, .glass-card-cyan').forEach(attachTilt);
  };

  scan();
  // Re-scan after lazy-loaded sections appear
  if (_cardTiltMO) _cardTiltMO.disconnect();
  _cardTiltMO = new MutationObserver(scan);
  _cardTiltMO.observe(document.body, { childList: true, subtree: true });
}

/* ═══════════════════════════════════════════════════════════════
   4. NAVBAR — already handled in Navbar.jsx React component.
   We just ensure the transition property is set on the nav element.
═══════════════════════════════════════════════════════════════ */
function initNavbarEnhance() {
  waitForEl('nav', (nav) => {
    // Reinforce smooth blur/shrink transition
    const inner = nav.querySelector('.flex.items-center.justify-between');
    if (inner) {
      inner.style.transition = 'padding 0.35s ease, background 0.35s ease, backdrop-filter 0.35s ease, box-shadow 0.35s ease';
    }
  });
}

/* ═══════════════════════════════════════════════════════════════
   6. IMAGE PARALLAX — scroll at 0.4× speed
   Desktop only for performance
═══════════════════════════════════════════════════════════════ */
function initImageParallax() {
  if (prefersReduced || window.innerWidth < 768) return;

  const getImages = () =>
    Array.from(document.querySelectorAll('section img, .founder-img, [class*="founder"] img'))
      .filter((img) => !img.closest('#hero'));

  let imgs = [];
  let rafId = null;

  const onScroll = () => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      const wh = window.innerHeight;
      
      // Batch layout reads first
      const reads = imgs.map((img) => ({
        img,
        rect: img.getBoundingClientRect(),
      }));

      // Batch style writes after all reads are done
      reads.forEach(({ img, rect }) => {
        if (rect.bottom < -wh * 0.5 || rect.top > wh * 1.5) return;
        const relY = (rect.top + rect.height / 2 - wh / 2) / wh;
        img.style.transform = `translateY(${relY * 30}px)`;
        img.style.willChange = 'transform';
      });
    });
  };

  // Rescan images after React renders
  const rescan = () => { imgs = getImages(); };
  if (_imageParallaxMO) _imageParallaxMO.disconnect();
  _imageParallaxMO = new MutationObserver(rescan);
  _imageParallaxMO.observe(document.body, { childList: true, subtree: true });
  rescan();

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ═══════════════════════════════════════════════════════════════
   7. MAGNETIC BUTTONS — pull toward cursor within 60px radius
   + shine sweep on hover. Desktop only.
═══════════════════════════════════════════════════════════════ */
function initMagneticButtons() {
  if (prefersReduced || window.innerWidth < 1024) return;

  const RADIUS = 60;

  const attachMagnetic = (btn) => {
    if (btn.dataset.magnetInited) return;
    btn.dataset.magnetInited = '1';

    // Ensure position context for the shine span
    if (getComputedStyle(btn).position === 'static') {
      btn.style.position = 'relative';
    }
    btn.style.overflow = 'hidden';

    // Shine sweep element
    const shine = document.createElement('span');
    shine.className = 'jtz-shine';
    btn.appendChild(shine);

    let rafId = null;

    const onGlobalMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > RADIUS * 2) {
        // Far away — ensure reset (cheap check, no RAF)
        if (btn.dataset.magnetActive) {
          btn.dataset.magnetActive = '';
          btn.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
          btn.style.transform = 'translate(0,0)';
          btn.style.willChange = 'auto';
        }
        return;
      }

      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (dist < RADIUS) {
          btn.dataset.magnetActive = '1';
          const pull = (1 - dist / RADIUS) * 0.3;
          btn.style.transition = 'transform 0.12s ease';
          btn.style.transform = `translate(${dx * pull}px, ${dy * pull}px)`;
          btn.style.willChange = 'transform';
        } else if (btn.dataset.magnetActive) {
          btn.dataset.magnetActive = '';
          btn.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
          btn.style.transform = 'translate(0,0)';
          btn.style.willChange = 'auto';
        }
      });
    };

    btn.addEventListener('mouseenter', () => {
      shine.style.backgroundPosition = '200% 0';
    }, { passive: true });

    btn.addEventListener('mouseleave', () => {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      btn.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      btn.style.transform = 'translate(0,0)';
      btn.style.willChange = 'auto';
      btn.dataset.magnetActive = '';
      shine.style.backgroundPosition = '-100% 0';
    }, { passive: true });

    // Track globally for approach detection
    window.addEventListener('mousemove', onGlobalMouseMove, { passive: true });
  };

  const scan = () => {
    document.querySelectorAll(
      'a.rounded-full, button.rounded-full, ' +
      'a[class*="rounded-full"], button[class*="rounded-full"], ' +
      'a[class*="rounded-2xl"], a[class*="rounded-xl"]'
    ).forEach(attachMagnetic);
  };

  scan();
  if (_magneticMO) _magneticMO.disconnect();
  _magneticMO = new MutationObserver(scan);
  _magneticMO.observe(document.body, { childList: true, subtree: true });
}

/* ═══════════════════════════════════════════════════════════════
   8. MARQUEE — auto-scroll for [data-marquee] or .marquee-track
═══════════════════════════════════════════════════════════════ */
function initMarquee() {
  if (prefersReduced) return;

  document.querySelectorAll('[data-marquee], .marquee-track').forEach((track) => {
    if (track.dataset.marqueeInited) return;
    track.dataset.marqueeInited = '1';

    // Duplicate children for seamless loop
    const originals = Array.from(track.children);
    originals.forEach((child) => {
      const clone = child.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });

    const speed = parseFloat(track.dataset.speed || '35');
    let x = 0;
    let paused = false;
    const half = track.scrollWidth / 2;

    const parent = track.parentElement;
    if (parent) {
      parent.addEventListener('mouseenter', () => { paused = true; }, { passive: true });
      parent.addEventListener('mouseleave', () => { paused = false; }, { passive: true });
    }

    const tick = () => {
      requestAnimationFrame(tick);
      if (paused) return;
      x -= speed / 60;
      if (Math.abs(x) >= half) x = 0;
      track.style.transform = `translateX(${x}px)`;
    };
    requestAnimationFrame(tick);
  });
}

/* ═══════════════════════════════════════════════════════════════
   MAIN — called from main.jsx
   Uses a cascade of timeouts to wait for React to paint
═══════════════════════════════════════════════════════════════ */
export function initAnimations() {
  if (prefersReduced) return;

  // Expose the reveal scanner so initScrollReveal can use it
  window.__initReveal = () => {
    if (typeof window.observeForReveal === 'function') {
      document.querySelectorAll('[data-reveal]:not(.revealed)').forEach((el) => {
        window.observeForReveal(el);
      });
    }
  };

  // Wave 1: effects that work on root DOM (no React-rendered content needed)
  initNavbarEnhance();
  initMarquee();

  // Wave 2: 400ms — React first paint complete on fast machines
  setTimeout(() => {
    initHeroParallax();
    initCardTilt();
    initMagneticButtons();
  }, 400);

  // Wave 3: 900ms — lazy-loaded sections, images all in DOM
  setTimeout(() => {
    initScrollReveal();
    initImageParallax();
    // Re-run tilt + magnetics for newly mounted lazy pages
    initCardTilt();
    initMagneticButtons();
  }, 900);

  // Wave 4: 2000ms — final catch-all for slow connections
  setTimeout(() => {
    initScrollReveal();
    initCardTilt();
    initMagneticButtons();
    initImageParallax();
  }, 2000);
}
