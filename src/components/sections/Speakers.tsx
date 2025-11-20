import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Send } from 'lucide-react';

export default function Speakers() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Placeholder speaker cards
  const placeholderSpeakers = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    gradient: [
      'from-cyan-400 to-blue-500',
      'from-purple-400 to-pink-500',
      'from-green-400 to-cyan-500',
      'from-orange-400 to-red-500',
      'from-yellow-400 to-orange-500',
      'from-pink-400 to-purple-500',
    ][i],
  }));

  return (
    <section id="speakers" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-secondary via-dark-primary to-dark-secondary" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-pink rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-cyan rounded-full blur-3xl animate-pulse animation-delay-400" />
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
            World-Class Speakers & Thought Leaders
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Speakers will be announced soon. Check back for updates!
          </p>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            We're curating an exceptional lineup of innovators, investors, and tech pioneers
            from across Africa and globally to share their insights and experiences.
          </p>
        </motion.div>

        {/* Placeholder speaker cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {placeholderSpeakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="glass-card p-6 hover:shadow-[0_0_40px_rgba(0,245,255,0.2)] transition-all duration-500 group"
            >
              {/* Animated gradient border */}
              <div className={`w-full aspect-square rounded-lg bg-gradient-to-br ${speaker.gradient} p-0.5 mb-4 group-hover:scale-105 transition-transform duration-300`}>
                <div className="w-full h-full bg-dark-secondary rounded-lg flex items-center justify-center">
                  <User className="w-24 h-24 text-gray-600" />
                </div>
              </div>

              {/* Speaker info placeholder */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-400 mb-2">
                  Speaker TBA
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Topic: To Be Announced
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div className={`h-1 w-8 rounded bg-gradient-to-r ${speaker.gradient} animate-pulse`} />
                  <div className={`h-1 w-12 rounded bg-gradient-to-r ${speaker.gradient} animate-pulse animation-delay-200`} />
                  <div className={`h-1 w-8 rounded bg-gradient-to-r ${speaker.gradient} animate-pulse animation-delay-400`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action for speaker proposals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="glass-card p-10 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
            Want to Speak at the Summit?
          </h3>
          <p className="text-gray-300 mb-6">
            We're looking for exceptional speakers to share their expertise.
            If you're a thought leader in AI, cloud computing, fintech, or other emerging technologies,
            we'd love to hear from you.
          </p>
          <button
            onClick={() => {
              // In production, this would open a speaker proposal form
              window.open('mailto:speakers@omevision.tech?subject=Speaker Proposal - Eswatini Tech Summit 2026', '_blank');
            }}
            className="btn-primary flex items-center gap-2 mx-auto"
          >
            <Send className="w-5 h-5" />
            <span>Submit Your Proposal</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
