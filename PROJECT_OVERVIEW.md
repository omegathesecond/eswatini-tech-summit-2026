# Eswatini Tech Summit 2026 - Project Overview

## Project Summary

A dark, futuristic landing page for the Eswatini Tech Summit 2026, organized by Omevision. The site features heavy visual effects including 3D graphics, particle animations, and advanced scroll effects to create an impressive, modern experience.

**Live Dev Server**: http://localhost:5176 (when running `npm run dev`)

## Completed Features

### 1. Hero Section
- Full-screen dark gradient background
- Animated 3D floating geometric shapes (Three.js)
- Interactive particle network (tsParticles)
- Countdown timer to event (placeholder dates)
- Omevision branding
- Dual CTA buttons (Register + Partner)
- Smooth scroll indicator

**File**: `/src/components/sections/Hero.tsx`

### 2. About Section
- Mission statement and statistics
- Animated stat cards (500+ participants, E50K+ prizes, 10+ universities)
- Feature highlights grid
- Video/image showcase placeholder
- Scroll-triggered animations

**File**: `/src/components/sections/About.tsx`

### 3. Hackathon Journey
- Three-phase interactive timeline:
  - Phase 1: University hackathons
  - Phase 2: Regional competitions
  - Phase 3: Super Hackathon Finals
- University listings
- Date placeholders (TBD 2026)
- Interactive map visualization placeholder
- Registration CTAs

**File**: `/src/components/sections/HackathonJourney.tsx`

### 4. Prizes & Rewards
- E50,000+ total prize pool highlight
- Main prizes (1st: E25K, 2nd: E15K, 3rd: E10K)
- Category awards (Best Innovation, Best Tech, Best Presentation)
- Animated prize cards with glow effects
- Sponsor showcase placeholder

**File**: `/src/components/sections/Prizes.tsx`

### 5. Partnership Opportunities
- Partnership benefits showcase
- Four partnership tiers (Platinum, Gold, Silver, Bronze)
- Partnership inquiry form with validation
- Webhook integration
- Form submission states (loading, success, error)

**File**: `/src/components/sections/Partnership.tsx`

### 6. News & Updates
- Latest announcements section
- Card-based news layout
- Category badges (Announcement, Update, Partnership)
- Newsletter signup form
- CMS-ready structure

**File**: `/src/components/sections/News.tsx`

### 7. Registration Section
- Multi-step form (3 steps):
  - Step 1: Personal information
  - Step 2: Team details (optional)
  - Step 3: Institution & preferences
- Progress indicator
- Form validation with Zod
- Webhook submission
- Success/error handling

**File**: `/src/components/sections/Registration.tsx`

### 8. Footer
- Omevision branding
- Quick links navigation
- Contact information
- Social media links (Twitter, LinkedIn, Instagram, Facebook)
- Newsletter signup link
- Copyright and legal links

**File**: `/src/components/sections/Footer.tsx`

## Technical Architecture

### UI Components

**ParticleBackground** (`/src/components/ui/ParticleBackground.tsx`)
- Interactive particle network
- Mouse hover/click interactions
- 80 particles with cyan/purple/pink colors
- Optimized for performance

**Scene3D** (`/src/components/ui/Scene3D.tsx`)
- Three.js canvas wrapper
- 4 floating geometric shapes (octahedron, torus, sphere, box)
- Auto-rotating camera
- Ambient and point lighting

**FloatingGeometry** (`/src/components/ui/FloatingGeometry.tsx`)
- Reusable 3D shape component
- Distortion material effects
- Animated rotation and floating
- Configurable geometry types

**CountdownTimer** (`/src/components/ui/CountdownTimer.tsx`)
- Live countdown to event
- Days, hours, minutes, seconds
- Glass morphism cards
- Gradient text

### Configuration & Types

**config.ts** (`/src/lib/config.ts`)
```typescript
- WEBHOOK_URLS (registration, partnership, newsletter)
- SOCIAL_LINKS (Twitter, LinkedIn, Instagram, Facebook)
- EVENT_INFO (year, name, tagline, organizer)
- CONTACT_INFO (email, phone, address)
```

**schemas.ts** (`/src/lib/schemas.ts`)
- Zod validation schemas for all forms
- registrationSchema
- partnershipSchema
- newsletterSchema

**types/index.ts** (`/src/types/index.ts`)
- TypeScript interfaces for all data structures

## Styling & Design

### Color Palette
- **Dark backgrounds**: #0a0a0f, #13131a, #1a1a24
- **Accent colors**:
  - Cyan: #00f5ff
  - Purple: #7b2cbf
  - Pink: #ff006e

