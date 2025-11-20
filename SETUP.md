# Quick Setup Guide

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Update webhook URLs in `.env` (optional for development)

## Development

Start the development server:
```bash
npm run dev
```

Visit: http://localhost:5173

## Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Components

### Page Sections (src/components/sections/)
- **Hero.tsx** - Landing hero with 3D scene, particles, countdown
- **About.tsx** - Summit information and statistics
- **HackathonJourney.tsx** - Interactive timeline of hackathon phases
- **Prizes.tsx** - Prize tiers and category awards
- **Partnership.tsx** - Partnership opportunities and inquiry form
- **News.tsx** - Latest updates and newsletter signup
- **Registration.tsx** - Multi-step registration form
- **Footer.tsx** - Footer with links and social media

### UI Components (src/components/ui/)
- **ParticleBackground.tsx** - tsParticles background
- **Scene3D.tsx** - Three.js 3D scene wrapper
- **FloatingGeometry.tsx** - 3D floating shapes
- **CountdownTimer.tsx** - Event countdown

### Configuration (src/lib/)
- **config.ts** - App-wide configuration
- **schemas.ts** - Zod validation schemas

## Key Features

- Full dark theme with cyan/purple/pink accents
- 3D animations with Three.js
- Particle effects with tsParticles
- Scroll animations with Framer Motion
- Form validation with Zod
- Webhook integration for forms
- Fully responsive design
- SEO optimized

## Customization

Edit these files to customize content:
- `/src/lib/config.ts` - Event details, contacts, social links
- `/src/components/sections/News.tsx` - News items
- `/src/components/sections/Prizes.tsx` - Prize amounts
- `/src/components/sections/HackathonJourney.tsx` - Universities list

## Environment Variables

```
VITE_REGISTRATION_WEBHOOK=your-webhook-url
VITE_PARTNERSHIP_WEBHOOK=your-webhook-url
VITE_NEWSLETTER_WEBHOOK=your-webhook-url
```

## Tech Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v3
- Framer Motion
- Three.js + React Three Fiber
- tsParticles
- React Hook Form + Zod
- Lucide Icons
