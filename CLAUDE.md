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
- **Next.js 15.3.5** with TypeScript and Turbopack
- Server-side rendering for SEO optimization
- Built-in image optimization
- Internationalization support (Norwegian primary, English secondary)

### Styling & UI
- **Tailwind CSS v4.0.0** - Latest version with CSS-based configuration
- **Custom Design System** - Unique, non-template design built specifically for dental practice
- **Lucide React** for icons
- **Image Integration** - Multiple image slots throughout the design

### Content Management
- **TinaCMS** - Git-based headless CMS with visual editing
- **Markdown files** for content management in `content/` directory
- Local editing mode for development, TinaCMS Cloud for production
- No database required - static content approach
- Version control friendly content updates
- Live preview editing at `/admin/index.html`

### Development Tools
- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **TinaCMS** for content management
- **gray-matter** for markdown frontmatter parsing
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

# Run development server (includes TinaCMS)
npm run dev

# Build for production (includes TinaCMS build)
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code with Prettier
npm run format

# Type check
npm run type-check

# TinaCMS development server only
npm run tinacms:dev

# TinaCMS build
npm run tinacms:build

# Access image management
# Navigate to http://localhost:3000/admin/index.html
# Go to "Nettstedinnstillinger" → Edit → "Bilder" section
```

## Content Management Instructions

### TinaCMS Admin Interface
- **Access**: http://localhost:3000/admin/index.html (development)
- **Live Editing**: Visual editor with real-time preview
- **Authentication**: Local mode (development) or TinaCMS Cloud (production)
- **Content Types**: Services, pages, and general site content

### Adding New Services
**Via TinaCMS Admin (Recommended):**
1. Go to `/admin/index.html`
2. Navigate to Services collection
3. Click "Add New" and fill out the form
4. Content auto-saves and syncs to markdown files

**Via Markdown Files (Direct):**
1. Create new file in `content/services/service-name.md`
2. Follow existing service template structure:
```markdown
---
title: "Service Name"
description: "Brief description"
priceRange: "1.000 - 2.000 kr"
category: "examination" # see categories below
icon: "🦷"
order: 10
---

