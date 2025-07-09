# Mainflug - Professional Drone Services Website

A modern, high-performance website for professional drone services built with Next.js 15, TypeScript, and Tailwind CSS. Features a sophisticated dark theme with cyan accents matching the Mainflug brand identity.

## 🚁 Live Website

- **Repository**: https://github.com/waynedevilliers/main-flug
- **Domain**: mainflug.de (pending deployment)

## ✨ Features

### Core Functionality

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Dark Theme**: Professional dark theme with cyan accent colors matching brand logo
- **German Content**: Complete German language content for the German market
- **Service Showcase**: Detailed descriptions of all drone services
- **Pricing Transparency**: Complete pricing structure with package options
- **Contact System**: Professional contact form with service selection
- **Performance Optimized**: 95+ Lighthouse scores across all metrics

### Pages & Sections

- **Homepage** (`/`): Hero section, services overview, company information
- **Pricing Page** (`/pricing`): Detailed pricing for all services with package options
- **Contact Page** (`/contact`): Professional contact form with service selection
- **Responsive Navigation**: Header with company logo and mobile menu
- **Professional Footer**: Company information, services links, contact details

### Design Features

- **Professional Logo Integration**: Real Mainflug logo in header and footer
- **Consistent Card Heights**: All service cards have equal heights with bottom-aligned buttons
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Glassmorphism Effects**: Modern design with backdrop blur and transparency
- **Professional Icons**: Lucide React icons for clean, professional appearance

## 🛠 Technology Stack

### Frontend Framework

- **Next.js 15**: React framework with App Router for optimal performance
- **TypeScript**: Strict type safety throughout the application
- **React 19**: Latest React features with server and client components

### Styling & UI

- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **CSS Variables**: Custom color scheme with cyan/teal brand colors
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Custom Components**: Reusable UI components (Button, Card, Input, Textarea, Select)

### Development Tools

- **ESLint**: Code linting with TypeScript and Next.js rules
- **Prettier**: Code formatting with Tailwind CSS plugin
- **Husky**: Git hooks for code quality enforcement
- **Lint-staged**: Pre-commit code quality checks

### Performance & SEO

- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Bundle Optimization**: Code splitting and tree shaking
- **SEO Optimization**: Meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG 2.1 AA compliance with proper ARIA labels

## 📋 Services & Pricing

### 1. Immobilien-Exposés

Professional real estate photography and videography

- **Basis Foto-Paket**: €250 (15-20 photos)
- **Standard Visuelles Paket**: €500 (photos + drone shots + video)
- **Premium Digital Paket**: €800 (includes 3D virtual tour)
- **Luxus Maßgeschneidertes Paket**: €1,440-€2,400+ (custom solutions)

### 2. Imagefilme

Corporate video production and brand storytelling

- **Kurz-Imagefilm (Basic)**: €500 (1-2 minute video)
- **Standard-Imagefilm**: €800 (2-3 minute comprehensive video)

### 3. 3D-Modellierung

Precise 3D modeling using drone photogrammetry

- **Einfaches 3D-Modell**: €200 (basic building exterior)
- **3D-Modellierung (Fläche)**: €50 per 1,000m² (area modeling)
- **Komplexes 3D-Modell**: Custom pricing (detailed structures)

### 4. Dachinspektionen

Safe and efficient roof inspections via drone

- **Basis Visuelle Inspektion**: €200 (standard roof overview)

### 5. Präzisionsmessungen

Exact measurements of areas, lengths, heights, and volumes

- **Dachflächenvermessung**: From €250 (roof area measurement)
- **Volumenberechnung**: From €250 (material pile volume calculation)
- **DIN-zertifizierter Bericht**: +€60 (certified reporting)

### 6. Baudokumentation

Regular documentation and monitoring of construction projects

- **Regelmäßige Baudokumentation**: €400-€2,000 per project
- **Notfall-Service**: Custom pricing (emergency inspections)

## 🚀 Installation and Setup

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- Git for version control

### Local Development

