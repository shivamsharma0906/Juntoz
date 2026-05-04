import { useState, useRef, useEffect, useCallback } from 'react';

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

const GAP = 20;

const StarRow = ({ color }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, j) => (
      <svg key={j} className="w-3.5 h-3.5" fill={color} viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardWidthRef = useRef(0);
  const indexRef = useRef(0);
  const pausedRef = useRef(false);
  const timerRef = useRef(null);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);

  const [dotIdx, setDotIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  const ITEMS = [...testimonials, ...testimonials];
  const COUNT = testimonials.length;
  const AUTO_PLAY_INTERVAL = 4000;

  const calcCardWidth = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const cw = container.offsetWidth;
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    let w;
    if (isMobile) {
      w = (cw - GAP * 0.3) / 1.1;
    } else if (isTablet) {
      w = (cw - GAP * 1.5) / 2.2;
    } else {
      w = (cw - GAP * 2.5) / 3.1;
    }

    cardWidthRef.current = w;

    if (trackRef.current) {
      Array.from(trackRef.current.children).forEach((card) => {
        card.style.width = `${w}px`;
        card.style.minWidth = `${w}px`;
      });
    }
  }, []);

  const slideTo = useCallback((idx, instant = false) => {
    const track = trackRef.current;
    if (!track) return;
    const offset = idx * (cardWidthRef.current + GAP);
    track.style.transition = instant
      ? 'none'
      : 'transform 0.6s cubic-bezier(0.34, 1.2, 0.64, 1)';
    track.style.transform = `translateX(-${offset}px)`;
    indexRef.current = idx;
    setDotIdx(idx % COUNT);
  }, [COUNT]);

  /* ── Core advance — always fires (used by touch/mouse) ── */
  const advanceTo = useCallback((fromIdx) => {
    const next = fromIdx + 1;
    if (next >= COUNT) {
      slideTo(next);
      setTimeout(() => slideTo(0, true), 650);
    } else {
      slideTo(next);
    }
  }, [COUNT, slideTo]);

  /* ── Auto-play advance — respects pause flag ── */
  const advance = useCallback(() => {
    if (pausedRef.current) return;
    advanceTo(indexRef.current);
  }, [advanceTo]);

  // Progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + (100 / (AUTO_PLAY_INTERVAL / 50))));
    }, 50);
    return () => clearInterval(interval);
  }, [dotIdx]);

  useEffect(() => { setProgress(0); }, [dotIdx]);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, AUTO_PLAY_INTERVAL);
  }, [advance]);

  // Init
  useEffect(() => {
    calcCardWidth();
    startTimer();
    const ro = new ResizeObserver(() => {
      calcCardWidth();
      slideTo(indexRef.current, true);
    });
    if (containerRef.current) ro.observe(containerRef.current);
    return () => { clearInterval(timerRef.current); ro.disconnect(); };
  }, [calcCardWidth, startTimer, slideTo]);

  // Touch handling
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0, startY = 0, isHoriz = null;

    const onTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      lastXRef.current = startX;
      lastTimeRef.current = Date.now();
      velocityRef.current = 0;
      isHoriz = null;
      pausedRef.current = true;
      clearInterval(timerRef.current);
    };
    const onTouchMove = (e) => {
      const currentX = e.touches[0].clientX;
      const dx = currentX - startX;
      const dy = e.touches[0].clientY - startY;
      if (isHoriz === null) isHoriz = Math.abs(dx) > Math.abs(dy);
      if (isHoriz) {
        e.preventDefault();
        const dt = Date.now() - lastTimeRef.current;
        if (dt > 0) velocityRef.current = (currentX - lastXRef.current) / dt;
        lastXRef.current = currentX;
        lastTimeRef.current = Date.now();
      }
    };
    const onTouchEnd = (e) => {
      const dx = startX - e.changedTouches[0].clientX;
      const threshold = Math.abs(velocityRef.current) > 0.5 ? 30 : 50;
      if (isHoriz && Math.abs(dx) > threshold) {
        if (dx > 0 || velocityRef.current < -0.5) {
          advanceTo(indexRef.current);
        } else {
          const prev = indexRef.current - 1;
          slideTo(prev < 0 ? COUNT - 1 : prev);
        }
      }
      pausedRef.current = false;
      startTimer();
      isHoriz = null;
    };
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [advance, slideTo, startTimer, COUNT]);

  // Mouse drag
  const mouseStartX = useRef(0);
  const isDragging = useRef(false);
  const onMouseDown = (e) => {
    mouseStartX.current = e.clientX;
    lastXRef.current = e.clientX;
    lastTimeRef.current = Date.now();
    velocityRef.current = 0;
    isDragging.current = true;
    pausedRef.current = true;
    clearInterval(timerRef.current);
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const dt = Date.now() - lastTimeRef.current;
    if (dt > 0) velocityRef.current = (e.clientX - lastXRef.current) / dt;
    lastXRef.current = e.clientX;
    lastTimeRef.current = Date.now();
  };
  const onMouseUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const dx = mouseStartX.current - e.clientX;
    const threshold = Math.abs(velocityRef.current) > 0.5 ? 30 : 50;
    if (Math.abs(dx) > threshold) {
      if (dx > 0 || velocityRef.current < -0.5) {
        advanceTo(indexRef.current);
      } else {
        const prev = indexRef.current - 1;
        slideTo(prev < 0 ? COUNT - 1 : prev);
      }
    }
    pausedRef.current = false;
    startTimer();
  };

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') { const prev = indexRef.current - 1; slideTo(prev < 0 ? COUNT - 1 : prev); startTimer(); }
      else if (e.key === 'ArrowRight') { advanceTo(indexRef.current); startTimer(); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [advance, slideTo, startTimer, COUNT]);

  return (
    <section
      id="testimonials"
      className="relative py-20 bg-background overflow-hidden"
      aria-label="Client testimonials"
    >
      {/* Static backgrounds — CSS only, zero JS loops */}
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0"
        style={{ background: 'rgba(0,245,212,0.05)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none z-0"
        style={{ background: 'rgba(123,47,255,0.06)' }} />

      <div className="relative z-10">

        {/* Header */}
        <div data-reveal="up" className="text-center mb-12 px-5 sm:px-6">
          <p className="font-body text-accent-2 text-xs font-semibold uppercase tracking-[0.22em] mb-3">
            Client Stories
          </p>
          <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl uppercase leading-none tracking-tighter mb-3">
            Real Clients.{' '}
            <span className="text-accent-2 text-glow-cyan">Real Results.</span>
          </h2>
          <p className="font-body text-white/50 text-sm sm:text-base max-w-lg mx-auto">
            Beauty professionals across India share what changed after working with us.
          </p>
          {/* Trust line */}
          <p className="font-body text-white/25 text-xs uppercase tracking-widest mt-3 font-semibold">
            Trusted by 200+ beauty professionals across India
          </p>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          style={{
            paddingLeft: 'max(20px, calc((100vw - 1200px) / 2 + 24px))',
            paddingRight: '20px',
          }}
          onMouseEnter={() => { pausedRef.current = true; clearInterval(timerRef.current); }}
          onMouseLeave={() => { pausedRef.current = false; startTimer(); }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          role="region"
          aria-label="Testimonial carousel"
        >
          <div ref={trackRef} className="flex" style={{ gap: `${GAP}px`, willChange: 'transform' }}>
            {ITEMS.map((t, i) => (
              <div
                key={i}
                className="glass-card group relative flex flex-col gap-4 shrink-0 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
                style={{ minWidth: '280px' }}
                role="article"
                aria-label={`Testimonial from ${t.name}`}
              >
                {/* Metric badge */}
                <div
                  className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full font-body font-bold text-xs uppercase tracking-wide"
                  style={{
                    background: `${t.color}12`,
                    border: `1px solid ${t.color}35`,
                    color: t.color,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: t.color }} />
                  {t.metric}
                </div>

                {/* Stars */}
                <StarRow color={t.color} />

                {/* Quote */}
                <p className="font-body text-white/75 text-sm leading-relaxed flex-1">
                  "{t.quote}"
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-white/6" />

                {/* Author */}
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-heading font-black text-white text-sm uppercase tracking-tight">
                      {t.name}
                    </p>
                    <p className="font-body text-xs mt-0.5" style={{ color: t.color }}>
                      {t.role} · {t.city}
                    </p>
                  </div>
                  {/* Verified checkmark */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: `${t.color}12`, border: `1px solid ${t.color}30` }}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      strokeWidth={2.5} style={{ color: t.color }}>
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
            <div className="h-px bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-100"
                style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #00F5D4, #7B2FFF)' }}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { slideTo(i); startTimer(); setProgress(0); }}
                aria-label={`Go to testimonial ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: dotIdx === i ? '28px' : '8px',
                  height: '8px',
                  background: dotIdx === i ? '#00F5D4' : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Repeat CTA after proof ── */}
        <div data-reveal="up" className="mt-12 text-center px-5">
          <a
            href="https://wa.me/919004001800?text=Hi%20Juntoz!%20I%27d%20like%20to%20know%20how%20you%20can%20grow%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
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