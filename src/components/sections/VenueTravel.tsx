import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Plane, Hotel, Info, Globe, Mountain } from 'lucide-react';
import { CONTACT_INFO } from '../../lib/config';

export default function VenueTravel() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const travelInfo = [
    {
      icon: Plane,
      title: 'Airport',
      description: CONTACT_INFO.airport,
      detail: 'International flights available',
    },
    {
      icon: Hotel,
      title: 'Accommodation',
      description: 'Hotel partnerships coming soon',
      detail: 'Recommendations will be shared with registered attendees',
    },
    {
      icon: Info,
      title: 'Visa Information',
      description: 'Details coming soon',
      detail: 'Visit requirements for international attendees',
    },
    {
      icon: Mountain,
      title: 'Explore Eswatini',
      description: 'Combine summit with safari',
      detail: 'Experience African wildlife and culture',
    },
  ];

  return (
    <section id="venue-travel" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-primary" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-purple opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-cyan opacity-10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Venue & Travel
          </h2>
          <p className="text-2xl md:text-3xl text-white font-bold mb-6">
            Join Us in the Kingdom of Eswatini
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A beautiful country in Southern Africa, known for its natural beauty,
            rich culture, and growing tech ecosystem
          </p>
        </motion.div>

        {/* Venue info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass-card p-10 max-w-4xl mx-auto mb-16 text-center"
        >
          <MapPin className="w-16 h-16 mx-auto mb-4 text-accent-cyan" />
          <h3 className="text-3xl font-bold text-white mb-4">
            Summit Venue
          </h3>
          <p className="text-xl text-gray-300 mb-2">
            Location in Eswatini to be announced
          </p>
          <p className="text-sm text-gray-400">
            Venue details will be shared with registered attendees
          </p>
        </motion.div>

        {/* Travel information grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            For International Attendees
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {travelInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="glass-card p-8 hover:shadow-[0_0_40px_rgba(0,245,255,0.2)] transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple p-0.5">
                      <div className="w-full h-full bg-dark-primary rounded-full flex items-center justify-center">
                        <info.icon className="w-8 h-8 text-accent-cyan" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">
                      {info.title}
                    </h4>
                    <p className="text-accent-cyan mb-2">
                      {info.description}
                    </p>
                    <p className="text-sm text-gray-400">
                      {info.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="glass-card p-2 max-w-4xl mx-auto mb-16"
        >
          <div className="aspect-video bg-gradient-to-br from-dark-tertiary to-dark-secondary rounded-lg flex items-center justify-center relative overflow-hidden">
            {/* Background map outline effect */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <Globe className="w-64 h-64 text-accent-cyan" />
            </div>
            <div className="text-center p-8 relative z-10">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-accent-cyan animate-bounce" />
              <p className="text-xl text-gray-400 mb-2">
                Interactive map of Eswatini coming soon
              </p>
              <p className="text-sm text-gray-500">
                Explore summit location, hotels, and points of interest
              </p>
            </div>
          </div>
        </motion.div>

        {/* About Eswatini */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="glass-card p-10 max-w-4xl mx-auto text-center"
        >
          <Mountain className="w-16 h-16 mx-auto mb-4 text-accent-purple" />
          <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
            Experience Eswatini
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            While attending the summit, take the opportunity to explore one of Africa's
            hidden gems. From wildlife safaris to cultural experiences and stunning
            mountain landscapes, Eswatini offers unforgettable adventures alongside
            world-class tech innovation.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl mb-2">🦁</div>
              <p className="text-sm text-gray-400">Wildlife Safaris</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏔️</div>
              <p className="text-sm text-gray-400">Mountain Scenery</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎭</div>
              <p className="text-sm text-gray-400">Rich Culture</p>
            </div>
          </div>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            Detailed travel information, visa requirements, and hotel partnerships will be announced
            and shared with all registered attendees closer to the event date.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