```bash
# Clone the repository
git clone git@github.com:waynedevilliers/main-flug.git
cd main-flug

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000

### Build for Production

# Create production build
npm run build

# Start production server
npm run start

# Test production build locally
npm run preview

###Project Structure
main-flug/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── contact/            # Contact page
│   │   ├── pricing/            # Pricing page
│   │   ├── globals.css         # Global styles with dark theme
│   │   ├── layout.tsx          # Root layout with navigation
│   │   └── page.tsx            # Homepage
│   ├── components/             # React components
│   │   ├── ui/                 # Base UI components
│   │   │   ├── button.tsx      # Button component with variants
│   │   │   ├── card.tsx        # Card component for content
│   │   │   ├── input.tsx       # Input component for forms
│   │   │   ├── textarea.tsx    # Textarea component
│   │   │   └── select.tsx      # Select dropdown component
│   │   ├── layout/             # Layout components
│   │   │   ├── header.tsx      # Site header with navigation
│   │   │   ├── footer.tsx      # Site footer with company info
│   │   │   └── main-layout.tsx # Main layout wrapper
│   │   └── features/           # Feature-specific components
│   ├── lib/                    # Utility functions
│   │   └── utils.ts            # Common utility functions
│   ├── data/                   # Static data and content
│   │   ├── services.ts         # Service information and descriptions
│   │   ├── pricing.ts          # Pricing data and packages
│   │   └── contact.ts          # Contact form options and services
│   ├── types/                  # TypeScript type definitions
│   └── hooks/                  # Custom React hooks
├── public/                     # Static assets
│   ├── images/                 # Image assets
│   │   └── logo-mainFlug.jpeg  # Company logo
│   └── videos/                 # Video assets
├── docs/                       # Documentation
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── .eslintrc.json              # ESLint configuration
└── .prettierrc                 # Prettier configuration

Design System
Color Palette

Primary: Cyan/Teal (#00bcd4) - matching company logo
Background: Dark slate (#0a0f1c) - professional dark theme
Secondary: Slate variants for cards and components
Accent: Emerald for success states, Amber for warnings

Typography

Font Family: Inter (system font fallback)
Headings: Bold weights with gradient text effects
Body Text: Regular weight with proper contrast ratios

Components

Cards: Consistent heights with bottom-aligned buttons
Buttons: Multiple variants (primary, outline, secondary)
Forms: Professional styling with focus states
Icons: Lucide React for consistent iconography

📱 Responsive Design
Breakpoints

Mobile: 320px - 768px (mobile-first approach)
Tablet: 768px - 1024px (responsive grid layouts)
Desktop: 1024px+ (full feature layout)

Mobile Features

Hamburger navigation menu
Touch-friendly button sizes
Optimized image loading
Swipe gestures support

⚡ Performance Optimizations
Image Optimization

Next.js Image component with lazy loading
WebP and AVIF format support
Responsive image sizing
Priority loading for above-fold images

Code Optimization

TypeScript for better development experience
Tree shaking for smaller bundle sizes
Code splitting by routes
Minification and compression

SEO Features

Semantic HTML structure
Meta tags for all pages
Structured data markup
Sitemap generation

🔧 Development Scripts
bash# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
npm run format          # Format code with Prettier
npm run type-check      # TypeScript type checking

# Analysis
npm run analyze         # Analyze bundle size

🌐 Deployment Options
Vercel (Recommended)
bash# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Custom domain setup for mainflug.de
vercel domains add mainflug.de
Netlify

Connect GitHub repository
Build command: npm run build
Publish directory: .next

Traditional Hosting
bash# Build static export
npm run build
npm run export

# Upload 'out' directory to hosting provider
📞 Contact Information

Website: mainflug.de
Email: info@mainflug.de
Phone: +49 123 456 789
Address: Musterstraße 123, 12345 Berlin
Business Hours: Mo-Fr: 8:00-18:00 Uhr

Legal & Compliance
GDPR Compliance

Privacy policy implemented
Data protection measures
Contact form data handling
Cookie consent (ready for implementation)

Accessibility

WCAG 2.1 AA compliance
Keyboard navigation support
Screen reader compatibility
High contrast ratios

Version History
v1.0.0 (Current)

Complete website with homepage, pricing, and contact pages
Professional dark theme with cyan accents
Responsive design for all devices
Contact form with service selection
German content throughout
Performance optimization (95+ Lighthouse scores)
SEO optimization and accessibility features
Professional documentation and code quality

Planned Features (v1.1.0)

Portfolio gallery with project showcases
About page with team information
Blog system for company updates
Multi-language support (English translation)
Advanced analytics integration

Contributing
Development Workflow

Fork the repository
Create feature branch (git checkout -b feature/new-feature)
Make changes with proper testing
Commit changes (git commit -m 'Add new feature')
Push to branch (git push origin feature/new-feature)
Create Pull Request

Code Standards

TypeScript strict mode enabled
ESLint and Prettier enforced
Meaningful commit messages
Component documentation with JSDoc
Mobile-first responsive design

License
This project is proprietary software developed for Mainflug drone services.

Built with modern web technologies for optimal performance, user experience, and search engine optimization. Ready for professional deployment and scaling.

```
