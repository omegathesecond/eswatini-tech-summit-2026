import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Trophy, Building2, Rocket } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Users, value: '500+', label: 'Participants Expected' },
    { icon: Trophy, value: 'E50K+', label: 'Prize Pool' },
    { icon: Building2, value: '10+', label: 'Universities' },
    { icon: Rocket, value: '20+', label: 'Innovation Challenges' },
  ];

  const features = [
    {
      title: 'Multi-University Hackathons',
      description: 'Compete in university-level hackathons across Eswatini, showcasing innovation from every institution.',
    },
    {
      title: 'Super Hackathon Finals',
      description: 'Top teams from each university compete in the grand finale at the Tech Summit for ultimate glory.',
    },
    {
      title: 'Industry Mentorship',
      description: 'Learn from leading tech professionals and entrepreneurs shaping African innovation.',
    },
    {
      title: 'Networking Opportunities',
      description: 'Connect with fellow innovators, investors, and tech leaders from across the continent.',
    },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
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
            About the Summit
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Eswatini Tech Summit 2026 is a groundbreaking initiative to foster technological
            innovation and entrepreneurship across Eswatini. Organized by Omevision, we're building
            a platform where young innovators can showcase their talents, compete for exciting prizes,
            and connect with industry leaders.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="glass-card p-6 text-center hover:glow-border transition-all duration-300 group"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-accent-cyan group-hover:text-accent-purple transition-colors" />
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              className="glass-card p-8 hover:shadow-[0_0_30px_rgba(0,245,255,0.2)] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-accent-cyan mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Video/Image showcase placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="glass-card p-2 max-w-4xl mx-auto"
        >
          <div className="aspect-video bg-gradient-to-br from-dark-tertiary to-dark-secondary rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <Rocket className="w-16 h-16 mx-auto mb-4 text-accent-cyan" />
              <p className="text-xl text-gray-400">
                Promotional video coming soon
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
