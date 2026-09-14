import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function HomeGMBTeaser() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F6F2] border-b border-[#DEDED7]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Hook & Curiosity */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal data-reveal="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DEDED7] bg-white shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-[#E84A2A]" />
                <span className="font-body font-bold text-[#5F5F5A] text-[11px] tracking-wider uppercase">
                  Local Search &amp; GMB
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal data-reveal="up" delay={80}>
              <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#111111] leading-[1.04]">
                Your Customers Are Already Searching. <br />
                <span className="text-[#E84A2A]">The Question Is Whether They Find You.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal data-reveal="up" delay={120}>
              <p className="font-body text-[#5F5F5A] text-base sm:text-lg leading-relaxed">
                68% of all high-intent local clicks go to the Google Maps 3-Pack. When nearby customers search for your core services, is your business rank #1, or are your competitors capturing the phone calls?
              </p>
            </ScrollReveal>

            <ScrollReveal data-reveal="up" delay={160} className="flex flex-wrap gap-3 pt-2">
              <div className="px-4 py-2 rounded-xl bg-white border border-[#DEDED7] font-body text-xs font-bold text-[#111111] shadow-subtle">
                📍 3-Pack Map Dominance
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-[#DEDED7] font-body text-xs font-bold text-[#111111] shadow-subtle">
                📞 Automated Review Funnels
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-[#DEDED7] font-body text-xs font-bold text-[#111111] shadow-subtle">
                ⚡ Direct Inbound Footfall
              </div>
            </ScrollReveal>

            <ScrollReveal data-reveal="up" delay={200} className="pt-4">
              <Link
                to="/google-business-profile"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#111111] hover:bg-[#E84A2A] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-sm group"
              >
                <span>Explore Google Business Profile Growth</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Column: Teaser 3-Pack Simulation Card */}
          <div className="lg:col-span-6">
            <ScrollReveal data-reveal="up" delay={150}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DEDED7] shadow-card relative">
                <div className="flex items-center justify-between pb-4 border-b border-[#DEDED7] mb-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#5F5F5A] uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#287A55]" />
                    <span>Search: "[Your Service] Near Me"</span>
                  </div>
                  <span className="text-[11px] font-heading font-black text-[#E84A2A]">TOP 3 RESULTS</span>
                </div>

                {/* Simulated Rank 1 */}
                <div className="p-5 rounded-2xl bg-[#F7F6F2] border border-[#E84A2A]/40 mb-3 transition-transform duration-200 hover:scale-[1.01]">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-black text-base text-[#111111]">Your Business</span>
                        <span className="text-[#287A55] text-xs font-bold">✓ Rank #1</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1 text-xs">
                        <span className="text-amber-500">★★★★★</span>
                        <span className="font-bold text-[#111111]">4.9</span>
                        <span className="text-[#5F5F5A]">(140+ reviews)</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1.5 rounded-lg bg-white border border-[#DEDED7] text-[11px] font-bold text-[#111111]">
                        Call
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-[#111111] text-white text-[11px] font-bold">
                        Directions
                      </span>
                    </div>
                  </div>
                </div>

                {/* Simulated Competitor */}
                <div className="p-4 rounded-xl bg-white border border-[#DEDED7] opacity-60">
                  <div className="flex items-center justify-between text-xs text-[#5F5F5A]">
                    <div>
                      <span className="font-bold text-[#111111]">Nearby Competitor</span>
                      <p className="text-[11px]">3.8 ★ (12 reviews) · Unmanaged listing</p>
                    </div>
                    <span className="text-[10px] font-semibold text-[#5F5F5A]">Rank #5</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#DEDED7] text-center">
                  <Link
                    to="/google-business-profile"
                    className="font-heading font-bold text-xs uppercase tracking-wider text-[#E84A2A] hover:underline"
                  >
                    Take the 60-Second GMB Health Audit →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
