import { Video, Phone, CheckCircle2 } from 'lucide-react';

export default function ConciergePanel() {
  return (
    <div className="concierge-panel lg:sticky lg:top-24 h-fit">
      <div className="bg-luxury-charcoal/60 backdrop-blur-xl border border-champagne-900/30 rounded-lg p-8 shadow-2xl">
        <div className="mb-6">
          <h2 className="text-champagne-100 font-serif text-3xl mb-2">Your private luxury concierge</h2>
          <p className="text-champagne-400 text-sm font-serif">
            In this space, you'll connect live with your dedicated travel advisor via secure video
          </p>
        </div>

        <div className="video-container rounded-lg overflow-hidden mb-6 border border-champagne-800/40">
          <iframe
            src="https://bey.chat/72838f7b-bdc3-41ac-a065-0bd82ffab340"
            width="100%"
            height="600px"
            frameBorder="0"
            allowFullScreen
            allow="camera; microphone; fullscreen"
            style={{ border: 'none', maxWidth: '100%' }}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <button
            disabled
            className="flex-1 bg-champagne-500/20 border border-champagne-500/30 text-champagne-400 px-6 py-3 rounded-sm font-serif text-sm tracking-wide cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Video size={18} />
            Join video call
          </button>
          <button
            disabled
            className="flex-1 bg-luxury-slate/50 border border-champagne-800/30 text-champagne-500 px-6 py-3 rounded-sm font-serif text-sm tracking-wide cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            Audio only
          </button>
        </div>

        <div className="space-y-3 mb-8 pb-8 border-b border-champagne-900/30">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="text-champagne-500 mt-0.5 flex-shrink-0" size={18} />
            <p className="text-champagne-300 text-sm font-serif">We craft trips from $40k to $250k+</p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="text-champagne-500 mt-0.5 flex-shrink-0" size={18} />
            <p className="text-champagne-300 text-sm font-serif">Designed in one private 45-min session</p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="text-champagne-500 mt-0.5 flex-shrink-0" size={18} />
            <p className="text-champagne-300 text-sm font-serif">Curated by expert human advisors</p>
          </div>
        </div>

        <div className="client-profile-card bg-luxury-slate/30 border border-champagne-900/20 rounded-lg p-6">
          <h3 className="text-champagne-200 font-serif text-lg mb-4">Client profile</h3>
          <div className="space-y-3">
            <div>
              <p className="text-champagne-500 text-xs uppercase tracking-wider mb-1 font-serif">Name</p>
              <p className="text-champagne-200 text-sm font-serif">Alexandra Thornton</p>
            </div>
            <div>
              <p className="text-champagne-500 text-xs uppercase tracking-wider mb-1 font-serif">Budget range</p>
              <p className="text-champagne-200 text-sm font-serif">$60,000 – $85,000</p>
            </div>
            <div>
              <p className="text-champagne-500 text-xs uppercase tracking-wider mb-1 font-serif">Travel style</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-champagne-900/30 text-champagne-300 px-3 py-1 rounded-full text-xs font-serif">Wellness</span>
                <span className="bg-champagne-900/30 text-champagne-300 px-3 py-1 rounded-full text-xs font-serif">Adventure</span>
                <span className="bg-champagne-900/30 text-champagne-300 px-3 py-1 rounded-full text-xs font-serif">Romantic escape</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
