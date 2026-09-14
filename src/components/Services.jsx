import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal.jsx';

const SERVICE_PILLARS = [
  {
    num: '01',
    category: 'Strategy',
    title: 'Growth Strategy & Market Planning',
    subtitle: 'Commercial Direction & Roadmap',
    desc: 'We map your target audiences, competitive positioning, and customer unit economics before a single rupee is spent on ads.',
    deliverables: [
      'Digital Go-To-Market Strategy',
      'Growth & Revenue Roadmapping',
      'Audience & Competitor Mapping',
      'Marketing Budget Allocation'
    ],
    highlight: 'Strategy First'
  },
  {
    num: '02',
    category: 'Performance',
    title: 'Paid Ads & Lead Generation',
    subtitle: 'High-ROAS Customer Acquisition',
    desc: 'Data-driven Google Search and Meta ad campaigns engineered to capture ready-to-buy intent and generate qualified inbound pipeline.',
    deliverables: [
      'Google Search & Display Campaigns',
      'Meta (Instagram & Facebook) Ads',
      'High-Intent Inbound Lead Gen',
      'Retargeting & ROAS Optimization'
    ],
    highlight: 'Predictable Scale'
  },
  {
    num: '03',
    category: 'Organic Growth',
    title: 'SEO & Google Business Profile',
    subtitle: 'Search Maps Dominance & Calls',
    desc: 'Rank on top of Google Search and Google Maps. Turn nearby prospective customers into daily phone calls, walk-ins, and website visitors.',
    deliverables: [
      'Google Business Profile (GMB) Management',
      'Local 3-Pack Maps Optimization',
      'Technical & On-Page SEO',
      'Review & Reputation Systems'
    ],
    highlight: 'Inbound Discovery'
  },
  {
    num: '04',
    category: 'Brand & Creative',
    title: 'Branding, Content & Social Media',
    subtitle: 'Authority & Market Differentiation',
    desc: 'Transform your brand perception to command higher rates. We direct high-hook content, visual identities, and social authority assets.',
    deliverables: [
      'Brand Identity & Guidelines',
      'High-Hook Social Media Content',
      'Graphic Design & Ad Creatives',
      'Professional Content Shoots'
    ],
    highlight: 'Higher Pricing Margin'
  },
  {
    num: '05',
    category: 'Digital Experience',
    title: 'Web Design & Conversion Architecture',
    subtitle: 'Lightning-Fast Sales Engines',
    desc: 'Speed-optimized, mobile-first websites and dedicated landing pages built specifically to convert cold traffic into paying customers.',
    deliverables: [
      'Custom Website Design & Development',
      'Direct-Response Landing Pages',
      'Conversion Rate Optimization (CRO)',
      'WhatsApp & CRM Integration'
    ],
    highlight: 'Zero Lead Leakage'
  }
];

export default function Services({ compactTop = false }) {
  const sectionRef = useRef(null);

  return (
    <section id="services" ref={sectionRef} className={`relative pb-24 md:pb-32 bg-[#F7F6F2] overflow-hidden ${compactTop ? 'pt-10 md:pt-16' : 'pt-24 md:pt-32'}`}>
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        
        {/* Section Header */}
        <ScrollReveal data-reveal="up" className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FBE9E4] border border-[#E84A2A]/20 font-sans font-semibold text-xs uppercase tracking-wider text-[#E84A2A] mb-4">
            Full-Service Capabilities
          </span>
          <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.1] mb-6">
            End-To-End Growth Services For{' '}
            <span className="text-[#E84A2A]">
              Ambitious Brands.
            </span>
          </h2>
          <p className="font-body text-[#5F5F5A] text-base sm:text-lg leading-relaxed">
            We don&apos;t sell disconnected tactics. Our five core pillars connect strategy, performance advertising, organic search, creative storytelling, and web architecture into an integrated growth engine.
          </p>
        </ScrollReveal>

        {/* 5 Grouped Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16">
          {SERVICE_PILLARS.map((s, i) => (
            <ScrollReveal key={s.num} data-reveal="up" delay={i * 70}>
              <div className="group relative h-full rounded-3xl bg-white border border-[#DEDED7] p-7 sm:p-8 flex flex-col justify-between shadow-subtle hover:border-[#111111]/40 hover:-translate-y-1 transition-all duration-300">
                <div>
                  {/* Top row: Category tag & Number */}
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F7F6F2] border border-[#DEDED7] text-[#111111]">
                      {s.category}
                    </span>
                    <span className="font-heading font-black text-2xl sm:text-3xl text-[#111111]/15 group-hover:text-[#E84A2A] transition-colors duration-300">
                      {s.num}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-[#111111] uppercase tracking-tight leading-snug mb-1">
                    {s.title}
                  </h3>
                  <p className="font-sans font-medium text-xs text-[#E84A2A] tracking-wider uppercase mb-3">
                    {s.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-body text-xs text-[#5F5F5A] leading-relaxed mb-6">
                    {s.desc}
                  </p>

                  {/* Deliverables List */}
                  <div className="pt-4 border-t border-[#DEDED7]/80">
                    <span className="block font-sans text-[10px] font-bold uppercase tracking-wider text-[#5F5F5A] mb-3">
                      Core Deliverables:
                    </span>
                    <ul className="space-y-2">
                      {s.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs font-body text-[#111111]/85">
                          <span className="text-[#E84A2A] font-bold text-xs mt-0.5">✦</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-8 pt-4 border-t border-[#DEDED7]/80 flex items-center justify-between">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#5F5F5A]">Outcome</span>
                  <span className="text-xs font-heading font-bold text-[#111111] uppercase tracking-wider">{s.highlight}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* 6th Card: Specialty Highlight */}
          <ScrollReveal data-reveal="up" delay={350}>
            <div className="h-full rounded-3xl bg-[#111111] text-white p-7 sm:p-8 flex flex-col justify-between shadow-card relative overflow-hidden">
              <div>
                <span className="inline-block text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 mb-5">
                  Deep Industry Expertise
                </span>
                <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight leading-snug mb-3">
                  Have A Specific Industry Need?
                </h3>
                <p className="font-body text-xs text-white/70 leading-relaxed mb-6">
                  While we serve ambitious businesses across multiple categories, we maintain dedicated vertical practice groups with specialized playbooks for Makeup Artists and Salons.
                </p>
                <div className="space-y-2.5">
                  <Link
                    to="/for-makeup-artists"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#E84A2A]/50 transition-all duration-200"
                  >
                    <span className="font-sans text-xs uppercase tracking-wider font-semibold">For Makeup Artists</span>
                    <span className="text-xs text-[#E84A2A]">Explore →</span>
                  </Link>
                  <Link
                    to="/for-salons"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#E84A2A]/50 transition-all duration-200"
                  >
                    <span className="font-sans text-xs uppercase tracking-wider font-semibold">For Salons &amp; Clinics</span>
                    <span className="text-xs text-[#E84A2A]">Explore →</span>
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-white/50">Verticals</span>
                <span className="text-xs font-heading font-bold text-[#E84A2A] uppercase tracking-wider">Tailored Playbooks</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* View Detailed Services Page CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading font-bold text-xs uppercase tracking-widest text-[#111111] bg-white border border-[#DEDED7] hover:bg-[#111111] hover:text-white transition-all duration-300 shadow-sm"
          >
            <span>View Complete Service Specifications</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}