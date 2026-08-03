import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies } from '../data/caseStudies.js';
import ScrollReveal from '../components/ScrollReveal.jsx';
import PageMeta from '../components/PageMeta.jsx';
import CTASection from '../components/CTASection.jsx';
import BalloonHeading from '../components/BalloonHeading.jsx';

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
    <div className="pt-20 md:pt-28 bg-[#050508] text-white overflow-hidden">
      <PageMeta
        title="Marketing for Makeup Artists (MUAs) — Juntoz"
        description="Book more brides and fill your off-season calendar. WhatsApp booking funnels, Instagram Reels growth, and local ads designed exclusively for makeup artists."
        path="/for-makeup-artists"
      />

      {/* ════ HERO SECTION ════ */}
      <section className="relative min-h-[85vh] flex items-center py-12 sm:py-16 md:py-24">
        {/* Glow Effects */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#7B2FFF]/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[5%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#FF3AF2]/10 blur-[130px] pointer-events-none" />

        {/* Diagonal Light Strip */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 text-left space-y-6">
              <ScrollReveal data-reveal="up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF3AF2] animate-pulse" />
                  <span className="font-body font-semibold text-white/85 text-[11px] tracking-widest uppercase">For Elite Artistry</span>
                </div>
              </ScrollReveal>

              <ScrollReveal data-reveal="up" delay={100} className="w-full max-w-[620px]">
                <BalloonHeading src="/bridal_balloon.png" alt="Bridal" className="w-full" />
              </ScrollReveal>

              <ScrollReveal data-reveal="up" delay={200}>
                <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter leading-none text-white/95">
                  Secure High-Value Bookings <br className="hidden sm:block" />
                  <span style={{
                    background: 'linear-gradient(120deg, #FF3AF2 20%, #7B2FFF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>Year-Round.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal data-reveal="up" delay={250}>
                <p className="font-body text-white/60 text-base md:text-lg max-w-xl leading-relaxed">
                  Stop chasing flaky Instagram leads and fighting changing algorithms. We build premium positioning funnels that target high-intent brides and secure high-ticket wedding bookings on autopilot.
                </p>
              </ScrollReveal>

              <ScrollReveal data-reveal="up" delay={300} className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 min-h-[58px] rounded-full font-heading font-black uppercase tracking-widest text-background px-8 overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,58,242,0.3)] bg-[#FF3AF2]"
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 text-sm">Book Free Growth Audit</span>
                  <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </ScrollReveal>
            </div>

            {/* Right Hero Interactive Showcase */}
            <div className="lg:col-span-5 relative flex justify-center">
              <ScrollReveal data-reveal="scale" delay={300} className="relative w-full max-w-[400px]">
                {/* Decorative glowing card element */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3AF2]/10 to-[#7B2FFF]/10 rounded-[2.5rem] blur-2xl -z-10" />
                
                <div className="glass-card p-8 border border-white/10 rounded-[2.5rem] bg-[#0E0E1C]/65 backdrop-blur-xl relative overflow-hidden space-y-6">
                  {/* Card header */}
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="font-heading font-bold text-[11px] tracking-wider text-[#FF3AF2] uppercase">Live Booking Funnel Demo</span>
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/80" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                      <span className="w-2 h-2 rounded-full bg-green-500/80" />
                    </div>
                  </div>

                  {/* Flow Simulation */}
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start p-3 bg-white/5 border border-white/5 rounded-2xl">
                      <span className="text-xl">👩</span>
                      <div>
                        <h4 className="font-heading font-bold text-xs uppercase text-white/90">Bride Searching</h4>
                        <p className="text-[10px] text-white/50">Looks for "Premium HD Bridal Makeup in Mumbai"</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start p-3 bg-white/5 border border-white/5 rounded-2xl">
                      <span className="text-xl">🎯</span>
                      <div>
                        <h4 className="font-heading font-bold text-xs uppercase text-white/90">High-End Ad Shown</h4>
                        <p className="text-[10px] text-white/50">Visual portfolio & testimonial is targeted locally</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start p-3 bg-[#FF3AF2]/10 border border-[#FF3AF2]/20 rounded-2xl">
                      <span className="text-xl">💬</span>
                      <div>
                        <h4 className="font-heading font-bold text-xs uppercase text-[#FF3AF2]">Pre-Qualification Chat</h4>
                        <p className="text-[10px] text-white/60">WhatsApp Bot filters out low-ticket price queries</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats block */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-center">
                    <div>
                      <span className="block font-heading font-black text-2xl text-white">180+</span>
                      <span className="text-[9px] text-white/45 uppercase tracking-widest">Brides Filtered</span>
                    </div>
                    <div>
                      <span className="block font-heading font-black text-2xl text-[#00F5D4]">+40%</span>
                      <span className="text-[9px] text-white/45 uppercase tracking-widest">Booking Rate</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ════ INTERACTIVE REALITY CHECK (PAIN POINTS) ════ */}
      <section className="py-16 sm:py-24 bg-white/[0.01] border-y border-white/5 relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <ScrollReveal className="mb-14 text-center max-w-2xl mx-auto space-y-3">
            <span className="font-heading font-bold tracking-widest text-[#FF3AF2] uppercase text-xs block">
              The Reality Check
            </span>
            <h2 className="font-heading font-black text-white text-3xl sm:text-5xl uppercase tracking-tighter">
              Why Generic Agencies Fail MUAs
            </h2>
            <p className="font-body text-white/50 text-sm">
              Click on each challenge below to reveal the Juntoz Solution.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PAIN_POINTS.map((item, idx) => {
              const isSelected = activePainPoint === item.id;
              return (
                <ScrollReveal key={item.id} delay={idx * 100}>
                  <div
                    onClick={() => setActivePainPoint(isSelected ? null : item.id)}
                    className={`relative p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer h-full select-none flex flex-col justify-between ${
                      isSelected 
                        ? 'border-[#FF3AF2] bg-[#FF3AF2]/5 shadow-[0_0_30px_rgba(255,58,242,0.15)]' 
                        : 'border-white/5 bg-[#0E0E1C]/40 hover:border-white/15'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-4xl">{item.emoji}</span>
                        <motion.span 
                          animate={{ rotate: isSelected ? 180 : 0 }}
                          className="text-xs text-white/40 uppercase tracking-widest font-heading font-bold"
                        >
                          {isSelected ? 'Close' : 'Fix it'}
                        </motion.span>
                      </div>

                      <h3 className="font-heading font-black text-white text-xl uppercase tracking-tight">
                        {item.title}
                      </h3>

                      <p className="font-body text-white/50 text-sm leading-relaxed">
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
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="pt-4 border-t border-white/10"
                          >
                            <span className="block font-heading font-bold text-[10px] tracking-wider text-[#FF3AF2] uppercase mb-1">
                              Our Solution:
                            </span>
                            <p className="font-body text-white/80 text-xs leading-relaxed">
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
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <ScrollReveal className="mb-16 text-center max-w-2xl mx-auto space-y-3">
            <span className="font-heading font-bold tracking-widest text-[#FF3AF2] uppercase text-xs block">
              Execution Plan
            </span>
            <h2 className="font-heading font-black text-white text-3xl sm:text-5xl uppercase tracking-tighter">
              Our Stepped Growth System
            </h2>
            <p className="font-body text-white/50 text-sm">
              We translate your artistic skill into a robust commercial machine. Hover or tap each step.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Interactive Steps List */}
            <div className="lg:col-span-5 space-y-4">
              {MUA_SERVICES.map((service, idx) => {
                const isActive = activeStep === idx;
                return (
                  <ScrollReveal key={service.title} delay={idx * 100}>
                    <div
                      onMouseEnter={() => setActiveStep(idx)}
                      onClick={() => setActiveStep(idx)}
                      className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 items-center ${
                        isActive
                          ? 'border-[#FF3AF2] bg-[#FF3AF2]/10 shadow-[0_0_20px_rgba(255,58,242,0.1)]'
                          : 'border-white/5 bg-[#0E0E1C]/30 hover:bg-[#0E0E1C]/50'
                      }`}
                    >
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-heading font-black text-xs ${
                        isActive ? 'bg-[#FF3AF2] text-background' : 'bg-white/5 text-white/50'
                      }`}>
                        0{idx + 1}
                      </span>
                      <div>
                        <h4 className="font-heading font-bold text-sm uppercase text-white/90">{service.title}</h4>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest">{service.tag}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Right Column: Visualization Card */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-[550px] min-h-[300px] p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-[#0E0E1C] overflow-hidden flex flex-col justify-between">
                {/* Glow behind detail block */}
                <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-[#FF3AF2]/10 blur-[80px] pointer-events-none" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-4xl">{MUA_SERVICES[activeStep].icon}</span>
                        <span className="font-heading font-black text-white/10 text-6xl">0{activeStep + 1}</span>
                      </div>

                      <h3 className="font-heading font-black text-white text-2xl uppercase tracking-tight">
                        {MUA_SERVICES[activeStep].title}
                      </h3>

                      <p className="font-body text-white/60 text-sm leading-relaxed">
                        {MUA_SERVICES[activeStep].description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                      <div>
                        <span className="block text-[10px] text-white/40 uppercase tracking-widest">Target Metric</span>
                        <span className="font-heading font-bold text-sm text-[#00F5D4]">
                          {MUA_SERVICES[activeStep].stat}
                        </span>
                      </div>
                      <span className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-heading font-bold uppercase text-white/50 tracking-wider">
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
      <section className="py-16 sm:py-24 bg-[#0E0E1C]/20 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <ScrollReveal className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <span className="font-heading font-bold tracking-widest text-[#FF3AF2] uppercase text-xs block">
                Proof
              </span>
              <h2 className="font-heading font-black text-white text-3xl sm:text-5xl uppercase tracking-tighter">
                MUA Success Stories
              </h2>
            </div>
            <p className="font-body text-white/50 max-w-xs text-sm">
              We focus strictly on the metrics that pay your bills: premium wedding bookings and workshop signups.
            </p>
          </ScrollReveal>

          <div className="space-y-16">
            {filteredStudies.map((study, idx) => (
              <ScrollReveal key={study.slug} delay={idx * 100}>
                <div className="group flex flex-col lg:flex-row gap-8 lg:gap-16 items-center p-6 sm:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all duration-500 relative overflow-hidden">
                  
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2 h-[260px] sm:h-[350px] lg:h-[420px] rounded-3xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
                    <motion.img 
                      src={study.image}
                      alt={study.clientName}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                      <span className="inline-block px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 font-heading font-bold text-xs uppercase tracking-widest text-white mb-3">
                        {study.industry}
                      </span>
                      <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                        {study.clientName}
                      </h3>
                    </div>
                  </div>

                  {/* Story Section */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 lg:pr-8">
                    <div className="space-y-2">
                      <span className="font-heading font-bold text-xs tracking-[0.2em] uppercase text-[#FF3AF2]">The Problem</span>
                      <p className="font-body text-white/80 text-sm leading-relaxed">
                        {study.problem}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="font-heading font-bold text-xs tracking-[0.2em] uppercase text-[#FF3AF2]">Our Solution</span>
                      <p className="font-body text-white/80 text-sm leading-relaxed">
                        {study.approach}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <span className="font-heading font-bold text-xs tracking-[0.2em] uppercase text-[#00F5D4] mb-2 block">
                        The Result
                      </span>
                      <p className="font-body text-white text-lg leading-relaxed font-semibold">
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
