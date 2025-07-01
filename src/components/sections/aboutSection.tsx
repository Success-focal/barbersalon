"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "../layouts/Navbar";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

/**
 * AboutSection – Introduces brand story, mission, team, and milestones.
 * Serves as a brand immersion point for visitors.
 */
export default function AboutSection() {
  const MotionButton = motion(Button);
  // Variants
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.15, duration: 0.35, ease: "easeOut" },
    }),
  };

  const cardsContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.6,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  const milestonesVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.5 } },
  };

  const quoteVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, delay: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative bg-cover bg-center bg-fixed overflow-hidden flex flex-col items-center justify-center py-24 md:py-10 px-6 sm:px-12 lg:px-24 min-h-[100vh]"
      style={{ backgroundImage: "url('/images/Background.webp')" }}
    >
      {/* Background overlays to enhance depth and focus */}
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/30 z-0" />
      <div className="absolute inset-0 bg-background/10 mix-blend-multiply z-0" />

      {/* Section Heading */}
      <motion.div
        className="relative z-10 max-w-2xl text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={headingVariants}
      >
        <div className="flex items-center justify-center mb-4">
          {/* Decorative divider with centered heading */}
          <div className="w-12 h-px bg-accent mr-4" />
          <span className="text-accent font-semibold tracking-wider uppercase text-[2.168rem]">
            About us
          </span>
          <div className="w-12 h-px bg-accent ml-4" />
        </div>

        {/* Introductory brand message */}
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Experience the art of masculine grooming with a team dedicated to
          precision, style, and timeless craftsmanship.
        </p>
      </motion.div>

      {/* Main content block: image and brand story */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-4xl w-full">
        <motion.div
          className="relative w-full md:w-3/5 h-80 md:h-[480px] rounded-xl overflow-hidden shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={contentVariants}
          custom={0}
        >
          <Image
            src="/images/shop.avif"
            alt="Inside Suir Barber Co."
            fill
            className="object-cover object-right"
            priority
          />
        </motion.div>

        <motion.div
          className="w-full md:w-2/5 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={contentVariants}
          custom={1}
        >
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

          {/* Link to services for deeper engagement */}
          <MotionButton
            variant="outline"
            className="mt-4"
            asChild
            size="lg"
            whileHover={{
              scale: 1.08,
              transition: { type: "spring", stiffness: 300, damping: 15 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { type: "spring", stiffness: 500, damping: 20 },
            }}
          >
            <Link href="/services">Explore Our Services</Link>
          </MotionButton>
        </motion.div>
      </div>

      {/* Company mission, values, and extended storytelling */}
      <motion.div
        className="relative z-10 max-w-4xl w-full mt-16 space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={contentVariants}
        custom={2}
      >
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

        {/* Leadership profiles – Founder & Co-founder cards */}
        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={cardsContainerVariants}
        >
          {/* Founder Card */}
          <motion.div
            className="bg-background/30 backdrop-blur-md border border-border rounded-xl overflow-hidden shadow-lg"
            variants={cardVariants}
          >
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
          </motion.div>

          {/* Co-founder Card */}
          <motion.div
            className="bg-background/30 backdrop-blur-md border border-border rounded-xl overflow-hidden shadow-lg"
            variants={cardVariants}
          >
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
          </motion.div>
        </motion.div>

        {/* Key timeline events in company growth */}
        <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={milestonesVariants}
        >
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
        </motion.div>
      </motion.div>

      {/* Brand message quote to close the section with emotional tone */}
      <motion.blockquote
        className="mt-20 max-w-3xl mx-auto text-center italic text-accent text-xl font-semibold relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={quoteVariants}
      >
        Where tradition meets style, your journey to confidence starts here.
      </motion.blockquote>

      {/* Global navigation overlayed on background */}
      <Navbar />
    </section>
  );
}
