import { useState } from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import ScrollReveal from '../components/ScrollReveal';
import PageMeta from '../components/PageMeta';

const CATEGORIES = ['All Projects', 'Paid Acquisition', 'Local Search & GMB', 'Brand & Creative', 'Beauty Verticals'];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  const filteredStudies = selectedCategory === 'All Projects'
    ? caseStudies
    : caseStudies.filter((s) => {
        if (selectedCategory === 'Paid Acquisition') return s.category === 'Meta Ads' || s.category === 'Google Ads' || s.category === 'Acquisition';
        if (selectedCategory === 'Local Search & GMB') return s.category === 'GMB' || s.category === 'Local SEO' || s.category === 'Salon';
        if (selectedCategory === 'Brand & Creative') return s.category === 'Branding' || s.category === 'Content' || s.category === 'CRO';
        if (selectedCategory === 'Beauty Verticals') return s.category === 'Bridal' || s.category === 'Academy' || s.category === 'Editorial' || s.category === 'Salon';
        return true;
      });

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen bg-[#F7F6F2]">
      <PageMeta
        title="Case Studies & Client Growth Blueprints — Juntoz Digital Marketing Agency"
        description="See the exact funnels, ad campaigns, and brand systems we deployed to scale businesses across performance marketing, search, and specialized verticals."
        path="/work"
      />
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        <ScrollReveal data-reveal="up" className="mb-10 md:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DEDED7] bg-white shadow-subtle mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E84A2A]" />
            <span className="font-body font-bold text-[#5F5F5A] text-[11px] tracking-wider uppercase">Verified Agency Proof</span>
          </div>

          <h1 className="font-heading font-black text-[#111111] text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.96] mb-5">
            Proven <span className="text-[#E84A2A]">Results.</span>
          </h1>

          <p className="font-body text-[#5F5F5A] text-base md:text-xl max-w-2xl leading-relaxed mx-auto mb-6">
            Explore how we help ambitious businesses, local clinics, and specialized brands scale revenue using full-funnel digital growth architectures.
          </p>

          {/* Editorial Proof Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-3 rounded-2xl bg-white border border-[#DEDED7] shadow-subtle mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#287A55] animate-pulse" />
              <span className="font-body text-[11px] uppercase tracking-wider font-bold text-[#5F5F5A]">Verified Client Impact</span>
            </div>
            <span className="hidden sm:inline text-[#DEDED7]">•</span>
            <span className="font-heading font-black text-xs uppercase tracking-wider text-[#111111]">3.1× Avg. Inquiries Growth</span>
            <span className="hidden sm:inline text-[#DEDED7]">•</span>
            <span className="font-heading font-black text-xs uppercase tracking-wider text-[#111111]">5.0 ★ Google Rating</span>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-white text-[#5F5F5A] hover:text-[#111111] hover:border-[#111111] border border-[#DEDED7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-10">
          {filteredStudies.map((study, idx) => (
            <ScrollReveal key={study.slug} data-reveal="up" delay={idx * 60}>
              <Link to={`/work/${study.slug}`} className="group block h-full">
                <div className="h-full bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-[#DEDED7] shadow-card hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
                  
                  <div>
                    {/* Top tags */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-body font-bold text-[11px] tracking-wider uppercase px-3.5 py-1 rounded-full bg-[#FBE9E4] text-[#E84A2A] border border-[#E84A2A]/20">
                        {study.specialty || study.category}
                      </span>
                      <span className="font-body text-xs font-semibold text-[#5F5F5A]">
                        {study.timeline}
                      </span>
                    </div>

                    {/* Main Metric */}
                    <div className="mb-6">
                      <p className="font-body text-[#5F5F5A] text-xs uppercase tracking-wider font-bold mb-1">{study.metricLabel}</p>
                      <div className="font-heading font-black uppercase text-[#E84A2A] tracking-tight text-3xl sm:text-4xl md:text-5xl">
                        {study.metric}
                      </div>
                    </div>
                  </div>

                  {/* Client & Description */}
                  <div className="pt-6 border-t border-[#DEDED7]">
                    <h3 className="font-heading font-black text-[#111111] text-2xl uppercase tracking-tight mb-2">
                      {study.clientName}
                    </h3>
                    <p className="font-body text-[#5F5F5A] text-sm leading-relaxed line-clamp-2 mb-6">
                      {study.problem}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#E84A2A] transition-colors duration-200">
                      <span>Read Case Study</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
}
