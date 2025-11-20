import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mic, Sparkles, Store, TrendingUp, Users, Globe } from 'lucide-react';
import { EVENT_INFO } from '../../lib/config';

export default function SummitOverview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pillars = [
    {
      icon: Mic,
      title: 'Keynote Speakers',
      description: 'Thought leaders from across Africa and globally',
    },
    {
      icon: Sparkles,
      title: 'Workshops & Masterclasses',
      description: 'Hands-on technical training',
    },
    {
      icon: Store,
      title: 'Exhibition Hall',
      description: 'Latest tech innovations and startups',
    },
    {
      icon: TrendingUp,
      title: 'Investment Pitches',
      description: 'Connect founders with funding',
    },
  ];

  const stats = [
    { icon: Users, value: EVENT_INFO.stats.expectedAttendees, label: 'Attendees' },
    { icon: Globe, value: EVENT_INFO.stats.countries, label: 'African Countries' },
    { icon: Mic, value: EVENT_INFO.stats.speakers, label: 'Speakers & Panelists' },
    { icon: Store, value: EVENT_INFO.stats.exhibitors, label: 'Exhibiting Startups & Companies' },
    { icon: TrendingUp, value: EVENT_INFO.stats.prizePool, label: 'Prize Pool' },
    { icon: Sparkles, value: `${EVENT_INFO.stats.days} Days`, label: 'Of Innovation' },
  ];

  return (
    <section id="summit-overview" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-secondary via-dark-primary to-dark-secondary" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-cyan rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple rounded-full blur-3xl" />
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
            Summit Overview
          </h2>
          <p className="text-2xl md:text-3xl text-white font-bold mb-6 max-w-4xl mx-auto">
            Southern Africa's Brightest Minds in Tech, Under One Roof
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Eswatini Tech Summit 2026 is a regional platform where innovation meets investment.
            Join 500+ thought leaders, entrepreneurs, investors, and technologists from across Southern Africa
            for three days of cutting-edge insights, hands-on learning, and meaningful connections.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="glass-card p-6 text-center hover:glow-border transition-all duration-300 group"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-accent-cyan group-hover:text-accent-purple transition-colors" />
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 mb-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Four Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Four Main Pillars
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="glass-card p-8 text-center hover:shadow-[0_0_30px_rgba(0,245,255,0.2)] transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple p-0.5 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full bg-dark-primary rounded-full flex items-center justify-center">
                    <pillar.icon className="w-8 h-8 text-accent-cyan" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {pillar.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="glass-card p-2 max-w-4xl mx-auto"
        >
          <div className="aspect-video bg-gradient-to-br from-dark-tertiary to-dark-secondary rounded-lg flex items-center justify-center relative overflow-hidden">
            {/* African continent SVG outline with tech nodes */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <Globe className="w-64 h-64 text-accent-cyan animate-pulse" />
            </div>
            <div className="text-center p-8 relative z-10">
              <Sparkles className="w-16 h-16 mx-auto mb-4 text-accent-cyan" />
              <p className="text-xl text-gray-400">
                Summit promotional video coming soon
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
