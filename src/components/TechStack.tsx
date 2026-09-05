import { type ElementType } from 'react';
import { TOOLS_DATA } from '../data/portfolioData';
import { FileCode2, Palette, Terminal, GitBranch, Search, Figma, Layers, Monitor } from 'lucide-react';

const TECH_ICONS: Record<string, ElementType> = {
  FileCode2,
  Palette,
  Terminal,
  GitBranch,
  Search,
  Figma,
  Layers,
  Monitor
};

export default function TechStack() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#07070a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] uppercase text-[#9b1424]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e62338]"></span>
              <span>DEV & DESIGN TOOLSET</span>
            </div>
            <h2 className="font-['Oswald'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[0.05em] uppercase text-[#EDE7DC]">
              TOOLS & TECHNOLOGIES
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#A89F91] max-w-md font-light italic">
            "Practical modern tools used daily to design, code, test, and deploy clean websites."
          </p>
        </div>

        {/* 8 Technology Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {TOOLS_DATA.map((tool) => {
            const IconComp = TECH_ICONS[tool.iconName] || Terminal;

            return (
              <div
                key={tool.name}
                className="p-6 rounded-xl bg-[#0e0e13]/80 border border-white/[0.07] hover:border-[#9b1424]/60 hover:bg-[#13131a] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-white/[0.02] border border-white/[0.08] group-hover:border-[#9b1424]/40 group-hover:bg-[#851424]/10 flex items-center justify-center text-[#EDE7DC] group-hover:text-[#e62338] transition-all duration-300 mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#9b1424] mb-1">
                    {tool.category}
                  </div>

                  <h3 className="font-['Oswald'] text-xl font-bold tracking-wider uppercase text-[#EDE7DC] group-hover:text-white mb-2">
                    {tool.name}
                  </h3>

                  <p className="text-xs text-[#A89F91] font-light leading-relaxed">
                    {tool.purpose}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[10px] text-[#A89F91] uppercase tracking-widest font-mono">
                  <span>Standard</span>
                  <span className="text-[#e62338]">Active</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
