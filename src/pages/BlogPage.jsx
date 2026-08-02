import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import ScrollReveal from '../components/ScrollReveal';
import PageMeta from '../components/PageMeta';

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <PageMeta
        title="Blog — Beauty Marketing Insights & Strategy"
        description="Tactical breakdowns, Instagram algorithm updates, and proven growth systems for beauty brands in India. Updated regularly by the Juntoz team."
        path="/blog"
      />
      <div className="container mx-auto px-6 max-w-7xl">
        
        <ScrollReveal data-reveal="up" className="mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF3AF2] animate-pulse" />
            <span className="font-body font-semibold text-white/80 text-[10px] tracking-widest uppercase">The Growth Hub</span>
          </div>
          <h1 className="font-heading font-black text-white text-4xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tighter mb-6">
            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3AF2] to-[#7B2FFF]">Strategy</span>
          </h1>
          <p className="font-body text-white/50 text-sm md:text-base max-w-xl leading-relaxed mx-auto sm:mx-0">
            Tactical breakdowns, algorithm updates, and growth systems for forward-thinking beauty brands.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {blogPosts.map((post, idx) => (
            <ScrollReveal key={post.slug} data-reveal="up" delay={idx * 100}>
              <Link to={`/blog/${post.slug}`} className="group block relative rounded-[2rem] overflow-hidden p-[1px] transition-transform duration-500 hover:-translate-y-2">
                
                {/* border sweep */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-30 group-hover:opacity-100 transition-opacity duration-500 animate-[gradient-shift_4s_ease-in-out_infinite]"
                  style={{ background: `linear-gradient(135deg, ${post.color}60, transparent, ${post.color}60)` }} />
                
                <div className="relative h-full bg-[#0A0A0F]/95 backdrop-blur-2xl rounded-[31px] p-6 sm:p-8 flex flex-col z-10 overflow-hidden">
                  
                  {/* bg glow */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
                    style={{ background: post.color }} />

                  {/* Header tags */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 relative z-10">
                    <span className="font-body font-bold text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                      style={{ background: `${post.color}15`, border: `1px solid ${post.color}40`, color: post.color }}>
                      {post.category}
                    </span>
                    <span className="font-body text-white/30 text-xs font-semibold">{post.readTime}</span>
                  </div>

                  {/* Title & Excerpt */}
                  <div className="flex-1 relative z-10">
                    <h3 className="font-heading font-black text-white text-2xl sm:text-3xl uppercase tracking-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text transition-colors duration-300"
                      style={{ backgroundImage: `linear-gradient(90deg, #fff, ${post.color})` }}>
                      {post.title}
                    </h3>
                    <p className="font-body text-white/50 text-sm leading-relaxed mb-8">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Meta / Author */}
                  <div className="pt-6 relative z-10 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-body text-white/70 text-xs font-bold uppercase tracking-widest">{post.author}</span>
                      <span className="font-body text-white/30 text-[10px] uppercase tracking-widest mt-1">{post.date}</span>
                    </div>
                    
                    <div className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10 border border-white/10">
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
      
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
