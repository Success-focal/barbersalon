"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { detailedServices, services } from "@/lib/data/dataPool";
import { CheckCircle, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * ServiceCardList – Renders the core grid of available services.
 * Each service is shown with an icon, name, duration, description, and booking CTA.
 */
export function ServiceCardList() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(
        ({ name, image, price, description, duration, popular }) => (
          <Card
            key={name}
            className="group relative bg-muted/30 border border-border/10 rounded-xl backdrop-blur-md transition-all duration-400 hover:border-barber-accent/40 hover:bg-muted/70 shadow-md hover:shadow-barber-accent/30 transform hover:scale-[1.04] overflow-hidden"
          >
            {/* Optional: visually highlight popular services */}
            {popular && (
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-background px-3 py-1 rounded-full text-xs font-bold tracking-wider shadow-md animate-pulse">
                  POPULAR
                </span>
              </div>
            )}

            {/* Fixed pricing badge with styling for quick scan */}
            <div className="absolute top-4 left-4 z-20">
              <div className="bg-background/90 backdrop-blur-sm border border-barber-accent rounded-lg px-4 py-2 shadow-sm text-center min-w-[64px]">
                <span className="text-xl font-extrabold text-barber-accent tracking-wide">
                  {price}
                </span>
              </div>
            </div>

            <CardHeader className="pt-20 pb-6 px-6">
              <div className="flex flex-col items-center gap-6">
                {/* Icon image representing the service */}
                <div className="p-5 bg-barber-accent/15 rounded-full group-hover:bg-barber-accent/25 transition duration-300 shadow-inner">
                  <Image
                    src={image}
                    alt={name}
                    width={56}
                    height={56}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Service title */}
                <CardTitle className="text-2xl font-bold text-center group-hover:text-barber-accent transition-colors duration-300">
                  {name}
                </CardTitle>

                {/* Duration info with icon */}
                <div className="flex items-center justify-center space-x-2 text-muted-foreground text-sm font-medium">
                  <Clock className="w-4 h-4 text-barber-accent" />
                  <span>{duration}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0 pb-8 px-6 flex flex-col justify-between">
              {/* Short service description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 min-h-[72px]">
                {description}
              </p>

              {/* Call-to-action to contact form */}
              <Button className="w-full text-background font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:bg-accent">
                <Link href="/contact#contact-form">Book Now</Link>
              </Button>
            </CardContent>
          </Card>
        )
      )}
    </div>
  );
}

/**
 * ServiceDetailsList – Renders extended descriptions of each premium service.
 * Alternates layout direction for visual rhythm.
 */
export function ServiceDetailsList() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto w-full mt-20 space-y-12 px-4 sm:px-6 lg:px-0">
      {detailedServices.map(({ name, image, description }, index) => (
        <Card
          key={name}
          className={`flex flex-col md:flex-row items-center gap-8 bg-muted/20 backdrop-blur-md border border-barber-accent/30 p-8 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image representing the premium experience */}
          <div className="flex-shrink-0 w-full max-w-[300px] h-[300px] rounded-lg overflow-hidden bg-barber-accent/10 shadow-inner relative">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
            />
          </div>

          {/* Textual explanation of the service */}
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
  );
}

/**
 * ServiceConsultationCTA – Reinforces that all services include
 * a complimentary consultation. Small reassurance detail for UX.
 */
export function ServiceConsultationCTA() {
  return (
    <div className="mt-16 text-center group">
      <div className="inline-flex items-center bg-muted/40 backdrop-blur-sm rounded-full px-8 py-4 border border-accent/20">
        <CheckCircle
          className="w-6 h-6 text-foreground mr-3 transition-colors duration-300 group-hover:text-accent"
          aria-hidden="true"
        />
        <span className="text-foreground font-medium text-xs sm:text-base">
          All services include complimentary consultation
        </span>
      </div>
    </div>
  );
}
