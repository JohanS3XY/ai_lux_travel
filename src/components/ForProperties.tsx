import { Building2, Globe, Award } from 'lucide-react';

export default function ForProperties() {
  return (
    <section id="for-properties" className="py-24 px-6 lg:px-8 bg-luxury-dark">
      <div className="max-w-4xl mx-auto">
        <div className="bg-luxury-charcoal/60 backdrop-blur-xl border border-champagne-900/30 rounded-lg p-12 text-center">
          <div className="flex justify-center gap-8 mb-8">
            <div className="w-12 h-12 rounded-full bg-champagne-900/30 border border-champagne-700/40 flex items-center justify-center">
              <Building2 size={24} className="text-champagne-400" />
            </div>
            <div className="w-12 h-12 rounded-full bg-champagne-900/30 border border-champagne-700/40 flex items-center justify-center">
              <Globe size={24} className="text-champagne-400" />
            </div>
            <div className="w-12 h-12 rounded-full bg-champagne-900/30 border border-champagne-700/40 flex items-center justify-center">
              <Award size={24} className="text-champagne-400" />
            </div>
          </div>

          <h2 className="text-champagne-100 font-serif text-3xl lg:text-4xl mb-4">
            For world-class hotels & retreats
          </h2>
          <p className="text-champagne-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto font-serif">
            We partner with a curated network of approximately 500 exceptional properties worldwide.
            Each selected for unparalleled service, unique character, and ability to create transformative guest experiences.
          </p>

          <button className="bg-luxury-slate border-2 border-champagne-700/50 text-champagne-200 px-8 py-3 rounded-sm tracking-wide font-serif hover:bg-champagne-900/20 hover:border-champagne-600 transition-all duration-300">
            Apply to join our collection
          </button>
        </div>
      </div>
    </section>
  );
}
