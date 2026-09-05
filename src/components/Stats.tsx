import { STATS_DATA } from '../data/portfolioData';
import { Layers, Shield, Smartphone, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const STAT_ICONS = [
  Layers,
  Shield,
  Smartphone,
  Clock
];

export default function Stats() {
  return (
    <section className="relative py-12 border-y border-white/[0.08] bg-[#09090c]/80 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS_DATA.map((stat, idx) => {
            const IconComponent = STAT_ICONS[idx % STAT_ICONS.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative p-6 rounded-sm bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] hover:border-[#9b1424]/40 transition-colors group cursor-default"
              >
                {/* Red top corner accent line */}
                <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#9b1424] group-hover:w-full transition-all duration-500"></div>

                <div className="flex items-start justify-between mb-4">
                  <div className="font-['Oswald'] text-4xl sm:text-5xl font-bold tracking-tight text-[#EDE7DC] group-hover:text-white transition-colors">
                    {stat.value}
                  </div>
                  <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06] text-[#e62338]">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                <div className="font-['Oswald'] text-sm tracking-[0.18em] uppercase text-[#EDE7DC] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#A89F91] font-light">
                  {stat.sublabel}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
