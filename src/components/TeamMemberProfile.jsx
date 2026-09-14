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
function StatBadge({ value, label, delay, position }) {
  const target = parseInt(value, 10) || 0;
  const { value: count, ref } = useCountUp(target, { duration: 1400, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`absolute ${position} z-20 hidden md:block`}
    >
      <div className="relative px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#DEDED7] shadow-card">
        <div className="font-heading font-black text-xl md:text-2xl text-[#111111] whitespace-nowrap">
          {count}+
        </div>
        <div className="font-body text-[10px] text-[#5F5F5A] uppercase tracking-wider font-semibold mt-0.5 whitespace-nowrap">
          {label}
        </div>
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
  const buttonLabel = ctaText || `Talk to ${name ? name.split(' ')[0] : 'Us'} Directly`;

  return (
    <section
      id={sectionId}
      className="relative py-12 sm:py-16 bg-[#F7F6F2]"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* ── Section label ── */}
        {sectionLabel && (
          <ScrollReveal data-reveal="up" className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#DEDED7] bg-white shadow-subtle text-[#5F5F5A]">
              <span className="w-2 h-2 rounded-full bg-[#E84A2A]" />
              {sectionLabel}
            </span>
          </ScrollReveal>
        )}

        {/* ── Desktop split layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 mt-4">
          {/* Left Column: Sticky Photo on Desktop */}
          <div className="md:col-span-5 relative">
            <div className="leader-sticky-card flex justify-center">
              <div className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-full">
                <div className="relative w-full">
                  {/* Photo Card Frame */}
                  <div className="relative rounded-3xl p-3 bg-white border border-[#DEDED7] shadow-card">
                    <div className="relative rounded-2xl overflow-hidden bg-[#EAE8E1]">
                      {/* Photo Container */}
                      <div className="overflow-hidden h-[380px] xs:h-[440px] sm:h-[500px] flex items-center justify-center relative">
                        {photoSrc ? (
                          <img
                            src={photoSrc}
                            alt={photoAlt || name}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#F7F6F2]">
                            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-[#DEDED7] bg-white flex items-center justify-center mb-4 shadow-subtle">
                              <span className="font-heading font-black text-3xl sm:text-4xl text-[#111111]">
                                {name ? name.split(' ').map(n => n[0]).join('') : 'SM'}
                              </span>
                            </div>
                            <p className="font-heading font-bold text-xs uppercase tracking-wider text-[#5F5F5A]">
                              Photo Coming Soon
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Name overlay */}
                      <div className="absolute bottom-0 inset-x-0 z-20 px-6 py-5 bg-gradient-to-t from-black/85 via-black/50 to-transparent">
                        <div className="font-heading font-black text-white text-xl md:text-2xl uppercase tracking-tight leading-tight">
                          {name}
                        </div>
                        <div className="font-body text-xs mt-0.5 uppercase tracking-wider font-bold text-[#E84A2A]">
                          {badgeLabel || role}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating stat badges */}
                  {stats.map((stat, i) => (
                    <StatBadge
                      key={stat.label || i}
                      value={stat.value}
                      label={stat.label}
                      delay={i * 0.6}
                      position={i === 0 ? '-top-4 right-1 xs:-right-4 sm:-right-6' : '-bottom-4 left-1 xs:-left-4 sm:-left-6'}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Details */}
          <div className="md:col-span-7 space-y-6 md:space-y-8">
            <ScrollReveal data-reveal="up" className="text-left">
              {subheading && (
                <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#E84A2A] mb-2 block">
                  {subheading}
                </span>
              )}
              {heading ? (
                typeof heading === 'string' ? (
                  <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-[#111111] uppercase tracking-tight leading-[1.05]">
                    {heading}
                  </h2>
                ) : (
                  heading
                )
              ) : (
                <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-[#111111] uppercase tracking-tight leading-[1.05]">
                  An Agency That Actually <span className="text-[#E84A2A]">Gets</span> Growth.
                </h2>
              )}
            </ScrollReveal>

            <ScrollReveal data-reveal="up" delay={80}>
              <div className="space-y-4 text-base sm:text-lg text-[#5F5F5A] font-body leading-relaxed text-left">
                {bioHeading && (
                  <h3 className="font-heading font-black text-[#111111] text-2xl sm:text-3xl uppercase tracking-tight">
                    {bioHeading}
                  </h3>
                )}
                {role && (
                  <p className="text-[#111111] font-semibold text-sm uppercase tracking-wider">
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

            {/* ── Optional Extra Sections ── */}
            {extraSections.length > 0 && (
              <ScrollReveal data-reveal="up" delay={120}>
                <div className="space-y-6 pt-4 border-t border-[#DEDED7]">
                  {extraSections.map((sec, i) => (
                    <div key={i} className="space-y-2 text-left bg-white p-6 rounded-2xl border border-[#DEDED7] shadow-subtle">
                      <h4 className="font-heading font-bold text-[#111111] text-lg uppercase tracking-tight">
                        {sec.title}
                      </h4>
                      <p className="text-[#5F5F5A] font-body text-sm sm:text-base leading-relaxed">
                        {sec.content}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            )}

            {/* ── Vision card ── */}
            {vision && (vision.quote || vision.highlight) && (
              <ScrollReveal data-reveal="up" delay={160}>
                <div className="relative p-6 rounded-2xl border-l-4 border-[#E84A2A] bg-white border border-y-[#DEDED7] border-r-[#DEDED7] shadow-subtle text-left">
                  {vision.label && (
                    <p className="text-[#E84A2A] text-xs uppercase tracking-wider font-bold mb-2">
                      {vision.label}
                    </p>
                  )}
                  <blockquote className="font-heading font-bold text-[#111111] text-base sm:text-lg uppercase leading-relaxed tracking-wide">
                    "{vision.quote}"
                    {vision.highlight && (
                      <span className="text-[#E84A2A] block mt-2">
                        {vision.highlight}
                      </span>
                    )}
                  </blockquote>
                </div>
              </ScrollReveal>
            )}

            {/* ── Achievement pills ── */}
            {achievements.length > 0 && (
              <ScrollReveal data-reveal="up" delay={200}>
                <div className="flex flex-wrap justify-start gap-2.5">
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-body text-xs font-semibold border border-[#DEDED7] bg-white shadow-subtle text-[#111111]"
                      >
                        {IconComp ? (
                          <IconComp size={14} className="text-[#E84A2A]" />
                        ) : typeof item.icon === 'function' || typeof item.icon === 'object' ? (
                          item.icon
                        ) : (
                          <Zap size={14} className="text-[#E84A2A]" />
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
              <ScrollReveal data-reveal="up" delay={240} className="flex justify-start pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-[#111111] hover:bg-[#E84A2A] transition-colors duration-200 shadow-sm active:scale-[0.98]"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                  <span>{buttonLabel}</span>
                </a>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
