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
    <div className="min-h-screen bg-[#F7F6F2] relative">
      <PageMeta title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} />
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 z-50 bg-[#DEDED7] w-full">
        <div className="h-full transition-transform duration-150 ease-out origin-left bg-[#E84A2A]"
             style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>

      {/* Hero Header */}
      <div className="relative w-full h-[60vh] min-h-[460px] flex items-end pb-12 overflow-hidden rounded-b-3xl lg:rounded-b-[3.5rem]">
        <div className="absolute inset-0 z-0">
          <img src={post.image} alt={post.title} fetchPriority="high" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/30" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10 pt-28">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors font-body text-xs uppercase tracking-wider font-bold">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Insights
          </Link>
          
          <ScrollReveal data-reveal="up">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-body font-bold text-[11px] tracking-wider uppercase px-3 py-1 rounded-full bg-[#E84A2A] text-white">
                {post.category}
              </span>
              <span className="font-body text-white/70 text-xs font-semibold">{post.date} • {post.readTime}</span>
            </div>
            
            <h1 className="font-heading font-black text-white text-3xl sm:text-5xl md:text-6xl uppercase leading-tight tracking-tight max-w-4xl">
              {post.title}
            </h1>
          </ScrollReveal>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-14 lg:py-20 flex flex-col lg:flex-row gap-12 lg:gap-20 relative">
        
        {/* Sticky Sidebar */}
        <div className="lg:w-[260px] shrink-0">
          <div className="sticky top-32 flex flex-col gap-8 bg-white p-6 rounded-3xl border border-[#DEDED7] shadow-card">
            <div>
              <p className="font-body text-[#5F5F5A] text-[11px] uppercase tracking-wider font-bold mb-3">Written By</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-black text-xl text-white bg-[#111111] shadow-sm">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-body text-[#111111] text-sm font-bold uppercase tracking-wider leading-tight">{post.author}</p>
                  <p className="font-body text-[#5F5F5A] text-xs font-medium mt-0.5">Growth Strategist</p>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-[#DEDED7]" />

            <div>
              <p className="font-body text-[#5F5F5A] text-[11px] uppercase tracking-wider font-bold mb-3">Share Article</p>
              <div className="flex gap-2.5">
                {['TW', 'IN', 'FB'].map((platform, i) => (
                  <button key={i} className="w-10 h-10 rounded-full bg-[#F7F6F2] border border-[#DEDED7] hover:bg-[#111111] hover:text-white transition-colors flex items-center justify-center font-heading font-bold text-xs text-[#111111]">
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="flex-1 bg-white p-8 sm:p-12 rounded-3xl border border-[#DEDED7] shadow-card">
          <ScrollReveal data-reveal="up" delay={150}>
            <p className="font-body text-lg sm:text-xl text-[#111111] leading-relaxed font-medium mb-10 pl-6 border-l-4 border-[#E84A2A] bg-[#F7F6F2] py-4 rounded-r-2xl">
              {post.excerpt}
            </p>
            
            <article className="prose prose-neutral prose-lg max-w-none font-body leading-relaxed text-[#5F5F5A]
              prose-headings:font-heading prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-[#111111]
              prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:mb-6 prose-a:text-[#E84A2A] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-li:mb-2"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </ScrollReveal>
        </div>
      </div>
      
    </div>
  );
}
