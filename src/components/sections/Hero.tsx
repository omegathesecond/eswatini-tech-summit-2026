import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ParticleBackground from '../ui/ParticleBackground';
import Scene3D from '../ui/Scene3D';
import CountdownTimer from '../ui/CountdownTimer';
import { EVENT_INFO } from '../../lib/config';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-tertiary" />

      {/* Particle effect */}
      <ParticleBackground />

      {/* 3D Scene */}
      <Scene3D />

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight neon-glow"
          >
            <span className="gradient-text">
              {EVENT_INFO.headline}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-3xl text-accent-cyan mb-6 leading-snug"
          >
            {EVENT_INFO.subheadline}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-8 italic leading-relaxed"
          >
            {EVENT_INFO.tagline}
          </motion.p>

          {/* Date info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-base md:text-lg text-gray-400 mb-12 font-mono leading-relaxed"
          >
            {EVENT_INFO.dateInfo}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={() => scrollToSection('registration')}
              className="btn-primary w-full sm:w-auto text-lg px-8 py-4"
            >
              Register for Summit
            </button>
            <button
              onClick={() => scrollToSection('registration')}
              className="btn-secondary w-full sm:w-auto text-lg px-8 py-4"
            >
              Join Hackathons
            </button>
            <button
              onClick={() => scrollToSection('partnership')}
              className="btn-secondary w-full sm:w-auto"
            >
              Become a Partner
            </button>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mb-12"
          >
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">
              Countdown to the Summit
            </p>
            <CountdownTimer />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollToSection('summit-overview')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-accent-cyan hover:text-accent-purple transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.button>
    </section>
  );
}
