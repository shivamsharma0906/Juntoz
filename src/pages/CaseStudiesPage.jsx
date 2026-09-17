import { useState } from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import ScrollReveal from '../components/ScrollReveal';
import PageMeta from '../components/PageMeta';

const CATEGORIES = [
  'All Case Studies',
  'Paid Acquisition',
  'Local Search & GMB',
  'Beauty Verticals',
  'Brand & Creative',
];

const TELEMETRY_METRICS = [
  { value: '₹4.2 Cr+', label: 'Tracked Client Revenue', desc: 'Attributable client booking and product revenue generated to date.' },
  { value: '3.8×', label: 'Average Inquiries Lift', desc: 'Average increase in weekly qualified bookings across client deployments.' },
  { value: '4.4×', label: 'Top Blended ROAS', desc: 'Sustained return on ad spend on active Meta & Google Ads campaigns.' },
  { value: '100%', label: 'Attributable ROI', desc: 'Every rupee accounted for with conversion tracking and CRM attribution.' },
];

const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'Funnel & DM Diagnostic',
    desc: 'We audit your social profiles, landing pages, and ad accounts to locate the precise friction points where paying clients abandon the journey.',
    tag: 'Audit Phase',
  },
  {
    step: '02',
    title: 'Acquisition Architecture',
    desc: 'We configure precision Google Search keywords, Meta custom & lookalike audiences, and Google Maps Local 3-Pack citation structures.',
    tag: 'Media Engine',
  },
  {
    step: '03',
    title: 'Camera & 4K iPhone Shoots',
    desc: 'Our Delhi & Mumbai production crews shoot high-resolution camera lookbooks and algorithm-optimized 4K iPhone transformation reels.',
    tag: 'Creative Production',
  },
  {
    step: '04',
    title: 'WhatsApp Lead Conversion',
    desc: 'High-intent prospects are automatically triaged and routed into 1-tap WhatsApp consultation flows for rapid closure.',
    tag: 'Conversion Engine',
  },
];

