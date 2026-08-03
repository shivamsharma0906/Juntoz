import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import ScrollReveal from '../components/ScrollReveal';
import PageMeta from '../components/PageMeta';

const CATEGORIES = ['All', ...new Set(blogPosts.map(p => p.category))];

// Card title that is white by default and becomes a gradient on hover
function CardTitle({ title, color, size = 'sm' }) {
  const textClass = size === 'lg'
    ? 'font-heading font-black uppercase tracking-tight text-3xl md:text-4xl lg:text-5xl mb-6'
    : 'font-heading font-black uppercase tracking-tight text-2xl mb-4';

  return (
    <h2 className={`${textClass} relative`}>
      {/* Default white text */}
      <span className="block text-white transition-opacity duration-300 group-hover:opacity-0">{title}</span>
      {/* Gradient text shown on hover */}
      <span
        className="absolute inset-0 block text-transparent bg-clip-text opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundImage: `linear-gradient(90deg, #fff, ${color})` }}
      >
        {title}
      </span>
    </h2>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="pt-28 md:pt-36 pb-20 min-h-screen bg-background">
      <PageMeta
        title="Blog — Marketing Insights & Strategy"
        description="Tactical breakdowns, paid ads strategies, and proven growth systems for ambitious brands. Updated regularly by the Juntoz team."
        path="/blog"
      />
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header Section */}
        <ScrollReveal data-reveal="up" className="mb-6 md:mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF3AF2] animate-pulse" />
            <span className="font-body font-semibold text-white/80 text-[10px] tracking-widest uppercase">The Growth Hub</span>
          </div>
          <div className="flex justify-center my-3">
            <img src="/insights_balloon.png" alt="Insights" className="h-20 sm:h-32 md:h-44 lg:h-52 object-contain select-none pointer-events-none" />
          </div>
          <p className="font-body text-white/50 text-sm md:text-base max-w-xl leading-relaxed mx-auto">
            Tactical breakdowns, algorithm updates, and growth systems for forward-thinking beauty brands.
          </p>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal data-reveal="up" delay={100} className="mb-16">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-body text-xs sm:text-sm font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 border ${
                  activeCategory === category
                    ? 'bg-white text-background border-white'
                    : 'bg-transparent text-white/60 border-white/20 hover:border-white/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Featured Post */}
        {featuredPost && (
          <ScrollReveal data-reveal="up" delay={200} className="mb-12 lg:mb-16">
            <Link to={`/blog/${featuredPost.slug}`} className="group block relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden p-[1px] transition-transform duration-500 hover:-translate-y-2">

              {/* Animated border glow — faint by default, vivid on hover */}
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${featuredPost.color}80, transparent 50%, ${featuredPost.color}80)` }}
              />

              <div className="relative bg-[#0A0A0F] rounded-[31px] lg:rounded-[39px] overflow-hidden flex flex-col md:flex-row">

                {/* Image side */}
                <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden order-1 md:order-2">
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#0A0A0F] via-[#0A0A0F]/40 to-transparent z-10" />
                  <img src={featuredPost.image} alt={featuredPost.title} fetchPriority="high" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>

                {/* Content side */}
                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-20 order-2 md:order-1">

                  <div
                    className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
                    style={{ background: featuredPost.color }}
                  />

                  <div className="flex flex-wrap items-center gap-4 mb-6 relative z-10">
                    <span
                      className="font-body font-bold text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                      style={{ background: `${featuredPost.color}15`, border: `1px solid ${featuredPost.color}40`, color: featuredPost.color }}
                    >
                      {featuredPost.category}
                    </span>
                    <span className="font-body text-white/50 text-xs font-semibold">{featuredPost.readTime}</span>
                  </div>

                  <div className="relative z-10">
                    <CardTitle title={featuredPost.title} color={featuredPost.color} size="lg" />
                  </div>

                  <p className="relative z-10 font-body text-white/60 text-base md:text-lg leading-relaxed mb-10">
                    {featuredPost.excerpt}
                  </p>

                  <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                    <div className="flex flex-col">
                      <span className="font-body text-white/80 text-xs font-bold uppercase tracking-widest">{featuredPost.author}</span>
                      <span className="font-body text-white/40 text-[10px] uppercase tracking-widest mt-1">{featuredPost.date}</span>
                    </div>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 border border-white/10 group-hover:border-white/30"
                      style={{ color: featuredPost.color }}
                    >
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                </div>
              </div>
            </Link>
          </ScrollReveal>
        )}

        {/* Remaining Posts Grid */}
        {remainingPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post, idx) => (
              <ScrollReveal key={post.slug} data-reveal="up" delay={idx * 100}>
                <Link to={`/blog/${post.slug}`} className="group block relative rounded-[2rem] overflow-hidden p-[1px] transition-transform duration-500 hover:-translate-y-2 h-full flex flex-col">

                  {/* Animated border glow — faint by default, vivid on hover */}
                  <div
                    className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${post.color}80, transparent 50%, ${post.color}80)` }}
                  />

                  <div className="relative h-full bg-[#0A0A0F] rounded-[31px] p-6 sm:p-8 flex flex-col z-10 overflow-hidden">

                    <div
                      className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
                      style={{ background: post.color }}
                    />

                    <div className="flex flex-wrap items-center gap-4 mb-6 relative z-10">
                      <span
                        className="font-body font-bold text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                        style={{ background: `${post.color}15`, border: `1px solid ${post.color}40`, color: post.color }}
                      >
                        {post.category}
                      </span>
                      <span className="font-body text-white/40 text-xs font-semibold">{post.readTime}</span>
                    </div>

                    <div className="flex-1 relative z-10">
                      <CardTitle title={post.title} color={post.color} size="sm" />
                      <p className="font-body text-white/50 text-sm leading-relaxed mb-8">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 relative z-10 border-t border-white/10 flex items-center justify-between mt-auto">
                      <div className="flex flex-col">
                        <span className="font-body text-white/70 text-[10px] font-bold uppercase tracking-widest">{post.author}</span>
                        <span className="font-body text-white/30 text-[9px] uppercase tracking-widest mt-1">{post.date}</span>
                      </div>

                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10 border border-white/10"
                        style={{ color: post.color }}
                      >
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-body text-white/50 text-lg">No posts found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}
