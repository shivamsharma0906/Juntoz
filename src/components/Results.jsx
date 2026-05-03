import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 200, suffix: '+',  label: 'MUAs & Salons',         icon: '🚀', color: '#FF3AF2' },
  { value: 100, suffix: '+',  label: 'Active Clients / Month', icon: '📱', color: '#00F5D4' },
  { value: 3,   suffix: '+',  label: 'Years Experience',       icon: '📅', color: '#7B2FFF' },
  { value: 5.0, suffix: ' ★', label: 'Client Rating',          icon: '⭐', color: '#FFE600', decimal: true },
];

const GOOGLE_URL = 'https://www.google.com/maps/place/Juntoz+Digital+Marketing+Agency/@19.3016668,72.849608,17z/data=!4m8!3m7!1s0x3be7b10eda3a9a65:0x3c3c948829e3150e!8m2!3d19.3016668!4d72.8521829!9m1!1b1!16s%2Fg%2F11l228zbp7?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D';

function Counter({ value, suffix, decimal, started }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const startTime = performance.now();
    const end = decimal ? value : Math.round(value);
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = decimal ? +(ease * end).toFixed(1) : Math.round(ease * end);
      setCount(current);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, value, decimal]);
  return <>{decimal ? count.toFixed(1) : count}{suffix}</>;
}

export default function Results() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="results" className="relative py-28 bg-background overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent-5/8 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-accent-2 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            By The Numbers
          </p>
          <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl uppercase leading-none tracking-tighter">
            Proof That Our <span className="text-accent-2 text-glow-cyan">System Works</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => (
            <div key={i} className="glass-card p-6 md:p-8 flex flex-col items-center text-center gap-3 hover:border-white/15 transition-all duration-300">
              <span className="text-2xl">{s.icon}</span>
              <div
                className="font-heading font-black leading-none"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  color: s.color,
                  textShadow: `0 0 30px ${s.color}60`,
                }}
              >
                <Counter value={s.value} suffix={s.suffix} decimal={s.decimal} started={started} />
              </div>
              <div className="w-8 h-px" style={{ backgroundColor: s.color, opacity: 0.5 }} />
              <p className="font-body text-white/50 text-xs font-semibold uppercase tracking-widest leading-tight">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="flex flex-col items-center gap-3">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/15 text-white/80 font-heading font-black text-sm uppercase tracking-widest hover:border-accent-2/50 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            Read Google Reviews ↗
          </a>
          <p className="font-body text-white/25 text-xs uppercase tracking-widest">100+ verified client reviews</p>
        </div>

      </div>
    </section>
  );
}
