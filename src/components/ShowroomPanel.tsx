import { ChevronLeft, ChevronRight, MapPin, Calendar, Ship, Sparkles, UtensilsCrossed, Plane } from 'lucide-react';
import { useState } from 'react';

const propertyCards = [
  {
    name: 'Six Senses Zil Pasyon',
    location: 'Félicité Island, Seychelles',
    videoSrc: '/videos/Six_Senses.mp4',
    tags: ['Private Island', 'Wellness', 'Sustainable Luxury']
  },
  {
    name: 'COMO Laucala Island',
    location: 'Fiji',
    videoSrc: '/videos/comohotels.mp4',
    tags: ['Private Island', 'Farm-to-Table', 'Ultimate Hideaway']
  },
  {
    name: 'NIHI Sumba',
    location: 'Sumba, Indonesia',
    videoSrc: '/videos/nihi.mp4',
    tags: ['Barefoot Adventure', 'Surf & Horses', 'Remote Escape']
  },
  {
    name: 'Cheval Blanc Randheli',
    location: 'Noonu Atoll, Maldives',
    videoSrc: '/videos/rendeheli.mp4',
    tags: ['LVMH Maison', 'Overwater Villas', 'Art de Vivre']
  }
];

const transportCards = [
  {
    name: 'Private Jet Charter',
    provider: 'NetJets · Gulfstream G650',
    imageUrl: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Global Range', 'Ultra Long Range', 'Up to 19 Passengers']
  },
  {
    name: 'Luxury Yacht Charter',
    provider: 'Superyacht · 180ft Motor Yacht',
    imageUrl: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Mediterranean', 'Caribbean Routes', 'Full Crew Included']
  },
  {
    name: 'Helicopter Transfer',
    provider: 'Elite Aviation · Airbus H145',
    imageUrl: 'https://images.pexels.com/photos/2292919/pexels-photo-2292919.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Island Hopping', 'Scenic Routes', 'Door-to-Door']
  },
  {
    name: 'Chauffeur Service',
    provider: 'Rolls-Royce · Maybach · Bentley',
    imageUrl: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Luxury Fleet', '24/7 Available', 'Multilingual Drivers']
  }
];

const itinerarySteps = [
  { day: 'Day 1', title: 'Arrival & private transfer', icon: Plane },
  { day: 'Day 2', title: 'Spa & wellness ritual', icon: Sparkles },
  { day: 'Day 3', title: 'Private yacht experience', icon: Ship },
  { day: 'Day 4-5', title: 'Cultural immersion', icon: MapPin },
  { day: 'Day 6', title: 'Michelin dining experience', icon: UtensilsCrossed },
  { day: 'Day 7', title: 'Departure & memories', icon: Calendar }
];

export default function ShowroomPanel() {
  const [currentView, setCurrentView] = useState<'properties' | 'transport'>('properties');
  return (
    <div className="showroom-panel space-y-8">
      <div className="hero-carousel bg-luxury-charcoal/40 backdrop-blur-sm border border-champagne-900/20 rounded-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-champagne-100 font-serif text-2xl">
            {currentView === 'properties' ? 'Featured luxury properties' : 'Premium transport options'}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentView('properties')}
              className="bg-luxury-slate/50 hover:bg-luxury-slate border border-champagne-800/30 text-champagne-400 p-2 rounded transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setCurrentView('transport')}
              className="bg-luxury-slate/50 hover:bg-luxury-slate border border-champagne-800/30 text-champagne-400 p-2 rounded transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {currentView === 'properties' ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {propertyCards.map((property, index) => (
                <div
                  key={index}
                  className="property-card relative overflow-hidden rounded-3xl bg-black/60 border border-white/10 shadow-xl flex flex-col hover:border-white/20 hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-48 md:h-56 object-cover"
                  >
                    <source src={property.videoSrc} type="video/mp4" />
                  </video>

                  <div className="p-5">
                    <h3 className="text-lg md:text-xl font-serif text-champagne-100 mb-2">{property.name}</h3>
                    <p className="text-sm text-champagne-400 flex items-center gap-1 mb-4 font-serif">
                      <MapPin size={14} />
                      {property.location}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {property.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full border border-champagne-800/30 bg-champagne-900/20 text-[11px] uppercase tracking-wide text-champagne-300 font-serif">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {[0, 1].map((dot) => (
                <div
                  key={dot}
                  className={`w-2 h-2 rounded-full transition-all ${dot === 0 ? 'bg-champagne-500 w-8' : 'bg-champagne-800'}`}
                ></div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {transportCards.map((transport, index) => (
                <div
                  key={index}
                  className="transport-card relative overflow-hidden rounded-3xl bg-black/60 border border-white/10 shadow-xl flex flex-col hover:border-white/20 hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={transport.imageUrl}
                    alt={transport.name}
                    className="w-full h-48 md:h-56 object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-lg md:text-xl font-serif text-champagne-100 mb-2">{transport.name}</h3>
                    <p className="text-sm text-champagne-400 flex items-center gap-1 mb-4 font-serif">
                      <Plane size={14} />
                      {transport.provider}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {transport.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full border border-champagne-800/30 bg-champagne-900/20 text-[11px] uppercase tracking-wide text-champagne-300 font-serif">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {[0, 1].map((dot) => (
                <div
                  key={dot}
                  className={`w-2 h-2 rounded-full transition-all ${dot === 1 ? 'bg-champagne-500 w-8' : 'bg-champagne-800'}`}
                ></div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="itinerary-timeline bg-luxury-charcoal/40 backdrop-blur-sm border border-champagne-900/20 rounded-lg p-8">
        <h2 className="text-champagne-100 font-serif text-2xl mb-6">Your bespoke itinerary</h2>

        <div className="space-y-4">
          {itinerarySteps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 group">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-champagne-900/30 border border-champagne-700/50 flex items-center justify-center group-hover:bg-champagne-800/40 transition-colors">
                  <step.icon size={18} className="text-champagne-400" />
                </div>
                {index < itinerarySteps.length - 1 && (
                  <div className="w-px h-12 bg-gradient-to-b from-champagne-800/50 to-transparent"></div>
                )}
              </div>
              <div className="flex-1 pb-8">
                <p className="text-champagne-500 text-xs uppercase tracking-wider mb-1 font-serif">{step.day}</p>
                <h3 className="text-champagne-200 font-serif">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="booking-summary bg-gradient-to-br from-luxury-charcoal/80 to-luxury-slate/80 backdrop-blur-xl border border-champagne-700/40 rounded-lg p-8 shadow-2xl lg:sticky lg:top-24">
        <div className="mb-6">
          <p className="text-champagne-500 text-sm uppercase tracking-wider mb-2 font-serif">Trip estimate</p>
          <p className="text-champagne-100 font-serif text-4xl mb-4">$60,000 – $85,000</p>

          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-champagne-400 font-serif">Duration</span>
              <span className="text-champagne-200 font-serif">7–10 nights</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-champagne-400 font-serif">Destination cluster</span>
              <span className="text-champagne-200 font-serif">Mexico · Caribbean · Mediterranean</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-champagne-500 to-luxury-gold text-luxury-dark px-8 py-4 rounded-sm text-base tracking-wide font-serif hover:shadow-xl hover:shadow-champagne-500/30 transition-all duration-300 mb-4">
          Get my full proposal
        </button>

        <p className="text-champagne-500 text-xs text-center leading-relaxed font-serif">
          No commitment. We only work with a handful of clients per month.
        </p>
      </div>
    </div>
  );
}
