import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import ScrollReveal from '../components/ScrollReveal';

const WA = 'https://wa.me/919004001800?text=Hi%20Sujal!%20I%27d%20like%20a%20free%20Google%20Business%20Profile%20audit%20for%20my%20business.';

const STATS = [
  { value: '76%', label: 'Local Searchers Visit Within 24h', desc: 'Consumers searching for local services act with immediate intent.' },
  { value: '#1–#3', label: 'Google 3-Pack Capture', desc: 'Over 68% of all local clicks go directly to the top 3 map results.' },
  { value: '3.4×', label: 'More Direct Phone Calls', desc: 'Optimized profiles generate continuous calls without paying per click.' },
];

const GMB_PILLARS = [
  {
    step: '01',
    title: 'High-Intent Category & Service Mapping',
    desc: 'Most businesses pick generic categories and miss 80% of search volume. We map your primary and secondary categories to high-value local queries that match customer purchasing intent.',
    deliverables: ['Primary & secondary category audit', 'Service catalog with clear pricing tiers', 'Hyper-local keyword mapping'],
  },
  {
    step: '02',
    title: 'Geo-Tagged Photo & Media Cadence',
    desc: 'Google favors active businesses. We establish a weekly cadence of high-resolution, geo-tagged photography showcasing your physical premises, team, and real client results.',
    deliverables: ['EXIF geo-location metadata optimization', 'Weekly photo upload scheduling', '360° interior walkthrough alignment'],
  },
  {
    step: '03',
    title: 'Automated Review Acquisition System',
    desc: 'Reviews dictate map rank and customer trust. We build automated WhatsApp post-service review request funnels that make it frictionless for satisfied customers to leave 5-star reviews with keywords.',
    deliverables: ['Direct review short-link QR cards', 'WhatsApp automated feedback prompts', 'Review reply framework with keyword integration'],
  },
  {
    step: '04',
    title: 'NAP Citation & Local Authority Defense',
    desc: 'Inconsistent Name, Address, and Phone numbers across directories destroy Google trust. We clean up and synchronize your data across 40+ Indian business directories and maps.',
    deliverables: ['Directory citation audit & sync', 'Duplicate listing suppression', 'Schema.org local business markup integration'],
  },
];

const CHECKLIST_ITEMS = [
  { id: 'cat', text: 'Is your primary category optimized for high-intent search (not just generic broad terms)?' },
  { id: 'photos', text: 'Have you uploaded fresh, high-quality photos of your location in the last 14 days?' },
  { id: 'reviews', text: 'Do your customer reviews contain natural service and neighborhood keywords?' },
  { id: 'replies', text: 'Are 100% of reviews replied to within 48 hours with professional owner responses?' },
  { id: 'posts', text: 'Do you publish weekly Google Updates/Offers to signal active business operations?' },
  { id: 'citations', text: 'Is your exact address and phone number 100% consistent across Justdial, Sulekha, and Maps?' },
];

