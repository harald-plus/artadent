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
              { value: "examination", label: "Undersøkelse & Forebygging" },
              { value: "treatment", label: "Behandlinger" },
              { value: "prosthetics", label: "Proteser" },
              { value: "emergency", label: "Akutthjelp" },
            ],
          },
          {
            type: "string",
            name: "icon",
            label: "Ikon (emoji)",
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
    ],
  },
});