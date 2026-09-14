import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies } from '../data/caseStudies.js';
import ScrollReveal from '../components/ScrollReveal.jsx';
import PageMeta from '../components/PageMeta.jsx';
import CTASection from '../components/CTASection.jsx';

const WA = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%27m%20a%20Makeup%20Artist%20and%20I%27d%20like%20to%20get%20a%20free%20MUA%20growth%20audit.';

const MUA_SERVICES = [
  {
    title: 'Bridal Season Ad Campaigns',
    description: 'Get your calendar fully booked months before the wedding season starts. High-end visual campaigns targeted at brides searching for premium makeup services in your city.',
    tag: 'Meta & Instagram Ads',
    stat: '3.5x average ad ROI',
    icon: '🔮',
  },
  {
    title: 'Instagram Content & Reels Strategy',
    description: 'Stop fighting algorithms. We direct and package your makeup transformations, bridal profiles, and masterclasses into high-converting short-form Reels.',
    tag: 'Organic Growth',
    stat: '+180% Profile Reach',
    icon: '📱',
  },
  {
    title: 'WhatsApp Booking Funnels',
    description: 'Filter out the price-shoppers who ghost. We build a streamlined WhatsApp funnel that pre-qualifies inquiries and books high-ticket bridal contracts on autopilot.',
    tag: 'Funnel Engineering',
    stat: '90% ghosting reduced',
    icon: '💬',
  },
  {
    title: 'Premium Portfolio Websites',
    description: 'Showcase your artistry with a high-end digital portfolio. Clean, luxury aesthetic designs that position you as a high-ticket artist who commands premium rates.',
    tag: 'Web Design',
    stat: 'Premium positioning',
    icon: '💎',
  }
];

const PAIN_POINTS = [
  {
    id: 1,
    emoji: '🍂',
    title: 'The Off-Season Slump',
    reality: 'Solid income during the wedding season, followed by months of empty calendars.',
    solution: 'We build local campaigns promoting masterclasses, self-grooming workshops, and party makeup to maintain steady cash flow year-round.',
  },
  {
    id: 2,
    emoji: '📱',
    title: 'Instagram Price Trap',
    reality: 'Posting Reels constantly only to compete with hundreds of local artists playing a price undercut game.',
    solution: 'We reposition your brand away from generic Instagram DMs, driving traffic to a high-end landing page that justifies premium bookings.',
  },
  {
    id: 3,
    emoji: '💬',
    title: 'Ghosting on "Rates Please"',
    reality: 'Spending hours sending bridal rate charts in Instagram DMs, only to get ghosted.',
    solution: 'We deploy interactive qualification funnels that filter out casual price-checkers and only present serious leads directly to you.',
  }
];

