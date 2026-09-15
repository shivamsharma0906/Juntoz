import ScrollReveal from './ScrollReveal.jsx';

const MARKETING_BREAKDOWNS = [
  {
    num: '01',
    title: 'Isolated Tactics vs. Connected Systems (The Ad Spend Hole)',
    reality: 'Running expensive paid ads that send traffic to generic homepages with no targeted messaging, clear call-to-action, or follow-up pipeline.',
    solution: 'We engineer full-funnel architectures connecting targeted ad hooks to dedicated conversion landing pages and instant qualification sequences.',
    icon: '⚡',
  },
  {
    num: '02',
    title: 'The Vanity Metric Trap (Likes Don’t Pay Payroll)',
    reality: 'Hiring agencies that celebrate follower counts, impressions, and viral views while your actual sales pipeline and revenue remain stagnant.',
    solution: 'We align marketing strictly to commercial outcomes: qualified inbound inquiries, verified appointments, customer acquisition cost, and revenue.',
    icon: '📈',
  },
  {
    num: '03',
    title: 'Slow Speed-to-Lead Leakage (The Inquiry Drop-Off)',
    reality: 'Inbound inquiries sit in email inboxes or DMs for hours or days, causing 70%+ of prospective buyers to abandon and choose faster competitors.',
    solution: 'We integrate automated WhatsApp qualification funnels that answer questions instantly, filter budget alignment, and schedule calls in 2 minutes.',
    icon: '💬',
  },
  {
    num: '04',
    title: 'Invisible When High-Intent Buyers Search Google',
    reality: 'When ready-to-buy clients search for your exact services in your city, your business is buried beneath competitors with optimized local profiles.',
    solution: 'We optimize Google Business Profiles and local SEO to secure top 3-Pack Maps rankings, capturing customers at the exact moment of search.',
    icon: '📍',
  },
];

export default function WhyMarketingBreaks() {
  return (
    <section id="problem-framing" className="py-24 md:py-32 relative z-10 bg-[#FFFFFF] border-b border-[#DEDED7]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative">
        
        {/* Section Header */}
        <ScrollReveal data-reveal="up" className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F1E7F9] border border-[#5D2E85]/20 font-sans font-semibold text-xs uppercase tracking-wider text-[#5D2E85] mb-4">
            The Strategic Problem
          </span>
          <h2 className="font-heading font-black text-[#111111] text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.1] mb-6">
            Why Most Digital Marketing <br className="hidden sm:inline" />
            <span className="text-[#5D2E85]">
              Breaks Down.
            </span>
          </h2>
          <p className="font-body text-[#5F5F5A] text-base sm:text-lg leading-relaxed">
            Most businesses offer exceptional products and services, but struggle with unpredictable customer acquisition and rising ad costs. Here is why conventional marketing fails without a connected system:
          </p>
        </ScrollReveal>

        {/* 4 Problem Framing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {MARKETING_BREAKDOWNS.map((item, idx) => (
            <ScrollReveal key={item.num} data-reveal="up" delay={idx * 100}>
              <div className="group relative rounded-3xl h-full flex flex-col transition-all duration-300 hover:-translate-y-1 bg-[#F7F6F2] border border-[#DEDED7] p-7 sm:p-9 shadow-subtle hover:border-[#111111]/40">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    {/* Top row: Number and Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-sans font-bold text-sm tracking-wider text-[#5D2E85]">
                        {item.num}
                      </span>
                      <span className="text-xl p-2.5 rounded-xl bg-white border border-[#DEDED7] shadow-xs">
                        {item.icon}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#111111] uppercase tracking-tight mb-4">
                      {item.title}
                    </h3>

                    {/* Problem / Reality */}
                    <div className="mb-5 p-4 rounded-xl bg-white border border-[#DEDED7]">
                      <p className="font-sans font-bold text-[11px] uppercase tracking-wider text-[#5D2E85] mb-1">
                        The Pain:
                      </p>
                      <p className="font-body text-[#5F5F5A] text-sm leading-relaxed">
                        {item.reality}
                      </p>
                    </div>
                  </div>

                  {/* Juntoz Fix */}
                  <div className="p-4 rounded-xl bg-white border border-[#DEDED7]">
                    <p className="font-sans font-bold text-[11px] uppercase tracking-wider text-[#111111] mb-1">
                      How Juntoz Solves It:
                    </p>
                    <p className="font-body text-[#111111] text-sm font-medium leading-relaxed">
                      {item.solution}
                    </p>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
