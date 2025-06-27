"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-5 transition-all duration-500 ease-in-out">
      <div
        className={cn(
          "w-full mx-auto flex items-center px-4 transition-all duration-700 ease-in-out py-4",
          isHome ? "justify-center" : "justify-start"
        )}
      >
        <Link
          href="/"
          className="block transition-transform duration-700 ease-in-out"
        >
          <Image
            src="/logo/logo.png"
            alt="Barber Salon Logo"
            width={60}
            height={60}
            className={cn(
              "w-auto transition-all duration-700 ease-in-out",
              isHome ? "h-28 sm:h-32 md:h-40" : "h-16 sm:h-20 md:h-24"
            )}
          />
        </Link>
      </div>
    </header>
  );
}
