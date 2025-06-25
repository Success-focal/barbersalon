"use client";
import Navbar from "../layouts/Navbar";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

const services = [
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

const detailedServices = [
  {
    name: "Classic Haircut",
    image: "/images/classicHaircut.jpg", // your new detailed image path
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

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full min-h-screen bg-cover bg-center bg-fixed overflow-hidden flex items-center justify-center px-6 sm:px-20"
      style={{ backgroundImage: "url('/images/Background.webp')" }}
    >
      {/* Background overlays */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/30"></div>
      <div className="absolute inset-0 bg-background/10 mix-blend-multiply"></div>

      <div className="flex flex-col items-center text-center relative z-10 mx-auto mb-20 md:mb-10 lg:px-20 w-full max-w-7xl">
        {/* Header Section */}
        <div className="sticky top-0 z-20 py-8 mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-px bg-barber-accent mr-4"></div>
            <span className="text-barber-accent font-semibold tracking-wider uppercase text-sm">
              Our Services
            </span>
            <div className="w-12 h-px bg-barber-accent ml-4"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Premium Grooming Tailored
            <span className="block text-barber-accent mt-2">
              For The Modern Man
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the art of traditional barbering with contemporary
            precision and luxury.
          </p>
        </div>

        {/* Services Grid */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-0">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(
              ({ name, image, price, description, duration, popular }) => (
                <Card
                  key={name}
                  className="group relative bg-muted/30 border border-transparent rounded-xl
          hover:border-barber-accent/40 hover:bg-muted/70
          transition-all duration-400 cursor-pointer
          backdrop-blur-md shadow-lg hover:shadow-barber-accent/40 hover:scale-[1.04] overflow-hidden"
                >
                  {/* Popular Badge */}
                  {popular && (
                    <div className="absolute top-4 right-4 z-20">
                      <span
                        className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-background
              px-3 py-1 rounded-full text-xs font-bold tracking-wider shadow-lg
              animate-pulse"
                      >
                        POPULAR
                      </span>
                    </div>
                  )}

                  {/* Price Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-background/90 backdrop-blur-sm border border-barber-accent rounded-lg px-4 py-2 shadow-md text-center min-w-[64px]">
                      <span className="text-xl font-extrabold text-barber-accent tracking-wide">
                        {price}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="pt-20 pb-6 px-6">
                    <div className="flex flex-col items-center gap-6">
                      <div
                        className="p-5 bg-barber-accent/15 rounded-full group-hover:bg-barber-accent/30
                transition-colors duration-300 shadow-inner"
                      >
                        <Image
                          src={image}
                          alt={name}
                          width={56}
                          height={56}
                          className="object-contain group-hover:scale-110 transition-transform duration-400"
                        />
                      </div>

                      <CardTitle className="text-2xl font-bold text-center group-hover:text-barber-accent transition-colors duration-300">
                        {name}
                      </CardTitle>

                      <div className="flex items-center justify-center space-x-2 text-muted-foreground text-sm font-medium">
                        <svg
                          className="w-5 h-5 text-barber-accent"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>{duration}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 pb-8 px-6 flex flex-col justify-between">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 min-h-[72px]">
                      {description}
                    </p>

                    {/* Book Now Button */}
                    <Button
                      className="w-full bg-foreground hover:bg-accent text-background font-semibold
              py-3 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300
              transform hover:-translate-y-1"
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              )
            )}
          </div>
          {/* About Services Section with detailedServices */}
          <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-0 mt-20 space-y-12">
            {detailedServices.map(({ name, image, description }, index) => (
              <Card
                key={name}
                className={`flex flex-col md:flex-row items-center gap-8 bg-muted/20 backdrop-blur-md border border-barber-accent/30 p-8 md:pt-0 md:pl-0 md:pb-0
      ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}
              >
                {/* Image side */}
                <div className="flex-shrink-0 w-full max-w-[300px] h-[300px] rounded-lg overflow-hidden bg-barber-accent/10 shadow-inner relative">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover"
                  />
                </div>

                {/* Description side */}
                <CardContent className="flex flex-col text-left max-w-4xl px-2 md:px-8">
                  <h3 className="text-3xl font-extrabold text-barber-accent mb-4">
                    {name}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-muted/40 backdrop-blur-sm rounded-full px-8 py-4 border border-barber-accent/20">
            <svg
              className="w-6 h-6 text-foreground mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-foreground font-medium">
              All services include complimentary consultation
            </span>
          </div>
        </div>
      </div>

      <Navbar />
    </section>
  );
}
