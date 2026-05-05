import { useRef, useState, useEffect, useCallback } from 'react';
import ScrollReveal from './ScrollReveal.jsx';

const services = [
  {
    num: '01',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Instagram Growth',
    subtitle: 'Content & Strategy',
    desc: 'Content strategies to turn your profile into a high-converting client magnet. We build your authority, not just your follower count.',
    what: 'Content → Trust → Clients',
    points: ['Instagram page handling', 'Content calendar & ideas', 'Reels editing & upload', 'Stories & highlights', 'Grid layout design', 'Organic growth'],
    color: '#00F5D4',
  },
  {
    num: '02',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
      </svg>
    ),
    title: 'Lead Generation Ads',
    subtitle: 'Meta & Google',
    desc: 'Laser-targeted campaigns designed to put your business in front of brides and beauty lovers exactly when they are searching.',
    what: 'Ads → Real Leads',
    points: ['Facebook & Instagram campaigns', 'Google Search & Display', 'Lead capture funnels', 'Audience targeting', 'Performance insights', 'Monthly reporting'],
    color: '#FF3AF2',
  },
  {
    num: '03',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO & Local Visibility',
    subtitle: 'Rank Where It Counts',
    desc: 'Dominate local search results and get found when it matters most. We make sure you show up first.',
    what: 'SEO → Visibility → Bookings',
    points: ['Google Business Profile', 'Local keyword optimization', 'Review generation', 'On-page SEO', 'Monthly reports', 'Map pack dominance'],
    color: '#7B2FFF',
  },
  {
    num: '04',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: 'WhatsApp Funnels',
    subtitle: 'DMs → Bookings',
    desc: 'Turn conversations into conversions with automated sequences that nurture leads while you sleep.',
    what: 'Automation → Conversions',
    points: ['WhatsApp automation', 'Follow-up sequences', 'Lead nurturing', 'Enquiry capture', 'CRM integration', 'Booking flows'],
    color: '#FF6B35',
  },
];

