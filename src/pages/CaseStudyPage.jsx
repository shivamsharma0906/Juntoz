import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import ScrollReveal from '../components/ScrollReveal';
import PageMeta from '../components/PageMeta';
import CardImageShader from '../components/effects/CardImageShader';
import { HeadlineHighlight } from '../components/ui/CurvedUnderline';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const currentIndex = caseStudies.findIndex((s) => s.slug === slug);
  const study = caseStudies[currentIndex];

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  const prevStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  // WhatsApp prefilled message
  const whatsappUrl = `https://wa.me/919004001800?text=${encodeURIComponent(
    `Hi Sujal! I just read the ${study.clientName} case study on Juntoz and would like to discuss building a growth system for my brand.`
  )}`;

  return (
    <div className="pt-24 sm:pt-32 pb-24 min-h-screen bg-[#F7F6F2] selection:bg-[#5D2E85] selection:text-white">
      <PageMeta
        title={`${study.clientName} Case Study — Juntoz Growth Systems`}
        description={`${study.tagline || study.result} Verified metric: ${study.metric} ${study.metricLabel}.`}
        path={`/case-study/${study.slug}`}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* ════ TOP BREADCRUMB & TAGS NAVIGATION BAR ════ */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#DEDED7]/80">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-[#5F5F5A] hover:text-[#5D2E85] transition-colors group cursor-pointer"
          >
            <span className="w-7 h-7 rounded-full border border-[#DEDED7] bg-white flex items-center justify-center group-hover:border-[#5D2E85] group-hover:bg-[#F1E7F9] transition-all">
              <ArrowLeft className="w-3.5 h-3.5" />
            </span>
            <span>Back to All Case Studies</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#5F5F5A]">
            <span className="text-[#5D2E85] font-semibold">{study.industry}</span>
            {study.location && (
              <>
                <span className="text-[#DEDED7]">/</span>
                <span>{study.location}</span>
              </>
            )}
            <span className="text-[#DEDED7]">/</span>
            <span>{study.timeline}</span>
          </div>
        </div>

        {/* ════ SECTION 1: EDITORIAL HEADLINE & EXECUTIVE HOOK ════ */}
        <header className="mb-10 sm:mb-14">
          <ScrollReveal data-reveal="up">
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#5D2E85] block mb-3">
              VERIFIED CLIENT TRANSFORMATION · ATTRIBUTABLE ROI
            </span>

            <h1
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] uppercase leading-[1.04] tracking-tight text-[#111111] max-w-5xl mb-4"
            >
              {study.clientName}
            </h1>

            <p className="font-body text-[#5F5F5A] text-base sm:text-xl lg:text-2xl leading-relaxed max-w-3xl">
              {study.tagline || study.result}
            </p>
          </ScrollReveal>
        </header>

        {/* ════ SECTION 2: HERO VISUAL & FLOATING 4-METRIC HUD ════ */}
        <section className="mb-16 sm:mb-20">
          <ScrollReveal data-reveal="up" delay={60}>
            <div className="relative rounded-3xl overflow-hidden border border-[#DEDED7] shadow-card bg-[#111111]">
              
              {/* Primary Image with Subtle WebGL Ripple on Desktop */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[300px] sm:min-h-[460px] overflow-hidden">
                <CardImageShader
                  src={study.image}
                  alt={study.clientName}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Floating Meta Overlay */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex flex-wrap items-center gap-3 pointer-events-none z-10">
                  <span className="text-white/90 font-mono text-xs font-semibold tracking-wider uppercase">
                    {study.category}
                  </span>
                  {study.handle && (
                    <span className="text-white/70 font-mono text-xs">
                      {study.handle}
                    </span>
                  )}
                </div>

                {/* Bottom Overlay Quote Highlight */}
                {study.quote && (
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 text-white pointer-events-none z-10 hidden sm:block">
                    <p className="font-heading font-medium text-lg lg:text-xl italic max-w-2xl text-white/90 drop-shadow-md">
                      "{study.quote.replace(/^"|"$/g, '')}"
                    </p>
                  </div>
                )}
              </div>

              {/* 4-Column Telemetry Glass Bar */}
              <div className="bg-[#111111] text-white border-t border-white/10 p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                  {study.stats?.map((stat, i) => (
                    <div key={i} className={`pt-3 sm:pt-0 ${i !== 0 ? 'sm:pl-6' : ''}`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                          {stat.value}
                        </span>
                        {stat.change && (
                          <span className="text-[10px] font-mono font-bold text-[#287A55] bg-[#287A55]/20 border border-[#287A55]/30 px-1.5 py-0.5 rounded">
                            {stat.change}
                          </span>
                        )}
                      </div>
                      <span className="font-body text-xs text-white/70 font-medium block leading-snug">
                        {stat.label}
                      </span>
                    </div>
                  )) || (
                    <div className="col-span-full text-center py-2">
                      <span className="font-heading font-black text-3xl text-white mr-3">{study.metric}</span>
                      <span className="font-body text-white/70 text-sm">{study.metricLabel}</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </ScrollReveal>
        </section>

        {/* ════ SECTION 3: 2-COLUMN EDITORIAL DOSSIER (Sticky Sidebar + Narrative) ════ */}
        <section className="mb-20 sm:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* ════ LEFT COLUMN: STICKY EXECUTIVE SIDEBAR (4 Cols) ════ */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              
              {/* Project Snapshot Card */}
              <ScrollReveal data-reveal="up">
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#DEDED7] shadow-card">
                  <h3
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    className="font-heading font-bold text-xs uppercase tracking-widest text-[#5D2E85] mb-5 pb-3 border-b border-[#DEDED7]"
                  >
                    Executive Snapshot
                  </h3>

                  <dl className="space-y-4 text-xs">
                    <div>
                      <dt className="font-sans font-bold text-[10.5px] uppercase tracking-wider text-[#5F5F5A]">Client & Niche</dt>
                      <dd className="font-heading font-bold text-sm text-[#111111] mt-0.5">{study.clientName}</dd>
                    </div>

                    <div>
                      <dt className="font-sans font-bold text-[10.5px] uppercase tracking-wider text-[#5F5F5A]">Industry Sector</dt>
                      <dd className="font-body text-[#111111] font-medium mt-0.5">{study.industry}</dd>
                    </div>

                    {study.location && (
                      <div>
                        <dt className="font-sans font-bold text-[10.5px] uppercase tracking-wider text-[#5F5F5A]">Market Geography</dt>
                        <dd className="font-body text-[#111111] font-medium mt-0.5">{study.location}</dd>
                      </div>
                    )}

                    <div>
                      <dt className="font-sans font-bold text-[10.5px] uppercase tracking-wider text-[#5F5F5A]">Engagement Cadence</dt>
                      <dd className="font-body text-[#111111] font-medium mt-0.5">{study.timeline}</dd>
                    </div>

                    {study.handle && (
                      <div>
                        <dt className="font-sans font-bold text-[10.5px] uppercase tracking-wider text-[#5F5F5A]">Instagram Handle</dt>
                        <dd className="font-mono text-xs font-bold text-[#5D2E85] mt-0.5">{study.handle}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </ScrollReveal>

              {/* Growth Capabilities Deployed */}
              {study.services && (
                <ScrollReveal data-reveal="up" delay={60}>
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#DEDED7] shadow-card">
                    <h3
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      className="font-heading font-bold text-xs uppercase tracking-widest text-[#5D2E85] mb-4 pb-3 border-b border-[#DEDED7]"
                    >
                      Capabilities Deployed
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((svc, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-xl bg-[#F7F6F2] border border-[#DEDED7] text-xs font-body font-semibold text-[#111111] hover:border-[#5D2E85]/40 transition-colors"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Concrete Deliverables Built */}
              {study.deliverables && (
                <ScrollReveal data-reveal="up" delay={120}>
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#DEDED7] shadow-card">
                    <h3
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      className="font-heading font-bold text-xs uppercase tracking-widest text-[#5D2E85] mb-4 pb-3 border-b border-[#DEDED7]"
                    >
                      Systems & Assets Delivered
                    </h3>
                    <ul className="space-y-3">
                      {study.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs font-body text-[#111111]">
                          <span className="w-4 h-4 rounded-full bg-[#287A55]/15 text-[#287A55] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                            <Check className="w-3 h-3" />
                          </span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              {/* Sidebar Quick Action Card */}
              <ScrollReveal data-reveal="up" delay={180}>
                <div className="rounded-3xl bg-gradient-to-br from-[#111111] to-[#251532] text-white p-6 sm:p-7 border border-white/10 shadow-card">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#F1E7F9] block mb-2">
                    DIRECT FOUNDER CHANNEL
                  </span>
                  <h4
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    className="font-heading font-bold text-base text-white mb-2"
                  >
                    Need Similar Growth?
                  </h4>
                  <p className="font-body text-xs text-white/70 mb-5 leading-relaxed">
                    Message our founders directly on WhatsApp with your current metrics for an immediate growth audit.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#5D2E85] hover:bg-[#4C266D] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Audit My Brand on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </ScrollReveal>

            </aside>

            {/* ════ RIGHT COLUMN: DEEP-DIVE NARRATIVE & VISUAL PROOF (8 Cols) ════ */}
            <main className="lg:col-span-8 space-y-10 sm:space-y-12">

              {/* ── PHASE 01: THE BOTTLENECK ── */}
              <ScrollReveal data-reveal="up">
                <article className="bg-white rounded-3xl p-7 sm:p-10 border border-[#DEDED7] shadow-card relative overflow-hidden">
                  <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-amber-700 mb-4">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>PHASE 01 · THE BOTTLENECK</span>
                  </div>

                  <h2
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    className="font-heading font-normal text-2xl sm:text-3xl text-[#111111] tracking-tight mb-4"
                  >
                    The Commercial <HeadlineHighlight underlineClass="text-amber-500">Friction</HeadlineHighlight>
                  </h2>

                  <p className="font-body text-[#5F5F5A] text-base sm:text-lg leading-relaxed mb-6">
                    {study.challengeDetails || study.problem}
                  </p>

                  <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFBF0] border border-amber-200/60 text-xs sm:text-sm font-body text-amber-950 leading-relaxed">
                    <strong className="font-sans font-bold uppercase tracking-wider text-amber-800 block mb-1">
                      The Real Cost of the Status Quo
                    </strong>
                    {study.problem}
                  </div>
                </article>
              </ScrollReveal>

              {/* ── PHASE 02: THE JUNTOZ GROWTH ARCHITECTURE ── */}
              <ScrollReveal data-reveal="up">
                <article className="bg-white rounded-3xl p-7 sm:p-10 border border-[#DEDED7] shadow-card">
                  <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#5D2E85] mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#5D2E85]" />
                    <span>PHASE 02 · JUNTOZ GROWTH ARCHITECTURE</span>
                  </div>

                  <h2
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    className="font-heading font-normal text-2xl sm:text-3xl text-[#111111] tracking-tight mb-4"
                  >
                    Strategy &amp; <HeadlineHighlight>Deployment</HeadlineHighlight>
                  </h2>

                  <p className="font-body text-[#5F5F5A] text-base sm:text-lg leading-relaxed mb-6">
                    {study.strategyDetails || study.approach}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-[#F7F6F2] border border-[#DEDED7]">
                      <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#5D2E85] block mb-1.5">
                        Media & Audience Engine
                      </span>
                      <p className="font-body text-xs text-[#5F5F5A] leading-relaxed">
                        High-intent search terms, lookalike clustering, and algorithmic hook testing deployed to eliminate wasted impressions.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F7F6F2] border border-[#DEDED7]">
                      <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#287A55] block mb-1.5">
                        Conversion & WhatsApp CRM
                      </span>
                      <p className="font-body text-xs text-[#5F5F5A] leading-relaxed">
                        Instant qualification routing and 1-tap booking flows replacing static inquiry forms and manual DM follow-ups.
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>

              {/* ── PRODUCTION FRAMES & PROOF GALLERY ── */}
              {study.gallery && study.gallery.length > 0 && (
                <ScrollReveal data-reveal="up">
                  <div className="bg-white rounded-3xl p-7 sm:p-10 border border-[#DEDED7] shadow-card">
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DEDED7]">
                      <div>
                        <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#5D2E85] block mb-1">
                          VISUAL CAMPAIGN ASSETS
                        </span>
                        <h3
                          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                          className="font-heading font-normal text-xl sm:text-2xl text-[#111111] tracking-tight"
                        >
                          Production Frames &amp; <HeadlineHighlight>Campaign Stills</HeadlineHighlight>
                        </h3>
                      </div>
                      <span className="text-xs font-mono font-medium text-[#5F5F5A]">
                        {study.gallery.length} Frames
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {study.gallery.map((imgUrl, idx) => (
                        <div
                          key={idx}
                          className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#111111] border border-[#DEDED7] group cursor-pointer"
                        >
                          <img
                            src={imgUrl}
                            alt={`${study.clientName} production frame ${idx + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 pointer-events-none">
                            <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-white">
                              Asset 0{idx + 1} · {study.clientName}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* ── PHASE 03: COMMERCIAL TRANSFORMATION & OUTCOME ── */}
              <ScrollReveal data-reveal="up">
                <article className="bg-white rounded-3xl p-7 sm:p-10 border border-[#DEDED7] shadow-card">
                  <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#287A55] mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#287A55]" />
                    <span>PHASE 03 · COMMERCIAL TRANSFORMATION</span>
                  </div>

                  <h2
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    className="font-heading font-normal text-2xl sm:text-3xl text-[#111111] tracking-tight mb-4"
                  >
                    Measurable Commercial <HeadlineHighlight underlineClass="text-[#287A55]">Impact</HeadlineHighlight>
                  </h2>

                  <p className="font-body text-[#5F5F5A] text-base sm:text-lg leading-relaxed mb-6">
                    {study.impactDetails || study.result}
                  </p>

                  {/* Pull Quote Block */}
                  {study.quote && (
                    <div className="p-6 sm:p-8 rounded-2xl bg-[#F7F6F2] border-l-4 border-[#5D2E85] border-y border-r border-[#DEDED7]">
                      <div className="font-script text-[#5D2E85] text-3xl mb-1">“</div>
                      <p className="font-heading font-bold text-[#111111] text-base sm:text-lg italic leading-relaxed mb-3">
                        "{study.quote.replace(/^"|"$/g, '')}"
                      </p>
                      <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#5F5F5A] uppercase tracking-wider">
                        <span>— {study.clientName}</span>
                        {study.handle && <span className="text-[#5D2E85] font-mono font-semibold">{study.handle}</span>}
                      </div>
                    </div>
                  )}
                </article>
              </ScrollReveal>

            </main>

          </div>
        </section>

        {/* ════ SECTION 4: PREVIOUS / NEXT CASE STUDY EXPLORATION ════ */}
        <section className="mb-16 sm:mb-20">
          <ScrollReveal data-reveal="up">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#DEDED7] shadow-card">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DEDED7]">
                <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#5F5F5A]">
                  PORTFOLIO EXPLORATION
                </span>
                <span className="font-mono text-xs font-bold text-[#5D2E85]">
                  Case Study {currentIndex + 1} of {caseStudies.length}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Previous Study */}
                <Link
                  to={`/case-study/${prevStudy.slug}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-[#DEDED7] hover:border-[#5D2E85] bg-[#F7F6F2] hover:bg-white transition-all duration-200"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#111111]">
                    <img
                      src={prevStudy.image}
                      alt={prevStudy.clientName}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#5F5F5A] flex items-center gap-1">
                      <ArrowLeft className="w-3 h-3" />
                      <span>Previous Study</span>
                    </span>
                    <h4 className="font-heading font-bold text-sm text-[#111111] truncate group-hover:text-[#5D2E85] transition-colors">
                      {prevStudy.clientName}
                    </h4>
                    <span className="font-mono text-xs font-bold text-[#287A55]">
                      {prevStudy.metric} {prevStudy.metricLabel}
                    </span>
                  </div>
                </Link>

                {/* Next Study */}
                <Link
                  to={`/case-study/${nextStudy.slug}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="group flex items-center justify-between gap-4 p-4 rounded-2xl border border-[#DEDED7] hover:border-[#5D2E85] bg-[#F7F6F2] hover:bg-white transition-all duration-200 text-right"
                >
                  <div className="min-w-0">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#5F5F5A] flex items-center justify-end gap-1">
                      <span>Next Study</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                    <h4 className="font-heading font-bold text-sm text-[#111111] truncate group-hover:text-[#5D2E85] transition-colors">
                      {nextStudy.clientName}
                    </h4>
                    <span className="font-mono text-xs font-bold text-[#287A55]">
                      {nextStudy.metric} {nextStudy.metricLabel}
                    </span>
                  </div>
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#111111]">
                    <img
                      src={nextStudy.image}
                      alt={nextStudy.clientName}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ════ SECTION 5: HIGH-TICKET BOTTOM CONVERSION CALLOUT ════ */}
        <section>
          <ScrollReveal data-reveal="up">
            <div className="rounded-3xl bg-[#111111] text-white p-8 sm:p-14 lg:p-16 border border-white/10 text-center relative overflow-hidden shadow-2xl">
              <div className="max-w-2xl mx-auto relative z-10">
                <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#D8B4F8] block mb-4">
                  TAILORED GROWTH SYSTEMS · MUMBAI &amp; DELHI NCR
                </span>

                <h2
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  className="font-heading font-normal text-3xl sm:text-5xl uppercase tracking-tight text-white mb-4"
                >
                  Ready For A Similar{' '}
                  <span className="text-[#B58AE0] font-normal italic">Transformation?</span>
                </h2>

                <p className="font-body text-white/70 text-sm sm:text-base leading-relaxed mb-8">
                  Book a confidential 20-minute growth diagnostic with our agency founders. We will audit your current acquisition funnel and identify your highest-leverage revenue unlock.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#5D2E85] hover:bg-[#4C266D] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 cursor-pointer"
                  >
                    <span>Message On WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <Link
                    to="/onboarding"
                    onClick={() => window.scrollTo(0, 0)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white hover:text-[#111111] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all border border-white/20 cursor-pointer"
                  >
                    <span>Start Brand Onboarding</span>
                  </Link>
                </div>

                <p className="font-mono text-xs text-white/40 mt-6">
                  Direct Agency Desk: +91 90040 01800 · response within 15 minutes during business hours
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </div>
  );
}
