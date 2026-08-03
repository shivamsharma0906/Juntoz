import { motion } from 'framer-motion';
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
  },
  {
    title: 'Instagram Content & Reels Strategy',
    description: 'Stop fighting algorithms. We direct and package your makeup transformations, bridal profiles, and masterclasses into high-converting short-form Reels.',
    tag: 'Organic Growth',
  },
  {
    title: 'WhatsApp Booking Funnels',
    description: 'Filter out the price-shoppers who ghost. We build a streamlined WhatsApp funnel that pre-qualifies inquiries and books high-ticket bridal contracts on autopilot.',
    tag: 'Funnel Engineering',
  },
  {
    title: 'Premium Portfolio Websites',
    description: 'Showcase your artistry with a high-end digital portfolio. Clean, luxury aesthetic designs that position you as a high-ticket artist who commands premium rates.',
    tag: 'Web Design',
  }
];

export default function ForMakeupArtistsPage() {
  // Filter MUA-related case studies
  const filteredStudies = caseStudies.filter(
    (study) => study.industry.includes('MUA') || study.industry.includes('Academy')
  );

  return (
    <div className="pt-28 md:pt-36 min-h-screen bg-background">
      <PageMeta
        title="Marketing for Makeup Artists (MUAs) — Juntoz"
        description="Book more brides and fill your off-season calendar. WhatsApp booking funnels, Instagram Reels growth, and local ads designed exclusively for makeup artists."
        path="/for-makeup-artists"
      />

      {/* ════ HERO SECTION ════ */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#7B2FFF]/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF3AF2]/10 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal data-reveal="up" className="mb-2 flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF3AF2] animate-pulse" />
                <span className="font-body font-semibold text-white/80 text-[10px] tracking-widest uppercase">For Makeup Artists</span>
              </div>
            </ScrollReveal>

            <ScrollReveal data-reveal="up" delay={100}>
              <div className="flex justify-center my-3">
                <img src="/bridal_balloon.png" alt="Bridal" className="h-20 sm:h-32 md:h-44 lg:h-52 object-contain select-none pointer-events-none" />
              </div>
            </ScrollReveal>

            <ScrollReveal data-reveal="up" delay={200}>
              <p className="font-body text-white/60 text-sm md:text-base max-w-2xl leading-relaxed mb-12 mx-auto">
                Stop chasing bridal queries that ghost or fighting changing Instagram algorithms. We build predictable booking funnels that secure high-value clients for you year-round.
              </p>
            </ScrollReveal>

            <ScrollReveal data-reveal="up" delay={350} className="flex justify-center md:justify-start">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 min-h-[56px] rounded-full font-heading font-black uppercase tracking-widest text-background px-9 overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_35px_rgba(255,58,242,0.4)]"
                style={{ background: '#FF3AF2' }}
              >
                <span className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 text-sm">Book a Free MUA Growth Audit</span>
                <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════ PAIN POINTS GRID ════ */}
      <section className="py-16 md:py-24 bg-white/[0.02] border-y border-white/5 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal className="mb-16">
            <span className="font-heading font-bold tracking-widest text-[#FF3AF2] uppercase text-sm mb-3 block">
              The Reality
            </span>
            <h2 className="font-heading font-black text-white text-3xl sm:text-5xl uppercase tracking-tighter">
              Why Generic Marketing Fails MUAs
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={100} className="glass-card p-8 flex flex-col justify-between h-full border border-white/5">
              <div>
                <span className="text-4xl mb-6 block">🍂</span>
                <h3 className="font-heading font-black text-white text-lg uppercase tracking-tight mb-4">
                  The Off-Season Slump
                </h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  Solid income during the wedding season, followed by months of empty calendars. Generic agencies don't know how to generate local bookings for party makeup, non-seasonal workshops, or masterclasses.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="glass-card p-8 flex flex-col justify-between h-full border border-white/5">
              <div>
                <span className="text-4xl mb-6 block">📱</span>
                <h3 className="font-heading font-black text-white text-lg uppercase tracking-tight mb-4">
                  The Instagram Discount Trap
                </h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  Posting Reels constantly only to compete with hundreds of local artists playing a price undercut game. Your artistry deserves premium positioning, not a race to the bottom.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300} className="glass-card p-8 flex flex-col justify-between h-full border border-white/5">
              <div>
                <span className="text-4xl mb-6 block">💬</span>
                <h3 className="font-heading font-black text-white text-lg uppercase tracking-tight mb-4">
                  Ghosting on "Rates Please"
                </h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  Spending hours sending bridal rate charts in Instagram DMs, only to get ghosted. You need a system that filters out casual price-checkers and converts high-intent brides automatically.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════ SERVICES ════ */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal className="mb-20 text-center">
            <span className="font-heading font-bold tracking-widest text-[#FF3AF2] uppercase text-sm mb-3 block">
              What We Build
            </span>
            <h2 className="font-heading font-black text-white text-3xl sm:text-6xl uppercase tracking-tighter mb-4">
              Our Growth System for MUAs
            </h2>
            <p className="font-body text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              We package your creative talent into a structured commercial growth engine.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MUA_SERVICES.map((service, idx) => (
              <ScrollReveal key={service.title} delay={idx * 150} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3.5 py-1 rounded-full bg-[#FF3AF2]/10 border border-[#FF3AF2]/30 font-heading font-bold text-[10px] tracking-widest uppercase text-[#FF3AF2]">
                    {service.tag}
                  </span>
                  <span className="font-heading font-black text-white/15 text-2xl">0{idx + 1}</span>
                </div>
                <h3 className="font-heading font-black text-white text-xl sm:text-2xl uppercase mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════ CASE STUDIES ════ */}
      <section className="py-20 md:py-32 bg-white/[0.01] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <span className="font-heading font-bold tracking-widest text-[#FF3AF2] uppercase text-sm mb-3 block">
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
              <ScrollReveal key={study.slug} delay={idx * 150}>
                <div className="group flex flex-col lg:flex-row gap-8 lg:gap-16 items-center p-6 sm:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors duration-500 relative overflow-hidden">
                  
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2 h-[260px] sm:h-[350px] lg:h-[420px] rounded-3xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                    <motion.img 
                      src={study.image}
                      alt={study.clientName}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                      <span className="inline-block px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 font-heading font-bold text-xs uppercase tracking-widest text-white mb-3">
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
