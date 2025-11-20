import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';

export default function News() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Sample news items - In production, this would come from a CMS
  const newsItems = [
    {
      id: '1',
      title: 'Eswatini Tech Summit 2026 Officially Announced',
      excerpt: 'We are thrilled to announce the inaugural Eswatini Tech Summit, bringing together the brightest tech minds across the nation.',
      date: '2025-01-15',
      category: 'Announcement',
      image: null,
    },
    {
      id: '2',
      title: 'University Hackathon Dates Coming Soon',
      excerpt: 'Stay tuned for the announcement of hackathon dates at participating universities across Eswatini.',
      date: '2025-01-10',
      category: 'Update',
      image: null,
    },
    {
      id: '3',
      title: 'Meet Our First Partner: Coming Soon',
      excerpt: 'We are excited to introduce our partnership program. Be among the first to support innovation in Eswatini.',
      date: '2025-01-05',
      category: 'Partnership',
      image: null,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Announcement':
        return 'bg-accent-cyan';
      case 'Update':
        return 'bg-accent-purple';
      case 'Partnership':
        return 'bg-accent-pink';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="news" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-secondary via-dark-primary to-dark-secondary" />

      <div ref={ref} className="relative z-10 section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Latest Updates
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed about the latest news and announcements
          </p>
        </motion.div>

        {/* News grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="glass-card overflow-hidden hover:shadow-[0_0_40px_rgba(0,245,255,0.2)] transition-all duration-300 group cursor-pointer"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-dark-tertiary to-dark-secondary flex items-center justify-center overflow-hidden">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <Newspaper className="w-16 h-16 text-accent-cyan opacity-50 group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`${getCategoryColor(item.category)} px-3 py-1 rounded-full text-xs font-semibold text-white`}>
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={item.date}>
                      {new Date(item.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Read more link */}
                <div className="flex items-center gap-2 text-accent-cyan group-hover:gap-4 transition-all">
                  <span className="text-sm font-semibold">Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <button className="btn-secondary">
            View All Updates
          </button>
        </motion.div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 glass-card p-8 md:p-12 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-3xl font-bold gradient-text mb-4">
            Stay in the Loop
          </h3>
          <p className="text-gray-300 mb-6">
            Subscribe to our newsletter for the latest updates, announcements, and exclusive content
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Newsletter signup logic would go here
              alert('Newsletter signup will be implemented with webhook');
            }}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-dark-tertiary border border-gray-700 rounded-lg focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors text-white"
              required
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
