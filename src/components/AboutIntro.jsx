import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function AboutIntro() {
  return (
    <section id="about-intro" className="py-10 sm:py-16 md:py-24 lg:py-32 bg-[#F7F6F2] relative overflow-hidden border-b border-[#DEDED7]/70">
      {/* ── Decorative Doodles (Desktop Only, Low Opacity) ── */}
      <div className="hidden lg:block absolute top-12 right-12 pointer-events-none text-[#111111]/15 select-none" aria-hidden="true">
        {/* Hand-drawn scribble loop */}
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 70 C 10 30, 45 10, 65 30 C 85 50, 40 85, 30 55 C 20 25, 80 20, 85 65" />
          <path d="M75 25 L88 20 L82 35" />
        </svg>
      </div>

      <div className="hidden lg:block absolute bottom-12 left-12 pointer-events-none text-[#111111]/15 select-none" aria-hidden="true">
        {/* Hand-drawn diagonal dashes & starburst */}
        <svg width="90" height="90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="20" y1="35" x2="35" y2="20" />
          <line x1="30" y1="55" x2="55" y2="30" />
          <line x1="45" y1="75" x2="75" y2="45" />
          <line x1="65" y1="90" x2="90" y2="65" />
          <circle cx="25" cy="75" r="3" fill="currentColor" />
          <circle cx="80" cy="25" r="2" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 max-w-[1400px] relative z-10">
        {/* ── 1. Top Centered Icon Badge ── */}
        <ScrollReveal data-reveal="up" className="flex justify-center mb-5 sm:mb-8">
          <div className="w-14 h-14 sm:w-22 sm:h-22 rounded-full bg-[#111111] flex items-center justify-center shadow-card border border-[#111111]">
            <svg
              className="w-6 h-6 sm:w-9 sm:h-9 text-[#8A44C8]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
          </div>
        </ScrollReveal>

        {/* ── 2. Expansive Serif Headline (Changed Copy & Broad Width) ── */}
        <ScrollReveal data-reveal="up" delay={80}>
          <h2
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            className="text-2xl sm:text-5xl lg:text-6xl leading-[1.18] sm:leading-[1.15] text-[#111111] font-normal text-center max-w-5xl mx-auto mb-8 sm:mb-18"
          >
            <span className="block mb-1 sm:mb-2">
              A Full-Service{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span>Growth Partner</span>
                <svg
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full overflow-visible pointer-events-none text-[#5D2E85]"
                  height="12"
                  viewBox="0 0 260 14"
                  fill="none"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C60 3.5 150 2.5 257 8.5C185 5 85 6.5 15 11.5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
            <span className="block text-[#111111]">
              Built to Scale Your Authority, Reach, and Revenue.
            </span>
          </h2>
        </ScrollReveal>

        {/* ── 3. Full-Width 2-Column (Mobile) / 3-Column (Desktop) Editorial Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 xl:gap-10 mb-10 sm:mb-16">
          {/* Column 1 */}
          <ScrollReveal data-reveal="up" delay={120}>
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-9 border border-[#DEDED7] shadow-subtle flex flex-col justify-between h-full hover:border-[#5D2E85]/50 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between pb-2.5 sm:pb-4 mb-3 sm:mb-5 border-b border-[#DEDED7] gap-1">
                  <span className="font-heading font-black text-[9px] sm:text-xs uppercase tracking-wider text-[#5D2E85] truncate">
                    01 / Strategy
                  </span>
                  <span className="text-[9px] sm:text-xs text-[#5F5F5A] font-mono font-bold shrink-0">CORE</span>
                </div>
                <h3 className="font-heading font-black text-xs sm:text-xl md:text-2xl text-[#111111] uppercase tracking-tight mb-1.5 sm:mb-4">
                  Integrated Growth
                </h3>
                <p className="hidden sm:block font-body text-[#5F5F5A] text-sm sm:text-base leading-[1.75]">
                  At Juntoz, we reject superficial marketing metrics and disconnected tactics. We operate as an integrated digital partner, combining full-funnel{' '}
                  <Link to="/services/instagram-management" className="text-[#5D2E85] font-semibold hover:underline transition-colors">
                    Instagram content strategies
                  </Link>
                  , multi-channel{' '}
                  <Link to="/services/meta-google-ads" className="text-[#5D2E85] font-semibold hover:underline transition-colors">
                    performance advertising
                  </Link>
                  , and localized search dominance into a single cohesive customer engine.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Column 2 */}
          <ScrollReveal data-reveal="up" delay={180}>
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-9 border border-[#DEDED7] shadow-subtle flex flex-col justify-between h-full hover:border-[#5D2E85]/50 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between pb-2.5 sm:pb-4 mb-3 sm:mb-5 border-b border-[#DEDED7] gap-1">
                  <span className="font-heading font-black text-[9px] sm:text-xs uppercase tracking-wider text-[#5D2E85] truncate">
                    02 / Velocity
                  </span>
                  <span className="text-[9px] sm:text-xs text-[#5F5F5A] font-mono font-bold shrink-0">CONVERT</span>
                </div>
                <h3 className="font-heading font-black text-xs sm:text-xl md:text-2xl text-[#111111] uppercase tracking-tight mb-1.5 sm:mb-4">
                  Predictable Revenue
                </h3>
                <p className="hidden sm:block font-body text-[#5F5F5A] text-sm sm:text-base leading-[1.75]">
                  Our sole focus is bottom-line acceleration. Rather than generating impressions that fail to produce bookings, we engineer high-converting{' '}
                  <Link to="/services/websites" className="text-[#5D2E85] font-semibold hover:underline transition-colors">
                    digital storefronts and conversion funnels
                  </Link>{' '}
                  paired with automated WhatsApp routing that guides qualified prospects directly into your appointment calendar.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Column 3 - Spans full width on 2nd row on mobile */}
          <ScrollReveal data-reveal="up" delay={240} className="col-span-2 md:col-span-1">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-9 border border-[#DEDED7] shadow-subtle flex flex-col justify-between h-full hover:border-[#5D2E85]/50 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between pb-2.5 sm:pb-4 mb-3 sm:mb-5 border-b border-[#DEDED7] gap-1">
                  <span className="font-heading font-black text-[9px] sm:text-xs uppercase tracking-wider text-[#5D2E85] truncate">
                    03 / Market Dominance
                  </span>
                  <span className="text-[9px] sm:text-xs text-[#5F5F5A] font-mono font-bold shrink-0">SCALE</span>
                </div>
                <h3 className="font-heading font-black text-xs sm:text-xl md:text-2xl text-[#111111] uppercase tracking-tight mb-1.5 sm:mb-4">
                  Sustainable Authority
                </h3>
                <p className="hidden sm:block font-body text-[#5F5F5A] text-sm sm:text-base leading-[1.75]">
                  Whether scaling a signature artistry brand, expanding a multi-chair clinic, or dominating regional search, lasting leadership is never an accident. With Juntoz managing your infrastructure, you gain the technical caliber, creative authority, and strategic clarity necessary to fulfill your highest commercial potential.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── 4. Centered Action & Proof Strip ── */}
        <ScrollReveal data-reveal="up" delay={300} className="flex flex-col items-center text-center">
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#5D2E85] hover:bg-[#4C266D] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 group mb-8"
          >
            <span>Learn More About Juntoz</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          {/* Proof Strip across bottom */}
          <div className="w-full max-w-4xl pt-8 border-t border-[#DEDED7] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <span className="font-heading font-black text-xl sm:text-2xl text-[#111111] block">200+</span>
              <span className="font-body text-xs text-[#5F5F5A] uppercase tracking-wider font-semibold">Brands Scaled</span>
            </div>
            <div>
              <span className="font-heading font-black text-xl sm:text-2xl text-[#5D2E85] block">4.2×</span>
              <span className="font-body text-xs text-[#5F5F5A] uppercase tracking-wider font-semibold">Target ROAS</span>
            </div>
            <div>
              <span className="font-heading font-black text-xl sm:text-2xl text-[#111111] block">Mumbai &amp; Delhi</span>
              <span className="font-body text-xs text-[#5F5F5A] uppercase tracking-wider font-semibold">Dedicated Crews</span>
            </div>
            <div>
              <span className="font-heading font-black text-xl sm:text-2xl text-[#287A55] block">5.0 ★</span>
              <span className="font-body text-xs text-[#5F5F5A] uppercase tracking-wider font-semibold">Verified Reviews</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
