import { useEffect, useRef, useState, useCallback } from 'react';

const WA_HARD = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20book%20a%20strategy%20call.';

const cases = [
  {
    tag: 'Meta Ads',
    client: 'Mumbai Bridal MUA',
    type: 'Freelance Artist',
    problem: 'Zero enquiries from Instagram despite 8K followers. ₹15K/month on random ads with zero results.',
    actions: [
      'Full Instagram content strategy overhaul',
      'Targeted Meta lead ads with bridal audience',
      'WhatsApp funnel for instant enquiry capture',
      'Google Business Profile + local SEO',
    ],
    results: [
      { label: 'Monthly Enquiries', before: '3–5', after: '200+' },
      { label: 'Bookings / Month', before: '1–2', after: '18+' },
    ],
    headline: '+180% Leads\nin 60 Days',
    timeframe: '60 days',
    color: '#FF3AF2',
    verified: true,
  },
  {
    tag: 'Instagram Growth',
    client: 'Pune Hair Salon',
    type: 'Salon Owner',
    problem: 'New salon with no online presence. Invisible on Google, no strategy, struggling for walk-ins.',
    actions: [
      'Complete brand identity + Instagram setup',
      'Google ranking with "salon near me" keywords',
      'Reels content production system',
      'Referral + review generation campaign',
    ],
    results: [
      { label: 'Google Ranking', before: 'Not Ranked', after: 'Top 3 Local' },
      { label: 'Walk-In Clients', before: '8/week', after: '35+/week' },
    ],
    headline: 'Top 3 Google\nin 60 Days',
    timeframe: '60 days',
    color: '#00F5D4',
    verified: true,
  },
  {
    tag: 'SEO + Ads',
    client: 'Delhi Makeup Studio',
    type: 'Studio Owner',
    problem: 'Spending on content creators but getting no conversions. Followers were growing, bookings were not.',
    actions: [
      'Conversion-focused Instagram content',
      'Lead funnel with WhatsApp CTA',
      'Google Ads for "bridal makeup Delhi"',
      'Monthly performance reporting',
    ],
    results: [
      { label: 'Enquiry Quality', before: 'Price shoppers', after: 'Bridal clients' },
      { label: 'Monthly Bookings', before: '4–6', after: '22+' },
    ],
    headline: '22 Bookings\nPer Month',
    timeframe: '90 days',
    color: '#7B2FFF',
    verified: true,
  },
  {
    tag: 'Full System',
    client: 'Bangalore Freelance MUA',
    type: 'Premium MUA',
    problem: 'Great reviews but no consistent pipeline. Relied entirely on referrals and word of mouth.',
    actions: [
      'Personal brand positioning strategy',
      'Instagram content system with Reels',
      'Meta ads targeting premium bridal clients',
      'Booking funnel with automated follow-up',
    ],
    results: [
      { label: 'Lead Sources', before: 'Referral only', after: 'Ads + SEO + IG' },
      { label: 'Bookings Value', before: '₹20K/mo', after: '₹80K+/mo' },
    ],
    headline: '4× Revenue\nin 3 Months',
    timeframe: '90 days',
    color: '#FF3AF2',
    verified: true,
  },
];

const GAP = 16;
const AUTO_PLAY_INTERVAL = 5000;

