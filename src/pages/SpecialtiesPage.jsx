import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import ScrollReveal from '../components/ScrollReveal';
import IndustryFinder from '../components/IndustryFinder';

/* 
  Target segments customized for Juntoz beauty/MUA focus.
*/
const SPECIALTY_SEGMENTS = [
  {
    id: 'bridal',
    title: 'Bridal Makeup Artists',
    tag: 'High-Ticket Bookings',
    desc: 'Eliminate off-season booking dry spells and price negotiation. We position you as the definitive high-value artist in your city through targeted seasonal Meta campaigns and instant WhatsApp lead intake flows.',
    deliverables: ['Seasonal Bridal Ad Campaigns', 'Automated Date Availability Check', 'High-Ticket Rate Positioning'],
    accentColor: '#5D2E85',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    id: 'editorial',
    title: 'Editorial & Fashion MUAs',
    tag: 'Prestige & Brand Deals',
    desc: 'Build commercial authority and attract brand collaborations. We engineer digital portfolios and press-ready web storefronts that command top-tier day rates from production houses, magazines, and agencies.',
    deliverables: ['High-Resolution Portfolio Architecture', 'Press & Agency Pitch Kits', 'Commercial Rate Structuring'],
    accentColor: '#5D2E85',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 'salon',
    title: 'Salon & Studio-Based Artists',
    tag: 'Local 3-Pack Footfall',
    desc: 'Fill your salon chairs every weekday. We optimize your local Google Business Profile footprint, capture nearby neighborhood searches, and drive walk-in event styling with review acceleration systems.',
    deliverables: ['Google Maps Top-3 Placement', 'Localized Search Geo-Targeting', 'Automated Review Capture Playbook'],
    accentColor: '#CE3819',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 'freelance',
    title: 'Freelance & Independent MUAs',
    tag: 'Predictable Calendar',
    desc: 'Break free from uncertain word-of-mouth recommendations. We construct automated social funnels and conversion-optimized booking flows so client inquiries land on your WhatsApp like clockwork every week.',
    deliverables: ['Instagram Inbound Profile Funnel', 'Booking Flow & Deposit Engine', 'Client Retention Automation'],
    accentColor: '#5D2E85',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'academy',
    title: 'Academy & Educator MUAs',
    tag: 'Batch Enrollment',
    desc: 'Fill professional makeup masterclasses, workshops, and certification batches. We run high-converting student acquisition funnels and retargeting ads highlighting student career transformations.',
    deliverables: ['Masterclass Registration Funnels', 'Social Proof & Alumni Showcase', 'High-Intent Student Retargeting'],
    accentColor: '#5D2E85',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    id: 'destination',
    title: 'Destination Wedding Specialists',
    tag: 'NRI & Luxury Weddings',
    desc: 'Capture luxury destination wedding clients booking across Goa, Udaipur, Jaipur, and international venues. Hyper-targeted geographical paid ad campaigns reaching brides ready to cover travel and top packages.',
    deliverables: ['Cross-City & NRI Geo-Ads', 'Luxury Bridal Pitch Collateral', 'High-Yield Package Positioning'],
    accentColor: '#CE3819',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function SpecialtiesPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('industries');

  // Handle URL hash anchor (e.g. #beauty-specialties or #industries)
  useEffect(() => {
    if (location.hash === '#beauty-specialties' || location.search.includes('tab=beauty')) {
      setActiveTab('beauty');
    } else if (location.hash === '#all' || location.search.includes('tab=all')) {
      setActiveTab('all');
    } else {
      setActiveTab('industries');
    }
  }, [location]);

  return (
    <>
      <PageMeta
        title="Specialties & Industries We Scale — 36 Growth Playbooks | Juntoz"
        description="Explore Juntoz's 36 specialized industry playbooks and bespoke client acquisition architectures for makeup artists, clinics, salons, and brands across India."
        path="/specialties"
      />

      <div className="pt-28 sm:pt-36 pb-24 min-h-screen bg-[#F7F6F2]">
        
        {/* ════ HERO HEADER ════ */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mb-10 sm:mb-14">
          <ScrollReveal data-reveal="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DEDED7] bg-white shadow-subtle mb-6">
              <span className="w-2 h-2 rounded-full bg-[#5D2E85]" />
              <span className="font-sans font-bold text-[#5F5F5A] text-[11px] tracking-wider uppercase">
                Specialties &amp; Industry Verticals
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal data-reveal="up" delay={80}>
            <h1 className="font-heading font-black text-[#111111] text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-[1.04] mb-6">
              Specialized Growth For <br />
              <span className="text-[#5D2E85]">Your Exact Industry.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal data-reveal="up" delay={140}>
            <p className="font-sans text-[#5F5F5A] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
              36 industry playbooks. Specialist beauty frameworks. One agency.
            </p>
          </ScrollReveal>

          {/* ════ INTERACTIVE VIEW TOGGLE TABS ════ */}
          <ScrollReveal data-reveal="up" delay={180}>
            <div className="inline-flex items-center p-1.5 rounded-full bg-white border border-[#DEDED7] shadow-sm max-w-full overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab('industries')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeTab === 'industries'
                    ? 'bg-[#5D2E85] text-white shadow-md'
                    : 'text-[#5F5F5A] hover:text-[#111111] hover:bg-[#F7F6F2]'
                }`}
              >
                <span>36 Industry Playbooks</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                  activeTab === 'industries' ? 'bg-white/20 text-white' : 'bg-[#F1E7F9] text-[#5D2E85]'
                }`}>
                  36 Sectors
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('beauty')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeTab === 'beauty'
                    ? 'bg-[#5D2E85] text-white shadow-md'
                    : 'text-[#5F5F5A] hover:text-[#111111] hover:bg-[#F7F6F2]'
                }`}
              >
                <span>Beauty &amp; MUA Specialties</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                  activeTab === 'beauty' ? 'bg-white/20 text-white' : 'bg-[#F1E7F9] text-[#5D2E85]'
                }`}>
                  6 Segments
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`hidden sm:flex items-center gap-1.5 px-4 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-[#111111] text-white shadow-md'
                    : 'text-[#5F5F5A] hover:text-[#111111] hover:bg-[#F7F6F2]'
                }`}
              >
                <span>View All</span>
              </button>
            </div>
          </ScrollReveal>
        </section>

        {/* ════ TAB 1: 36 INDUSTRY PLAYBOOKS SECTION (EMBEDDED INDUSTRY FINDER) ════ */}
        {(activeTab === 'industries' || activeTab === 'all') && (
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-20 sm:mb-28">
            <IndustryFinder
              showHeader={activeTab === 'all'}
              title="36 Specialized Industry Playbooks"
              subtitle="Search or filter the 36 industries we build full-funnel digital growth, SEO, and acquisition engines for."
            />
          </section>
        )}

        {/* ════ TAB 2: BEAUTY & MAKEUP ARTIST SPECIALTIES SECTION ════ */}
        {(activeTab === 'beauty' || activeTab === 'all') && (
          <section id="beauty-specialties" className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-28">
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#DEDED7] bg-white shadow-xs mb-3">
                <span className="w-2 h-2 rounded-full bg-[#5D2E85]" />
                <span className="font-sans font-bold text-[#5F5F5A] text-[11px] tracking-widest uppercase">
                  MUA &amp; Beauty Verticals
                </span>
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight text-[#111111]">
                Specialized Solutions for <span className="text-[#5D2E85]">Beauty Professionals.</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#5F5F5A] mt-2">
                Dedicated acquisition frameworks tailored specifically for bridal artists, educators, and salon owners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {SPECIALTY_SEGMENTS.map((seg, idx) => (
                <ScrollReveal key={seg.id} data-reveal="up" delay={idx * 60}>
                  <div className="h-full bg-white border border-[#DEDED7] hover:border-[#5D2E85]/50 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-card hover:shadow-hover transition-all duration-300 group">
                    
                    <div>
                      {/* Top Row: Icon + Badge */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-[#F1E7F9] text-[#5D2E85] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                          {seg.icon}
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#5D2E85] bg-[#F1E7F9] px-2.5 py-1 rounded-full">
                          {seg.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-[#111111] mb-3 group-hover:text-[#5D2E85] transition-colors">
                        {seg.title}
                      </h3>

                      {/* Segment Specific Description */}
                      <p className="font-sans text-xs sm:text-sm text-[#5F5F5A] leading-relaxed mb-6">
                        {seg.desc}
                      </p>
                    </div>

                    {/* Bullet Deliverables */}
                    <div className="pt-4 border-t border-[#F0EFEB] space-y-2">
                      {seg.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-sans text-[#2D2D2A]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5D2E85]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {/* ════ CTA BAND ════ */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <ScrollReveal data-reveal="up">
            <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D2E85]/20 rounded-full blur-[80px] pointer-events-none" />
              
              <h3 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight mb-4 relative z-10">
                Not sure which category fits your business?
              </h3>
              <p className="font-sans text-white/70 text-sm sm:text-base max-w-lg mx-auto mb-8 relative z-10">
                Every business model has distinct nuances. Let&apos;s evaluate your current acquisition channels and map a customized growth roadmap.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#5D2E85] hover:bg-[#4C266D] text-white font-sans font-semibold text-sm tracking-wide shadow-[0_4px_20px_rgba(93,46,133,0.4)] active:scale-95 transition-all"
                >
                  <span>Book a Strategy Call</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <a
                  href="https://wa.me/919004001800?text=Hi%20Juntoz!%20I%20want%20to%20discuss%20which%20industry%20playbook%20fits%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white font-sans font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </>
  );
}
