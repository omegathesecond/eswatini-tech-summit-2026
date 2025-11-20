import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ChevronDown, Mic, Store, Trophy, Clock } from 'lucide-react';

export default function Agenda() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const agenda = [
    {
      day: 1,
      title: 'Opening & Foundations',
      description: 'Kick off the summit with inspiring keynotes and foundational tracks',
      icon: Mic,
      color: 'from-cyan-400 to-blue-500',
      sessions: [
        {
          time: '09:00 - 10:00',
          title: 'Opening Keynote',
          description: 'Speaker TBA',
          type: 'keynote',
        },
        {
          time: '10:30 - 13:00',
          title: 'Track 1: AI & Machine Learning',
          description: 'Deep dive into artificial intelligence and ML applications in Africa',
          type: 'track',
        },
        {
          time: '10:30 - 13:00',
          title: 'Track 2: Cloud & Infrastructure',
          description: 'Building scalable systems and cloud-native architectures',
          type: 'track',
        },
        {
          time: '14:00 - 16:00',
          title: 'Startup Pitches - Round 1',
          description: 'Early-stage startups present to investors',
          type: 'pitch',
        },
        {
          time: '16:30 - 18:00',
          title: 'Networking Reception',
          description: 'Connect with attendees and speakers',
          type: 'networking',
        },
      ],
    },
    {
      day: 2,
      title: 'Innovation & Exhibition',
      description: 'Explore innovations, attend workshops, and witness the hackathon finale begin',
      icon: Store,
      color: 'from-purple-400 to-pink-500',
      sessions: [
        {
          time: '09:00 - 18:00',
          title: 'Exhibition Hall Opens',
          description: '30+ startups & companies showcasing latest innovations',
          type: 'exhibition',
        },
        {
          time: '09:00 - 12:00',
          title: 'Workshops & Masterclasses',
          description: 'Hands-on technical sessions (multiple tracks)',
          type: 'workshop',
        },
        {
          time: '13:00 - 15:00',
          title: 'Investment Forum',
          description: 'Panel discussions with VCs and angel investors',
          type: 'panel',
        },
        {
          time: '15:30 - 18:00',
          title: 'Hackathon Grand Finale Begins',
          description: 'Top 10 teams start building their final solutions',
          type: 'hackathon',
        },
      ],
    },
    {
      day: 3,
      title: 'Future & Awards',
      description: 'Celebrate winners and explore the future of African tech',
      icon: Trophy,
      color: 'from-green-400 to-emerald-500',
      sessions: [
        {
          time: '09:00 - 14:00',
          title: 'Hackathon Grand Finale Continues',
          description: 'Final presentations and judging',
          type: 'hackathon',
        },
        {
          time: '14:00 - 16:00',
          title: 'Policy & Future Tech Panel',
          description: 'Shaping the future of technology in Africa',
          type: 'panel',
        },
        {
          time: '16:30 - 18:00',
          title: 'Awards Ceremony',
          description: 'Recognizing excellence and announcing winners',
          type: 'awards',
        },
        {
          time: '18:00 - 18:30',
          title: 'Closing Keynote',
          description: 'Speaker TBA',
          type: 'keynote',
        },
      ],
    },
  ];

  const getSessionTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      keynote: 'bg-accent-cyan',
      track: 'bg-accent-purple',
      pitch: 'bg-accent-pink',
      networking: 'bg-green-500',
      exhibition: 'bg-orange-500',
      workshop: 'bg-blue-500',
      panel: 'bg-yellow-500',
      hackathon: 'bg-red-500',
      awards: 'bg-purple-500',
    };
    return colors[type] || 'bg-gray-500';
  };

  return (
    <section id="agenda" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-primary" />
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-cyan opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-purple opacity-10 rounded-full blur-3xl" />
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
            Program & Agenda
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Three days packed with insights, innovation, and opportunities
          </p>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Detailed schedule coming soon. Times and sessions subject to change.
          </p>
        </motion.div>

        {/* Day cards */}
        <div className="max-w-5xl mx-auto space-y-6">
          {agenda.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="glass-card overflow-hidden"
            >
              {/* Day header */}
              <button
                onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-dark-tertiary/50 transition-colors"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${day.color} p-0.5`}>
                    <div className="w-full h-full bg-dark-primary rounded-full flex items-center justify-center">
                      <day.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-sm font-mono font-bold bg-gradient-to-r ${day.color} bg-clip-text text-transparent`}>
                        DAY {day.day}
                      </span>
                      <Calendar className="w-4 h-4 text-gray-400" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {day.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {day.description}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-accent-cyan transition-transform duration-300 ${
                    expandedDay === day.day ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Day sessions */}
              <AnimatePresence>
                {expandedDay === day.day && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-700"
                  >
                    <div className="p-6 md:p-8 space-y-4">
                      {day.sessions.map((session, sessionIndex) => (
                        <motion.div
                          key={sessionIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: sessionIndex * 0.05 }}
                          className="flex gap-4 p-4 rounded-lg bg-dark-tertiary/30 hover:bg-dark-tertiary/50 transition-colors"
                        >
                          <div className="flex-shrink-0">
                            <div className="flex items-center gap-2 text-accent-cyan text-sm font-mono mb-2">
                              <Clock className="w-4 h-4" />
                              {session.time}
                            </div>
                            <span className={`inline-block px-2 py-1 rounded text-xs font-bold text-white ${getSessionTypeColor(session.type)}`}>
                              {session.type.toUpperCase()}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-white mb-1">
                              {session.title}
                            </h4>
                            <p className="text-sm text-gray-400">
                              {session.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            Detailed speaker names, session topics, and exact timings will be announced closer to the event.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
