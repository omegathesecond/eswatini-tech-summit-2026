import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Users, Award } from 'lucide-react';

export default function HackathonJourney() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const journeySteps = [
    {
      phase: 'Phase 1',
      title: 'University Hackathons',
      description: 'Multiple hackathons hosted at universities across Eswatini',
      icon: Users,
      universities: [
        'University of Eswatini',
        'Southern African Nazarene University',
        'Limkokwing University',
        'SCOT College',
      ],
      date: 'January - March 2026',
      action: 'Register for Your University',
    },
    {
      phase: 'Phase 2',
      title: 'Regional Competitions',
      description: 'Top teams from each university advance to regional rounds',
      icon: MapPin,
      universities: [],
      date: 'April - August 2026',
      action: 'Compete & Advance',
    },
    {
      phase: 'Phase 3',
      title: 'Super Hackathon Finals',
      description: 'Grand finale at the Eswatini Tech Summit with the best teams',
      icon: Award,
      universities: [],
      date: 'September 2026',
      action: 'Win Big Prizes',
    },
  ];

  return (
    <section id="journey" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-primary" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent-purple opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-pink opacity-10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Your Journey to Victory
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Follow the path from university competitions to the ultimate showdown at the Tech Summit
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Connector line */}
              {index < journeySteps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-full h-12 w-0.5 bg-gradient-to-b from-accent-cyan to-accent-purple transform -translate-x-1/2" />
              )}

              <div className="glass-card p-8 md:p-10 hover:shadow-[0_0_40px_rgba(0,245,255,0.2)] transition-all duration-500 group">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple p-0.5 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full bg-dark-primary rounded-full flex items-center justify-center">
                        <step.icon className="w-10 h-10 text-accent-cyan" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <span className="text-accent-purple font-mono text-sm mb-2 block">
                          {step.phase}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                          {step.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                        <Calendar className="w-5 h-5" />
                        <span className="font-mono">{step.date}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg mb-4">
                      {step.description}
                    </p>

                    {/* Universities list */}
                    {step.universities.length > 0 && (
                      <div className="mb-6">
                        <p className="text-sm text-gray-400 mb-3">Participating Universities:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.universities.map((uni) => (
                            <div
                              key={uni}
                              className="flex items-center gap-2 text-accent-cyan text-sm"
                            >
                              <MapPin className="w-4 h-4" />
                              <span>{uni}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA */}
                    <button
                      onClick={() => {
                        const element = document.getElementById('registration');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="btn-secondary"
                    >
                      {step.action}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map visualization placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 glass-card p-2 max-w-4xl mx-auto"
        >
          <div className="aspect-video bg-gradient-to-br from-dark-tertiary to-dark-secondary rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-accent-cyan animate-bounce" />
              <p className="text-xl text-gray-400">
                Interactive map visualization coming soon
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Explore all hackathon locations across Eswatini
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
