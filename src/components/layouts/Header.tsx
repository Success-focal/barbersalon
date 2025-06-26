"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0  z-50">
      <div
        className={`w-full mx-auto flex items-center px-4 py-4 sm:py-6 md:py-8
          ${isHome ? "justify-center" : "justify-start"}`}
      >
        <Link href="/" className="block">
          <Image
            src="/logo/logo.png"
            alt="Barber Salon Logo"
            width={60}
            height={60}
            className="h-16 sm:h-20 md:h-24 w-auto transition-all duration-300 hover:scale-105"
          />
        </Link>
      </div>
    </header>
  );
}
