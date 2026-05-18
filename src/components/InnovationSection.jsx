/**
 * InnovationSection — "Innovation & Growth"
 * ──────────────────────────────────────────
 * Exact layout from reference screenshot:
 *
 * ┌─────────────────────────┬──────────────────┐
 * │  eyebrow                │                  │
 * │  BIG HEADING            │   [tall image]   │
 * │  description            │    + spinning    │
 * │  ◎ bullet  ◎ bullet     │      badge       │
 * ├──────────────────┐      │                  │
 * │  [feature cards  │      │                  │
 * │   rounded box]   │      │                  │
 * └──────────────────┴──────┴──────────────────┘
 *
 * Brand colors: cyan #00F5D4 · purple #7B2FFF · pink #FF3AF2
 */
import { useEffect, useRef, useState } from 'react';
import ImageReveal from './ImageReveal.jsx';

const BULLETS = [
  { text: 'Result-Driven Campaigns' },
  { text: 'Innovation for Growth' },
];

const FEATURES = [
  {
    color: '#00F5D4',
    title: 'Stronger Brand Growth',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    color: '#7B2FFF',
    title: 'Optimised Performance',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    color: '#FF3AF2',
    title: 'Future-Ready Business',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
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
    transform:  revealed ? 'translateY(0)' : 'translateY(26px)',
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-10 sm:py-14">

      {/* ── Ambient glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:'linear-gradient(to right, transparent 5%, rgba(255,58,242,0.2) 35%, rgba(123,47,255,0.2) 65%, transparent 95%)' }} />
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'1px', background:'linear-gradient(to right, transparent 5%, rgba(0,245,212,0.18) 40%, rgba(123,47,255,0.18) 60%, transparent 95%)' }} />
        <div style={{ position:'absolute', top:'10%', left:'-5%', width:'450px', height:'450px', background:'radial-gradient(ellipse, rgba(123,47,255,0.08) 0%, transparent 65%)', filter:'blur(60px)' }} />
        <div style={{ position:'absolute', bottom:'5%', right:'-5%', width:'350px', height:'350px', background:'radial-gradient(ellipse, rgba(0,245,212,0.06) 0%, transparent 65%)', filter:'blur(60px)' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

        {/* ══ Main grid: [text+cards LEFT] [image RIGHT] ══ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10 items-stretch">

          {/* ── LEFT: text block + feature card box ── */}
          <div className="flex flex-col justify-between gap-8 lg:gap-10">

            {/* Text block */}
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-5" style={fade(0.05)}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0l1.5 5.5H15l-4.5 3.3 1.7 5.5L8 11l-4.2 3.3 1.7-5.5L1 5.5h5.5z" fill="#00F5D4"/>
                </svg>
                <span className="font-body font-bold text-[#00F5D4] text-[10px] tracking-[0.28em] uppercase">
                  Innovation &amp; Growth
                </span>
              </div>

              {/* Heading */}
              <h2
                className="font-heading font-black text-white leading-tight tracking-tight mb-4 sm:mb-5"
                style={{ fontSize: 'clamp(2.2rem, 6vw, 4.2rem)', ...fade(0.1) }}
              >
                <span style={{
                  background: 'linear-gradient(120deg, #00F5D4 0%, #7B2FFF 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Juntoz</span>{' '}
                Digital Lab
              </h2>

              {/* Description */}
              <p
                className="font-body leading-relaxed mb-6 sm:mb-8"
                style={{
                  fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)',
                  color: 'rgba(255,255,255,0.42)',
                  maxWidth: '420px',
                  ...fade(0.18),
                }}
              >
                At Juntoz, we constantly experiment, innovate, and learn to discover new ways to grow beauty brands — ensuring yours stays ahead of the curve.
              </p>

              {/* Bullets */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8" style={fade(0.26)}>
                {BULLETS.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span style={{ color: '#00F5D4', fontSize: '18px', lineHeight: 1 }}>◎</span>
                    <span
                      className="font-body font-semibold"
                      style={{ fontSize: 'clamp(0.78rem, 1.8vw, 0.9rem)', color: 'rgba(255,255,255,0.6)' }}
                    >
                      {b.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature cards — rounded box with gradient border */}
            <div
              className="relative rounded-2xl sm:rounded-3xl p-1"
              style={{
                background: 'linear-gradient(135deg, rgba(0,245,212,0.35), rgba(123,47,255,0.25), rgba(255,58,242,0.20))',
                ...fade(0.36),
              }}
            >
              <div
                className="rounded-[calc(1.5rem-4px)] sm:rounded-[calc(1.875rem-4px)] px-4 sm:px-6 py-5 sm:py-6"
                style={{ background: '#08080f' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4">
                  {FEATURES.map((f, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      {/* Icon bubble */}
                      <div
                        className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl"
                        style={{
                          background: `${f.color}15`,
                          border: `1px solid ${f.color}30`,
                          color: f.color,
                          transition: 'background 0.3s ease',
                        }}
                      >
                        {f.icon}
                      </div>
                      {/* Title */}
                      <p
                        className="font-heading font-black text-white leading-snug mt-1"
                        style={{ fontSize: 'clamp(0.82rem, 1.8vw, 0.95rem)' }}
                      >
                        {f.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ── RIGHT: Full-height image + spinning badge ── */}
          <div className="relative mt-10 lg:mt-0" style={fade(0.15)}>
            {/* Image container — tall, spans full column height */}
            <div
              className="relative w-full h-72 sm:h-96 lg:h-full rounded-2xl sm:rounded-3xl overflow-hidden"
              style={{
                minHeight: '420px',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
              }}
            >
              <ImageReveal
                src="/innovation-team.png"
                alt="Juntoz team innovating beauty brand growth strategy"
                color="#FF3AF2"
                direction="right"
                imgStyle={{ filter: 'brightness(0.90) contrast(1.05) saturate(0.9)' }}
              />
              {/* Colour overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(123,47,255,0.06) 0%, transparent 50%, rgba(0,245,212,0.05) 100%)' }}
              />
            </div>

            {/* Spinning circular badge — top-centre of image */}
            <a
              href="https://wa.me/919004001800"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-1/2 -translate-x-1/2 -top-6 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 hover:scale-110 transition-transform duration-500 z-20"
              aria-label="Juntoz Digital Lab - Innovation & Growth"
            >
              {/* Spinning text ring */}
              <svg
                style={{ animation: 'innov-badge-spin 9s linear infinite', width: '100%', height: '100%', overflow: 'visible' }}
                viewBox="0 0 100 100"
              >
                <path id="innovCirclePath" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="transparent" />
                <text style={{ fontSize: '12.5px', letterSpacing: '0.13em', fontWeight: 800 }}>
                  <textPath href="#innovCirclePath" startOffset="0%">
                    <tspan fill="#00F5D4">UNV DIGITAL LAB •</tspan>
                    <tspan fill="#7B2FFF"> INNOVATION •</tspan>
                  </textPath>
                </text>
              </svg>

              {/* Centre icon — counter-rotates to stay fixed */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ animation: 'innov-badge-spin-rev 9s linear infinite' }}
              >
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-full"
                  style={{ background: 'rgba(0,245,212,0.15)', border: '1px solid rgba(0,245,212,0.4)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00F5D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes innov-badge-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes innov-badge-spin-rev {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
      `}</style>
    </section>
  );
}
