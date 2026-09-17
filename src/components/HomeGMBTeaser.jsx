import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function HomeGMBTeaser() {
  return (
    <section id="local-gmb" className="py-10 sm:py-16 md:py-20 lg:py-28 bg-[#F7F6F2] relative overflow-hidden border-b border-[#DEDED7]/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1400px] relative z-10">
        
        {/* ════ SECTION HEADER: Centered, Authoritative Editorial ════ */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-16">
          <ScrollReveal data-reveal="up">
            {/* Eyebrow */}
            <span className="font-sans font-bold text-xs sm:text-sm uppercase tracking-widest text-[#5D2E85] block mb-3">
              LOCAL SEARCH &amp; GOOGLE MAPS DOMINANCE
            </span>

            {/* Headline */}
            <h2
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.18] sm:leading-[1.12] text-[#111111] font-normal mb-5"
            >
              <span className="block">Your Customers Are Searching Nearby.</span>
              <span className="block mt-1 sm:mt-2">
                We Ensure You Win The{' '}
                <span className="relative inline-block whitespace-nowrap">
                  <span>#1 Local Position.</span>
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
            </h2>

            {/* Mobile Summary */}
            <p className="sm:hidden font-sans text-[#333333] font-medium text-xs leading-relaxed max-w-3xl mx-auto mb-4">
              Over 68% of local clicks go directly to the Google Maps 3-Pack. We turn search proximity into verified customer bookings.
            </p>

            {/* Desktop Full Subtitle */}
            <p className="hidden sm:block font-sans text-[#333333] font-medium text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Over 68% of all high-intent local customer clicks go directly to the Google Maps 3-Pack. When nearby clients search for premium services, we turn geographic proximity into predictable, verified customer bookings.
            </p>
          </ScrollReveal>
        </div>

        {/* ════ PANORAMIC 3-COLUMN COMMAND MATRIX ════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12 items-stretch">

          {/* ── CARD 1: 3-Pack Rank #1 Simulation (4 Cols) ── */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col">
            <ScrollReveal data-reveal="up" delay={80} className="h-full">
              <div className="rounded-3xl bg-white border border-[#DEDED7] p-6 shadow-card h-full flex flex-col justify-between">
                <div>
                  {/* Top Google Search Pill */}
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#F1F0EA]">
                    <div className="flex items-center gap-2 min-w-0">
                      <svg className="w-4 h-4 text-[#5D2E85] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="font-sans font-bold text-sm text-[#111111] truncate">
                        best [service] near me
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300/80 text-xs font-sans font-extrabold shrink-0 flex items-center gap-1.5 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                      Live 3-Pack
                    </span>
                  </div>

                  {/* Winner Card: Rank #1 */}
                  <div className="p-4 rounded-2xl bg-[#FAFAF8] border-2 border-[#5D2E85]/50 mb-4 shadow-md relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#5D2E85]/10 to-transparent rounded-bl-full pointer-events-none" />
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-heading font-black text-base sm:text-lg text-[#111111]">
                        Your Business
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#5D2E85] text-white text-xs font-sans font-extrabold shadow-sm flex items-center gap-1">
                        ★ Rank #1
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs sm:text-sm mb-3.5">
                      <span className="text-amber-500 text-sm">★★★★★</span>
                      <span className="font-extrabold text-[#111111]">5.0</span>
                      <span className="text-[#333333] font-bold">(180+ Reviews)</span>
                      <span className="text-emerald-800 font-extrabold text-xs ml-auto bg-emerald-100/90 px-2 py-0.5 rounded border border-emerald-300/50">Verified</span>
                    </div>

                    <div className="flex gap-2.5">
                      <div className="flex-1 py-2 text-center rounded-xl bg-[#5D2E85] hover:bg-[#4C266D] text-white text-xs font-sans font-bold tracking-wide shadow-sm transition-colors cursor-pointer">
                        Call Now
                      </div>
                      <div className="flex-1 py-2 text-center rounded-xl bg-[#111111] hover:bg-[#222222] text-white text-xs font-sans font-bold tracking-wide shadow-sm transition-colors cursor-pointer">
                        Directions
                      </div>
                    </div>
                  </div>

                  {/* Subdued Competitor */}
                  <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-[#E5E4DE] shadow-xs">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <div>
                        <span className="font-bold text-[#111111] block mb-0.5">Unoptimized Competitor</span>
                        <span className="text-xs text-[#444444] font-medium">3.6 ★ (14 reviews) · Missing citations</span>
                      </div>
                      <span className="text-xs font-sans font-bold text-[#444444] bg-gray-200/90 px-2 py-1 rounded-md border border-gray-300 shrink-0">
                        Rank #6
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Metric */}
                <div className="pt-4 mt-4 border-t border-[#F1F0EA] flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-[#333333] font-bold">3-Pack Click Share:</span>
                  <span className="font-sans font-extrabold text-emerald-800 bg-emerald-100/90 px-3 py-1 rounded-lg border border-emerald-300/80">
                    68% Inbound Capture
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ── CARD 2: Animated Geo-Radius Radar & City Grid Map (4 Cols) ── */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col">
            <ScrollReveal data-reveal="up" delay={120} className="h-full">
              <div className="rounded-3xl bg-white border border-[#DEDED7] p-6 shadow-card h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#F1F0EA]">
                    <span className="font-heading font-bold text-sm text-[#111111]">
                      Geo-Radius Coverage Radar
                    </span>
                    <span className="text-xs font-sans font-extrabold text-white bg-[#5D2E85] px-3 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      100% Signal
                    </span>
                  </div>

                  {/* Stylized Vector Radar Map with Animated Scanner */}
                  <div className="relative h-48 sm:h-52 w-full rounded-2xl bg-[#F8F7F4] border border-[#DEDED7] overflow-hidden p-3 flex items-center justify-center shadow-inner">
                    {/* City Grid Background */}
                    <svg className="absolute inset-0 w-full h-full text-[#E2E1DA]" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="gmb-radar-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                          <path d="M 28 0 L 0 0 0 28" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#gmb-radar-grid)" />
                      <path d="M -10 60 Q 80 80, 180 50 T 360 70" fill="none" stroke="#C8C7BF" strokeWidth="4" />
                      <path d="M 120 -10 Q 130 90, 160 190" fill="none" stroke="#C8C7BF" strokeWidth="3.5" />
                    </svg>

                    {/* Dynamic Rotating Radar Scanner Beam Animation */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-48 h-48 rounded-full overflow-hidden relative animate-[spin_4s_linear_infinite]">
                        <div className="absolute top-0 left-1/2 w-1/2 h-1/2 origin-bottom-left bg-gradient-to-br from-[#5D2E85]/40 to-transparent" />
                        <div className="absolute top-0 left-1/2 w-0.5 h-1/2 bg-gradient-to-b from-[#5D2E85] to-transparent shadow-[0_0_8px_#5D2E85]" />
                      </div>
                    </div>

                    {/* Concentric Radar Rings */}
                    <div className="absolute w-36 h-36 rounded-full border border-[#5D2E85]/30 animate-ping pointer-events-none opacity-40" />
                    <div className="absolute w-28 h-28 rounded-full border border-[#5D2E85]/40 pointer-events-none" />
                    <div className="absolute w-16 h-16 rounded-full bg-[#5D2E85]/15 border border-[#5D2E85]/40 pointer-events-none" />

                    {/* Central Pin: Your Business */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="px-3 py-1 rounded-full bg-[#5D2E85] text-white text-xs font-sans font-extrabold tracking-wide shadow-lg mb-1.5 whitespace-nowrap border border-white/30 animate-bounce" style={{ animationDuration: '2.5s' }}>
                        ★ Rank #1 Center
                      </div>
                      <div className="w-6 h-6 rounded-full bg-[#5D2E85] border-2 border-white shadow-lg flex items-center justify-center relative">
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <span className="absolute inset-0 rounded-full bg-[#5D2E85]/60 animate-ping" />
                      </div>
                    </div>

                    {/* Outer Pin Markers */}
                    <div className="absolute top-4 left-6 flex flex-col items-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#333333] border-2 border-white shadow-xs" />
                      <span className="text-xs font-sans font-bold text-[#111111] bg-white px-2 py-0.5 rounded-md shadow-sm border border-gray-300 mt-0.5">Rank #5</span>
                    </div>
                    <div className="absolute bottom-4 right-8 flex flex-col items-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#333333] border-2 border-white shadow-xs" />
                      <span className="text-xs font-sans font-bold text-[#111111] bg-white px-2 py-0.5 rounded-md shadow-sm border border-gray-300 mt-0.5">Rank #8</span>
                    </div>
                  </div>
                </div>

                {/* Radar Telemetry Metrics */}
                <div className="grid grid-cols-2 gap-3.5 text-xs pt-4 mt-4 border-t border-[#F1F0EA]">
                  <div className="p-3 rounded-xl bg-[#F8F7F4] border border-[#DEDED7] text-center shadow-xs">
                    <span className="text-[#555555] font-semibold block text-xs mb-1">Dominance Radius</span>
                    <span className="font-sans font-black text-[#111111] text-xs sm:text-sm block">5.0 km Urban Core</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F1E7F9] border border-[#5D2E85]/30 text-center shadow-xs">
                    <span className="text-[#5D2E85] font-semibold block text-xs mb-1">Inbound Velocity</span>
                    <span className="font-sans font-black text-[#5D2E85] text-xs sm:text-sm block">+310% Phone Calls</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ── CARD 3: Strategic Growth Pillars (Hidden on Mobile) ── */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-4 flex-col">
            <ScrollReveal data-reveal="up" delay={160} className="h-full">
              <div className="rounded-3xl bg-white border border-[#DEDED7] p-6 shadow-card h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#F1F0EA]">
                    <span className="font-heading font-bold text-sm text-[#111111]">
                      Systematic Local Architecture
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  <div className="space-y-3">
                    {/* Pillar 1 */}
                    <div className="p-3.5 rounded-2xl bg-[#F8F7F4] hover:bg-white border border-[#DEDED7] hover:border-[#5D2E85]/40 hover:shadow-sm transition-all duration-200">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="w-6 h-6 rounded-lg bg-[#5D2E85]/15 text-[#5D2E85] flex items-center justify-center text-xs font-bold shrink-0">
                          1
                        </span>
                        <h4 className="font-heading font-bold text-xs sm:text-sm text-[#111111]">
                          Geo-Grid Algorithmic Authority
                        </h4>
                      </div>
                      <p className="hidden sm:block font-sans text-xs sm:text-sm text-[#333333] font-medium leading-relaxed pl-8">
                        Deep geo-tagging, NAP synchronization, and keyword-rich category schema.
                      </p>
                    </div>

                    {/* Pillar 2 */}
                    <div className="p-3.5 rounded-2xl bg-[#F8F7F4] hover:bg-white border border-[#DEDED7] hover:border-[#5D2E85]/40 hover:shadow-sm transition-all duration-200">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="w-6 h-6 rounded-lg bg-[#B7791F]/15 text-[#B7791F] flex items-center justify-center text-xs font-bold shrink-0">
                          2
                        </span>
                        <h4 className="font-heading font-bold text-xs sm:text-sm text-[#111111]">
                          Automated 5-Star Review Funnel
                        </h4>
                      </div>
                      <p className="hidden sm:block font-sans text-xs sm:text-sm text-[#333333] font-medium leading-relaxed pl-8">
                        Post-appointment review routing that compounds customer trust on autopilot.
                      </p>
                    </div>

                    {/* Pillar 3 */}
                    <div className="p-3.5 rounded-2xl bg-[#F8F7F4] hover:bg-white border border-[#DEDED7] hover:border-[#5D2E85]/40 hover:shadow-sm transition-all duration-200">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="w-6 h-6 rounded-lg bg-emerald-500/15 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
                          3
                        </span>
                        <h4 className="font-heading font-bold text-xs sm:text-sm text-[#111111]">
                          Direct Inbound Call Routing
                        </h4>
                      </div>
                      <p className="hidden sm:block font-sans text-xs sm:text-sm text-[#333333] font-medium leading-relaxed pl-8">
                        High-intent phone inquiries and direction requests channeled straight to your desk.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F1F0EA] flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-[#333333] font-bold">Local Conversion Rate:</span>
                  <span className="font-sans font-extrabold text-[#5D2E85] bg-[#F1E7F9] px-3 py-1 rounded-lg border border-[#5D2E85]/30">
                    4.2x Industry Avg
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* ════ BOTTOM CONVERSION STRIP: Clean, Direct & Centered ════ */}
        <ScrollReveal data-reveal="up" delay={200}>
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#DEDED7] shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#111111] mb-1.5">
                Ready to Dominate Your Local Search Radius?
              </h3>
              <p className="font-sans text-xs sm:text-sm md:text-base text-[#333333] font-medium">
                Stop surrendering high-value neighborhood clients to underqualified competitors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                to="/google-business-profile"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#111111] hover:bg-[#5D2E85] active:scale-95 text-white font-sans font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200 whitespace-nowrap"
              >
                <span>Explore Google Business Profile Growth</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                to="/google-business-profile"
                className="font-sans font-bold text-xs sm:text-sm text-[#5D2E85] hover:text-[#4C266D] underline underline-offset-4 decoration-[#5D2E85]/40 hover:decoration-[#5D2E85] transition-colors whitespace-nowrap"
              >
                Take the 60-Second GMB Health Audit →
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
