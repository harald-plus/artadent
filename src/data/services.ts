export interface Service {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  category: 'examination' | 'treatment' | 'prosthetics' | 'emergency';
  icon?: string;
}

export const services: Service[] = [
  // Examination & Cleaning
  {
    id: "comprehensive-exam",
    name: "Omfattende undersøkelse",
    description: "Inkluderer 2 røntgenbilder og enkel rens",
    priceRange: "790 - 1.200 kr",
    category: "examination"
  },
  {
    id: "deep-cleaning",
    name: "Dybderens",
    description: "Grundig rensing av tannkjøtt og tenner",
    priceRange: "550 - 1.100 kr per halvtime",
    category: "examination"
  },
  {
    id: "periodontal-treatment",
    name: "Periodontal behandling",
    description: "Behandling av tannkjøttsykdom",
    priceRange: "750 - 1.200 kr",
    category: "treatment"
  },
  {
    id: "student-campaign",
    name: "Studentkampanje",
    description: "Inkluderer 2 røntgenbilder, rens og konsultasjon",
    priceRange: "490 - 690 kr",
    category: "examination"
  },

  // X-Ray Services
  {
    id: "single-xray",
    name: "Enkelt røntgenbilde",
    description: "Standard tannrøntgen",
    priceRange: "150 kr",
    category: "examination"
  },
  {
    id: "panoramic-xray",
    name: "Panorama røntgen (OPG)",
    description: "Oversiktsbilde av hele munnen",
    priceRange: "850 kr",
    category: "examination"
  },

  // Fillings
  {
    id: "single-filling",
    name: "Enflateplombe (kompositt)",
    description: "Standard hvit plombe",
    priceRange: "1.100 kr",
    category: "treatment"
  },
  {
    id: "double-filling",
    name: "Toflateplombe (kompositt)",
    description: "Plombe som dekker to tannflater",
    priceRange: "1.400 kr",
    category: "treatment"
  },
  {
    id: "triple-filling",
    name: "Treflateplombe (kompositt)",
    description: "Plombe som dekker tre tannflater",
    priceRange: "1.800 kr",
    category: "treatment"
  },
  {
    id: "crown-reconstruction",
    name: "Tannkronerekonstruksjon",
    description: "Gjenoppbygging av tannkrone",
    priceRange: "2.000 kr",
    category: "treatment"
  },

  // Extractions
  {
    id: "simple-extraction",
    name: "Enkel tanntrekking",
    description: "Standard fjerning av tann",
    priceRange: "850 - 1.300 kr",
    category: "treatment"
  },
  {
    id: "complex-extraction",
    name: "Kompleks tanntrekking",
    description: "Mer komplisert tannfjerning",
    priceRange: "1.300 - 1.800 kr",
    category: "treatment"
  },
  {
    id: "surgical-extraction",
    name: "Kirurgisk tannfjerning",
    description: "Kirurgisk fjerning av tann",
    priceRange: "2.500 - 4.000 kr",
    category: "treatment"
  },

  // Root Canal Treatments
  {
    id: "root-canal-front",
    name: "Rotbehandling fortann",
    description: "Rotbehandling av fortann",
    priceRange: "4.500 kr",
    category: "treatment"
  },
  {
    id: "root-canal-premolar",
    name: "Rotbehandling premolar",
    description: "Rotbehandling av premolar",
    priceRange: "5.500 kr",
    category: "treatment"
  },
  {
    id: "root-canal-molar",
    name: "Rotbehandling molar",
    description: "Rotbehandling av jeksel",
    priceRange: "6.500 kr",
    category: "treatment"
  },

  // Prosthetics
  {
    id: "metal-ceramic-crown",
    name: "Metall-keramikkrone",
    description: "Krone med metallkjerne og keramikkbelegg",
    priceRange: "5.500 - 6.500 kr",
    category: "prosthetics"
  },
  {
    id: "full-ceramic-crown",
    name: "Helkeramikkrone",
    description: "Krone i ren keramikk",
    priceRange: "6.000 - 6.500 kr",
    category: "prosthetics"
  },
  {
    id: "dental-implant",
    name: "Enkelt tannimplantat",
    description: "Komplett implantatbehandling",
    priceRange: "20.000 - 35.000 kr",
    category: "prosthetics"
  },
  {
    id: "full-denture",
    name: "Helprotese",
    description: "Inkluderer tanntrekking",
    priceRange: "13.000 - 15.000 kr",
    category: "prosthetics"
  },

  // Teeth Whitening
  {
    id: "bleaching-trays",
    name: "Blekeskinner",
    description: "For to kjever, inkludert blekemiddel",
    priceRange: "4.500 kr",
    category: "treatment"
  }
];