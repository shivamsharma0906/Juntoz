import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const CHECKLIST_ITEMS = [
  'Direct & Transparent Stakeholder Communication',
  'Commercial Milestone & Revenue Goal Definition',
  'Audience Intent & Regional Competitor Mapping',
  'High-Value Customer Segment Identification',
  'Bespoke Acquisition & Creative Strategy Per Client',
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-10 sm:py-16 md:py-24 lg:py-32 bg-[#F7F6F2] relative overflow-hidden border-b border-[#DEDED7]/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* ════ LEFT COLUMN: Stylized Product & Dashboard Mockup Visual ════ */}
          <div className="lg:col-span-6 xl:col-span-6">
            <ScrollReveal data-reveal="up" className="relative w-full max-w-[560px] mx-auto lg:max-w-none">
              {/* Decorative Angle Marks / Doodles (Desktop Only) */}
              <div className="hidden lg:block absolute -top-8 -left-6 text-[#111111]/20 pointer-events-none" aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M4 16 L16 4" />
                  <path d="M12 24 L24 12" />
                  <path d="M20 32 L32 20" />
                </svg>
              </div>

              <div className="relative">
                {/* Panel A: Main Analytics & Campaign Telemetry Frame */}
                <div className="rounded-3xl bg-white border border-[#DEDED7] p-5 sm:p-7 shadow-card relative z-10">
                  {/* Top Window Chrome Bar */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#DEDED7]">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#DEDED7]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#DEDED7]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#DEDED7]" />
                      <span className="ml-2 font-mono text-[10px] sm:text-[11px] font-bold text-[#5F5F5A] uppercase tracking-wider">
                        Campaign Telemetry Console
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#DEDED7] text-[10px] font-bold text-[#287A55]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#287A55] animate-pulse" />
                      Live Tracking
                    </div>
                  </div>

                  {/* Illustrative Placeholder Metric Bars (Brand Purple #5D2E85) */}
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-5">
                    <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-[#DEDED7]">
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#5F5F5A] block mb-1">
                        Campaign Performance
                      </span>
                      <div className="h-3.5 w-14 sm:w-16 bg-[#5D2E85]/20 rounded-md mb-1.5" />
                      <div className="h-2 w-9 sm:w-10 bg-[#DEDED7] rounded" />
                    </div>
                    <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-[#DEDED7]">
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#5F5F5A] block mb-1">
                        Engagement
                      </span>
                      <div className="h-3.5 w-12 sm:w-14 bg-[#EC4899]/20 rounded-md mb-1.5" />
                      <div className="h-2 w-10 sm:w-12 bg-[#DEDED7] rounded" />
                    </div>
                    <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-[#DEDED7]">
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#5F5F5A] block mb-1">
                        Conversion Rate
                      </span>
                      <div className="h-3.5 w-11 sm:w-12 bg-[#5D2E85]/30 rounded-md mb-1.5" />
                      <div className="h-2 w-7 sm:w-8 bg-[#DEDED7] rounded" />
                    </div>
                  </div>

                  {/* Illustrative Line Chart */}
                  <div className="p-4 rounded-2xl bg-white border border-[#DEDED7]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-3 text-xs">
                      <span className="font-heading font-bold text-[#111111]">Revenue Growth</span>
                      <div className="flex items-center gap-3 text-[10px] font-semibold text-[#5F5F5A]">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#5D2E85]" /> Paid
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#EC4899]" /> Organic
                        </span>
                      </div>
                    </div>

                    {/* Static SVG Trajectory Chart */}
                    <div className="h-24 sm:h-28 w-full relative">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
                        <line x1="0" y1="25" x2="400" y2="25" stroke="#F1F0EA" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1="0" y1="50" x2="400" y2="50" stroke="#F1F0EA" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1="0" y1="75" x2="400" y2="75" stroke="#F1F0EA" strokeWidth="1" strokeDasharray="3 3" />

                        {/* Series 2: Organic (Warm Pink Accent) */}
                        <path
                          d="M0 82 Q 80 72, 160 56 T 320 32 T 400 16"
                          fill="none"
                          stroke="#EC4899"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />

                        {/* Series 1: Paid (Brand Purple #5D2E85) */}
                        <path
                          d="M0 92 Q 90 80, 180 50 T 320 22 T 400 6"
                          fill="none"
                          stroke="#5D2E85"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    {/* Generic Month Ticks (Jul-Dec Range) */}
                    <div className="flex justify-between text-[10px] font-mono text-[#5F5F5A]/70 pt-2 border-t border-[#F1F0EA] mt-1">
                      <span>Jul</span>
                      <span>Aug</span>
                      <span>Sep</span>
                      <span>Oct</span>
                      <span>Nov</span>
                      <span>Dec</span>
                    </div>
                  </div>
                </div>

                {/* Panel B: Floating Phone / Client Conversation Mockup (Overlapping Frame) */}
                <div className="sm:absolute -bottom-6 -right-4 sm:-right-6 w-full sm:w-[260px] md:w-[280px] rounded-3xl bg-white border-2 border-[#111111] p-4 shadow-2xl z-20 mt-4 sm:mt-0">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#DEDED7]">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#5D2E85] flex items-center justify-center text-white text-[10px] font-bold">
                        JZ
                      </div>
                      <div>
                        <div className="h-2.5 w-16 bg-[#111111] rounded" />
                        <div className="h-1.5 w-10 bg-[#287A55] rounded mt-1" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#5D2E85]">Direct Inbound</span>
                  </div>

                  {/* Chat Bubbles in Purple & Warm Pink Accent Palette */}
                  <div className="space-y-2.5">
                    {/* Incoming Inquiry Bubble (Warm Pink Accent System) */}
                    <div className="flex gap-2">
                      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-[#FDF2F8] border border-[#F472B6]/30 p-2.5 space-y-1.5">
                        <div className="h-2 w-28 bg-[#9D174D]/35 rounded" />
                        <div className="h-2 w-20 bg-[#9D174D]/20 rounded" />
                      </div>
                    </div>

                    {/* Outgoing Response Bubble (Brand Purple #5D2E85) */}
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#5D2E85] p-2.5 space-y-1.5 shadow-sm">
                        <div className="h-2 w-24 bg-white/90 rounded" />
                        <div className="h-2 w-16 bg-white/60 rounded" />
                      </div>
                    </div>

                    {/* Consultation Booked Status Pill */}
                    <div className="p-2 rounded-xl bg-[#FDF2F8] border border-[#F472B6]/30 flex items-center justify-between text-[10px]">
                      <span className="font-bold text-[#9D174D]">✓ Consultation Booked</span>
                      <span className="text-[#5F5F5A] font-mono">&lt; 15m</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ════ RIGHT COLUMN: "What We Do" Editorial Copy & Checklist ════ */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-7">
            <ScrollReveal data-reveal="up">
              {/* Eyebrow Label - Brand Purple #5D2E85 */}
              <span className="font-heading font-black text-xs uppercase tracking-widest text-[#5D2E85] block mb-3">
                WHAT DO WE DO?
              </span>

              {/* Serif Display Headline (2 Lines with Hand-Drawn Underline in Brand Purple #5D2E85) */}
              <h2
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="text-3xl sm:text-4xl md:text-5xl leading-[1.18] sm:leading-[1.14] text-[#111111] font-normal mb-5"
              >
                <span className="block">High-Ticket Growth Begins</span>
                <span className="block mt-1">
                  With A Strategic{' '}
                  <span className="relative inline-block whitespace-nowrap">
                    <span>Execution Blueprint.</span>
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
                We architect custom acquisition systems that capture high-intent demand across search and social platforms with end-to-end telemetry.
              </p>

              {/* Desktop Full Editorial Paragraph */}
              <p className="hidden sm:block font-body text-[#5F5F5A] text-sm sm:text-base leading-[1.75] mb-6">
                At Juntoz, we bridge the gap between creative visual presence and predictable commercial returns. Most businesses struggle not from a lack of talent, but from fragmented marketing that leaks potential clients at every touchpoint. We architect custom end-to-end acquisition systems that capture high-intent demand across search and social platforms. Every campaign is backed by real-time conversion telemetry, continuous creative optimization, and direct client routing to eliminate booking friction. This disciplined approach transforms marketing from an unpredictable expense into a compounding revenue engine.
              </p>
            </ScrollReveal>

            {/* Checklist of 5 Items with Brand Purple #5D2E85 Checkmarks */}
            <ScrollReveal data-reveal="up" delay={100}>
              <ul className="space-y-3.5 mb-7">
                {CHECKLIST_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#5D2E85]/15 text-[#5D2E85] flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-heading font-semibold text-xs sm:text-sm text-[#111111]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Closing Enquiry Link with Sliding Arrow in Brand Purple #5D2E85 */}
            <ScrollReveal data-reveal="up" delay={160}>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 text-sm sm:text-base font-heading font-bold text-[#5D2E85] hover:text-[#4C266D] transition-colors"
                >
                  <span className="underline underline-offset-4 decoration-2 decoration-[#5D2E85]/40 group-hover:decoration-[#5D2E85] transition-colors">
                    Want to learn more? Enquire Now
                  </span>
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
        </div>
      </div>
    </section>
  );
}
