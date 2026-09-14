import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const TEASER_PILLARS = [
  {
    num: '01',
    title: 'Paid Acquisition & Meta Ads',
    teaser: 'Target high-intent customers in your market with surgical precision, not boosted vanity posts.',
    highlight: 'Predictable Pipeline',
  },
  {
    num: '02',
    title: 'Google Maps & Local Search',
    teaser: 'Capture nearby buyers at the exact second they search for your core services.',
    highlight: 'Top 3-Pack Rank',
  },
  {
    num: '03',
    title: 'Branding & Visual Authority',
    teaser: 'Elevate your brand presence so you can command premium fees and defend your margins.',
    highlight: 'Rate Defense',
  },
  {
    num: '04',
    title: 'Conversion Funnels & CRO',
    teaser: 'Eliminate drop-offs. We build high-converting WhatsApp workflows and landing page engines.',
    highlight: 'Speed-to-Lead',
  },
];

export default function HomeServicesTeaser() {
  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#DEDED7]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Editorial Hook Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <ScrollReveal data-reveal="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DEDED7] bg-[#F7F6F2] shadow-subtle mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E84A2A]" />
              <span className="font-body font-bold text-[#5F5F5A] text-[11px] tracking-wider uppercase">
                Core Capabilities
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal data-reveal="up" delay={80}>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#111111] leading-[1.04] mb-4">
              Some Brands Need Marketing. <br />
              <span className="text-[#E84A2A]">Some Need A Growth System.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal data-reveal="up" delay={120}>
            <p className="font-body text-[#5F5F5A] text-base sm:text-lg leading-relaxed max-w-2xl">
              We connect paid acquisition, local search visibility, brand positioning, and conversion architecture into a synchronized pipeline designed for commercial ROI.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Teaser Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TEASER_PILLARS.map((p, i) => (
            <ScrollReveal key={i} data-reveal="up" delay={i * 80}>
              <Link
                to="/services"
                className="group block h-full p-7 rounded-3xl bg-[#F7F6F2] border border-[#DEDED7] hover:border-[#111111] hover:bg-white transition-all duration-300 shadow-subtle hover:shadow-card hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-black text-xs text-[#E84A2A] tracking-wider">
                    {p.num}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white group-hover:bg-[#F7F6F2] border border-[#DEDED7] font-body font-bold text-[10px] text-[#111111] uppercase tracking-wider transition-colors">
                    {p.highlight}
                  </span>
                </div>

                <h3 className="font-heading font-black text-lg text-[#111111] mb-2 group-hover:text-[#E84A2A] transition-colors">
                  {p.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-[#5F5F5A] leading-relaxed">
                  {p.teaser}
                </p>

                <div className="mt-6 flex items-center gap-1.5 font-heading font-bold text-xs uppercase tracking-wider text-[#111111] group-hover:text-[#E84A2A] transition-colors">
                  <span>Explore Deliverables</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Section Gateway Link */}
        <ScrollReveal data-reveal="up" delay={200} className="flex justify-center sm:justify-start">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#111111] hover:bg-[#E84A2A] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm"
          >
            <span>Explore All 5 Capabilities &amp; Deliverables</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>

      </div>
    </section>
  );
}
