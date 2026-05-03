import { useState, useRef, useEffect, useCallback } from 'react';

const testimonials = [
  {
    quote: 'My bridal bookings tripled within 2 months. I went from 3–4 enquiries a month to 30+. Their system actually works.',
    name: 'Priya S.', role: 'Bridal Makeup Artist', city: 'Mumbai',
    metric: '3× bookings in 60 days', color: '#FF3AF2',
    verified: true, rating: 5,
  },
  {
    quote: 'They built my entire brand from scratch — Instagram, funnel, the lot. Now clients come to me instead of me chasing them.',
    name: 'Ananya K.', role: 'Freelance MUA', city: 'Delhi',
    metric: '0 → 200+ leads/month', color: '#00F5D4',
    verified: true, rating: 5,
  },
  {
    quote: 'The content strategy connects with my audience like nothing before. My salon went Top 3 on Google in my city.',
    name: 'Mehak R.', role: 'Salon Owner', city: 'Pune',
    metric: 'Top 3 on Google locally', color: '#7B2FFF',
    verified: true, rating: 5,
  },
  {
    quote: '₹6,11,248 generated in just 2 months. Every rupee spent on ads came back multiplied. Juntoz changed my business.',
    name: 'Kajol P.', role: 'Bridal Studio Owner', city: 'Mumbai',
    metric: '₹6L+ revenue in 60 days', color: '#FF3AF2',
    verified: true, rating: 5,
  },
  {
    quote: 'First booking was worth around ₹70,000. The quality of leads improved dramatically — no more price hagglers.',
    name: 'Shaheen M.', role: 'Premium MUA', city: 'Bangalore',
    metric: '₹70K first booking', color: '#00F5D4',
    verified: true, rating: 5,
  },
];

const GAP = 20;

