import { MessageSquareQuote, Star, Clock } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden subtle-grid border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] uppercase text-[#9b1424]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e62338]"></span>
              <span>CLIENT REPUTATION</span>
            </div>
            <h2 className="font-['Oswald'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[0.05em] uppercase text-[#EDE7DC]">
              WHAT PEOPLE SAY
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#A89F91] max-w-md font-light italic">
            "Authentic reviews and testimonials from our business clients."
          </p>
        </div>

        {/* Visually Ready Testimonial Display Area */}
        <div className="max-w-3xl mx-auto">
          <div className="luxury-card p-10 sm:p-14 rounded-2xl relative text-center border border-dashed border-[#9b1424]/40 bg-[#0d0d12]/90 backdrop-blur-md">
            
            {/* Top Quote Icon */}
            <div className="w-14 h-14 mx-auto rounded-full bg-[#851424]/10 border border-[#9b1424]/40 flex items-center justify-center text-[#e62338] mb-6">
              <MessageSquareQuote className="w-6 h-6" />
            </div>

            {/* Strict Honest Content */}
            <div className="space-y-4">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#A89F91] uppercase flex items-center justify-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#9b1424]" />
                <span>ACTIVE CLIENT REVIEWS IN TRANSIT</span>
              </span>

              <h3 className="font-['Oswald'] text-2xl sm:text-3xl font-bold tracking-wider text-[#EDE7DC] uppercase">
                "Client testimonials will be added here."
              </h3>

              <p className="text-sm text-[#A89F91] font-light max-w-xl mx-auto leading-relaxed">
                We believe in genuine, verified client feedback. As recent website deployments for car rentals, medical stores, and local businesses accumulate live operational results, their verified words will be displayed here.
              </p>
            </div>

            {/* Future Testimonial Format Indicator */}
            <div className="mt-8 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#A89F91]">
              <div className="flex items-center gap-1 text-[#e62338]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#e62338]" />
                ))}
              </div>
              <span className="hidden sm:inline">•</span>
              <span>Are you a current client? Share your experience with Rathore Webworks directly.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
