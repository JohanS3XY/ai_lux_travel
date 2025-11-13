import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-luxury-dark/95 backdrop-blur-md border-b border-champagne-900/20">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-champagne-400 to-luxury-gold rounded-sm flex items-center justify-center">
              <span className="text-luxury-dark font-serif font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="text-champagne-200 font-serif text-xl tracking-wider">AURUM VOYAGES</h1>
              <p className="text-champagne-600 text-xs tracking-wide font-serif">Human + AI Luxury Travel Studio</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#how-it-works" className="text-champagne-300 hover:text-champagne-100 transition-colors text-sm tracking-wide font-serif">
              How it works
            </a>
            <a href="#for-clients" className="text-champagne-300 hover:text-champagne-100 transition-colors text-sm tracking-wide font-serif">
              For clients
            </a>
            <a href="#for-properties" className="text-champagne-300 hover:text-champagne-100 transition-colors text-sm tracking-wide font-serif">
              For properties
            </a>
            <a href="#contact" className="text-champagne-300 hover:text-champagne-100 transition-colors text-sm tracking-wide font-serif">
              Contact
            </a>
            <button className="bg-gradient-to-r from-champagne-500 to-luxury-gold text-luxury-dark px-6 py-2.5 rounded-sm text-sm tracking-wide font-serif hover:shadow-lg hover:shadow-champagne-500/20 transition-all duration-300">
              Book a luxury planning session
            </button>
          </div>

          <button
            className="lg:hidden text-champagne-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 border-t border-champagne-900/20">
            <a href="#how-it-works" className="block text-champagne-300 hover:text-champagne-100 transition-colors text-sm font-serif">
              How it works
            </a>
            <a href="#for-clients" className="block text-champagne-300 hover:text-champagne-100 transition-colors text-sm font-serif">
              For clients
            </a>
            <a href="#for-properties" className="block text-champagne-300 hover:text-champagne-100 transition-colors text-sm font-serif">
              For properties
            </a>
            <a href="#contact" className="block text-champagne-300 hover:text-champagne-100 transition-colors text-sm font-serif">
              Contact
            </a>
            <button className="w-full bg-gradient-to-r from-champagne-500 to-luxury-gold text-luxury-dark px-6 py-2.5 rounded-sm text-sm font-serif">
              Book a luxury planning session
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
