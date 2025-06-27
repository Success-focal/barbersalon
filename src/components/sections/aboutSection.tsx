"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "../layouts/Navbar";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed overflow-hidden flex flex-col items-center justify-center py-24 md:py-10 px-6 sm:px-12 lg:px-24 min-h-[100vh]"
      style={{ backgroundImage: "url('/images/Background.webp')" }}
    >
      {/* Background overlays - lowest z-index */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/30 z-0"></div>
      <div className="absolute inset-0 bg-background/10 mix-blend-multiply z-0"></div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-2xl text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-px bg-accent mr-4" />
          <span className="text-accent font-semibold tracking-wider uppercase text-[2.168rem]">
            About us
          </span>
          <div className="w-12 h-px bg-accent ml-4" />
        </div>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Experience the art of masculine grooming with a team dedicated to
          precision, style, and timeless craftsmanship.
        </p>
      </div>

      {/* Content container with highest z-index */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-4xl w-full">
        {/* Image Side */}
        <div className="relative w-full md:w-3/5 h-80 md:h-[480px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/shop.avif"
            alt="Inside Suir Barber Co."
            fill
            className="object-cover object-right"
            priority
          />
        </div>

        {/* Text Side */}
        <div className="w-full md:w-2/5 space-y-6">
          <h2 className="text-4xl font-extrabold text-primary tracking-tight">
            About Suri Barber Co.
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            At Suri Barber Co., we’re not just cutting hair. We’re crafting
            experiences. Founded with passion and precision, our mission is to
            redefine masculine grooming through timeless techniques and modern
            style.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            Our expert barbers combine years of experience with a personal
            touch, ensuring every client leaves confident and looking their
            best. From classic fades to signature beard sculpting, each service
            is a tribute to craftsmanship.
          </p>
          <Button variant="outline" className="mt-4" asChild>
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>

      {/* Extended Info Section */}
      <div className="relative z-10 max-w-4xl w-full mt-16 space-y-6">
        {/* Company Vision & Values */}
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong>Our Mission:</strong> To elevate self-care by blending
            tradition with innovation, delivering exceptional grooming
            experiences tailored to the modern individual.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong>Our Values:</strong> Craftsmanship, authenticity,
            confidence, and community. We honor the barbering tradition while
            embracing modern style.
          </p>
        </div>

        {/* Leadership Section - Portrait Style */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-background/30 backdrop-blur-md border border-border rounded-xl overflow-hidden shadow-lg">
            <div className="relative w-full h-64 sm:h-72 md:h-96">
              <Image
                src="/logo/founder-suri.webp"
                alt="Suri Maharjan"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-primary mb-1">
                Founder: Suri Maharjan
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                With a passion for redefining masculine grooming, Suri founded
                Suir Barber Co. to create a space where heritage meets personal
                expression.
              </p>
            </div>
          </div>

          <div className="bg-background/30 backdrop-blur-md border border-border rounded-xl overflow-hidden shadow-lg">
            <div className="relative w-full h-64 sm:h-72 md:h-96">
              <Image
                src="/logo/cofounder-anita.webp"
                alt="Anita Shrestha"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-primary mb-1">
                Co-founder: Anita Shrestha
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Focused on operations and client experience, Anita ensures every
                detail of the studio reflects excellence, care, and community.
              </p>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-primary">Milestones</h3>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>
              2015 – Founded in Kathmandu by a visionary woman determined to
              redefine masculine grooming
            </li>
            <li>
              2018 – Introduced enhanced grooming services rooted in precision
              and luxury
            </li>
            <li>
              2022 – Introduced our signature in-house product line and
              personalized consultations
            </li>
            <li>
              Today – Celebrated as a bold, woman-led brand shaping modern
              barbering culture in Nepal
            </li>
          </ul>
        </div>
      </div>

      {/* Quote with proper spacing and z-index */}
      <blockquote className="mt-20 max-w-3xl mx-auto text-center italic text-accent text-xl font-semibold relative z-10">
        Where tradition meets style, your journey to confidence starts here.
      </blockquote>

      <Navbar />
    </section>
  );
}
