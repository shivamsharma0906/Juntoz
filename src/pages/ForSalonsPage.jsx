import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies } from '../data/caseStudies.js';
import ScrollReveal from '../components/ScrollReveal.jsx';
import PageMeta from '../components/PageMeta.jsx';
import CTASection from '../components/CTASection.jsx';

const WA = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20run%20a%20salon%20and%20I%27d%20like%20to%20get%20a%20free%20salon%20growth%20audit.';

const SALON_SERVICES = [
  {
    title: 'Hyper-Local SEO & Google Maps',
    description: 'Ensure your salon is the #1 search result when local clients search for "hair salons near me" or specific skin/hair treatments. Maximize organic local walk-ins.',
    tag: 'Local Domination',
    stat: 'Top 3 ranking on Maps',
    icon: '📍',
  },
  {
    title: 'Weekday Booking Campaigns',
    description: 'Stop suffering from dead Tuesdays and Wednesdays. We run geotargeted social ad campaigns promoting weekday-only services and hair/beauty packages.',
    tag: 'Capacity Optimization',
    stat: '+35% Weekday Bookings',
    icon: '📅',
  },
  {
    title: 'Retention & WhatsApp Loyalty Funnels',
    description: 'Stop spending to acquire clients who visit once and never return. We configure automated WhatsApp feedback and retention funnels that prompt reviews and re-bookings.',
    tag: 'Retention Engineering',
    stat: '42% returning client rate',
    icon: '🔄',
  },
  {
    title: 'Targeted Instagram Location Ads',
    description: 'Target high-LTV clients in specific premium pin codes around your salon location. Show ads that showcase your premium services, reviews, and styling talent.',
    tag: 'Location Targeting',
    stat: 'Precision local outreach',
    icon: '🎯',
  }
];

const PAIN_POINTS = [
  {
    id: 1,
    emoji: '📅',
    title: 'The Weekday Dead Zone',
    reality: 'Your stylists are booked solid on weekends, but sit idle on Tuesdays and Wednesdays.',
    solution: 'We design geotargeted micro-campaigns promoting high-margin treatments (colors, facials) on quiet weekdays, optimizing your capacity.',
  },
  {
    id: 2,
    emoji: '📍',
    title: 'Invisible in Local Search',
    reality: 'When clients search for "best balayage near me" within 3km, your competitors capture the bookings.',
    solution: 'We optimize your Google Maps positioning and local SEO, putting your salon in the Local 3-Pack so ready-to-book clients find you first.',
  },
  {
    id: 3,
    emoji: '💸',
    title: 'The Coupon Hunter Trap',
    reality: 'Paying third-party aggregators high commissions for bargain hunters who never return.',
    solution: 'We establish a direct-to-consumer loyalty funnel via WhatsApp, building direct client relationships and cutting out middleman fees.',
  }
];

