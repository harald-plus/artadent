// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
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
            label: "Navn p\xE5 tjeneste",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Kort beskrivelse",
            required: true
          },
          {
            type: "string",
            name: "priceRange",
            label: "Prisomr\xE5de",
            required: true
          },
          {
            type: "string",
            name: "category",
            label: "Kategori",
            required: true,
            options: [
              { value: "examination", label: "Unders\xF8kelse og rens" },
              { value: "xray", label: "R\xF8ntgen" },
              { value: "fillings", label: "Fyllinger" },
              { value: "extractions", label: "Ekstraksjon" },
              { value: "endodontics", label: "Pulpa og rotbehandling" },
              { value: "prosthetics", label: "Protetikk inklusive tanntekniker" },
              { value: "whitening", label: "Bleking" },
              { value: "misc", label: "Diverse" }
            ]
          },
          {
            type: "string",
            name: "icon",
            label: "Ikon (emoji)"
          },
          {
            type: "image",
            name: "image",
            label: "Tjenestebilde",
            description: "Valgfritt bilde for denne tjenesten"
          },
          {
            type: "number",
            name: "order",
            label: "Rekkef\xF8lge"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Innhold",
            isBody: true
          }
        ]
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
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Meta beskrivelse"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Innhold",
            isBody: true
          }
        ]
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
            required: true
          },
          {
            type: "string",
            name: "address",
            label: "Adresse",
            required: true
          },
          {
            type: "string",
            name: "postalCode",
            label: "Postnummer",
            required: true
          },
          {
            type: "string",
            name: "city",
            label: "By",
            required: true
          },
          {
            type: "string",
            name: "phone",
            label: "Telefon",
            required: true
          },
          {
            type: "string",
            name: "email",
            label: "E-post",
            required: true
          },
          {
            type: "object",
            name: "openingHours",
            label: "\xC5pningstider",
            fields: [
              {
                type: "string",
                name: "weekdays",
                label: "Hverdager"
              },
              {
                type: "string",
                name: "saturday",
                label: "L\xF8rdag"
              },
              {
                type: "string",
                name: "sunday",
                label: "S\xF8ndag"
              }
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Beskrivelse",
            isBody: true
          }
        ]
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
            required: true
          },
          {
            type: "string",
            name: "location",
            label: "Sted/Klinikk"
          },
          {
            type: "number",
            name: "rating",
            label: "Vurdering (1-5)",
            required: true
          },
          {
            type: "string",
            name: "date",
            label: "Dato"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Anmeldelse",
            isBody: true
          }
        ]
      },
      {
        name: "siteSettings",
        label: "Nettstedinnstillinger",
        path: "content/settings",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "site-settings"
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Innstillinger",
            isTitle: true,
            required: true
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
                label: "\u{1F3E2} Logo (navbar og footer)",
                description: "Hovedlogo for nettstedet"
              },
              {
                type: "image",
                name: "heroImage",
                label: "\u{1F3AF} Hovedbilde (generisk)",
                description: "Generisk hero-bilde som fallback"
              },
              {
                type: "image",
                name: "teamPhotoMain",
                label: "\u{1F465} Hovedteambilde",
                description: "Prim\xE6r bilde av tannlegeteamet"
              },
              {
                type: "image",
                name: "clinicInteriorGeneral",
                label: "\u{1F3E5} Generisk klinikk interi\xF8r",
                description: "Generisk bilde av behandlingsrom"
              },
              {
                type: "image",
                name: "placeholderGeneral",
                label: "\u{1F4F7} Generisk placeholder",
                description: "Fallback-bilde for manglende bilder"
              },
              // Homepage Specific Images
              {
                type: "image",
                name: "homepageHero",
                label: "\u{1F3E0} Forside: Hero-bilde",
                description: "Stort bilde p\xE5 forsiden"
              },
              {
                type: "image",
                name: "homepageTeamLarge",
                label: "\u{1F3E0} Forside: Stort teambilde (om-seksjon)",
                description: "Teambilde i om Artadent-seksjonen"
              },
              {
                type: "image",
                name: "homepageEquipment1",
                label: "\u{1F3E0} Forside: Moderne utstyr",
                description: "Moderne tannlegeutstyr"
              },
              {
                type: "image",
                name: "homepageEquipment2",
                label: "\u{1F3E0} Forside: Komfortabelt behandlingsrom",
                description: "Komfortabelt og romslig behandlingsrom"
              },
              {
                type: "image",
                name: "homepageEquipment3",
                label: "\u{1F3E0} Forside: Avansert teknologi",
                description: "Avansert tannlegeteknologi"
              },
              // Solheim Clinic Specific Images
              {
                type: "image",
                name: "solheimHeroInterior",
                label: "\u{1F3E2} Solheim: Hero interi\xF8r",
                description: "Hero-bilde av Solheim klinikk interi\xF8r"
              },
              {
                type: "image",
                name: "solheimTreatmentRoom",
                label: "\u{1F3E2} Solheim: Behandlingsrom",
                description: "Behandlingsrom p\xE5 Solheim"
              },
              {
                type: "image",
                name: "solheimEquipment",
                label: "\u{1F3E2} Solheim: Utstyr",
                description: "Utstyr p\xE5 Solheim klinikk"
              },
              {
                type: "image",
                name: "solheimExterior",
                label: "\u{1F3E2} Solheim: Eksteri\xF8r",
                description: "Utvendig bilde av Solheim klinikk"
              },
              {
                type: "image",
                name: "solheimReception",
                label: "\u{1F3E2} Solheim: Resepsjon",
                description: "Resepsjonsomr\xE5de p\xE5 Solheim"
              },
              {
                type: "image",
                name: "solheimWaitingRoom",
                label: "\u{1F3E2} Solheim: Venterom",
                description: "Venterom p\xE5 Solheim klinikk"
              },
              // Paradis Clinic Specific Images
              {
                type: "image",
                name: "paradisHeroInterior",
                label: "\u{1F33F} Paradis: Hero interi\xF8r",
                description: "Hero-bilde av Paradis klinikk interi\xF8r"
              },
              {
                type: "image",
                name: "paradisTreatmentRoom",
                label: "\u{1F33F} Paradis: Behandlingsrom",
                description: "Behandlingsrom p\xE5 Paradis"
              },
              {
                type: "image",
                name: "paradisEquipment",
                label: "\u{1F33F} Paradis: Utstyr",
                description: "Utstyr p\xE5 Paradis klinikk"
              },
              {
                type: "image",
                name: "paradisExterior",
                label: "\u{1F33F} Paradis: Eksteri\xF8r",
                description: "Utvendig bilde av Paradis klinikk"
              },
              {
                type: "image",
                name: "paradisReception",
                label: "\u{1F33F} Paradis: Resepsjon",
                description: "Resepsjonsomr\xE5de p\xE5 Paradis"
              },
              {
                type: "image",
                name: "paradisWaitingRoom",
                label: "\u{1F33F} Paradis: Venterom",
                description: "Venterom p\xE5 Paradis klinikk"
              },
              // Treatment/Services Images
              {
                type: "image",
                name: "emergencyCare",
                label: "\u{1F6A8} Akuttbehandling",
                description: "Akutt tannlegebehandling"
              },
              {
                type: "image",
                name: "painRelief",
                label: "\u{1F48A} Smertelindring",
                description: "Smertelindrende behandling"
              },
              {
                type: "image",
                name: "emergencyEquipment",
                label: "\u{1F6A8} Akuttutstyr",
                description: "Utstyr for akuttbehandling"
              },
              // Contact/About Images
              {
                type: "image",
                name: "contactHero",
                label: "\u{1F4DE} Kontakt: Hero-bilde",
                description: "Hero-bilde for kontaktside"
              },
              {
                type: "image",
                name: "anxietyTreatment",
                label: "\u{1F60C} Angstpasienter",
                description: "Behandling av angstpasienter"
              },
              // About Page Specific
              {
                type: "image",
                name: "aboutHeroTeam",
                label: "\u2139\uFE0F Om oss: Hero teambilde",
                description: "Teambilde for om oss-siden"
              },
              {
                type: "image",
                name: "aboutClinicShowcase",
                label: "\u2139\uFE0F Om oss: Klinikk showcase",
                description: "Klinikk-showcase p\xE5 om oss-siden"
              },
              {
                type: "image",
                name: "aboutEquipment",
                label: "\u2139\uFE0F Om oss: Utstyr",
                description: "Utstyr p\xE5 om oss-siden"
              },
              // Treatments Page Specific
              {
                type: "image",
                name: "treatmentsHero",
                label: "\u{1F9B7} Behandlinger: Hero-bilde",
                description: "Hero-bilde for behandlingsside"
              }
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Notater",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
