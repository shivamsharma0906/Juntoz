import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal.jsx';
import useCountUp from '../hooks/useCountUp.js';

const stats = [
  { value: 200, suffix: '+',  label: 'MUAs & Salons',         color: '#FF3AF2', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  { value: 50, suffix: '+',  label: 'Active Clients / Month', color: '#00F5D4', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
  { value: 5,   suffix: '+',  label: 'Years Experience',       color: '#7B2FFF', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { value: 5.0, suffix: ' ★', label: 'Client Rating',          color: '#FFE600', decimal: true, icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
];

const GOOGLE_URL = 'https://www.google.com/maps/place/Juntoz+Digital+Marketing+Agency/@19.3016668,72.849608,17z/data=!4m8!3m7!1s0x3be7b10eda3a9a65:0x3c3c948829e3150e!8m2!3d19.3016668!4d72.8521829!9m1!1b1!16s%2Fg%2F11l228zbp7?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D';

/* ── Counter component removed in favor of useCountUp hook ── */

/* ── StatCard: Hover effects and animated borders ── */
function StatCard({ s, started }) {
  const { value } = useCountUp(s.value, { duration: 2000, started });
  const display = s.decimal ? value.toFixed(1) : value;

  return (
    <div className="group relative rounded-[2rem] overflow-hidden p-[1px] transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full">
      {/* Outer Border Shimmer */}
      <div 
        className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${s.color}80, transparent 65%, ${s.color}80)` }} 
      />
      
      <div className="relative h-full bg-[#0E0E1C]/35 backdrop-blur-xl rounded-[31px] p-6 md:p-8 flex flex-col items-center text-center gap-4 z-10 overflow-hidden">
        {/* Glow behind card on hover */}
        <div 
          className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-[65px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
          style={{ background: s.color }}
        />

        {/* Icon */}
        <div 
          className="relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
          style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: s.color }}>
            <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
          </svg>
        </div>

        <div
          className="relative z-10 font-heading font-black leading-none mt-2 transition-transform duration-300 group-hover:scale-110 origin-bottom"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            color: s.color,
            textShadow: `0 0 30px ${s.color}40`,
          }}
        >
          <span>{display}{s.suffix}</span>
        </div>
        
        {/* Divider line */}
        <div className="w-12 h-px transition-all duration-300 group-hover:w-20" style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }} />
        
        {/* Label */}
        <p className="relative z-10 font-body text-white/60 text-xs font-bold uppercase tracking-widest leading-relaxed">
          {s.label}
        </p>
      </div>
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
    <section id="results" className="relative py-12 sm:py-16 md:py-24 bg-background overflow-hidden" ref={ref}>
      {/* Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[150px] pointer-events-none z-0 opacity-20"
        style={{ background: 'radial-gradient(ellipse, #7B2FFF, #00F5D4, transparent)' }} />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">

        {/* Header */}
        <ScrollReveal data-reveal="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#7B2FFF] animate-pulse" />
            <span className="font-body font-semibold text-white/80 text-[10px] tracking-widest uppercase">By The Numbers</span>
          </div>
          
          <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl uppercase leading-none tracking-tighter mb-4">
            Proof That Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FFF] to-[#00F5D4]">
              System Works
            </span>
          </h2>
          
          <p className="font-body text-white/50 text-sm md:text-base max-w-lg mx-auto">
            We don't just talk about growth. We engineer it. Consistent results across 200+ beauty businesses in India.
          </p>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <ScrollReveal key={i} data-reveal="up" delay={i * 100}>
              <StatCard s={s} started={started} />
            </ScrollReveal>
          ))}
        </div>

        {/* Action area */}
        <ScrollReveal data-reveal="fade" delay={400} className="flex flex-col items-center text-center">
          <div className="relative group/cta inline-block">
             <div className="absolute -inset-1 bg-gradient-to-r from-[#00F5D4] to-[#7B2FFF] rounded-full blur opacity-25 group-hover/cta:opacity-75 transition duration-500" />
             <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-heading font-black text-sm md:text-base uppercase tracking-widest text-white bg-[#05050C] border border-white/10 transition-transform duration-300 hover:scale-[1.02]"
             >
               Read Verified Google Reviews 
               <svg className="w-5 h-5 transition-transform duration-300 group-hover/cta:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
             </a>
          </div>
          <p className="font-body text-white/60 text-xs font-bold uppercase tracking-[0.2em] mt-6">
            100+ 5-Star Reviews from Real Clients
          </p>
        </ScrollReveal>

      </div>

      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}
