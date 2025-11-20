import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_INFO, EVENT_INFO } from '../../lib/config';

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Summit Overview', href: '#summit-overview' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Hackathons', href: '#hackathon-finale' },
    { label: 'Prizes', href: '#prizes' },
    { label: 'Partnerships', href: '#partnership' },
    { label: 'Venue & Travel', href: '#venue-travel' },
    { label: 'Register', href: '#registration' },
  ];

  const socialLinks = [
    { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
    { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
  ];

  return (
    <footer ref={ref} className="relative bg-dark-secondary border-t border-gray-800 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-cyan rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Omevision branding */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-3xl font-bold gradient-text mb-4">
              {EVENT_INFO.organizer}
            </h3>
            <p className="text-gray-400 mb-4 italic">
              {EVENT_INFO.organizerTagline}
            </p>
            <p className="text-gray-400 text-sm">
              Organizing the {EVENT_INFO.name} {EVENT_INFO.year} - where innovation meets opportunity.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-cyan transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-xl font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-accent-cyan transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-accent-cyan transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </motion.div>

          {/* Social media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-tertiary border border-gray-700 flex items-center justify-center hover:border-accent-cyan hover:bg-accent-cyan hover:bg-opacity-10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-accent-cyan transition-colors" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-3">Get the latest updates</p>
              <a
                href="#news"
                className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-purple transition-colors"
              >
                <span className="text-sm font-semibold">Subscribe to Newsletter</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-gray-800 pt-8 pb-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {EVENT_INFO.organizer}. All rights reserved. | {EVENT_INFO.name} {EVENT_INFO.year}
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-accent-cyan transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent-cyan transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
