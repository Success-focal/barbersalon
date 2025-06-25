"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/nav/navLink";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Side nav for large screens and up */}
      <nav className="z-20 fixed top-1/2 left-10 transform -translate-y-1/2 hidden lg:flex flex-col gap-6 text-foreground">
        {navLinks.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`font-semibold text-lg transition-colors ${
                isActive
                  ? "glitter-gold underline-glitter"
                  : "hover:text-barber-accent"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom nav for small to medium screens */}
      <nav
        className="z-20 fixed bottom-10 left-1/2 transform -translate-x-1/2 flex lg:hidden gap-6 text-primary 
  px-6 py-3 rounded-xl bg-black/60 backdrop-blur-md shadow-md"
      >
        {navLinks.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`font-medium text-sm transition-colors ${
                isActive
                  ? "glitter-gold underline-glitter"
                  : "hover:text-barber-accent"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
