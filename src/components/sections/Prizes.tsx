import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Star, Code, Lightbulb, TrendingUp } from 'lucide-react';

export default function Prizes() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mainPrizes = [
    {
      place: '1st Place',
      prize: 'E25,000',
      color: 'from-yellow-400 to-yellow-600',
      icon: Trophy,
      benefits: ['Cash Prize', 'Mentorship Program', 'Media Coverage', 'Networking Opportunities'],
    },
    {
      place: '2nd Place',
      prize: 'E15,000',
      color: 'from-gray-300 to-gray-500',
      icon: Award,
      benefits: ['Cash Prize', 'Mentorship Program', 'Media Coverage'],
    },
    {
      place: '3rd Place',
      prize: 'E10,000',
      color: 'from-orange-400 to-orange-600',
      icon: Star,
      benefits: ['Cash Prize', 'Mentorship Program'],
    },
  ];

  const summitAwards = [
    {
      title: 'Best AI Application',
      prize: 'E5,000',
      icon: Lightbulb,
      description: 'Most innovative AI/ML solution',
    },
    {
      title: 'Best Social Impact Tech',
      prize: 'E5,000',
      icon: Award,
      description: 'Technology addressing social challenges',
    },
    {
      title: 'Best FinTech Solution',
      prize: 'E5,000',
      icon: TrendingUp,
      description: 'Outstanding financial technology innovation',
    },
    {
      title: 'Best AgriTech Solution',
      prize: 'E5,000',
      icon: Code,
      description: 'Agriculture technology innovation',
    },
  ];

  const pitchCompetition = {
    title: 'Pitch Competition',
    description: 'Present your startup to attending VCs and angel investors',
    prize: '$100K+',
    subtitle: 'In potential grants and investments',
  };

  return (
    <section id="prizes" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-secondary via-dark-primary to-dark-secondary" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-cyan rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-pink rounded-full blur-3xl animate-pulse animation-delay-400" />
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
            Prizes & Awards
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            E50K+ in hackathon prizes, innovation awards, and $100K+ in investment opportunities
          </p>
        </motion.div>

        {/* Total prize pool */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Total Prize Pool</p>
          <div className="text-6xl md:text-8xl font-bold gradient-text neon-glow">
            E50,000+
          </div>
        </motion.div>

        {/* Main prizes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {mainPrizes.map((prize, index) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              className={`
                glass-card p-8 relative overflow-hidden group
                hover:shadow-[0_0_50px_rgba(0,245,255,0.3)] transition-all duration-500
                ${index === 0 ? 'md:scale-110 md:z-10' : ''}
              `}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${prize.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${prize.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-dark-primary rounded-full flex items-center justify-center">
                    <prize.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-2 text-center">
                {prize.place}
              </h3>
              <div className={`text-4xl font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent mb-6 text-center`}>
                {prize.prize}
              </div>

              {/* Benefits */}
              <ul className="space-y-3">
                {prize.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-gray-300">
                    <Star className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Summit Innovation Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text">
            Summit Innovation Awards
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {summitAwards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                className="glass-card p-6 hover:glow-border transition-all duration-300 group"
              >
                <award.icon className="w-12 h-12 text-accent-purple mb-4 group-hover:text-accent-cyan transition-colors" />
                <h4 className="text-xl font-bold text-white mb-2">
                  {award.title}
                </h4>
                <div className="text-2xl font-bold gradient-text mb-3">
                  {award.prize}
                </div>
                <p className="text-sm text-gray-400">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pitch Competition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mb-16"
        >
          <div className="glass-card p-10 max-w-3xl mx-auto text-center">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-accent-cyan" />
            <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              {pitchCompetition.title}
            </h3>
            <p className="text-gray-300 mb-6">
              {pitchCompetition.description}
            </p>
            <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
              {pitchCompetition.prize}
            </div>
            <p className="text-accent-cyan text-lg">
              {pitchCompetition.subtitle}
            </p>
          </div>
        </motion.div>

        {/* Partners section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-300">
            Made Possible By Our Partners
          </h3>
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <p className="text-gray-400 text-lg mb-4">
              Partner logos will be displayed here
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Support innovation across Southern Africa and gain visibility with 500+ tech leaders
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('partnership');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary mt-6"
            >
              Become a Partner
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
