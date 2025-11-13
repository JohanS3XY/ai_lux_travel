export default function Footer() {
  return (
    <footer className="bg-luxury-dark border-t border-champagne-900/20 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-champagne-400 to-luxury-gold rounded-sm flex items-center justify-center">
                <span className="text-luxury-dark font-serif font-bold text-lg">A</span>
              </div>
              <h3 className="text-champagne-200 font-serif text-xl tracking-wider">AURUM VOYAGES</h3>
            </div>
            <p className="text-champagne-500 text-sm leading-relaxed font-serif">
              We design high-touch, high-ticket travel experiences for discerning clients worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-champagne-200 mb-4 uppercase tracking-wider text-sm font-serif">Quick links</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-champagne-400 hover:text-champagne-200 text-sm transition-colors font-serif">How it works</a></li>
              <li><a href="#for-clients" className="text-champagne-400 hover:text-champagne-200 text-sm transition-colors font-serif">For clients</a></li>
              <li><a href="#for-properties" className="text-champagne-400 hover:text-champagne-200 text-sm transition-colors font-serif">For properties</a></li>
              <li><a href="#contact" className="text-champagne-400 hover:text-champagne-200 text-sm transition-colors font-serif">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-champagne-200 mb-4 uppercase tracking-wider text-sm font-serif">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#privacy" className="text-champagne-400 hover:text-champagne-200 text-sm transition-colors font-serif">Privacy policy</a></li>
              <li><a href="#terms" className="text-champagne-400 hover:text-champagne-200 text-sm transition-colors font-serif">Terms of service</a></li>
              <li><a href="#cookies" className="text-champagne-400 hover:text-champagne-200 text-sm transition-colors font-serif">Cookie policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-champagne-900/20">
          <p className="text-champagne-600 text-sm text-center font-serif">
            © 2025 Aurum Voyages. All rights reserved. Crafting extraordinary journeys since 2025.
          </p>
        </div>
      </div>
    </footer>
  );
}
