import { useRef, useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal.jsx';
import useCountUp from '../hooks/useCountUp.js';

const STATS = [
  {
    num: 5,
    suffix: '+',
    label: 'Years Experience',
    sublabel: 'Founded in 2021 with corporate tech & media background',
    isVerified: true,
  },
  {
    num: 200,
    suffix: '+',
    label: 'Client Projects Scaled',
    sublabel: 'Across digital strategy, performance marketing, local SEO and creative shoots',
    isVerified: false,
  },
  {
    num: 5.0,
    suffix: ' ★',
    label: 'Google Client Rating',
    sublabel: 'Verified 5-star Google review score in Mumbai, MH',
    isVerified: true,
    isDecimal: true,
  },
  {
    num: 3.1,
    suffix: 'x',
    label: 'Avg. Pipeline Growth',
    sublabel: 'Average inbound inquiry expansion across deployed full-funnel architectures',
    isVerified: false,
    isDecimal: true,
  }
];

function StatItem({ stat, index, started }) {
  const { value } = useCountUp(stat.num, { duration: 2000, started, delay: index * 100 });
  const display = stat.isDecimal ? value.toFixed(1) : Math.round(value);

  return (
    <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl bg-[#1A1A1A] border border-white/10 relative group hover:border-[#5D2E85]/40 transition-all duration-300">
      
      {/* Giant Stat Number */}
      <div
        className="font-heading font-black tracking-tight leading-none mb-3 text-white flex items-baseline justify-center"
        style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)' }}
      >
        <span>{display}</span>
        <span className="text-[#5D2E85] ml-0.5">{stat.suffix}</span>
      </div>

      {/* Label */}
      <h3 className="font-heading font-bold text-white text-base sm:text-lg uppercase tracking-wider mb-2">
        {stat.label}
      </h3>

      {/* Sublabel / Credibility Note */}
      <p className="font-body text-white/65 text-xs leading-relaxed max-w-xs">
        {stat.sublabel}
      </p>

    </div>
  );
}

export default function NumbersSection() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="stats-band" className="py-24 md:py-32 bg-[#111111] border-y border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
        
        {/* Eyebrow & Heading */}
        <ScrollReveal data-reveal="up" className="text-center mb-16 max-w-2xl mx-auto">

          <h2 className="font-heading font-black text-white text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight">
            Data-Driven Results Built On Real Experience
          </h2>
        </ScrollReveal>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} data-reveal="up" delay={i * 100}>
              <StatItem stat={stat} index={i} started={started} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