# Service Content
Detailed description here...
```

### Service Categories
Available categories (Norwegian):
- `examination`: "Undersøkelse og rens"
- `xray`: "Røntgen"
- `fillings`: "Fyllinger"
- `extractions`: "Ekstraksjon"
- `endodontics`: "Pulpa og rotbehandling"
- `prosthetics`: "Protetikk inklusive tanntekniker"
- `whitening`: "Bleking"
- `misc`: "Diverse"

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

**Last Updated:** 2025-07-06 (Comprehensive Image Management Implementation)
**Project Status:** COMPLETE WITH COMPREHENSIVE CMS - All pages implemented with TinaCMS content management system and complete image management
**Current Implementation Status:**
- ✅ Homepage (/) - Complete with polished, professional design and optimal UX
- ✅ About page (/om-oss) - Complete with real content, statistics from homepage, professional messaging
- ✅ Treatments page (/behandlinger) - Complete with service catalog, pricing, and categories
- ✅ Solheim clinic page (/solheim) - Complete with location details, services, and accurate travel times
- ✅ Paradis clinic page (/paradis) - Complete with location details, services, and balanced messaging
- ✅ Refund & support page (/refusjon) - Complete with Helfo information and support programs
- ✅ Contact page (/kontakt) - Complete with contact forms and clinic information
- ✅ **COMPREHENSIVE IMAGE MANAGEMENT** - 27 unique image locations with individual CMS control

**Recent Major Improvements (Latest Session - 2025-07-06):**

**Latest Session Updates - Comprehensive Image Management System:**
1. ✅ **27 Unique Image Locations** - Every image across the website can be managed separately
2. ✅ **CMS Image Schema** - Complete TinaCMS schema with organized image fields using emojis
3. ✅ **Real Clinic Photos** - Integrated authentic photos from media/images/ folder
4. ✅ **Page-Specific Images** - Unique images for homepage, Solheim, Paradis, treatments, about, contact
5. ✅ **Service Images** - Individual image capability for each service/treatment
6. ✅ **Smart Fallbacks** - Proper fallback system if images are missing
7. ✅ **Server-Side Architecture** - Fixed fs module errors with proper server component structure
8. ✅ **PageLayout Component** - Centralized layout with CMS integration
9. ✅ **Norwegian Image Labels** - User-friendly Norwegian labels with emoji icons in CMS
10. ✅ **Image Variety** - No more shared placeholder images, each section has unique visuals

**Previous Session - Service Architecture & UX Improvements:**
11. ✅ **Unified Service Data** - Eliminated mixed data sources, all services now use single CMS source
12. ✅ **Norwegian Pricing Format** - Updated to use periods as thousand separators (4.500 kr)
13. ✅ **Service Card Layout** - Price sections pushed to bottom with flexbox for consistent heights
14. ✅ **Professional Titles** - Cleaned service titles, moved details to descriptions
15. ✅ **Category Navigation** - Homepage services link directly to treatment page sections
16. ✅ **Direct Booking** - All service cards now go to contact form with pre-selection
17. ✅ **Contact Form Integration** - Fixed fs module error, all services load from CMS
18. ✅ **Removed Static Data** - Deleted /data/services.ts, clinic pages use CMS data
19. ✅ **Homepage Polish** - Removed emoji clutter from service cards
20. ✅ **Smart Pre-selection** - Clinic pages pre-select both service and location

**Previous Session - CMS Integration & Deployment:**
1. ✅ **TinaCMS Integration** - Complete headless CMS setup with visual editing
2. ✅ **GitHub Deployment** - Successfully pushed to harald-plus/artadent repository
3. ✅ **Vercel Production** - Live deployment with automatic builds
4. ✅ **Complete Service Catalog** - All 42 services from original artadent.no with correct Norwegian categories
5. ✅ **Content Structure** - Organized markdown files in content/services/ directory
6. ✅ **Build Configuration** - Updated scripts for TinaCMS integration

**Website Polish & Content:**
7. ✅ Implemented ALL remaining pages with consistent design philosophy
8. ✅ Norwegian thousand separators for all pricing (1.000 - 2.000 kr format with spaces)
9. ✅ Unified color scheme - removed Solheim vs Paradis color differentiation
10. ✅ Clean typography - removed all blue accent highlights from headings
11. ✅ Optimized line-heights - leading-tight for H1, leading-normal for other headings
12. ✅ Removed redundant subheading tags above pricing sections
13. ✅ Consistent contact page styling for both clinic locations
14. ✅ Professional, classy design with no color distractions in headings
15. ✅ Complete content structure based on original artadent.no website
16. ✅ All navigation links properly connected and functional
17. ✅ Reordered refund table columns (Total pris → Helfo dekker → Du betaler)
18. ✅ Removed emoji icons from pricing cards on behandlinger page
19. ✅ About page: Replaced made-up content with real information and statistics from homepage
20. ✅ Footer: Added "Designet og utviklet av Harald+" credit with Instagram link
21. ✅ ALL phone numbers and emails made clickable throughout the website
22. ✅ Paradis page: Reduced "naturens ro" messaging, more professional tone
23. ✅ Accurate travel times: Solheim <5 min, Paradis 10 min by car from Bergen sentrum
24. ✅ Updated transportation terms to use "kollektiv" for public transport

**Previous Foundation Improvements:**
- ✅ Implemented Epilogue font for all typography
- ✅ Created sticky, glass-morphism navbar with perfect button alignment
- ✅ Redesigned all sections to be sleek and minimalistic while image-rich
- ✅ Modernized footer with light blue gradient background and spacious layout
- ✅ Refined service cards with flat design and relevant emojis
- ✅ Perfect button sizing consistency (2 sizes: normal and smaller)
- ✅ Dynamic copyright year in footer

## Service Data Architecture

### Single Source of Truth
All service data is now managed through **TinaCMS** with markdown files as the storage format:

**Data Flow:**
- **Content Creation**: TinaCMS visual editor (`/admin/index.html`)
- **Storage**: Markdown files in `content/services/` directory
- **Data Loading**: `getServices()` function from `/lib/markdown.ts`
- **Consumption**: All pages use the same CMS data source

**Pages Using Service Data:**
1. **Homepage** (`/`) - Featured services with direct booking links
2. **Treatments** (`/behandlinger`) - Complete catalog organized by categories
3. **Contact Form** (`/kontakt`) - Service dropdown for pre-selection
4. **Solheim Clinic** (`/solheim`) - Featured services with clinic pre-selection
5. **Paradis Clinic** (`/paradis`) - Featured services with clinic pre-selection

**Key Benefits:**
- ✅ **Update once, reflects everywhere** - Change pricing in CMS, updates all pages
- ✅ **No data duplication** - Single authoritative source
- ✅ **Visual editing** - Content team can manage without code
- ✅ **Type safety** - TypeScript interfaces ensure data consistency
- ✅ **Version control** - All content changes tracked in Git

## Comprehensive Image Management System

### 27 Unique Image Locations
Every image across the entire website can now be managed individually through the TinaCMS admin interface:

**Image Architecture:**
- **Total Images**: 27 unique image locations across all pages
- **Management**: Individual CMS fields for each image context
- **Storage**: `/public/images/` directory with organized naming
- **Data Source**: `content/settings/site-settings.md` with comprehensive image mapping
- **Fallbacks**: Smart fallback system prevents broken images

### Image Distribution by Page

**🏠 Homepage (8 unique images):**
- `homepageHero` - Main hero image
- `homepageTeamLarge` - Large team photo in about section
- `clinicInteriorGeneral` - Clinic interior showcase
- `homepageEquipment1` - Modern dental equipment
- `homepageEquipment2` - Comfortable treatment room
- `homepageEquipment3` - Advanced dental technology
- Plus individual service images for each treatment card

**🏢 Solheim Clinic (6 unique images):**
- `solheimHeroInterior` - Hero interior image
- `solheimTreatmentRoom` - Treatment room photo
- `solheimEquipment` - Equipment showcase
- `solheimExterior` - Building exterior
- `solheimReception` - Reception area
- `solheimWaitingRoom` - Waiting room

**🌿 Paradis Clinic (6 unique images):**
- `paradisHeroInterior` - Hero interior image (different from Solheim)
- `paradisTreatmentRoom` - Treatment room photo (different from Solheim)
- `paradisEquipment` - Equipment showcase (different from Solheim)
- `paradisExterior` - Building exterior (different from Solheim)
- `paradisReception` - Reception area (different from Solheim)
- `paradisWaitingRoom` - Waiting room (different from Solheim)

**🦷 Services & Treatments (4 unique images):**
- `emergencyCare` - Emergency dental treatment
- `painRelief` - Pain relief procedures
- `emergencyEquipment` - Emergency equipment
- `treatmentsHero` - Treatments page hero

**📞 Contact & About (3 unique images):**
- `contactHero` - Contact page hero
- `anxietyTreatment` - Anxiety patient care
- `aboutHeroTeam` - About page team photo
- `aboutClinicShowcase` - About page clinic showcase
- `aboutEquipment` - About page equipment

### CMS Image Management Interface

**Access:** `http://localhost:3000/admin/index.html`

