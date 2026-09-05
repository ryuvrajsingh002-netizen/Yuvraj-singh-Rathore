import { Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function TopBar() {
  return (
    <div id="topbar" className="w-full bg-[#050507] border-b border-white/[0.07] py-2 px-4 sm:px-8 text-[11px] tracking-[0.2em] uppercase text-[#A89F91] transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#9b1424]"></span>
          <span className="font-medium text-white/80 hidden xs:inline tracking-[0.25em]">CREATIVE WEB PORTFOLIO</span>
          <span className="font-medium text-white/80 xs:hidden tracking-[0.18em]">PORTFOLIO</span>
        </div>

        {/* Center */}
        <div className="font-semibold text-[#EDE7DC] tracking-[0.3em] text-[10px] sm:text-[11px] hover:text-white transition-colors">
          {PERSONAL_INFO.brandName}
        </div>

        {/* Right */}
        <a
          href={PERSONAL_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group hover:text-[#EDE7DC] transition-colors"
          title="Connect on WhatsApp"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e62338] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c9182b]"></span>
          </span>
          <span className="text-[#EDE7DC]/90 font-medium tracking-[0.18em] text-[10px] sm:text-[11px]">AVAILABLE FOR FREELANCE</span>
        </a>
      </div>
    </div>
  );
}
