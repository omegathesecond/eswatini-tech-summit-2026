import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Rocket, TrendingUp, Building2, GraduationCap, CheckCircle } from 'lucide-react';

export default function WhyAttend() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const audiences = [
    {
      icon: Code,
      title: 'For Developers',
      headline: 'Master AI, Cloud & Emerging Tech',
      benefits: [
        'Hands-on workshops and technical masterclasses',
        'Live demos of cutting-edge tools and frameworks',
        'Technical certifications and learning tracks',
        'Network with top engineers and CTOs',
      ],
      color: 'from-blue-400 to-cyan-400',
    },
    {
      icon: Rocket,
      title: 'For Entrepreneurs',
      headline: 'Pitch, Partner, and Get Funded',
      benefits: [
        'Direct access to investors and VCs',
        'One-on-one mentorship with successful founders',
        'Pitch competitions with real investment opportunities',
        'Connect with potential co-founders and advisors',
      ],
      color: 'from-purple-400 to-pink-400',
    },
    {
      icon: TrendingUp,
      title: 'For Investors',
      headline: 'Discover Africa\'s Next Tech Unicorns',
      benefits: [
        'Curated deal flow from vetted startups',
        'Exclusive startup showcase and pitch sessions',
        'Market insights and trend analysis for Africa',
        'Network with co-investors and LPs',
      ],
      color: 'from-green-400 to-emerald-400',
    },
    {
      icon: Building2,
      title: 'For Corporates',
      headline: 'Innovate, Recruit, Partner',
      benefits: [
        'Innovation partnership opportunities with startups',
        'Talent acquisition and recruitment pipeline',
        'Product launches and brand visibility',
        'Corporate innovation showcases',
      ],
      color: 'from-orange-400 to-red-400',
    },
    {
      icon: GraduationCap,
      title: 'For Students',
      headline: 'Launch Your Tech Career',
      benefits: [
        'Participate in hackathons and competitions',
        'Access scholarships and internship opportunities',
        'Network with potential employers and mentors',
        'Career guidance and skill development workshops',
      ],
      color: 'from-yellow-400 to-orange-400',
    },
  ];

  return (
    <section id="why-attend" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-primary" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-purple opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-cyan opacity-10 rounded-full blur-3xl" />
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
            Why Attend?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're a developer, entrepreneur, investor, corporate, or student -
            there's something for everyone at Southern Africa's premier tech summit
          </p>
        </motion.div>

        {/* Audience cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="glass-card p-8 hover:shadow-[0_0_40px_rgba(0,245,255,0.2)] transition-all duration-500 group"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${audience.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-dark-primary rounded-full flex items-center justify-center">
                    <audience.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="mb-2">
                <span className="text-sm text-gray-400 uppercase tracking-wider">
                  {audience.title}
                </span>
              </div>

              {/* Headline */}
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${audience.color} bg-clip-text text-transparent`}>
                {audience.headline}
              </h3>

              {/* Benefits */}
              <ul className="space-y-3">
                {audience.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-6">
            Ready to be part of Eswatini's biggest tech gathering?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('registration');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            Register Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