**Navigation:**
1. Go to **"Nettstedinnstillinger"** (Site Settings) collection
2. Edit the **"Nettstedinnstillinger"** document
3. Scroll to **"Bilder"** (Images) section

**Image Field Organization:**
```
🏢 Global/Brand Images (5 fields)
🏠 Homepage Specific Images (5 fields)  
🏢 Solheim Clinic Specific Images (6 fields)
🌿 Paradis Clinic Specific Images (6 fields)
🚨 Treatment/Services Images (3 fields)
📞 Contact/About Images (2 fields)
```

**Norwegian Labels with Emojis:**
- Each field has clear Norwegian descriptions
- Emoji icons for easy visual identification
- Context-specific help text for each image

### Technical Implementation

**Component Architecture:**
- `PageLayout` component handles global layout and CMS data fetching
- `getPageImages()` function provides page-specific image access
- Server-side rendering prevents fs module errors
- Smart fallback system with multiple fallback levels

**File Structure:**
```
public/images/
├── main-logo.webp              # Company logo
├── hero-dental.webp            # Primary hero image
├── dental-team.webp            # Main team photo
├── clinic-interior.webp        # General clinic interior
├── treatment-scene.webp        # Treatment procedures
├── young-dentist.webp          # Young dentist portrait
├── female-staff.webp           # Female staff member
├── solheim-exterior.webp       # Solheim building
├── paradis-exterior.webp       # Paradis building
├── equipment-1.webp            # Equipment photo 1
├── equipment-2.webp            # Equipment photo 2
├── reception-area.webp         # Reception areas
├── waiting-room.webp           # Waiting rooms
├── emergency-care.webp         # Emergency treatment
├── anxiety-treatment.webp      # Anxiety care
├── modern-technology.webp      # Modern tech
└── contact-hero.webp           # Contact page hero
```

**Service Images:**
- Each service in `content/services/` can have individual `image` field
- Service cards display service-specific images when available
- Falls back to category-appropriate defaults if no service image set

### Image Management Workflow

**1. Upload New Images:**
- Click any image field in CMS admin
- Choose "Upload" for new files or "Select" from media library
- Images automatically optimized by Next.js Image component

**2. Change Existing Images:**
- Select image field in CMS
- Upload replacement image
- Changes reflect immediately across all instances

**3. Organize by Context:**
- Use emoji categories to find specific image types
- Norwegian labels indicate exactly where image appears
- Preview functionality shows current image

**Key Benefits:**
- ✅ **No More Shared Images** - Every section has unique visuals
- ✅ **Visual Content Management** - Upload and preview instantly  
- ✅ **Automatic Optimization** - Next.js handles resizing and formats
- ✅ **Version Control** - All image references tracked in Git
- ✅ **Type Safety** - TypeScript interfaces prevent errors
- ✅ **Smart Fallbacks** - Site works even with missing images
- ✅ **Norwegian Interface** - User-friendly Norwegian labels
- ✅ **Professional Organization** - Emoji categories for easy navigation

