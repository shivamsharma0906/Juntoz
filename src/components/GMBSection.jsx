import ScrollReveal from './ScrollReveal.jsx';

const WA_GMB = 'https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20would%20like%20to%20get%20a%20free%20Google%20Business%20Profile%20audit%20for%20my%20business.';

const GMB_BENEFITS = [
  { icon: '📍', title: 'Local Maps Discovery', desc: 'Appear directly when nearby clients search for your services within a 3–10km radius.' },
  { icon: '📞', title: 'Direct Calls & Inquiries', desc: 'Capture high-intent prospects who tap "Call Now" directly from Google Search results.' },
  { icon: '🧭', title: 'Directions & Footfall', desc: 'Guide prospective customers straight to your studio, clinic, office, or storefront.' },
  { icon: '⭐', title: 'Review Credibility', desc: 'Showcase verified 5-star customer feedback to eliminate hesitation and justify premium rates.' },
  { icon: '📸', title: 'Photos & Service Menus', desc: 'Display high-resolution portfolios, service rate ranges, and working hours transparently.' },
  { icon: '🛡️', title: 'Search Engine Trust', desc: 'Build local algorithmic authority that compounds over time and feeds into organic website SEO.' },
];

const JUNTOZ_GMB_SERVICES = [
  'Full Profile Setup & Verification Guidance',
  'Primary & Secondary Category Architecture',
  'Service Catalog & Product Listing Curation',
  'High-Resolution Geotagged Photo Uploads',
  'Weekly Google Posts, Updates & Announcements',
  'Systematic Review Collection Playbook',
  'Local Citation & NAP Consistency Audit',
  'Transparent Monthly Search & Call Insights'
];

export default function GMBSection() {
  return (
    <section id="gmb" className="py-20 md:py-28 bg-[#F7F6F2] relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        
        {/* Section Header */}
        <ScrollReveal data-reveal="up" className="max-w-3xl mb-16 text-left">
          <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.1] mb-5">
            Your Customers Are Searching On Google.{' '}
            <span className="text-[#5D2E85]">Can They Find You?</span>
          </h2>
          <p className="font-body text-[#5F5F5A] text-base md:text-lg leading-relaxed">
            Google Business Profile (commonly called GMB) is the most valuable digital real estate for any local business. When prospects search &ldquo;near me&rdquo; or look up local services, your Maps profile determines whether they call you or your competitor.
          </p>
        </ScrollReveal>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16">
          
          {/* LEFT: Educational Benefits Grid (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {GMB_BENEFITS.map((item, idx) => (
              <ScrollReveal key={item.title} data-reveal="up" delay={idx * 60}>
                <div className="p-6 rounded-2xl bg-white border border-[#DEDED7] hover:border-[#111111]/30 transition-all duration-300 h-full flex flex-col justify-between shadow-subtle">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#DEDED7] flex items-center justify-center text-lg mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#111111] uppercase tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-[#5F5F5A] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* RIGHT: Mockup of Optimized Google Local Profile (5 Cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal data-reveal="scale" delay={150}>
              <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#DEDED7] shadow-card relative overflow-hidden">
                {/* Simulated Google Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#DEDED7] mb-5">
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-black text-sm text-[#111111] uppercase tracking-wider">Google Search / Maps</span>
                  </div>
                  <span className="text-[10px] font-sans font-bold px-2.5 py-0.5 rounded-full bg-[#287A55]/10 text-[#287A55] border border-[#287A55]/20">
                    Verified Profile
                  </span>
                </div>

                {/* Profile Card Mockup */}
                <div className="p-5 rounded-2xl bg-white border border-[#DEDED7] mb-5 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-heading font-black text-lg text-[#111111] uppercase tracking-tight">Your Business Name</h4>
                      <p className="font-body text-xs text-[#5F5F5A]">Top-Rated Specialist • Mumbai / Pan-India</p>
                    </div>
                    <span className="text-xs font-bold text-[#5D2E85] bg-[#F1E7F9] px-2 py-0.5 rounded">
                      #1 in 3-Pack
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-sans">
                    <span className="font-bold text-[#111111]">5.0 ★★★★★</span>
                    <span className="text-[#5F5F5A]">(Verified Customer Reviews)</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#DEDED7]/80 text-center text-[11px] font-sans font-semibold">
                    <div className="p-2 rounded-lg bg-[#F7F6F2] text-[#111111]">📞 Call</div>
                    <div className="p-2 rounded-lg bg-[#F7F6F2] text-[#111111]">🧭 Directions</div>
                    <div className="p-2 rounded-lg bg-[#F7F6F2] text-[#111111]">🌐 Website</div>
                  </div>
                </div>

                {/* What Juntoz Manages */}
                <div>
                  <span className="block font-sans text-xs font-bold uppercase tracking-wider text-[#111111] mb-3">
                    What Juntoz Optimizes:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-body text-[#5F5F5A]">
                    {JUNTOZ_GMB_SERVICES.slice(0, 6).map((srv) => (
                      <div key={srv} className="flex items-center gap-2">
                        <span className="text-[#287A55] font-bold">✓</span>
                        <span className="truncate">{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ethical Disclaimer */}
                <div className="mt-6 pt-4 border-t border-[#DEDED7] text-[11px] font-body text-[#5F5F5A] leading-relaxed">
                  <strong>Strict Compliance Note:</strong> We follow official Google Search guidelines. We do not make false guarantees of #1 rankings; we engineer genuine local relevance and authority that algorithms reward.
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* CTA Bar */}
        <ScrollReveal data-reveal="up" delay={200}>
          <div className="p-8 rounded-3xl bg-[#111111] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
            <div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#5D2E85] block mb-1">
                Zero-Obligation Diagnostic
              </span>
              <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight">
                Claim Your Free Google Business Profile Audit
              </h3>
              <p className="font-body text-xs sm:text-sm text-white/70 max-w-xl mt-1">
                We will inspect your current profile, category alignment, local search visibility, and competitor gaps — and give you an actionable checklist.
              </p>
            </div>
            <a
              href={WA_GMB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-bold text-xs uppercase tracking-widest text-white bg-[#5D2E85] hover:bg-[#4C266D] transition-colors duration-200 shadow-sm shrink-0 w-full md:w-auto"
            >
              <span>Get Your GMB Audited</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
