import { WHY_WORK_WITH_ME } from '../data/portfolioData';
import { Sparkles, Check, Shield, MessageCircle, Sliders, DollarSign } from 'lucide-react';

const WHY_ICONS = [
  Sparkles,
  Shield,
  Check,
  MessageCircle,
  Sliders,
  DollarSign
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 relative subtle-grid border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] uppercase text-[#9b1424]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e62338]"></span>
              <span>VALUE PROPOSITION</span>
            </div>
            <h2 className="font-['Oswald'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[0.05em] uppercase text-[#EDE7DC]">
              WHY RATHORE WEBWORKS?
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#A89F91] max-w-md font-light italic">
            "Direct accountability, transparent communication, and client-first delivery."
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_WITH_ME.map((item, idx) => {
            const IconComp = WHY_ICONS[idx % WHY_ICONS.length];

            return (
              <div
                key={item.number}
                className="luxury-card p-8 rounded-xl relative group flex flex-col justify-between"
              >
                {/* Hairline red accent top */}
                <div className="absolute top-0 left-0 w-12 h-[2px] bg-[#9b1424] group-hover:w-full transition-all duration-500"></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-['Oswald'] text-2xl font-bold text-[#A89F91]/40 group-hover:text-[#9b1424] transition-colors">
                      {item.number}
                    </span>
                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[#EDE7DC] group-hover:text-[#e62338] transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-['Oswald'] text-2xl font-bold tracking-[0.1em] uppercase text-[#EDE7DC] group-hover:text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#D9D2C5]/80 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#A89F91] uppercase tracking-wider">
                  <span>Guaranteed Principle</span>
                  <span className="text-[#9b1424]">✓</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
