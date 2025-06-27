export interface Service {
  name: string;
  image: string;
  price: string;
  description: string;
  duration: string;
  popular: boolean;
}
export interface DetailedService {
  name: string;
  image: string;
  description: string;
}
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  expertise: string;
  skills: string[];
  instagram: string;
}
export interface ClientTestimonial {
  name: string;
  service: string;
  quote: string;
  rating: number;
  avatarInitials: string;
  image: string;
  location: string;
}
