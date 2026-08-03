import { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import ScrollReveal from '../components/ScrollReveal';
import PageMeta from '../components/PageMeta';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      setScrollProgress(scroll);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background relative">
      <PageMeta title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} />
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 z-50 bg-white/5 w-full">
        <div className="h-full transition-transform duration-150 ease-out origin-left"
             style={{ transform: `scaleX(${scrollProgress})`, background: post.color }} />
      </div>

      {/* Immersive Hero Header */}
      <div className="relative w-full h-[65vh] min-h-[500px] flex items-end pb-12 overflow-hidden rounded-b-[2.5rem] lg:rounded-b-[4rem]">
        <div className="absolute inset-0 z-0">
          <img src={post.image} alt={post.title} fetchPriority="high" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05050C] via-[#05050C]/60 to-[#05050C]/20" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10 pt-32">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors font-body text-[10px] sm:text-xs uppercase tracking-widest font-bold">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Blog
          </Link>
          
          <ScrollReveal data-reveal="up">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="font-body font-bold text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                style={{ background: `${post.color}20`, border: `1px solid ${post.color}50`, color: post.color, backdropFilter: 'blur(8px)' }}>
                {post.category}
              </span>
              <span className="font-body text-white/60 text-xs font-semibold">{post.date} • {post.readTime}</span>
            </div>
            
            <h1 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tighter max-w-5xl">
              {post.title}
            </h1>
          </ScrollReveal>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-16 lg:py-24 flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        
        {/* Sticky Sidebar */}
        <div className="lg:w-[280px] shrink-0">
          <div className="sticky top-32 flex flex-col gap-10">
            <div>
              <p className="font-body text-white/40 text-[10px] uppercase tracking-widest font-bold mb-4">Written By</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center font-heading font-black text-2xl text-white shadow-lg"
                     style={{ background: `linear-gradient(135deg, ${post.color}, #05050C)`, border: `1px solid ${post.color}40` }}>
                  {post.author.charAt(0)}
                </div>
                <p className="font-body text-white text-sm font-bold uppercase tracking-widest leading-tight">{post.author}</p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent" />

            <div>
              <p className="font-body text-white/40 text-[10px] uppercase tracking-widest font-bold mb-4">Share Article</p>
              <div className="flex gap-3">
                {['TW', 'IN', 'FB'].map((platform, i) => (
                  <button key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center font-heading font-black text-xs text-white/50 hover:text-white">
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="flex-1">
          <ScrollReveal data-reveal="up" delay={150}>
            <p className="font-body text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-12"
               style={{ borderLeft: `2px solid ${post.color}`, paddingLeft: '1.5rem' }}>
              {post.excerpt}
            </p>
            
            <article className="prose prose-invert prose-lg md:prose-xl max-w-none font-body leading-relaxed text-white/60 
              prose-headings:font-heading prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-white
              prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:flex prose-h2:items-center prose-h2:gap-4
              prose-p:mb-8 prose-a:text-[#00F5D4] prose-a:no-underline hover:prose-a:underline prose-li:mb-2"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </ScrollReveal>
        </div>
      </div>
      
    </div>
  );
}
