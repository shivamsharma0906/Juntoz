import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const COMPARISON_ROWS = [
  {
    category: 'Team & Leadership',
    title: 'Who Works On Your Account',
    juntoz: {
      headline: 'Dedicated Senior Growth Team',
      desc: 'Hands-on senior media buyers & production crew, with direct strategy oversight from Sujal & Saloni Mehta.',
    },
    traditional: {
      headline: 'Pitched by Seniors, Run by Juniors',
      desc: 'Account is frequently handed off to junior coordinators or rotating interns once the contract is signed.',
    },
    inHouse: {
      headline: 'Single Individual’s Skill Set',
      desc: 'Limited to what one person knows; no cross-channel redundancy when ad networks change.',
    },
    freelancer: {
      headline: 'Solo Operator Juggling Clients',
      desc: 'One person balancing 8+ accounts with no backup, quality assurance, or dedicated team support.',
    },
  },
  {
    category: 'Execution Scope',
    title: 'Full-Funnel Scope & Production',
    juntoz: {
      headline: 'Synchronized Full-Funnel Engine',
      desc: 'Meta & Google Ads, Local GMB 3-Pack, 4K iPhone/DSLR video shoots, and automated WhatsApp CRM.',
    },
    traditional: {
      headline: 'Fragmented & Outsourced',
      desc: 'Video production and landing pages are heavily outsourced or billed as expensive surprise add-ons.',
    },
    inHouse: {
      headline: 'Narrow Individual Scope',
      desc: 'A copywriter cannot edit kinetic reels, and a media buyer cannot build technical SEO architectures.',
    },
    freelancer: {
      headline: 'Isolated Task Execution',
      desc: 'Usually handles only graphic posts OR basic boosts; lacks cohesive commercial full-funnel strategy.',
    },
  },
  {
    category: 'Industry Specialism',
    title: 'High-Ticket & Aesthetic Nuance',
    juntoz: {
      headline: 'Deep Specialized Playbooks',
      desc: 'Proven track record scaling bridal MUAs, aesthetic clinics, salons, academies, and 36 vertical playbooks.',
    },
    traditional: {
      headline: 'Generic Cookie-Cutter Templates',
      desc: 'One-size-fits-all playbooks with zero appreciation for luxury aesthetics or bridal consumer psychology.',
    },
    inHouse: {
      headline: 'Steep Learning Curve',
      desc: 'Requires 6+ months of expensive trial-and-error at your direct expense to discover what actually works.',
    },
    freelancer: {
      headline: 'Inconsistent Aesthetic Taste',
      desc: 'Rarely understands premium luxury standards, high-converting copy pacing, or client buying intent.',
    },
  },
  {
    category: 'Commercial Terms',
    title: 'Pricing & Contract Flexibility',
    juntoz: {
      headline: 'Transparent Retainers, Zero Lock-Ins',
      desc: 'Predictable flat fees tied to commercial milestones. Month-to-month flexibility with zero hostage contracts.',
    },
    traditional: {
      headline: 'Rigid 6–12 Month Lock-Ins',
      desc: 'Strict multi-quarter commitments, opaque percentage-of-spend markups, and vanity metrics over ROI.',
    },
    inHouse: {
      headline: 'Heavy Fixed Overhead',
      desc: 'Fixed salary (₹60k–₹1.2L/mo) plus employer PF, benefits, hardware, software licenses, and severance risk.',
    },
    freelancer: {
      headline: 'Unpredictable Hourly / Gig Fees',
      desc: 'Hourly rates with no commercial accountability, variable billing, or sudden project abandonment.',
    },
  },
  {
    category: 'Data & Asset Control',
    title: 'Ownership of Accounts & Assets',
    juntoz: {
      headline: '100% Client Ownership Forever',
      desc: 'All Meta ad accounts, Google Ads, pixels, customer lists, and raw 4K shoots remain permanently yours.',
    },
    traditional: {
      headline: 'Held Inside Agency Accounts',
      desc: 'Often run under agency-owned ad accounts, holding historical pixel learning hostage if you depart.',
    },
    inHouse: {
      headline: 'Yours, but Vulnerable to Turnover',
      desc: 'Legally yours, but passwords, tracking pixels, and creative files are often lost when an employee leaves.',
    },
    freelancer: {
      headline: 'Scattered Across Personal Drives',
      desc: 'Assets scattered across personal Google Drives, personal laptops, or lost across unorganized chat threads.',
    },
  },
  {
    category: 'Speed & Optimization',
    title: 'Lead Turnaround & Telemetry',
    juntoz: {
      headline: 'Real-Time WhatsApp Automation',
      desc: 'Sub-60s lead notification triage, live campaign telemetry, and rapid 24–48h creative testing iterations.',
    },
    traditional: {
      headline: 'Slow 5-Day Email Ticketing Loops',
      desc: 'Delayed communication loops and retrospective monthly PDF reports after ad budgets are already spent.',
    },
    inHouse: {
      headline: 'Single-Point Bottlenecks',
      desc: 'Operations grind to a halt whenever they are on leave, overwhelmed with admin, or off sick.',
    },
    freelancer: {
      headline: 'Unpredictable Response Times',
      desc: 'Variable turnaround; frequently becomes unavailable during exams, weddings, or personal vacations.',
    },
  },
];

