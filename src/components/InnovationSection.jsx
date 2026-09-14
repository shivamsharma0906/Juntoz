import { useEffect, useRef, useState } from 'react';

const BULLETS = [
  { text: 'Result-Driven Systems' },
  { text: 'Full-Funnel Integration' },
];

const FEATURES = [
  {
    title: 'Brand Positioning',
    desc: 'Distinct market authority that commands premium pricing.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    title: 'Performance Acquisition',
    desc: 'High-intent paid advertising on Meta and Google.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    title: 'Local Search Scale',
    desc: 'Google Business Profile dominance that captures nearby searchers.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
];

export default function InnovationSection() {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const fade = (delay = 0) => ({
    opacity:    revealed ? 1 : 0,
    transform:  revealed ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16 sm:py-24 bg-[#F7F6F2]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DEDED7] bg-white shadow-subtle mb-5" style={fade(0.05)}>
              <span className="w-2 h-2 rounded-full bg-[#E84A2A]" />
              <span className="font-body font-bold text-[#5F5F5A] text-[11px] tracking-wider uppercase">
                Continuous Growth Lab
              </span>
            </div>

            <h2
              className="font-heading font-black text-[#111111] leading-tight tracking-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', ...fade(0.1) }}
            >
              Engineered For <br />
              <span className="text-[#E84A2A]">Measurable Scale.</span>
            </h2>

            <p
              className="font-body text-[#5F5F5A] text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
              style={fade(0.18)}
            >
              At Juntoz, we continuously refine campaign architectures, analyze local search data, and test conversion frameworks to keep your business ahead of market competition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8" style={fade(0.26)}>
              {BULLETS.map((b, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="text-[#E84A2A] font-bold text-base">✓</span>
                  <span className="font-body font-semibold text-sm text-[#111111]">
                    {b.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" style={fade(0.32)}>
              {FEATURES.map((f, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-[#DEDED7] shadow-subtle">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#FBE9E4] text-[#E84A2A] mb-3">
                    {f.icon}
                  </div>
                  <h3 className="font-heading font-black text-sm text-[#111111] mb-1">{f.title}</h3>
                  <p className="font-body text-xs text-[#5F5F5A] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Card */}
          <div className="relative" style={fade(0.15)}>
            <div className="relative w-full rounded-3xl overflow-hidden border border-[#DEDED7] shadow-card bg-white p-3">
              <img
                src="/innovation-team.webp"
                alt="Juntoz growth strategy team"
                className="w-full h-80 sm:h-[450px] object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
