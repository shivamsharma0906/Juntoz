import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal.jsx';

const proofStats = [
  { value: 200, suffix: '+', label: 'Clients Scaled', color: '#FF3AF2', icon: '📈' },
  { value: 100, suffix: '+', label: 'Active Projects', color: '#00F5D4', icon: '🎯' },
  { value: 5.0, suffix: '★', label: 'Client Rating', color: '#7B2FFF', icon: '⭐' },
];

const values = [
  {
    n: '01',
    headline: 'High Conversion',
    sub: 'Not Just Traffic',
    color: '#FF3AF2',
    icon: '⚡',
    description: 'Transform digital interactions into qualified opportunities with our conversion-focused funnel architecture and custom copy systems.',
  },
  {
    n: '02',
    headline: 'Real Pipeline',
    sub: 'Not Vanity Metrics',
    color: '#00F5D4',
    icon: '📊',
    description: 'Track genuine revenue growth, capacity utility, and customer acquisition instead of just generic clicks or impressions.',
  },
  {
    n: '03',
    headline: 'Predictable Scale',
    sub: 'Growth Systems',
    color: '#7B2FFF',
    icon: '🚀',
    description: 'Establish a reliable, data-backed and highly scalable booking flow to support your business expansion and operations.',
  },
];

// Stat Card Counter
const StatCounter = ({ stat, isVisible }) => {
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
      className="group relative flex flex-col md:flex-row items-center gap-4 flex-1 p-6 rounded-3xl border border-white/10 bg-[#0E0E1C]/45 backdrop-blur-xl transition-all duration-500 hover:scale-[1.03]"
      style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
    >
      {/* Ambient hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(120px circle at center, ${stat.color}15 0%, transparent 100%)` }}
      />

      {/* Icon block */}
      <div 
        className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0 shadow-lg border"
        style={{
          background: `linear-gradient(135deg, ${stat.color}20, transparent)`,
          borderColor: `${stat.color}35`,
          filter: `drop-shadow(0 0 8px ${stat.color}25)`
        }}
      >
        {stat.icon}
      </div>

      {/* Text block */}
      <div className="relative z-10 flex-1 text-center md:text-left">
        <div
          className="font-heading font-black text-3xl leading-none"
          style={{
            color: stat.color,
            textShadow: `0 0 15px ${stat.color}40`,
          }}
        >
          {formattedValue}{stat.suffix}
        </div>
        <div className="font-heading font-bold text-[10px] uppercase tracking-wider text-white/50 mt-1">
          {stat.label}
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const [sectionRef, setSectionRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(sectionRef);
    return () => observer.disconnect();
  }, [sectionRef]);

  return (
    <section 
      ref={setSectionRef}
      id="about-metrics" 
      className="py-16 sm:py-24 bg-[#050508] relative overflow-hidden border-t border-white/5"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#7B2FFF]/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 space-y-12 sm:space-y-16 md:space-y-20">
        
        {/* Stats Row */}
        <ScrollReveal data-reveal="up" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proofStats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </ScrollReveal>

        {/* Values Block */}
        <div className="space-y-12">
          <ScrollReveal className="text-center max-w-xl mx-auto space-y-3">
            <span className="font-heading font-bold tracking-widest text-[#7B2FFF] uppercase text-xs block">
              Core Principles
            </span>
            <h2 className="font-heading font-black text-white text-3xl sm:text-5xl uppercase tracking-tighter">
              How We Create Impact
            </h2>
            <p className="font-body text-white/55 text-sm leading-relaxed">
              We align our design, code, and ad strategies with a simple focus: generating measurable business leverage.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <ScrollReveal key={value.headline} delay={idx * 150}>
                <div
                  className="group relative p-8 rounded-[2rem] border border-white/5 bg-[#0E0E1C]/30 hover:border-white/15 hover:bg-[#0E0E1C]/50 transition-all duration-500 flex flex-col justify-between h-full relative overflow-hidden"
                  style={{ boxShadow: '0 15px 40px rgba(0,0,0,0.35)' }}
                >
                  {/* Subtle corner light */}
                  <div
                    className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-[50px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                    style={{ background: value.color }}
                  />

                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center font-heading font-black text-base border"
                        style={{
                          backgroundColor: `${value.color}15`,
                          borderColor: `${value.color}30`,
                          color: value.color,
                        }}
                      >
                        {value.icon}
                      </div>
                      <span className="font-heading font-black text-white/10 text-4xl">{value.n}</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-heading font-black text-white text-xl uppercase tracking-tight">
                        {value.headline}
                      </h3>
                      <p className="font-heading font-bold text-[10px] tracking-wider uppercase text-white/45">
                        {value.sub}
                      </p>
                    </div>

                    <p className="font-body text-white/55 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}