const CLIENT_TESTIMONIALS = [
  {
    quote: 'Our bridal calendar for Q4 was completely booked out 4 months before peak wedding season. Best investment in digital acquisition we ever made.',
    author: 'Amara Luxe Bridal Studio',
    location: 'Mumbai',
    niche: 'Bridal Specialist',
    metric: '+310% Bookings',
  },
  {
    quote: 'Ranking in the top 3 on Google Maps changed everything for our business. We now get 15+ direct calls every single day without spending on ads.',
    author: 'Aura Salon & Clinics',
    location: 'Delhi NCR',
    niche: 'Salon & Clinic Chain',
    metric: '+420% Direct Calls',
  },
  {
    quote: 'We used to spend weeks calling potential students manually. With Juntoz’s WhatsApp funnel, every single seat was booked and deposited in under 2 weeks.',
    author: 'Artistry Academy of Makeup & Hair',
    location: 'Mumbai',
    niche: 'Beauty Educator',
    metric: '100% Sold Out',
  },
];

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Case Studies');

  const filteredStudies = selectedCategory === 'All Case Studies'
    ? caseStudies
    : caseStudies.filter((s) => {
        if (selectedCategory === 'Paid Acquisition') return s.specialty === 'Paid Acquisition' || s.category === 'Meta Ads' || s.category === 'Google Ads';
        if (selectedCategory === 'Local Search & GMB') return s.specialty === 'Local Search & GMB' || s.category === 'GMB' || s.category === 'Local SEO';
        if (selectedCategory === 'Beauty Verticals') return s.specialty === 'Beauty Verticals' || s.category === 'Bridal' || s.category === 'Academy';
        if (selectedCategory === 'Brand & Creative') return s.specialty === 'Brand & Creative' || s.category === 'Editorial' || s.category === 'Branding';
        return true;
      });

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen bg-[#F7F6F2]">
      <PageMeta
        title="Client Case Studies & Proven Growth Systems — Juntoz"
        description="Explore documented client case studies showing verified revenue growth, Google Maps 3-Pack rankings, high-ROAS ad campaigns, and full-funnel systems."
        path="/case-studies"
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        {/* ════ SECTION 1: EDITORIAL HEADER ════ */}
        <section className="mb-14 md:mb-18 text-center max-w-4xl mx-auto">
          <ScrollReveal data-reveal="up">
            
          </ScrollReveal>

          <ScrollReveal data-reveal="up" delay={60}>
            <h1 className="font-heading font-normal text-[#111111] text-4xl sm:text-6xl md:text-7xl leading-[1.12] mb-6">
              Real Businesses. <br />
              <span className="text-[#5D2E85]">Documented Growth.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal data-reveal="up" delay={120}>
            <p className="font-sans text-[#5F5F5A] text-base md:text-lg max-w-xl leading-relaxed mx-auto mb-8">
              The exact campaigns, funnels, and results. No fluff.
            </p>
          </ScrollReveal>

          {/* Category Filter Pills */}
          <ScrollReveal data-reveal="up" delay={180}>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-2">
              {CATEGORIES.map((cat) => {
                const count = cat === 'All Case Studies'
                  ? caseStudies.length
                  : caseStudies.filter((s) => {
                      if (cat === 'Paid Acquisition') return s.specialty === 'Paid Acquisition' || s.category === 'Meta Ads' || s.category === 'Google Ads';
                      if (cat === 'Local Search & GMB') return s.specialty === 'Local Search & GMB' || s.category === 'GMB' || s.category === 'Local SEO';
                      if (cat === 'Beauty Verticals') return s.specialty === 'Beauty Verticals' || s.category === 'Bridal' || s.category === 'Academy';
                      if (cat === 'Brand & Creative') return s.specialty === 'Brand & Creative' || s.category === 'Editorial' || s.category === 'Branding';
                      return true;
                    }).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-semibold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#5D2E85] text-white shadow-[0_4px_16px_rgba(93,46,133,0.3)]'
                        : 'bg-white text-[#5F5F5A] hover:text-[#111111] hover:border-[#5D2E85]/50 border border-[#DEDED7]'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                      selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-[#F1E7F9] text-[#5D2E85]'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        </section>

        {/* ════ SECTION 2: 4-COLUMN TELEMETRY METRICS ROW ════ */}
        <section className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TELEMETRY_METRICS.map((metric, i) => (
              <ScrollReveal key={i} data-reveal="up" delay={i * 60}>
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#DEDED7] shadow-card hover:border-[#5D2E85]/40 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="font-heading font-black text-3xl sm:text-4xl text-[#5D2E85] mb-2 tracking-tight">
                      {metric.value}
                    </div>
                    <div className="font-heading font-bold text-sm text-[#111111] mb-2">
                      {metric.label}
                    </div>
                    <p className="font-sans text-xs text-[#5F5F5A] leading-relaxed">
                      {metric.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ════ SECTION 3: DETAILED CASE STUDIES GRID ════ */}
        <section className="mb-20 md:mb-28">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#DEDED7]">
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#5F5F5A]">
              Showing <strong className="text-[#111111]">{filteredStudies.length}</strong> Case Studies
            </span>
            <span className="text-xs text-[#5D2E85] font-semibold">
              Category: {selectedCategory}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredStudies.map((study, idx) => (
              <ScrollReveal key={study.slug} data-reveal="up" delay={idx * 60}>
                <Link to={`/case-study/${study.slug}`} className="group block h-full">
                  <div className="h-full bg-white rounded-3xl p-7 sm:p-9 flex flex-col justify-between border border-[#DEDED7] shadow-card hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
                    
                    <div>
                      {/* Top tags */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="font-sans font-bold text-[11px] tracking-wider uppercase px-3 py-1 rounded-full bg-[#F1E7F9] text-[#5D2E85] border border-[#5D2E85]/20">
                          {study.industry || study.category}
                        </span>
                        <span className="font-mono text-xs font-semibold text-[#5F5F5A] bg-[#F7F6F2] px-2.5 py-1 rounded-md">
                          {study.timeline}
                        </span>
                      </div>

                      {/* Image Thumbnail */}
                      <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-[#F7F6F2] border border-[#DEDED7]/80 relative">
                        <img
                          src={study.image}
                          alt={study.clientName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#111111]/80 text-white font-mono text-[10px] uppercase font-bold tracking-wider backdrop-blur-sm">
                          {study.category}
                        </div>
                        <div className="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-[#5D2E85] text-white font-heading font-black text-xs shadow-md">
                          {study.metric}
                        </div>
                      </div>

                      {/* Main Metric Banner */}
                      <div className="mb-5 pb-5 border-b border-[#DEDED7]/60">
                        <p className="font-sans text-[#5F5F5A] text-[11px] uppercase tracking-wider font-bold mb-1">
                          {study.metricLabel}
                        </p>
                        <div className="font-heading font-black uppercase text-[#5D2E85] tracking-tight text-3xl sm:text-4xl">
                          {study.metric}
                        </div>
                      </div>

                      {/* Client Name & Problem */}
                      <h2 className="font-heading font-black text-[#111111] text-xl sm:text-2xl uppercase tracking-tight mb-2.5 group-hover:text-[#5D2E85] transition-colors">
                        {study.clientName}
                      </h2>
                      <p className="font-mono text-xs text-[#5D2E85] font-bold mb-3">
                        {study.handle}
                      </p>
                      <p className="font-sans text-[#5F5F5A] text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                        {study.problem}
                      </p>

                      {/* Pull Quote Box */}
                      {study.quote && (
                        <div className="p-4 rounded-2xl bg-[#F7F6F2] border border-[#DEDED7]/80 text-xs italic text-[#111111]/90 mb-6 leading-relaxed">
                          {study.quote}
                        </div>
                      )}
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-4 border-t border-[#DEDED7] flex items-center justify-between">
                      <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#111111] group-hover:text-[#5D2E85] transition-colors">
                        Read Detailed Case Study
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#F1E7F9] text-[#5D2E85] group-hover:bg-[#5D2E85] group-hover:text-white flex items-center justify-center transition-all duration-200">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>

                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ════ SECTION 4: 4-STEP METHODOLOGY ════ */}
        <section className="mb-20 md:mb-28">
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-[#DEDED7] shadow-card">
            <div className="max-w-3xl mb-12">
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#5D2E85] mb-2 block">
                The Juntoz Growth System
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#111111] mb-4">
                How We Engineer Results.
              </h2>
              <p className="font-sans text-[#5F5F5A] text-sm sm:text-base leading-relaxed">
                4 phases. Proven order. Repeatable results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {METHODOLOGY_STEPS.map((step) => (
                <div key={step.step} className="p-6 rounded-2xl bg-[#F7F6F2] border border-[#DEDED7]/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono font-black text-2xl text-[#5D2E85]">
                        {step.step}
                      </span>
                      <span className="font-mono text-[10px] font-bold uppercase text-[#5F5F5A] bg-white px-2 py-0.5 rounded border border-[#DEDED7]">
                        {step.tag}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#111111] mb-2">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs text-[#5F5F5A] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════ SECTION 5: CLIENT TESTIMONIALS ════ */}
        <section className="mb-20 md:mb-28">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#5D2E85] mb-2 block">
              Verified Client Feedback
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight text-[#111111]">
              What Our Partners Say.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_TESTIMONIALS.map((item, i) => (
              <ScrollReveal key={i} data-reveal="up" delay={i * 70}>
                <div className="p-7 rounded-3xl bg-white border border-[#DEDED7] shadow-card flex flex-col justify-between h-full hover:border-[#5D2E85]/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-amber-500 font-bold text-sm">★★★★★</span>
                      <span className="text-[10px] font-mono font-bold uppercase text-[#287A55] bg-[#287A55]/10 px-2 py-0.5 rounded-full">
                        {item.metric}
                      </span>
                    </div>
                    <p className="font-sans text-sm text-[#111111]/85 italic leading-relaxed mb-6">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DEDED7]">
                    <h4 className="font-heading font-bold text-sm text-[#111111]">
                      {item.author}
                    </h4>
                    <p className="font-sans text-xs text-[#5F5F5A]">
                      {item.niche} • {item.location}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ════ SECTION 6: CONVERSION BANNER ════ */}
        <section className="max-w-4xl mx-auto">
          <ScrollReveal data-reveal="up">
            <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D2E85]/20 rounded-full blur-[80px] pointer-events-none" />
              
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-white font-heading font-bold text-xs uppercase tracking-wider mb-4">
                Next Campaign Cohort Open
              </span>
              
              <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight mb-4 relative z-10">
                Ready to Become Our <br />
                <span className="text-[#5D2E85]">Next Case Study?</span>
              </h2>
              
              <p className="font-sans text-white/70 text-sm sm:text-base max-w-lg mx-auto mb-8 relative z-10 leading-relaxed">
                Tell us your goal. We'll map the exact funnel to get there.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <a
                  href="https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20reviewed%20your%20case%20studies%20and%20want%20to%20discuss%20scaling%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#5D2E85] hover:bg-[#4C266D] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-[0_4px_20px_rgba(93,46,133,0.4)] active:scale-95 transition-all"
                >
                  <span>Chat on WhatsApp</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
                >
                  <span>Schedule Strategy Call</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </div>
  );
}
