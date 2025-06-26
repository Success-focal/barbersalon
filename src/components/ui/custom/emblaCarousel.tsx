"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

interface EmblaCarouselProps {
  children: React.ReactNode;
  options?: Parameters<typeof useEmblaCarousel>[0];
  className?: string;
}

export function EmblaCarousel({
  children,
  options,
  className,
}: EmblaCarouselProps) {
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      containScroll: "trimSnaps",
      ...options,
    },
    [autoplay.current]
  );

  return (
    <div className={cn("overflow-hidden w-full", className)} ref={emblaRef}>
      <div className="flex touch-pan-y touch-pinch-zoom">{children}</div>
    </div>
  );
}
