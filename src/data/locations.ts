export interface Location {
  id: string;
  name: string;
  address: string;
  postalCode: string;
  city: string;
  phone: string;
  email: string;
  openingHours: {
    weekdays: string;
    weekend: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const locations: Location[] = [
  {
    id: "paradis",
    name: "Artadent Paradis Tannklinikk",
    address: "Paradisleitet 1",
    postalCode: "5231",
    city: "Paradis",
    phone: "+47 97 32 67 24",
    email: "artadentparadis@gmail.com",
    openingHours: {
      weekdays: "09:30 – 18:00",
      weekend: "Stengt (Akuttimer tilgjengelig)"
    },
    coordinates: {
      lat: 60.3013,
      lng: 5.2469
    }
  },
  {
    id: "solheim",
    name: "Artadent Solheim Tannklinikk",
    address: "Fjøsangerveien 39",
    postalCode: "5054",
    city: "Bergen",
    phone: "+47 92 94 34 99",
    email: "solheimtannlegevakt@gmail.com",
    openingHours: {
      weekdays: "09:30 – 18:00",
      weekend: "Stengt (Akuttimer tilgjengelig)"
    },
    coordinates: {
      lat: 60.3588,
      lng: 5.3488
    }
  }
];