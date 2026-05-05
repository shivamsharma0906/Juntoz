import { useState, useRef, useEffect, useCallback } from 'react';
import ScrollReveal from './ScrollReveal.jsx';

const testimonials = [
  {
    quote: 'My bridal bookings tripled within 2 months. I went from 3–4 enquiries a month to 30+. The system genuinely works.',
    name: 'Priya S.', role: 'Bridal Makeup Artist', city: 'Mumbai',
    metric: '3× bookings in 60 days', color: '#FF3AF2',
    rating: 5,
  },
  {
    quote: 'They built my Instagram strategy and lead funnel from scratch. Now clients reach out to me — I stopped chasing them.',
    name: 'Ananya K.', role: 'Freelance MUA', city: 'Delhi',
    metric: '0 → consistent leads/month', color: '#00F5D4',
    rating: 5,
  },
  {
    quote: 'Content strategy improved and my salon appeared in local Google results within weeks. Real visibility, real bookings.',
    name: 'Mehak R.', role: 'Salon Owner', city: 'Pune',
    metric: 'Top local search results', color: '#7B2FFF',
    rating: 5,
  },
  {
    quote: 'The quality of enquiries improved dramatically — brides with real budgets, not price-shoppers. Worth every rupee.',
    name: 'Kajol P.', role: 'Bridal Studio Owner', city: 'Mumbai',
    metric: 'Higher-quality leads', color: '#FF3AF2',
    rating: 5,
  },
  {
    quote: 'First booking from their ads came within 3 weeks of launch. The targeting was spot-on for my ideal client.',
    name: 'Shaheen M.', role: 'Premium MUA', city: 'Bangalore',
    metric: 'First booking in 3 weeks', color: '#00F5D4',
    rating: 5,
  },
];

const StarRow = ({ color }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, j) => (
      <svg key={j} className="w-3.5 h-3.5" fill={color} viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

/* ─── Desktop 3D tilt card ─────────────────────────────────── */
function TiltTestimonialCard({ t }) {
  const cardRef = useRef(null);
  const rafRef = useRef(null);
  const boundsRef = useRef(null);

  const onMouseEnter = () => {
    boundsRef.current = cardRef.current?.getBoundingClientRect();
  };

  const onMouseMove = (e) => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card || !boundsRef.current) { rafRef.current = null; return; }
      const { left, top, width, height } = boundsRef.current;
      const x = ((e.clientX - left) / width - 0.5) * 2;
      const y = ((e.clientY - top) / height - 0.5) * 2;
      const rotX = -y * 10;
      const rotY = x * 14;
      const glowX = 50 + x * 35;
      const glowY = 50 + y * 35;
      card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03) translateZ(6px)`;
      card.style.setProperty('--gx', `${glowX}%`);
      card.style.setProperty('--gy', `${glowY}%`);
      rafRef.current = null;
    });
  };

  const onMouseLeave = () => {
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1)';
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0)';
    card.style.setProperty('--gx', '50%');
    card.style.setProperty('--gy', '50%');
    setTimeout(() => { if (card) card.style.transition = ''; }, 600);
  };

  return (
    <div
      ref={cardRef}
      className="relative flex flex-col gap-4 p-5 sm:p-6 rounded-2xl"
      style={{
        '--gx': '50%',
        '--gy': '50%',
        background: `linear-gradient(135deg, ${t.color}08 0%, rgba(255,255,255,0.02) 100%)`,
        border: `1px solid ${t.color}35`,
        boxShadow: `0 4px 30px ${t.color}15, inset 0 1px 0 ${t.color}12`,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      role="article"
      aria-label={`Testimonial from ${t.name}`}
    >
      {/* Moving spotlight */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(280px circle at var(--gx) var(--gy), ${t.color}15, transparent 70%)`,
        }}
      />

      {/* Metric badge */}
      <div
        className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full font-body font-bold text-xs uppercase tracking-wide relative z-10"
        style={{ background: `${t.color}12`, border: `1px solid ${t.color}35`, color: t.color }}
      >
        <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: t.color }} />
        {t.metric}
      </div>

      {/* Stars */}
      <div className="relative z-10"><StarRow color={t.color} /></div>

      {/* Quote */}
      <p className="font-body text-white/75 text-sm leading-relaxed flex-1 relative z-10">
        "{t.quote}"
      </p>

      {/* Divider */}
      <div className="h-px w-full relative z-10" style={{ background: `${t.color}20` }} />

      {/* Author */}
      <div className="flex items-center justify-between gap-3 relative z-10">
        <div>
          <p className="font-heading font-black text-white text-sm uppercase tracking-tight">{t.name}</p>
          <p className="font-body text-xs mt-0.5" style={{ color: t.color }}>{t.role} · {t.city}</p>
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{ background: `${t.color}12`, border: `1px solid ${t.color}30` }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: t.color }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile carousel ──────────────────────────────────────── */
const GAP = 20;
const AUTO_PLAY_INTERVAL = 4000;

