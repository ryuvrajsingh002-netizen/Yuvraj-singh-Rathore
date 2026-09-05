import { ArrowDown, ArrowUpRight, Phone, Sparkles, CheckCircle2, ShieldCheck, Code, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-between pt-4 pb-12 overflow-hidden subtle-grid">
      {/* Ambient Crimson / Burgundy Spotlight in background */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[500px] sm:w-[700px] lg:w-[900px] h-[500px] sm:h-[700px] rounded-full bg-[#6a0e19]/25 blur-[120px] -z-10"
      />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-[#9b1424]/30 blur-[90px] -z-10" />

      {/* Massive Editorial Header: "PORTFOLIO" */}
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center select-none pt-2 sm:pt-4">
        <motion.h1
          initial={{ opacity: 0, y: -30, letterSpacing: '0.04em' }}
          animate={{ opacity: 0.95, y: 0, letterSpacing: '-0.01em' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Oswald'] font-bold text-[17vw] leading-[0.82] uppercase text-[#EDE7DC] drop-shadow-2xl"
        >
          PORTFOLIO
        </motion.h1>
      </div>

      {/* Main Editorial Layout Grid */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-2 sm:mt-4 md:-mt-8 lg:-mt-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* LEFT COLUMN: Editorial Tags, Quotes & Focus */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 lg:col-span-3 order-2 md:order-1 flex flex-col justify-between space-y-6 md:space-y-8"
          >
            {/* Category Stack */}
            <div className="border-l-2 border-[#9b1424] pl-4 space-y-1">
              <div className="font-['Oswald'] text-xl sm:text-2xl font-bold tracking-[0.16em] uppercase text-[#EDE7DC]">
                WEB DESIGN
              </div>
              <div className="font-['Oswald'] text-xl sm:text-2xl font-bold tracking-[0.16em] uppercase text-[#D9D2C5]">
                WEB DEVELOPMENT
              </div>
              <div className="font-['Oswald'] text-xl sm:text-2xl font-bold tracking-[0.16em] uppercase text-[#9b1424]">
                UI / UX DESIGN
              </div>
            </div>

            {/* Quote Block */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-[#101014]/70 border border-white/[0.08] p-5 rounded-sm relative backdrop-blur-md"
            >
              <span className="text-[#9b1424] font-serif text-4xl leading-none block select-none -mb-2">“</span>
              <p className="text-sm font-light text-[#D9D2C5] italic leading-relaxed">
                {PERSONAL_INFO.quote}
              </p>
              <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <span className="font-['Cinzel'] text-[11px] tracking-[0.2em] text-[#A89F91] uppercase">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[10px] text-[#9b1424] font-medium uppercase tracking-widest">
                  Rajasthan
                </span>
              </div>
            </motion.div>

            {/* Short Mission Statement */}
            <div className="space-y-2">
              <div className="text-[11px] font-semibold tracking-[0.25em] text-[#9b1424] uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>CORE DIRECTIVE</span>
              </div>
              <p className="text-sm text-[#A89F91] leading-relaxed font-light">
                Creating modern, responsive and conversion-focused websites for businesses, brands and individuals.
              </p>
            </div>

            {/* Quick trust badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] tracking-wider text-[#D9D2C5] bg-white/[0.03] border border-white/[0.06] rounded-sm">
                <CheckCircle2 className="w-3 h-3 text-[#9b1424]" /> Custom Code
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] tracking-wider text-[#D9D2C5] bg-white/[0.03] border border-white/[0.06] rounded-sm">
                <ShieldCheck className="w-3 h-3 text-[#9b1424]" /> Business Focused
              </span>
            </div>
          </motion.div>

          {/* CENTER COLUMN: Cinematic Abstract Hero Visual & Aura */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 lg:col-span-6 order-1 md:order-2 flex flex-col items-center justify-center relative"
          >
            {/* Glowing circular backdrop */}
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[480px] aspect-[4/5] flex items-center justify-center">
              
              {/* Deep burgundy circular halo ring with breathing glow */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.65, 0.85, 0.65]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-2 sm:inset-4 rounded-full bg-gradient-to-b from-[#6b0d19] via-[#3a080e] to-transparent blur-md pointer-events-none"
              />
              <div className="absolute inset-4 sm:inset-6 rounded-full border border-[#9b1424]/40 pointer-events-none"></div>

              {/* Central visual asset */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.12] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] bg-[#09090c] group"
              >
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
                  alt="Rathore Webworks Creative Visual - Cinematic Web Design and Engineering Studio"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle vignette overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060607] via-transparent to-black/30 pointer-events-none" />
                <div className="absolute inset-0 border border-white/[0.08] pointer-events-none rounded-2xl" />

                {/* Floating Glass Badges */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-lg bg-[#0c0c11]/85 backdrop-blur-md border border-white/[0.1] shadow-xl"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#e62338] animate-pulse"></div>
                    <div>
                      <div className="text-[10px] tracking-[0.2em] text-[#A89F91] uppercase">Studio Status</div>
                      <div className="text-xs font-semibold text-[#EDE7DC] tracking-wider">Live & Taking Projects</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] tracking-[0.2em] text-[#A89F91] uppercase">Location</div>
                    <div className="text-xs font-medium text-[#EDE7DC]">Rajasthan, IN</div>
                  </div>
                </motion.div>

                {/* Top Corner Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/[0.12] px-2.5 py-1 rounded text-[10px] font-mono tracking-widest text-[#EDE7DC] flex items-center gap-1.5">
                  <Code className="w-3 h-3 text-[#e62338]" />
                  <span>UI/UX & DEV</span>
                </div>
              </motion.div>

              {/* Decorative Circular Badge Stamp with continuous rotation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="hidden lg:flex absolute -right-6 top-10 w-24 h-24 rounded-full border border-dashed border-[#9b1424]/60 bg-[#0c0c10]/90 backdrop-blur-sm items-center justify-center p-2 text-center text-[8px] font-mono tracking-widest text-[#EDE7DC] uppercase shadow-lg pointer-events-none"
              >
                <div className="flex flex-col items-center justify-center">
                  <Compass className="w-4 h-4 text-[#e62338] mb-1" />
                  <span>CREATIVE</span>
                  <span className="text-[#e62338] font-bold">DIGITAL</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Brand Identity, Narrative & Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 lg:col-span-3 order-3 flex flex-col justify-between space-y-6 md:space-y-8"
          >
            {/* Title & Brand */}
            <div className="space-y-2">
              <div className="text-[11px] font-bold tracking-[0.3em] text-[#9b1424] uppercase">
                PERSONAL BRAND
              </div>
              <h2 className="font-['Oswald'] text-3xl sm:text-4xl font-bold tracking-[0.08em] text-[#EDE7DC] uppercase leading-tight">
                {PERSONAL_INFO.name}
              </h2>
              <div className="text-xs font-medium tracking-[0.25em] text-[#D9D2C5] uppercase">
                {PERSONAL_INFO.brandName}
              </div>
              <div className="inline-block px-2.5 py-0.5 text-[10px] tracking-[0.2em] font-semibold text-[#e62338] bg-[#9b1424]/15 border border-[#9b1424]/40 rounded-sm uppercase mt-1">
                {PERSONAL_INFO.profession}
              </div>
            </div>

            {/* Introduction Narrative */}
            <p className="text-sm text-[#D9D2C5]/90 leading-relaxed font-light">
              "{PERSONAL_INFO.shortBio}"
            </p>

            {/* CTA Buttons with Micro-interactions */}
            <div className="space-y-2.5 pt-2">
              <motion.button
                id="hero-cta-work"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('projects')}
                className="w-full group px-5 py-3 text-xs sm:text-[13px] tracking-[0.22em] uppercase font-semibold text-white bg-gradient-to-r from-[#7a0f1d] via-[#941324] to-[#630b17] border border-[#b3192c]/70 rounded-sm shadow-xl shadow-[#851424]/30 hover:shadow-2xl hover:shadow-[#941324]/60 hover:border-[#e62338] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </motion.button>

              <motion.button
                id="hero-cta-contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
                className="w-full group px-5 py-3 text-xs sm:text-[13px] tracking-[0.22em] uppercase font-semibold text-[#EDE7DC] bg-[#121216] hover:bg-white/[0.06] border border-white/[0.12] hover:border-[#9b1424] rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>LET'S WORK TOGETHER</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>

              <motion.a
                id="hero-cta-call"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${PERSONAL_INFO.phone}`}
                className="w-full px-5 py-2.5 text-xs sm:text-[12px] tracking-[0.2em] uppercase font-medium text-[#D9D2C5] hover:text-white border border-dashed border-white/[0.15] hover:border-[#e62338] rounded-sm flex items-center justify-center gap-2 transition-colors bg-white/[0.01]"
              >
                <Phone className="w-3.5 h-3.5 text-[#e62338]" />
                <span>CALL NOW: {PERSONAL_INFO.displayPhone}</span>
              </motion.a>
            </div>

            {/* Quick Stats Grid under right hero */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/[0.08]">
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-white/[0.02] border border-white/[0.06] p-2.5 rounded-sm"
              >
                <div className="font-['Oswald'] text-2xl font-bold text-[#EDE7DC] tracking-tight">04+</div>
                <div className="text-[9px] tracking-wider text-[#A89F91] uppercase">Projects Built</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-white/[0.02] border border-white/[0.06] p-2.5 rounded-sm"
              >
                <div className="font-['Oswald'] text-2xl font-bold text-[#EDE7DC] tracking-tight">100%</div>
                <div className="text-[9px] tracking-wider text-[#A89F91] uppercase">Responsive</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-10 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#A89F91] tracking-[0.25em] uppercase"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#9b1424] animate-pulse"></span>
          <span>CURATED EDITORIAL DESIGN</span>
        </div>
        <button 
          onClick={() => scrollToSection('services')}
          className="flex items-center gap-2 hover:text-[#EDE7DC] transition-colors cursor-pointer group"
        >
          <span>EXPLORE SERVICES</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#e62338] group-hover:translate-y-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
}
