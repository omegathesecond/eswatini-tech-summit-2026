import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Calendar, User, Trophy } from 'lucide-react';

export default function Registration() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="registration" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-primary via-dark-secondary to-dark-primary" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent-cyan rounded-full blur-3xl" />
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
            Registration
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Secure your spot at Southern Africa's premier tech gathering
          </p>
        </motion.div>

        {/* Registration types */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Summit Registration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card p-8 md:p-10 text-center hover:glow-border transition-all duration-300"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple p-0.5">
              <div className="w-full h-full bg-dark-primary rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-accent-cyan" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Summit Registration
            </h3>

            <p className="text-gray-300 mb-6">
              Join 500+ innovators, entrepreneurs, and tech leaders for 3 days of learning, networking, and collaboration.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-400">
                <Calendar className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                <span>September 17-19, 2026</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <User className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                <span>For developers, entrepreneurs, investors, corporates, students</span>
              </div>
            </div>

            <div className="bg-dark-tertiary border border-accent-cyan/30 rounded-lg p-6 mb-6">
              <p className="text-accent-cyan font-bold text-lg mb-2">
                Opening Soon
              </p>
              <p className="text-gray-400 text-sm">
                Registration will open in the coming weeks. Stay tuned!
              </p>
            </div>

            <div className="text-sm text-gray-400">
              <p>For inquiries, contact:</p>
              <a
                href="mailto:simphiwe@omevision.com"
                className="text-accent-cyan hover:underline font-semibold"
              >
                simphiwe@omevision.com
              </a>
            </div>
          </motion.div>

          {/* Hackathon Registration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-card p-8 md:p-10 text-center hover:glow-border transition-all duration-300"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-purple to-accent-pink p-0.5">
              <div className="w-full h-full bg-dark-primary rounded-full flex items-center justify-center">
                <Trophy className="w-10 h-10 text-accent-purple" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Hackathon Registration
            </h3>

            <p className="text-gray-300 mb-6">
              Compete in university qualifiers across Eswatini for a chance to pitch at the Grand Finale for E50K+ in prizes.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-400">
                <Calendar className="w-5 h-5 text-accent-purple flex-shrink-0" />
                <span>Qualifiers: Jan-Mar 2026</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Trophy className="w-5 h-5 text-accent-purple flex-shrink-0" />
                <span>Grand Finale: September 2026</span>
              </div>
            </div>

            <div className="bg-dark-tertiary border border-accent-purple/30 rounded-lg p-6 mb-6">
              <p className="text-accent-purple font-bold text-lg mb-2">
                Opening Soon
              </p>
              <p className="text-gray-400 text-sm">
                Hackathon registration will open once participating universities are confirmed.
              </p>
            </div>

            <div className="text-sm text-gray-400">
              <p>For inquiries, contact:</p>
              <a
                href="mailto:simphiwe@omevision.com"
                className="text-accent-purple hover:underline font-semibold"
              >
                simphiwe@omevision.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* General contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 glass-card px-6 py-4">
            <Mail className="w-5 h-5 text-accent-cyan" />
            <span className="text-gray-300">
              Questions? Email us at{' '}
              <a
                href="mailto:simphiwe@omevision.com"
                className="text-accent-cyan hover:underline font-semibold"
              >
                simphiwe@omevision.com
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
