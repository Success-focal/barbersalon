"use client";

import Navbar from "../../layouts/Navbar";
import {
  ServiceCardList,
  ServiceConsultationCTA,
  ServiceDetailsList,
} from "./servicesDetails";

/**
 * ServicesSection – Highlights the brand's signature grooming services.
 * Combines multiple visual layers, storytelling, and modular components
 * to guide users through offerings with clarity and impact.
 */
export default function ServicesSection() {
  return (
    <section
      className="relative w-full min-h-[100vh] bg-cover bg-center bg-fixed flex items-center justify-center py-24 md:py-10"
      style={{ backgroundImage: "url('/images/Background.webp')" }}
    >
      {/* Background overlays to enhance contrast and add visual depth */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-background/10 mix-blend-multiply" />

      {/* Central container for content and layout */}
      <div className="flex flex-col items-center text-center relative z-10 mx-auto px-2 lg:px-20 w-full max-w-7xl">
        {/* Section introduction and brand message */}
        <div className="relative z-10 mb-12 pt-4">
          {/* Decorative heading separator */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-px bg-accent mr-4" />
            <span className="text-accent font-semibold tracking-wider uppercase text-[2.168rem]">
              Signature Services
            </span>
            <div className="w-12 h-px bg-accent ml-4" />
          </div>

          {/* Section subheading and brand tone */}
          <h1 className="text-base md:text-[1.618rem] font-bold text-primary mb-4">
            Redefining Masculine Grooming
            <span className="block text-primary mt-2">
              Where Craft Meets Character
            </span>
          </h1>

          {/* Supporting copy to set expectations and tone */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Step into a world where every cut, trim, and detail is a tribute to
            timeless style. Our services combine traditional techniques with
            modern precision because your look deserves mastery.
          </p>
        </div>

        {/* Service offerings preview – card layout */}
        <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-0 mx-auto">
          <ServiceCardList />

          {/* Section to introduce deeper explanation and values */}
          <div className="mt-24 mb-12 text-center max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-snug">
              What Sets Us Apart
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Beyond the basics, we offer signature experiences crafted to
              indulge, refresh, and elevate. Here’s a closer look at the
              artistry behind each of our premium services.
            </p>
          </div>

          {/* Detailed breakdown of premium services */}
          <ServiceDetailsList />
        </div>

        {/* CTA encouraging customers to initiate consultation or booking */}
        <ServiceConsultationCTA />
      </div>

      {/* Global navbar overlayed for persistent navigation */}
      <Navbar />
    </section>
  );
}