export default function ForSalonsPage() {
  const [activePainPoint, setActivePainPoint] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const filteredStudies = caseStudies.filter(
    (study) => study.industry.includes('Salon') || study.industry.includes('Ecommerce')
  );

  return (
    <div className="pt-28 md:pt-36 bg-[#F7F6F2] text-[#111111] overflow-hidden">
      <PageMeta
        title="Marketing & SEO for Hair & Beauty Salons | Juntoz"
        description="Fill dead weekday chairs and drive consistent local walk-ins. Dominate local Google maps, run high-converting search ads, and automate customer reviews."
        path="/for-salons"
      />

      {/* ════ HERO SECTION ════ */}
      <section className="relative min-h-[80vh] flex items-center py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 text-left space-y-6">
              <ScrollReveal data-reveal="up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DEDED7] bg-white text-[#5F5F5A] text-xs font-semibold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#5D2E85]" />
                  <span>Specialist Practice • Juntoz Digital Agency</span>
                </div>
              </ScrollReveal>

              <ScrollReveal data-reveal="up" delay={100}>
                <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#111111] leading-[1.02] mb-3">
                  Salon &amp; Clinic <br />
                  <span className="text-[#5D2E85]">Growth Engine.</span>
                </h1>
                <p className="font-heading font-extrabold text-xl sm:text-2xl text-[#111111] leading-snug tracking-tight mb-2">
                  Pack Your Styling Chairs Every Single Day.
                </p>
              </ScrollReveal>

              {/* Local growth badges dock */}
              <ScrollReveal data-reveal="up" delay={180} className="flex flex-wrap gap-2.5 pt-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#DEDED7] shadow-subtle">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#287A55]" />
                  <span className="font-body text-xs font-bold text-[#111111]">Google Maps 3-Pack Rank #1</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#DEDED7] shadow-subtle">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5D2E85]" />
                  <span className="font-body text-xs font-bold text-[#111111]">Hyper-Local Pin-Code Ads</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#DEDED7] shadow-subtle">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5D2E85]" />
                  <span className="font-body text-xs font-bold text-[#111111]">Automated Rebooking Workflows</span>
                </div>
              </ScrollReveal>

              <ScrollReveal data-reveal="up" delay={250}>
                <p className="font-body text-[#5F5F5A] text-base md:text-lg max-w-xl leading-relaxed">
                  As a full-service digital agency with specialized local growth expertise, Juntoz engineers automated local search, Google Business Profile dominance, and customer retention systems specifically designed to scale salon and clinic revenue.
                </p>
              </ScrollReveal>

              <ScrollReveal data-reveal="up" delay={300} className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 min-h-[54px] rounded-full font-heading font-bold uppercase tracking-widest text-xs px-8 bg-[#111111] text-white hover:bg-[#5D2E85] transition-all duration-300 shadow-sm"
                >
                  <span>Book Free Salon Audit</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </ScrollReveal>
            </div>

            {/* Right Hero Interactive Showcase */}
            <div className="lg:col-span-5 relative flex justify-center">
              <ScrollReveal data-reveal="scale" delay={300} className="relative w-full max-w-[420px]">
                <div className="p-8 border border-[#DEDED7] rounded-3xl bg-white shadow-card relative overflow-hidden space-y-6">
                  {/* Card header */}
                  <div className="flex justify-between items-center pb-4 border-b border-[#DEDED7]">
                    <span className="font-heading font-bold text-xs tracking-wider text-[#5D2E85] uppercase">Live SEO & Maps Dominance</span>
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#111111]/20" />
                      <span className="w-2 h-2 rounded-full bg-[#111111]/20" />
                      <span className="w-2 h-2 rounded-full bg-[#287A55]" />
                    </div>
                  </div>

                  {/* Flow Simulation */}
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start p-3.5 bg-[#F7F6F2] border border-[#DEDED7] rounded-2xl">
                      <span className="text-xl">🔍</span>
                      <div>
                        <h4 className="font-heading font-bold text-xs uppercase text-[#111111]">Local Treatment Search</h4>
                        <p className="text-[11px] text-[#5F5F5A]">"Best balayage near me" or "skin clinic local"</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start p-3.5 bg-[#F1E7F9] border border-[#5D2E85]/30 rounded-2xl">
                      <span className="text-xl">🏆</span>
                      <div>
                        <h4 className="font-heading font-bold text-xs uppercase text-[#5D2E85]">Map 3-Pack Dominance</h4>
                        <p className="text-[11px] text-[#5F5F5A]">Your salon ranks #1 with photos & active reviews</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start p-3.5 bg-[#F7F6F2] border border-[#DEDED7] rounded-2xl">
                      <span className="text-xl">📅</span>
                      <div>
                        <h4 className="font-heading font-bold text-xs uppercase text-[#111111]">Direct Booking Funnel</h4>
                        <p className="text-[11px] text-[#5F5F5A]">Auto-routes client to booking page directly</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats block */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#DEDED7] text-center">
                    <div>
                      <span className="block font-heading font-black text-2xl text-[#111111]">4.8★</span>
                      <span className="text-[10px] text-[#5F5F5A] uppercase tracking-wider font-medium">Average Google Score</span>
                    </div>
                    <div>
                      <span className="block font-heading font-black text-2xl text-[#287A55]">2.4x</span>
                      <span className="text-[10px] text-[#5F5F5A] uppercase tracking-wider font-medium">LTV Increase</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ════ INTERACTIVE REALITY CHECK (PAIN POINTS) ════ */}
      <section className="py-20 md:py-28 bg-white border-y border-[#DEDED7] relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <ScrollReveal className="mb-14 text-center max-w-2xl mx-auto space-y-3">
            <span className="font-heading font-bold tracking-widest text-[#5D2E85] uppercase text-xs block">
              The Reality Check
            </span>
            <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-5xl uppercase tracking-tight">
              Why Generic Agencies <span className="text-[#5D2E85]">Fail Salons</span>
            </h2>
            <p className="font-body text-[#5F5F5A] text-sm md:text-base">
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
                    className={`relative p-8 rounded-3xl border transition-all duration-300 cursor-pointer h-full select-none flex flex-col justify-between ${
                      isSelected 
                        ? 'border-[#5D2E85] bg-[#F1E7F9]/40 shadow-card' 
                        : 'border-[#DEDED7] bg-[#F7F6F2] hover:border-[#111111]/30 hover:bg-white'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-4xl">{item.emoji}</span>
                        <motion.span 
                          animate={{ rotate: isSelected ? 180 : 0 }}
                          className={`text-xs uppercase tracking-widest font-heading font-bold ${
                            isSelected ? 'text-[#5D2E85]' : 'text-[#5F5F5A]'
                          }`}
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
                            <span className="block font-heading font-bold text-xs tracking-wider text-[#5D2E85] uppercase mb-1">
                              Our Solution:
                            </span>
                            <p className="font-body text-[#111111] text-xs leading-relaxed font-medium">
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
      <section className="py-20 md:py-28 bg-[#F7F6F2] relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <ScrollReveal className="mb-16 text-center max-w-2xl mx-auto space-y-3">
            <span className="font-heading font-bold tracking-widest text-[#5D2E85] uppercase text-xs block">
              Execution Plan
            </span>
            <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-5xl uppercase tracking-tight">
              Our Stepped <span className="text-[#5D2E85]">Growth System</span>
            </h2>
            <p className="font-body text-[#5F5F5A] text-sm md:text-base">
              We translate your salon services into a robust local traffic flow. Hover or tap each step.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Interactive Steps List */}
            <div className="lg:col-span-5 space-y-4">
              {SALON_SERVICES.map((service, idx) => {
                const isActive = activeStep === idx;
                return (
                  <ScrollReveal key={service.title} delay={idx * 100}>
                    <div
                      onMouseEnter={() => setActiveStep(idx)}
                      onClick={() => setActiveStep(idx)}
                      className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 items-center ${
                        isActive
                          ? 'border-[#5D2E85] bg-[#F1E7F9]/40 shadow-sm'
                          : 'border-[#DEDED7] bg-white hover:border-[#111111]/30'
                      }`}
                    >
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-heading font-black text-xs ${
                        isActive ? 'bg-[#111111] text-white' : 'bg-[#F7F6F2] text-[#5F5F5A]'
                      }`}>
                        0{idx + 1}
                      </span>
                      <div>
                        <h4 className="font-heading font-bold text-sm uppercase text-[#111111]">{service.title}</h4>
                        <p className="text-[10px] text-[#5F5F5A] uppercase tracking-wider">{service.tag}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Right Column: Visualization Card */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-[550px] min-h-[300px] p-8 md:p-10 rounded-3xl border border-[#DEDED7] bg-white shadow-card overflow-hidden flex flex-col justify-between">
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
                        <span className="text-4xl">{SALON_SERVICES[activeStep].icon}</span>
                        <span className="font-heading font-black text-[#111111]/10 text-6xl">0{activeStep + 1}</span>
                      </div>

                      <h3 className="font-heading font-black text-[#111111] text-2xl uppercase tracking-tight">
                        {SALON_SERVICES[activeStep].title}
                      </h3>

                      <p className="font-body text-[#5F5F5A] text-sm leading-relaxed">
                        {SALON_SERVICES[activeStep].description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[#DEDED7] flex justify-between items-center">
                      <div>
                        <span className="block text-[10px] text-[#5F5F5A] uppercase tracking-wider">Target Metric</span>
                        <span className="font-heading font-bold text-base text-[#5D2E85]">
                          {SALON_SERVICES[activeStep].stat}
                        </span>
                      </div>
                      <span className="px-3.5 py-1 rounded-full bg-[#F7F6F2] border border-[#DEDED7] text-[10px] font-heading font-bold uppercase text-[#5F5F5A] tracking-wider">
                        {SALON_SERVICES[activeStep].tag}
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
      <section className="py-20 md:py-28 bg-white border-t border-[#DEDED7]">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <ScrollReveal className="mb-16 border-b border-[#DEDED7] pb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <span className="font-heading font-bold tracking-widest text-[#5D2E85] uppercase text-xs block">
                Proof
              </span>
              <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-5xl uppercase tracking-tight">
                Salon <span className="text-[#5D2E85]">Success Stories</span>
              </h2>
            </div>
            <p className="font-body text-[#5F5F5A] max-w-xs text-sm">
              We focus strictly on the metrics that fill chairs: appointments booked and average ticket size.
            </p>
          </ScrollReveal>

          <div className="space-y-16">
            {filteredStudies.map((study, idx) => (
              <ScrollReveal key={study.slug} delay={idx * 100}>
                <div className="group flex flex-col lg:flex-row gap-8 lg:gap-16 items-center p-6 sm:p-10 rounded-3xl bg-[#F7F6F2] border border-[#DEDED7] hover:border-[#111111]/30 hover:bg-white transition-all duration-300 relative overflow-hidden">
                  
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2 h-[260px] sm:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden relative border border-[#DEDED7]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <motion.img 
                      src={study.image}
                      alt={study.clientName}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#DEDED7] font-heading font-bold text-[10px] uppercase tracking-wider text-[#111111] mb-2">
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
                      <span className="font-heading font-bold text-xs tracking-wider uppercase text-[#5D2E85]">The Problem</span>
                      <p className="font-body text-[#5F5F5A] text-sm leading-relaxed">
                        {study.problem}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="font-heading font-bold text-xs tracking-wider uppercase text-[#5D2E85]">Our Solution</span>
                      <p className="font-body text-[#5F5F5A] text-sm leading-relaxed">
                        {study.approach}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#DEDED7]">
                      <span className="font-heading font-bold text-xs tracking-wider uppercase text-[#111111] mb-1 block">
                        The Result
                      </span>
                      <p className="font-body text-[#5D2E85] text-xl leading-relaxed font-black">
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
