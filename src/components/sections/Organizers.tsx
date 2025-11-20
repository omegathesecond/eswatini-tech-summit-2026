import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Globe, Mail } from 'lucide-react';
import { EVENT_INFO } from '../../lib/config';

export default function Organizers() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="organizers" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-secondary via-dark-primary to-dark-secondary" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-purple rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Organized By
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Bringing together innovators, entrepreneurs, and technology leaders across Africa
          </p>
        </motion.div>

        {/* Organizer Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 rounded-2xl border border-accent-cyan/20 hover:border-accent-cyan/40 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Logo/Icon */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-4xl font-bold text-white">
                  O
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
                  {EVENT_INFO.organizer}
                </h3>
                <p className="text-accent-cyan text-lg font-medium mb-4 italic">
                  {EVENT_INFO.organizerTagline}
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Omevision is a leading technology innovation company dedicated to fostering the growth
                  of Africa's tech ecosystem. Through events, partnerships, and community building,
                  we're creating opportunities for entrepreneurs, developers, and innovators across the continent.
                </p>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Building2 className="w-4 h-4 text-accent-cyan" />
                    <span>+268 78422613</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Globe className="w-4 h-4 text-accent-cyan" />
                    <a href="https://omevision.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors">
                      omevision.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Mail className="w-4 h-4 text-accent-cyan" />
                    <a href="mailto:simphiwe@omevision.com" className="hover:text-accent-cyan transition-colors">
                      simphiwe@omevision.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
