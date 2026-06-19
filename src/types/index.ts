export interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  startingPrice: number;
  slug: string;
  highlights?: string[];
}

export interface TravelPackage {
  id: string;
  title: string;
  duration: string;
  facilities: string[];
  highlights: string[];
  price: number;
  image: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  image: string;
  location: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  aspect: "tall" | "wide" | "square";
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface BookingStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface OpenTrip {
  id: string;
  destination: string;
  departureDate: string;
  seatsLeft: number;
  totalSeats: number;
  price: number;
  image: string;
}

export interface GoogleReview {
  id: string;
  name: string;
  date: string;
  rating: number;
  review: string;
  avatar: string;
}