function MobileCarousel() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardWidthRef = useRef(0);
  const indexRef = useRef(0);
  const pausedRef = useRef(false);
  const timerRef = useRef(null);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const mouseStartX = useRef(0);
  const isDragging = useRef(false);

  const [dotIdx, setDotIdx] = useState(0);
  const COUNT = testimonials.length;
  const ITEMS = [...testimonials, ...testimonials];

  const calcCardWidth = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const cw = container.offsetWidth;
    const isTablet = window.innerWidth >= 768;
    // 85% on mobile (peek of next), ~1.8 cards on tablet
    const w = isTablet ? (cw - GAP * 1.5) / 1.8 : cw * 0.82;
    cardWidthRef.current = w;
    if (trackRef.current) {
      Array.from(trackRef.current.children).forEach(card => {
        card.style.width = `${w}px`;
        card.style.minWidth = `${w}px`;
      });
    }
  }, []);

  const slideTo = useCallback((idx, instant = false) => {
    const track = trackRef.current;
    if (!track) return;
    const offset = idx * (cardWidthRef.current + GAP);
    track.style.transition = instant ? 'none' : 'transform 0.6s cubic-bezier(0.34,1.2,0.64,1)';
    track.style.transform = `translateX(-${offset}px)`;
    indexRef.current = idx;
    setDotIdx(idx % COUNT);
  }, [COUNT]);

  const advanceTo = useCallback((fromIdx) => {
    const next = fromIdx + 1;
    if (next >= COUNT) { slideTo(next); setTimeout(() => slideTo(0, true), 650); }
    else slideTo(next);
  }, [COUNT, slideTo]);

  const advance = useCallback(() => {
    if (pausedRef.current) return;
    advanceTo(indexRef.current);
  }, [advanceTo]);



  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, AUTO_PLAY_INTERVAL);
  }, [advance]);

  useEffect(() => {
    calcCardWidth();
    startTimer();
    const ro = new ResizeObserver(() => { calcCardWidth(); slideTo(indexRef.current, true); });
    if (containerRef.current) ro.observe(containerRef.current);
    return () => { clearInterval(timerRef.current); ro.disconnect(); };
  }, [calcCardWidth, startTimer, slideTo]);

  // Touch
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0, startY = 0, isHoriz = null;
    const onTouchStart = (e) => {
      startX = e.touches[0].clientX; startY = e.touches[0].clientY;
      lastXRef.current = startX; lastTimeRef.current = Date.now();
      velocityRef.current = 0; isHoriz = null;
      pausedRef.current = true; clearInterval(timerRef.current);
    };
    const onTouchMove = (e) => {
      const cx = e.touches[0].clientX;
      const dx = cx - startX;
      const dy = e.touches[0].clientY - startY;

      if (isHoriz === null) isHoriz = Math.abs(dx) > Math.abs(dy);

      if (isHoriz) {
        e.preventDefault();

        // Real-time drag: move track with finger
        const track = trackRef.current;
        if (track) {
          const delta = startX - cx;
          const baseOffset = indexRef.current * (cardWidthRef.current + GAP);
          track.style.transition = 'none';
          track.style.transform = `translateX(-${baseOffset + delta}px)`;
        }

        const dt = Date.now() - lastTimeRef.current;
        if (dt > 0) velocityRef.current = (cx - lastXRef.current) / dt;
        lastXRef.current = cx; lastTimeRef.current = Date.now();
      }
    };
    const onTouchEnd = (e) => {
      const dx = startX - e.changedTouches[0].clientX;
      const threshold = Math.abs(velocityRef.current) > 0.5 ? 30 : 50;
      const track = trackRef.current;
      if (track) {
        track.style.transition = 'transform 0.6s cubic-bezier(0.34,1.2,0.64,1)';
      }
      if (isHoriz && Math.abs(dx) > threshold) {
        if (dx > 0 || velocityRef.current < -0.5) advanceTo(indexRef.current);
        else { const prev = indexRef.current - 1; slideTo(prev < 0 ? COUNT - 1 : prev); }
      } else {
        // snap back to current slide
        slideTo(indexRef.current);
      }
      pausedRef.current = false; startTimer(); isHoriz = null;
    };
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [advanceTo, slideTo, startTimer, COUNT]);

  // Mouse drag
  const onMouseDown = (e) => {
    mouseStartX.current = e.clientX; lastXRef.current = e.clientX;
    lastTimeRef.current = Date.now(); velocityRef.current = 0;
    isDragging.current = true; pausedRef.current = true;
    clearInterval(timerRef.current);
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const dt = Date.now() - lastTimeRef.current;
    if (dt > 0) velocityRef.current = (e.clientX - lastXRef.current) / dt;
    lastXRef.current = e.clientX; lastTimeRef.current = Date.now();
  };
  const onMouseUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const dx = mouseStartX.current - e.clientX;
    const threshold = Math.abs(velocityRef.current) > 0.5 ? 30 : 50;
    if (Math.abs(dx) > threshold) {
      if (dx > 0 || velocityRef.current < -0.5) advanceTo(indexRef.current);
      else { const prev = indexRef.current - 1; slideTo(prev < 0 ? COUNT - 1 : prev); }
    }
    pausedRef.current = false; startTimer();
  };

  return (
    <>
      <div ref={containerRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ paddingLeft: '16px', paddingRight: '16px', touchAction: 'pan-y' }}
        onMouseEnter={() => { pausedRef.current = true; clearInterval(timerRef.current); }}
        onMouseLeave={() => { pausedRef.current = false; startTimer(); }}
        onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}
        role="region" aria-label="Testimonial carousel">
        <div ref={trackRef} className="flex" style={{ gap: `${GAP}px`, willChange: 'transform' }}>
          {ITEMS.map((t, i) => (
            <div key={i}
              className="relative flex flex-col gap-4 shrink-0 p-5"
              style={{
                minWidth: '280px',
                background: `linear-gradient(135deg, ${t.color}08 0%, rgba(255,255,255,0.02) 100%)`,
                border: `1px solid ${t.color}35`,
                boxShadow: `0 4px 28px ${t.color}15, inset 0 1px 0 ${t.color}12`,
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '16px',
              }}
              role="article" aria-label={`Testimonial from ${t.name}`}>
              <div className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full font-body font-bold text-xs uppercase tracking-wide"
                style={{ background: `${t.color}12`, border: `1px solid ${t.color}35`, color: t.color }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: t.color }} />
                {t.metric}
              </div>
              <StarRow color={t.color} />
              <p className="font-body text-white/75 text-sm leading-relaxed flex-1">"{t.quote}"</p>
              <div className="h-px w-full" style={{ background: `${t.color}20` }} />
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-heading font-black text-white text-sm uppercase tracking-tight">{t.name}</p>
                  <p className="font-body text-xs mt-0.5" style={{ color: t.color }}>{t.role} · {t.city}</p>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: `${t.color}12`, border: `1px solid ${t.color}30` }}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: t.color }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade masks */}
      <div className="absolute top-0 right-0 h-full w-20 sm:w-32 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #080810 0%, transparent 100%)', zIndex: 5 }} />
      <div className="absolute top-0 left-0 h-full w-12 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #080810 0%, transparent 100%)', zIndex: 5 }} />

      {/* Progress + dots */}
      <div className="mt-8 px-5">
        <div className="w-full max-w-xs mx-auto mb-5">
          <div className="h-px bg-white/10 rounded-full overflow-hidden relative">
            <div key={dotIdx} className="absolute top-0 left-0 h-full w-full rounded-full origin-left will-change-transform"
              style={{
                background: 'linear-gradient(90deg, #00F5D4, #7B2FFF)',
                animation: `progress-fill ${AUTO_PLAY_INTERVAL}ms linear forwards`
              }} />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => { slideTo(i); startTimer(); }}
              aria-label={`Go to testimonial ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{ width: dotIdx === i ? '28px' : '8px', height: '8px',
                background: dotIdx === i ? '#00F5D4' : 'rgba(255,255,255,0.2)' }} />
          ))}
        </div>
      </div>
    </>
  );
}

/* ─── Main export ─────────────────────────────────────────── */
export default function Testimonials() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section id="testimonials" className="relative py-20 bg-background overflow-hidden" aria-label="Client testimonials">
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0"
        style={{ background: 'rgba(0,245,212,0.05)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none z-0"
        style={{ background: 'rgba(123,47,255,0.06)' }} />

      <div className="relative z-10">
        {/* Header */}
        <ScrollReveal data-reveal="up" className="text-center mb-12 px-5 sm:px-6">
          <p className="font-body text-accent-2 text-xs font-semibold uppercase tracking-[0.22em] mb-3">Client Stories</p>
          <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl uppercase leading-none tracking-tighter mb-3">
            Real Clients.{' '}
            <span className="text-accent-2 text-glow-cyan">Real Results.</span>
          </h2>
          <p className="font-body text-white/50 text-sm sm:text-base max-w-lg mx-auto">
            Beauty professionals across India share what changed after working with us.
          </p>
          <p className="font-body text-white/25 text-xs uppercase tracking-widest mt-3 font-semibold">
            Trusted by 200+ beauty professionals across India
          </p>
        </ScrollReveal>

        {/* ── Desktop: 3-col grid (first row 3, second row 2 centered) with 3D tilt ── */}
        {isDesktop ? (
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Row 1: first 3 cards */}
            <div className="grid grid-cols-3 gap-5 mb-5" style={{ perspective: '1200px' }}>
              {testimonials.slice(0, 3).map((t, i) => (
                <ScrollReveal key={i} delay={i * 100} style={{ perspective: '900px' }}>
                  <TiltTestimonialCard t={t} />
                </ScrollReveal>
              ))}
            </div>
            {/* Row 2: last 2 cards, centred */}
            <div className="grid grid-cols-2 gap-5 max-w-[66%] mx-auto" style={{ perspective: '1200px' }}>
              {testimonials.slice(3).map((t, i) => (
                <ScrollReveal key={i} delay={(i + 3) * 100} style={{ perspective: '900px' }}>
                  <TiltTestimonialCard t={t} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        ) : (
          /* ── Mobile / tablet: swipeable carousel ── */
          <MobileCarousel />
        )}

        {/* CTA */}
        <div data-reveal="up" className="mt-12 text-center px-5">
          <a
            href="https://wa.me/919004001800?text=Hi%20Juntoz!%20I%27d%20like%20to%20know%20how%20you%20can%20grow%20my%20business."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading font-black text-sm uppercase tracking-widest text-background transition-all duration-300 hover:brightness-105 hover:scale-[1.02]"
            style={{ background: '#00F5D4' }}
          >
            Book a Free Strategy Call
          </a>
          <p className="font-body text-white/25 text-xs tracking-widest mt-3">No commitment · 20 min call</p>
        </div>
      </div>
    </section>
  );
}