export default function GoogleBusinessProfilePage() {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const healthScore = Math.round((checkedCount / CHECKLIST_ITEMS.length) * 100);

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen bg-[#F7F6F2]">
      <PageMeta
        title="Google Business Profile (GMB) Management & Local SEO — Juntoz"
        description="Dominate the Google 3-Pack and turn local searches into booked clients, phone calls, and showroom visits. Complete GMB management without false promises."
        path="/google-business-profile"
      />

      {/* ── HERO SECTION ── */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl mb-20 md:mb-28">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal data-reveal="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DEDED7] bg-white shadow-subtle mb-5">
              <span className="w-2 h-2 rounded-full bg-[#5D2E85]" />
              <span className="font-body font-bold text-[#5F5F5A] text-[11px] tracking-wider uppercase">
                Local Search &amp; Google 3-Pack Authority
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal data-reveal="up" delay={100}>
            <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#111111] leading-[1.04] mb-6">
              Your Customers Are Already Searching. <br />
              <span className="text-[#5D2E85]">The Question Is Whether They Find You.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal data-reveal="up" delay={150}>
            <p className="font-body text-[#5F5F5A] text-base md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              When prospective clients search "best salon near me", "bridal makeup artist in Bandra", or "dermatology clinic in South Delhi", Google shows 3 map results. If you aren't in that top 3, your competitors get the calls.
            </p>
          </ScrollReveal>

          <ScrollReveal data-reveal="up" delay={200} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-[#111111] hover:bg-[#5D2E85] transition-colors duration-200 shadow-md"
            >
              <span>Claim Free GMB Audit on WhatsApp</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-[#111111] border border-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-200 bg-transparent"
            >
              <span>Schedule Strategy Call</span>
            </Link>
          </ScrollReveal>
        </div>

        {/* ── Interactive Local 3-Pack Visualizer ── */}
        <ScrollReveal data-reveal="up" delay={250} className="mt-14 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DEDED7] shadow-card">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#DEDED7]">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#5F5F5A] uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#287A55]" />
                  <span>Live Search Intent Simulation</span>
                </div>
                <h3 className="font-heading font-black text-xl text-[#111111] mt-1">
                  Query: "Best [Service] in [Your Neighborhood]"
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F1E7F9] text-[#5D2E85] font-heading font-black text-xs">
                <span>Top 3-Pack Captures 68% of Calls</span>
              </div>
            </div>

            {/* Simulated Rank Item #1 (Client Profile) */}
            <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#F7F6F2] border-2 border-[#5D2E85]/40 relative">
              <div className="flex flex-wrap items-center justify-between gap-2.5 mb-2 sm:mb-0">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-black text-lg text-[#111111]">Your Brand Name</span>
                  <span className="text-[#287A55] text-xs font-bold">✓ Verified</span>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-[#5D2E85] text-white font-heading font-black text-[10px] uppercase tracking-widest shrink-0 sm:absolute sm:top-5 sm:right-6">
                  Rank #1 • Fully Optimized
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-amber-500 text-sm">★★★★★</span>
                    <span className="font-body text-xs font-bold text-[#111111]">4.9</span>
                    <span className="font-body text-xs text-[#5F5F5A]">(142 reviews) • Luxury Specialist</span>
                  </div>
                  <p className="font-body text-xs text-[#5F5F5A] mt-2">
                    Open · Closes 8 PM · 15+ high-resolution updates uploaded this month
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0">
                  <span className="px-4 py-2 rounded-xl bg-white border border-[#DEDED7] text-xs font-bold text-[#111111]">
                    📞 Direct Call
                  </span>
                  <span className="px-4 py-2 rounded-xl bg-[#111111] text-white text-xs font-bold">
                    📍 Directions
                  </span>
                </div>
              </div>
            </div>

            {/* Unoptimized listings below */}
            <div className="mt-3 p-4 rounded-xl bg-white border border-[#DEDED7]/70 opacity-60">
              <div className="flex items-center justify-between text-xs text-[#5F5F5A]">
                <div>
                  <span className="font-bold text-[#111111]">Competitor A (Unmanaged)</span>
                  <p className="text-[11px]">3.9 ★ (18 reviews) · Missing phone number · No recent photos</p>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold">Rank #6 (Invisible)</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── STATS ROW ── */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((s, i) => (
            <ScrollReveal key={i} data-reveal="up" delay={i * 80}>
              <div className="bg-white rounded-3xl p-8 border border-[#DEDED7] shadow-card text-center sm:text-left h-full flex flex-col justify-between">
                <div>
                  <div className="font-heading font-black text-4xl sm:text-5xl text-[#5D2E85] mb-2">{s.value}</div>
                  <div className="font-heading font-bold text-[#111111] text-base mb-2">{s.label}</div>
                  <p className="font-body text-xs sm:text-sm text-[#5F5F5A] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── 4-STEP FRAMEWORK ── */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl mb-24">
        <ScrollReveal data-reveal="up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#5D2E85] mb-2 block">
            The Juntoz Playbook
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#111111]">
            How We Optimize Your <span className="text-[#5D2E85]">Local Presence.</span>
          </h2>
          <p className="font-body text-[#5F5F5A] text-sm sm:text-base mt-4 leading-relaxed">
            No black-hat tricks. No fake review farms. We build permanent organic local ranking authority through meticulous profile engineering and active management.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GMB_PILLARS.map((p, i) => (
            <ScrollReveal key={i} data-reveal="up" delay={i * 80}>
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#DEDED7] shadow-card h-full flex flex-col justify-between">
                <div>
                  <div className="font-heading font-black text-2xl text-[#5D2E85] mb-3">{p.step}</div>
                  <h3 className="font-heading font-black text-xl text-[#111111] mb-3">{p.title}</h3>
                  <p className="font-body text-sm text-[#5F5F5A] leading-relaxed mb-6">{p.desc}</p>
                </div>
                <div className="pt-6 border-t border-[#DEDED7]">
                  <p className="font-heading font-bold text-xs uppercase tracking-wider text-[#111111] mb-3">
                    Deliverables:
                  </p>
                  <ul className="space-y-2">
                    {p.deliverables.map((d, di) => (
                      <li key={di} className="flex items-center gap-2 text-xs text-[#5F5F5A] font-body">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5D2E85]" />
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

      {/* ── INTERACTIVE GMB HEALTH AUDIT CHECKLIST ── */}
      <section className="container mx-auto px-4 sm:px-6 max-w-4xl mb-24">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DEDED7] shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#DEDED7]">
            <div>
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#5D2E85]">
                Self-Assessment Tool
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#111111] mt-1">
                Is Your Google Profile Optimized?
              </h2>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <span className="font-body text-xs font-bold text-[#5F5F5A] block uppercase">Health Score</span>
              <span className="font-heading font-black text-3xl text-[#5D2E85]">{healthScore}%</span>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {CHECKLIST_ITEMS.map((item) => (
              <label
                key={item.id}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F6F2] hover:bg-white border border-[#DEDED7] cursor-pointer transition-all duration-200"
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
                ? 'Your profile is missing key ranking signals, costing you local footfall and daily calls.'
                : 'Good baseline! We can help you lock in the #1 position and automate ongoing review acquisition.'}
            </p>
            <a
              href={`https://wa.me/919004001800?text=Hi%20Sujal!%20My%20GMB%20Health%20Score%20is%20${healthScore}%25.%20I%27d%20like%20a%20detailed%20audit.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#111111] hover:bg-[#5D2E85] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors text-center"
            >
              Get Detailed Audit Report
            </a>
          </div>
        </div>
      </section>

      {/* ── CONVERSION BANNER ── */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="rounded-3xl bg-[#111111] text-white p-8 sm:p-14 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-[#5D2E85] font-heading font-black text-xs uppercase tracking-wider mb-4">
              Stop Giving Away Local Customers
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight mb-6">
              Let's Put Your Business in the <br />
              <span className="text-[#5D2E85]">Google 3-Pack.</span>
            </h2>
            <p className="font-body text-white/70 text-sm sm:text-base leading-relaxed mb-8">
              Send us your business name and address. We will run an audit of your current local search ranking against nearby competitors.
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#5D2E85] hover:bg-[#4C266D] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              <span>Get Your Google Business Profile Audited</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
