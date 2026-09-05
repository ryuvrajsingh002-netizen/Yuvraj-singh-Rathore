import { PERSONAL_INFO, ABOUT_SKILLS } from '../data/portfolioData';
import { CheckCircle2, Award, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import yuvrajPhoto from '../assets/images/yuvraj_youthful_photo_1788547950287.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#07070a] border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 right-0 w-[450px] h-[450px] rounded-full bg-[#851424]/10 blur-[130px] -z-10" />

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
              <span>BIOGRAPHY & BACKGROUND</span>
            </div>
            <h2 className="font-['Oswald'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[0.05em] uppercase text-[#EDE7DC]">
              ABOUT ME
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#A89F91] uppercase tracking-widest mt-4 md:mt-0">
            <MapPin className="w-3.5 h-3.5 text-[#e62338]" />
            <span>Rajasthan, India</span>
          </div>
        </motion.div>

        {/* Main Grid: Portrait Visual + Bio & Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar / Portrait Visual Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-xs sm:max-w-[340px]">
              {/* Burgundy Glow Ring behind avatar */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#6b0d19] to-transparent opacity-40 blur-2xl -z-10"></div>
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0c0c11] shadow-2xl group">
                <img
                  src={yuvrajPhoto}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/yuvraj_photo.jpg';
                  }}
                  alt="Yuvraj Singh Rathore - Web Designer & Web Developer"
                  className="w-full aspect-[4/5] object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Editorial Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent pointer-events-none" />

                {/* Bottom Card Inside Image */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#09090d]/85 backdrop-blur-md border border-white/[0.1]">
                  <div className="text-[10px] tracking-[0.25em] text-[#A89F91] uppercase mb-1">
                    FOUNDER & LEAD DEVELOPER
                  </div>
                  <div className="font-['Oswald'] text-lg font-bold text-[#EDE7DC] uppercase">
                    {PERSONAL_INFO.name}
                  </div>
                  <div className="text-xs text-[#e62338] font-medium tracking-wider">
                    {PERSONAL_INFO.brandName}
                  </div>
                </div>
              </div>

              {/* Decorative side accent badge */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-3 -right-3 hidden sm:flex items-center gap-2 p-2.5 rounded-lg bg-[#14141a] border border-white/[0.1] shadow-2xl"
              >
                <Award className="w-4 h-4 text-[#e62338]" />
                <div className="text-[10px] font-medium text-[#EDE7DC]">
                  Precision Execution
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio & Competencies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#e62338] uppercase">
                PROFESSIONAL STATEMENT
              </span>
              <h3 className="font-['Oswald'] text-3xl sm:text-4xl font-bold uppercase text-[#EDE7DC] tracking-wide">
                {PERSONAL_INFO.name}
              </h3>
              <div className="text-sm tracking-[0.2em] font-medium text-[#D9D2C5] uppercase">
                {PERSONAL_INFO.profession}
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#D9D2C5] font-light leading-relaxed border-l-2 border-[#9b1424] pl-5 italic">
              "I create modern websites for businesses, brands and individuals. My focus is on clean design, responsive layouts, practical functionality and professional user experience."
            </p>

            <p className="text-sm text-[#A89F91] font-light leading-relaxed">
              Based in Rajasthan, I work closely with local enterprises and brands to build fast, responsive digital representations of their operations. Whether it's a car rental service in Degana, a local medical store needing digital prescription flows, or agriculture and retail websites, I build customized interfaces optimized for real conversions via phone and WhatsApp.
            </p>

            {/* Core Capability Checkpoints */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#EDE7DC]">
                Core Competencies & Standards:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ABOUT_SKILLS.map((point, idx) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.07 }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="flex items-center gap-2.5 p-2.5 rounded-sm bg-white/[0.02] border border-white/[0.06] hover:border-[#9b1424]/50 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#e62338] shrink-0" />
                    <span className="text-xs font-medium text-[#EDE7DC]">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="px-6 py-3 text-xs tracking-[0.2em] uppercase font-bold text-white bg-[#851424] hover:bg-[#a8192a] rounded-sm transition-colors shadow-lg shadow-[#851424]/20 flex items-center gap-2"
              >
                <span>Hire Rathore Webworks</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${PERSONAL_INFO.phone}`}
                className="px-6 py-3 text-xs tracking-[0.2em] uppercase font-medium text-[#EDE7DC] border border-white/[0.12] hover:border-[#9b1424] rounded-sm transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#e62338]" />
                <span>{PERSONAL_INFO.displayPhone}</span>
              </motion.a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
