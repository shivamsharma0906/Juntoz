import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import ScrollReveal from '../components/ScrollReveal';
import PageMeta from '../components/PageMeta';

const CATEGORIES = ['All', ...new Set(blogPosts.map((p) => p.category))];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredPost = filteredPosts[0];
  const secondaryPosts = filteredPosts.slice(1);

  return (
    <div className="pt-28 sm:pt-36 md:pt-40 pb-24 min-h-screen bg-[#F7F6F2] relative overflow-hidden">
      <PageMeta
        title="Insights & Growth Blueprints | Juntoz Digital Marketing Agency"
        description="Actionable frameworks on performance advertising, local Google search dominance, conversion systems, and business scaling from Juntoz."
        path="/blog"
      />

      <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16 max-w-7xl relative z-10">
        
        {/* ── Editorial Masthead Header ── */}
        <div className="mb-12 sm:mb-16 pb-8 sm:pb-12 border-b border-[#DEDED7]">
          <ScrollReveal data-reveal="up" className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#DEDED7] bg-white shadow-2xs mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E84A2A] animate-pulse" />
              <span className="font-sans font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#111111]">
                Strategic Intelligence &amp; Playbooks
              </span>
            </div>

            <h1 className="font-heading font-black text-[#111111] uppercase tracking-[-0.03em] leading-[0.96] mb-5 text-[2.5rem] sm:text-[3.5rem] md:text-[4.25rem]">
              Growth <span className="text-[#E84A2A]">Insights.</span>
            </h1>

            <p className="font-body text-[#5F5F5A] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Actionable blueprints, paid media teardowns, and conversion architectures written by the practitioners scaling businesses every day.
            </p>
          </ScrollReveal>

          {/* ── Filter & Search Control Bar ── */}
          <ScrollReveal data-reveal="up" delay={120} className="mt-8 pt-6 border-t border-[#DEDED7]/80 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`font-sans text-[11px] sm:text-xs uppercase tracking-wider font-bold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#111111] text-white shadow-xs'
                        : 'bg-white border border-[#DEDED7] text-[#5F5F5A] hover:text-[#111111] hover:border-[#111111]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search strategies..."
                className="w-full bg-white border border-[#DEDED7] rounded-full px-4 py-2 pl-9 text-xs font-body text-[#111111] placeholder:text-[#5F5F5A]/70 focus:outline-hidden focus:border-[#E84A2A] transition-colors"
              />
              <svg
                className="w-4 h-4 text-[#5F5F5A] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#5F5F5A] hover:text-[#111111]"
                >
                  ✕
                </button>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* ── Leading Editorial Feature Article ── */}
        {featuredPost && (
          <ScrollReveal data-reveal="up" delay={150} className="mb-12 sm:mb-16">
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group block relative rounded-3xl overflow-hidden bg-white border border-[#DEDED7] shadow-[0_8px_30px_-6px_rgba(17,17,17,0.06)] hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Text Editorial Box (7 Cols) */}
                <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-4 sm:mb-5">
                      <span className="font-heading font-black text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#FBE9E4] text-[#E84A2A] border border-[#E84A2A]/20">
                        {featuredPost.category}
                      </span>
                      <span className="text-[11px] text-[#5F5F5A] font-body font-semibold">
                        {featuredPost.readTime}
                      </span>
                      <span className="text-[#DEDED7]">•</span>
                      <span className="text-[11px] text-[#5F5F5A] font-body">
                        {featuredPost.date}
                      </span>
                    </div>

                    <h2 className="font-heading font-black uppercase tracking-tight text-2xl sm:text-3xl md:text-4xl text-[#111111] group-hover:text-[#E84A2A] transition-colors leading-[1.04] mb-4">
                      {featuredPost.title}
                    </h2>

                    <p className="font-body text-[#5F5F5A] text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#DEDED7] flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center font-heading font-black text-[10px]">
                        JZ
                      </div>
                      <div>
                        <span className="block font-heading font-bold text-xs uppercase tracking-tight text-[#111111]">
                          {featuredPost.author}
                        </span>
                        <span className="block font-body text-[10px] text-[#5F5F5A] uppercase tracking-wider">
                          Strategic Contributor
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#E84A2A] transition-colors">
                      <span>Read Blueprint</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Media Image Frame (5 Cols) */}
                <div className="lg:col-span-5 relative h-56 sm:h-72 lg:h-auto min-h-[260px] overflow-hidden order-1 lg:order-2 bg-[#EAE8E1]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#111111]/85 backdrop-blur-md text-white text-[10px] font-heading font-bold uppercase tracking-wider">
                    Featured Insight
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        )}

        {/* ── Secondary Articles Grid ── */}
        {secondaryPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {secondaryPosts.map((post, idx) => (
              <ScrollReveal key={post.slug} data-reveal="up" delay={idx * 60}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block h-full bg-white rounded-3xl p-6 sm:p-7 border border-[#DEDED7] shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Media Thumbnail */}
                    <div className="w-full h-44 rounded-2xl overflow-hidden bg-[#EAE8E1] mb-5 relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 font-heading font-bold text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[#111111] border border-[#DEDED7]">
                        {post.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-[#5F5F5A] font-body mb-2.5">
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="font-heading font-black text-lg sm:text-xl text-[#111111] group-hover:text-[#E84A2A] transition-colors uppercase tracking-tight mb-2.5 leading-snug">
                      {post.title}
                    </h3>

                    <p className="font-body text-[#5F5F5A] text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DEDED7] flex items-center justify-between mt-auto">
                    <span className="font-body text-[#111111] text-[11px] font-bold uppercase tracking-wider">
                      {post.author}
                    </span>

                    <span className="w-8 h-8 rounded-full flex items-center justify-center bg-[#F7F6F2] border border-[#DEDED7] text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-200">
                      <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* ── Empty State ── */}
        {filteredPosts.length === 0 && (
          <div className="py-20 text-center bg-white rounded-3xl border border-[#DEDED7] p-8">
            <h3 className="font-heading font-bold text-lg text-[#111111] uppercase mb-2">
              No matching playbooks found
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#5F5F5A] max-w-md mx-auto mb-5">
              Try adjusting your search query or reset the filter to view all strategic insights.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-[#111111] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#E84A2A] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ── Editorial Growth Strategy Callout Banner ── */}
        <ScrollReveal data-reveal="up" className="mt-14 sm:mt-18">
          <div className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left z-10">
              <span className="inline-block font-sans font-bold text-[10px] uppercase tracking-[0.16em] text-[#E84A2A] mb-2">
                Commercial Audit
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight leading-tight mb-3">
                Want these frameworks deployed for your business?
              </h3>
              <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed">
                Book a 1-on-1 strategy call with Juntoz. We'll audit your paid media, local search rankings, and conversion pipeline at zero cost.
              </p>
            </div>

            <div className="shrink-0 z-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-widest text-[#111111] bg-white hover:bg-[#E84A2A] hover:text-white transition-all duration-300 shadow-sm"
              >
                <span>Book Strategy Call</span>
                <span>→</span>
              </Link>
            </div>

            {/* Subtle background decoration */}
            <div
              className="absolute -right-10 -bottom-10 font-heading font-black text-white/[0.03] text-9xl select-none pointer-events-none uppercase"
            >
              JUNTOZ
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
