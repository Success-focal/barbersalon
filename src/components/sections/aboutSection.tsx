"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "../layouts/Navbar";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed overflow-hidden flex flex-col items-center justify-center py-24 md:py-10 px-6 sm:px-12 lg:px-24"
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
        <div className="relative w-full md:w-3/4 h-80 md:h-[480px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/shop.avif"
            alt="Inside Suir Barber Co."
            fill
            className="object-cover object-right"
            priority
          />
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-extrabold text-primary tracking-tight">
            About Suir Barber Co.
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            At Suir Barber Co., we’re not just cutting hair. we’re crafting
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

      {/* Quote with proper spacing and z-index */}
      <blockquote className="mt-20 max-w-3xl mx-auto text-center italic text-accent text-xl font-semibold relative z-10">
        Where tradition meets style, your journey to confidence starts here.
      </blockquote>

      <Navbar />
    </section>
  );
}
