import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Phone, MessageSquare, MapPin, Mail, Send, CheckCircle2, Github, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

const PROJECT_TYPES = [
  'Website Design',
  'Website Development',
  'Business Website',
  'UI/UX Design',
  'Website Redesign',
  'E-commerce Website',
  'Other Inquiry'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    projectType: 'Business Website',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Generate WhatsApp text
  const generateWhatsAppMessage = () => {
    const text = `Hello Yuvraj, I would like to enquire about a website project with Rathore Webworks.%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name || 'Not provided')}%0A` +
      `*Phone/Mobile:* ${encodeURIComponent(formData.mobile || 'Not provided')}%0A` +
      `*Email:* ${encodeURIComponent(formData.email || 'Not provided')}%0A` +
      `*Project Type:* ${encodeURIComponent(formData.projectType)}%0A` +
      `*Requirements/Message:* ${encodeURIComponent(formData.message || 'I would like to discuss website design and development.')}`;
    return `https://wa.me/916377573321?text=${text}`;
  };

  // Generate Mailto URL
  const generateMailto = () => {
    const subject = encodeURIComponent(`Project Enquiry: ${formData.projectType} - ${formData.name || 'Client'}`);
    const body = encodeURIComponent(
      `Hello Yuvraj,\n\n` +
      `I am reaching out regarding a project with Rathore Webworks:\n\n` +
      `Name: ${formData.name}\n` +
      `Mobile: ${formData.mobile}\n` +
      `Email: ${formData.email}\n` +
      `Project Type: ${formData.projectType}\n\n` +
      `Project Details:\n${formData.message}\n`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name && !formData.mobile) {
      alert('Please enter at least your name or mobile number.');
      return;
    }
    const url = generateWhatsAppMessage();
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const handleEmailSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name && !formData.email) {
      alert('Please enter at least your name and email address.');
      return;
    }
    const url = generateMailto();
    window.location.href = url;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative subtle-grid border-t border-white/[0.08] overflow-hidden">
      {/* Background radial accent */}
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#851424]/10 blur-[150px] -z-10" />

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
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="font-['Oswald'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[0.05em] uppercase text-[#EDE7DC]">
              CONTACT RATHORE WEBWORKS
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#A89F91] max-w-md font-light italic">
            "Direct dialogue with the developer. Responsive turnaround guaranteed."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Coordinates & Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-[0.25em] text-[#e62338] uppercase">
                COMMUNICATION CHANNELS
              </span>
              <h3 className="font-['Oswald'] text-3xl font-bold text-[#EDE7DC] uppercase tracking-wide">
                LET'S TALK ABOUT YOUR PROJECT
              </h3>
              <p className="text-sm text-[#A89F91] font-light leading-relaxed">
                Whether you need a new responsive website for a local shop, a landing page, an e-commerce catalog, or a complete website redesign, reach out anytime.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Phone */}
              <motion.a
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0e0e13] border border-white/[0.07] hover:border-[#9b1424] transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#851424]/15 border border-[#9b1424]/40 flex items-center justify-center text-[#e62338] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#A89F91]">Direct Phone Call</div>
                  <div className="font-['Oswald'] text-lg font-bold text-[#EDE7DC] tracking-wider group-hover:text-white">
                    {PERSONAL_INFO.displayPhone}
                  </div>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0e0e13] border border-white/[0.07] hover:border-[#22c55e]/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#22c55e]/15 border border-[#22c55e]/40 flex items-center justify-center text-[#22c55e] group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#A89F91]">WhatsApp Instant Message</div>
                  <div className="font-['Oswald'] text-lg font-bold text-[#EDE7DC] tracking-wider group-hover:text-white">
                    {PERSONAL_INFO.displayPhone}
                  </div>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0e0e13] border border-white/[0.07] hover:border-[#9b1424] transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#EDE7DC] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#A89F91]">Email Address</div>
                  <div className="font-mono text-xs sm:text-sm text-[#EDE7DC] tracking-wide group-hover:text-white">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </motion.a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0e0e13] border border-white/[0.07]">
                <div className="w-12 h-12 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#e62338]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#A89F91]">Base Location</div>
                  <div className="font-['Oswald'] text-lg font-bold text-[#EDE7DC] tracking-wider">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Services List Tag Box */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="text-[10px] font-mono tracking-widest uppercase text-[#A89F91]">
                OFFICIAL SERVICES OFFERED
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Website Design', 'Website Development', 'UI/UX', 'Business Websites', 'Local Business Solutions'].map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[#EDE7DC]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Social / Professional Links (Section 15) */}
            <div className="space-y-3 pt-2">
              <div className="text-[10px] font-mono tracking-[0.25em] text-[#A89F91] uppercase">
                SOCIAL & PROFESSIONAL PROFILES
              </div>
              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#0e0e13] border border-white/[0.08] hover:border-white text-xs font-mono text-[#EDE7DC] transition-colors"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#0e0e13] border border-white/[0.08] hover:border-[#0a66c2] text-xs font-mono text-[#EDE7DC] transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                  <span>LinkedIn</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#0e0e13] border border-white/[0.08] hover:border-[#e1306c] text-xs font-mono text-[#EDE7DC] transition-colors"
                  title="Instagram Profile"
                >
                  <Instagram className="w-4 h-4 text-[#e1306c]" />
                  <span>Instagram</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="luxury-card p-8 sm:p-10 rounded-2xl border border-white/[0.1] relative shadow-2xl">
              <div className="mb-6 space-y-1">
                <h4 className="font-['Oswald'] text-2xl font-bold uppercase tracking-wider text-[#EDE7DC]">
                  PROJECT ENQUIRY FORM
                </h4>
                <p className="text-xs text-[#A89F91] font-light">
                  Submit your details below. You can send your enquiry instantly via WhatsApp or direct Email.
                </p>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg bg-[#22c55e]/15 border border-[#22c55e]/40 text-[#EDE7DC] text-xs flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0" />
                  <span>Your enquiry message was prepared and launched! You can also review or re-send below.</span>
                </motion.div>
              )}

              <form className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="form-name" className="block text-xs font-mono uppercase tracking-wider text-[#A89F91] mb-1.5">
                    Your Name / Business Name *
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-4 py-3 bg-[#0a0a0e] border border-white/[0.1] rounded-sm text-sm text-[#EDE7DC] placeholder-[#A89F91]/40 focus:outline-none focus:border-[#9b1424] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Mobile Number */}
                  <div>
                    <label htmlFor="form-mobile" className="block text-xs font-mono uppercase tracking-wider text-[#A89F91] mb-1.5">
                      Mobile Number / WhatsApp *
                    </label>
                    <input
                      id="form-mobile"
                      type="tel"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-[#0a0a0e] border border-white/[0.1] rounded-sm text-sm text-[#EDE7DC] placeholder-[#A89F91]/40 focus:outline-none focus:border-[#9b1424] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="form-email" className="block text-xs font-mono uppercase tracking-wider text-[#A89F91] mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="client@example.com"
                      className="w-full px-4 py-3 bg-[#0a0a0e] border border-white/[0.1] rounded-sm text-sm text-[#EDE7DC] placeholder-[#A89F91]/40 focus:outline-none focus:border-[#9b1424] transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="form-project-type" className="block text-xs font-mono uppercase tracking-wider text-[#A89F91] mb-1.5">
                    Project Type
                  </label>
                  <select
                    id="form-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0e] border border-white/[0.1] rounded-sm text-sm text-[#EDE7DC] focus:outline-none focus:border-[#9b1424] transition-colors"
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-[#121217] text-[#EDE7DC]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="form-message" className="block text-xs font-mono uppercase tracking-wider text-[#A89F91] mb-1.5">
                    Project Requirements / Message
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your business, desired features (e.g. WhatsApp booking, product catalog), and timeline..."
                    className="w-full px-4 py-3 bg-[#0a0a0e] border border-white/[0.1] rounded-sm text-sm text-[#EDE7DC] placeholder-[#A89F91]/40 focus:outline-none focus:border-[#9b1424] transition-colors resize-y"
                  ></textarea>
                </div>

                {/* Dual Functional Submission Controls */}
                <div className="pt-4 space-y-3">
                  <div className="text-[11px] font-mono tracking-wider text-[#A89F91] uppercase flex items-center gap-1.5">
                    <span>Select Submission Method:</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Send via WhatsApp */}
                    <motion.button
                      id="btn-submit-whatsapp"
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleWhatsAppSubmit}
                      className="w-full py-3.5 px-4 text-xs font-bold uppercase tracking-[0.18em] text-white bg-gradient-to-r from-[#15803d] to-[#16a34a] hover:from-[#16a34a] hover:to-[#22c55e] border border-[#22c55e]/50 rounded-sm flex items-center justify-center gap-2 shadow-lg shadow-[#15803d]/30 cursor-pointer transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </motion.button>

                    {/* Send via Email */}
                    <motion.button
                      id="btn-submit-email"
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleEmailSubmit}
                      className="w-full py-3.5 px-4 text-xs font-bold uppercase tracking-[0.18em] text-white bg-gradient-to-r from-[#7a0f1d] via-[#941324] to-[#630b17] hover:from-[#941324] hover:to-[#b3192c] border border-[#b3192c]/60 rounded-sm flex items-center justify-center gap-2 shadow-lg shadow-[#851424]/30 cursor-pointer transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Project Enquiry</span>
                    </motion.button>
                  </div>

                  <p className="text-[11px] text-[#A89F91] text-center font-light pt-1">
                    Direct integration • Launches instant WhatsApp chat or native email draft with your filled details.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
