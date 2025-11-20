// Webhook URLs - Configure these in your environment
export const WEBHOOK_URLS = {
  summitRegistration: import.meta.env.VITE_SUMMIT_REGISTRATION_WEBHOOK || 'https://webhook.site/your-summit-registration-webhook',
  hackathonRegistration: import.meta.env.VITE_HACKATHON_REGISTRATION_WEBHOOK || 'https://webhook.site/your-hackathon-registration-webhook',
  partnership: import.meta.env.VITE_PARTNERSHIP_WEBHOOK || 'https://webhook.site/your-partnership-webhook',
  newsletter: import.meta.env.VITE_NEWSLETTER_WEBHOOK || 'https://webhook.site/your-newsletter-webhook',
  exhibition: import.meta.env.VITE_EXHIBITION_WEBHOOK || 'https://webhook.site/your-exhibition-webhook',
  speakerProposal: import.meta.env.VITE_SPEAKER_PROPOSAL_WEBHOOK || 'https://webhook.site/your-speaker-proposal-webhook',
};

// Social media links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/omevision',
  linkedin: 'https://linkedin.com/company/omevision',
  instagram: 'https://instagram.com/omevision',
  facebook: 'https://facebook.com/omevision',
};

// Event details
export const EVENT_INFO = {
  year: 2026,
  name: 'Eswatini Tech Summit',
  headline: 'Eswatini Tech Summit 2026',
  subheadline: 'The Kingdom of Innovation Hosts Africa\'s Premier Tech Gathering',
  tagline: 'Experience the Perfect Blend of Culture, Innovation & Opportunity in the Heart of Southern Africa',
  dateInfo: 'September 17-19, 2026 | Eswatini | Venue TBD',
  organizer: 'Omevision',
  organizerTagline: 'Building the Future of African Innovation',
  // September 17-19, 2026
  startDate: '2026-09-17',
  endDate: '2026-09-19',
  // Summit stats - realistic for Eswatini context
  stats: {
    expectedAttendees: '500+',
    countries: '10+',
    speakers: '20+',
    exhibitors: '30+',
    prizePool: 'E50K+',
    investments: '$100K+',
    days: '3',
    sessions: '20+',
  },
};

// Contact information
export const CONTACT_INFO = {
  email: 'simphiwe@omevision.com',
  phone: '+268 78422613',
  address: 'Eswatini',
  airport: 'King Mswati III International Airport',
};
