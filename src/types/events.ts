// Types for the Senegalese ticketing application

export interface Event {
  id: string;
  title: string;
  artist?: string;
  venue: string;
  address: string;
  date: string;
  time: string;
  price: number;
  currency: string;
  category: 'concert' | 'sport' | 'culture' | 'theatre';
  image: string;
  description: string;
  seating: SeatingOptions;
  featured: boolean;
  gallery?: string[];
}

export interface SeatingOptions {
  [key: string]: {
    name: string;
    price: number;
    available: number;
    color: string;
  };
}

export interface Ticket {
  id: string;
  eventId: string;
  seatCategory: string;
  seatNumber?: string;
  qrCode: string;
  purchaseDate: string;
  status: 'valid' | 'used' | 'cancelled';
}

export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  avatar?: string;
}

export interface CartItem {
  eventId: string;
  seatCategory: string;
  quantity: number;
  price: number;
}