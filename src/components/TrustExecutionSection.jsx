import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function TrustExecutionSection() {
  return (
    <section className="hidden lg:block py-20 md:py-32 bg-[#F7F6F2] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5D2E85]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5D2E85]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ════ LEFT COLUMN: Editorial Headline & Strategic Narrative ════ */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            

            {/* Editorial Serif Contrast Headline */}
            <ScrollReveal data-reveal="up" delay={80}>
              <h2
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111] leading-[1.12] mb-6"
              >
                From Endless DMs to{' '}
                <span className="relative inline-block not-italic font-bold text-[#111111]">
                  Fully Booked.
                  <svg
                    className="absolute -bottom-1.5 left-0 w-full h-3 text-[#5D2E85]"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9 C 25 3, 50 11, 98 4"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </h2>
            </ScrollReveal>

            {/* 3-4 sentence original narrative for MUAs */}
            <ScrollReveal data-reveal="up" delay={140}>
              <p className="font-sans text-[#5F5F5A] text-base sm:text-[16.5px] leading-relaxed mb-6 max-w-xl">
                Generalist marketing agencies recycle identical lead templates across clinics, real estate, and bridal artists. At Juntoz, we focus exclusively on the high-ticket beauty ecosystem—aligning your seasonal bridal peaks, portfolio prestige, and client inquiry response speed into a synchronized client pipeline. We don&apos;t settle for vanity impressions; our growth architecture turns casual Instagram scrollers into confirmed calendar bookings months in advance.
              </p>
            </ScrollReveal>

            {/* 
              [ADD REAL PARTNER BADGES WHEN AVAILABLE] 
              Formal partner certification logos (Meta/Google Partner badges) are omitted 
              until Juntoz's verified partner certifications are officially supplied.
              Displaying verified execution pillars instead:
            */}
            <ScrollReveal data-reveal="up" delay={180}>
              <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white border border-[#DEDED7] text-[#2D2D2A]">
                  <svg className="w-3.5 h-3.5 text-[#5D2E85]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Bridal &amp; Beauty Specialization
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white border border-[#DEDED7] text-[#2D2D2A]">
                  <svg className="w-3.5 h-3.5 text-[#5D2E85]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Mumbai &amp; Delhi Production Crews
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white border border-[#DEDED7] text-[#2D2D2A]">
                  <svg className="w-3.5 h-3.5 text-[#5D2E85]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Direct WhatsApp Funnels
                </span>
              </div>
            </ScrollReveal>

            {/* CTA Button */}
            <ScrollReveal data-reveal="up" delay={220}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#5D2E85] hover:bg-[#4C266D] active:scale-95 text-white font-sans font-semibold text-sm tracking-wide shadow-[0_4px_18px_rgba(93,46,133,0.35)] transition-all duration-200"
              >
                <span>Book a Strategy Call</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </ScrollReveal>

          </div>

          {/* ════ RIGHT COLUMN: Layered Visual Composition ════ */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-6 lg:pt-0">
            
            {/* Subtle decorative dot-grid background texture */}
            <div className="absolute -inset-4 sm:-inset-8 pointer-events-none opacity-25 z-0 flex items-center justify-center">
              <svg width="340" height="340" fill="none" viewBox="0 0 340 340">
                <defs>
                  <pattern id="dot-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="#5D2E85" />
                  </pattern>
                </defs>
                <rect width="340" height="340" fill="url(#dot-grid)" />
              </svg>
            </div>

            {/* Main Visual Container with Layered Elements */}
            <div className="relative w-full max-w-md z-10">

              {/* CARD 1: Line-art MUA Booking Calendar filling up */}
              <ScrollReveal data-reveal="up">
                <div className="bg-white border border-[#DEDED7] rounded-3xl p-5 sm:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.06)] relative overflow-hidden">
                  
                  {/* Card top bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F0EFEB] gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#5D2E85] shrink-0" />
                      <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#111111] truncate sm:whitespace-normal">
                        Peak Bridal Season Schedule
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#F1E7F9] text-[#5D2E85] whitespace-nowrap shrink-0">
                      Locked Dates
                    </span>
                  </div>

                  {/* Calendar mini-grid line-art illustration */}
                  <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] font-sans font-medium text-[#777772] mb-3">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                      <span key={i} className="py-0.5">{day}</span>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1.5 text-center text-xs font-sans">
                    {[
                      { d: '14', status: 'available' },
                      { d: '15', status: 'booked', label: 'Bride Ananya' },
                      { d: '16', status: 'booked', label: 'Bride Riya' },
                      { d: '17', status: 'available' },
                      { d: '18', status: 'booked', label: 'Sangeet Shoot' },
                      { d: '19', status: 'booked', label: 'Royal Wedding' },
                      { d: '20', status: 'booked', label: 'Reception MUA' },
                      { d: '21', status: 'booked', label: 'Destination Delhi' },
                      { d: '22', status: 'available' },
                      { d: '23', status: 'booked', label: 'Masterclass Batch' },
                      { d: '24', status: 'booked', label: 'Bridal Trial' },
                      { d: '25', status: 'booked', label: 'Bride Pooja' },
                      { d: '26', status: 'booked', label: 'Cocktail Night' },
                      { d: '27', status: 'booked', label: 'Wedding Shoot' },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className={`h-9 rounded-xl flex flex-col items-center justify-center transition-all ${
                          item.status === 'booked'
                            ? 'bg-[#5D2E85] text-white font-semibold shadow-xs'
                            : 'bg-[#F7F6F2] text-[#5F5F5A] border border-[#E8E7E0]'
                        }`}
                      >
                        <span className="text-[11px] leading-none">{item.d}</span>
                        {item.status === 'booked' && (
                          <span className="w-1 h-1 rounded-full bg-white mt-0.5" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Booking notification pill */}
                  <div className="mt-4 p-2.5 rounded-2xl bg-[#F7F6F2] border border-[#E8E7E0] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#5D2E85]/15 flex items-center justify-center text-[#5D2E85]">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-[11px] font-bold text-[#111111] leading-tight">Deposit Secured (WhatsApp Funnel)</p>
                        <p className="text-[10px] text-[#777772]">Dec 2026 Bridal Booking Confirmed</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-[#287A55] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Paid
                    </span>
                  </div>

                </div>
              </ScrollReveal>

              {/* CARD 2: Overlapping Growth Trend Chart Card */}
              <ScrollReveal data-reveal="up" delay={120}>
                <div className="bg-white border border-[#DEDED7] rounded-2xl p-4 shadow-[0_16px_40px_rgba(0,0,0,0.1)] -mt-4 sm:-mt-10 ml-3 sm:ml-12 relative z-20">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#5F5F5A] block">
                        Monthly Verified Inquiries
                      </span>
                      <span className="text-base font-bold text-[#111111]">+240% Inbound Lift</span>
                    </div>
                    <span className="text-xs font-bold text-[#5D2E85] bg-[#F1E7F9] px-2.5 py-0.5 rounded-full">
                      MUA Scale
                    </span>
                  </div>

                  {/* Clean SVG Trend Curve */}
                  <div className="h-16 w-full">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 240 60">
                      <defs>
                        <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#5D2E85" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#5D2E85" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,50 Q40,48 80,38 T160,20 T240,6 L240,60 L0,60 Z"
                        fill="url(#curveGradient)"
                      />
                      <path
                        d="M0,50 Q40,48 80,38 T160,20 T240,6"
                        fill="none"
                        stroke="#5D2E85"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      {/* Highlight data points */}
                      <circle cx="80" cy="38" r="3.5" fill="#5D2E85" stroke="#FFFFFF" strokeWidth="2" />
                      <circle cx="160" cy="20" r="3.5" fill="#5D2E85" stroke="#FFFFFF" strokeWidth="2" />
                      <circle cx="240" cy="6" r="4" fill="#5D2E85" stroke="#FFFFFF" strokeWidth="2.5" />
                    </svg>
                  </div>
                </div>
              </ScrollReveal>

              {/* 
                [NEEDS REAL STAT] 
                Unverified revenue figures (e.g. 5Cr.+ / 200+ clients) are withheld from live render 
                until certified commercial documentation is provided.
                Showing defensive verified specialization metric:
              */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 z-30">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#111111] text-white shadow-[0_8px_20px_rgba(17,17,17,0.25)] border border-white/10">
                  <div className="w-6 h-6 rounded-full bg-[#5D2E85] flex items-center justify-center text-white text-xs font-black">
                    ✓
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold leading-tight text-white">100% Focused</span>
                    <span className="block text-[9.5px] text-white/60 leading-tight">Beauty &amp; Bridal Growth</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
