"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { teamMembers } from "@/lib/data/dataPool";
import Navbar from "../layouts/Navbar";
import Link from "next/link";
import { Badge } from "../ui/badge";

/**
 * TeamSection – Displays team members in a visually engaging grid layout.
 * Each card features profile info, skills, and a direct Instagram link.
 * Designed to build trust and personal connection with potential clients.
 */
export default function TeamSection() {
  return (
    <section
      className="relative w-full min-h-[100vh] bg-cover bg-center bg-fixed overflow-hidden flex items-center justify-center py-24 md:py-10"
      style={{ backgroundImage: "url('/images/Background.webp')" }}
    >
      {/* Layered overlays for cinematic effect and contrast */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-background/10 mix-blend-multiply" />

      <div className="z-10 px-4">
        {/* Section Heading with subtext */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Decorative title line with symmetry */}
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="w-8 sm:w-12 h-px bg-accent mr-3 sm:mr-4" />
            <span className="text-accent font-semibold tracking-wider uppercase text-lg sm:text-xl md:text-[1.85rem] lg:text-[2.168rem]">
              Meet the Artists
            </span>
            <div className="w-8 sm:w-12 h-px bg-accent ml-3 sm:ml-4" />
          </div>

          {/* Brand Message */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[1.618rem] font-bold text-primary mb-3 sm:mb-4 px-2">
            Redefining Masculine Grooming
            <span className="block text-primary mt-1 sm:mt-2">
              Where Craft Meets Character
            </span>
          </h1>

          {/* Short intro paragraph */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Our handpicked team is passionate, skilled, and committed to
            redefining self-care with artistry.
          </p>
        </div>

        {/* Grid of team member profile cards */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="group rounded-xl bg-muted/20 border border-barber-accent/20 backdrop-blur-md shadow-md hover:shadow-xl transition-all hover:bg-muted/40 mx-auto w-full max-w-sm sm:max-w-none"
            >
              {/* Profile Image */}
              <CardHeader className="p-0 overflow-hidden relative h-[240px] sm:h-[260px] md:h-[280px] rounded-t-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-top object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </CardHeader>

              {/* Name, Role, Skills, Expertise */}
              <CardContent className="p-4 sm:p-5 md:p-6 space-y-2 sm:space-y-3">
                <CardTitle className="text-xl sm:text-2xl font-bold text-barber-accent group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </CardTitle>

                <p className="text-sm sm:text-base text-primary font-medium">
                  {member.role}
                </p>

                <p className="text-xs sm:text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">
                    Expertise:
                  </span>{" "}
                  {member.expertise}
                </p>

                {/* Skill list */}
                <ul className="list-disc list-inside text-muted-foreground text-xs sm:text-sm space-y-1">
                  {member.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </CardContent>

              {/* Instagram profile link */}
              <CardFooter className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 pt-0">
                <Link
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs sm:text-sm text-accent hover:underline transition"
                >
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />@
                  {member.instagram.split("https://instagram.com/")[1]}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA below team grid */}
        <div className="mt-12 sm:mt-16 text-center max-w-xl mx-auto text-muted-foreground text-sm sm:text-base leading-relaxed px-4">
          Looking for the perfect fit? Each member brings their own unique flair
          and deep expertise.
          <br />
          <span className="text-foreground font-medium">
            Consultations are complimentary. Let us guide you to the right
            professional.
          </span>
        </div>

        {/* Seasonal guest artist notice */}
        <div className="mt-8 md:mt-10 mb-10 text-center px-4">
          <Badge
            variant="default"
            className="bg-accent/10 text-barber-accent backdrop-blur-md shadow-sm px-3 sm:px-4 py-2 sm:py-2 text-xs sm:text-sm font-medium rounded-full inline-block max-w-full whitespace-normal text-center leading-relaxed"
          >
            Additional guest stylists and visiting experts available seasonally
          </Badge>
        </div>
      </div>

      {/* Navbar rendered above hero section for consistent navigation */}
      <Navbar />
    </section>
  );
}
