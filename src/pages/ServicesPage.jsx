import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import ScrollReveal from '../components/ScrollReveal';
import HowWeGrowBusinesses from '../components/HowWeGrowBusinesses';

const AGENCY_SERVICES = [
  {
    id: 'instagram-management',
    number: '01',
    category: 'Social Growth',
    title: 'Instagram Management',
    tagline: 'Aesthetic Feed Curation, High-Retention Reels & Inbound DM Inquiries',
    desc: 'Transform your Instagram from a quiet profile into an active booking engine. We manage your end-to-end grid curation, story funnels, engagement sequences, and direct message lead qualification so profile visitors convert into high-ticket bookings.',
    included: [
      'Signature Aesthetic Grid Planning & Bio Optimization',
      'Viral Reel Scripting, Audio Trend Selection & Editing',
      'Daily Story Sequences & Interactive Engagement Polling',
      'Inbound DM Lead Triage & Consultation Scheduling'
    ],
    deliverable: 'Fully Managed Monthly Instagram Calendar & Daily Lead Engine',
    idealFor: 'Artists, beauty professionals, and brands seeking an authoritative aesthetic that drives consistent inbound DMs.',
    investment: 'Monthly Management Retainer'
  },
  {
    id: 'meta-google-ads',
    number: '02',
    category: 'Performance Advertising',
    title: 'Meta Ads & Google Ads',
    tagline: 'High-Intent Paid Acquisition Engineered for Predictable Bookings & Proven ROAS',
    desc: 'Stop burning budget on boosted posts. We build data-backed paid advertising funnels across Instagram, Facebook, and Google Search that pinpoint ready-to-buy clients and fill your appointment calendar with profitable bookings.',
    included: [
      'High-Intent Google Search & Keyword Bidding Campaigns',
      'Meta Dynamic Creative Testing & Retargeting Architectures',
      'Conversion-Engineered Ad Copy & Hook Variations',
      'Continuous ROAS Tracking, Pixel Setup & Budget Scaling'
    ],
    deliverable: 'Predictable Inbound Paid Lead Engine with Transparent Weekly Reporting',
    idealFor: 'Businesses ready to scale client volume and keep schedules booked weeks in advance.',
    investment: 'Monthly Management Retainer + Direct Media Spend'
  },
  {
    id: 'seo',
    number: '03',
    category: 'Organic Search',
    title: 'SEO (Search Engine Optimization)',
    tagline: 'Dominant Organic Google Rankings for Long-Term Inbound Authority',
    desc: 'Capture clients actively searching for your services on Google without paying for every click. We optimize your website architecture, high-intent service keywords, and regional backlinks to achieve top rankings that compound over time.',
    included: [
      'Comprehensive Competitor Keyword & Search Intent Mapping',
      'Technical SEO, Speed Optimization & Mobile Usability Audits',
      'On-Page Metadata, Schema Markup & Content Optimization',
      'High-Authority Niche Backlinks & Search Console Management'
    ],
    deliverable: 'First-Page Google Search Placement for High-Value Commercial Search Terms',
    idealFor: 'Brands looking to establish lasting digital dominance and lower their customer acquisition costs.',
    investment: 'Monthly SEO Retainer'
  },
  {
    id: 'gmb',
    number: '04',
    category: 'Local Search',
    title: 'GMB (Google My Business Management)',
    tagline: 'Local 3-Pack Maps Dominance, Direct Calls & Walk-In Inquiries',
    desc: 'When high-intent clients search for services "near me" or in their city, your Google Business Profile decides who gets the call. We optimize and manage your GMB listing to rank in the Local 3-Pack on Google Maps, driving daily calls and appointment visits.',
    included: [
      'Complete Google Business Profile Setup, Verification & Audit',
      'Local 3-Pack Maps Geo-Keyword & Category Optimization',
      'Weekly High-Resolution Geotagged Visual Uploads & Posts',
      '5-Star Review Generation Playbook & Reputation Defense'
    ],
    deliverable: 'Top Local Maps Ranking Driving Direct Inquiries, Calls & Directions',
    idealFor: 'Salons, clinics, studios, academies, and regional professionals relying on local clientele.',
    investment: 'Monthly Local Search & GMB Management'
  },
  {
    id: 'mobile-content-shoot',
    number: '05',
    category: 'Creative Production',
    title: 'Photo & Content Shoot (Camera & Mobile)',
    tagline: 'On-Location Professional Camera & 4K iPhone Shoots Across Delhi & Mumbai',
    desc: 'We provide end-to-end on-location photo and video production across Delhi NCR and Mumbai using both professional DSLR/cinema cameras and 4K iPhones. Capture crisp commercial portraits for your website and lookbooks, paired with algorithm-friendly smartphone reels and authentic behind-the-scenes transformations.',
    included: [
      'Professional DSLR Camera Photography & Retouched Lookbooks',
      'On-Location 4K iPhone Reels & Viral Transformation Sequences',
      'Delhi & Mumbai Dedicated Crews with Pro Lighting & Wireless Audio',
      'Batch Content Shoot Yielding 30–60 Days of Ready-to-Post Visual Assets'
    ],
    deliverable: 'Curated Vault of High-Res Camera Portraits & 4K iPhone Reels',
    idealFor: 'Professionals and brands looking for premium lookbooks and algorithm-friendly reels without hiring separate crews.',
    investment: 'Half-Day / Full-Day Shoot or Monthly Content Retainer'
  },
  {
    id: 'ai-videos',
    number: '06',
    category: 'Creative Tech',
    title: 'AI Videos',
    tagline: 'Next-Gen Generative Visuals, AI Avatars & Scalable High-Hook Creatives',
    desc: 'Scale your video output without endless studio time. We utilize cutting-edge AI video generation tools to create captivating motion visuals, hyper-realistic voiceovers, multilingual versions, and high-converting ad variations that capture attention in the first 2 seconds.',
    included: [
      'High-Hook AI Voiceovers & Dynamic Promotional Video Scripts',
      'Generative Motion Backgrounds, Visual Enhancements & AI Avatars',
      'Multi-Variation Creative Testing for Paid Social Ad Campaigns',
      'AI Video Upscaling, Subtitling & Aspect Ratio Formatting'
    ],
    deliverable: 'Scalable Library of Attention-Grabbing Generative Video Creatives',
    idealFor: 'Brands looking to accelerate video ad testing, produce multilingual content, and stand out visually.',
    investment: 'Campaign Project or Monthly Retainer'
  },
  {
    id: 'websites',
    number: '07',
    category: 'Digital Storefront',
    title: 'Websites & Conversion Funnels',
    tagline: 'Ultra-Fast, Mobile-First Portfolios Built for Immediate Inquiries & Bookings',
    desc: 'A great website is your 24/7 sales representative. We engineer ultra-fast, mobile-first websites and landing pages equipped with one-tap WhatsApp integration, interactive portfolios, and seamless booking funnels that ensure zero lead leakage.',
    included: [
      'Bespoke Mobile-First UX/UI Design & Custom Responsive Build',
      'Instant One-Tap WhatsApp & Calendar Booking Integrations',
      '90+ Google PageSpeed Optimization & Global CDN Deployment',
      'Conversion Rate Optimization (CRO) & Service Pricing Menus'
    ],
    deliverable: 'Turnkey High-Converting Website Deployed on Global High-Speed Infrastructure',
    idealFor: 'Professionals and brands whose current site is outdated, slow, or failing to convert traffic into inquiries.',
    investment: 'One-Time Project Build + Optional Monthly Support'
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 min-h-screen bg-[#F7F6F2]">
      <PageMeta
        title="Our Services — Juntoz Digital Marketing Agency"
        description="Explore Juntoz's 7 core digital growth services: Instagram Management, Meta Ads & Google Ads, SEO, GMB, Mobile Content Shoots, AI Videos, and Websites."
        path="/services"
      />

      {/* Hero Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#DEDED7] bg-white shadow-subtle mb-6">
          <span className="w-2 h-2 rounded-full bg-[#5D2E85]" />
          <span className="font-body font-bold text-[#5F5F5A] text-[11px] tracking-wider uppercase">
            Full-Service Digital Agency
          </span>
        </div>

        <h1 className="font-heading font-black text-[#111111] text-3xl sm:text-5xl md:text-7xl uppercase tracking-tight leading-[1.05] mb-6">
          Strategic Capabilities To <br />
          <span className="text-[#5D2E85]">
            Scale Your Business.
          </span>
        </h1>

        <p className="font-body text-[#5F5F5A] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Every service connects — strategy, ads, local search, content, and web — into one compounded growth engine.
        </p>
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
                      <span className="px-3.5 py-1 rounded-full bg-[#F1E7F9] border border-[#5D2E85]/20 font-heading font-black text-xs text-[#5D2E85]">
                        PILLAR {service.number}
                      </span>
                      <span className="font-body text-xs text-[#5F5F5A] uppercase tracking-wider font-semibold">
                        {service.category}
                      </span>
                    </div>

                    <div>
                      <Link to={`/services/${service.id}`} className="group inline-block">
                        <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#111111] group-hover:text-[#5D2E85] uppercase tracking-tight mb-2 transition-colors">
                          {service.title}
                        </h2>
                      </Link>
                      <p className="font-heading font-bold text-sm sm:text-base text-[#5D2E85]">
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

                    <div className="space-y-2.5 pt-2">
                      <Link
                        to={`/services/${service.id}`}
                        className="w-full py-3 px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-center text-[#5D2E85] bg-[#F1E7F9] hover:bg-[#5D2E85] hover:text-white transition-all duration-200 block border border-[#5D2E85]/20"
                      >
                        Explore Full Page &amp; Audit →
                      </Link>

                      <a
                        href={`https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20am%20interested%20in%20learning%20more%20about%20your%20${encodeURIComponent(service.title)}%20services.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-widest text-center text-white bg-[#111111] hover:bg-[#5D2E85] transition-colors duration-200 block shadow-sm"
                      >
                        Inquire on WhatsApp
                      </a>
                    </div>
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
            Book 20 mins — we'll identify your biggest growth leak and fix it.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-bold text-xs uppercase tracking-widest text-white bg-[#5D2E85] hover:bg-[#4C266D] transition-colors duration-200 shadow-sm"
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
