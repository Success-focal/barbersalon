import React from "react";
import Navbar from "../layouts/Navbar";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: "url('/images/Background.webp')" }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/20 to-transparent"></div>
      <div className="absolute inset-0 bg-background/20 mix-blend-multiply"></div>

      {/* Top Header with centered logo on mobile */}

      {/* Central Logo for Desktop */}
      <div className="flex flex-col items-center text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 max-w-4xl text-foreground px-4">
        <h1 className="text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg tracking-tight">
          Master the Art of the Cut
        </h1>
        <p className="text-2xl max-w-3xl mx-auto drop-shadow-md">
          Precision fades. Clean lines. Classic style. <br />
          At <strong>BarberSalon</strong>, we don’t just cut hair - we craft
          confidence.
        </p>
      </div>

      {/* Side Nav on Desktop, Horizontal Nav on Mobile */}
      <Navbar />
    </section>
  );
}
