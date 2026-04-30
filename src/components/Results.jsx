import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 200, suffix: '+', label: 'MUAs & SALONS', icon: '🚀', color: '#FF3AF2' },
  { value: 100, suffix: '+', label: 'ACTIVE CLIENTS / MONTH', icon: '📱', color: '#00F5D4' },
  { value: 3, suffix: '+', label: 'YEARS EXPERIENCE', icon: '📅', color: '#FFE600' },
  { value: 5.0, suffix: ' ★', label: 'CLIENT RATING', icon: '⭐', color: '#FF6B35', decimal: true },
];

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
    <section id="results" className="relative py-24 bg-accent-5 overflow-hidden z-10 border-y-8 border-accent-1" ref={ref}>
      {/* Pattern overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle, #FF3AF2 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-20">

        {/* Banner container */}
        <div className="bg-background border-8 border-accent-3 rounded-[32px] px-8 py-12 md:px-12 md:py-14 relative"
          style={{ boxShadow: '12px 12px 0 #FFE600, 24px 24px 0 #FF3AF2', transform: 'rotate(1deg)' }}>

          {/* Top label */}
          <div className="absolute -top-6 -left-2 bg-accent-1 text-white font-heading font-black px-6 py-2 border-4 border-background uppercase tracking-widest text-lg shadow-[4px_4px_0_#FFF]"
            style={{ transform: 'rotate(-4deg)' }}>
            BY THE NUMBERS 📊
          </div>

          {/* Stats grid — 2 columns on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
            {stats.map((s, i) => (
              <div key={i}
                className="flex flex-col items-center text-center gap-3 group cursor-default"
              >
                {/* Icon badge */}
                <div className="text-4xl mb-1 group-hover:scale-125 transition-transform duration-300">
                  {s.icon}
                </div>

                {/* Number */}
                <div
                  className="font-heading font-black leading-none"
                  style={{
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    color: s.color,
                    textShadow: `3px 3px 0 #0D0D1A, 6px 6px 0 #FFF`,
                  }}
                >
                  <Counter value={s.value} suffix={s.suffix} decimal={s.decimal} started={started} />
                </div>

                {/* Divider */}
                <div className="w-12 h-1 rounded-full" style={{ backgroundColor: s.color }}></div>

                {/* Label */}
                <p className="font-heading font-bold text-white text-sm md:text-base tracking-widest uppercase leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          
          {/* Action Button */}
          <div className="mt-12 md:mt-16 text-center">
            <a 
              href="https://www.google.com/maps/place/Juntoz+Digital+Marketing+Agency/@19.3016668,72.849608,17z/data=!4m8!3m7!1s0x3be7b10eda3a9a65:0x3c3c948829e3150e!8m2!3d19.3016668!4d72.8521829!9m1!1b1!16s%2Fg%2F11l228zbp7?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-1 text-white font-heading font-black uppercase tracking-widest text-lg md:text-xl rounded-full border-4 border-background shadow-hard-1 hover:scale-105 transition-all duration-300"
            >
              Read Google Reviews ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
