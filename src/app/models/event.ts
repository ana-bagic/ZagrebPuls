export interface Event {
    id: string;
    createdTime: string; // ISO date format
    fields: EventFields;
    organizator: Organizer[];
  }
  
  export interface EventFields {
    "puni naziv": string;
    opis: string;
    slika: Image[]; // Assuming "slika" represents an array of images
    cijena: number;
    "skraćeni naziv": string;
    "puni naziv na engleskom": string;
    "Numerirane ulaznice": boolean;
    "opis na engleskom": string;
    "Dostupno na hrvatskom jeziku": boolean;
    organizator: string[]; // Organizer references by ID
    "broj polaznika ili ulaznica": number;
    "ciljane dobne skupine": string[]; // Target audience IDs
    tip: string[]; // Event type IDs
    kategorija: string[]; // Category IDs
    "datum i vrijeme početka": string; // ISO date format
    "Poveznica na događaj": string;
    učestalost: string[] | null; // Frequency or null if not applicable
  }
  
  export interface Organizer {
    id: string;
    createdTime: string; // ISO date format
    fields: OrganizerFields;
  }
  
  export interface OrganizerFields {
    lokacija: string;
    "WC prilagođen osobama s invaliditetom": boolean | null; // Nullable
    "Ulaz prilagođen osobama s invaliditetom": boolean;
    Eventi: string[]; // Event references by ID
    "Kontakt mail": string;
    ime: string;
    Logotip: Image[]; // Assuming "Logotip" is an array of images
    tip: string[]; // Organizer type IDs
  }
  
  export interface Image {
    // Assuming image fields are undefined in the provided data
    [key: string]: any;
  }