import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import ScrollReveal from './ScrollReveal';
import SpineAccordion, { JUNTOZ_ACCORDION_SERVICES } from './interactions/spine-accordion';

export default function ServicesGrid() {
  return (
    <section
      id="services-grid"
      className="py-12 sm:py-20 md:py-24 bg-[#F7F6F2] border-b border-[#DEDED7]/70 relative overflow-hidden"
    >
      {/* ── SECTION HEADER: Editorial Authority ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center mb-10 sm:mb-14">
        <ScrollReveal data-reveal="up">
          <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#5D2E85] block mb-3">
            WHAT ARE OUR SERVICES? · CORE CAPABILITIES
          </span>

          <h2
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#111111] leading-[1.12] mb-4 tracking-tight"
          >
            <span className="block mb-1">Some Brands Need Marketing.</span>
            <span className="block">
              We Build A{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span className="text-[#5D2E85]">Growth System</span>
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-2 left-0 w-full overflow-visible pointer-events-none text-[#5D2E85]"
                  height="12"
                  viewBox="0 0 260 14"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 9 C 60 3, 170 12, 258 4"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
              .
            </span>
          </h2>

          <p className="font-body text-[#5F5F5A] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We connect paid acquisition, local search visibility, brand positioning, and conversion architecture into a synchronized pipeline designed for commercial ROI.
          </p>
        </ScrollReveal>
      </div>

      {/* ── INTERACTIVE SPINE ACCORDION (5 JUNTOZ SERVICES) ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1360px] mb-12 sm:mb-16">
        <ScrollReveal data-reveal="up" delay={120}>
          <SpineAccordion
            items={JUNTOZ_ACCORDION_SERVICES}
            initialOpen={1}
            collapsible={false}
            hoverToOpen={true}
            cardHeight={520}
            closedWidth={76}
            radius={24}
            gap={10}
            breakpoint={960}
            textColor="#111111"
            secondaryColor="#5F5F5A"
            coverTextColor="#FFFFFF"
            focusColor="#5D2E85"
            className="mx-auto"
          />
        </ScrollReveal>
      </div>

      {/* ── SECTION GATEWAY LINK ── */}
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal data-reveal="up" delay={200} className="flex flex-col items-center justify-center text-center pt-8 border-t border-[#DEDED7]/80">
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#111111] hover:bg-[#5D2E85] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-card"
          >
            <span>Explore All 5 Capabilities &amp; Roadmap</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <span className="font-sans text-xs text-[#5F5F5A] font-medium mt-3 block">
            Dedicated deliverables, transparent scopes &amp; 60-day sprints.
          </span>
        </ScrollReveal>
      </div>
    </section>
  );
}
