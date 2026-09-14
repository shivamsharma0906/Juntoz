import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import ScrollReveal from '../components/ScrollReveal';
import HowWeGrowBusinesses from '../components/HowWeGrowBusinesses';

const AGENCY_SERVICES = [
  {
    id: 'strategy',
    number: '01',
    category: 'Strategy',
    title: 'Growth Strategy & Commercial Planning',
    tagline: 'Precision Market Roadmapping Before Ad Spend',
    desc: 'Wasting budget on disconnected marketing campaigns without a clear business model is the fastest way to burn capital. We analyze your customer acquisition economics, competitor landscape, and target buyer journey to construct an actionable growth blueprint with measurable ROI targets.',
    included: [
      'Comprehensive Digital & Competitive Landscape Audit',
      'Customer Unit Economics & Target CAC/LTV Modeling',
      'Omnichannel Go-To-Market (GTM) Strategy',
      'Quarterly Milestone & Media Budget Allocation Roadmap'
    ],
    deliverable: 'Custom Growth Strategy Blueprint + KPI Execution Roadmap',
    idealFor: 'Businesses with unclear marketing ROI, stagnant lead pipelines, or new market expansion goals.',
    investment: 'Strategic Project or Integrated into Monthly Retainer'
  },
  {
    id: 'performance-ads',
    number: '02',
    category: 'Performance',
    title: 'Performance Paid Ads (Meta & Google)',
    tagline: 'High-Intent Customer Acquisition With Proven ROAS',
    desc: 'We build and scale high-converting advertising campaigns across Meta (Instagram/Facebook) and Google Search/Display. Every rupee spent is tracked against pipeline value, qualified leads, and verifiable revenue rather than vanity impressions.',
    included: [
      'Google Search Intent & High-Converting Keyword Campaigns',
      'Meta Performance Creative & Retargeting Architectures',
      'Rapid Multi-Hook Ad Creative Testing & Iteration',
      'Daily ROAS Tracking, Audience Refreshing & Budget Scaling'
    ],
    deliverable: 'Scalable Paid Acquisition Engine with Weekly Transparent Reporting',
    idealFor: 'Companies and clinics looking for consistent, predictable weekly inbound inquiries and sales.',
    investment: 'Monthly Management Retainer + Direct Ad Spend'
  },
  {
    id: 'gmb-seo',
    number: '03',
    category: 'Organic Growth',
    title: 'SEO & Google Business Profile (GMB) Management',
    tagline: 'Local 3-Pack Maps Dominance & Search Visibility',
    desc: 'When high-intent customers search for your services in your city or neighborhood, your profile determines who gets the call. We optimize your Google Business Profile and local search footprint to rank in the Local 3-Pack and capture high-intent inbound search traffic.',
    included: [
      'Complete Google Business Profile Setup, Verification & Audit',
      'Local 3-Pack Maps Keyword & Category Optimization',
      'High-Resolution Geotagged Visual Uploads & Weekly Posts',
      'Review Generation Playbook & Ongoing Reputation Monitoring'
    ],
    deliverable: 'Dominant Local Google Presence Generating Organic Calls, Directions & Visits',
    idealFor: 'Local businesses, clinics, studios, and firms that depend on foot traffic and direct phone calls.',
    investment: 'Monthly Optimization & Management Package'
  },
  {
    id: 'brand-shoots',
    number: '04',
    category: 'Brand & Creative',
    title: 'Branding, Social Media & Professional Shoots',
    tagline: 'On-Location Production in Mumbai & Delhi + Premium Positioning',
    desc: 'Generic stock assets and poor smartphone video destroy customer trust. Juntoz deploys dedicated creative crews in Mumbai and Delhi for professional brand shoots, social reels, and ad creatives that establish unshakeable market authority and justify premium pricing.',
    included: [
      'Complete Brand Identity Guidelines, Typography & Color Systems',
      'On-Location Photo & Video Shoots in Mumbai & Delhi',
      'Hook-Engineered Short-Form Video & Reel Post-Production',
      'Conversion-First Social Media Aesthetic & Publishing Calendar'
    ],
    deliverable: 'Full Brand Identity Kit + High-Resolution Production Creative Assets',
    idealFor: 'Brands looking to elevate their market perception and produce high-converting ad assets.',
    investment: 'Per-Shoot Production or Integrated Monthly Content Retainer'
  },
  {
    id: 'web-cro',
    number: '05',
    category: 'Digital Experience',
    title: 'Web Design & Conversion Rate Architecture',
    tagline: 'High-Speed Digital Engines Built to Turn Clicks into Revenue',
    desc: 'An ad or social post is only as effective as the page it lands on. We engineer lightning-fast, mobile-first websites and dedicated campaign landing pages integrated with WhatsApp and CRM pipelines to ensure zero lead leakage.',
    included: [
      'Custom Responsive Website & Landing Page Design',
      'Conversion Rate Optimization (CRO) & Click-Path Engineering',
      'Instant WhatsApp & Lead Intake Form Automations',
      'Google PageSpeed 90+ Optimization, Clean Code & CDN Deployment'
    ],
    deliverable: 'Turnkey Digital Storefront / Landing Page Deployed on Global Fast CDN',
    idealFor: 'Companies losing ad revenue because their current website is slow, confusing, or fails to convert.',
    investment: 'One-Time Build + Optional Ongoing Optimization'
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 min-h-screen bg-[#F7F6F2]">
      <PageMeta
        title="Full-Service Digital Growth Services — Juntoz Digital Marketing Agency"
        description="Explore Juntoz's 5 core growth pillars: Digital Strategy, Performance Paid Ads, Local SEO & Google Business Profile, Brand Shoots in Mumbai & Delhi, and Conversion Web Architecture."
        path="/services"
      />

      {/* Hero Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#DEDED7] bg-white shadow-subtle mb-6">
          <span className="w-2 h-2 rounded-full bg-[#E84A2A]" />
          <span className="font-body font-bold text-[#5F5F5A] text-[11px] tracking-wider uppercase">
            Full-Service Digital Agency
          </span>
        </div>

        <h1 className="font-heading font-black text-[#111111] text-3xl sm:text-5xl md:text-7xl uppercase tracking-tight leading-[1.05] mb-6">
          Strategic Capabilities To <br />
          <span className="text-[#E84A2A]">
            Scale Your Business.
          </span>
        </h1>

        <p className="font-body text-[#5F5F5A] text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
          We don&apos;t offer isolated, cookie-cutter marketing tasks. Every service connects strategy, performance advertising, local search discovery, professional visual content, and web conversion into a compounded growth engine.
        </p>

        {/* Dedicated Specialty Banner */}
        <div className="mt-8 inline-block p-5 sm:p-6 rounded-3xl bg-white border border-[#DEDED7] shadow-card text-left max-w-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#E84A2A]">
              Specialist Industry Verticals
            </span>
            <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded bg-[#FBE9E4] text-[#E84A2A]">
              Dedicated Playbooks
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#5F5F5A] font-body leading-relaxed mb-3">
            Looking for industry-specific solutions? We have battle-tested playbooks tailored exclusively for beauty professionals:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/for-makeup-artists"
              className="text-xs font-heading font-bold text-[#111111] hover:text-[#E84A2A] underline underline-offset-4"
            >
              For Makeup Artists &amp; Academies →
            </Link>
            <Link
              to="/for-salons"
              className="text-xs font-heading font-bold text-[#111111] hover:text-[#E84A2A] underline underline-offset-4"
            >
              For Salons &amp; Clinic Chains →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Deep Dive Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-24">
        <div className="space-y-10 sm:space-y-14">
          {AGENCY_SERVICES.map((service, idx) => (
            <ScrollReveal key={service.id} data-reveal="up" delay={idx * 60}>
              <div 
                id={service.id}
                className="p-8 sm:p-12 rounded-3xl bg-white border border-[#DEDED7] hover:border-[#111111] transition-all duration-300 relative overflow-hidden shadow-card hover:shadow-hover"
              >
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
                  
                  {/* Left Column: Details */}
                  <div className="flex-1 space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="px-3.5 py-1 rounded-full bg-[#FBE9E4] border border-[#E84A2A]/20 font-heading font-black text-xs text-[#E84A2A]">
                        PILLAR {service.number}
                      </span>
                      <span className="font-body text-xs text-[#5F5F5A] uppercase tracking-wider font-semibold">
                        {service.category}
                      </span>
                    </div>

                    <div>
                      <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#111111] uppercase tracking-tight mb-2">
                        {service.title}
                      </h2>
                      <p className="font-heading font-bold text-sm sm:text-base text-[#E84A2A]">
                        {service.tagline}
                      </p>
                    </div>

                    <p className="font-body text-[#5F5F5A] text-sm sm:text-base leading-relaxed">
                      {service.desc}
                    </p>

                    {/* What's Included */}
                    <div className="pt-5 border-t border-[#DEDED7] space-y-3">
                      <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#111111] block">
                        What’s Included:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.included.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm font-body text-[#111111]/85">
                            <span className="text-[#287A55] font-bold mt-0.5">✓</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Execution Specs & CTA */}
                  <div className="lg:w-80 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#F7F6F2] border border-[#DEDED7] space-y-5">
                    <div className="space-y-4">
                      <div>
                        <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-[#5F5F5A] block mb-1">
                          Primary Deliverable
                        </span>
                        <p className="font-heading font-bold text-xs sm:text-sm text-[#111111]">
                          {service.deliverable}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#DEDED7]">
                        <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-[#5F5F5A] block mb-1">
                          Ideal Partner Profile
                        </span>
                        <p className="font-body text-xs text-[#5F5F5A] leading-relaxed">
                          {service.idealFor}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#DEDED7]">
                        <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-[#5F5F5A] block mb-1">
                          Engagement Model
                        </span>
                        <p className="font-body text-xs font-semibold text-[#111111]">
                          {service.investment}
                        </p>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20am%20interested%20in%20learning%20more%20about%20your%20${encodeURIComponent(service.title)}%20services.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-widest text-center text-white bg-[#111111] hover:bg-[#E84A2A] transition-colors duration-200 block shadow-sm"
                    >
                      Inquire About {service.category}
                    </a>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── 8-PHASE INTEGRATED GROWTH SYSTEM ── */}
      <HowWeGrowBusinesses />

      {/* Conversion Banner */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mt-12 sm:mt-16">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#111111] text-white text-center space-y-6 shadow-card">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 font-sans font-semibold text-xs uppercase tracking-wider text-white">
            Custom Growth Roadmaps
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight">
            Not Sure Which Service Pillar Your Business Needs First?
          </h2>
          <p className="font-body text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Schedule a free 20-minute strategic consultation. We will analyze your current digital presence, pinpoint your primary growth bottleneck, and suggest the exact steps to scale.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-bold text-xs uppercase tracking-widest text-white bg-[#E84A2A] hover:bg-[#C93B20] transition-colors duration-200 shadow-sm"
            >
              <span>Schedule Free Strategy Call</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
