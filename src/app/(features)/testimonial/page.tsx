import TestimonialSection from "@/components/sections/testimonialSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Client Testimonials – Suir Barber Co.",
  description:
    "Hear from our satisfied clients about their exceptional grooming experiences at Suir Barber Co. Real stories of style, confidence, and care.",
};

const Page = () => {
  return (
    <div className="items-center justify-items-center min-h-screen w-full">
      <TestimonialSection />
    </div>
  );
};

export default Page;
