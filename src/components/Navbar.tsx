import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Process', href: '#process' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(1, Math.max(0, window.scrollY / totalScroll)));
      }

      // Active link detection
      const sections = ['home', 'about', 'services', 'projects', 'process', 'why-us', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#070709]/92 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-black/80'
          : 'bg-[#070709]/60 backdrop-blur-sm border-b border-white/[0.04]'
      }`}
    >
      {/* Dynamic Scroll Progress Bar */}
      <div className="w-full h-[2px] bg-white/[0.04] overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#6b0d19] via-[#e62338] to-[#9b1424] origin-left"
          style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: 'left' }}
          transition={{ ease: 'easeOut', duration: 0.1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
          >
            <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#851424] to-[#3a080d] border border-[#a8192a]/50 flex items-center justify-center text-white font-bold text-xs tracking-wider shadow-lg shadow-[#851424]/20 group-hover:border-[#e62338]/80 transition-colors">
              RW
            </div>
            <div className="flex flex-col">
              <span className="font-['Oswald'] text-lg font-semibold tracking-[0.22em] text-[#EDE7DC] group-hover:text-white transition-colors">
                RATHORE <span className="text-[#a8192a]">WEBWORKS</span>
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#A89F91] uppercase -mt-1 font-light">
                Rajasthan • India
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3.5 py-1.5 text-[12px] tracking-[0.16em] uppercase transition-all duration-200 rounded-sm relative ${
                    isActive
                      ? 'text-[#EDE7DC] font-semibold'
                      : 'text-[#A89F91] hover:text-[#EDE7DC] hover:bg-white/[0.03]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#9b1424] rounded-full shadow-[0_0_8px_#e62338]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.a
              href={`tel:${PERSONAL_INFO.phone}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-3 py-1.5 text-[12px] tracking-wider text-[#D9D2C5] hover:text-white border border-white/[0.08] hover:border-[#9b1424]/60 rounded-sm bg-white/[0.02] hover:bg-[#851424]/10 transition-all duration-300"
              title="Direct Call"
            >
              <Phone className="w-3.5 h-3.5 text-[#e62338]" />
              <span className="font-medium">{PERSONAL_INFO.displayPhone}</span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="relative group overflow-hidden px-4 py-1.5 text-[12px] tracking-[0.18em] uppercase font-semibold text-white bg-gradient-to-r from-[#7a0f1d] via-[#941324] to-[#630b17] border border-[#b3192c]/50 rounded-sm shadow-md shadow-[#941324]/30 hover:shadow-lg hover:shadow-[#941324]/50 hover:border-[#d91c33] transition-all duration-300 flex items-center gap-1.5"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-2 text-[#EDE7DC] bg-white/[0.04] border border-white/[0.08] rounded-sm hover:border-[#9b1424]"
              aria-label="Call directly"
            >
              <Phone className="w-4 h-4 text-[#e62338]" />
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#EDE7DC] hover:text-white bg-white/[0.03] border border-white/[0.08] rounded-sm focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5 text-[#e62338]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#060608]/98 backdrop-blur-2xl border-b border-white/[0.1] px-6 py-6 shadow-2xl"
          >
            <div className="space-y-2">
              <div className="text-[10px] tracking-[0.28em] text-[#A89F91] uppercase pb-2 border-b border-white/[0.06]">
                Navigation
              </div>
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="block text-lg font-['Oswald'] tracking-[0.15em] text-[#EDE7DC] hover:text-[#e62338] hover:translate-x-2 transition-all py-1.5"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="pt-5 mt-4 border-t border-white/[0.08] space-y-2.5">
              <div className="text-[10px] tracking-[0.25em] text-[#A89F91] uppercase">
                Direct Contact
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm tracking-wider text-white border border-white/[0.12] rounded-sm bg-white/[0.03]"
              >
                <Phone className="w-4 h-4 text-[#e62338]" />
                <span>Call: {PERSONAL_INFO.displayPhone}</span>
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm tracking-wider text-white bg-gradient-to-r from-[#7a0f1d] to-[#9b1424] border border-[#b3192c]/60 rounded-sm font-semibold shadow-lg shadow-[#851424]/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
