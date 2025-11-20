import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO, EVENT_INFO } from '../../lib/config';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is the Eswatini Tech Summit?',
    answer: 'The Eswatini Tech Summit 2026 is Southern Africa\'s premier technology and AI conference, bringing together 500+ innovators, entrepreneurs, developers, investors, and tech leaders for three days of keynotes, workshops, exhibitions, and networking in the Kingdom of Eswatini.',
  },
  {
    question: 'When and where is the summit?',
    answer: `The summit takes place on ${EVENT_INFO.dateInfo}. The specific venue will be announced soon as we finalize arrangements.`,
  },
  {
    question: 'Who should attend?',
    answer: 'The summit is designed for developers, entrepreneurs, startup founders, investors, corporate innovation teams, students, government officials, and anyone interested in African tech innovation and investment opportunities.',
  },
  {
    question: 'What are the main activities?',
    answer: 'The summit features keynote speeches from industry leaders, technical workshops and masterclasses, startup pitch competitions, the grand finale of university hackathons, an exhibition hall, investor matchmaking sessions, and extensive networking opportunities.',
  },
  {
    question: 'How much does it cost to attend?',
    answer: 'Registration details and pricing will be announced soon. Early bird discounts will be available. For the latest updates, contact simphiwe@omevision.com.',
  },
  {
    question: 'Are there hackathon opportunities?',
    answer: `Yes! University students across Eswatini can participate in qualifier hackathons from January-March 2026. The top 10 teams will advance to the Grand Finale at the summit in September 2026 to compete for ${EVENT_INFO.stats.prizePool} in prizes. Registration details will be shared soon.`,
  },
  {
    question: 'Can I exhibit or become a partner?',
    answer: 'Absolutely! Partnership and exhibition opportunities are opening soon. We offer multiple partnership tiers (Platinum, Gold, Silver, Bronze) with various benefits. Contact simphiwe@omevision.com for detailed information about exhibition spaces and sponsorship packages.',
  },
  {
    question: 'Will there be investment opportunities?',
    answer: `Yes! The summit features startup pitch competitions with ${EVENT_INFO.stats.investments} in potential funding opportunities, plus investor matchmaking sessions and networking with VCs and angel investors from across the continent.`,
  },
  {
    question: 'What topics will be covered?',
    answer: 'The summit covers AI and Machine Learning, Cloud Computing, FinTech, AgriTech, Digital Transformation, Tech Policy and Regulation, Blockchain, Cybersecurity, and other emerging technologies relevant to African markets.',
  },
  {
    question: 'Is accommodation provided?',
    answer: 'Hotel partnerships and accommodation recommendations will be shared with registered attendees. Eswatini offers various lodging options ranging from budget-friendly to luxury accommodations.',
  },
  {
    question: 'How do I register?',
    answer: `Registration will open soon. Visit the registration section on this website or contact ${CONTACT_INFO.email} to be notified when registration opens.`,
  },
  {
    question: 'Can international attendees participate?',
    answer: 'Absolutely! We welcome attendees from across Africa and globally. Visa information and travel guidance will be provided to registered international participants.',
  },
  {
    question: 'What makes this summit different?',
    answer: 'The Eswatini Tech Summit uniquely combines a continental-scale conference with the intimacy of Eswatini\'s emerging tech ecosystem, offering direct access to speakers, investors, and decision-makers. The integration of university hackathon competitions creates a unique pipeline for discovering and supporting the next generation of African tech innovators.',
  },
  {
    question: 'Will certificates be provided?',
    answer: 'Yes, all attendees will receive certificates of participation. Select workshops may offer professional development credits or certifications.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ Schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-primary via-dark-secondary to-dark-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-purple/10 via-transparent to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find answers to common questions about the Eswatini Tech Summit 2026
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center glass-card p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-6">
            Our team is here to help. Reach out to us for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-2 text-accent-cyan hover:text-accent-cyan/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <span className="hidden sm:block text-gray-600">|</span>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-2 text-accent-cyan hover:text-accent-cyan/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
