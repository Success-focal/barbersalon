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

export default function TeamSection() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-fixed overflow-hidden flex items-center justify-center py-24"
      style={{ backgroundImage: "url('/images/Background.webp')" }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/30"></div>
      <div className="absolute inset-0 bg-background/10 mix-blend-multiply"></div>

      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-px bg-accent mr-4" />
            <span className="text-accent font-semibold tracking-wider uppercase text-[2.168rem]">
              Meet the Artists
            </span>
            <div className="w-12 h-px bg-accent ml-4" />
          </div>
          <h1 className="text-base md:text-[1.618rem] font-bold text-primary mb-4">
            Redefining Masculine Grooming
            <span className="block text-primary mt-2">
              Where Craft Meets Character
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our handpicked team is passionate, skilled, and committed to
            redefining self-care with artistry.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="group md:pt-0 rounded-xl bg-muted/20 border border-barber-accent/20 backdrop-blur-md shadow-md hover:shadow-xl transition-all hover:bg-muted/40"
            >
              <CardHeader className="p-0 overflow-hidden relative h-[280px] rounded-t-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-top object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <CardTitle className="text-2xl font-bold text-barber-accent group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </CardTitle>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">
                    Expertise:
                  </span>{" "}
                  {member.expertise}
                </p>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  {member.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Link
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-accent hover:underline transition"
                >
                  <Instagram className="w-4 h-4 mr-2" />@
                  {member.instagram.split("https://instagram.com/")[1]}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Message */}
        <div className="mt-16 text-center max-w-xl mx-auto text-muted-foreground text-base leading-relaxed">
          Looking for the perfect fit? Each member brings their own unique flair
          and deep expertise.
          <br />
          <span className="text-foreground font-medium">
            Consultations are complimentary. Let us guide you to the right
            professional.
          </span>
        </div>

        {/* Seasonal Stylists Badge */}
        <div className="mt-10 text-center">
          <Badge
            variant="default"
            className="bg-accent/10 text-barber-accent backdrop-blur-md shadow-sm px-4 py-2 text-sm font-medium rounded-full"
          >
            Additional guest stylists and visiting experts available seasonally
          </Badge>
        </div>
      </div>

      {/* Navbar fixed above everything */}
      <Navbar />
    </section>
  );
}
