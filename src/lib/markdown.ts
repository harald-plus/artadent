import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Service {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  category: 'examination' | 'xray' | 'fillings' | 'extractions' | 'endodontics' | 'prosthetics' | 'whitening' | 'misc';
  icon?: string;
  image?: string;
  order?: number;
  content: string;
}

export interface Location {
  id: string;
  title: string;
  address: string;
  postalCode: string;
  city: string;
  phone: string;
  email: string;
  openingHours: {
    weekdays: string;
    saturday?: string;
    sunday?: string;
  };
  content: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  rating: number;
  date?: string;
  content: string;
}

export interface SiteSettings {
  title: string;
  images: {
    // Global/Brand Images
    logo?: string;
    heroImage?: string;
    teamPhotoMain?: string;
    clinicInteriorGeneral?: string;
    placeholderGeneral?: string;
    
    // Homepage Specific Images
    homepageHero?: string;
    homepageTeamLarge?: string;
    homepageEquipment1?: string;
    homepageEquipment2?: string;
    homepageEquipment3?: string;
    
    // Solheim Clinic Specific Images
    solheimHeroInterior?: string;
    solheimTreatmentRoom?: string;
    solheimEquipment?: string;
    solheimExterior?: string;
    solheimReception?: string;
    solheimWaitingRoom?: string;
    
    // Paradis Clinic Specific Images
    paradisHeroInterior?: string;
    paradisTreatmentRoom?: string;
    paradisEquipment?: string;
    paradisExterior?: string;
    paradisReception?: string;
    paradisWaitingRoom?: string;
    
    // Treatment/Services Images
    emergencyCare?: string;
    painRelief?: string;
    emergencyEquipment?: string;
    
    // Contact/About Images
    contactHero?: string;
    anxietyTreatment?: string;
    aboutHeroTeam?: string;
    aboutClinicShowcase?: string;
    aboutEquipment?: string;
    
    // Treatments Page Specific
    treatmentsHero?: string;
  };
  content: string;
}

export function getServices(): Service[] {
  const servicesDirectory = path.join(contentDirectory, 'services');
  
  if (!fs.existsSync(servicesDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(servicesDirectory);
  
  const services = filenames
    .filter(name => name.endsWith('.md'))
    .map(name => {
      const fullPath = path.join(servicesDirectory, name);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        id: name.replace(/\.md$/, ''),
        title: data.title,
        description: data.description,
        priceRange: data.priceRange,
        category: data.category,
        icon: data.icon,
        image: data.image,
        order: data.order || 999,
        content,
      };
    })
    .sort((a, b) => a.order - b.order);

  return services;
}

export function getLocations(): Location[] {
  const locationsDirectory = path.join(contentDirectory, 'locations');
  
  if (!fs.existsSync(locationsDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(locationsDirectory);
  
  const locations = filenames
    .filter(name => name.endsWith('.md'))
    .map(name => {
      const fullPath = path.join(locationsDirectory, name);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        id: data.id,
        title: data.title,
        address: data.address,
        postalCode: data.postalCode,
        city: data.city,
        phone: data.phone,
        email: data.email,
        openingHours: data.openingHours,
        content,
      };
    });

  return locations;
}

export function getTestimonials(): Testimonial[] {
  const testimonialsDirectory = path.join(contentDirectory, 'testimonials');
  
  if (!fs.existsSync(testimonialsDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(testimonialsDirectory);
  
  const testimonials = filenames
    .filter(name => name.endsWith('.md'))
    .map(name => {
      const fullPath = path.join(testimonialsDirectory, name);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        id: name.replace(/\.md$/, ''),
        name: data.name,
        location: data.location,
        rating: data.rating,
        date: data.date,
        content,
      };
    });

  return testimonials;
}

export function getServiceById(id: string): Service | null {
  const services = getServices();
  return services.find(service => service.id === id) || null;
}

export function getLocationById(id: string): Location | null {
  const locations = getLocations();
  return locations.find(location => location.id === id) || null;
}

export function getSiteSettings(): SiteSettings {
  const settingsPath = path.join(contentDirectory, 'settings', 'site-settings.md');
  
  if (!fs.existsSync(settingsPath)) {
    // Return default settings if file doesn't exist
    return {
      title: "Nettstedinnstillinger",
      images: {
        logo: "/images/main-logo.webp",
        heroImage: "/images/hero-dental.webp",
        teamPhotoMain: "/images/dental-team.webp",
        clinicInteriorGeneral: "/images/clinic-interior.webp",
        placeholderGeneral: "/images/placeholder.webp",
        homepageHero: "/images/hero-dental.webp",
      },
      content: "",
    };
  }

  const fileContents = fs.readFileSync(settingsPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    title: data.title,
    images: data.images || {},
    content,
  };
}