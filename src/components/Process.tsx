import { PROCESS_STEPS } from '../data/portfolioData';
import { Search, Compass, Palette, Code, CheckCircle, Rocket } from 'lucide-react';

const STEP_ICONS = [
  Search,
  Compass,
  Palette,
  Code,
  CheckCircle,
  Rocket
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#070709] border-t border-white/[0.06]">
      {/* Background glow accent */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[#851424]/10 blur-[130px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] uppercase text-[#9b1424]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e62338]"></span>
              <span>STRUCTURED WORKFLOW</span>
            </div>
            <h2 className="font-['Oswald'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[0.05em] uppercase text-[#EDE7DC]">
              MY PROCESS
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#A89F91] max-w-md font-light italic">
            "A disciplined 6-stage engineering and design pathway from concept to live deployment."
          </p>
        </div>

        {/* Vertical Timeline / Process Nodes */}
        <div className="relative">
          {/* Vertical central/left line */}
          <div className="hidden md:block absolute left-[50%] top-8 bottom-8 w-[1px] bg-gradient-to-b from-[#9b1424]/60 via-white/[0.1] to-[#9b1424]/60 -translate-x-1/2" />
          <div className="md:hidden absolute left-6 top-8 bottom-8 w-[1px] bg-gradient-to-b from-[#9b1424]/60 via-white/[0.1] to-[#9b1424]/60" />

          <div className="space-y-10 md:space-y-12">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComp = STEP_ICONS[idx % STEP_ICONS.length];
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Box */}
                  <div className={`w-full md:w-[calc(50%-48px)] pl-16 md:pl-0 ${
                    isEven ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <div className="luxury-card p-6 sm:p-8 rounded-xl group hover:border-[#9b1424]/60 transition-all duration-300">
                      <div className={`flex items-center gap-3 mb-3 ${
                        isEven ? 'md:justify-start' : 'md:justify-end'
                      }`}>
                        <span className="font-['Oswald'] text-xs font-bold text-[#e62338] tracking-[0.25em]">
                          PHASE {step.number}
                        </span>
                        <span className="text-white/20">•</span>
                        <span className="text-[11px] font-mono text-[#A89F91] tracking-widest uppercase">
                          Execution Step
                        </span>
                      </div>

                      <h3 className="font-['Oswald'] text-2xl font-bold tracking-[0.1em] uppercase text-[#EDE7DC] group-hover:text-white mb-2">
                        {step.number} — {step.title}
                      </h3>

                      <p className="text-sm font-medium text-[#EDE7DC]/90 mb-3">
                        {step.description}
                      </p>

                      <p className="text-xs text-[#A89F91] font-light leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>

                  {/* Central Node / Circle */}
                  <div className="absolute left-6 md:left-[50%] -translate-x-1/2 flex items-center justify-center">
                    <div className="relative group">
                      <div className="w-12 h-12 rounded-full bg-[#0d0d12] border-2 border-[#9b1424] flex items-center justify-center text-white shadow-xl shadow-[#851424]/20 group-hover:scale-110 group-hover:border-[#e62338] transition-transform duration-300">
                        <IconComp className="w-5 h-5 text-[#EDE7DC]" />
                      </div>
                      {/* Pulse ring */}
                      <div className="absolute -inset-1 rounded-full border border-[#9b1424]/30 animate-ping opacity-20 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Spacer for desktop layout balance */}
                  <div className="hidden md:block md:w-[calc(50%-48px)]"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
