/**
 * BenefitsSection — "Benefits of Choosing Us"
 * ─────────────────────────────────────────────
 * Layout matches the reference screenshot:
 * • Eyebrow label top-left + subtitle top-right
 * • Large mixed-weight heading bottom-left
 * • 4 numbered cards in a row with icon, title, description
 * Juntoz brand colors (cyan / purple / pink)
 */
import { useEffect, useRef, useState } from 'react';

const BENEFITS = [
  {
    num: '01',
    color: '#00F5D4',
    title: 'Custom Approach',
    desc: 'Tailored growth strategies built specifically for beauty businesses — salons, MUAs, skin clinics, and spas across India.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="2"/>
        <line x1="9" y1="12" x2="15" y2="12"/>
        <line x1="9" y1="16" x2="12" y2="16"/>
      </svg>
    ),
  },
  {
    num: '02',
    color: '#7B2FFF',
    title: 'Experienced Team',
    desc: 'A powerhouse of beauty marketing veterans and creative minds driving measurable bookings and real revenue growth.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        <circle cx="19" cy="8" r="2.5"/>
        <path d="M22 20c0-2.5-1.5-4.5-3.5-5.5"/>
      </svg>
    ),
  },
  {
    num: '03',
    color: '#FF3AF2',
    title: 'Data-Driven Growth',
    desc: 'Every decision backed by real numbers — reach, leads, bookings, and ROI tracked weekly so you always know what\'s working.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6"  y1="20" x2="6"  y2="14"/>
        <polyline points="2 20 22 20"/>
      </svg>
    ),
  },
  {
    num: '04',
    color: '#00F5D4',
    title: 'Continuous Support',
    desc: 'Dedicated account managers, weekly check-ins, and real-time reports — we\'re with you every step of the growth journey.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 010 8h-1"/>
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
  },
];

function BenefitCard({ b, index, revealed }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        opacity:    revealed ? 1 : 0,
        transform:  revealed ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.7s ease ${0.15 + index * 0.12}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${0.15 + index * 0.12}s`,
      }}
    >
      <div
        className="relative h-full flex flex-col p-6 sm:p-7 rounded-2xl overflow-hidden"
        style={{
          background: hovered ? `rgba(${b.color === '#00F5D4' ? '0,245,212' : b.color === '#7B2FFF' ? '123,47,255' : '255,58,242'},0.06)` : 'rgba(255,255,255,0.03)',
          border: `1px solid ${hovered ? b.color + '40' : 'rgba(255,255,255,0.07)'}`,
          transition: 'background 0.4s ease, border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: hovered ? `0 24px 60px ${b.color}12` : 'none',
          cursor: 'default',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Ambient top-left glow on hover */}
        <div
          className="absolute -top-8 -left-8 w-32 h-32 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${b.color}20 0%, transparent 70%)`,
            filter: 'blur(20px)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />

        {/* Number badge */}
        <span
          className="font-heading font-black mb-6 block"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            color: hovered ? b.color : 'rgba(255,255,255,0.2)',
            transition: 'color 0.35s ease',
            letterSpacing: '0.05em',
          }}
        >
          {b.num}
        </span>

        {/* Icon */}
        <div
          className="mb-6"
          style={{
            color: hovered ? b.color : 'rgba(255,255,255,0.3)',
            transition: 'color 0.35s ease',
          }}
        >
          {b.icon}
        </div>

        {/* Title */}
        <h3
          className="font-heading font-black text-white mb-3 leading-tight"
          style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
            opacity: hovered ? 1 : 0.85,
            transition: 'opacity 0.35s ease',
          }}
        >
          {b.title}
        </h3>

        {/* Description */}
        <p
          className="font-body leading-relaxed mt-auto"
          style={{
            fontSize: 'clamp(0.75rem, 1.6vw, 0.875rem)',
            color: hovered ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.35)',
            transition: 'color 0.35s ease',
          }}
        >
          {b.desc}
        </p>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-6 right-6 h-px"
          style={{
            background: `linear-gradient(to right, transparent, ${b.color}60, transparent)`,
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />
      </div>
    </div>
  );
}

export default function BenefitsSection() {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setRevealed(true); obs.disconnect(); }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const headReveal = (delay = 0) => ({
    opacity:    revealed ? 1 : 0,
    transform:  revealed ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-10 sm:py-14">

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, transparent 0%, rgba(5,5,20,0.4) 40%, rgba(5,5,20,0.4) 60%, transparent 100%)' }} />
        <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:'linear-gradient(to right, transparent 5%, rgba(0,245,212,0.2) 35%, rgba(123,47,255,0.2) 65%, transparent 95%)' }} />
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'1px', background:'linear-gradient(to right, transparent 5%, rgba(255,58,242,0.15) 40%, rgba(0,245,212,0.15) 60%, transparent 95%)' }} />
        <div style={{ position:'absolute', top:'20%', right:0, width:'350px', height:'350px', background:'radial-gradient(ellipse, rgba(123,47,255,0.08) 0%, transparent 65%)', filter:'blur(50px)' }} />
        <div style={{ position:'absolute', bottom:'20%', left:0, width:'300px', height:'300px', background:'radial-gradient(ellipse, rgba(0,245,212,0.06) 0%, transparent 65%)', filter:'blur(50px)' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

        {/* ── Header row: eyebrow left | subtitle right ── */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-8 mb-5 sm:mb-6" style={headReveal(0.05)}>

          {/* Eyebrow — top left */}
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 0l1.5 5.5H15l-4.5 3.3 1.7 5.5L8 11l-4.2 3.3 1.7-5.5L1 5.5h5.5z" fill="#00F5D4"/>
            </svg>
            <span className="font-body font-bold text-[#00F5D4] text-[10px] tracking-[0.28em] uppercase">
              Core Advantages
            </span>
          </div>

          {/* Subtitle — top right */}
          <p
            className="font-body leading-relaxed sm:text-right sm:max-w-xs"
            style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.9rem)', color: 'rgba(255,255,255,0.40)' }}
          >
            Unlock powerful, results-driven solutions with expert strategy, innovation, and dedicated support that grows your beauty brand.
          </p>
        </div>

        {/* ── Main heading — left-aligned, mixed weights ── */}
        <div className="mb-8 sm:mb-10" style={headReveal(0.12)}>
          <h2
            className="font-heading leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}
          >
            <span
              className="font-black"
              style={{
                background: 'linear-gradient(120deg, #00F5D4 0%, #7B2FFF 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Benefits
            </span>
            <span className="font-semibold text-white"> of Choosing Us</span>
          </h2>
        </div>

        {/* ── 4 benefit cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {BENEFITS.map((b, i) => (
            <BenefitCard key={i} b={b} index={i} revealed={revealed} />
          ))}
        </div>

      </div>
    </section>
  );
}
