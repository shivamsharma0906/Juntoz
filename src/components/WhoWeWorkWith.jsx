import ScrollReveal from './ScrollReveal.jsx';

const CLIENT_CATEGORIES = [
  {
    title: 'High-Growth Startups',
    desc: 'Founders who need predictable customer acquisition and high-velocity testing without wasting budget on vanity metrics.',
    tag: 'Traction & Scale',
    metrics: 'Rapid GTM Testing',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Local Businesses & Clinics',
    desc: 'Businesses that depend on foot traffic, phone inquiries, and local search dominance within high-value geographic radius.',
    tag: 'Local Dominance',
    metrics: 'Maps 3-Pack & Calls',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'D2C & E-Commerce Brands',
    desc: 'Online stores that require creative-first ad testing, ROAS scaling, and high-converting checkout landing page architecture.',
    tag: 'Performance ROAS',
    metrics: 'Lower CAC & Volume',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: 'Service & B2B Companies',
    desc: 'Professional firms seeking qualified, high-ticket inbound consultations rather than unqualified form spams.',
    tag: 'Inbound Pipeline',
    metrics: 'Qualified Leads Only',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Specialty: Beauty & Salons',
    desc: 'Our dedicated industry vertical for makeup artists, luxury salons, and beauty academies commanding premium pricing.',
    tag: 'Specialist Vertical',
    metrics: 'Booked Calendars',
    isSpecialty: true,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function WhoWeWorkWith() {
  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#DEDED7] relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        
        {/* Section Header */}
        <ScrollReveal data-reveal="up" className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DEDED7] bg-[#F7F6F2] text-[#5F5F5A] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E84A2A]" />
            <span>Client Diversity</span>
          </div>
          <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.1] mb-5">
            If Your Business Wants To Grow Digitally,{' '}
            <span className="text-[#E84A2A]">We Can Help.</span>
          </h2>
          <p className="font-body text-[#5F5F5A] text-base md:text-lg leading-relaxed">
            We partner with businesses across various stages and models. Whether you are an emerging startup, an established local clinic, or a high-ticket service brand, we build a marketing engine tailored to your unit economics.
          </p>
        </ScrollReveal>

        {/* 5 Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENT_CATEGORIES.map((cat, idx) => (
            <ScrollReveal key={cat.title} data-reveal="up" delay={idx * 80}>
              <div 
                className={`h-full p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  cat.isSpecialty
                    ? 'bg-[#FBE9E4]/40 border-[#E84A2A]/40 shadow-subtle hover:border-[#E84A2A]'
                    : 'bg-[#F7F6F2] border-[#DEDED7] hover:border-[#111111]/30 hover:bg-white shadow-subtle'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                      cat.isSpecialty 
                        ? 'bg-white text-[#E84A2A] border-[#E84A2A]/30' 
                        : 'bg-white text-[#111111] border-[#DEDED7]'
                    }`}>
                      {cat.icon}
                    </div>
                    <span className={`text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                      cat.isSpecialty
                        ? 'bg-white text-[#E84A2A] border-[#E84A2A]/30'
                        : 'bg-white text-[#5F5F5A] border-[#DEDED7]'
                    }`}>
                      {cat.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#111111] uppercase tracking-tight mb-3">
                    {cat.title}
                  </h3>
                  <p className="font-body text-[#5F5F5A] text-sm leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DEDED7]/80 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#5F5F5A]">Focus</span>
                  <span className="font-sans font-bold text-xs text-[#111111]">{cat.metrics}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
