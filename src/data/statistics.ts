export interface Statistic {
  id: string;
  value: string;
  label: string;
  description?: string;
}

export const statistics: Statistic[] = [
  {
    id: "experience",
    value: "20+",
    label: "års erfaring",
    description: "År med tannlegevirksomhet"
  },
  {
    id: "patients",
    value: "8,450+",
    label: "fornøyde pasienter",
    description: "Behandlede pasienter over årene"
  },
  {
    id: "clinics",
    value: "2",
    label: "klinikker",
    description: "Lokasjoner i Bergen-området"
  },
  {
    id: "dentists",
    value: "4",
    label: "tannleger",
    description: "Erfarne tannleger på teamet"
  }
];