"use client";

import { clientTestimonials } from "@/lib/data/dataPool";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import { EmblaCarousel } from "../ui/custom/emblaCarousel";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Navbar from "../layouts/Navbar";

export default function TestimonialSection() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-fixed overflow-hidden flex flex-col items-center justify-center py-24 px-6 sm:px-12 lg:px-24"
      style={{ backgroundImage: "url('/images/Background.webp')" }}
    >
      {/* Overlay layers */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/30"></div>
      <div className="absolute inset-0 bg-background/10 mix-blend-multiply"></div>

      {/* Hero Section */}
      <div className="relative z-10 text-center mb-20 max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-px bg-accent mr-4" />
          <span className="text-accent font-semibold tracking-wider uppercase text-[2.168rem]">
            Hear From Our Happy Clients
          </span>
          <div className="w-12 h-px bg-accent ml-4" />
        </div>
        <p className="text-muted-foreground text-lg mb-6">
          Real experiences from real people who have transformed their look with
          us.
        </p>
        <Button className="text-base px-6 py-3">Join Our Happy Clients</Button>
      </div>

      {/* Carousel */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <EmblaCarousel className="w-full">
          {clientTestimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full shrink-0 px-4">
              <Card className="w-full bg-muted/20 backdrop-blur-md border border-border shadow-md p-6 text-left flex flex-col">
                <CardHeader className="flex items-center gap-5 p-0 mb-6">
                  {/* Avatar with border */}
                  <Avatar className="w-16 h-16 rounded-full border-2 border-accent shadow-sm">
                    {testimonial.image ? (
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                    ) : (
                      <AvatarFallback className="text-xl font-semibold text-accent">
                        {testimonial.avatarInitials}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  {/* Name and service stacked */}
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-foreground leading-tight">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {testimonial.service}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="p-0 flex flex-col flex-grow">
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-prmary/90 fill-primary"
                      />
                    ))}
                  </div>
                  <Button size="sm" variant="secondary" className="self-start">
                    Book Your Experience
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </EmblaCarousel>
      </div>

      {/* Highlighted Review - Client of the Month */}
      <div className="relative z-10 mt-24 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
        <p className="text-accent font-medium text-sm mb-2 uppercase tracking-wider">
          Client of the Month
        </p>
        <Card className="bg-muted/30 border border-barber-accent/30 backdrop-blur-md shadow-lg">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground italic">
              &quot;I’ve never felt more confident after a session! Their
              attention to detail is unreal. Every time I visit, I leave better
              than I came.&quot;
            </p>
            <div className="mt-4 text-right">
              <span className="font-bold text-foreground">
                – Ramesh M., Model
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
      <Navbar />
    </section>
  );
}
