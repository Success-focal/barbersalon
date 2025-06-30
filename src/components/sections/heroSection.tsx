import React from "react";
import Navbar from "../layouts/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomeSection() {
  return (
    <>
      <section
        id="home"
        className="relative w-full min-h-[100vh] bg-cover bg-fixed bg-center overflow-hidden flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/images/Back.png')" }}
      >
        {/* 🎨 Gentle Cinematic Overlays */}
        <div className="absolute inset-0 z-0">
          {/* Warm gradient from top-right to bottom-left */}
          <div className="absolute inset-0 bg-gradient-to-bl from-amber-600/20 via-transparent to-amber-800/10" />

          {/* Subtle rich accent tone */}
          <div className="absolute inset-0 bg-black/40 mix-blend-overlay" />

          {/* Optional depth enhancer */}
          <div className="absolute inset-0 bg-white/5 mix-blend-soft-light" />
        </div>

        {/* 🌟 Main Content */}
        <div className="relative z-10 text-center flex flex-col items-center px-6 sm:px-10">
          <div className="bg-white/5 backdrop-blur-xs p-6 sm:p-10 shadow-2xl border border-white/30">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground drop-shadow-lg leading-tight mb-6">
              Master the Art of the Cut
            </h1>
            <p className="text-base sm:text-xl text-foreground/90 max-w-3xl mb-8 leading-relaxed drop-shadow-md">
              Precision fades. Clean lines. Timeless style. At{" "}
              <span className="text-barber-accent font-semibold">
                Suri Barber Co.
              </span>
              , we don’t just cut hair, we sculpt confidence.
            </p>

            <Button
              size="lg"
              className="text-base font-medium px-8 py-4 shadow-xl hover:scale-105 transition-transform duration-300"
              asChild
            >
              <Link href="/services">Explore the Services</Link>
            </Button>
          </div>
        </div>

        {/* 📍 Navbar */}
        <Navbar />

        {/* 🎵 Music Credit */}
        <p className="text-[8px] md:text-xs text-foreground/70 text-center mt-1 z-10 bottom-2 absolute">
          &quot;FAVHELLA&quot; by ANGELPLAYA & T-Mass ft. Mc Guidanny · ©{" "}
          <a
            href="https://ncs.io"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            NCS
          </a>
        </p>
      </section>
    </>
  );
}
