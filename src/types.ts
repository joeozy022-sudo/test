export interface ExperienceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  quote: string;
  image: string;
}

export interface Hotspot {
  id: string;
  name: string;
  x: number; // percentage from left
  y: number; // percentage from top
  symbolism: string;
  description: string;
  luxuryDetail: string;
}

export interface DayTimelineItem {
  day: number;
  title: string;
  poeticSubtitle: string;
  description: string;
  ritual: string;
  duration: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  country: string;
  stayDate: string;
  avatarLetter: string;
}

export interface BookingDetails {
  guests: number;
  season: 'june' | 'august' | 'september';
  add_ons: string[];
  fullName: string;
  email: string;
  phone: string;
}
