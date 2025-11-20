import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Users, TrendingUp, Heart, CheckCircle } from 'lucide-react';

export default function Partnership() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tiers = [
    {
      name: 'Platinum',
      color: 'from-gray-200 to-gray-400',
      benefits: [
        'Premier logo placement on all materials',
        'Speaking opportunity at the summit',
        'VIP booth at the event',
        'Social media feature campaigns',
        'Exclusive networking dinner',
        '10 complimentary tickets',
      ],
    },
    {
      name: 'Gold',
      color: 'from-yellow-400 to-yellow-600',
      benefits: [
        'Logo on event materials',
        'Exhibition booth',
        'Social media mentions',
        'Newsletter features',
        '6 complimentary tickets',
      ],
    },
    {
      name: 'Silver',
      color: 'from-gray-300 to-gray-500',
      benefits: [
        'Logo on website',
        'Social media recognition',
        'Newsletter mention',
        '3 complimentary tickets',
      ],
    },
    {
      name: 'Bronze',
      color: 'from-orange-400 to-orange-600',
      benefits: [
        'Logo on website',
        'Social media shoutout',
        '2 complimentary tickets',
      ],
    },
  ];

  const partnershipBenefits = [
    {
      icon: Building2,
      title: 'Regional Reach',
      description: 'Showcase your brand to 500+ attendees from 10+ African countries',
    },
    {
      icon: Users,
      title: 'Talent & Partnerships',
      description: 'Connect with top talent, startups, and strategic partners across Southern Africa',
    },
    {
      icon: TrendingUp,
      title: 'Market Leadership',
      description: 'Position your company as a leader in Southern African tech innovation',
    },
    {
      icon: Heart,
      title: 'Social Impact',
      description: 'Support pan-African tech ecosystem and digital transformation',
    },
  ];

  return (
    <section id="partnership" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-primary" />
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent-purple opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent-cyan opacity-10 rounded-full blur-3xl" />
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
            Partnership Opportunities
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Partner with Southern Africa's Premier Tech Summit and reach 500+ attendees from 10+ countries
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {partnershipBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="glass-card p-6 text-center hover:glow-border transition-all duration-300"
            >
              <benefit.icon className="w-12 h-12 mx-auto mb-4 text-accent-cyan" />
              <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership tiers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Partnership Tiers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="glass-card p-6 hover:shadow-[0_0_40px_rgba(0,245,255,0.2)] transition-all duration-300"
              >
                <div className={`text-2xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-6`}>
                  {tier.name}
                </div>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 md:p-10 text-center">
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              Partner With Us
            </h3>

            <div className="bg-dark-tertiary border border-accent-cyan/30 rounded-lg p-8 mb-6">
              <Building2 className="w-16 h-16 mx-auto mb-4 text-accent-cyan" />
              <p className="text-accent-cyan font-bold text-2xl mb-3">
                Partnerships Opening Soon
              </p>
              <p className="text-gray-300 text-lg mb-6">
                We're finalizing our partnership packages and opportunities. Stay tuned for exciting collaboration options!
              </p>
              <p className="text-gray-400">
                Interested in partnering with the Eswatini Tech Summit?
              </p>
            </div>

            <div className="text-gray-400">
              <p className="mb-2">For partnership inquiries, please contact:</p>
              <a
                href="mailto:simphiwe@omevision.com"
                className="text-accent-cyan hover:underline font-semibold text-xl"
              >
                simphiwe@omevision.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