/* ─── Desktop 3D tilt card ─────────────────────────────────── */
function TiltCard({ s }) {
  const cardRef = useRef(null);
  const rafRef = useRef(null);
  const boundsRef = useRef(null);

  const onMouseEnter = () => {
    boundsRef.current = cardRef.current?.getBoundingClientRect();
  };

  const onMouseMove = (e) => {
    if (rafRef.current) return; // throttle to one RAF per frame
    rafRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card || !boundsRef.current) { rafRef.current = null; return; }
      const { left, top, width, height } = boundsRef.current;
      const x = ((e.clientX - left) / width - 0.5) * 2;   // -1 … +1
      const y = ((e.clientY - top) / height - 0.5) * 2;  // -1 … +1
      const rotX = -y * 12;   // tilt up/down
      const rotY = x * 16;   // tilt left/right
      const glowX = 50 + x * 30;
      const glowY = 50 + y * 30;
      card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03) translateZ(8px)`;
      card.style.setProperty('--gx', `${glowX}%`);
      card.style.setProperty('--gy', `${glowY}%`);
      rafRef.current = null;
    });
  };

  const onMouseLeave = () => {
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.6s ease';
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0)';
    card.style.setProperty('--gx', '50%');
    card.style.setProperty('--gy', '50%');
    setTimeout(() => { if (card) card.style.transition = ''; }, 600);
  };

  return (
    <div
      ref={cardRef}
      className="relative flex flex-col p-6 rounded-2xl cursor-none"
      style={{
        '--gx': '50%',
        '--gy': '50%',
        background: `linear-gradient(135deg, ${s.color}0A 0%, rgba(255,255,255,0.02) 100%)`,
        border: `1px solid ${s.color}40`,
        boxShadow: `0 4px 40px ${s.color}20, inset 0 1px 0 ${s.color}18`,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        transformOrigin: 'center center',
      }}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Moving radial spotlight */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(320px circle at var(--gx) var(--gy), ${s.color}18, transparent 70%)`,
        }}
      />

      {/* Icon + number */}
      <div className="flex items-start justify-between mb-5 relative z-10">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center border"
          style={{ backgroundColor: `${s.color}15`, borderColor: `${s.color}35`, color: s.color }}
        >
          {s.icon}
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center font-heading font-black text-[11px]"
          style={{ backgroundColor: s.color, color: '#08080f' }}
        >
          {s.num}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-heading font-black text-white text-lg uppercase leading-tight mb-1 relative z-10">
        {s.title}
      </h3>
      <p className="font-body text-xs font-bold uppercase tracking-[0.15em] mb-3 relative z-10" style={{ color: s.color }}>
        {s.subtitle}
      </p>

      {/* Badge */}
      <div
        className="mb-4 px-3 py-1.5 rounded-full font-body text-[10px] font-bold uppercase tracking-wider w-fit relative z-10"
        style={{ background: `${s.color}12`, border: `1px solid ${s.color}30`, color: s.color }}
      >
        {s.what}
      </div>

      {/* Description */}
      <p className="font-body text-white/50 text-sm leading-relaxed mb-5 flex-1 relative z-10">
        {s.desc}
      </p>

      {/* Points */}
      <ul className="space-y-2 relative z-10">
        {s.points.map((pt, j) => (
          <li key={j} className="flex items-center gap-2.5 font-body text-white/55 text-xs">
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Mobile carousel card ─────────────────────────────────── */
function CarouselCard({ s }) {
  return (
    <div
      className="shrink-0 flex flex-col p-5 rounded-2xl"
      style={{
        minWidth: '280px',
        background: `linear-gradient(135deg, ${s.color}08 0%, rgba(255,255,255,0.02) 100%)`,
        border: `1px solid ${s.color}35`,
        boxShadow: `0 4px 32px ${s.color}18`,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      role="article"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center border"
          style={{ backgroundColor: `${s.color}12`, borderColor: `${s.color}28`, color: s.color }}>
          {s.icon}
        </div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center font-heading font-black text-[11px]"
          style={{ backgroundColor: s.color, color: '#08080f' }}>
          {s.num}
        </div>
      </div>
      <h3 className="font-heading font-black text-white text-lg uppercase leading-tight mb-1">{s.title}</h3>
      <p className="font-body text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color: s.color }}>{s.subtitle}</p>
      <div className="mb-4 px-3 py-1.5 rounded-full font-body text-[10px] font-bold uppercase tracking-wider w-fit"
        style={{ background: `${s.color}10`, border: `1px solid ${s.color}25`, color: s.color }}>
        {s.what}
      </div>
      <p className="font-body text-white/50 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
      <ul className="space-y-2">
        {s.points.map((pt, j) => (
          <li key={j} className="flex items-center gap-2.5 font-body text-white/55 text-xs">
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Mobile carousel logic ───────────────────────────────── */
const GAP = 16;
const AUTO_PLAY_INTERVAL = 4500;

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

  const [dotIdx, setDotIdx] = useState(0);
  const COUNT = services.length;
  const ITEMS = [...services, ...services];

  const calcCardWidth = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const cw = container.offsetWidth;
    const isTablet = window.innerWidth >= 768;
    // Show 85% on mobile (15% peek) and ~1.8 cards on tablet
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

        // 🔥 ADD THIS PART (LIVE DRAG FIX)
        const track = trackRef.current;
        if (track) {
          const delta = startX - cx;
          const baseOffset = indexRef.current * (cardWidthRef.current + GAP);
          const newOffset = baseOffset + delta;

          track.style.transition = 'none';
          track.style.transform = `translateX(-${newOffset}px)`;
        }

        // velocity logic (keep your existing)
        const dt = Date.now() - lastTimeRef.current;
        if (dt > 0) velocityRef.current = (cx - lastXRef.current) / dt;
        lastXRef.current = cx;
        lastTimeRef.current = Date.now();
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
      <div ref={containerRef} className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ paddingLeft: '16px', paddingRight: '16px', touchAction: 'pan-y' }}
        onMouseEnter={() => { pausedRef.current = true; clearInterval(timerRef.current); }}
        onMouseLeave={() => { pausedRef.current = false; startTimer(); }}
        onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}
        role="region" aria-label="Services carousel">
        <div ref={trackRef} className="flex" style={{ gap: `${GAP}px`, willChange: 'transform' }}>
          {ITEMS.map((s, i) => <CarouselCard key={i} s={s} />)}
        </div>
      </div>

      {/* Fade mask right */}
      <div className="absolute top-0 right-0 h-full w-16 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #080810 0%, transparent 100%)', zIndex: 5 }} />

      {/* Progress + dots */}
      <div className="mt-8 px-5">
        <div className="w-full max-w-xs mx-auto mb-4">
          <div className="h-px bg-white/8 rounded-full overflow-hidden relative">
            <div key={dotIdx} className="absolute top-0 left-0 h-full w-full rounded-full origin-left will-change-transform"
              style={{
                background: 'linear-gradient(90deg, #FF3AF2, #7B2FFF)',
                animation: `progress-fill ${AUTO_PLAY_INTERVAL}ms linear forwards`
              }} />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          {services.map((_, i) => (
            <button key={i} onClick={() => { slideTo(i); startTimer(); }}
              aria-label={`Go to service ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: dotIdx === i ? '28px' : '8px', height: '8px',
                background: dotIdx === i ? '#FF3AF2' : 'rgba(255,255,255,0.18)'
              }} />
          ))}
        </div>
      </div>
    </>
  );
}

/* ─── Main export ─────────────────────────────────────────── */
export default function Services() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section id="services" className="relative py-20 bg-background overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full blur-[120px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(123,47,255,0.12) 0%, transparent 70%)' }} />

      <div className="relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-10 sm:mb-14 px-5 sm:px-6">
          <p className="font-body text-accent-2 text-xs font-semibold uppercase tracking-[0.22em] mb-3">What We Do</p>
          <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl uppercase leading-none tracking-tighter">
            Services Built to <span className="text-accent-2 text-glow-cyan">Convert</span>
          </h2>
          <p className="font-body text-white/50 text-sm max-w-md mx-auto mt-4 leading-relaxed">
            Every service is a piece of a proven system. Together, they fill your calendar.
          </p>
        </ScrollReveal>

        {/* ── Desktop: static 4-col grid with 3D tilt ── */}
        {isDesktop ? (
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-4 gap-5" style={{ perspective: '1200px' }}>
              {services.map((s, i) => (
                <ScrollReveal key={i} delay={i * 100} className="group h-full" style={{ perspective: '900px' }}>
                  <TiltCard s={s} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        ) : (
          /* ── Mobile: swipeable carousel ── */
          <MobileCarousel />
        )}
      </div>
    </section>
  );
}