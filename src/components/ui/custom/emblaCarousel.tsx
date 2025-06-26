"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

interface EmblaCarouselProps {
  children: React.ReactNode;
  options?: Parameters<typeof useEmblaCarousel>[1];
  className?: string;
}

export function EmblaCarousel({
  children,
  options,
  className,
}: EmblaCarouselProps) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      ...options,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  return (
    <div className={cn("overflow-hidden", className)} ref={emblaRef}>
      <div className="flex">{children}</div>
    </div>
  );
}
