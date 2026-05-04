import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 200, suffix: '+',  label: 'MUAs & Salons',         color: '#FF3AF2' },
  { value: 100, suffix: '+',  label: 'Active Clients / Month', color: '#00F5D4' },
  { value: 3,   suffix: '+',  label: 'Years Experience',       color: '#7B2FFF' },
  { value: 5.0, suffix: ' ★', label: 'Client Rating',          color: '#FFE600', decimal: true },
];

const GOOGLE_URL =
  'https://www.google.com/maps/place/Juntoz+Digital+Marketing+Agency/@19.3016668,72.849608,17z/data=!4m8!3m7!1s0x3be7b10eda3a9a65:0x3c3c948829e3150e!8m2!3d19.3016668!4d72.8521829!9m1!1b1!16s%2Fg%2F11l228zbp7?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D';

/* ── Counter: rAF-driven, fires once, no recurring intervals ── */
function Counter({ value, suffix, decimal, started }) {
  const elRef  = useRef(null);
  const donRef = useRef(false);

  useEffect(() => {
    if (!started || donRef.current || !elRef.current) return;
    donRef.current = true;
    const duration  = 1800;
    const startTime = performance.now();
    const end       = decimal ? value : Math.round(value);

    const tick = (now) => {
      const p    = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const cur  = decimal ? (ease * end).toFixed(1) : Math.round(ease * end);
      if (elRef.current) elRef.current.textContent = cur + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, value, decimal, suffix]);

  return (
    <span ref={elRef}>
      {decimal ? (0).toFixed(1) : 0}{suffix}
    </span>
  );
}

/* ── StatCard: tilt via RAF throttle, willChange only during hover ── */
function StatCard({ s, idx, started }) {
  const cardRef = useRef(null);
  const rafRef  = useRef(null);

  const onMouseMove = (e) => {
    if (rafRef.current) return; // already queued
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 14;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 14;
      card.style.transform = `perspective(700px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.03)`;
    });
  };

  const onMouseLeave = () => {
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    const card = cardRef.current;
    if (card) {
      card.style.transform = '';
      card.style.willChange = 'auto'; // release GPU layer on leave
    }
  };

  const onMouseEnter = () => {
    if (cardRef.current) cardRef.current.style.willChange = 'transform'; // hint only while hovering
  };

  return (
    <div
      ref={cardRef}
      data-reveal="zoom"
      data-delay={String(idx * 100)}
      className="glass-card p-5 md:p-7 flex flex-col items-center text-center gap-3 transition-[border-color] duration-300 hover:border-white/15"
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="font-heading font-black leading-none"
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          color: s.color,
          textShadow: `0 0 24px ${s.color}50`,
        }}
      >
        <Counter value={s.value} suffix={s.suffix} decimal={s.decimal} started={started} />
      </div>
      <div className="w-8 h-px" style={{ backgroundColor: s.color, opacity: 0.4 }} />
      <p className="font-body text-white/50 text-xs font-semibold uppercase tracking-widest leading-tight">
        {s.label}
      </p>
    </div>
  );
}

export default function Results() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="results" className="relative py-20 bg-background overflow-hidden" ref={ref}>
      {/* Static backgrounds */}
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[120px] pointer-events-none z-0"
        style={{ background: 'rgba(123,47,255,0.07)' }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        {/* Header */}
        <div data-reveal="up" className="text-center mb-12">
          <p className="font-body text-accent-2 text-xs font-semibold uppercase tracking-[0.22em] mb-3">
            By The Numbers
          </p>
          <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl uppercase leading-none tracking-tighter">
            Proof That Our{' '}
            <span className="text-accent-2 text-glow-cyan">System Works</span>
          </h2>
          <p className="font-body text-white/40 text-sm mt-3 max-w-sm mx-auto">
            Consistent results across 200+ beauty businesses in India.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => (
            <StatCard key={i} s={s} idx={i} started={started} />
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="flex flex-col items-center gap-3">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-heading font-black text-sm uppercase tracking-widest text-background transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #00F5D4 0%, #7B2FFF 100%)',
              boxShadow: '0 0 28px rgba(0,245,212,0.25)',
            }}
          >
            Read Google Reviews ↗
          </a>
          <p className="font-body text-white/25 text-xs uppercase tracking-widest">
            100+ verified client reviews
          </p>
        </div>

      </div>
    </section>
  );
}