export default function CaseStudies() {
  const sectionRef    = useRef(null);
  const containerRef  = useRef(null);
  const trackRef      = useRef(null);
  const cardWidthRef  = useRef(0);
  const indexRef      = useRef(0);
  const pausedRef     = useRef(false);
  const timerRef      = useRef(null);
  const velocityRef   = useRef(0);
  const lastXRef      = useRef(0);
  const lastTimeRef   = useRef(0);
  const mouseStartX   = useRef(0);
  const isDragging    = useRef(false);

  const [isVisible, setIsVisible] = useState(false);
  const [dotIdx, setDotIdx]       = useState(0);
  const [progress, setProgress]   = useState(0);

  const COUNT = cases.length;
  const ITEMS = [...cases, ...cases]; // double for infinite loop

  /* ── Visibility observer ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  /* ── Card width ── */
  const calcCardWidth = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const cw = container.offsetWidth;
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    let w;
    if (isMobile)       w = cw - 40;          // full-width card with side peek
    else if (isTablet)  w = (cw - GAP) / 1.5; // 1.5 cards visible
    else                w = (cw - GAP * 2) / 2.1; // ~2 cards on desktop

    cardWidthRef.current = w;
    if (trackRef.current) {
      Array.from(trackRef.current.children).forEach((card) => {
        card.style.width    = `${w}px`;
        card.style.minWidth = `${w}px`;
      });
    }
  }, []);

  /* ── Slide engine with infinite wraparound ── */
  const slideTo = useCallback((idx, instant = false) => {
    const track = trackRef.current;
    if (!track) return;
    const offset = idx * (cardWidthRef.current + GAP);
    track.style.transition = instant ? 'none' : 'transform 0.6s cubic-bezier(0.34, 1.2, 0.64, 1)';
    track.style.transform  = `translateX(-${offset}px)`;
    indexRef.current = idx;
    setDotIdx(idx % COUNT);
  }, [COUNT]);

  const advance = useCallback(() => {
    if (pausedRef.current) return;
    const next = indexRef.current + 1;
    if (next >= COUNT) {
      // Jump to clone, then silently reset to real first
      slideTo(next);
      setTimeout(() => slideTo(0, true), 650);
    } else {
      slideTo(next);
    }
  }, [COUNT, slideTo]);

  /* ── Progress bar ── */
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => (p >= 100 ? 0 : p + (100 / (AUTO_PLAY_INTERVAL / 50))));
    }, 50);
    return () => clearInterval(interval);
  }, [dotIdx]);
  useEffect(() => { setProgress(0); }, [dotIdx]);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, AUTO_PLAY_INTERVAL);
  }, [advance]);

  /* ── Init + ResizeObserver ── */
  useEffect(() => {
    calcCardWidth();
    startTimer();
    const ro = new ResizeObserver(() => { calcCardWidth(); slideTo(indexRef.current, true); });
    if (containerRef.current) ro.observe(containerRef.current);
    return () => { clearInterval(timerRef.current); ro.disconnect(); };
  }, [calcCardWidth, startTimer, slideTo]);

  /* ── Touch ── */
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
      const dx = cx - startX, dy = e.touches[0].clientY - startY;
      if (isHoriz === null) isHoriz = Math.abs(dx) > Math.abs(dy);
      if (isHoriz) {
        e.preventDefault();
        const dt = Date.now() - lastTimeRef.current;
        if (dt > 0) velocityRef.current = (cx - lastXRef.current) / dt;
        lastXRef.current = cx; lastTimeRef.current = Date.now();
      }
    };
    const onTouchEnd = (e) => {
      const dx = startX - e.changedTouches[0].clientX;
      const threshold = Math.abs(velocityRef.current) > 0.5 ? 30 : 50;
      if (isHoriz && Math.abs(dx) > threshold) {
        if (dx > 0 || velocityRef.current < -0.5) advance();
        else { const prev = indexRef.current - 1; slideTo(prev < 0 ? COUNT - 1 : prev); }
      }
      pausedRef.current = false; startTimer(); isHoriz = null;
    };
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove',  onTouchMove,  { passive: false });
    el.addEventListener('touchend',   onTouchEnd,   { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove',  onTouchMove);
      el.removeEventListener('touchend',   onTouchEnd);
    };
  }, [advance, slideTo, startTimer, COUNT]);

  /* ── Mouse drag ── */
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
      if (dx > 0 || velocityRef.current < -0.5) advance();
      else { const prev = indexRef.current - 1; slideTo(prev < 0 ? COUNT - 1 : prev); }
    }
    pausedRef.current = false; startTimer();
  };

  return (
    <section ref={sectionRef} id="case-studies" className="relative py-20 bg-background overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[120px] pointer-events-none z-0 transition-opacity duration-1000"
        style={{ background: 'rgba(123,47,255,0.07)', opacity: isVisible ? 1 : 0 }}
      />

      <div className="relative z-10">

        {/* Header */}
        <div
          className={`px-5 sm:px-6 mb-10 sm:mb-14 max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-body text-accent-2 text-xs font-semibold uppercase tracking-[0.22em] mb-3">
            Real Results
          </p>
          <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl uppercase leading-none tracking-tighter">
            Client{' '}
            <span className="text-accent-2 text-glow-cyan">Wins</span>
          </h2>
          <p className="font-body text-white/45 text-sm mt-3 max-w-sm leading-relaxed">
            Real campaigns. Real numbers. Real beauty businesses that scaled.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          style={{
            paddingLeft:  'max(20px, calc((100vw - 1200px) / 2 + 24px))',
            paddingRight: '20px',
          }}
          onMouseEnter={() => { pausedRef.current = true; clearInterval(timerRef.current); }}
          onMouseLeave={() => { pausedRef.current = false; startTimer(); }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          role="region"
          aria-label="Case study carousel"
        >
          <div ref={trackRef} className="flex" style={{ gap: `${GAP}px`, willChange: 'transform' }}>
            {ITEMS.map((c, i) => (
              <div
                key={i}
                className="glass-card shrink-0 flex flex-col rounded-2xl overflow-hidden"
                style={{ minWidth: '280px' }}
                role="article"
                aria-label={`Case study: ${c.client}`}
              >
                {/* Card header strip */}
                <div
                  className="px-5 py-4 flex items-center justify-between"
                  style={{ borderBottom: `1px solid ${c.color}20`, background: `${c.color}06` }}
                >
                  <span
                    className="font-body font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: `${c.color}15`, border: `1px solid ${c.color}35`, color: c.color }}
                  >
                    {c.tag}
                  </span>
                  <span className="font-body text-white/30 text-[10px] uppercase tracking-widest">
                    {c.client}
                  </span>
                </div>

                {/* Card body */}
                <div className="flex-1 flex flex-col gap-5 p-5">

                  {/* Client label */}
                  <div>
                    <p className="font-body text-white/40 text-[10px] uppercase tracking-widest mb-0.5">
                      {c.type}
                    </p>
                    <p className="font-body text-white/60 text-xs leading-relaxed">
                      {c.client}
                    </p>
                  </div>

                  {/* Big result headline */}
                  <div
                    className="font-heading font-black uppercase leading-none"
                    style={{
                      fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                      color: c.color,
                      textShadow: `0 0 20px ${c.color}40`,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {c.headline}
                  </div>

                  {/* Problem — short */}
                  <p className="font-body text-white/50 text-xs leading-relaxed line-clamp-2">
                    {c.problem}
                  </p>

                  {/* Results */}
                  <div className="space-y-2.5 flex-1">
                    {c.results.map((r, j) => (
                      <div
                        key={j}
                        className="px-3.5 py-3 rounded-xl flex items-center justify-between gap-3"
                        style={{ background: `${c.color}08`, border: `1px solid ${c.color}18` }}
                      >
                        <span className="font-body text-white/40 text-[10px] uppercase tracking-wider leading-tight flex-1">{r.label}</span>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-heading font-black text-white/20 text-sm line-through">{r.before}</span>
                          <span className="text-white/30 text-xs">→</span>
                          <span
                            className="font-heading font-black text-base"
                            style={{ color: c.color }}
                          >
                            {r.after}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Verified + timeframe */}
                  <div className="flex items-center justify-between pt-1">
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-body font-bold text-[10px] uppercase tracking-wide"
                      style={{ background: `${c.color}10`, border: `1px solid ${c.color}25`, color: c.color }}
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Verified Result
                    </div>
                    <span className="font-body text-white/25 text-[10px] uppercase tracking-widest">
                      {c.timeframe}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fade mask — right edge */}
        <div
          className="absolute top-0 right-0 h-full w-16 sm:w-28 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #080810 0%, transparent 100%)', zIndex: 5 }}
        />

        {/* Progress + dots */}
        <div className="mt-8 px-5">
          <div className="w-full max-w-xs mx-auto mb-4">
            <div className="h-px bg-white/8 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-100"
                style={{ width: `${progress}%`, background: `linear-gradient(90deg, #00F5D4, #7B2FFF)` }}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => { slideTo(i); startTimer(); setProgress(0); }}
                aria-label={`Go to case ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width:      dotIdx === i ? '28px' : '8px',
                  height:     '8px',
                  background: dotIdx === i ? '#00F5D4' : 'rgba(255,255,255,0.18)',
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div data-reveal="up" className="mt-12 text-center px-5">
          <a
            href={WA_HARD}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading font-black text-sm uppercase tracking-widest text-background transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
            style={{ background: '#00F5D4' }}
          >
            Get Results Like These
          </a>
          <p className="font-body text-white/25 text-xs tracking-widest mt-3">
            Free strategy call · No commitment
          </p>
        </div>

      </div>
    </section>
  );
}
