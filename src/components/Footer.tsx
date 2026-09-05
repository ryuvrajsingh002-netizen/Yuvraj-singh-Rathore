import { ArrowUp, Phone, MessageSquare, MapPin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050507] border-t border-white/[0.08] relative pt-16 pb-12 overflow-hidden text-[#A89F91]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#851424] border border-[#a8192a] flex items-center justify-center text-white font-bold text-sm tracking-wider">
                RW
              </div>
              <span className="font-['Oswald'] text-2xl font-bold tracking-[0.2em] uppercase text-[#EDE7DC]">
                {PERSONAL_INFO.brandName}
              </span>
            </div>
            
            <p className="text-sm font-light text-[#D9D2C5] italic">
              "{PERSONAL_INFO.tagline}"
            </p>
            
            <p className="text-xs text-[#A89F91] max-w-sm leading-relaxed">
              Crafting modern, high-performance, conversion-engineered websites for businesses, shops, and individuals throughout Rajasthan and beyond.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#EDE7DC]">
              <MapPin className="w-3.5 h-3.5 text-[#e62338]" />
              <span>Rajasthan, India</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#e62338] uppercase">
              QUICK NAVIGATION
            </div>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs font-mono tracking-wider uppercase text-[#D9D2C5] hover:text-[#e62338] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#9b1424] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#e62338] uppercase">
              DIRECT INQUIRIES
            </div>
            
            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-2.5 text-[#EDE7DC] hover:text-white group"
              >
                <Phone className="w-4 h-4 text-[#e62338]" />
                <span className="font-mono">{PERSONAL_INFO.displayPhone}</span>
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#EDE7DC] hover:text-white group"
              >
                <MessageSquare className="w-4 h-4 text-[#22c55e]" />
                <span>WhatsApp: {PERSONAL_INFO.displayPhone}</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2.5 text-[#EDE7DC] hover:text-white group"
              >
                <Mail className="w-4 h-4 text-[#9b1424]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-mono uppercase tracking-wider text-[#EDE7DC] transition-all cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#e62338]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Tier / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A89F91]">
          <div>
            © 2026 Rathore Webworks. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Crafted by {PERSONAL_INFO.name}</span>
            <span className="text-white/20">•</span>
            <span>Web Designer & Web Developer</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
