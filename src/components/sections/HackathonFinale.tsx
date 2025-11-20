import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Users, Mic, Calendar, Zap, Award } from 'lucide-react';

export default function HackathonFinale() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const phases = [
    {
      phase: 'Phase 1',
      title: 'University Qualifiers',
      period: 'January - March 2026',
      icon: Users,
      description: 'Hackathons at universities across Eswatini',
      details: [
        'Multiple qualifier events at top universities',
        'Teams of 2-4 students compete in 24-48 hour hackathons',
        'Local mentorship and prizes at each event',
        'Top 10 teams advance to Grand Finale',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Grand Finale at the Summit',
      period: 'September 2026 (During Summit)',
      icon: Trophy,
      description: 'The Ultimate Showdown - Compete for E50K+ in Prizes',
      details: [
        'Final 10 teams compete LIVE at the summit',
        'Pitch to 500+ attendees and investors',
        'Live development sessions with expert mentors',
        'Winners announced at Awards Ceremony',
      ],
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Large Audience',
      description: 'Present your solution to 500+ summit attendees',
    },
    {
      icon: Mic,
      title: 'Investor Access',
      description: 'Pitch directly to investors and VCs',
    },
    {
      icon: Zap,
      title: 'Media Coverage',
      description: 'Get featured in continental tech media',
    },
    {
      icon: Award,
      title: 'Mentorship',
      description: 'Work with summit speakers and industry experts',
    },
  ];

  return (
    <section id="hackathon-finale" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-primary" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-pink opacity-10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Hackathon Grand Finale
          </h2>
          <p className="text-xl md:text-2xl text-accent-cyan font-bold mb-6">
            The Ultimate Showdown at the Summit
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A highlight of the Tech Summit: Watch Eswatini's brightest student innovators
            compete LIVE for E50K+ in prizes in front of 500+ attendees and investors.
          </p>
        </motion.div>

        {/* Journey phases */}
        <div className="max-w-5xl mx-auto mb-20">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Connector */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-full h-12 w-0.5 bg-gradient-to-b from-accent-cyan to-accent-purple transform -translate-x-1/2 z-0" />
              )}

              <div className={`glass-card p-8 md:p-10 hover:shadow-[0_0_40px_rgba(0,245,255,0.2)] transition-all duration-500 group ${phase.color ? 'border-2 border-accent-cyan' : ''}`}>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${phase.color || 'from-accent-cyan to-accent-purple'} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-dark-primary rounded-full flex items-center justify-center">
                        <phase.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <span className="text-accent-purple font-mono text-sm mb-2 block">
                        {phase.phase}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                        {phase.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-5 h-5" />
                        <span className="font-mono text-sm">{phase.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg mb-6">
                      {phase.description}
                    </p>

                    {/* Details */}
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {phase.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Zap className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-300">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Registration info */}
                    {phase.phase === 'Phase 1' && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-400">
                          <span className="text-accent-cyan font-semibold">Registration Opening Soon</span> - Universities across Eswatini will be confirmed. For information, email{' '}
                          <a href="mailto:simphiwe@omevision.com" className="text-accent-cyan hover:underline">
                            simphiwe@omevision.com
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits for finalists */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Benefits for Grand Finalists
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="glass-card p-6 text-center hover:glow-border transition-all duration-300 group"
              >
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-accent-purple group-hover:text-accent-cyan transition-colors" />
                <h4 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-center"
        >
          <div className="glass-card p-10 max-w-3xl mx-auto">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-accent-cyan" />
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Ready to Compete?
            </h3>
            <p className="text-gray-300 mb-6">
              University qualifier events start in January 2026.
              Register your team now and start your journey to the Grand Finale!
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('registration');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary text-lg px-8 py-4"
            >
              Register for Hackathon
            </button>
            <p className="text-sm text-gray-400 mt-4">
              Free summit passes for all Grand Finalists
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
