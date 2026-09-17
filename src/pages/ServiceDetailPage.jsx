import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import ScrollReveal from '../components/ScrollReveal';
import { SERVICE_DETAILS } from '../data/serviceDetails';

const ALL_SERVICES_LIST = [
  { id: 'instagram-management', title: 'Instagram Management', badge: 'Core' },
  { id: 'meta-google-ads', title: 'Meta & Google Ads', badge: 'High ROAS' },
  { id: 'seo', title: 'SEO', badge: 'Organic' },
  { id: 'gmb', title: 'GMB (Google My Business)', badge: 'Local 3-Pack' },
  { id: 'mobile-content-shoot', title: 'Photo & Content Shoot', badge: 'Delhi & Mumbai' },
  { id: 'ai-videos', title: 'AI Videos', badge: 'Trending' },
  { id: 'websites', title: 'Websites & Funnels', badge: 'Web' },
];

function ServiceSimulator({ serviceId, serviceTitle }) {
  switch (serviceId) {
    case 'instagram-management':
      return (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DEDED7] shadow-card">
          <div className="flex items-center justify-between pb-5 border-b border-[#DEDED7]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-0.5">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xs font-bold text-[#111111]">
                  JZ
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-black text-sm text-[#111111]">@yourbrand.official</span>
                  <span className="text-[#5D2E85] text-xs">✓</span>
                </div>
                <p className="text-[11px] text-[#5F5F5A]">Managed by Juntoz Growth System</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#F1E7F9] text-[#5D2E85] font-heading font-black text-[11px]">
              +380% Inbound DMs
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2.5 mt-5">
            {[
              { label: 'Reel Hook', views: '84.2K', tag: 'Viral' },
              { label: 'Transformation', views: '128K', tag: 'High-Intent' },
              { label: 'BTS Setup', views: '49.1K', tag: 'Social Proof' },
            ].map((post, i) => (
              <div key={i} className="aspect-[4/5] rounded-xl bg-[#F7F6F2] border border-[#DEDED7] p-3 flex flex-col justify-between relative overflow-hidden group hover:border-[#5D2E85] transition-colors">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#5D2E85] bg-white px-1.5 py-0.5 rounded shadow-xs">
                    {post.tag}
                  </span>
                  <span className="text-[11px]">▶</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#5F5F5A] block">{post.label}</span>
                  <span className="font-heading font-bold text-xs text-[#111111]">{post.views} views</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3.5 rounded-xl bg-[#F1E7F9]/60 border border-[#5D2E85]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <span className="font-medium text-[#111111]">
              ⚡ Automated WhatsApp DM routing active: inquiries handed off in &lt; 15 mins.
            </span>
            <span className="text-[#5D2E85] font-bold shrink-0">Live Active</span>
          </div>
        </div>
      );

    case 'meta-google-ads':
      return (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DEDED7] shadow-card">
          <div className="flex items-center justify-between pb-5 border-b border-[#DEDED7]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#287A55]" />
              <span className="font-heading font-black text-sm text-[#111111]">
                Live Google &amp; Meta Ad Attribution Engine
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#287A55]/10 text-[#287A55] font-heading font-black text-[11px]">
              Target ROAS: 4.2×
            </span>
          </div>

          <div className="mt-5 space-y-3">
            <div className="p-4 rounded-2xl bg-[#F7F6F2] border border-[#DEDED7]">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-[#111111]">Google Sponsored Search #1</span>
                <span className="text-[10px] uppercase font-bold text-[#5D2E85]">Top Placement</span>
              </div>
              <p className="text-xs text-[#287A55] font-mono">https://yourbrand.com/booking · Verified</p>
              <h4 className="font-heading font-bold text-sm text-[#111111] mt-1">
                Best {serviceTitle.split('&')[0]} in Mumbai | Book Consult Online
              </h4>
              <p className="text-xs text-[#5F5F5A] mt-1">
                High-intent search keyword bidding captures ready-to-book clients instantly. Zero wasted clicks.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-white border border-[#DEDED7]">
                <span className="text-[10px] uppercase text-[#5F5F5A] block">Lead Cost</span>
                <span className="font-heading font-bold text-sm text-[#287A55]">-42% vs Avg</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#DEDED7]">
                <span className="text-[10px] uppercase text-[#5F5F5A] block">Lead Quality</span>
                <span className="font-heading font-bold text-sm text-[#5D2E85]">92% Verified</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#DEDED7]">
                <span className="text-[10px] uppercase text-[#5F5F5A] block">Handoff</span>
                <span className="font-heading font-bold text-sm text-[#111111]">1-Tap WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'seo':
      return (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DEDED7] shadow-card">
          <div className="flex items-center justify-between pb-5 border-b border-[#DEDED7]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#287A55]" />
              <span className="font-heading font-black text-sm text-[#111111]">
                Google Organic Search Placement Simulation
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#F1E7F9] text-[#5D2E85] font-heading font-black text-[11px]">
              Position #1 (Zero Ad Cost)
            </span>
          </div>

          <div className="mt-5 p-5 rounded-2xl bg-[#F7F6F2] border-2 border-[#5D2E85]/40">
            <div className="flex items-center gap-2 text-xs text-[#5F5F5A] mb-1">
              <span className="font-mono text-[#287A55]">https://yourbrand.com</span>
              <span>›</span>
              <span>services</span>
            </div>
            <h4 className="font-heading font-black text-base text-[#111111] hover:underline cursor-pointer">
              Top Ranked {serviceTitle} Services &amp; Specialists (Official Site)
            </h4>
            <div className="flex items-center gap-2 mt-1 text-xs text-[#5F5F5A]">
              <span className="text-amber-500 font-bold">★★★★★ 4.9</span>
              <span>· (128 organic client reviews) · 98+ PageSpeed</span>
            </div>
            <p className="text-xs text-[#5F5F5A] mt-2 leading-relaxed">
              Engineered with semantic Schema.org architecture, keyword siloing, and authoritative regional backlinks that outrank aggregators permanently.
            </p>
          </div>

          <div className="mt-4 flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 text-xs text-[#5F5F5A] px-1">
            <span>Competitor Organic Clicks: <strong>12%</strong></span>
            <span className="text-[#5D2E85] font-bold">Your Organic Click Share: <strong>54%</strong></span>
          </div>
        </div>
      );

    case 'gmb':
      return (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DEDED7] shadow-card">
          <div className="flex items-center justify-between pb-5 border-b border-[#DEDED7]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#287A55]" />
              <span className="font-heading font-black text-sm text-[#111111]">
                Google Maps 3-Pack Local Dominance
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#F1E7F9] text-[#5D2E85] font-heading font-black text-[11px]">
              Captures 68% Local Clicks
            </span>
          </div>

          <div className="mt-5 p-5 rounded-2xl bg-[#F7F6F2] border-2 border-[#5D2E85]/40">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-base text-[#111111]">Your Business Name</span>
                <span className="text-[#287A55] text-xs font-bold">✓ Verified</span>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-[#5D2E85] text-white font-heading font-black text-[10px] uppercase tracking-wider">
                Rank #1
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-amber-500 font-bold">★★★★★ 4.9</span>
              <span className="text-[#5F5F5A]">(142 reviews) · Top Rated in Your City</span>
            </div>
            <p className="text-xs text-[#5F5F5A] mt-2">
              Open · Closes 8 PM · Geo-tagged photography updated weekly
            </p>
            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[#DEDED7]">
              <span className="px-3.5 py-1.5 rounded-lg bg-white border border-[#DEDED7] text-xs font-bold text-[#111111]">
                📞 Direct Call
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#111111] text-white text-xs font-bold">
                📍 Directions
              </span>
            </div>
          </div>
        </div>
      );

    case 'mobile-content-shoot':
      return (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DEDED7] shadow-card">
          <div className="flex items-center justify-between pb-5 border-b border-[#DEDED7]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#287A55]" />
              <span className="font-heading font-black text-sm text-[#111111]">
                Dual Camera &amp; 4K iPhone Production (Delhi &amp; Mumbai)
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#F1E7F9] text-[#5D2E85] font-heading font-black text-[11px]">
              Dual-Capture • 60 Days Assets
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
            {[
              { title: 'Camera Portrait Lookbook', spec: 'Pro DSLR High-Res RAW', length: 'Photo' },
              { title: '4K Transformation Reel', spec: '60fps HDR iPhone', length: '18s' },
              { title: 'Authentic Studio BTS', spec: 'Wireless Mic Audio', length: '24s' },
              { title: 'Client Reaction Hook', spec: 'Gimbal Stabilized', length: '15s' },
            ].map((asset, i) => (
              <div key={i} className="p-3 rounded-xl bg-[#F7F6F2] border border-[#DEDED7] flex flex-col justify-between">
                <span className="text-[10px] font-mono font-bold text-[#5D2E85]">{asset.length}</span>
                <div className="mt-3">
                  <span className="font-heading font-bold text-xs text-[#111111] block leading-snug">{asset.title}</span>
                  <span className="text-[10px] text-[#5F5F5A] mt-0.5 block">{asset.spec}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3.5 rounded-xl bg-[#F7F6F2] border border-[#DEDED7] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <span className="text-[#5F5F5A]">On-Location Crews in Delhi NCR &amp; Mumbai • Pan-India Destination Travel</span>
            <span className="font-bold text-[#5D2E85] shrink-0">5-Day Delivery</span>
          </div>
        </div>
      );

    case 'ai-videos':
      return (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DEDED7] shadow-card">
          <div className="flex items-center justify-between pb-5 border-b border-[#DEDED7]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#287A55]" />
              <span className="font-heading font-black text-sm text-[#111111]">
                Generative AI Multilingual Ad Engine
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#F1E7F9] text-[#5D2E85] font-heading font-black text-[11px]">
              10× Faster Creative Split Testing
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
            <div className="p-4 rounded-xl bg-[#F7F6F2] border border-[#DEDED7]">
              <span className="text-[10px] font-bold uppercase text-[#5D2E85] block mb-1">Hook Variant A</span>
              <p className="font-heading font-bold text-xs text-[#111111]">"Tired of spending ₹10k on ads that don't convert?"</p>
              <span className="text-[11px] text-[#287A55] font-bold mt-2 block">4.8% CTR (Winner)</span>
            </div>
            <div className="p-4 rounded-xl bg-[#F7F6F2] border border-[#DEDED7]">
              <span className="text-[10px] font-bold uppercase text-[#5F5F5A] block mb-1">Hook Variant B</span>
              <p className="font-heading font-bold text-xs text-[#111111]">"Here is why your competitors are booking 3x more clients..."</p>
              <span className="text-[11px] text-[#5F5F5A] mt-2 block">3.1% CTR</span>
            </div>
            <div className="p-4 rounded-xl bg-[#F7F6F2] border border-[#DEDED7]">
              <span className="text-[10px] font-bold uppercase text-[#5D2E85] block mb-1">Languages</span>
              <p className="font-heading font-bold text-xs text-[#111111]">Hindi, English &amp; Regional Lip-Synced Audio</p>
              <span className="text-[11px] text-[#5D2E85] font-bold mt-2 block">Zero Studio Booking</span>
            </div>
          </div>
        </div>
      );

    case 'websites':
    default:
      return (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DEDED7] shadow-card">
          <div className="flex items-center justify-between pb-5 border-b border-[#DEDED7]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#287A55]" />
              <span className="font-heading font-black text-sm text-[#111111]">
                Google PageSpeed &amp; Conversion Telemetry
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#287A55]/10 text-[#287A55] font-heading font-black text-[11px]">
              PageSpeed: 98/100
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 text-center">
            <div className="p-4 rounded-xl bg-[#F7F6F2] border border-[#DEDED7]">
              <span className="text-[10px] uppercase text-[#5F5F5A] block">First Contentful Paint</span>
              <span className="font-heading font-black text-xl text-[#287A55]">0.8s</span>
              <span className="text-[10px] text-[#287A55] block mt-0.5">Ultra Instant</span>
            </div>
            <div className="p-4 rounded-xl bg-[#F7F6F2] border border-[#DEDED7]">
              <span className="text-[10px] uppercase text-[#5F5F5A] block">WhatsApp Booking</span>
              <span className="font-heading font-black text-xl text-[#5D2E85]">1-Tap</span>
              <span className="text-[10px] text-[#5F5F5A] block mt-0.5">Zero Form Friction</span>
            </div>
            <div className="p-4 rounded-xl bg-[#F7F6F2] border border-[#DEDED7]">
              <span className="text-[10px] uppercase text-[#5F5F5A] block">Mobile UX Score</span>
              <span className="font-heading font-black text-xl text-[#111111]">100%</span>
              <span className="text-[10px] text-[#287A55] block mt-0.5">Zero Leakage</span>
            </div>
          </div>
        </div>
      );
  }
}

export default function ServiceDetailPage({ serviceSlug: propSlug }) {
  const { serviceSlug: paramSlug } = useParams();
  const slug = propSlug || paramSlug;

  // Resolve service data with normalization
  const normalizedSlug = slug ? slug.toLowerCase().replace('/services/', '').replace('/', '') : '';
  const service = SERVICE_DETAILS[normalizedSlug] || 
                  SERVICE_DETAILS[normalizedSlug.replace('gmb', 'gmb')] ||
                  SERVICE_DETAILS['instagram-management'];

  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalChecklist = service.checklist ? service.checklist.length : 6;
  const healthScore = Math.round((checkedCount / totalChecklist) * 100);

  const whatsappMessage = encodeURIComponent(
    `Hi Juntoz! I am interested in learning more about your ${service.title} services. (Health Score: ${healthScore}%)`
  );
  const WA_URL = `https://wa.me/919004001800?text=${whatsappMessage}`;

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen bg-[#F7F6F2]">
      <PageMeta
        title={`${service.title} Services — Juntoz Digital Agency`}
        description={`${service.tagline}. ${service.heroDesc.slice(0, 140)}...`}
        path={`/services/${service.id}`}
      />

      {/* ── BREADCRUMB & HEADER ── */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl mb-12 sm:mb-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Breadcrumb Navigation */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DEDED7] bg-white shadow-subtle mb-6">
            <Link to="/" className="text-[11px] font-sans font-semibold text-[#5F5F5A] hover:text-[#5D2E85] transition-colors">
              Home
            </Link>
            <span className="text-[10px] text-[#DEDED7]">/</span>
            <Link to="/services" className="text-[11px] font-sans font-semibold text-[#5F5F5A] hover:text-[#5D2E85] transition-colors">
              Services
            </Link>
            <span className="text-[10px] text-[#DEDED7]">/</span>
            <span className="text-[11px] font-sans font-bold text-[#5D2E85]">
              {service.title}
            </span>
          </div>

          <ScrollReveal data-reveal="up">
            <div className="inline-block px-3 py-1 rounded-full bg-[#F1E7F9] border border-[#5D2E85]/20 mb-4">
              <span className="font-heading font-black text-xs uppercase tracking-wider text-[#5D2E85]">
                {service.badge || service.category}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal data-reveal="up" delay={80}>
            <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#111111] leading-[1.05] mb-5">
              {service.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal data-reveal="up" delay={140}>
            <p className="font-heading font-bold text-base sm:text-xl text-[#5D2E85] max-w-2xl mx-auto mb-6 leading-snug">
              {service.tagline}
            </p>
          </ScrollReveal>

          <ScrollReveal data-reveal="up" delay={200}>
            <p className="font-body text-[#5F5F5A] text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-8">
              {service.heroDesc}
            </p>
          </ScrollReveal>

          <ScrollReveal data-reveal="up" delay={240} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-[#111111] hover:bg-[#5D2E85] transition-colors duration-200 shadow-md"
            >
              <span>{service.ctaText || 'Claim Free Strategic Audit'}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-[#111111] border border-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-200 bg-transparent"
            >
              <span>Explore All 7 Services</span>
            </Link>
          </ScrollReveal>

        </div>

        {/* ── INTERACTIVE SERVICE SIMULATOR VISUALIZER ── */}
        <ScrollReveal data-reveal="up" delay={300} className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <ServiceSimulator serviceId={service.id} serviceTitle={service.title} />
        </ScrollReveal>
      </section>

      {/* ── 3-COLUMN PROOF STATS ── */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl mb-20 md:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.stats && service.stats.map((stat, i) => (
            <ScrollReveal key={i} data-reveal="up" delay={i * 80}>
              <div className="bg-white rounded-3xl p-8 border border-[#DEDED7] shadow-card text-center sm:text-left h-full flex flex-col justify-between hover:border-[#5D2E85] transition-all duration-200">
                <div>
                  <div className="font-heading font-black text-4xl sm:text-5xl text-[#5D2E85] mb-2">
                    {stat.value}
                  </div>
                  <div className="font-heading font-bold text-[#111111] text-base mb-2">
                    {stat.label}
                  </div>
                  <p className="font-body text-xs sm:text-sm text-[#5F5F5A] leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── 4-PHASE EXECUTION FRAMEWORK ── */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl mb-20 md:mb-28">
        <ScrollReveal data-reveal="up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#5D2E85] mb-2 block">
            Systematic Methodology
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#111111]">
            Our Execution <span className="text-[#5D2E85]">Framework.</span>
          </h2>
          <p className="font-body text-[#5F5F5A] text-sm sm:text-base mt-4 leading-relaxed">
            Every client follows our disciplined, 4-phase rollout designed for fast time-to-value, predictable results, and scalable growth.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.pillars && service.pillars.map((p, i) => (
            <ScrollReveal key={i} data-reveal="up" delay={i * 80}>
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#DEDED7] shadow-card h-full flex flex-col justify-between hover:border-[#111111] transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-lg bg-[#F1E7F9] font-heading font-black text-xs text-[#5D2E85]">
                      PHASE {p.step}
                    </span>
                    <span className="text-[10px] font-mono text-[#5F5F5A] uppercase tracking-wider">
                      Step {i + 1} of 4
                    </span>
                  </div>
                  <h3 className="font-heading font-black text-xl text-[#111111] mb-3">
                    {p.title}
                  </h3>
                  <p className="font-body text-sm text-[#5F5F5A] leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-[#DEDED7]">
                  <p className="font-heading font-bold text-xs uppercase tracking-wider text-[#111111] mb-3">
                    Key Deliverables:
                  </p>
                  <ul className="space-y-2.5">
                    {p.deliverables && p.deliverables.map((d, di) => (
                      <li key={di} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]/85 font-body">
                        <span className="text-[#287A55] font-bold mt-0.5">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── INTERACTIVE HEALTH AUDIT CHECKLIST ── */}
      <section className="container mx-auto px-4 sm:px-6 max-w-4xl mb-20 md:mb-28">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DEDED7] shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#DEDED7]">
            <div>
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#5D2E85]">
                Instant Diagnostic Tool
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#111111] mt-1">
                Is Your {service.title} Optimized?
              </h2>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <span className="font-body text-xs font-bold text-[#5F5F5A] block uppercase">Health Score</span>
              <span className="font-heading font-black text-3xl text-[#5D2E85]">{healthScore}%</span>
            </div>
          </div>

          <div className="mt-8 space-y-3.5">
            {service.checklist && service.checklist.map((item) => (
              <label
                key={item.id}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F6F2] hover:bg-white border border-[#DEDED7] cursor-pointer transition-all duration-200 hover:border-[#5D2E85]"
              >
                <input
                  type="checkbox"
                  checked={!!checkedItems[item.id]}
                  onChange={() => toggleCheck(item.id)}
                  className="mt-1 w-5 h-5 rounded border-[#DEDED7] text-[#5D2E85] focus:ring-[#5D2E85] cursor-pointer"
                />
                <span className="font-body text-sm text-[#111111] leading-relaxed select-none">
                  {item.text}
                </span>
              </label>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-[#DEDED7] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-[#5F5F5A] max-w-sm">
              {healthScore < 60
                ? 'Your brand is missing essential growth levers, costing you client inquiries and revenue every week.'
                : 'Strong foundation! We can help you scale this system into a dominant inbound customer engine.'}
            </p>
            <a
              href={`https://wa.me/919004001800?text=Hi%20Juntoz!%20My%20${encodeURIComponent(service.title)}%20Health%20Score%20is%20${healthScore}%25.%20I'd%20like%20a%20detailed%20audit.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#111111] hover:bg-[#5D2E85] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors text-center shadow-sm"
            >
              Get Detailed Audit on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS (FAQS) ── */}
      {service.faqs && (
        <section className="container mx-auto px-4 sm:px-6 max-w-4xl mb-20 md:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#5D2E85] mb-2 block">
              Clear Answers
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight text-[#111111]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#DEDED7] shadow-xs">
                <h4 className="font-heading font-bold text-base sm:text-lg text-[#111111] mb-2">
                  {faq.q}
                </h4>
                <p className="font-body text-sm text-[#5F5F5A] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── OTHER 6 SERVICES QUICK SWITCHER ── */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#DEDED7] shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div>
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#5D2E85]">
                Complete Digital Ecosystem
              </span>
              <h3 className="font-heading font-black text-xl sm:text-2xl text-[#111111] uppercase tracking-tight mt-1">
                Explore Our Other Growth Services
              </h3>
            </div>
            <Link
              to="/services"
              className="text-xs font-heading font-bold text-[#5D2E85] hover:underline"
            >
              View Full Capabilities Matrix →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {ALL_SERVICES_LIST.filter((s) => s.id !== service.id).map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.id}`}
                className="p-3.5 rounded-xl bg-[#F7F6F2] hover:bg-white border border-[#DEDED7] hover:border-[#5D2E85] transition-all text-left flex flex-col justify-between group"
              >
                <span className="text-[10px] font-mono font-bold uppercase text-[#5D2E85] block mb-2">
                  {s.badge}
                </span>
                <span className="font-heading font-semibold text-xs text-[#111111] group-hover:text-[#5D2E85] transition-colors leading-snug">
                  {s.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONVERSION BANNER ── */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="rounded-3xl bg-[#111111] text-white p-8 sm:p-14 text-center relative overflow-hidden shadow-card">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-white font-heading font-black text-xs uppercase tracking-wider mb-4">
              Direct Access to Growth Specialists
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight mb-5">
              Ready to Accelerate Your <br />
              <span className="text-[#5D2E85]">{service.title}?</span>
            </h2>
            <p className="font-body text-white/70 text-sm sm:text-base leading-relaxed mb-8">
              Message us on WhatsApp — honest feedback, real roadmap, no sales pitch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#5D2E85] hover:bg-[#4C266D] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                <span>Chat with Strategy Team on WhatsApp</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white border border-white/30 hover:bg-white/10 transition-colors"
              >
                <span>Book Calendar Call</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
