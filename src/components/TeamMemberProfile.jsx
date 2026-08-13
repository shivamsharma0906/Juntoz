import { useRef, useEffect } from 'react';
import ScrollReveal from './ScrollReveal.jsx';
import useCountUp from '../hooks/useCountUp.js';

const Zap = ({ size = 14, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const Rocket = ({ size = 14, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2s-6 1.91-8.05 4A22 22 0 0 1 10 8z" />
    <path d="M9 15c-1.5 1.5-2.5 3.5-2.5 3.5s2-1 3.5-2.5z" />
    <path d="M15 9c1.5-1.5 2.5-3.5 2.5-3.5s-2 1-3.5 2.5z" />
    <path d="m9 9-3 3" />
    <path d="m15 15-3 3" />
  </svg>
);

/* ── tiny stat badge ── */
function StatBadge({ value, label, color, delay, position }) {
  const target = parseInt(value, 10) || 0;
  const { value: count, ref } = useCountUp(target, { duration: 1400, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`absolute ${position} z-20 animate-float-badge hidden md:block`}
      style={{ animationDelay: `${delay}s`, animationDuration: `${3.5 + delay * 0.4}s` }}
    >
      <div
        className="relative px-4 py-3 rounded-2xl backdrop-blur-xl border shadow-2xl overflow-hidden"
        style={{
          background: 'rgba(5,5,12,0.85)',
          borderColor: `${color}40`,
          boxShadow: `0 8px 32px ${color}20, inset 0 1px 0 ${color}20`,
        }}
      >
        {/* shimmer */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none badge-shimmer"
          style={{ background: `linear-gradient(105deg, transparent 40%, ${color}18 50%, transparent 60%)` }}
        />
        <div className="font-heading font-black text-xl md:text-2xl whitespace-nowrap" style={{ color }}>
          {count}+
        </div>
        <div className="font-body text-[10px] text-white/50 uppercase tracking-widest mt-0.5 whitespace-nowrap">{label}</div>
      </div>
    </div>
  );
}

export default function TeamMemberProfile({
  name,
  role,
  badgeLabel,
  photoSrc,
  photoAlt,
  bioParagraphs = [],
  stats = [],
  achievements = [],
  vision = {},
  whatsappUrl,
  sectionId = 'profile',
  sectionLabel = 'The Visionary Behind Juntoz',
  subheading = 'Meet the Team',
  heading,
  bioHeading,
  extraSections = [],
  ctaText,
}) {
  const sectionRef = useRef(null);
  const imgWrapRef = useRef(null);

  /* ── spotlight cursor on image side ── */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onMove = (e) => {
      const rect = section.getBoundingClientRect();
      section.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      section.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    section.addEventListener('mousemove', onMove, { passive: true });
    return () => section.removeEventListener('mousemove', onMove);
  }, []);

  /* ── image parallax on scroll ── */
  useEffect(() => {
    const wrap = imgWrapRef.current;
    if (!wrap || window.innerWidth < 768) return;
    let rafId;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const rect = wrap.getBoundingClientRect();
        const relY = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        const img = wrap.querySelector('img');
        if (img) img.style.transform = `scale(1.08) translateY(${relY * 28}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── 3D tilt on hover ── */
  useEffect(() => {
    const wrap = imgWrapRef.current;
    if (!wrap || window.innerWidth < 768) return;
    const card = wrap.querySelector('.founder-tilt-target');
    if (!card) return;

    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    };
    const onLeave = () => {
      card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };

    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseleave', onLeave);
    return () => {
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const buttonLabel = ctaText || `Talk to ${name ? name.split(' ')[0] : 'Us'} Directly`;

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      className="relative py-10 sm:py-14 md:py-16 overflow-hidden spotlight-section"
    >
      {/* ── Ambient background ── */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(123,47,255,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(0,245,212,0.10) 0%, transparent 70%)' }}
      />
      {/* diagonal accent stripe */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 w-px h-full"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,245,212,0.08), transparent)' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* ── Section label ── */}
        {sectionLabel && (
          <ScrollReveal data-reveal="up" className="flex justify-center mb-8 sm:mb-10">
            <span
              className="inline-flex items-center gap-2 font-body text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full border"
              style={{ color: '#00F5D4', borderColor: 'rgba(0,245,212,0.2)', background: 'rgba(0,245,212,0.05)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-pulse" />
              {sectionLabel}
            </span>
          </ScrollReveal>
        )}

        {/* ── Desktop split layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start mt-6 md:mt-8">
          {/* Left Column: Photo */}
          <div className="md:col-span-5 flex justify-center">
            <ScrollReveal data-reveal="zoom-cinematic" className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-full">
              <div className="relative w-full group">
                {/* Spinning ring decorations */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] rounded-[3rem] pointer-events-none z-0 hidden sm:block"
                  style={{ border: '1px dashed rgba(0,245,212,0.12)', animation: 'founder-ring-spin 18s linear infinite' }}
                />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[112%] h-[112%] rounded-[3.5rem] pointer-events-none z-0 hidden sm:block"
                  style={{ border: '1px dashed rgba(123,47,255,0.10)', animation: 'founder-ring-spin 28s linear infinite reverse' }}
                />

                {/* Cinematic glow behind */}
                <div
                  className="absolute inset-0 rounded-[3rem] blur-[80px] pointer-events-none z-0"
                  style={{ background: 'radial-gradient(ellipse, rgba(0,245,212,0.18) 0%, rgba(123,47,255,0.12) 60%, transparent 100%)' }}
                />

                {/* Animated gradient border */}
                <div className="relative z-10 rounded-[2.5rem] p-[2px] founder-border-glow" ref={imgWrapRef}>
                  <div
                    className="relative rounded-[2.4rem] overflow-hidden bg-[#05050C] founder-tilt-target transition-transform duration-200 ease-out"
                    style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)' }}
                  >
                    {/* Top shimmer line */}
                    <div
                      className="absolute top-0 inset-x-0 h-px z-20"
                      style={{ background: 'linear-gradient(to right, transparent, rgba(0,245,212,0.6), transparent)' }}
                    />

                    {/* Photo Container */}
                    <div className="overflow-hidden h-[360px] xs:h-[420px] sm:h-[500px] flex items-center justify-center relative bg-[#0B0B19]">
                      {photoSrc ? (
                        <img
                          src={photoSrc}
                          alt={photoAlt || name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-top will-change-transform transition-transform duration-300 group-hover:scale-[1.04]"
                          style={{ transformOrigin: 'center top' }}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#0E0E24] to-[#05050C]">
                          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-[#00F5D4]/30 bg-[#12122B] flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(0,245,212,0.15)]">
                            <span className="font-heading font-black text-3xl sm:text-4xl text-[#00F5D4]">
                              {name ? name.split(' ').map(n => n[0]).join('') : 'SM'}
                            </span>
                          </div>
                          <p className="font-heading font-bold text-xs uppercase tracking-widest text-white/40">
                            Photo Coming Soon
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Curtain reveal overlay */}
                    <div
                      className="absolute inset-0 founder-curtain z-10 rounded-[2.4rem]"
                      style={{ background: 'linear-gradient(to top, #050508 0%, #0e0e1c 100%)' }}
                    />

                    {/* Name overlay */}
                    <div
                      className="absolute bottom-0 inset-x-0 z-20 px-5 xs:px-7 py-4 sm:py-5"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)' }}
                    >
                      <div className="font-heading font-black text-white text-lg xs:text-xl md:text-2xl uppercase tracking-widest leading-none">
                        {name}
                      </div>
                      <div
                        className="font-body text-[10px] xs:text-xs mt-1 uppercase tracking-[0.25em] sm:tracking-[0.3em] font-bold"
                        style={{ color: '#00F5D4' }}
                      >
                        {badgeLabel || role}
                      </div>
                      <div
                        className="mt-3 h-px w-16 rounded-full"
                        style={{ background: 'linear-gradient(to right, #00F5D4, #7B2FFF)' }}
                      />
                    </div>
                  </div>

                  {/* Floating stat badges */}
                  {stats.map((stat, i) => (
                    <StatBadge
                      key={stat.label || i}
                      value={stat.value}
                      label={stat.label}
                      color={stat.color || (i === 0 ? '#00F5D4' : '#7B2FFF')}
                      delay={i * 0.6}
                      position={i === 0 ? '-top-4 right-1 xs:-right-4 sm:-right-8' : '-bottom-4 left-1 xs:-left-4 sm:-left-8'}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Copy & Details */}
          <div className="md:col-span-7 space-y-6 md:space-y-8">
            <ScrollReveal data-reveal="zoom-cinematic" className="text-center md:text-left">
              {subheading && (
                <span className="font-heading font-bold text-xs uppercase tracking-widest text-white/40 mb-3 block">
                  {subheading}
                </span>
              )}
              {heading ? (
                typeof heading === 'string' ? (
                  <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tighter leading-[0.9]">
                    {heading}
                  </h2>
                ) : (
                  heading
                )
              ) : (
                <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tighter leading-[0.9]">
                  An Agency That Actually{' '}
                  <span
                    style={{
                      background: 'linear-gradient(120deg, #00F5D4, #7B2FFF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 0 24px rgba(0,245,212,0.35))',
                    }}
                  >
                    Gets
                  </span>{' '}
                  Growth.
                </h2>
              )}
            </ScrollReveal>

            <ScrollReveal data-reveal="up" delay={80}>
              <div className="space-y-4 text-sm sm:text-base md:text-lg text-white/55 font-body leading-relaxed text-center md:text-left">
                {bioHeading && (
                  <h3 className="font-heading font-black text-white text-xl sm:text-2xl md:text-3xl uppercase tracking-wide">
                    {bioHeading}
                  </h3>
                )}
                {role && (
                  <p className="text-white/70 font-semibold">
                    {role}
                  </p>
                )}
                {bioParagraphs.map((para, i) => (
                  <div key={i}>
                    {typeof para === 'string' ? <p>{para}</p> : para}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* ── Optional Extra Sections (e.g. For Co-Founder page) ── */}
            {extraSections.length > 0 && (
              <ScrollReveal data-reveal="up" delay={120}>
                <div className="space-y-6 pt-2 border-t border-white/10">
                  {extraSections.map((sec, i) => (
                    <div key={i} className="space-y-2 text-left">
                      <h4 className="font-heading font-bold text-white text-lg sm:text-xl uppercase tracking-wide">
                        {sec.title}
                      </h4>
                      <p className="text-white/60 font-body text-sm sm:text-base leading-relaxed">
                        {sec.content}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            )}

            {/* ── Glowing vision card ── */}
            {vision && (vision.quote || vision.highlight) && (
              <ScrollReveal data-reveal="up" delay={160}>
                <div
                  className="relative p-5 sm:p-6 rounded-2xl overflow-hidden border-l-4 glass-card-strong text-left"
                  style={{ borderLeftColor: '#00F5D4' }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, rgba(0,245,212,0.06) 0%, transparent 60%)' }}
                  />
                  <svg className="absolute top-4 right-4 w-8 h-8 opacity-20" fill="#00F5D4" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.714 4.14-8.814 8.783-11.415l-1.42 2.62c-2.43 1.13-4.66 3.65-4.66 5.629h3.766v10.557h-6.469zm-13.017 0v-7.391c0-5.714 4.14-8.814 8.783-11.415l-1.42 2.62c-2.43 1.13-4.66 3.65-4.66 5.629h3.766v10.557h-6.469z" />
                  </svg>
                  {vision.label && (
                    <p className="relative text-white/50 text-xs sm:text-sm uppercase tracking-widest font-bold mb-2">
                      {vision.label}
                    </p>
                  )}
                  <blockquote className="relative font-heading font-black text-white text-base sm:text-lg md:text-xl uppercase leading-relaxed tracking-wide max-w-[90%]">
                    {vision.quote}{' '}
                    {vision.highlight && (
                      <span style={{ color: '#00F5D4', filter: 'drop-shadow(0 0 12px rgba(0,245,212,0.5))' }}>
                        {vision.highlight}
                      </span>
                    )}
                  </blockquote>
                </div>
              </ScrollReveal>
            )}

            {/* ── Achievement pills ── */}
            {achievements.length > 0 && (
              <ScrollReveal data-reveal="up" delay={240}>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {achievements.map((item, i) => {
                    const IconComp =
                      item.icon === 'zap'
                        ? Zap
                        : item.icon === 'rocket'
                        ? Rocket
                        : null;

                    return (
                      <span
                        key={item.text || i}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm font-semibold border"
                        style={{
                          color: 'rgba(255,255,255,0.8)',
                          borderColor: 'rgba(255,255,255,0.08)',
                          background: 'rgba(255,255,255,0.04)',
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        {IconComp ? (
                          <IconComp size={14} style={{ color: '#00F5D4' }} />
                        ) : typeof item.icon === 'function' || typeof item.icon === 'object' ? (
                          item.icon
                        ) : (
                          <Zap size={14} style={{ color: '#00F5D4' }} />
                        )}
                        {item.text}
                      </span>
                    );
                  })}
                </div>
              </ScrollReveal>
            )}

            {/* ── CTA ── */}
            {whatsappUrl && (
              <ScrollReveal data-reveal="up" delay={320} className="flex justify-center md:justify-start">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-7 sm:px-8 py-4 sm:py-5 rounded-full font-heading font-black text-xs sm:text-sm uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: '#00F5D4',
                    color: '#050508',
                    boxShadow: '0 0 40px rgba(0,245,212,0.35), 0 4px 20px rgba(0,0,0,0.4)',
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                  <span className="relative z-10">{buttonLabel}</span>
                </a>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>

      {/* ── Local keyframes & styles ── */}
      <style>{`
        /* Spinning ring behind photo */
        @keyframes founder-ring-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }

        /* Floating badge bob */
        @keyframes float-badge {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }
        .animate-float-badge {
          animation: float-badge var(--dur, 3.5s) ease-in-out infinite;
        }

        /* Animated gradient border on photo card */
        .founder-border-glow {
          background: linear-gradient(135deg, rgba(0,245,212,0.5), rgba(123,47,255,0.4), rgba(0,245,212,0.2));
          background-size: 300% 300%;
          animation: founder-border-spin 6s ease infinite;
        }
        @keyframes founder-border-spin {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Badge shimmer sweep on hover */
        .badge-shimmer {
          background-size: 300% 100%;
          background-position: -100% 0;
          transition: background-position 0.6s ease;
        }

        /* Curtain reveal — slides up once card enters viewport */
        .founder-curtain {
          transform: scaleY(1);
          transform-origin: bottom;
          transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        [data-reveal].revealed .founder-curtain,
        .revealed .founder-curtain {
          transform: scaleY(0);
        }
      `}</style>
    </section>
  );
}
