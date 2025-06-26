import React from "react";
import Navbar from "../layouts/Navbar";
import { Button } from "@/components/ui/button";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: "url('/images/Background.webp')" }}
    >
      {/* Background overlays for depth */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-barber-accent/30 via-transparent to-black/40 z-0"></div>
      <div className="absolute inset-0 bg-background/20 mix-blend-multiply z-0"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center flex flex-col items-center px-6 sm:px-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-primary drop-shadow-2xl leading-tight mb-6">
          Master the Art of the Cut
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed drop-shadow-md">
          Precision fades. Clean lines. Timeless style. At{" "}
          <span className="text-barber-accent font-semibold">
            Suir Barber Co.
          </span>
          , we don’t just cut hair — we sculpt confidence.
        </p>

        <Button
          size="lg"
          className="text-base font-medium px-8 py-4  shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Explore the Services
        </Button>
      </div>

      {/* Navbar */}
      <Navbar />
    </section>
  );
}
