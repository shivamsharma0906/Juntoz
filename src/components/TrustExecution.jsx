import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function TrustExecution() {
  return (
    <section id="trust-execution" className="py-10 sm:py-16 md:py-24 lg:py-32 bg-[#F7F6F2] relative overflow-hidden border-b border-[#DEDED7]/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* ════ LEFT COLUMN: Text Block (Text First on Mobile) ════ */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6 sm:space-y-7">
            <ScrollReveal data-reveal="up">
              {/* Eyebrow - Matched to Site-Wide Brand Purple #5D2E85 */}
              <span className="font-heading font-black text-xs uppercase tracking-widest text-[#5D2E85] block mb-3 leading-relaxed">
                WHY CHOOSE US AS YOUR GROWTH PARTNER?
              </span>

              {/* Serif Headline (2 Lines, Hand-Drawn Underline on Final Phrase) */}
              <h2
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="text-3xl sm:text-4xl md:text-5xl leading-[1.18] sm:leading-[1.14] text-[#111111] font-normal mb-5"
              >
                <span className="block">From Strategic Vision</span>
                <span className="block mt-1">
                  To Relentless{' '}
                  <span className="relative inline-block whitespace-nowrap">
                    <span>Execution.</span>
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

              {/* Mobile Concise Summary */}
              <p className="sm:hidden font-body text-[#5F5F5A] text-xs leading-relaxed mb-4">
We build cohesive growth systems that combine precision targeting, high-converting creative, and seamless booking journeys.              </p>

              {/* Desktop Full Editorial Paragraph */}
              <p className="hidden sm:block font-body text-[#5F5F5A] text-sm sm:text-base leading-[1.75]">
                We believe that high-performing brands are never built on guesswork or vanity metrics. Instead of fragmented ad experiments, we engineer cohesive growth engines that unite precision targeting, high-converting creative assets, and frictionless booking paths. Our team operates as a dedicated extension of your business, ensuring every rupee of your marketing budget drives verified client acquisition. With full transparency across data telemetry and end-to-end campaign ownership, we turn market potential into durable enterprise value.
              </p>

              {/* Thin Horizontal Divider Line */}
              <div className="border-t border-[#DEDED7] my-6 sm:my-8" />

              {/* 
                [ADD REAL PARTNER BADGES WHEN CERTIFIED]
                Credentials row omitted: only official, verified partner badges (e.g. Meta Business Partner, Google Partner)
                will be displayed once official certification assets are confirmed for Juntoz.
              */}

              {/* CTA Button */}
              <div className="pt-1">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#111111] hover:bg-[#1A1A1A] active:scale-95 text-white font-heading font-semibold text-sm sm:text-base tracking-wide shadow-card transition-all duration-200"
                >
                  <span>Get in Touch With Us</span>
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
              </div>
            </ScrollReveal>
          </div>

          {/* ════ RIGHT COLUMN: Layered Visual Illustration ════ */}
          <div className="lg:col-span-7 xl:col-span-7">
            <ScrollReveal data-reveal="up" delay={120} className="relative w-full max-w-[560px] mx-auto lg:max-w-none">
              
              {/* Decorative Dot-Grid Pattern (Desktop Only) */}
              <div className="hidden lg:block absolute -bottom-8 -right-6 w-56 h-56 pointer-events-none opacity-20 text-[#111111]" aria-hidden="true">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="trust-dot-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#trust-dot-grid)" />
                </svg>
              </div>

              {/* Tiny Floating Outline Accent Circle */}
              <div className="absolute -top-5 right-8 sm:right-16 w-8 h-8 rounded-full border-2 border-[#5D2E85]/30 pointer-events-none" aria-hidden="true" />

              <div className="relative">
                {/* ── CARD A (Back, Offset Up-Right): Grouped Column Attribution Matrix ── */}
                <div className="relative ml-auto w-full sm:w-[86%] lg:w-[84%] rounded-3xl bg-white border border-[#DEDED7] p-5 sm:p-6 shadow-card z-0">
                  {/* Card Header with Progress Ring */}
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#F1F0EA]">
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#5D2E85] block">
                        Telemetry Benchmarking
                      </span>
                      <span className="font-heading font-bold text-sm sm:text-base text-[#111111]">
                        Quarterly Attribution Matrix
                      </span>
                    </div>

                    {/* Circular Progress Ring (Brand Purple & Soft Lavender) */}
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8 sm:w-9 sm:h-9">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#F1E7F9" strokeWidth="3" />
                          <circle
                            cx="18"
                            cy="18"
                            r="14"
                            fill="none"
                            stroke="#5D2E85"
                            strokeWidth="3"
                            strokeDasharray="88"
                            strokeDashoffset="24"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <span className="font-mono text-[11px] font-bold text-[#5F5F5A]">Index</span>
                    </div>
                  </div>

                  {/* Channel Legend Badges */}
                  <div className="flex items-center gap-4 text-[10px] sm:text-[11px] font-semibold text-[#5F5F5A] mb-3">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#5D2E85]" /> Primary Channel
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#EC4899]" /> Secondary Channel
                    </span>
                  </div>

                  {/* Distinct SVG Grouped Bar / Column Chart */}
                  <div className="h-32 sm:h-36 w-full relative pt-1">
                    <svg className="w-full h-full" viewBox="0 0 380 115" preserveAspectRatio="none">
                      {/* Horizontal Gridlines */}
                      <line x1="10" y1="18" x2="370" y2="18" stroke="#F1F0EA" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="10" y1="46" x2="370" y2="46" stroke="#F1F0EA" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="10" y1="74" x2="370" y2="74" stroke="#F1F0EA" strokeWidth="1" strokeDasharray="3 3" />

                      {/* Benchmark Target Curve across Quarters */}
                      <path
                        d="M 50 68 Q 140 50, 230 30 T 330 12"
                        fill="none"
                        stroke="#5D2E85"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        opacity="0.35"
                      />

                      {/* Q1 Grouped Bars */}
                      <rect x="36" y="58" width="13" height="38" rx="3.5" fill="#5D2E85" />
                      <rect x="52" y="68" width="13" height="28" rx="3.5" fill="#EC4899" />

                      {/* Q2 Grouped Bars */}
                      <rect x="126" y="42" width="13" height="54" rx="3.5" fill="#5D2E85" />
                      <rect x="142" y="54" width="13" height="42" rx="3.5" fill="#EC4899" />

                      {/* Q3 Grouped Bars */}
                      <rect x="216" y="26" width="13" height="70" rx="3.5" fill="#5D2E85" />
                      <rect x="232" y="38" width="13" height="58" rx="3.5" fill="#EC4899" />

                      {/* Q4 Grouped Bars */}
                      <rect x="306" y="10" width="13" height="86" rx="3.5" fill="#5D2E85" />
                      <rect x="322" y="20" width="13" height="76" rx="3.5" fill="#EC4899" />

                      {/* Baseline */}
                      <line x1="10" y1="96" x2="370" y2="96" stroke="#E5E4DE" strokeWidth="1.5" />
                    </svg>

                    {/* Generic Quarter Ticks */}
                    <div className="flex justify-around text-[10px] font-mono text-[#5F5F5A]/70 pt-1.5 border-t border-[#F1F0EA]">
                      <span>Q1</span>
                      <span>Q2</span>
                      <span>Q3</span>
                      <span>Q4</span>
                    </div>
                  </div>
                </div>

                {/* ── CARD B (Front, Offset Down-Left, Overlapping Card A): Restrained Ink Line-Art Card ── */}
                <div className="relative mt-4 sm:-mt-14 w-full sm:w-[78%] lg:w-[76%] rounded-3xl bg-white border-2 border-[#111111] p-5 sm:p-6 shadow-2xl z-10">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DEDED7]">
                    <span className="font-heading font-bold text-xs sm:text-sm text-[#111111]">
                      Engineered Growth Architecture
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#5D2E85]" />
                  </div>

                  {/* Restrained Single-Color Ink-Style Line-Art Illustration */}
                  <div className="h-32 sm:h-36 w-full flex items-center justify-center bg-[#F7F6F2] rounded-2xl p-3 border border-[#DEDED7]">
                    <svg
                      viewBox="0 0 240 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full max-h-32 text-[#111111]"
                    >
                      {/* Base Foundation Axis */}
                      <line x1="20" y1="105" x2="220" y2="105" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

                      {/* Ascending Architectural Step 1 */}
                      <rect x="35" y="75" width="36" height="30" rx="3" stroke="currentColor" strokeWidth="2" fill="white" />
                      <line x1="45" y1="85" x2="61" y2="85" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="45" y1="92" x2="55" y2="92" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

                      {/* Ascending Architectural Step 2 */}
                      <rect x="85" y="55" width="36" height="50" rx="3" stroke="currentColor" strokeWidth="2" fill="white" />
                      <line x1="95" y1="68" x2="111" y2="68" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="95" y1="76" x2="105" y2="76" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

                      {/* Ascending Architectural Step 3 */}
                      <rect x="135" y="32" width="36" height="73" rx="3" stroke="currentColor" strokeWidth="2" fill="white" />
                      <line x1="145" y1="48" x2="161" y2="48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="145" y1="56" x2="155" y2="56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

                      {/* Dynamic Growth Ray / Arrow Cutting Through */}
                      <path
                        d="M30 95 C 75 75, 120 45, 195 18"
                        stroke="#5D2E85"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray="4 4"
                      />
                      <polygon points="202,15 190,17 197,25" fill="#5D2E85" />

                      {/* Pinnacle Beacon Star */}
                      <path
                        d="M 195 48 L 198 40 L 206 37 L 198 34 L 195 26 L 192 34 L 184 37 L 192 40 Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="#FDF2F8"
                      />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-3 text-[11px] text-[#5F5F5A]">
                    <span className="font-medium truncate">Systematic Step-Function Growth</span>
                    <span className="font-mono text-[#5D2E85] font-bold shrink-0">100% Attributed</span>
                  </div>
                </div>

                {/* 
                  [NEEDS REAL STAT FOR FLOATING CHIP]
                  Floating stat chip is omitted until verified Juntoz client telemetry
                  (e.g., confirmed revenue generated or ad spend managed) is officially supplied.
                */}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
