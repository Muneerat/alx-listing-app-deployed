export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}
export interface PropertyCardProps {
  name: string;
  location: string;
  room: string;
  shower: string;
  person: string;
  categories: string[];
  price: string;
  offers?: string;
  image: string;
  discount?: string;
}

export interface PillProps {
  title: string;
}
