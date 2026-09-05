import { ArrowUpRight, Phone, MessageSquare, QrCode, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function CollaborationCTA() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#070709] via-[#0e070a] to-[#070709] border-t border-white/[0.08]">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 burgundy-glow opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left / Main CTA Text */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-[#e62338]">
              <Sparkles className="w-4 h-4" />
              <span>START YOUR JOURNEY</span>
            </div>

            <h2 className="font-['Oswald'] text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[0.03em] uppercase text-[#EDE7DC] leading-none">
              LET'S BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EDE7DC] via-[#FAF7F2] to-[#A89F91]">
                SOMETHING GREAT
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#D9D2C5] font-light max-w-2xl leading-relaxed">
              Have a business idea, portfolio project or website requirement? Let's turn it into a professional digital experience.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                id="cta-start-project"
                onClick={scrollToContact}
                className="px-8 py-4 text-xs sm:text-sm tracking-[0.22em] uppercase font-bold text-white bg-gradient-to-r from-[#7a0f1d] via-[#941324] to-[#630b17] border border-[#b3192c]/80 rounded-sm shadow-xl shadow-[#851424]/40 hover:shadow-2xl hover:shadow-[#941324]/60 hover:border-[#e62338] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                id="cta-call-now"
                href={`tel:${PERSONAL_INFO.phone}`}
                className="px-7 py-4 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold text-[#EDE7DC] bg-[#121217] hover:bg-white/[0.06] border border-white/[0.12] hover:border-[#9b1424] rounded-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#e62338]" />
                <span>CALL NOW</span>
              </a>

              <a
                id="cta-whatsapp-me"
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold text-white bg-[#0e3a1f]/60 hover:bg-[#124d29]/80 border border-[#22c55e]/40 hover:border-[#22c55e] rounded-sm transition-all flex items-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-[#22c55e]" />
                <span>WHATSAPP ME</span>
              </a>
            </div>

            <div className="pt-2 text-xs font-mono text-[#A89F91] tracking-wider">
              DIRECT LINE: <span className="text-[#EDE7DC] font-bold">{PERSONAL_INFO.displayPhone}</span> • RAJASTHAN, INDIA
            </div>
          </div>

          {/* Right / Editorial Scan to Connect Cards (Inspired by the reference image footer) */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
            {/* Scan Card 1: WhatsApp QR */}
            <div className="p-6 rounded-xl bg-[#0d0d12]/90 border border-white/[0.08] hover:border-[#9b1424]/60 transition-all flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-widest text-[#A89F91] uppercase">
                  SCAN TO CONNECT
                </span>
                <span className="text-[10px] font-bold tracking-wider text-[#22c55e] uppercase">
                  WhatsApp Direct
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Visual SVG QR Code */}
                <div className="w-20 h-20 bg-white p-2 rounded-lg shrink-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-black fill-current">
                    <path d="M0 0h30v30H0zm5 5h20v20H5zM10 10h10v10H10zM70 0h30v30H70zm5 5h20v20H75zM80 10h10v10H80zM0 70h30v30H0zm5 5h20v20H5zM10 80h10v10H10zM40 10h10v20H40zm20 0h10v10H60zm-20 30h30v10H40zm0 20h10v30H40zm20-10h10v20H60zm10 20h20v10H70zm10-30h10v20H80z" />
                  </svg>
                </div>
                <div>
                  <div className="font-['Oswald'] text-base font-bold text-[#EDE7DC] uppercase">
                    INSTANT CHAT
                  </div>
                  <p className="text-[11px] text-[#A89F91] leading-tight mt-1">
                    Scan with camera or phone to start immediate WhatsApp consultation.
                  </p>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#e62338] hover:underline uppercase tracking-wider font-semibold mt-2"
                  >
                    <span>Open link</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Editorial Signature Element */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#120608] to-[#0a0a0e] border border-white/[0.08] flex-1 flex flex-col justify-between">
              <div className="text-[10px] font-mono tracking-[0.25em] text-[#A89F91] uppercase">
                PHILOSOPHY
              </div>
              <div className="font-['Oswald'] text-lg font-bold text-[#EDE7DC] tracking-wider uppercase my-2">
                DESIGNING EXPERIENCES. BUILDING CONNECTIONS.
              </div>
              <div className="font-['Cinzel'] text-xs text-[#9b1424] tracking-widest uppercase">
                — Yuvraj Singh Rathore
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
