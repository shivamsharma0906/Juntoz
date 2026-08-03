/**
 * AboutUs — "Driving Brand Growth Since a Decade"
 * ─────────────────────────────────────────────────
 * Redesigned for desktop:
 * - Geometric overlapping rounded-rectangle images replacing inconsistent oval/capsules.
 * - Clean layout with hover scales, premium shadows, and glow highlights.
 * - Neatly positioned spinning badge to avoid overlap.
 */
import { useEffect, useRef, useState } from 'react';
import ImageReveal from './ImageReveal.jsx';

const WA = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%27d%20like%20to%20know%20more.';

const SERVICES = [
  {
    color: '#00F5D4',
    title: 'Building Scalable Digital Brands',
    desc: 'We build magnetic brand presences across channels, optimizing for maximum authority, reach, and long-term customer loyalty — brand success guaranteed.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <path d="M14 3h7v4h-7zM14 10h7v7h-7z"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    color: '#7B2FFF',
    title: 'Custom Performance Marketing',
    desc: 'Data-driven advertising campaigns that align with your business goals — precision targeted Meta & Google ads, funnel architecture, and ROAS scaling.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    color: '#FF3AF2',
    title: 'Automated Revenue Systems',
    desc: 'Smart WhatsApp automation, CRM follow-up sequences, and lead nurturing pipelines that convert prospects into high-LTV customers while you sleep.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
];

const StarDeco = ({ color = '#00F5D4', size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill={color}>
    <path d="M20 0 C20 0 22 15 20 20 C20 20 35 18 40 20 C40 20 22 35 20 40 C20 40 18 25 20 20 C20 20 5 22 0 20 C0 20 15 18 20 20 C20 20 18 5 20 0Z"/>
  </svg>
);

export default function AboutUs() {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); obs.disconnect(); } },
      { threshold: 0.08 }
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
    <section ref={sectionRef} className="relative overflow-hidden pb-16 pt-8 md:pb-24 md:pt-12 bg-background">
      {/* ── Ambient Glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:'linear-gradient(to right, transparent 5%, rgba(0,245,212,0.15) 35%, rgba(123,47,255,0.15) 65%, transparent 95%)' }}/>
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'1px', background:'linear-gradient(to right, transparent 5%, rgba(255,58,242,0.1) 40%, rgba(0,245,212,0.1) 60%, transparent 95%)' }}/>
        <div style={{ position:'absolute', top:'10%', right:'5%', width:'600px', height:'600px', background:'radial-gradient(ellipse, rgba(123,47,255,0.06) 0%, transparent 70%)', filter:'blur(80px)' }}/>
        <div style={{ position:'absolute', bottom:'10%', left:'5%', width:'500px', height:'500px', background:'radial-gradient(ellipse, rgba(0,245,212,0.05) 0%, transparent 70%)', filter:'blur(80px)' }}/>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* ══ TOP ROW: Heading Left | Description + CTA Right ══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 md:mb-20">
          {/* LEFT — Eyebrow + Heading */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-5" style={fade(0.05)}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 0l1.5 5.5H15l-4.5 3.3 1.7 5.5L8 11l-4.2 3.3 1.7-5.5L1 5.5h5.5z" fill="#00F5D4"/>
              </svg>
              <span className="font-body font-bold text-[#00F5D4] text-[10px] tracking-[0.28em] uppercase">
                About Us
              </span>
            </div>

            <h2
              className="font-heading text-white leading-[1.05] tracking-tighter uppercase"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)', ...fade(0.1) }}
            >
              Driving{' '}
              <span
                className="font-black"
                style={{
                  background: 'linear-gradient(120deg, #00F5D4 0%, #7B2FFF 65%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Digital Brand Growth
              </span>
              <br />
              Since 2022
            </h2>
          </div>

          {/* RIGHT — Description + CTA */}
          <div className="lg:col-span-5 lg:pt-8" style={fade(0.15)}>
            <p className="font-body text-white/50 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              Building scalable digital brands, driving targeted customer acquisition, engineering high-converting web experiences, and automating revenue pipelines — with an integrated team of growth specialists.
            </p>

            <div className="flex items-center gap-4">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-black uppercase tracking-widest text-white transition-colors duration-300"
                style={{
                  fontSize: '0.75rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '0.75rem 1.6rem',
                  borderRadius: '999px',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >
                Know More
              </a>

              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 hover:scale-110 hover:brightness-110 shrink-0"
                style={{ background: '#00F5D4', boxShadow: '0 0 20px rgba(0,245,212,0.4)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#050510" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ══ BOTTOM ROW: Overlapping Premium Images Left | Feature Cards Right ══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Overlapping geometric frames */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center min-h-[350px] sm:min-h-[480px]" style={fade(0.2)}>
            {/* Background glowing frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00F5D4]/10 to-[#7B2FFF]/10 rounded-[2.5rem] blur-2xl opacity-50 z-0 pointer-events-none" />

            {/* Main background image */}
            <div
              className="relative w-[72%] aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group/img1"
              style={{ marginRight: '18%', transform: 'translateY(-15px)' }}
            >
              <ImageReveal
                src="/about-desk.webp"
                alt="Juntoz team working on beauty brand strategy"
                color="#00F5D4"
                direction="left"
                imgStyle={{ filter: 'brightness(0.9) contrast(1.05)', borderRadius: '2rem' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
              <div className="absolute top-5 left-5 w-2.5 h-2.5 rounded-full bg-[#00F5D4] shadow-[0_0_12px_#00F5D4]" />
            </div>

            {/* Overlapping foreground image */}
            <div
              className="absolute bottom-[-5px] right-[2%] w-[48%] aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/12 shadow-[0_30px_70px_-10px_rgba(0,0,0,0.85)] z-20 transition-transform duration-500 hover:scale-[1.04]"
            >
              <ImageReveal
                src="/about-laptop.webp"
                alt="Juntoz consultant presenting growth strategy"
                color="#7B2FFF"
                direction="right"
                delay={0.2}
                imgStyle={{ filter: 'brightness(0.92) contrast(1.05)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
              <div className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full bg-[#7B2FFF] shadow-[0_0_12px_#7B2FFF]" />
            </div>

            {/* Floating 4-pointed star */}
            <div
              className="absolute z-30"
              style={{
                top: '25%',
                right: '42%',
                animation: 'about-star-spin 10s linear infinite',
                filter: 'drop-shadow(0 0 10px rgba(0,245,212,0.7))',
              }}
            >
              <StarDeco color="#00F5D4" size={32} />
            </div>

            {/* Spinning badge at bottom-left */}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-[-15px] left-[-15px] flex items-center justify-center w-24 h-24 hover:scale-110 transition-transform duration-500 z-30"
              aria-label="Learn more about Juntoz"
            >
              <svg
                className="w-full h-full overflow-visible"
                style={{ animation: 'about-badge-spin 9s linear infinite' }}
                viewBox="0 0 100 100"
              >
                <path id="aboutCirclePath2" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="transparent"/>
                <text style={{ fontSize: '12px', letterSpacing: '0.15em', fontWeight: 900 }}>
                  <textPath href="#aboutCirclePath2" startOffset="0%">
                    <tspan fill="#00F5D4">LEARN MORE • </tspan>
                    <tspan fill="#FF3AF2">EARN MORE • </tspan>
                  </textPath>
                </text>
              </svg>
              
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ animation: 'about-badge-spin-rev 9s linear infinite' }}
              >
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-[#05050C]/90 border border-[#00F5D4]/30"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00F5D4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* RIGHT: Stacked feature cards */}
          <div className="lg:col-span-6 flex flex-col gap-6 w-full">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300"
                style={{
                  ...fade(0.25 + i * 0.1),
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${s.color}35`;
                  e.currentTarget.style.boxShadow = `0 10px 30px -10px ${s.color}15`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Icon */}
                <div
                  className="shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl"
                  style={{
                    background: `${s.color}15`,
                    border: `1px solid ${s.color}30`,
                    color: s.color,
                  }}
                >
                  {s.icon}
                </div>

                {/* Text */}
                <div className="space-y-1">
                  <h3 className="font-heading font-black text-white text-lg uppercase tracking-tight">
                    {s.title}
                  </h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Custom Animations ── */}
      <style>{`
        @keyframes about-badge-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes about-badge-spin-rev {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes about-star-spin {
          0%   { transform: rotate(0deg) scale(1); }
          50%  { transform: rotate(180deg) scale(1.15); }
          100% { transform: rotate(360deg) scale(1); }
        }
      `}</style>
    </section>
  );
}
