"use client";
import { motion, Variants } from "framer-motion";
import Navbar from "../../layouts/Navbar";
import {
  ServiceCardList,
  ServiceConsultationCTA,
  ServiceDetailsList,
} from "./servicesDetails";

/**
 * ServicesSection – Highlights the brand's signature grooming services.
 * Combines multiple visual layers, storytelling, and modular components
 * to guide users through offerings with clarity and impact.
 */
export default function ServicesSection() {
  // Animation variants for different elements
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const decorativeLineVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.3,
      },
    },
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  const cardContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const sectionTwoVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <section
      className="relative w-full min-h-[100vh] bg-cover bg-center bg-fixed flex items-center justify-center py-24 md:py-10"
      style={{ backgroundImage: "url('/images/Background.webp')" }}
    >
      {/* Background overlays to enhance contrast and add visual depth */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-background/10 mix-blend-multiply" />
      {/* Central container for content and layout */}
      <motion.div
        className="flex flex-col items-center text-center relative z-10 mx-auto px-2 lg:px-20 w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section introduction and brand message */}
        <motion.div className="relative z-10 mb-12 pt-4">
          {/* Decorative heading separator */}
          <motion.div className="flex items-center justify-center mb-4">
            <motion.div
              className="w-12 h-px bg-accent mr-4 origin-left"
              variants={decorativeLineVariants}
            />
            <motion.span
              className="text-accent font-semibold tracking-wider uppercase text-base sm:text-lg md:text-xl lg:text-[2.168rem] whitespace-nowrap"
              variants={headingVariants}
            >
              Signature Services
            </motion.span>
            <motion.div
              className="w-12 h-px bg-accent ml-4 origin-right"
              variants={decorativeLineVariants}
            />
          </motion.div>

          {/* Section subheading and brand tone */}
          <motion.h1
            className="text-base sm:text-lg md:text-[1.618rem] lg:text-2xl font-bold text-primary mb-4 px-2"
            variants={headingVariants}
            whileHover={{
              y: -2,
              transition: { duration: 0.2 },
            }}
          >
            Redefining Masculine Grooming
            <motion.span
              className="block text-primary mt-2"
              variants={textVariants}
            >
              Where Craft Meets Character
            </motion.span>
          </motion.h1>

          {/* Supporting copy to set expectations and tone */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4"
            variants={textVariants}
          >
            Step into a world where every cut, trim, and detail is a tribute to
            timeless style. Our services combine traditional techniques with
            modern precision because your look deserves mastery.
          </motion.p>
        </motion.div>

        {/* Service offerings preview – card layout */}
        <motion.div
          className="max-w-4xl w-full px-4 sm:px-6 lg:px-0 mx-auto"
          variants={cardContainerVariants}
        >
          <motion.div
            variants={itemVariants}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ServiceCardList />
          </motion.div>

          {/* Section to introduce deeper explanation and values */}
          <motion.div
            className="mt-16 sm:mt-20 md:mt-24 mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto px-4 sm:px-6"
            variants={sectionTwoVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 leading-snug"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              What Sets Us Apart
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-base sm:text-lg leading-relaxed"
              variants={textVariants}
            >
              Beyond the basics, we offer signature experiences crafted to
              indulge, refresh, and elevate. Here&apos;s a closer look at the
              artistry behind each of our premium services.
            </motion.p>
          </motion.div>

          {/* Detailed breakdown of premium services */}
          <motion.div
            variants={itemVariants}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.2 },
            }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ServiceDetailsList />
          </motion.div>
        </motion.div>

        {/* CTA encouraging customers to initiate consultation or booking */}
        <motion.div
          variants={itemVariants}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, delay: 0.3 },
          }}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          viewport={{ once: true, amount: 0.5 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          <ServiceConsultationCTA />
        </motion.div>
      </motion.div>

      {/* Global navbar overlayed for persistent navigation */}

      <Navbar />
    </section>
  );
}
