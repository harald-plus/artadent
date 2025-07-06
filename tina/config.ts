import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io  
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "services",
        label: "Tjenester",
        path: "content/services",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Navn på tjeneste",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Kort beskrivelse",
            required: true,
          },
          {
            type: "string",
            name: "priceRange",
            label: "Prisområde",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Kategori",
            required: true,
            options: [
              { value: "examination", label: "Undersøkelse og rens" },
              { value: "xray", label: "Røntgen" },
              { value: "fillings", label: "Fyllinger" },
              { value: "extractions", label: "Ekstraksjon" },
              { value: "endodontics", label: "Pulpa og rotbehandling" },
              { value: "prosthetics", label: "Protetikk inklusive tanntekniker" },
              { value: "whitening", label: "Bleking" },
              { value: "misc", label: "Diverse" },
            ],
          },
          {
            type: "string",
            name: "icon",
            label: "Ikon (emoji)",
          },
          {
            type: "image",
            name: "image",
            label: "Tjenestebilde",
            description: "Valgfritt bilde for denne tjenesten",
          },
          {
            type: "number",
            name: "order",
            label: "Rekkefølge",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Innhold",
            isBody: true,
          },
        ],
      },
      {
        name: "pages",
        label: "Sider",
        path: "content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Sidetittel",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Meta beskrivelse",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Innhold",
            isBody: true,
          },
        ],
      },
      {
        name: "locations",
        label: "Klinikker",
        path: "content/locations",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Klinikknavn",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "address",
            label: "Adresse",
            required: true,
          },
          {
            type: "string",
            name: "postalCode",
            label: "Postnummer",
            required: true,
          },
          {
            type: "string",
            name: "city",
            label: "By",
            required: true,
          },
          {
            type: "string",
            name: "phone",
            label: "Telefon",
            required: true,
          },
          {
            type: "string",
            name: "email",
            label: "E-post",
            required: true,
          },
          {
            type: "object",
            name: "openingHours",
            label: "Åpningstider",
            fields: [
              {
                type: "string",
                name: "weekdays",
                label: "Hverdager",
              },
              {
                type: "string",
                name: "saturday",
                label: "Lørdag",
              },
              {
                type: "string",
                name: "sunday",
                label: "Søndag",
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Beskrivelse",
            isBody: true,
          },
        ],
      },
      {
        name: "testimonials",
        label: "Anmeldelser",
        path: "content/testimonials",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Navn",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "location",
            label: "Sted/Klinikk",
          },
          {
            type: "number",
            name: "rating",
            label: "Vurdering (1-5)",
            required: true,
          },
          {
            type: "string",
            name: "date",
            label: "Dato",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Anmeldelse",
            isBody: true,
          },
        ],
      },
      {
        name: "siteSettings",
        label: "Nettstedinnstillinger",
        path: "content/settings",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "site-settings",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Innstillinger",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "images",
            label: "Bilder",
            fields: [
              // Global/Brand Images
              {
                type: "image",
                name: "logo",
                label: "🏢 Logo (navbar og footer)",
                description: "Hovedlogo for nettstedet",
              },
              {
                type: "image",
                name: "heroImage",
                label: "🎯 Hovedbilde (generisk)",
                description: "Generisk hero-bilde som fallback",
              },
              {
                type: "image",
                name: "teamPhotoMain",
                label: "👥 Hovedteambilde",
                description: "Primær bilde av tannlegeteamet",
              },
              {
                type: "image",
                name: "clinicInteriorGeneral",
                label: "🏥 Generisk klinikk interiør",
                description: "Generisk bilde av behandlingsrom",
              },
              {
                type: "image",
                name: "placeholderGeneral",
                label: "📷 Generisk placeholder",
                description: "Fallback-bilde for manglende bilder",
              },
              
              // Homepage Specific Images
              {
                type: "image",
                name: "homepageHero",
                label: "🏠 Forside: Hero-bilde",
                description: "Stort bilde på forsiden",
              },
              {
                type: "image",
                name: "homepageTeamLarge",
                label: "🏠 Forside: Stort teambilde (om-seksjon)",
                description: "Teambilde i om Artadent-seksjonen",
              },
              {
                type: "image",
                name: "homepageEquipment1",
                label: "🏠 Forside: Moderne utstyr",
                description: "Moderne tannlegeutstyr",
              },
              {
                type: "image",
                name: "homepageEquipment2",
                label: "🏠 Forside: Komfortabelt behandlingsrom",
                description: "Komfortabelt og romslig behandlingsrom",
              },
              {
                type: "image",
                name: "homepageEquipment3",
                label: "🏠 Forside: Avansert teknologi",
                description: "Avansert tannlegeteknologi",
              },
              
              // Solheim Clinic Specific Images
              {
                type: "image",
                name: "solheimHeroInterior",
                label: "🏢 Solheim: Hero interiør",
                description: "Hero-bilde av Solheim klinikk interiør",
              },
              {
                type: "image",
                name: "solheimTreatmentRoom",
                label: "🏢 Solheim: Behandlingsrom",
                description: "Behandlingsrom på Solheim",
              },
              {
                type: "image",
                name: "solheimEquipment",
                label: "🏢 Solheim: Utstyr",
                description: "Utstyr på Solheim klinikk",
              },
              {
                type: "image",
                name: "solheimExterior",
                label: "🏢 Solheim: Eksteriør",
                description: "Utvendig bilde av Solheim klinikk",
              },
              {
                type: "image",
                name: "solheimReception",
                label: "🏢 Solheim: Resepsjon",
                description: "Resepsjonsområde på Solheim",
              },
              {
                type: "image",
                name: "solheimWaitingRoom",
                label: "🏢 Solheim: Venterom",
                description: "Venterom på Solheim klinikk",
              },
              
              // Paradis Clinic Specific Images
              {
                type: "image",
                name: "paradisHeroInterior",
                label: "🌿 Paradis: Hero interiør",
                description: "Hero-bilde av Paradis klinikk interiør",
              },
              {
                type: "image",
                name: "paradisTreatmentRoom",
                label: "🌿 Paradis: Behandlingsrom",
                description: "Behandlingsrom på Paradis",
              },
              {
                type: "image",
                name: "paradisEquipment",
                label: "🌿 Paradis: Utstyr",
                description: "Utstyr på Paradis klinikk",
              },
              {
                type: "image",
                name: "paradisExterior",
                label: "🌿 Paradis: Eksteriør",
                description: "Utvendig bilde av Paradis klinikk",
              },
              {
                type: "image",
                name: "paradisReception",
                label: "🌿 Paradis: Resepsjon",
                description: "Resepsjonsområde på Paradis",
              },
              {
                type: "image",
                name: "paradisWaitingRoom",
                label: "🌿 Paradis: Venterom",
                description: "Venterom på Paradis klinikk",
              },
              
              // Treatment/Services Images
              {
                type: "image",
                name: "emergencyCare",
                label: "🚨 Akuttbehandling",
                description: "Akutt tannlegebehandling",
              },
              {
                type: "image",
                name: "painRelief",
                label: "💊 Smertelindring",
                description: "Smertelindrende behandling",
              },
              {
                type: "image",
                name: "emergencyEquipment",
                label: "🚨 Akuttutstyr",
                description: "Utstyr for akuttbehandling",
              },
              
              // Contact/About Images
              {
                type: "image",
                name: "contactHero",
                label: "📞 Kontakt: Hero-bilde",
                description: "Hero-bilde for kontaktside",
              },
              {
                type: "image",
                name: "anxietyTreatment",
                label: "😌 Angstpasienter",
                description: "Behandling av angstpasienter",
              },
              
              // About Page Specific
              {
                type: "image",
                name: "aboutHeroTeam",
                label: "ℹ️ Om oss: Hero teambilde",
                description: "Teambilde for om oss-siden",
              },
              {
                type: "image",
                name: "aboutClinicShowcase",
                label: "ℹ️ Om oss: Klinikk showcase",
                description: "Klinikk-showcase på om oss-siden",
              },
              {
                type: "image",
                name: "aboutEquipment",
                label: "ℹ️ Om oss: Utstyr",
                description: "Utstyr på om oss-siden",
              },
              
              // Treatments Page Specific
              {
                type: "image",
                name: "treatmentsHero",
                label: "🦷 Behandlinger: Hero-bilde",
                description: "Hero-bilde for behandlingsside",
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Notater",
            isBody: true,
          },
        ],
      },
    ],
  },
});