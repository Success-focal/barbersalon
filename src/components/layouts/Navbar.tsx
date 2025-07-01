"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/nav/navLink";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

/**
 * Navbar – Responsive navigation component.
 *
 * Features:
 * - Desktop: Vertical sidebar fixed to the left, showing full nav links with active highlight.
 * - Mobile: Bottom horizontal scrollable nav bar optimized for small screens.
 *
 * Uses `usePathname` from Next.js to determine the current active route and
 * applies styles accordingly to highlight the active link.
 *
 * Utilizes a utility `cn` function for conditional classNames to keep styling clean.
 *
 * Accessibility and smooth UX considered with scroll snapping and hover/focus states.
 */

export default function Navbar() {
  const pathname = usePathname();

  const sidebarVariants: Variants = {
    hidden: {
      x: -50,
      opacity: 0,
      skewX: -5,
    },
    visible: {
      x: 0,
      opacity: 1,
      skewX: 0,
      transition: {
        type: "spring", // <- use the actual enum value or correct union
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const getCustomTransition = (i: number) => ({
    delay: i * 0.1,
  });

  return (
    <>
      {/* Desktop Side Navbar */}
      <motion.nav
        initial="hidden"
        animate="visible"
        className={cn(
          "z-20 fixed top-1/2 left-10 -translate-y-1/2",
          "transition-all duration-500 ease-in-out opacity-100 xl:flex",
          "flex-col gap-4 text-foreground scrollbar-hide hidden"
        )}
      >
        {navLinks.map(({ label, href }, i) => {
          const isActive = pathname === href;

          return (
            <motion.div
              key={href}
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              transition={getCustomTransition(i)}
              className="py-2"
            >
              <Link
                href={href}
                className={cn(
                  "relative px-4 py-2 rounded-md group flex items-center gap-2 transition-transform duration-300",
                  isActive
                    ? "scale-[1.05] text-gradient font-semibold bg-muted/40 shadow-inner"
                    : "text-muted-foreground hover:text-accent",
                  "hover:bg-accent/10"
                )}
              >
                {/* Left Pulse Bar for Active */}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-[4px] bg-gradient-to-b from-primary via-accent to-primary rounded-full shadow-md"
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  />
                )}

                {/* Text Label */}
                <span
                  className={cn(
                    "relative z-10 transition-all duration-300",
                    isActive &&
                      "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  )}
                >
                  {label}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </motion.nav>

      {/* Mobile Bottom Navbar */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 140,
          damping: 18,
          delay: 0.1,
        }}
        className={cn(
          "z-20 fixed bottom-10 left-1/2 -translate-x-1/2",
          "px-4 py-4 bg-background/80 backdrop-blur-md shadow-xl ring-1 ring-border/40",
          "w-[95%] md:w-[70%] overflow-hidden",
          "transition-all duration-500 ease-in-out opacity-100 xl:hidden"
        )}
      >
        <div className="flex flex-row gap-6 overflow-x-auto justify-between whitespace-nowrap scrollbar-hide px-4 scroll-smooth">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "snap-start text-sm font-medium transition-colors duration-300",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-accent"
                )}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
