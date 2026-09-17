import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import ServiceCard from './ServiceCard';

const CORE_SERVICES = [
  {
    num: '01',
    title: 'Paid Acquisition & Meta Ads',
    teaser: 'Target high-intent customers in your market with surgical precision, not boosted vanity posts.',
    highlight: 'Predictable Pipeline',
    href: '/services/meta-google-ads',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="9" stroke="currentColor" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Google Maps & Local Search',
    teaser: 'Capture nearby buyers at the exact second they search for your core services in your city.',
    highlight: 'Top 3-Pack Rank',
    href: '/services/gmb',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Branding & Visual Authority',
    teaser: 'Elevate your aesthetic perception so you can command premium fees and defend your margins.',
    highlight: 'Rate Defense',
    href: '/services/instagram-management',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Conversion Funnels & CRO',
    teaser: 'Eliminate drop-offs. We build high-converting WhatsApp workflows and landing page engines.',
    highlight: 'Speed-to-Lead',
    href: '/services/websites',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section id="services-grid" className="py-10 sm:py-16 md:py-20 lg:py-28 bg-[#F7F6F2] border-b border-[#DEDED7]/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1400px]">
        
        {/* ════ INTRO HEADLINE BLOCK: Hero-Style Bold Impact ════ */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-14 md:mb-18">
          <ScrollReveal data-reveal="up">
            {/* Optional Muted Eyebrow */}
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#5F5F5A] block mb-3">
              OUR CORE CAPABILITIES
            </span>

            <h2
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#111111] leading-[1.15] mb-4"
            >
              <span className="block mb-1">Some Brands Need Marketing.</span>
              <span className="block">
                We Build A{' '}
                <span className="relative inline-block whitespace-nowrap">
                  <span>Growth System</span>
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

            {/* Subtitle */}
            <p className="font-body text-[#5F5F5A] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              We connect paid acquisition, local search visibility, brand positioning, and conversion architecture into a synchronized pipeline designed for commercial ROI.
            </p>
          </ScrollReveal>
        </div>

        {/* ════ CIRCULAR-ICON SERVICES GRID ════ */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
          {CORE_SERVICES.map((s, i) => (
            <ScrollReveal key={s.num} data-reveal="up" delay={i * 80}>
              <ServiceCard
                num={s.num}
                title={s.title}
                teaser={s.teaser}
                highlight={s.highlight}
                href={s.href}
                icon={s.icon}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* ════ SECTION GATEWAY LINK ════ */}
        <ScrollReveal data-reveal="up" delay={200} className="flex justify-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#111111] hover:bg-[#5D2E85] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-card"
          >
            <span>Explore All 5 Capabilities &amp; Deliverables</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>

      </div>
    </section>
  );
}