export default function ForMakeupArtistsPage() {
  const [activePainPoint, setActivePainPoint] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const filteredStudies = caseStudies.filter(
    (study) => study.industry.includes('MUA') || study.industry.includes('Academy')
  );

  return (
    <div className="pt-28 md:pt-36 bg-[#F7F6F2] text-[#111111] overflow-hidden">
      <PageMeta
        title="Marketing & Funnels for Elite Makeup Artists (MUAs) | Juntoz"
        description="We turn elite makeup artists into booked-out luxury brands. Build automated WhatsApp booking pipelines and fill your bridal calendar year-round."
        path="/for-makeup-artists"
      />

      {/* ════ HERO SECTION ════ */}
      <section className="relative min-h-[80vh] flex items-center py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 text-left space-y-6">
              <ScrollReveal data-reveal="up">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DEDED7] bg-white shadow-subtle">
                  <span className="w-2 h-2 rounded-full bg-[#E84A2A]" />
                  <span className="font-body font-bold text-[#5F5F5A] text-[11px] tracking-wider uppercase">
                    Specialist Practice • Juntoz Digital Agency
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal data-reveal="up" delay={100}>
                <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[1.02] text-[#111111] mb-3">
                  Elite Bridal <br />
                  <span className="text-[#E84A2A]">Client Acquisition.</span>
                </h1>
                <p className="font-heading font-extrabold text-xl sm:text-2xl text-[#111111] leading-snug tracking-tight mb-2">
                  Secure High-Value Bookings Year-Round.
                </p>
              </ScrollReveal>

              {/* Specialist Highlights Dock */}
              <ScrollReveal data-reveal="up" delay={180} className="flex flex-wrap gap-2.5 pt-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#DEDED7] shadow-subtle">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E84A2A]" />
                  <span className="font-body text-xs font-bold text-[#111111]">Zero Off-Season Slump</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#DEDED7] shadow-subtle">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E84A2A]" />
                  <span className="font-body text-xs font-bold text-[#111111]">Pre-Qualified WhatsApp Inquiries</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#DEDED7] shadow-subtle">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E84A2A]" />
                  <span className="font-body text-xs font-bold text-[#111111]">Masterclass Funnel Systems</span>
                </div>
              </ScrollReveal>

              <ScrollReveal data-reveal="up" delay={250}>
                <p className="font-body text-[#5F5F5A] text-base md:text-lg max-w-xl leading-relaxed">
                  As a full-service digital marketing agency with specialized depth in the beauty ecosystem, Juntoz helps bridal artists, educators, and creators build premium positioning funnels that target high-intent brides and secure high-ticket wedding bookings on autopilot.
                </p>
              </ScrollReveal>

              <ScrollReveal data-reveal="up" delay={300} className="pt-2 flex flex-col sm:flex-row gap-4">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-heading font-bold uppercase tracking-wider text-white text-xs sm:text-sm bg-[#111111] hover:bg-[#E84A2A] transition-colors duration-200 shadow-sm active:scale-[0.98]"
                >
                  <span>Book Free Growth Audit</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </ScrollReveal>
            </div>

            {/* Right Hero Interactive Showcase */}
            <div className="lg:col-span-5 relative flex justify-center">
              <ScrollReveal data-reveal="scale" delay={300} className="relative w-full max-w-[420px]">
                <div className="p-8 border border-[#DEDED7] rounded-3xl bg-white shadow-card space-y-6">
                  {/* Card header */}
                  <div className="flex justify-between items-center pb-4 border-b border-[#DEDED7]">
                    <span className="font-heading font-bold text-[11px] tracking-wider text-[#E84A2A] uppercase">Live Booking Funnel Demo</span>
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                  </div>

                  {/* Flow Simulation */}
                  <div className="space-y-3.5">
                    <div className="flex gap-3 items-start p-3.5 bg-[#F7F6F2] border border-[#DEDED7] rounded-2xl">
                      <span className="text-xl">👩</span>
                      <div>
                        <h4 className="font-heading font-bold text-xs uppercase text-[#111111]">Bride Searching</h4>
                        <p className="text-xs text-[#5F5F5A]">Looks for "Premium HD Bridal Makeup in Mumbai"</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start p-3.5 bg-[#F7F6F2] border border-[#DEDED7] rounded-2xl">
                      <span className="text-xl">🎯</span>
                      <div>
                        <h4 className="font-heading font-bold text-xs uppercase text-[#111111]">High-End Ad Shown</h4>
                        <p className="text-xs text-[#5F5F5A]">Visual portfolio & testimonial is targeted locally</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start p-3.5 bg-[#FBE9E4] border border-[#E84A2A]/20 rounded-2xl">
                      <span className="text-xl">💬</span>
                      <div>
                        <h4 className="font-heading font-bold text-xs uppercase text-[#E84A2A]">Pre-Qualification Chat</h4>
                        <p className="text-xs text-[#5F5F5A]">WhatsApp Bot filters out low-ticket price queries</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats block */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#DEDED7] text-center">
                    <div>
                      <span className="block font-heading font-black text-2xl text-[#111111]">180+</span>
                      <span className="text-[10px] text-[#5F5F5A] uppercase tracking-wider font-semibold">Brides Filtered</span>
                    </div>
                    <div>
                      <span className="block font-heading font-black text-2xl text-[#287A55]">+40%</span>
                      <span className="text-[10px] text-[#5F5F5A] uppercase tracking-wider font-semibold">Booking Rate</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ════ INTERACTIVE REALITY CHECK (PAIN POINTS) ════ */}
      <section className="py-20 sm:py-28 bg-white border-y border-[#DEDED7] relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <ScrollReveal className="mb-14 text-center max-w-2xl mx-auto space-y-2">
            <span className="font-heading font-bold tracking-wider text-[#E84A2A] uppercase text-xs block">
              The Reality Check
            </span>
            <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-5xl uppercase tracking-tight">
              Why Generic Agencies <span className="text-[#E84A2A]">Fail MUAs</span>
            </h2>
            <p className="font-body text-[#5F5F5A] text-sm sm:text-base">
              Click on each challenge below to reveal the Juntoz Solution.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {PAIN_POINTS.map((item, idx) => {
              const isSelected = activePainPoint === item.id;
              return (
                <ScrollReveal key={item.id} delay={idx * 80}>
                  <div
                    onClick={() => setActivePainPoint(isSelected ? null : item.id)}
                    className={`relative p-8 rounded-3xl border transition-all duration-300 cursor-pointer h-full select-none flex flex-col justify-between ${
                      isSelected 
                        ? 'border-[#E84A2A] bg-[#FBE9E4]/40 shadow-card' 
                        : 'border-[#DEDED7] bg-[#F7F6F2] hover:border-[#111111] hover:shadow-subtle'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-4xl">{item.emoji}</span>
                        <motion.span 
                          animate={{ rotate: isSelected ? 180 : 0 }}
                          className="text-xs text-[#5F5F5A] uppercase tracking-wider font-heading font-bold"
                        >
                          {isSelected ? 'Close' : 'Fix it'}
                        </motion.span>
                      </div>

                      <h3 className="font-heading font-black text-[#111111] text-xl uppercase tracking-tight">
                        {item.title}
                      </h3>

                      <p className="font-body text-[#5F5F5A] text-sm leading-relaxed">
                        {item.reality}
                      </p>
                    </div>

                    <div className="mt-6 overflow-hidden">
                      <AnimatePresence initial={false}>
                        {isSelected && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="pt-4 border-t border-[#DEDED7]"
                          >
                            <span className="block font-heading font-bold text-[10px] tracking-wider text-[#E84A2A] uppercase mb-1">
                              Our Solution:
                            </span>
                            <p className="font-body text-[#111111] text-xs sm:text-sm leading-relaxed">
                              {item.solution}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════ INTERACTIVE GROWTH WORKFLOW (SERVICES) ════ */}
      <section className="py-20 sm:py-28 relative bg-[#F7F6F2]">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <ScrollReveal className="mb-16 text-center max-w-2xl mx-auto space-y-2">
            <span className="font-heading font-bold tracking-wider text-[#E84A2A] uppercase text-xs block">
              Execution Plan
            </span>
            <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-5xl uppercase tracking-tight">
              Our Stepped <span className="text-[#E84A2A]">Growth System</span>
            </h2>
            <p className="font-body text-[#5F5F5A] text-sm sm:text-base">
              We translate your artistic skill into a robust commercial machine. Hover or tap each step.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Interactive Steps List */}
            <div className="lg:col-span-5 space-y-3.5">
              {MUA_SERVICES.map((service, idx) => {
                const isActive = activeStep === idx;
                return (
                  <ScrollReveal key={service.title} delay={idx * 60}>
                    <div
                      onMouseEnter={() => setActiveStep(idx)}
                      onClick={() => setActiveStep(idx)}
                      className={`p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex gap-4 items-center ${
                        isActive
                          ? 'border-[#111111] bg-white shadow-card'
                          : 'border-[#DEDED7] bg-white/70 hover:bg-white'
                      }`}
                    >
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-heading font-black text-xs ${
                        isActive ? 'bg-[#111111] text-white' : 'bg-[#F7F6F2] text-[#5F5F5A]'
                      }`}>
                        0{idx + 1}
                      </span>
                      <div>
                        <h4 className="font-heading font-bold text-sm uppercase text-[#111111]">{service.title}</h4>
                        <p className="text-[10px] text-[#5F5F5A] uppercase tracking-wider font-semibold">{service.tag}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Right Column: Visualization Card */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-[550px] min-h-[320px] p-8 md:p-10 rounded-3xl border border-[#DEDED7] bg-white shadow-card overflow-hidden flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-4xl">{MUA_SERVICES[activeStep].icon}</span>
                        <span className="font-heading font-black text-[#DEDED7] text-6xl">0{activeStep + 1}</span>
                      </div>

                      <h3 className="font-heading font-black text-[#111111] text-2xl uppercase tracking-tight">
                        {MUA_SERVICES[activeStep].title}
                      </h3>

                      <p className="font-body text-[#5F5F5A] text-sm leading-relaxed">
                        {MUA_SERVICES[activeStep].description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[#DEDED7] flex justify-between items-center">
                      <div>
                        <span className="block text-[10px] text-[#5F5F5A] uppercase tracking-wider font-bold">Target Metric</span>
                        <span className="font-heading font-bold text-sm text-[#E84A2A]">
                          {MUA_SERVICES[activeStep].stat}
                        </span>
                      </div>
                      <span className="px-3.5 py-1 rounded-full bg-[#F7F6F2] border border-[#DEDED7] text-[10px] font-heading font-bold uppercase text-[#5F5F5A] tracking-wider">
                        {MUA_SERVICES[activeStep].tag}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ CASE STUDIES ════ */}
      <section className="py-20 sm:py-28 bg-white border-t border-[#DEDED7]">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <ScrollReveal className="mb-16 border-b border-[#DEDED7] pb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <span className="font-heading font-bold tracking-wider text-[#E84A2A] uppercase text-xs block">
                Proof
              </span>
              <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-5xl uppercase tracking-tight">
                MUA <span className="text-[#E84A2A]">Success Stories</span>
              </h2>
            </div>
            <p className="font-body text-[#5F5F5A] max-w-xs text-sm sm:text-base leading-relaxed">
              We focus strictly on the metrics that pay your bills: premium wedding bookings and workshop signups.
            </p>
          </ScrollReveal>

          <div className="space-y-12">
            {filteredStudies.map((study, idx) => (
              <ScrollReveal key={study.slug} delay={idx * 80}>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center p-6 sm:p-10 rounded-3xl bg-[#F7F6F2] border border-[#DEDED7] shadow-subtle hover:shadow-card transition-all duration-300">
                  
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2 h-[260px] sm:h-[350px] rounded-2xl overflow-hidden relative border border-[#DEDED7]">
                    <img 
                      src={study.image}
                      alt={study.clientName}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#DEDED7] font-heading font-bold text-[10px] uppercase tracking-wider text-[#111111] mb-2 shadow-sm">
                        {study.industry}
                      </span>
                      <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase tracking-tight drop-shadow-md">
                        {study.clientName}
                      </h3>
                    </div>
                  </div>

                  {/* Story Section */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-5 lg:pr-6">
                    <div className="space-y-1.5">
                      <span className="font-heading font-bold text-xs tracking-wider uppercase text-[#E84A2A]">The Problem</span>
                      <p className="font-body text-[#5F5F5A] text-sm leading-relaxed">
                        {study.problem}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <span className="font-heading font-bold text-xs tracking-wider uppercase text-[#111111]">Our Solution</span>
                      <p className="font-body text-[#5F5F5A] text-sm leading-relaxed">
                        {study.approach}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#DEDED7]">
                      <span className="font-heading font-bold text-xs tracking-wider uppercase text-[#287A55] mb-1 block">
                        The Result
                      </span>
                      <p className="font-body text-[#111111] text-base sm:text-lg leading-relaxed font-bold">
                        {study.result}
                      </p>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════ CTA SECTION ════ */}
      <CTASection />
    </div>
  );
}
