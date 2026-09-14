import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal.jsx';
import useCountUp from '../hooks/useCountUp.js';

const stats = [
  { value: 200, suffix: '+',  label: 'MUAs & Salons Scaled',  icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  { value: 50, suffix: '+',  label: 'Active Clients / Month', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
  { value: 5,   suffix: '+',  label: 'Years Proven Experience', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { value: 5.0, suffix: ' ★', label: 'Average Client Rating',  decimal: true, icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
];

const GOOGLE_URL = 'https://www.google.com/maps/place/Juntoz+Digital+Marketing+Agency/@19.3016668,72.849608,17z/data=!4m8!3m7!1s0x3be7b10eda3a9a65:0x3c3c948829e3150e!8m2!3d19.3016668!4d72.8521829!9m1!1b1!16s%2Fg%2F11l228zbp7?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D';

function StatCard({ s, started }) {
  const { value } = useCountUp(s.value, { duration: 2000, started });
  const display = s.decimal ? value.toFixed(1) : value;

  return (
    <div className="group rounded-3xl bg-[#1A1A1A] border border-white/10 p-8 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:border-[#E84A2A]/40 hover:-translate-y-1 shadow-card h-full">
      {/* Icon */}
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E84A2A] transition-colors duration-300 group-hover:bg-[#E84A2A] group-hover:text-white">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
        </svg>
      </div>

      <div className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight leading-none mt-1">
        <span>{display}</span>
        <span className="text-[#E84A2A]">{s.suffix}</span>
      </div>
      
      {/* Divider line */}
      <div className="w-12 h-px bg-white/12 transition-all duration-300 group-hover:w-20 group-hover:bg-[#E84A2A]" />
      
      {/* Label */}
      <p className="font-body text-white/65 text-xs font-bold uppercase tracking-wider leading-relaxed">
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
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="results" className="relative py-20 sm:py-28 bg-[#111111] text-white border-y border-white/10 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">

        {/* Header */}
        <ScrollReveal data-reveal="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E84A2A]" />
            <span className="font-body font-bold text-white/80 text-[11px] tracking-wider uppercase">By The Numbers</span>
          </div>
          
          <h2 className="font-heading font-black text-white text-3xl sm:text-5xl md:text-6xl uppercase leading-tight tracking-tight mb-4">
            Proof That Our <span className="text-[#E84A2A]">System Works</span>
          </h2>
          
          <p className="font-body text-white/65 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            We don't just talk about growth. We engineer it. Consistent results across 200+ beauty businesses in India.
          </p>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <ScrollReveal key={i} data-reveal="up" delay={i * 80}>
              <StatCard s={s} started={started} />
            </ScrollReveal>
          ))}
        </div>

        {/* Action area */}
        <ScrollReveal data-reveal="fade" delay={300} className="flex flex-col items-center text-center">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-[#E84A2A] hover:bg-[#C93B20] transition-colors duration-200 shadow-lg active:scale-[0.98]"
          >
            <span>Read Verified Google Reviews</span>
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="font-body text-white/50 text-xs font-semibold uppercase tracking-wider mt-4">
            100+ 5-Star Reviews from Real Clients
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
