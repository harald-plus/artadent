export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "linn-monsen",
    name: "Linn Monsen",
    text: "Min absolutte 'go to' klinikk for tannhelse. Alltid fornøyd. Dyktige tannleger. Gode priser.",
    rating: 5
  },
  {
    id: "trond-pedersen", 
    name: "Trond Pedersen",
    text: "Dyktige tannleger og god service. Jeg har ikke noe å utsette og har aldri følt meg mer komfortabel hos tannlege.",
    rating: 5
  },
  {
    id: "andre-larsen",
    name: "Andre Larsen", 
    text: "Meget fornøyd med Artadent. Han forklarte behandlingsprosessen grundig gjennom hele behandlingen.",
    rating: 5
  }
];