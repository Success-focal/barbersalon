"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * Header – Fixed top navigation header showing the brand logo.
 *
 * Behavior:
 * - On the home page ("/"), the logo is centered and displayed larger.
 * - On other pages, the logo shifts to the left and scales down.
 *
 * Uses Next.js `usePathname` to detect the current route and conditionally
 * adjust layout and logo size accordingly.
 *
 * Smooth transitions for position and size changes enhance user experience.
 */

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-10 transition-all duration-500 ease-in-out">
      <div
        className={cn(
          "w-full flex items-center px-4 py-4 transition-all duration-700 ease-in-out",
          isHome ? "justify-center" : "justify-start"
        )}
      >
        <Link
          href="/"
          className="block transition-transform duration-700 ease-in-out"
        >
          <div
            className={cn(
              "relative aspect-square",
              isHome ? "h-32 sm:h-40 md:h-48" : "h-14 sm:h-20 md:h-24"
            )}
          >
            <Image
              src="/logo/logo.svg"
              alt="Barber Salon Logo"
              fill
              priority
              className="object-contain transition-all duration-700 ease-in-out"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
