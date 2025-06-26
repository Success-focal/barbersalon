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
      <nav className="z-20 fixed top-1/2 left-10 -translate-y-1/2 hidden xl:flex xl:flex-col flex-row gap-4 text-foreground scrollbar-hide">
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
                "hover:bg-accent"
              )}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile/Tablet Bottom Nav */}
      <nav className="z-20 fixed bottom-10 left-1/2 -translate-x-1/2 xl:hidden px-4 py-4 bg-transparent backdrop-blur-md shadow-xl ring-1 ring-border/40 w-[95%] md:w-[70%] overflow-hidden">
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
