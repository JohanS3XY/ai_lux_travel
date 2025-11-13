import { Video, Palette, FileText, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Video,
    title: 'Private call',
    description: 'You meet your concierge via secure video. Share your dreams, preferences, and travel aspirations in complete confidence.'
  },
  {
    icon: Palette,
    title: 'Live design',
    description: 'We co-create your dream journey in real time. Watch as we curate properties, experiences, and moments tailored to you.'
  },
  {
    icon: FileText,
    title: 'Refinement',
    description: 'You receive a tailored proposal and we fine-tune every detail until perfection. Your feedback shapes the final experience.'
  },
  {
    icon: CheckCircle,
    title: 'Execution',
    description: 'Our team and partners handle all logistics. From booking to on-ground support, every element is seamlessly orchestrated.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 lg:px-8 bg-luxury-charcoal/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-champagne-100 font-serif text-4xl lg:text-5xl mb-4">How it works</h2>
          <p className="text-champagne-400 text-lg max-w-2xl mx-auto font-serif">
            A seamless journey from first conversation to unforgettable experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-luxury-charcoal/50 backdrop-blur-sm border border-champagne-900/30 rounded-lg p-8 h-full hover:border-champagne-700/50 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-champagne-500/20 to-luxury-gold/20 border border-champagne-700/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon size={28} className="text-champagne-400" />
                </div>

                <div className="absolute top-8 right-8 text-champagne-900/40 font-serif text-5xl font-bold">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                <h3 className="text-champagne-100 font-serif text-xl mb-3">{step.title}</h3>
                <p className="text-champagne-400 text-sm leading-relaxed font-serif">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
