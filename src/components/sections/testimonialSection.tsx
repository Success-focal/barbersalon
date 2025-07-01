"use client";

import { clientTestimonials } from "@/lib/data/dataPool";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import { EmblaCarousel } from "../ui/custom/emblaCarousel";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Navbar from "../layouts/Navbar";
import Link from "next/link";

/**
 * TestimonialSection – Displays user testimonials in a carousel and highlights trust signals.
 * Focuses on social proof to convert visitors into clients.
 */
export default function TestimonialSection() {
  return (
    <section
      className="relative w-full min-h-[100vh] bg-cover bg-center bg-fixed overflow-hidden flex flex-col items-center justify-center py-24 md:py-10"
      style={{ backgroundImage: "url('/images/Background.webp')" }}
    >
      {/* Visual overlays for cinematic and focused readability */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-background/10 mix-blend-multiply" />

      {/* Header + Brand Message */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 md:mb-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative accent title */}
        <div className="flex items-center justify-center mb-3 sm:mb-4">
          <div className="w-8 sm:w-12 h-px bg-accent mr-3 sm:mr-4" />
          <span className="text-accent font-semibold tracking-wider uppercase text-lg sm:text-xl md:text-2xl lg:text-[2.168rem] text-center leading-tight">
            Hear From Our Happy Clients
          </span>
          <div className="w-8 sm:w-12 h-px bg-accent ml-3 sm:ml-4" />
        </div>

        {/* Intro message */}
        <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6 px-2">
          Real experiences from real people who have transformed their look with
          us.
        </p>

        {/* Micro trust signals */}
        <p className="text-xs text-muted-foreground text-center mb-6">
          Trusted by 5,000+ clients · Featured in <em>Style Nepal</em> · Rated
          4.9/5 on Google
        </p>

        {/* Call to Action */}
        <Button className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
          <Link href="/contact#contact-form">Join Our Happy Clients</Link>
        </Button>
      </div>

      {/* Embla Carousel – Horizontal scroll for testimonials */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <EmblaCarousel className="w-full">
          {clientTestimonials.map((testimonial, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 px-2 sm:px-4">
              <Card className="w-full bg-muted/20 backdrop-blur-md border border-border shadow-md p-4 sm:p-6 text-left flex flex-col h-full">
                {/* Header with avatar, name, service, location */}
                <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 p-0 mb-4 sm:mb-6">
                  <Avatar className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-accent shadow-sm flex-shrink-0">
                    {testimonial.image ? (
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                    ) : (
                      <AvatarFallback className="text-lg sm:text-xl font-semibold text-accent">
                        {testimonial.avatarInitials}
                      </AvatarFallback>
                    )}
                  </Avatar>

                  {/* User Info */}
                  <div className="flex flex-col min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight break-words">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 break-words">
                      {testimonial.service}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                      {testimonial.location}
                    </p>
                  </div>
                </CardHeader>

                {/* Quote and rating stars */}
                <CardContent className="p-0 flex flex-col flex-grow">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed flex-grow break-words hyphens-auto">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center gap-1 mb-4 sm:mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-primary/90 fill-primary"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </EmblaCarousel>
      </div>

      {/* Special Featured Review */}
      <div className="relative z-10 mt-12 sm:mt-16 md:mt-24 text-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <p className="text-accent font-medium text-xs sm:text-sm mb-2 uppercase tracking-wider">
          Client of the Month
        </p>
        <Card className="bg-muted/30 border border-barber-accent/30 backdrop-blur-md shadow-lg">
          <CardContent className="p-4 sm:p-6 md:p-8">
            <p className="text-base sm:text-lg text-muted-foreground italic leading-relaxed break-words">
              &quot;I&apos;ve never felt more confident after a session! Their
              attention to detail is unreal. Every time I visit, I leave better
              than I came.&quot;
            </p>
            <div className="mt-3 sm:mt-4 text-right">
              <span className="font-bold text-foreground text-sm sm:text-base break-words">
                – Ramesh M., Model
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA – Invite to leave a review */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <Button
          variant="outline"
          size="lg"
          onClick={() =>
            window.open("https://forms.gle/6GJXWR2bqU8zmbAC6", "_blank")
          }
          className="tracking-wide font-semibold text-accent border-accent hover:bg-accent hover:text-background transition-transform transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          Write a review
        </Button>
      </div>

      {/* Closing quote to reinforce emotional branding */}
      <blockquote className="mt-10 max-w-2xl mx-auto text-center italic text-accent text-xl font-semibold relative z-10 px-4">
        &quot;Style is a way to say who you are without having to speak.&quot;
      </blockquote>

      {/* Persistent navigation */}
      <Navbar />
    </section>
  );
}
