import {
  Service,
  DetailedService,
  TeamMember,
  ClientTestimonial,
} from "../types/types";

export const services: Service[] = [
  {
    name: "Classic Haircut",
    image: "/images/scissor3.png",
    price: "$25",
    description: "Timeless styles tailored to you, sharp and precise.",
    duration: "45 min",
    popular: true,
  },
  {
    name: "Beard Trim & Shape",
    image: "/images/scissor1.png",
    price: "$15",
    description: "Sculpted lines and cleaned-up edges to define your look.",
    duration: "30 min",
    popular: false,
  },
  {
    name: "Hot Towel Shave",
    image: "/images/scissor.png",
    price: "$30",
    description: "The classic gentleman's shave — smooth, warm, and close.",
    duration: "40 min",
    popular: true,
  },
  {
    name: "Fade & Taper Combo",
    image: "/images/scissor3.png",
    price: "$28",
    description: "Clean fades with seamless transitions and modern edge.",
    duration: "50 min",
    popular: false,
  },
  {
    name: "Hair Wash & Style",
    image: "/images/scissor1.png",
    price: "$20",
    description: "Fresh wash and styled finish to keep you looking sharp.",
    duration: "35 min",
    popular: false,
  },
];

export const detailedServices: DetailedService[] = [
  {
    name: "Classic Haircut",
    image: "/images/classicHaircut.jpg",
    description:
      "Our Classic Haircut offers timeless styles tailored precisely to your preferences, ensuring a sharp and clean look that never goes out of style.",
  },
  {
    name: "Beard Trim & Shape",
    image: "/images/beardtrim.jpg",
    description:
      "Sculpt your beard with expert precision. We clean up edges and create defined lines that enhance your natural style.",
  },
  {
    name: "Fade & Taper Combo",
    image: "/images/Taper.jpg",
    description:
      "Experience seamless transitions and modern edges with our Fade & Taper Combo, designed to give you a fresh, sharp look.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Aarav Maharjan",
    role: "Senior Barber",
    image: "/professionals/arav.webp",
    expertise: "Precision fades, hot towel shaves",
    skills: ["Hair design", "Beard styling", "Traditional razor work"],
    instagram: "https://instagram.com/aarav_styles",
  },
  {
    name: "Riya Sharma",
    role: "Brow Specialist",
    image: "/professionals/riya.webp",
    expertise: "Threading & shaping artistry",
    skills: ["Facial mapping", "Henna brows", "Customer consultations"],
    instagram: "https://instagram.com/riya_threads",
  },
  {
    name: "Dev Joshi",
    role: "Hair & Skin Consultant",
    image: "/professionals/dev.webp",
    expertise: "Hair texture analysis",
    skills: [
      "Scalp care",
      "Product recommendations",
      "Skin hydration routines",
    ],
    instagram: "https://instagram.com/dev_care",
  },
];

export const clientTestimonials: ClientTestimonial[] = [
  {
    name: "Ravi Thapa",
    service: "Classic Beard Sculpt",
    quote:
      "Absolutely loved the precision and care. My beard has never looked this sharp. Suir Barber Co. is now my go-to.",
    rating: 5,
    avatarInitials: "RT",
    image: "/avatar/ravi.avif",
  },
  {
    name: "Pramesh Lama",
    service: "Royal Hot Towel Shave",
    quote:
      "An incredibly relaxing service! Felt like I stepped out of a spa. Highly recommend their hot towel ritual.",
    rating: 4,
    avatarInitials: "PL",
    image: "/avatar/pramesh.avif",
  },
  {
    name: "Aayush Bhattarai",
    service: "Precision Fade",
    quote:
      "Crisp fade. Clean lines. Chill environment. Exactly what I needed. Coming back for sure!",
    rating: 5,
    avatarInitials: "AB",
    image: "/avatar/aayush.avif",
  },
  {
    name: "Kiran Sharma",
    service: "Signature Haircut & Style",
    quote:
      "Every visit is an experience. The attention to detail and professionalism is unmatched.",
    rating: 5,
    avatarInitials: "KS",
    image: "/avatar/kiran.avif",
  },
  {
    name: "Suman Maharjan",
    service: "Beard & Mustache Trim",
    quote:
      "Perfect shape and style every time. The team knows exactly what works best.",
    rating: 5,
    avatarInitials: "SM",
    image: "/avatar/suman.avif",
  },
];