const ALTERNATIVES = [
  { id: 'traditional', label: 'Traditional Agency', tag: 'Legacy Model' },
  { id: 'inHouse', label: 'In-House Hire', tag: 'High Overhead' },
  { id: 'freelancer', label: 'Solo Freelancer', tag: 'Single Operator' },
];

export default function ComparisonMatrix() {
  const [activeMobileAlt, setActiveMobileAlt] = useState('traditional');

  return (
    <section id="comparison-matrix" className="py-14 sm:py-20 md:py-28 lg:py-32 bg-[#F7F6F2] relative overflow-hidden border-b border-[#DEDED7]/70">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#5D2E85]/6 rounded-full blur-[130px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#5D2E85]/4 rounded-full blur-[110px] pointer-events-none -z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1400px] relative z-10">
        
        {/* ════ SECTION HEADER ════ */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
          <ScrollReveal data-reveal="up">
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#5F5F5A] block mb-3">
              HONEST AGENCY BENCHMARK
            </span>

            <h2
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] text-[#111111] mb-4"
            >
              <span className="block mb-1">Why High-Performing Brands Choose</span>
              <span className="block">
                Juntoz Over{' '}
                <span className="relative inline-block whitespace-nowrap">
                  <span>The Alternatives</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full overflow-visible pointer-events-none text-[#5D2E85]"
                    height="12"
                    viewBox="0 0 260 14"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9 C 60 3, 170 12, 258 4"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </span>
            </h2>

            <p className="font-body text-[#5F5F5A] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Every operational model has trade-offs. Here is how Juntoz compares side-by-side with traditional digital marketing agencies, in-house hires, and solo freelancers.
            </p>
          </ScrollReveal>
        </div>

        {/* ════ DESKTOP & TABLET MATRIX VIEW (lg+) ════ */}
        <ScrollReveal data-reveal="up" delay={80} className="hidden lg:block">
          <div className="rounded-3xl bg-white border border-[#DEDED7] shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse table-fixed">
                <thead>
                  <tr className="border-b border-[#DEDED7]">
                    {/* Column 1: Evaluation Dimension */}
                    <th className="w-[20%] p-5 sm:p-6 bg-[#FAFAF8] text-[11px] font-heading font-extrabold uppercase tracking-wider text-[#5F5F5A]">
                      Strategic Dimension
                    </th>

                    {/* Column 2: JUNTOZ (Highlighted Column) */}
                    <th className="w-[26%] p-5 sm:p-6 bg-[#F1E7F9]/40 border-x-2 border-[#5D2E85]/20 relative">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[#5D2E85] text-base">✦</span>
                          <span className="font-heading font-black text-base text-[#5D2E85] tracking-wider">
                            JUNTOZ
                          </span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[9px] font-heading font-extrabold uppercase tracking-wider bg-[#5D2E85] text-white whitespace-nowrap shadow-xs">
                          OUR ADVANTAGE
                        </span>
                      </div>
                    </th>

                    {/* Column 3: Traditional Agency */}
                    <th className="w-[18%] p-5 sm:p-6 bg-white text-[11px] font-heading font-bold uppercase tracking-wider text-[#111111]">
                      Traditional Agency
                    </th>

                    {/* Column 4: In-House Hire */}
                    <th className="w-[18%] p-5 sm:p-6 bg-white text-[11px] font-heading font-bold uppercase tracking-wider text-[#111111]">
                      In-House Hire
                    </th>

                    {/* Column 5: Freelancer */}
                    <th className="w-[18%] p-5 sm:p-6 bg-white text-[11px] font-heading font-bold uppercase tracking-wider text-[#111111]">
                      Solo Freelancer
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#DEDED7]/80">
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.title} className="hover:bg-[#F7F6F2]/50 transition-colors group">
                      
                      {/* Evaluation Category & Title */}
                      <td className="p-5 sm:p-6 bg-[#FAFAF8]/70 align-top">
                        <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#5D2E85] block mb-1">
                          {row.category}
                        </span>
                        <span className="font-heading font-black text-xs sm:text-[13px] text-[#111111] leading-snug block">
                          {row.title}
                        </span>
                      </td>

                      {/* JUNTOZ Value (Highlighted Column) */}
                      <td className="p-5 sm:p-6 bg-[#F1E7F9]/30 border-x-2 border-[#5D2E85]/20 align-top relative">
                        <div className="space-y-1.5">
                          <div className="flex items-start gap-2">
                            <span className="inline-flex w-4 h-4 rounded-full bg-[#5D2E85] text-white items-center justify-center text-[10px] shrink-0 mt-0.5 shadow-xs font-bold">
                              ✓
                            </span>
                            <span className="font-heading font-bold text-xs sm:text-[13px] text-[#111111] leading-snug">
                              {row.juntoz.headline}
                            </span>
                          </div>
                          <p className="font-body text-xs text-[#5F5F5A] pl-6 leading-relaxed">
                            {row.juntoz.desc}
                          </p>
                        </div>
                      </td>

                      {/* Traditional Agency */}
                      <td className="p-5 sm:p-6 bg-white align-top">
                        <div className="space-y-1">
                          <span className="font-heading font-semibold text-xs text-[#111111] leading-snug block">
                            {row.traditional.headline}
                          </span>
                          <p className="font-body text-[11.5px] text-[#5F5F5A] leading-relaxed">
                            {row.traditional.desc}
                          </p>
                        </div>
                      </td>

                      {/* In-House Hire */}
                      <td className="p-5 sm:p-6 bg-white align-top">
                        <div className="space-y-1">
                          <span className="font-heading font-semibold text-xs text-[#111111] leading-snug block">
                            {row.inHouse.headline}
                          </span>
                          <p className="font-body text-[11.5px] text-[#5F5F5A] leading-relaxed">
                            {row.inHouse.desc}
                          </p>
                        </div>
                      </td>

                      {/* Solo Freelancer */}
                      <td className="p-5 sm:p-6 bg-white align-top">
                        <div className="space-y-1">
                          <span className="font-heading font-semibold text-xs text-[#111111] leading-snug block">
                            {row.freelancer.headline}
                          </span>
                          <p className="font-body text-[11.5px] text-[#5F5F5A] leading-relaxed">
                            {row.freelancer.desc}
                          </p>
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* ════ MOBILE RESPONSIVE COMPARISON VIEW (<lg) ════ */}
        <div className="lg:hidden">
          <ScrollReveal data-reveal="up" delay={80}>
            {/* Mobile Alternative Switcher Tabs */}
            <div className="text-center mb-6">
              <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#5F5F5A] block mb-2.5">
                Compare Juntoz Directly With:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {ALTERNATIVES.map((alt) => (
                  <button
                    key={alt.id}
                    type="button"
                    onClick={() => setActiveMobileAlt(alt.id)}
                    className={`px-3.5 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      activeMobileAlt === alt.id
                        ? 'bg-[#111111] text-white shadow-card scale-105'
                        : 'bg-white border border-[#DEDED7] text-[#5F5F5A]'
                    }`}
                  >
                    <span>{alt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Comparative Cards Stack */}
            <div className="space-y-4">
              {COMPARISON_ROWS.map((row) => (
                <div
                  key={row.title}
                  className="rounded-2xl bg-white border border-[#DEDED7] p-5 shadow-subtle space-y-4"
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-[#DEDED7]/80 pb-2.5">
                    <div>
                      <span className="text-[10px] font-heading font-extrabold uppercase tracking-wider text-[#5D2E85] block">
                        {row.category}
                      </span>
                      <h4 className="font-heading font-black text-sm text-[#111111]">
                        {row.title}
                      </h4>
                    </div>
                  </div>

                  {/* Juntoz Advantage Card Block */}
                  <div className="p-3.5 rounded-xl bg-[#F1E7F9]/50 border border-[#5D2E85]/20 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-black text-xs text-[#5D2E85] tracking-wider">
                        ✦ JUNTOZ ADVANTAGE
                      </span>
                      <span className="inline-flex w-4 h-4 rounded-full bg-[#5D2E85] text-white items-center justify-center text-[9px] font-bold">
                        ✓
                      </span>
                    </div>
                    <p className="font-heading font-bold text-xs text-[#111111]">
                      {row.juntoz.headline}
                    </p>
                    <p className="font-body text-[11px] text-[#5F5F5A] leading-relaxed">
                      {row.juntoz.desc}
                    </p>
                  </div>

                  {/* Selected Alternative Card Block */}
                  <div className="p-3.5 rounded-xl bg-[#FAFAF8] border border-[#DEDED7] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-bold text-xs text-[#5F5F5A] uppercase tracking-wider">
                        {ALTERNATIVES.find((a) => a.id === activeMobileAlt)?.label}
                      </span>
                      <span className="inline-flex w-4 h-4 rounded-full bg-[#DEDED7] text-[#5F5F5A] items-center justify-center text-[9px]">
                        ✕
                      </span>
                    </div>
                    <p className="font-heading font-semibold text-xs text-[#111111]">
                      {row[activeMobileAlt].headline}
                    </p>
                    <p className="font-body text-[11px] text-[#5F5F5A] leading-relaxed">
                      {row[activeMobileAlt].desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ════ BOTTOM CONVERSION BANNER ════ */}
        <ScrollReveal data-reveal="up" delay={120} className="mt-10 sm:mt-14">
          <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#111111] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-card relative overflow-hidden">
            {/* Ambient decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D2E85]/30 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-2 text-center md:text-left relative z-10">
              <span className="text-[11px] font-heading font-extrabold uppercase tracking-widest text-[#F1E7F9] block">
                ✦ ZERO VANITY METRICS · 100% COMMERCIAL ROI
              </span>
              <h3 className="font-heading font-black text-xl sm:text-2xl md:text-3xl text-white leading-tight">
                Ready for growth without the typical agency trade-offs?
              </h3>
              <p className="font-body text-xs sm:text-sm text-white/70 max-w-xl leading-relaxed">
                Book a direct strategy consultation with Sujal &amp; Saloni Mehta to map out a bespoke acquisition and branding engine for your business.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#5D2E85] hover:bg-white hover:text-[#111111] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-float shrink-0 active:scale-95 relative z-10"
            >
              <span>SCHEDULE A STRATEGY CONSULTATION</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5 shrink-0"
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
    </section>
  );
}
