import { type ElementType } from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import { Layout, Code2, Building2, Sparkles, RefreshCw, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const ICON_MAP: Record<string, ElementType> = {
  Layout,
  Code2,
  Building2,
  Sparkles,
  RefreshCw
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden subtle-grid">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#6b0d19]/10 blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08]"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] uppercase text-[#9b1424]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e62338] animate-pulse"></span>
              <span>SERVICES & EXPERTISE</span>
            </div>
            <h2 className="font-['Oswald'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[0.05em] uppercase text-[#EDE7DC]">
              WHAT I DO
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#A89F91] max-w-md font-light italic">
            "Digital experiences built for real businesses."
          </p>
        </motion.div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, idx) => {
            const IconComponent = ICON_MAP[service.iconName] || Layout;
            const isWide = idx === 4; // 5th card spans nicely on large screens or looks distinct

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`luxury-card p-8 rounded-xl relative group flex flex-col justify-between ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Subtle top indicator */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#9b1424]/40 to-transparent group-hover:via-[#e62338] transition-all duration-500"></div>

                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-['Oswald'] text-2xl font-bold text-[#A89F91]/50 group-hover:text-[#9b1424] transition-colors tracking-wider">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-lg bg-white/[0.03] border border-white/[0.08] group-hover:border-[#9b1424]/60 group-hover:bg-[#851424]/10 flex items-center justify-center text-[#EDE7DC] group-hover:text-[#e62338] transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-['Oswald'] text-2xl font-bold tracking-[0.1em] uppercase text-[#EDE7DC] group-hover:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#D9D2C5]/80 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#A89F91]">
                    Key Deliverables:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.deliverables.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.06] text-[#D9D2C5]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle bottom arrow */}
                <div className="mt-6 flex items-center justify-between text-[11px] tracking-[0.18em] uppercase text-[#A89F91] group-hover:text-[#EDE7DC] transition-colors">
                  <span>Standard of Execution</span>
                  <ArrowUpRight className="w-4 h-4 text-[#9b1424] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}

          {/* Quick Inquiry CTA card inside services grid to balance 5 items to a 6-item visual grid! */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="luxury-card p-8 rounded-xl relative group flex flex-col justify-between border-dashed border-[#9b1424]/40 bg-gradient-to-b from-[#19060a]/60 to-[#0c0c11]/80"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-['Oswald'] text-xs font-bold text-[#e62338] tracking-[0.25em] uppercase">
                  CUSTOM REQUIREMENT?
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#e62338] animate-ping"></span>
              </div>
              <h3 className="font-['Oswald'] text-2xl font-bold tracking-[0.1em] uppercase text-[#EDE7DC] mb-3">
                NEED A BESPOKE WEBSITE?
              </h3>
              <p className="text-sm text-[#D9D2C5]/80 font-light leading-relaxed mb-6">
                Have specific local business requirements, WhatsApp catalog flows, or custom features? Let's discuss your project directly.
              </p>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="w-full py-3 text-center text-xs tracking-[0.2em] font-semibold uppercase text-white bg-[#851424] hover:bg-[#a8192a] rounded transition-colors block"
            >
              Discuss Your Idea
            </motion.a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