### Typography
- **Headings**: Space Grotesk (Google Fonts)
- **Body**: Inter / DM Sans (Google Fonts)
- **Monospace**: JetBrains Mono (Google Fonts)

### Custom Classes (Tailwind)
- `.gradient-text` - Gradient text effect
- `.glass-card` - Glassmorphism cards
- `.glow-border` - Neon border glow
- `.btn-primary` - Primary gradient button
- `.btn-secondary` - Secondary outline button
- `.neon-glow` - Text glow effect

### Animations
- Scroll-triggered fade/slide ins (Framer Motion)
- Hover effects (scale, glow, 3D tilt)
- Continuous particle animation
- Floating 3D shapes
- Custom keyframes (float, glow, spin-slow)

## Form Integration

All forms submit to webhook endpoints configured in `.env`:

### Registration Form
**Endpoint**: `VITE_REGISTRATION_WEBHOOK`

**Payload**:
```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string",
  "institution": "string",
  "teamName": "string?",
  "teamSize": "number?",
  "hackathonPreference": "string",
  "role": "string"
}
```

### Partnership Form
**Endpoint**: `VITE_PARTNERSHIP_WEBHOOK`

**Payload**:
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

### Newsletter
**Endpoint**: `VITE_NEWSLETTER_WEBHOOK`

**Payload**:
```json
{
  "email": "string"
}
```

## SEO & Accessibility

### Meta Tags (index.html)
- Title, description, keywords
- Open Graph tags (Facebook)
- Twitter Card tags
- Theme color

### Accessibility
- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Color contrast WCAG AA compliant
- Focus states on all interactive elements

## Performance

### Optimizations
- Lazy loading for 3D components (Suspense)
- Code splitting
- Optimized particle count (80 particles)
- Tree shaking with Vite
- CSS minification
- Asset optimization

### Build Output
- Main bundle: ~1.5MB (426KB gzipped)
- CSS: ~26KB (5KB gzipped)
- Performance: 60fps target for animations

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Customization Guide

### Update Event Details
Edit `/src/lib/config.ts`:
- Change event dates (when confirmed)
- Update contact information
- Modify social media links

### Modify Content
- **News items**: `/src/components/sections/News.tsx` (line 15)
- **Prize amounts**: `/src/components/sections/Prizes.tsx` (line 13)
- **Universities**: `/src/components/sections/HackathonJourney.tsx` (line 13)
- **Partnership tiers**: `/src/components/sections/Partnership.tsx` (line 29)

### Adjust Colors
Edit `/tailwind.config.js`:
```javascript
colors: {
  dark: { primary, secondary, tertiary },
  accent: { cyan, purple, pink }
}
```

### Configure Webhooks
1. Copy `.env.example` to `.env`
2. Update webhook URLs with your endpoints
3. Restart dev server

## Future Enhancements

Planned features for future iterations:
- [ ] CMS integration (Strapi/Contentful)
- [ ] Interactive map with university locations
- [ ] Live event countdown (real dates)
- [ ] Sponsor logo carousel
- [ ] Photo/video gallery
- [ ] Live updates feed
- [ ] Multi-language support (Siswati/English)
- [ ] Dark/light mode toggle
- [ ] Sponsor dashboard

## File Structure

```
/
├── src/
│   ├── components/
│   │   ├── sections/          # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── HackathonJourney.tsx
│   │   │   ├── Prizes.tsx
│   │   │   ├── Partnership.tsx
│   │   │   ├── News.tsx
│   │   │   ├── Registration.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/                # Reusable UI components
│   │       ├── ParticleBackground.tsx
│   │       ├── Scene3D.tsx
│   │       ├── FloatingGeometry.tsx
│   │       └── CountdownTimer.tsx
│   ├── lib/
│   │   ├── config.ts          # App configuration
│   │   └── schemas.ts         # Zod schemas
│   ├── types/
│   │   └── index.ts           # TypeScript types
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.ts             # Vite configuration
├── package.json               # Dependencies
├── .env.example               # Environment template
├── README.md                  # Full documentation
├── SETUP.md                   # Quick setup guide
└── PROJECT_OVERVIEW.md        # This file
```

## Support & Contact

For questions or issues:
- **Email**: info@omevision.tech
- **Organization**: Omevision
- **Tagline**: Building the Future of African Innovation

---

**Built with**: Vite + React 19 + TypeScript + Tailwind CSS + Three.js + Framer Motion

**License**: All rights reserved - Omevision 2025
