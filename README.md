# Eswatini Tech Summit 2026

A dark, futuristic landing page for the Eswatini Tech Summit 2026, organized by Omevision.

## Features

- Dark futuristic design with cyan/purple/pink accents
- 3D floating geometric shapes with Three.js
- Interactive particle background
- Smooth scroll animations with Framer Motion
- Multi-step registration form with validation
- Partnership inquiry form
- News/blog section (CMS-ready structure)
- Fully responsive mobile-first design
- SEO optimized with meta tags
- Accessibility compliant (ARIA labels, keyboard navigation)

## Tech Stack

- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Particles**: tsParticles
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file from the template:
```bash
cp .env.example .env
```

3. Update the webhook URLs in `.env` with your actual endpoints:
```
VITE_REGISTRATION_WEBHOOK=your-registration-webhook-url
VITE_PARTNERSHIP_WEBHOOK=your-partnership-webhook-url
VITE_NEWSLETTER_WEBHOOK=your-newsletter-webhook-url
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── sections/        # Main page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── HackathonJourney.tsx
│   │   ├── Prizes.tsx
│   │   ├── Partnership.tsx
│   │   ├── News.tsx
│   │   ├── Registration.tsx
│   │   └── Footer.tsx
│   └── ui/              # Reusable UI components
│       ├── ParticleBackground.tsx
│       ├── Scene3D.tsx
│       ├── FloatingGeometry.tsx
│       └── CountdownTimer.tsx
├── lib/
│   ├── config.ts        # App configuration
│   └── schemas.ts       # Zod validation schemas
├── types/
│   └── index.ts         # TypeScript types
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  dark: {
    primary: '#0a0a0f',
    secondary: '#13131a',
    tertiary: '#1a1a24',
  },
  accent: {
    cyan: '#00f5ff',
    purple: '#7b2cbf',
    pink: '#ff006e',
  },
}
```

### Event Configuration

Update `src/lib/config.ts` to change:
- Event details (name, year, dates)
- Contact information
- Social media links
- Webhook URLs

### Content

- **News Items**: Edit `src/components/sections/News.tsx`
- **Prizes**: Edit `src/components/sections/Prizes.tsx`
- **Universities**: Edit `src/components/sections/HackathonJourney.tsx`
- **Partnership Tiers**: Edit `src/components/sections/Partnership.tsx`

## Forms & Webhooks

All forms submit to webhook endpoints configured in your `.env` file:

1. **Registration Form** - Multi-step form collecting:
   - Personal information
   - Team details (optional)
   - Institution & hackathon preference

2. **Partnership Form** - Collects:
   - Company information
   - Partnership tier preference
   - Custom message

3. **Newsletter Signup** - Simple email collection

### Form Data Structure

Registration payload:
```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string",
  "institution": "string",
  "teamName": "string (optional)",
  "teamSize": "number (optional)",
  "hackathonPreference": "string",
  "role": "string"
}
```

Partnership payload:
```json
{
  "companyName": "string",
  "contactPerson": "string",
  "email": "string",
  "phone": "string",
  "tier": "string",
  "message": "string"
}
```

## Performance Optimization

- Lazy loading for 3D components
- Code splitting by route
- Optimized particle count for mobile
- CSS-in-JS with Tailwind for minimal CSS
- Tree shaking for unused code

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Semantic HTML structure

## Future Enhancements

- [ ] CMS integration for news/blog
- [ ] Interactive map for hackathon locations
- [ ] Live countdown to confirmed dates
- [ ] Sponsor logo carousel
- [ ] Photo/video gallery
- [ ] Live event updates
- [ ] Multi-language support

## License

All rights reserved - Omevision

## Contact

For questions or support, contact:
- Email: info@omevision.tech
- Website: [Coming Soon]

---

Built with passion by Omevision - Building the Future of African Innovation
