import { useParams, Navigate, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import ScrollReveal from '../components/ScrollReveal';
import PageMeta from '../components/PageMeta';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <PageMeta
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />
      <div className="container mx-auto px-6 max-w-3xl">
        
        {/* Back Link */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-12 transition-colors font-body text-xs uppercase tracking-widest font-bold">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Blog
        </Link>

        {/* Header */}
        <ScrollReveal data-reveal="up" className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="font-body font-bold text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
              style={{ background: `${post.color}15`, border: `1px solid ${post.color}40`, color: post.color }}>
              {post.category}
            </span>
            <span className="font-body text-white/40 text-xs font-semibold">{post.date} • {post.readTime}</span>
          </div>
          
          <h1 className="font-heading font-black text-white text-3xl sm:text-4xl md:text-5xl uppercase leading-tight tracking-tighter mb-8">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 pt-6 border-t border-white/10">
            <div className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-black text-xl text-white shadow-lg"
                 style={{ background: `linear-gradient(135deg, ${post.color}, #05050C)` }}>
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="font-body text-white text-sm font-bold uppercase tracking-widest">{post.author}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Hero Image */}
        <ScrollReveal data-reveal="up" delay={100} className="mb-16">
          <div className="w-full aspect-video rounded-3xl overflow-hidden relative" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="absolute inset-0 bg-black/20 z-10" />
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </ScrollReveal>

        {/* Blog Content */}
        <ScrollReveal data-reveal="up" delay={150}>
          {/* Note: using dangerouslySetInnerHTML here since it's placeholder static data, but in production this should be parsed or sanitized. */}
          <article className="prose prose-invert prose-lg max-w-none font-body leading-relaxed text-white/70 
            prose-headings:font-heading prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-white
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:flex prose-h2:items-center prose-h2:gap-4
            prose-p:mb-6 prose-a:text-[#00F5D4]"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </ScrollReveal>

      </div>
    </div>
  );
}
