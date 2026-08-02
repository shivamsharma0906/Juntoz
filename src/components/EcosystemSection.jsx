import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ECOSYSTEM_STAGES = [
  { id: 'brand', title: 'Brand', desc: 'Defining the voice and visual identity.', color: '#FF3AF2' },
  { id: 'creative', title: 'Creative', desc: 'Designing the assets and campaigns.', color: '#7B2FFF' },
  { id: 'photo', title: 'Photography', desc: 'Capturing premium real-world imagery.', color: '#00F5D4' },
  { id: 'content', title: 'Content', desc: 'Crafting the narrative and social strategy.', color: '#FF6B35' },
  { id: 'website', title: 'Website', desc: 'Building high-converting digital storefronts.', color: '#FF3AF2' },
  { id: 'ads', title: 'Ads', desc: 'Driving targeted traffic via Meta & Google.', color: '#7B2FFF' },
  { id: 'lead', title: 'Lead Generation', desc: 'Capturing high-intent prospects.', color: '#00F5D4' },
  { id: 'crm', title: 'CRM', desc: 'Managing and tracking the pipeline.', color: '#FF6B35' },
  { id: 'wa', title: 'WhatsApp', desc: 'Automating immediate conversations.', color: '#FF3AF2' },
  { id: 'sales', title: 'Sales', desc: 'Converting leads into paying customers.', color: '#7B2FFF' },
  { id: 'retention', title: 'Retention', desc: 'Maximizing lifetime value and loyalty.', color: '#00F5D4' }
];

export default function EcosystemSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="ecosystem" className="py-16 sm:py-24 lg:py-32 relative z-10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative">
        <div className="text-center mb-16 sm:mb-24">
          <span className="font-heading font-bold tracking-widest text-[#7B2FFF] uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
            The Marketing Ecosystem
          </span>
          <h2 className="font-heading font-black text-white text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter leading-[0.9]">
            Everything Is <br className="hidden sm:block" /> Connected.
          </h2>
          <p className="font-body text-white/50 max-w-xl mx-auto mt-6">
            A single broken link in your marketing ruins the whole chain. We build and manage the entire ecosystem so every department feeds the next.
          </p>
        </div>

        <div className="relative">
          {/* The Pipeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-gradient-to-b from-[#FF3AF2] via-[#7B2FFF] to-[#00F5D4]"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 sm:space-y-20 relative z-10">
            {ECOSYSTEM_STAGES.map((stage, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={stage.id} className={`flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="p-6 sm:p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <h3 className="font-heading font-black text-2xl text-white uppercase tracking-wider mb-2" style={{ color: stage.color }}>
                        {stage.title}
                      </h3>
                      <p className="font-body text-white/70 text-sm sm:text-base">
                        {stage.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Node Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-background border-4 md:-translate-x-1/2 mt-10 md:mt-0" style={{ borderColor: stage.color }}>
                    <motion.div 
                      className="absolute inset-[-8px] rounded-full opacity-30"
                      style={{ backgroundColor: stage.color }}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
