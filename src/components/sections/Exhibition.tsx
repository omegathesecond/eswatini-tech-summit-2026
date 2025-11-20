import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Store, Users, TrendingUp, Award, Send, Building2 } from 'lucide-react';

export default function Exhibition() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const exhibitorTypes = [
    {
      icon: Building2,
      title: 'Tech Companies',
      description: 'Showcase your products and services',
    },
    {
      icon: Award,
      title: 'Startups',
      description: 'Get visibility and connect with investors',
    },
    {
      icon: Users,
      title: 'Universities',
      description: 'Display research and innovation projects',
    },
    {
      icon: TrendingUp,
      title: 'Government Initiatives',
      description: 'Highlight tech development programs',
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Brand Visibility',
      description: 'Showcase your brand to 500+ attendees from 10+ African countries',
    },
    {
      icon: TrendingUp,
      title: 'Lead Generation',
      description: 'Connect with potential clients, partners, and customers',
    },
    {
      icon: Award,
      title: 'Partnership Opportunities',
      description: 'Network with corporates, startups, and government entities',
    },
    {
      icon: Store,
      title: 'Product Launches',
      description: 'Launch new products to a highly targeted tech audience',
    },
  ];

  // Placeholder sponsor logos grid
  const placeholderSponsors = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
  }));

  return (
    <section id="exhibition" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-secondary via-dark-primary to-dark-secondary" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent-pink rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-cyan rounded-full blur-3xl" />
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
            Exhibition & Innovation Hall
          </h2>
          <p className="text-2xl md:text-3xl text-white font-bold mb-6">
            Showcase Your Innovation to 500+ Attendees
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            The exhibition hall is the heart of the summit - where innovation comes alive.
            Connect with Southern Africa's tech community and showcase your solutions.
          </p>
        </motion.div>

        {/* Who can exhibit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Who Can Exhibit?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exhibitorTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="glass-card p-6 text-center hover:glow-border transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple p-0.5 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full bg-dark-primary rounded-full flex items-center justify-center">
                    <type.icon className="w-8 h-8 text-accent-cyan" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {type.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Exhibition Benefits
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="glass-card p-8 flex gap-6 hover:shadow-[0_0_40px_rgba(0,245,255,0.2)] transition-all duration-500"
              >
                <div className="flex-shrink-0">
                  <benefit.icon className="w-12 h-12 text-accent-cyan" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Placeholder exhibitor logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-300">
            Our Exhibitors & Partners
          </h3>
          <div className="glass-card p-8">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {placeholderSponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.0 + index * 0.05, duration: 0.3 }}
                  className="aspect-square rounded-lg bg-dark-tertiary/50 border border-gray-700 flex items-center justify-center hover:border-accent-cyan transition-colors"
                >
                  <Store className="w-8 h-8 text-gray-600" />
                </motion.div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-6">
              Exhibitor and partner logos will be displayed here
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="glass-card p-10 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
            Ready to Exhibit?
          </h3>
          <p className="text-gray-300 mb-6">
            Limited exhibition spaces available. Reserve your booth now and
            secure prime visibility at Africa's premier tech summit.
          </p>
          <button
            onClick={() => {
              // In production, this would open an exhibition application form
              window.open('mailto:exhibition@omevision.tech?subject=Exhibition Application - Eswatini Tech Summit 2026', '_blank');
            }}
            className="btn-primary flex items-center gap-2 mx-auto text-lg px-8 py-4"
          >
            <Send className="w-5 h-5" />
            <span>Apply to Exhibit</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
