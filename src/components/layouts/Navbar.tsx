"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/nav/navLink";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar Nav */}
      <nav className="z-20 fixed top-1/2 left-10 -translate-y-1/2 hidden lg:flex flex-col gap-4 text-foreground">
        {navLinks.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "relative px-4 py-2 bg-muted/30 shadow-md ring-1",
                "transition-all duration-300",
                isActive
                  ? "text-primary bg-accent/30 hover:text-primary-foreground"
                  : "text-muted-foreground hover:text-secondary",
                "hover:bg-accent" // yellowish glow on hover
              )}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile/Tablet Bottom Nav */}
      <nav className="z-20 fixed bottom-10 left-1/2 -translate-x-1/2 flex lg:hidden gap-6 px-6 py-3 rounded-xl bg-background/80 text-primary backdrop-blur-md shadow-xl ring-1 ring-border/40">
        {navLinks.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "relative text-sm font-medium transition-colors duration-300",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-accent"
              )}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