## Current Status Summary

### What's Working
- **COMPLETE WEBSITE WITH COMPREHENSIVE CMS**: All 7 pages fully implemented and functional
- **Production Deployment**: Live on Vercel with automatic builds
- **TinaCMS Integration**: Visual content editing at `/admin/index.html`
- **Unified Service Architecture**: Single CMS source for all 42 services across all pages
- **COMPREHENSIVE IMAGE MANAGEMENT**: 27 unique image locations with individual CMS control
- **Authentic Clinic Photos**: Real photos from Artadent integrated throughout
- **Professional Service Cards**: Clean layout with price sections pushed to bottom
- **Smart Booking Flow**: Direct links to contact form with service/clinic pre-selection
- **Norwegian Pricing**: Proper thousand separators (4.500 kr) throughout
- **Server-Side Architecture**: Proper component structure prevents fs module errors
- Development server running at http://localhost:3000
- All pages: Homepage, About, Treatments, Solheim, Paradis, Refund/Support, Contact
- Professional image integration with page-specific visuals
- Tailwind CSS v4.0.0 with CSS-based configuration and Epilogue font
- Sticky navbar with glass morphism and perfect button alignment
- Modern footer with light blue gradient, dynamic year, and designer credit
- Consistent design language and visual hierarchy across ALL pages
- Markdown-based content management with frontmatter
- Clean, professional typography with optimized line-heights
- ALL contact information (phone numbers and emails) are clickable links
- Accurate travel times and transportation information for both clinics
- Professional messaging without over-the-top nature references
- **Individual Image Control**: Every image location manageable through Norwegian CMS interface
- **Smart Image Fallbacks**: Site works perfectly even with missing images
- **Visual Content Editing**: Upload, preview, and manage images without code

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
- **Pricing**: Norwegian thousand separators (4.500 kr format with periods, spaces around dashes in ranges)
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

## TinaCMS Setup & Configuration

### Environment Variables Required
```bash
# .env.local (for development)
NEXT_PUBLIC_TINA_CLIENT_ID=810eaa01-2d3f-452d-96ce-0c0a39e1a572
TINA_TOKEN=your_token_from_tina_cloud

# Vercel Environment Variables (for production)
NEXT_PUBLIC_TINA_CLIENT_ID=810eaa01-2d3f-452d-96ce-0c0a39e1a572
TINA_TOKEN=your_token_from_tina_cloud
```

### TinaCMS Configuration
- **Config File**: `tina/config.ts`
- **Content Directory**: `content/`
- **Collections**: Services, Pages (extensible)
- **Branch**: main (for production), local filesystem (for development)

### Content Schema
```typescript
// Service schema example
{
  name: "services",
  label: "Services",
  path: "content/services",
  fields: [
    { name: "title", label: "Title", type: "string" },
    { name: "description", label: "Description", type: "string" },
    { name: "priceRange", label: "Price Range", type: "string" },
    { name: "category", label: "Category", type: "string", options: [...] },
    { name: "icon", label: "Emoji Icon", type: "string" },
    { name: "order", label: "Display Order", type: "number" },
    { name: "body", label: "Content", type: "rich-text" }
  ]
}
```

### Service Categories (Norwegian)
Complete list of available service categories:
1. **examination**: "Undersøkelse og rens"
2. **xray**: "Røntgen" 
3. **fillings**: "Fyllinger"
4. **extractions**: "Ekstraksjon"
5. **endodontics**: "Pulpa og rotbehandling"
6. **prosthetics**: "Protetikk inklusive tanntekniker"
7. **whitening**: "Bleking"
8. **misc**: "Diverse"

### Complete Service List (42 services from artadent.no)
All services from the original pricing list are now included with proper Norwegian categorization, pricing in the format "1.000 - 2.000 kr" with spaces, and relevant emoji icons.

### Content Editing Workflow
1. **Development**: Edit via TinaCMS admin at http://localhost:3000/admin/index.html
2. **Local Mode**: Changes save directly to markdown files
3. **Production**: Changes via TinaCMS Cloud sync to GitHub
4. **Build Process**: `tinacms build && next build` includes CMS generation

### Troubleshooting TinaCMS
- **Admin redirect to homepage**: Use `/admin/index.html` not `/admin`
- **Local vs Cloud mode**: Check environment variables and TinaCMS dashboard
- **Build errors**: Ensure `tinacms build` runs before `next build`
- **Content not showing**: Verify markdown file structure and frontmatter