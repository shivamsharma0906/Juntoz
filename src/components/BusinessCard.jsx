import { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal.jsx';
import logo from './logo.webp';

const GOOGLE_URL = 'https://www.google.com/maps/place/Juntoz+Digital+Marketing+Agency/@19.3016668,72.849608,17z/data=!4m8!3m7!1s0x3be7b10eda3a9a65:0x3c3c948829e3150e!8m2!3d19.3016668!4d72.8521829!9m1!1b1!16s%2Fg%2F11l228zbp7?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D';

const REVIEWS = [
  {
    name: 'Anita Sharma',
    role: 'Bridal Studio Owner, Mumbai',
    rating: 5,
    text: 'Juntoz transformed our lead pipeline in 60 days. We went from struggling for bookings to getting 180+ qualified inquiries monthly.',
    tag: 'Verified Client',
    time: '2 weeks ago',
  },
  {
    name: 'Karan Malhotra',
    role: 'Salon & Spa Director, Pune',
    rating: 5,
    text: 'Best growth partner! Our styling chairs are booked solid every week. Their Google Maps 3-Pack strategy dominates our local area.',
    tag: 'Verified Client',
    time: '1 month ago',
  },
  {
    name: 'Priya Mukherjee',
    role: 'Beauty Academy Founder, Delhi',
    rating: 5,
    text: 'Transparent reporting and zero fluff. They engineered an end-to-end student enrollment system that doubled our batch sizes.',
    tag: 'Verified Client',
    time: '3 weeks ago',
  },
];

export default function BusinessCard() {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % REVIEWS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 sm:py-28 bg-[#F7F6F2] border-t border-[#DEDED7] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* ── Section Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <ScrollReveal data-reveal="up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#287A55]/10 border border-[#287A55]/20 text-[#287A55] font-sans font-bold text-xs uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#287A55] animate-pulse" />
              <span>Verified Google 5.0 Rating</span>
            </div>
            
            <h2 
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="font-heading font-normal text-3xl sm:text-5xl lg:text-[3.25rem] text-[#111111] leading-[1.12] mb-4"
            >
              Verified By Google.{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span>Trusted By 200+ Brands.</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full overflow-visible pointer-events-none text-[#5D2E85]"
                  height="12"
                  viewBox="0 0 260 14"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9 C 60 3, 170 12, 258 4"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="font-body text-[#5F5F5A] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore authentic client feedback, verified ratings, and local search dominance directly from our Google Business Profile.
            </p>
          </ScrollReveal>
        </div>

        {/* ── 3-Column Panoramic Command Matrix ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* ── COL 1: Official Google Profile Card (5 Cols) ── */}
          <div className="lg:col-span-5 flex flex-col">
            <ScrollReveal data-reveal="up" delay={80} className="h-full">
              <div className="rounded-3xl bg-white border border-[#DEDED7] p-6 sm:p-8 shadow-card h-full flex flex-col justify-between relative overflow-hidden">
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5D2E85] via-[#287A55] to-[#5D2E85]" />

                <div>
                  {/* Google Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#DEDED7] mb-6">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                      <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#111111]">
                        Google Business Profile
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#287A55]/10 text-[#287A55] text-[10px] font-bold border border-[#287A55]/20">
                      Verified Listing
                    </span>
                  </div>

                  {/* Profile Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#111111] p-3 flex items-center justify-center shadow-md border border-[#111111] overflow-hidden">
                        <img src={logo} alt="Juntoz Logo" className="w-full h-auto object-contain" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#287A55] rounded-full border-2 border-white flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#111111] leading-tight">
                        Juntoz Digital Marketing Agency
                      </h3>
                      <p className="font-body text-xs text-[#5F5F5A] font-medium">
                        Full-Service Growth Agency · Mumbai, India
                      </p>
                      
                      <div className="flex items-center gap-2 pt-1">
                        <span className="font-heading font-bold text-sm text-[#111111]">5.0</span>
                        <div className="flex gap-0.5 text-[#5D2E85]">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-[#5F5F5A] font-semibold">(180+ Reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Details */}
                  <p className="font-body text-xs sm:text-sm text-[#5F5F5A] leading-relaxed mb-6">
                    We architect high-converting client acquisition engines and Google Maps local search systems for ambitious Indian brands.
                  </p>

                  {/* Action Badges */}
                  <div className="grid grid-cols-3 gap-2 text-center text-xs font-sans font-semibold mb-6">
                    <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-[#F7F6F2] hover:bg-[#5D2E85] hover:text-white border border-[#DEDED7] transition-all">
                      📍 Maps
                    </a>
                    <a href="tel:+919004001800" className="p-2.5 rounded-xl bg-[#F7F6F2] hover:bg-[#5D2E85] hover:text-white border border-[#DEDED7] transition-all">
                      📞 Call
                    </a>
                    <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-[#F7F6F2] hover:bg-[#5D2E85] hover:text-white border border-[#DEDED7] transition-all">
                      ⭐ Reviews
                    </a>
                  </div>
                </div>

                {/* Primary CTA */}
                <a
                  href={GOOGLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#111111] hover:bg-[#5D2E85] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm"
                >
                  <span>View Full Profile On Google</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* ── COL 2: Interactive Real Google Reviews (4 Cols) ── */}
          <div className="lg:col-span-4 flex flex-col">
            <ScrollReveal data-reveal="up" delay={120} className="h-full">
              <div className="rounded-3xl bg-white border border-[#DEDED7] p-6 sm:p-8 shadow-card h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#DEDED7] mb-6">
                    <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#111111]">
                      Client Experience
                    </span>
                    <span className="text-[10px] font-sans font-bold text-[#5D2E85] bg-[#F1E7F9] px-2.5 py-0.5 rounded-full border border-[#5D2E85]/20">
                      100% Response Rate
                    </span>
                  </div>

                  {/* Review Card */}
                  <div className="p-5 rounded-2xl bg-[#F7F6F2] border border-[#DEDED7] mb-4 space-y-3 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-0.5 text-amber-500">
                        {[...Array(REVIEWS[activeReview].rating)].map((_, i) => (
                          <span key={i} className="text-sm">★</span>
                        ))}
                      </div>
                      <span className="text-[10px] font-sans text-[#5F5F5A] font-semibold">
                        {REVIEWS[activeReview].time}
                      </span>
                    </div>

                    <p className="font-body text-xs sm:text-sm text-[#111111] leading-relaxed italic">
                      &ldquo;{REVIEWS[activeReview].text}&rdquo;
                    </p>

                    <div className="pt-2 border-t border-[#DEDED7] flex items-center justify-between">
                      <div>
                        <h4 className="font-heading font-bold text-xs text-[#111111]">
                          {REVIEWS[activeReview].name}
                        </h4>
                        <p className="font-body text-[10px] text-[#5F5F5A]">
                          {REVIEWS[activeReview].role}
                        </p>
                      </div>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-[#DEDED7] text-[#287A55]">
                        ✓ Verified
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review Selector Dots / Tabs */}
                <div className="flex items-center justify-between pt-4 border-t border-[#DEDED7]">
                  <span className="font-sans text-xs text-[#5F5F5A] font-semibold">
                    Review {activeReview + 1} of {REVIEWS.length}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {REVIEWS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveReview(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeReview === idx ? 'w-6 bg-[#5D2E85]' : 'w-2 bg-[#DEDED7] hover:bg-[#5F5F5A]'
                        }`}
                        aria-label={`View Review ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ── COL 3: Telemetry & Google Dominance Metrics (3 Cols) ── */}
          <div className="lg:col-span-3 flex flex-col">
            <ScrollReveal data-reveal="up" delay={160} className="h-full">
              <div className="rounded-3xl bg-[#111111] text-white p-6 sm:p-8 shadow-card h-full flex flex-col justify-between relative overflow-hidden">
                {/* Glow Backdrop */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#5D2E85]/30 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <span className="block font-sans font-bold text-[10px] uppercase tracking-widest text-white/50 mb-6">
                    Telemetry Metrics
                  </span>

                  <div className="space-y-6">
                    <div>
                      <span className="block font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
                        5.0 <span className="text-[#5D2E85] text-3xl">★</span>
                      </span>
                      <span className="font-sans text-xs text-white/70 block mt-1">
                        Average Google Map Rating
                      </span>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <span className="block font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
                        #1 Rank
                      </span>
                      <span className="font-sans text-xs text-white/70 block mt-1">
                        Local Search Dominance
                      </span>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <span className="block font-heading font-black text-3xl sm:text-4xl text-[#287A55] tracking-tight">
                        200+
                      </span>
                      <span className="font-sans text-xs text-white/70 block mt-1">
                        Scaled Client Campaigns
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <a
                    href={GOOGLE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans font-bold text-xs uppercase tracking-wider transition-all duration-200"
                  >
                    <span>Read All Reviews</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}