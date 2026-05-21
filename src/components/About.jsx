import { useState, useRef, useEffect } from 'react';
import ScrollReveal from './ScrollReveal.jsx';

const proofStats = [
  { value: 200, suffix: '+', label: 'Beauty Clients Across India', color: '#FF3AF2', icon: '💄' },
  { value: 100, suffix: '+', label: 'Active Clients / Month', color: '#00F5D4', icon: '🎯' },
  { value: 5.0, suffix: '★', label: 'Client Rating', color: '#7B2FFF', icon: '⭐' },
];

const values = [
  {
    n: '01',
    headline: 'More Bridal Bookings',
    sub: 'Not Just Likes',
    color: '#FF3AF2',
    icon: '💍',
    description: 'Convert Instagram followers into paying bridal clients with our proven funnel system.',
  },
  {
    n: '02',
    headline: 'Real Leads',
    sub: 'Not Vanity Followers',
    color: '#00F5D4',
    icon: '📈',
    description: 'Quality leads who actually book, not random followers who never convert.',
  },
  {
    n: '03',
    headline: 'Predictable Revenue',
    sub: 'Monthly Booking System',
    color: '#7B2FFF',
    icon: '💰',
    description: 'Stop the feast-or-famine cycle. Get consistent monthly bookings.',
  },
];


// ── Stat Card Component ──
const StatCard = ({ stat, isVisible }) => {
  const counterRef = useRef({ count: 0, hasAnimated: false });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible || counterRef.current.hasAnimated) return;
    counterRef.current.hasAnimated = true;
    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newValue = Math.min(increment * currentStep, stat.value);
      setDisplayValue(newValue);
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayValue(stat.value);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  const formattedValue = typeof stat.value === 'number' && stat.value % 1 !== 0
    ? displayValue.toFixed(1)
    : Math.floor(displayValue);

  return (
    <div
      className="group relative flex items-center gap-4 flex-1 min-w-[140px] px-4 py-4 rounded-[20px] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)`,
        border: `1px solid rgba(255,255,255,0.08)`,
        boxShadow: `0 8px 32px rgba(0,0,0,0.2)`,
      }}
    >
      {/* Dynamic hover glow based on stat color */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(150px circle at center, ${stat.color}15 0%, transparent 100%)`,
        }}
      />

      {/* Sweep shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[nav-cta-sweep_1.2s_ease-in-out] pointer-events-none" />

      {/* Icon */}
      <div
        className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-2xl shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-inner"
        style={{
          background: `linear-gradient(135deg, ${stat.color}20, transparent)`,
          border: `1px solid ${stat.color}30`,
          filter: `drop-shadow(0 0 10px ${stat.color}40)`,
        }}
      >
        {stat.icon}
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1">
        <div
          className="font-heading font-black leading-none transition-transform duration-300 group-hover:scale-105 origin-left"
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: stat.color,
            textShadow: `0 0 20px ${stat.color}50`,
          }}
        >
          {formattedValue}{stat.suffix}
        </div>
        <div
          className="font-body text-[10px] md:text-xs uppercase tracking-[0.15em] mt-1.5 font-bold transition-colors duration-300 group-hover:text-white/80"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          {stat.label}
        </div>
      </div>
    </div>
  );
};

// ── Value Card ── 
const ValueCard = ({ value }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] p-1"
      style={{
        background: `linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))`,
        boxShadow: `0 10px 40px rgba(0,0,0,0.3)`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[nav-cta-sweep_1.5s_ease-in-out_infinite] pointer-events-none" />
      
      <div className="relative h-full bg-[#06060F]/90 backdrop-blur-xl rounded-[22px] px-6 py-8 md:px-8 md:py-10 flex flex-col gap-5 overflow-hidden">
        
        {/* Animated ambient glow inside card */}
        <div
          className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
          style={{ background: value.color }}
        />

        {/* Header: Number + Icon */}
        <div className="flex items-center justify-between relative z-10">
           <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-black text-sm transition-all duration-500 group-hover:scale-110 shadow-lg"
            style={{
              backgroundColor: value.color,
              color: '#08080f',
              boxShadow: `0 0 20px ${value.color}60`,
            }}
          >
            {value.n}
          </div>
          <div
            className="text-4xl transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12"
            style={{ filter: `drop-shadow(0 0 15px ${value.color}50)` }}
          >
            {value.icon}
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1 space-y-2 relative z-10 mt-2">
          <p className="font-heading font-black text-white text-xl md:text-2xl uppercase leading-tight tracking-tight">
            {value.headline}
          </p>
          <p className="font-body text-sm font-bold uppercase tracking-wider" style={{ color: value.color }}>
            {value.sub}
          </p>
          <p className="font-body text-sm leading-relaxed text-white/50 pt-2 border-t border-white/10 mt-3">
            {value.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-background overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Cinematic Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 pattern-grid opacity-100" />
        <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-30" style={{ background: '#FF3AF2' }} />
        <div className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-20" style={{ background: '#00F5D4' }} />
        <div className="absolute bottom-0 left-[30%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20" style={{ background: '#7B2FFF' }} />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Header Section */}
        <ScrollReveal data-reveal="up" className="mb-16 md:mb-24 text-center max-w-4xl mx-auto">
          {/* Glowing Label */}
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full border border-accent-2/20 bg-accent-2/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-accent-2 animate-pulse" />
            <p className="font-body text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#00F5D4' }}>
              Who We Are
            </p>
          </div>

          <h2
            id="about-heading"
            className="font-heading font-black uppercase leading-[0.9] tracking-tighter mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          >
            <span className="text-white block mb-2">Your Growth Partner for</span>
            <span
              className="inline-block bg-gradient-to-r from-[#00F5D4] via-[#7B2FFF] to-[#FF3AF2] bg-clip-text text-transparent"
              style={{ textShadow: '0 10px 40px rgba(123,47,255,0.4)' }}
            >
              Beauty Brands.
            </span>
          </h2>

          <p className="font-body leading-relaxed max-w-2xl mx-auto text-white/60 text-base md:text-lg">
            We help makeup artists, salons, and beauty brands turn Instagram into a
            consistent booking machine using ads, content, and conversion systems.{' '}
            <span className="text-white font-semibold block mt-2">No fluff. Just results.</span>
          </p>
        </ScrollReveal>

        {/* Stats Section with animated counter */}
        <ScrollReveal data-reveal="up" delay={150} className="mb-20">
          <div className="flex flex-col lg:flex-row gap-5 p-2 rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
            {proofStats.map((stat, i) => (
              <StatCard key={i} stat={stat} isVisible={isVisible} />
            ))}
          </div>
        </ScrollReveal>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((v, idx) => (
            <ScrollReveal key={v.n} data-reveal="up" delay={250 + idx * 100}>
              <ValueCard value={v} />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <ScrollReveal data-reveal="fade" delay={600} className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 py-3 px-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#00F5D4]" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00F5D4]" />
            </span>
            <p className="font-body text-white/70 text-sm tracking-wide font-medium">
              Ready to scale your beauty business?{' '}
              <a href="#contact" className="text-[#00F5D4] font-bold uppercase tracking-widest hover:text-white transition-colors duration-300 ml-1">
                Let's talk ↗
              </a>
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}