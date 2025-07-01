"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/nav/navLink";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

  return (
    <>
      {/* Desktop Side Navbar */}
      <nav
        className={cn(
          "z-20 fixed top-1/2 left-10 -translate-y-1/2",
          "transition-all duration-500 ease-in-out opacity-100 xl:flex",
          "flex-col gap-4 text-foreground scrollbar-hide hidden"
        )}
      >
        {navLinks.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "relative px-4 py-2 bg-muted/30 shadow-md ring-1 rounded-md",
                "transition-all duration-300 ease-in-out",
                isActive
                  ? "text-primary bg-accent/30 hover:text-primary-foreground"
                  : "text-muted-foreground hover:text-secondary",
                "hover:bg-accent"
              )}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav
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
      </nav>
    </>
  );
}
