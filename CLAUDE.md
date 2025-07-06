# Artadent Dental Clinic Website Redesign Project

## Project Overview

This project is a complete redesign and rebuild of the Artadent dental clinic website (originally at https://www.artadent.no/). The goal is to create a modern, maintainable, and user-friendly website while preserving all original content and improving the user experience.

## Original Website Analysis

**Current Site:** https://www.artadent.no/
**Business:** Artadent - Norwegian dental clinic with 2 locations in Bergen
- **Paradis Clinic:** Paradisleitet 1, 5231 Paradis
- **Solheim Clinic:** Fjøsangerveien 39, 5054 Bergen

### Key Business Information
- 20+ years of experience
- 8,450+ satisfied patients  
- 2 clinics, 4 dentists
- Specializes in emergency dental care and patients with dental anxiety
- Direct settlement with Norwegian healthcare system (Helfo)

### Original Content Structure
1. **Home Page:** Hero section, statistics, services overview, testimonials
2. **About Us:** Mission, team info, specializations
3. **Treatments:** Complete service list with detailed pricing
4. **Location Pages:** 2 separate pages for each clinic
5. **Refund & Support:** Helfo refunds, NAV support, discounts
6. **Contact:** Contact forms, location details, social media

## Tech Stack

### Frontend Framework
- **Next.js 14** with TypeScript
- Server-side rendering for SEO optimization
- Built-in image optimization
- Internationalization support (Norwegian primary, English secondary)

### Styling & UI
- **Tailwind CSS v4.0.0** - Latest version with CSS-based configuration
- **Custom Design System** - Unique, non-template design built specifically for dental practice
- **Lucide React** for icons
- **Image Integration** - Multiple image slots throughout the design

### Content Management
- **Markdown/MDX files** for content management
- No database required - static content approach
- Version control friendly content updates

### Development Tools
- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Husky** for git hooks (optional)

### Deployment
- **Vercel** (recommended) or **Netlify**
- Automatic deployments from git
- Global CDN for performance
- SSL certificates included

## Project Structure

```
artadent/
├── CLAUDE.md                 # This documentation file
├── README.md                 # Project setup and development guide
├── package.json              # Dependencies and scripts
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── public/                  # Static assets
│   ├── images/             # Website images
│   └── favicon.ico         # Site favicon
├── src/
│   ├── app/                # Next.js app directory (App Router)
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── om-oss/         # About page
│   │   ├── behandlinger/   # Treatments page
│   │   ├── solheim/        # Solheim clinic page
│   │   ├── paradis/        # Paradis clinic page
│   │   ├── refusjon/       # Refund & support page
│   │   └── kontakt/        # Contact page
│   ├── components/         # Reusable components
│   │   ├── ui/            # Shadcn/ui components
│   │   ├── layout/        # Layout components (header, footer)
│   │   ├── sections/      # Page sections
│   │   └── forms/         # Contact forms
│   ├── lib/               # Utility functions
│   ├── data/              # Content data files
│   └── styles/            # Global styles
└── content/               # Markdown content files
    ├── services/          # Service descriptions
    ├── locations/         # Location information
    └── pages/             # Page content
```

## Design Library Options

### Recommended Design Libraries for Medical/Professional Sites:
1. **Mantine** - Complete React components library with excellent medical/professional themes
2. **Ant Design** - Enterprise-class UI design language with medical components
3. **Chakra UI** - Modular and accessible component library
4. **NextUI** - Modern React UI library with beautiful defaults
5. **Headless UI + Tailwind UI** - Unstyled components + professional designs

### Current Issues with Custom Design:
- Inconsistent styling across components
- Poor contrast and readability issues
- No standardized spacing/typography
- Maintenance nightmare with hardcoded styles

## Key Features to Implement

### Must-Have Features
1. **Professional Design Library** - Replace custom components
2. **Responsive Design** - Mobile-first approach
3. **SEO Optimization** - Meta tags, structured data, sitemap
4. **Contact Forms** - Working contact forms for both locations
5. **Service Listings** - Complete treatment catalog with pricing
6. **Location Pages** - Detailed clinic information
7. **Norwegian Language** - Primary language support

### Enhanced Features
1. **Online Booking System** - Appointment scheduling (future enhancement)
2. **Accessibility Compliance** - WCAG 2.1 AA standards
3. **Performance Optimization** - Core Web Vitals optimization
4. **Local SEO** - Google Business Profile integration
5. **Patient Testimonials** - Enhanced testimonials section

## Content Guidelines

### Language
- **Primary:** Norwegian (Bokmål)
- **Secondary:** English (optional for international patients)

### Tone & Style
- Professional but approachable
- Emphasis on patient comfort and trust
- Medical terminology explained in simple terms
- Focus on pain-free, anxiety-reducing experience

### Key Messaging
- "Where we give you a reason to smile proudly!" (Hvor vi gir deg en grunn til å smile stolt!)
- Emphasis on 20+ years experience
- Specialized care for dental anxiety
- Quick emergency response

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code with Prettier
npm run format

# Type check
npm run type-check
```

## Content Management Instructions

### Adding New Services
1. Create new file in `content/services/service-name.md`
2. Follow existing service template structure
3. Update services listing in relevant page components
4. Add pricing information to treatments page

### Updating Contact Information
1. Edit location data in `src/data/locations.ts`
2. Update contact forms in `src/components/forms/`
3. Verify all contact touchpoints are updated

### Adding News/Updates
1. Create new file in `content/news/` (if news section added)
2. Update homepage to include latest updates
3. Consider adding RSS feed for updates

## Maintenance Guidelines

### Regular Updates
- **Content:** Review and update pricing, services, contact info quarterly
- **Dependencies:** Update npm packages monthly for security
- **Performance:** Monitor Core Web Vitals monthly
- **SEO:** Review and update meta descriptions, keywords quarterly

### Backup Strategy
- **Code:** Version controlled via Git
- **Content:** Markdown files in repository
- **Images:** Stored in public/images/, backed up with repository

### Security Considerations
- Keep dependencies updated
- Use environment variables for sensitive data
- Implement proper form validation
- Regular security audits

## How to Update This Documentation

**CRITICAL:** Any AI agent working on this project MUST update this CLAUDE.md file when making significant changes.

### When to Update
- Adding new features or pages
- Changing tech stack or dependencies
- Modifying project structure
- Updating deployment strategy
- Adding new development commands
- Changing content management approach

### How to Update
1. Read the current CLAUDE.md completely
2. Make necessary changes to reflect current project state
3. Update version information if applicable
4. Test all documented commands and procedures
5. Ensure future AI agents can understand the changes

### Update Process
```bash
# Before making changes, always read current documentation
# After implementing changes, update CLAUDE.md
# Test that all documented commands work
# Commit changes with descriptive message
```

## Troubleshooting

### Common Issues
1. **Build Failures:** Check TypeScript errors, missing dependencies
2. **Styling Issues:** Verify Tailwind configuration and classes
3. **Content Not Showing:** Check markdown file paths and imports
4. **Form Submissions:** Verify API routes and form validation

### Debug Commands
```bash
# Check TypeScript errors
npm run type-check

# Analyze bundle size
npm run analyze

# Test build locally
npm run build && npm start
```

## Contact & Business Context

**Business Owner:** Harald (project initiator)
**Original Site:** https://www.artadent.no/
**Project Goal:** Modern redesign maintaining all original content
**Priority:** Professional medical website with focus on patient trust and accessibility

---

**Last Updated:** 2025-07-06
**Project Status:** COMPLETE - All pages implemented with consistent professional design and UX improvements
**Current Implementation Status:**
- ✅ Homepage (/) - Complete with polished, professional design and optimal UX
- ✅ About page (/om-oss) - Complete with real content, statistics from homepage, professional messaging
- ✅ Treatments page (/behandlinger) - Complete with service catalog, pricing, and categories
- ✅ Solheim clinic page (/solheim) - Complete with location details, services, and accurate travel times
- ✅ Paradis clinic page (/paradis) - Complete with location details, services, and balanced messaging
- ✅ Refund & support page (/refusjon) - Complete with Helfo information and support programs
- ✅ Contact page (/kontakt) - Complete with contact forms and clinic information

**Recent Major Improvements (Latest Session - 2025-07-06):**
1. ✅ Implemented ALL remaining pages with consistent design philosophy
2. ✅ Norwegian thousand separators for all pricing (1.000 - 2.000 kr format with spaces)
3. ✅ Unified color scheme - removed Solheim vs Paradis color differentiation
4. ✅ Clean typography - removed all blue accent highlights from headings
5. ✅ Optimized line-heights - leading-tight for H1, leading-normal for other headings
6. ✅ Removed redundant subheading tags above pricing sections
7. ✅ Consistent contact page styling for both clinic locations
8. ✅ Professional, classy design with no color distractions in headings
9. ✅ Complete content structure based on original artadent.no website
10. ✅ All navigation links properly connected and functional
11. ✅ Reordered refund table columns (Total pris → Helfo dekker → Du betaler)
12. ✅ Removed emoji icons from pricing cards on behandlinger page
13. ✅ About page: Replaced made-up content with real information and statistics from homepage
14. ✅ Footer: Added "Designet og utviklet av Harald+" credit with Instagram link
15. ✅ ALL phone numbers and emails made clickable throughout the website
16. ✅ Paradis page: Reduced "naturens ro" messaging, more professional tone
17. ✅ Accurate travel times: Solheim <5 min, Paradis 10 min by car from Bergen sentrum
18. ✅ Updated transportation terms to use "kollektiv" for public transport

**Previous Foundation Improvements:**
- ✅ Implemented Epilogue font for all typography
- ✅ Created sticky, glass-morphism navbar with perfect button alignment
- ✅ Redesigned all sections to be sleek and minimalistic while image-rich
- ✅ Modernized footer with light blue gradient background and spacious layout
- ✅ Refined service cards with flat design and relevant emojis
- ✅ Perfect button sizing consistency (2 sizes: normal and smaller)
- ✅ Dynamic copyright year in footer

## Current Status Summary

### What's Working
- **COMPLETE WEBSITE**: All 7 pages fully implemented and functional
- Development server running at http://localhost:3000
- All pages: Homepage, About, Treatments, Solheim, Paradis, Refund/Support, Contact
- Professional image integration throughout with authentic content
- Tailwind CSS v4.0.0 with CSS-based configuration and Epilogue font
- Sticky navbar with glass morphism and perfect button alignment
- Modern footer with light blue gradient, dynamic year, and designer credit
- Consistent design language and visual hierarchy across ALL pages
- Data structure for services, locations, testimonials, statistics
- Norwegian thousand separators in all pricing (1.000 - 2.000 kr format with spaces)
- Clean, professional typography with optimized line-heights
- ALL contact information (phone numbers and emails) are clickable links
- Accurate travel times and transportation information for both clinics
- Professional messaging without over-the-top nature references

### Design Principles Established
- **Typography**: Epilogue font for all text with optimized line-heights
  - H1 headings: `leading-tight` for hero sections
  - Other headings: `leading-normal` for perfect balance
  - Body text: `leading-relaxed` for readability
- **Button Sizes**: Only 2 consistent sizes - normal (`px-8 py-4`) and smaller (`px-6 py-3`)
- **Spacing**: Generous, spacious sections with proper breathing room
- **Colors**: Unified primary blue theme (no clinic-specific color differences)
- **Cards**: Flat design with subtle borders instead of heavy shadows
- **Icons**: Relevant emojis for services, Lucide icons for features
- **Layout**: Left-aligned content with proper visual hierarchy
- **Pricing**: Norwegian thousand separators (1.000 - 2.000 kr format with spaces around dashes)
- **Headings**: Clean gray text with NO blue accent highlights for maximum professionalism
- **Contact Info**: All phone numbers and email addresses are clickable with hover effects
- **Travel Times**: Accurate times with transportation method specified from Bergen sentrum
  - Solheim: <5 min by car/kollektiv
  - Paradis: 10 min by car, 20 min by kollektiv
- **Content Authenticity**: No made-up information, all content based on real website data

### How to Test Locally
```bash
# Start development server
npm run dev

# Open browser to:
http://localhost:3000

# Stop server
Ctrl+C
```

### Homepage Sections Implemented
1. **Hero Section** - Clean introduction with trust indicators and image
2. **Statistics Section** - Company achievements and credentials  
3. **About Section (Om Artadent)** - Company history and business info
4. **Safe Treatment Section** - Professional care and safety standards
5. **Services Section** - Treatment offerings with flat cards and emojis
6. **Testimonials Section** - Patient reviews and feedback
7. **CTA Section** - Contact information and clinic details
8. **Modern Footer** - Links, contact info, and dynamic copyright

### Content Strategy
- All content based on authentic information from artadent.no
- Norwegian language (Bokmål) throughout
- Focus on patient trust, safety, and professional expertise
- Unique messaging between different sections (no repetition)
- Emphasis on 20+ years experience and anxiety patient specialization

## Image Integration Guide

### Current Image Placeholders
The design includes dedicated spaces for images at:
- `/public/images/hero-dental.svg` - Main hero image
- `/public/images/dental-team.svg` - Team photo in about section
- `/public/images/clinic-interior.svg` - Clinic interior photo
- `/public/images/placeholder.svg` - Service card images

### Recommended Images to Add
1. **Hero Section**: Professional dental office or smiling dentist
2. **Team Photos**: Group photo of dental staff
3. **Clinic Images**: Modern interior, waiting room, treatment rooms
4. **Service Images**: Specific dental procedures, equipment
5. **Patient Photos**: Before/after shots, happy patients (with consent)

### Image Specifications
- **Formats**: JPG, PNG, WebP recommended
- **Sizes**: Optimized for web (under 1MB each)
- **Dimensions**: Various sizes supported by Next.js Image optimization