import ScrollReveal from './ScrollReveal.jsx';

const WA_SHOOTS = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20am%20interested%20in%20planning%20a%20professional%20content%20shoot%20in%20Mumbai%20or%20Delhi.';

const SHOOT_TYPES = [
  {
    title: 'Brand & Founder Shoots',
    city: 'Mumbai & Delhi',
    desc: 'Editorial portraiture, executive headshots, and authentic lifestyle captures that establish instant brand authority.',
    tag: 'Executive Authority'
  },
  {
    title: 'Makeup & Transformation Shoots',
    city: 'Mumbai & Delhi',
    desc: 'Studio lighting setups, cinematic before-and-after framing, and high-hook bridal reels engineered to stop the scroll.',
    tag: 'High-Retention Video'
  },
  {
    title: 'Salon & Studio Walkthroughs',
    city: 'Mumbai & Delhi',
    desc: 'Capturing your interior luxury aesthetic, client pampering experiences, and stylist craft to elevate local perception.',
    tag: 'Space & Ambiance'
  },
  {
    title: 'Product & Commercial Shoots',
    city: 'Mumbai & Delhi',
    desc: 'Clean, color-calibrated product photography and short-form video demonstration clips for e-commerce and ad creatives.',
    tag: 'Commercial Assets'
  }
];

export default function ShootsSection() {
  return (
    <section id="shoots" className="py-20 md:py-28 bg-[#F7F6F2] relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        
        {/* Section Header */}
        <ScrollReveal data-reveal="up" className="max-w-3xl mb-16 text-left">
          <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.1] mb-5">
            Professional Content Shoots.{' '}
            <span className="text-[#5D2E85]">Because Great Marketing Needs Great Content.</span>
          </h2>
          <p className="font-body text-[#5F5F5A] text-base md:text-lg leading-relaxed">
            Poor lighting and generic stock assets degrade ad performance and cheapen your brand. Juntoz directs and shoots high-production photo and video assets in Mumbai and Delhi — purposefully styled for paid ads and viral social reach.
          </p>
        </ScrollReveal>

        {/* 4 Shoot Formats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SHOOT_TYPES.map((shoot, idx) => (
            <ScrollReveal key={shoot.title} data-reveal="up" delay={idx * 70}>
              <div className="p-7 rounded-3xl bg-white border border-[#DEDED7] hover:border-[#111111]/30 transition-all duration-300 h-full flex flex-col justify-between shadow-subtle">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-[#DEDED7] text-[#111111]">
                      {shoot.city}
                    </span>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#5D2E85]">
                      {shoot.tag}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#111111] uppercase tracking-tight mb-2">
                    {shoot.title}
                  </h3>
                  <p className="font-body text-xs text-[#5F5F5A] leading-relaxed">
                    {shoot.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* The Connection Formula Pipeline */}
        <ScrollReveal data-reveal="up" delay={150}>
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#DEDED7] shadow-card mb-12">
            <span className="block font-sans font-bold text-xs uppercase tracking-wider text-[#5D2E85] mb-3">
              The Production-To-Revenue Pipeline
            </span>
            <h4 className="font-heading font-black text-xl sm:text-2xl text-[#111111] uppercase tracking-tight mb-6">
              How We Turn A Single Shoot Day Into Months Of Inbound Leads
            </h4>

            {/* Pipeline Flow */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-sans font-bold uppercase tracking-wider">
              <span className="px-4 py-2.5 rounded-xl bg-white border border-[#DEDED7] text-[#111111]">Shoot</span>
              <span className="text-[#5D2E85]">→</span>
              <span className="px-4 py-2.5 rounded-xl bg-white border border-[#DEDED7] text-[#111111]">Content</span>
              <span className="text-[#5D2E85]">→</span>
              <span className="px-4 py-2.5 rounded-xl bg-white border border-[#DEDED7] text-[#111111]">Social Media</span>
              <span className="text-[#5D2E85]">→</span>
              <span className="px-4 py-2.5 rounded-xl bg-white border border-[#DEDED7] text-[#111111]">Ads</span>
              <span className="text-[#5D2E85]">→</span>
              <span className="px-4 py-2.5 rounded-xl bg-white border border-[#DEDED7] text-[#111111]">Brand</span>
              <span className="text-[#5D2E85]">→</span>
              <span className="px-4 py-2.5 rounded-xl bg-[#111111] text-white">Growth</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Shoot Booking CTA */}
        <div className="text-center">
          <a
            href={WA_SHOOTS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading font-bold text-xs uppercase tracking-widest text-white bg-[#111111] hover:bg-[#5D2E85] transition-all duration-300 shadow-sm"
          >
            <span>Plan Your Next Shoot in Mumbai / Delhi</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
