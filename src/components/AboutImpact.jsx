/**
 * AboutImpact — "Your Brand Matters, Make Real Impact with Juntoz"
 * ─────────────────────────────────────────────────────────────────
 * Exact layout from reference screenshot:
 * • Left: eyebrow + large heading + description + 2 bullet points
 * • Right: image with spinning circular badge overlay
 * • Bottom: 3 feature cards spanning full width
 * Dark-mode with Juntoz brand colors.
 */
import { useEffect, useRef, useState } from 'react';
import ImageReveal from './ImageReveal.jsx';

const BULLETS = [
  { icon: '◎', text: 'Beauty-First Strategy' },
  { icon: '◎', text: 'Transparent Reporting' },
];

const FEATURES = [
  {
    color: '#00F5D4',
    title: 'Work with Real Beauty Brands',
    desc: '200+ salons, MUAs & clinics scaled across India',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    color: '#7B2FFF',
    title: 'Performance-Based Results',
    desc: 'Every rupee spent is tracked and optimised for ROI',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    color: '#FF3AF2',
    title: 'Full-Funnel Growth System',
    desc: 'Content → Ads → WhatsApp → Bookings, end-to-end',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },
];

export default function AboutImpact() {
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
    transform:  revealed ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-10 sm:py-14"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(5,5,18,0.5) 40%, rgba(5,5,18,0.5) 60%, transparent 100%)' }}
    >
      {/* ── ambient glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:'linear-gradient(to right, transparent 5%, rgba(0,245,212,0.2) 35%, rgba(123,47,255,0.2) 65%, transparent 95%)' }} />
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'1px', background:'linear-gradient(to right, transparent 5%, rgba(255,58,242,0.15) 40%, rgba(0,245,212,0.15) 60%, transparent 95%)' }} />
        <div style={{ position:'absolute', top:'20%', left:'-5%', width:'400px', height:'400px', background:'radial-gradient(ellipse, rgba(0,245,212,0.07) 0%, transparent 65%)', filter:'blur(60px)' }} />
        <div style={{ position:'absolute', bottom:'10%', right:'-5%', width:'350px', height:'350px', background:'radial-gradient(ellipse, rgba(123,47,255,0.08) 0%, transparent 65%)', filter:'blur(60px)' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

        {/* ══ TOP: Two-column — text left, image right ══ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12 sm:mb-16">

          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-5 sm:mb-6" style={fade(0.05)}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 0l1.5 5.5H15l-4.5 3.3 1.7 5.5L8 11l-4.2 3.3 1.7-5.5L1 5.5h5.5z" fill="#00F5D4"/>
              </svg>
              <span className="font-body font-bold text-[#00F5D4] text-[10px] tracking-[0.28em] uppercase">
                Our Approach
              </span>
            </div>

            {/* Main heading */}
            <h2
              className="font-heading text-white leading-tight tracking-tight mb-5 sm:mb-6"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)', ...fade(0.12) }}
            >
              Your Brand Matters,<br />
              Make Real Impact{' '}
              <span
                className="font-black"
                style={{
                  background: 'linear-gradient(120deg, #00F5D4 0%, #7B2FFF 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                with Juntoz
              </span>
            </h2>

            {/* Description */}
            <p
              className="font-body leading-relaxed mb-7 sm:mb-8"
              style={{
                fontSize: 'clamp(0.82rem, 1.8vw, 1rem)',
                color: 'rgba(255,255,255,0.45)',
                maxWidth: '480px',
                ...fade(0.22),
              }}
            >
              We have been empowering beauty businesses across India to grow beyond word-of-mouth.
              With Juntoz, break the plateau, attract premium clients, and build a system that fills
              your calendar — every single month. No guesswork. Just real, measurable bookings.
            </p>

            {/* Bullet points */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8" style={fade(0.32)}>
              {BULLETS.map((b, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span style={{ color: '#00F5D4', fontSize: '18px' }}>{b.icon}</span>
                  <span
                    className="font-body font-semibold"
                    style={{ fontSize: 'clamp(0.78rem, 1.8vw, 0.92rem)', color: 'rgba(255,255,255,0.65)' }}
                  >
                    {b.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — image + spinning badge ── */}
          <div className="relative" style={fade(0.18)}>
            {/* Image */}
            <div
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
              style={{
                aspectRatio: '4/3',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
              }}
            >
              <ImageReveal
                src="/team-meeting.webp"
                alt="Juntoz team reviewing beauty brand growth strategy"
                color="#7B2FFF"
                direction="left"
                imgStyle={{ filter: 'brightness(0.92) contrast(1.05) saturate(0.95)' }}
              />
              {/* Overlay gradient to blend with dark bg */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(0,245,212,0.05) 0%, transparent 50%, rgba(123,47,255,0.08) 100%)' }}
              />
            </div>

            {/* Spinning circular badge — top-right of image */}
            <a
              href="https://wa.me/919004001800"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -top-5 right-6 sm:right-10 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 hover:scale-110 transition-transform duration-500 z-20"
              aria-label="Beauty growth agency since 2022"
            >
              <svg
                style={{ animation: 'impact-badge-spin 10s linear infinite', width: '100%', height: '100%', overflow: 'visible' }}
                viewBox="0 0 100 100"
              >
                {/* Circle path for text */}
                <path id="impactCirclePath" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="transparent" />
                <text fill="#00F5D4" style={{ fontSize: '13px', letterSpacing: '0.14em', fontWeight: 800, textTransform: 'uppercase' }}>
                  <textPath href="#impactCirclePath" startOffset="0%">
                    BEAUTY AGENCY • SINCE 2022 •
                  </textPath>
                </text>
              </svg>
              {/* Centre arrow — counter-rotates to stay fixed */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ animation: 'impact-badge-spin-rev 10s linear infinite' }}
              >
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-full"
                  style={{ background: 'rgba(0,245,212,0.15)', border: '1px solid rgba(0,245,212,0.35)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00F5D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* ══ BOTTOM: 3 Feature cards ══ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl group"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid rgba(255,255,255,0.07)`,
                transition: 'background 0.35s ease, border-color 0.35s ease, transform 0.35s ease',
                ...fade(0.38 + i * 0.1),
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${f.color}08`;
                e.currentTarget.style.borderColor = `${f.color}35`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Icon bubble */}
              <div
                className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl"
                style={{
                  background: `${f.color}12`,
                  border: `1px solid ${f.color}25`,
                  color: f.color,
                  transition: 'background 0.35s ease',
                }}
              >
                {f.icon}
              </div>
              {/* Text */}
              <div>
                <p
                  className="font-heading font-black text-white leading-snug mb-1"
                  style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}
                >
                  {f.title}
                </p>
                <p
                  className="font-body leading-snug"
                  style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)', color: 'rgba(255,255,255,0.38)' }}
                >
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Spin keyframes ── */}
      <style>{`
        @keyframes impact-badge-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes impact-badge-spin-rev {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
      `}</style>
    </section>
  );
}
