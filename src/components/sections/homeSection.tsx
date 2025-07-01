"use client";

import React from "react";
import Navbar from "../layouts/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

/**
 * HomeSection – The landing hero section of the website.
 * Includes layered visual overlays, brand messaging, a CTA button,
 * and a persistent navigation bar.
 */
export default function HomeSection() {
  const MotionButton = motion(Button);
  // Variants for headline animation: scale up + subtle rotation
  const headlineVariants: Variants = {
    hidden: { scale: 0.8, rotate: -5, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Subtext wave-like horizontal skew animation (infinite)
  const subtextAnimation = {
    skewX: [0, 5, 0, -5, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop" as const,
      duration: 6,
      ease: "easeInOut" as const,
    },
  };

  return (
    <>
      <section
        id="home"
        className="relative w-full min-h-[100vh] bg-cover bg-fixed bg-center overflow-hidden flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/images/Back.png')" }}
      >
        {/* Layered overlay effects for visual depth and stylistic tone */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: [0.8, 0.85, 0.8] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        >
          {/* Gradient overlay to provide warmth and visual flow */}
          <div className="absolute inset-0 bg-gradient-to-bl from-amber-600/20 via-transparent to-amber-800/10" />

          {/* Semi-transparent black overlay to improve content contrast */}
          <div className="absolute inset-0 bg-black/40 mix-blend-overlay" />

          {/* Soft light effect to add a subtle atmospheric layer */}
          <div className="absolute inset-0 bg-white/5 mix-blend-soft-light" />
        </motion.div>

        {/* Main hero content: headline, subtext, and call-to-action */}
        <div className="relative z-10 text-center flex flex-col items-center px-6 sm:px-10">
          <div className="bg-white/5 backdrop-blur-xs p-6 sm:p-10 shadow-2xl border border-white/30">
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground drop-shadow-lg leading-tight mb-6"
              variants={headlineVariants}
              initial="hidden"
              animate="visible"
            >
              Master the Art of the Cut
            </motion.h1>

            <motion.p
              className="text-base sm:text-xl text-foreground/90 max-w-3xl mb-8 leading-relaxed drop-shadow-md"
              animate={subtextAnimation}
            >
              {/* Brand identity copy focused on emotion and craft */}
              Precision fades. Clean lines. Timeless style. At{" "}
              <span className="text-barber-accent font-semibold">
                Suri Barber Co.
              </span>
              , we don’t just cut hair, we sculpt confidence.
            </motion.p>

            {/* Call-to-action button navigating to the services page */}
            <MotionButton
              size="lg"
              className="text-base font-medium px-8 py-4 shadow-xl hover:scale-105 transition-transform duration-300"
              asChild
              whileHover={{
                scale: 1.08,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { type: "spring", stiffness: 500, damping: 20 },
              }}
            >
              <Link href="/services">Explore the Services</Link>
            </MotionButton>
          </div>
        </div>

        {/* Global navigation bar displayed on top of hero section */}

        <Navbar />

        {/* Attribution for the background music track used in this section */}
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
