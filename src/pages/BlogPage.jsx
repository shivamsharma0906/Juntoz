import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import ScrollReveal from '../components/ScrollReveal';
import PageMeta from '../components/PageMeta';

const CATEGORIES = ['All', ...new Set(blogPosts.map(p => p.category))];

function CardTitle({ title, color, size = 'sm' }) {
  const textClass = size === 'lg'
    ? 'font-heading font-black uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-none'
    : 'font-heading font-black uppercase tracking-tight text-xl sm:text-2xl mb-4 leading-snug';

  return (
    <h2 className={`${textClass} relative`}>
      <span className="block text-white transition-opacity duration-500 group-hover:opacity-0">{title}</span>
      <span
        className="absolute inset-0 block text-transparent bg-clip-text opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ backgroundImage: `linear-gradient(90deg, #ffffff, ${color})` }}
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
    <div className="pt-24 sm:pt-32 md:pt-40 pb-24 min-h-screen bg-background relative overflow-hidden">
      <PageMeta
        title="Growth Blog — Salon & MUA Marketing Strategies | Juntoz"
        description="Get tactical guides on Meta Ads testing, speed-to-lead WhatsApp automation, and booking funnel optimization to scale your beauty brand."
        path="/blog"
      />

      {/* ── Background Immersive Glow Elements ── */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#FF3AF2]/5 blur-[140px] animate-[float-glow_15s_ease-in-out_infinite] pointer-events-none z-0" />
      <div className="absolute top-40 right-1/4 w-[600px] h-[600px] rounded-full bg-[#00F5D4]/5 blur-[160px] animate-[float-glow_20s_ease-in-out_infinite_alternate] pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

        {/* ── Creative Typographic Header ── */}
        <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/10 pb-12">
          <ScrollReveal data-reveal="up" className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-pulse" />
              <span className="font-body font-bold text-white/80 text-[10px] tracking-[0.2em] uppercase">The Knowledge base</span>
            </div>
            
            <h1 className="font-heading font-black text-white text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter leading-none mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3AF2] via-[#9855FF] to-[#00F5D4]">Growth</span> <br /> Hub.
            </h1>
            
            <p className="font-body text-white/50 text-sm sm:text-base max-w-xl leading-relaxed">
              Tactical blueprints, technical breakdowns, and marketing architectures designed to scale modern businesses into category leaders.
            </p>
          </ScrollReveal>

          {/* ── Floating Category selector dock ── */}
          <ScrollReveal data-reveal="fade" delay={150} className="w-full md:w-auto flex justify-center md:justify-end">
            <div className="inline-flex flex-wrap items-center justify-center bg-[#0E0E1C]/45 backdrop-blur-xl border border-white/10 p-2 rounded-3xl gap-2 shadow-2xl">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`font-heading font-bold text-[10px] uppercase tracking-widest px-5 py-3 rounded-2xl transition-all duration-500 cursor-pointer ${
                    activeCategory === category
                      ? 'bg-white text-background shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                      : 'bg-transparent text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ── Featured Post (Asymmetric Hero Layout) ── */}
        {featuredPost && (
          <ScrollReveal data-reveal="up" delay={200} className="mb-16 md:mb-24">
            <Link to={`/blog/${featuredPost.slug}`} className="group block relative rounded-[2.5rem] overflow-hidden p-[1px] transition-all duration-500 hover:-translate-y-1.5">
              
              {/* Dynamic border gradient mapping */}
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `linear-gradient(135deg, ${featuredPost.color}80, transparent 60%, ${featuredPost.color}80)` }}
              />

              <div className="relative bg-[#08080E]/90 backdrop-blur-2xl rounded-[39px] overflow-hidden flex flex-col lg:flex-row">
                
                {/* Content Frame */}
                <div className="w-full lg:w-[55%] p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative z-20 order-2 lg:order-1 min-h-[380px] lg:min-h-[500px]">
                  
                  {/* Subtle ambient light pool */}
                  <div
                    className="absolute -top-32 -left-32 w-80 h-80 rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                    style={{ background: featuredPost.color }}
                  />

                  <div>
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <span
                        className="font-body font-bold text-[9px] tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full border"
                        style={{
                          color: featuredPost.color,
                          borderColor: `${featuredPost.color}30`,
                          background: `${featuredPost.color}08`
                        }}
                      >
                        {featuredPost.category}
                      </span>
                      <span className="font-body text-white/40 text-xs font-semibold">{featuredPost.readTime}</span>
                    </div>

                    <div className="relative z-10 mb-4">
                      <CardTitle title={featuredPost.title} color={featuredPost.color} size="lg" />
                    </div>

                    <p className="relative z-10 font-body text-white/50 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between pt-8 border-t border-white/5 mt-auto">
                    <div className="flex flex-col">
                      <span className="font-body text-white/80 text-[10px] font-bold uppercase tracking-widest leading-none">{featuredPost.author}</span>
                      <span className="font-body text-white/40 text-[9px] uppercase tracking-widest mt-2">{featuredPost.date}</span>
                    </div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 border border-white/10 group-hover:border-white/30"
                      style={{
                        background: `${featuredPost.color}08`,
                        color: featuredPost.color
                      }}
                    >
                      <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                </div>

                {/* Media Image Frame with Neon Scanning Sweep */}
                <div className="w-full lg:w-[45%] h-[300px] lg:h-auto relative overflow-hidden order-1 lg:order-2">
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#08080E] via-[#08080E]/20 to-transparent z-10" />
                  
                  {/* Glowing scan bar animation */}
                  <div 
                    className="absolute left-0 w-full h-[2px] opacity-0 group-hover:opacity-75 transition-opacity duration-300 z-20 animate-[scan_3s_ease-in-out_infinite]"
                    style={{ background: `linear-gradient(90deg, transparent, ${featuredPost.color}, transparent)`, boxShadow: `0 0 10px ${featuredPost.color}` }}
                  />

                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-105" 
                  />
                </div>

              </div>
            </Link>
          </ScrollReveal>
        )}

        {/* ── Remaining Posts (Staggered Grid) ── */}
        {remainingPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post, idx) => (
              <ScrollReveal key={post.slug} data-reveal="up" delay={idx * 100}>
                <Link to={`/blog/${post.slug}`} className="group block relative rounded-[2rem] overflow-hidden p-[1px] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">

                  {/* Active Neon Border glow on hover */}
                  <div
                    className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${post.color}80, transparent 65%, ${post.color}80)` }}
                  />

                  <div className="relative h-full bg-[#0E0E1C]/35 backdrop-blur-xl rounded-[31px] p-8 flex flex-col z-10 overflow-hidden">
                    
                    {/* Corner gradient light pool */}
                    <div
                      className="absolute -top-32 -right-32 w-72 h-72 rounded-full blur-[80px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
                      style={{ background: post.color }}
                    />

                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <span
                        className="font-body font-bold text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full border"
                        style={{
                          color: post.color,
                          borderColor: `${post.color}35`,
                          background: `${post.color}08`
                        }}
                      >
                        {post.category}
                      </span>
                      <span className="font-body text-white/40 text-xs font-semibold">{post.readTime}</span>
                    </div>

                    <div className="flex-1 relative z-10">
                      <CardTitle title={post.title} color={post.color} size="sm" />
                      <p className="font-body text-white/50 text-xs sm:text-sm leading-relaxed mb-8">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 relative z-10 border-t border-white/5 flex items-center justify-between mt-auto">
                      <div className="flex flex-col">
                        <span className="font-body text-white/70 text-[10px] font-bold uppercase tracking-widest leading-none">{post.author}</span>
                        <span className="font-body text-white/40 text-[9px] uppercase tracking-widest mt-2">{post.date}</span>
                      </div>

                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 border border-white/10 group-hover:border-white/30"
                        style={{
                          background: `${post.color}08`,
                          color: post.color
                        }}
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
          <div className="py-24 text-center">
            <p className="font-body text-white/40 text-lg">No posts found in this category.</p>
          </div>
        )}

      </div>

      <style>{`
        @keyframes float-glow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(5%, 5%) scale(1.1); }
        }
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          5% { opacity: 0.75; }
          95% { opacity: 0.75; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