// ── Verified Badge with Pulse Animation ──
const VerifiedBadge = ({ color }) => (
  <div className="relative inline-flex items-center">
    <div
      className="absolute inset-0 rounded-full animate-ping opacity-30"
      style={{ background: color }}
    />
    <div
      className="relative w-5 h-5 rounded-full flex items-center justify-center"
      style={{ background: `${color}25`, border: `1.5px solid ${color}` }}
    >
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        strokeWidth={3} style={{ color }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  </div>
);

// ── Enhanced Star Row with Shimmer Effect ──
const StarRow = ({ color }) => (
  <div className="flex gap-1.5 relative">
    {[...Array(5)].map((_, j) => (
      <div key={j} className="relative group">
        <svg
          className="w-4 h-4 transition-all duration-300 group-hover:scale-125"
          fill={color}
          viewBox="0 0 20 20"
          style={{ filter: `drop-shadow(0 0 4px ${color}40)` }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
    ))}
  </div>
);

// ── Floating Particles Background ──
const FloatingParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-accent-2/20 animate-float"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: '-10%',
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

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
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const ITEMS = [...testimonials, ...testimonials];
  const COUNT = testimonials.length;
  const AUTO_PLAY_INTERVAL = 4000;

  // ── Advanced Cursor Tracking (Magnetic Effect) ──
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // ── Calculate Card Width with Enhanced Logic ──
  const calcCardWidth = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const cw = container.offsetWidth;
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    let w;
    if (isMobile) {
      w = (cw - GAP * 0.3) / 1.15; // Show 1.15 cards on mobile
    } else if (isTablet) {
      w = (cw - GAP * 1.5) / 2.3; // Show 2.3 cards on tablet
    } else {
      w = (cw - GAP * 2.5) / 3.2; // Show 3.2 cards on desktop
    }

    cardWidthRef.current = w;

    if (trackRef.current) {
      Array.from(trackRef.current.children).forEach((card) => {
        card.style.width = `${w}px`;
        card.style.minWidth = `${w}px`;
      });
    }
  }, []);

  // ── Slide Engine with Spring Physics ──
  const slideTo = useCallback((idx, instant = false) => {
    const track = trackRef.current;
    if (!track) return;
    const offset = idx * (cardWidthRef.current + GAP);

    track.style.transition = instant
      ? 'none'
      : 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)'; // Spring easing
    track.style.transform = `translateX(-${offset}px)`;
    indexRef.current = idx;
    setDotIdx(idx % COUNT);
  }, [COUNT]);

  // ── Momentum-based Advance ──
  const advance = useCallback(() => {
    if (pausedRef.current) return;
    const next = indexRef.current + 1;
    if (next >= COUNT) {
      slideTo(next);
      setTimeout(() => slideTo(0, true), 720);
    } else {
      slideTo(next);
    }
  }, [COUNT, slideTo]);

  // ── Progress Bar Animation ──
  useEffect(() => {
    if (pausedRef.current) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / (AUTO_PLAY_INTERVAL / 50));
      });
    }, 50);

    return () => clearInterval(interval);
  }, [pausedRef.current]);

  // ── Reset Progress on Slide Change ──
  useEffect(() => {
    setProgress(0);
  }, [dotIdx]);

  // ── Auto-play Timer ──
  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, AUTO_PLAY_INTERVAL);
  }, [advance]);

  // ── Init + ResizeObserver ──
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

  // ── Enhanced Touch Handling with Velocity Tracking ──
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let startX = 0;
    let startY = 0;
    let isHoriz = null;

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
      const currentTime = Date.now();
      const dx = currentX - startX;
      const dy = e.touches[0].clientY - startY;

      if (isHoriz === null) {
        isHoriz = Math.abs(dx) > Math.abs(dy);
      }

      if (isHoriz) {
        e.preventDefault();
        const dt = currentTime - lastTimeRef.current;
        if (dt > 0) {
          velocityRef.current = (currentX - lastXRef.current) / dt;
        }
        lastXRef.current = currentX;
        lastTimeRef.current = currentTime;
      }
    };

    const onTouchEnd = (e) => {
      const dx = startX - e.changedTouches[0].clientX;
      const threshold = Math.abs(velocityRef.current) > 0.5 ? 30 : 50;

      if (isHoriz && Math.abs(dx) > threshold) {
        if (dx > 0 || velocityRef.current < -0.5) {
          advance();
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

  // ── Enhanced Mouse Drag with Velocity ──
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
    const currentTime = Date.now();
    const dt = currentTime - lastTimeRef.current;
    if (dt > 0) {
      velocityRef.current = (e.clientX - lastXRef.current) / dt;
    }
    lastXRef.current = e.clientX;
    lastTimeRef.current = currentTime;
  };

  const onMouseUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const dx = mouseStartX.current - e.clientX;
    const threshold = Math.abs(velocityRef.current) > 0.5 ? 30 : 50;

    if (Math.abs(dx) > threshold) {
      if (dx > 0 || velocityRef.current < -0.5) {
        advance();
      } else {
        const prev = indexRef.current - 1;
        slideTo(prev < 0 ? COUNT - 1 : prev);
      }
    }
    pausedRef.current = false;
    startTimer();
  };

  // ── Keyboard Navigation ──
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        const prev = indexRef.current - 1;
        slideTo(prev < 0 ? COUNT - 1 : prev);
        startTimer();
      } else if (e.key === 'ArrowRight') {
        advance();
        startTimer();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [advance, slideTo, startTimer, COUNT]);

  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-32 bg-background overflow-hidden"
      aria-label="Client testimonials"
    >
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />
      <FloatingParticles />

      {/* Dynamic Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-2/8 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-5/10 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse-slower" />

      <div className="relative z-10">

        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16 px-5 sm:px-6">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent-2" />
            <p className="font-body text-accent-2 text-sm font-bold uppercase tracking-[0.25em]">
              Social Proof
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent-2" />
          </div>
          <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-7xl uppercase leading-none tracking-tighter mb-4">
            Real People.{' '}
            <span className="text-accent-2 text-glow-cyan inline-block animate-text-shimmer bg-gradient-to-r from-accent-2 via-white to-accent-2 bg-clip-text text-transparent bg-[length:200%_auto]">
              Real Results.
            </span>
          </h2>
          <p className="font-body text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what beauty professionals say about partnering with us.
          </p>
        </div>

        {/* Slider Container */}
        <div
          ref={containerRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          style={{
            paddingLeft: 'max(20px, calc((100vw - 1200px) / 2 + 24px))',
            paddingRight: '20px'
          }}
          onMouseEnter={() => { pausedRef.current = true; clearInterval(timerRef.current); }}
          onMouseLeave={() => { pausedRef.current = false; startTimer(); setHoveredCard(null); }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          role="region"
          aria-label="Testimonial carousel"
        >
          <div
            ref={trackRef}
            className="flex"
            style={{ gap: `${GAP}px`, willChange: 'transform' }}
          >
            {ITEMS.map((t, i) => {
              const isHovered = hoveredCard === i;
              const cardColor = t.color;

              return (
                <div
                  key={i}
                  className="glass-card group relative flex flex-col gap-5 shrink-0 p-6 sm:p-7 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
                  style={{
                    minWidth: '280px',
                    boxShadow: isHovered
                      ? `0 20px 60px ${cardColor}30, 0 0 0 1px ${cardColor}20`
                      : '0 8px 32px rgba(0,0,0,0.3)',
                    background: isHovered
                      ? `linear-gradient(135deg, ${cardColor}08 0%, rgba(8,8,16,0.95) 100%)`
                      : undefined,
                  }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  role="article"
                  aria-label={`Testimonial from ${t.name}`}
                >
                  {/* Hover Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${cardColor}15 0%, transparent 70%)`,
                    }}
                  />

                  {/* Top Row: Metric + Verified Badge */}
                  <div className="relative z-10 flex items-start justify-between gap-3">
                    <div
                      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full font-body font-bold text-xs uppercase tracking-wider transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${cardColor}20 0%, ${cardColor}10 100%)`,
                        border: `1.5px solid ${cardColor}50`,
                        color: cardColor,
                        boxShadow: `0 4px 12px ${cardColor}20`
                      }}
                    >
                      <span
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ background: cardColor, boxShadow: `0 0 8px ${cardColor}` }}
                      />
                      {t.metric}
                    </div>
                    {t.verified && <VerifiedBadge color={cardColor} />}
                  </div>

                  {/* Stars */}
                  <StarRow color={cardColor} />

                  {/* Quote */}
                  <p className="relative z-10 font-body text-white/80 text-sm sm:text-base leading-relaxed flex-1 group-hover:text-white/90 transition-colors">
                    <span className="text-accent-2 text-2xl leading-none mr-1">"</span>
                    {t.quote}
                    <span className="text-accent-2 text-2xl leading-none ml-1">"</span>
                  </p>

                  {/* Divider with Gradient */}
                  <div
                    className="h-px w-full"
                    style={{
                      background: `linear-gradient(90deg, transparent 0%, ${cardColor}30 50%, transparent 100%)`
                    }}
                  />

                  {/* Author Info */}
                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-heading font-black text-white text-base uppercase tracking-tight group-hover:text-accent-2 transition-colors">
                        {t.name}
                      </p>
                      <p
                        className="font-body text-xs font-bold tracking-widest uppercase mt-1 transition-all"
                        style={{ color: cardColor, opacity: 0.9 }}
                      >
                        {t.role}
                      </p>
                      <p className="font-body text-white/40 text-xs mt-1 flex items-center gap-1.5">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {t.city}
                      </p>
                    </div>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                      style={{
                        background: `linear-gradient(135deg, ${cardColor}18 0%, ${cardColor}08 100%)`,
                        border: `2px solid ${cardColor}40`,
                        boxShadow: `0 4px 16px ${cardColor}25`
                      }}
                    >
                      <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        strokeWidth={2.5} style={{ color: cardColor }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Card Number Badge */}
                  <div
                    className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center font-heading font-black text-xs opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ background: `${cardColor}15`, color: cardColor }}
                  >
                    {(i % COUNT) + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Fade Masks */}
        <div
          className="absolute top-0 right-0 h-full w-20 sm:w-32 md:w-40 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, #080810 0%, #08081080 50%, transparent 100%)',
            zIndex: 5,
          }}
        />
        <div
          className="absolute top-0 left-0 h-full w-12 sm:w-16 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #080810 0%, transparent 100%)',
            zIndex: 5,
          }}
        />

        {/* Enhanced Progress Bar & Dots */}
        <div className="mt-10 sm:mt-12 px-5">
          {/* Progress Bar */}
          <div className="w-full max-w-md mx-auto mb-6">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className="h-full transition-all duration-100 ease-linear rounded-full"
                style={{
                  width: `${progress}%`,
                  background: `linear-gradient(90deg, #00F5D4 0%, #7B2FFF 100%)`,
                  boxShadow: '0 0 10px #00F5D4'
                }}
              />
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { slideTo(i); startTimer(); setProgress(0); }}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={dotIdx === i}
                className="relative rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-accent-2 focus:ring-offset-2 focus:ring-offset-background"
                style={{
                  width: dotIdx === i ? '36px' : '10px',
                  height: '10px',
                  background: dotIdx === i
                    ? 'linear-gradient(90deg, #00F5D4 0%, #7B2FFF 100%)'
                    : 'rgba(255,255,255,0.2)',
                  boxShadow: dotIdx === i ? '0 0 12px #00F5D4' : 'none',
                }}
              >
                {dotIdx === i && (
                  <span className="absolute inset-0 rounded-full animate-ping opacity-40"
                    style={{ background: '#00F5D4' }}
                  />
                )}
              </button>
            ))}
          </div>


        </div>

      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.3; }
          50% { transform: translateY(-100vh) rotate(180deg); opacity: 0.6; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
        }
        .animate-float {
          animation: float linear infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.08; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.15); }
        }
        .animate-pulse-slower {
          animation: pulse-slower 12s ease-in-out infinite;
        }
        @keyframes text-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-text-shimmer {
          animation: text-shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  );
}