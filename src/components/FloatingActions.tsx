import { Phone, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function FloatingActions() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Floating Button */}
      <a
        id="floating-whatsapp"
        href={PERSONAL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#16a34a] hover:bg-[#22c55e] text-white flex items-center justify-center shadow-2xl shadow-green-900/50 hover:scale-110 transition-all duration-300 border border-white/20 group"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>

      {/* Direct Call Button */}
      <a
        id="floating-call"
        href={`tel:${PERSONAL_INFO.phone}`}
        className="w-12 h-12 rounded-full bg-[#851424] hover:bg-[#a8192a] text-white flex items-center justify-center shadow-2xl shadow-red-950/60 hover:scale-110 transition-all duration-300 border border-[#e62338]/40 group"
        title="Call Directly"
        aria-label="Call Directly"
      >
        <Phone className="w-5 h-5" />
        <span className="sr-only">Call Directly</span>
      </a>
    </aside>
  );
}
