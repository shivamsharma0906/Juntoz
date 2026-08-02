/**
 * AboutUs — "Driving Brand Growth Since a Decade"
 * ─────────────────────────────────────────────────
 * Exact layout from unvdigital.com:
 *
 * TOP ROW (2-col):
 *   LEFT  → eyebrow + big heading
 *   RIGHT → description + "Know More" CTA button
 *
 * BOTTOM ROW (2-col):
 *   LEFT  → large rounded-rect image
 *             + small pill image (offset right)
 *             + 4-point star decoration
 *             + spinning "LEARN MORE" badge (bottom-left)
 *   RIGHT → 3 stacked feature cards (icon + title + desc)
 *
 * Brand colors: #00F5D4 · #7B2FFF · #FF3AF2
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

/* ── 4-pointed decorative star ── */
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
    <section ref={sectionRef} className="relative overflow-hidden py-12 sm:py-16">

      {/* ── Ambient glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:'linear-gradient(to right, transparent 5%, rgba(0,245,212,0.2) 35%, rgba(123,47,255,0.2) 65%, transparent 95%)' }}/>
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'1px', background:'linear-gradient(to right, transparent 5%, rgba(255,58,242,0.15) 40%, rgba(0,245,212,0.15) 60%, transparent 95%)' }}/>
        <div style={{ position:'absolute', top:'0%', right:'0%', width:'500px', height:'500px', background:'radial-gradient(ellipse, rgba(123,47,255,0.08) 0%, transparent 65%)', filter:'blur(60px)' }}/>
        <div style={{ position:'absolute', bottom:'0%', left:'0%', width:'400px', height:'400px', background:'radial-gradient(ellipse, rgba(0,245,212,0.06) 0%, transparent 65%)', filter:'blur(60px)' }}/>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

        {/* ══ TOP ROW: heading left | description + CTA right ══ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start mb-8 sm:mb-10">

          {/* LEFT — eyebrow + heading */}
          <div>
            <div className="flex items-center gap-2 mb-5" style={fade(0.05)}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 0l1.5 5.5H15l-4.5 3.3 1.7 5.5L8 11l-4.2 3.3 1.7-5.5L1 5.5h5.5z" fill="#00F5D4"/>
              </svg>
              <span className="font-body font-bold text-[#00F5D4] text-[10px] tracking-[0.28em] uppercase">
                About Us
              </span>
            </div>

            <h2
              className="font-heading text-white leading-tight tracking-tight uppercase"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3rem)', ...fade(0.1) }}
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

          {/* RIGHT — description + CTA */}
          <div style={fade(0.15)}>
            <p
              className="font-body leading-relaxed mb-6"
              style={{
                fontSize: 'clamp(0.82rem, 1.8vw, 1rem)',
                color: 'rgba(255,255,255,0.42)',
                maxWidth: '480px',
              }}
            >
              Building scalable digital brands, driving targeted customer acquisition, engineering high-converting web experiences, and automating revenue pipelines — with an integrated team of growth specialists.
            </p>

            {/* Know More button */}
            <div className="flex items-center gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-black uppercase tracking-widest text-white"
                style={{
                  fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  padding: '0.6rem 1.4rem',
                  borderRadius: '999px',
                  transition: 'background 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
              >
                Know More
              </a>

              {/* Arrow button */}
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110 hover:brightness-110"
                style={{ background: '#00F5D4', boxShadow: '0 0 18px rgba(0,245,212,0.35)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#050510" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ══ BOTTOM ROW: images left | feature cards right ══ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* ── LEFT: two images side-by-side + star + spinning badge ── */}
          <div className="relative pb-10" style={fade(0.2)}>

            {/* Side-by-side image row */}
            <div className="flex items-end gap-3">

              {/* Large rounded-rectangle image — left, taller */}
              <div
                className="relative rounded-[2rem] overflow-hidden flex-1"
                style={{
                  aspectRatio: '3/4',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 30px 70px rgba(0,0,0,0.5)',
                }}
              >
                <ImageReveal
                  src="/about-desk.webp"
                  alt="Juntoz team working on beauty brand strategy"
                  color="#00F5D4"
                  direction="left"
                  imgStyle={{ filter: 'brightness(0.88) contrast(1.06) saturate(0.9)', borderRadius: '2rem' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,245,212,0.05) 0%, transparent 60%)', pointerEvents:'none', zIndex:3 }}/>
                {/* Small dot */}
                <div
                  className="absolute top-4 left-4 w-2 h-2 rounded-full"
                  style={{ background: '#00F5D4', boxShadow: '0 0 12px rgba(0,245,212,0.8)', zIndex:4 }}
                />
              </div>

              {/* Small pill/oval image — right, shorter, aligned to bottom */}
              <div
                className="relative flex-none"
                style={{
                  width: '44%',
                  aspectRatio: '2/3',
                  borderRadius: '999px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                  marginBottom: '10%',
                }}
              >
                <ImageReveal
                  src="/about-laptop.webp"
                  alt="Juntoz consultant presenting growth strategy"
                  color="#7B2FFF"
                  direction="right"
                  delay={0.15}
                  imgStyle={{ filter: 'brightness(0.88) contrast(1.06) saturate(0.9)', objectPosition: 'top' }}
                />
              </div>
            </div>

            {/* 4-point star — floating between images */}
            <div
              className="absolute"
              style={{
                top: '38%',
                left: '50%',
                transform: 'translateX(-50%)',
                animation: 'about-star-spin 8s linear infinite',
                filter: 'drop-shadow(0 0 8px rgba(0,245,212,0.6))',
                zIndex: 10,
              }}
            >
              <StarDeco color="#00F5D4" size={28} />
            </div>

            {/* Spinning circular badge — bottom-left, outside the image area */}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-0 left-0 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 hover:scale-110 transition-transform duration-500 z-20"
              aria-label="Learn more about Juntoz"
            >
              <svg
                style={{ animation: 'about-badge-spin 9s linear infinite', width: '100%', height: '100%', overflow: 'visible' }}
                viewBox="0 0 100 100"
              >
                <path id="aboutCirclePath" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="transparent"/>
                <text style={{ fontSize: '13px', letterSpacing: '0.14em', fontWeight: 800 }}>
                  <textPath href="#aboutCirclePath" startOffset="0%">
                    <tspan fill="#00F5D4">LEARN MORE •</tspan>
                    <tspan fill="#7B2FFF"> EARN MORE •</tspan>
                  </textPath>
                </text>
              </svg>
              {/* Counter-rotating arrow */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ animation: 'about-badge-spin-rev 9s linear infinite' }}
              >
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-full"
                  style={{ background: 'rgba(0,245,212,0.12)', border: '1px solid rgba(0,245,212,0.35)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00F5D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* ── RIGHT: 3 stacked feature cards ── */}
          <div className="flex flex-col gap-4 pt-2 lg:pt-0 mt-10 lg:mt-0">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 sm:p-6 rounded-2xl group"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid rgba(255,255,255,0.07)`,
                  transition: 'background 0.35s ease, border-color 0.35s ease, transform 0.35s ease',
                  ...fade(0.25 + i * 0.12),
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `${s.color}07`;
                  e.currentTarget.style.borderColor = `${s.color}30`;
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                {/* Icon */}
                <div
                  className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl mt-0.5"
                  style={{
                    background: `${s.color}12`,
                    border: `1px solid ${s.color}25`,
                    color: s.color,
                  }}
                >
                  {s.icon}
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="font-heading font-black text-white mb-2 leading-snug"
                    style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="font-body leading-relaxed"
                    style={{ fontSize: 'clamp(0.76rem, 1.6vw, 0.875rem)', color: 'rgba(255,255,255,0.38)' }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Keyframes ── */}
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
