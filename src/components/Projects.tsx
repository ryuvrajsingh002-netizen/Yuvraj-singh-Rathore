import { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { ExternalLink, CheckCircle, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types';

export default function Projects() {
  const [activePreviewProject, setActivePreviewProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 relative subtle-grid">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-[#851424]/15 blur-[150px] -z-10" />

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
              <span>VERIFIED REAL-WORLD WORK</span>
            </div>
            <h2 className="font-['Oswald'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[0.05em] uppercase text-[#EDE7DC]">
              FEATURED WORK
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#A89F91] max-w-md font-light italic">
            "Some of the websites I have designed and developed."
          </p>
        </motion.div>

        {/* Projects Grid: 2x2 High-Impact Editorial Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {FEATURED_PROJECTS.map((project, idx) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="luxury-card rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#9b1424]/70 transition-colors group flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_50px_-10px_rgba(133,20,36,0.25)]"
              >
                {/* Project Image Preview Container with Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0e] border-b border-white/[0.07]">
                  <img
                    src={project.image}
                    alt={`${project.title} - Live Website Preview by Rathore Webworks`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-black/20 pointer-events-none" />

                  {/* Top Overlay Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded bg-[#09090c]/85 backdrop-blur-md border border-white/[0.12] text-[10px] font-mono tracking-widest text-[#EDE7DC] uppercase">
                      LIVE DEPLOYMENT
                    </span>
                    <span className="font-['Oswald'] text-sm tracking-widest font-bold text-[#EDE7DC]/70 group-hover:text-[#e62338] transition-colors bg-black/60 px-2.5 py-0.5 rounded border border-white/[0.06]">
                      {project.number}
                    </span>
                  </div>

                  {/* Quick Action Preview Floating Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setActivePreviewProject(project)}
                      className="px-3 py-1.5 bg-[#121218]/90 hover:bg-[#851424] text-white text-xs tracking-wider rounded-sm border border-white/[0.15] flex items-center gap-1.5 transition-colors cursor-pointer shadow-lg"
                      title="Quick Preview Details"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Category & Number */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-semibold tracking-[0.25em] text-[#e62338] uppercase">
                        {project.category}
                      </span>
                      <span className="font-['Oswald'] text-lg font-bold text-[#A89F91]/50 group-hover:text-[#9b1424] transition-colors">
                        PROJECT {project.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-['Oswald'] text-2xl sm:text-3xl font-bold tracking-[0.08em] uppercase text-[#EDE7DC] group-hover:text-white transition-colors mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#D9D2C5]/85 font-light leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 mb-6">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2 text-xs text-[#A89F91]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#9b1424] shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Badges (Section 8 Requirement) */}
                    <div className="pt-4 border-t border-white/[0.06]">
                      <div className="text-[10px] tracking-[0.2em] uppercase text-[#A89F91] mb-2.5">
                        Technologies & Integrations:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.08] text-[#D9D2C5] font-mono tracking-tight"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Button: VIEW LIVE WEBSITE */}
                  <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2.5 px-6 py-3 text-xs tracking-[0.2em] font-bold uppercase text-white bg-gradient-to-r from-[#7a0f1d] to-[#9b1424] hover:from-[#941324] hover:to-[#b3192c] border border-[#b3192c]/70 rounded-sm shadow-md shadow-[#851424]/30 hover:shadow-lg hover:shadow-[#9b1424]/50 transition-all duration-300"
                    >
                      <span>VIEW LIVE WEBSITE</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </motion.a>

                    <span className="text-[11px] text-[#A89F91] font-mono hidden sm:inline">
                      ryuvrajsingh002.github.io
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Quick Details Modal with AnimatePresence */}
      <AnimatePresence>
        {activePreviewProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setActivePreviewProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0e0e13] border border-white/[0.12] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setActivePreviewProject(null)}
                className="absolute top-6 right-6 text-[#A89F91] hover:text-white p-2 rounded-full bg-white/[0.05] border border-white/[0.1]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#e62338] uppercase">
                  {activePreviewProject.category}
                </span>
                <h3 className="font-['Oswald'] text-3xl font-bold uppercase text-[#EDE7DC]">
                  {activePreviewProject.title}
                </h3>
                <div className="rounded-xl overflow-hidden border border-white/[0.1]">
                  <img
                    src={activePreviewProject.image}
                    alt={activePreviewProject.title}
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-sm text-[#D9D2C5] font-light leading-relaxed">
                  {activePreviewProject.description}
                </p>
                
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={activePreviewProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs tracking-widest font-bold uppercase text-white bg-[#851424] hover:bg-[#a8192a] rounded transition-colors"
                  >
                    <span>Open Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                  <button
                    onClick={() => setActivePreviewProject(null)}
                    className="text-xs tracking-wider uppercase text-[#A89F91] hover:text-white underline cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
