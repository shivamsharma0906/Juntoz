import { useState, useRef } from 'react';

const services = [
  {
    num: '01',
    icon: '🎯',
    title: 'Lead Generation Ads',
    subtitle: 'Meta & Google',
    desc: 'Laser-targeted campaigns designed to put your business in front of brides and beauty lovers exactly when they are searching.',
    points: ['Facebook & Instagram campaigns', 'Google Search & Display', 'Lead capture funnels', 'Audience targeting', 'Performance insights', 'Monthly reporting'],
    color: '#FF3AF2',
  },
  {
    num: '02',
    icon: '🚀',
    title: 'Instagram Growth',
    subtitle: 'Content & Boosting',
    desc: 'Content strategies to turn your profile into a high-converting client magnet. We build your authority, not just your follower count.',
    points: ['Instagram page handling', 'Content calendar & ideas', 'Reels editing & upload', 'Stories & highlights', 'Grid layout design', 'Organic growth'],
    color: '#00F5D4',
  },
  {
    num: '03',
    icon: '📍',
    title: 'SEO & Local Visibility',
    subtitle: 'Rank Where It Counts',
    desc: 'Rank higher on Google when locals search for "makeup artists near me". Dominate local search and get found first.',
    points: ['Google Business Profile', 'Local keyword optimisation', 'Review generation', 'On-page SEO', 'Monthly ranking reports', 'Map pack dominance'],
    color: '#7B2FFF',
  },
];

export default function Services() {
  const [flipped, setFlipped] = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const touchStart = useRef(0);

  const handleFlip = (idx) => setFlipped(prev => (prev === idx ? null : idx));
  const handleTouchStart = (x) => { touchStart.current = x; };
  const handleTouchEnd = (x) => {
    const diff = touchStart.current - x;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeIdx < services.length - 1) { setActiveIdx(p => p + 1); setFlipped(null); }
      else if (diff < 0 && activeIdx > 0) { setActiveIdx(p => p - 1); setFlipped(null); }
    }
  };

  return (
    <section id="services" className="relative py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-accent-5/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-accent-2 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            What We Do
          </p>
          <h2 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl uppercase leading-none tracking-tighter">
            Services Built to <span className="text-accent-2 text-glow-cyan">Convert</span>
          </h2>
          <p className="font-body text-white/50 text-lg max-w-lg mx-auto mt-5 leading-relaxed">
            Every service is a piece of a proven system. Together, they fill your calendar.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="relative group"
              style={{ perspective: '1000px', height: '420px' }}
            >
              <div
                className="w-full h-full transition-all duration-700"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flipped === i ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 glass-card p-7 flex flex-col group-hover:border-white/15 transition-all duration-300"
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-3xl">{s.icon}</div>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-heading font-black text-xs text-background"
                      style={{ backgroundColor: s.color }}
                    >
                      {s.num}
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-white text-xl uppercase leading-tight mb-1">
                    {s.title}
                  </h3>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: s.color }}>
                    {s.subtitle}
                  </p>
                  <p className="font-body text-white/55 text-sm leading-relaxed flex-1">{s.desc}</p>

                  <button
                    onClick={() => handleFlip(i)}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-body font-semibold uppercase tracking-widest transition-all duration-200"
                    style={{ color: s.color }}
                  >
                    What's included →
                  </button>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 glass-card p-7 flex flex-col"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    borderColor: `${s.color}30`,
                  }}
                >
                  <h3 className="font-heading font-black text-sm uppercase tracking-widest mb-5" style={{ color: s.color }}>
                    What's Included
                  </h3>
                  <ul className="space-y-2.5 flex-1 overflow-y-auto custom-scrollbar pr-1">
                    {s.points.map((pt, j) => (
                      <li key={j} className="flex items-center gap-3 font-body text-white/70 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleFlip(i)}
                    className="mt-5 text-xs font-body font-semibold uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors"
                  >
                    ← Back
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile slider */}
        <div className="md:hidden overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing select-none"
            style={{ transform: `translateX(calc(-${activeIdx * 100}% - ${activeIdx * 20}px))` }}
            onTouchStart={(e) => handleTouchStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleTouchEnd(e.changedTouches[0].clientX)}
            onMouseDown={(e) => handleTouchStart(e.clientX)}
            onMouseUp={(e) => handleTouchEnd(e.clientX)}
          >
            {services.map((s, i) => (
              <div key={i} className="min-w-full glass-card p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{s.icon}</span>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center font-heading font-black text-[10px] text-background" style={{ backgroundColor: s.color }}>{s.num}</div>
                </div>
                <div>
                  <h3 className="font-heading font-black text-white text-lg uppercase">{s.title}</h3>
                  <p className="font-body text-xs font-semibold uppercase tracking-widest mt-0.5" style={{ color: s.color }}>{s.subtitle}</p>
                </div>
                <p className="font-body text-white/55 text-sm leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-3 font-body text-white/60 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {services.map((_, i) => (
              <button key={i} onClick={() => setActiveIdx(i)} className={`rounded-full transition-all duration-300 ${activeIdx === i ? 'w-8 h-2 bg-accent-2' : 'w-2 h-2 bg-white/20'}`} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
