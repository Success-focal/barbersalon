import ServicesSection from "@/components/sections/servcies/serviceSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Services – Suir Barber Co.",
  description:
    "Discover our signature grooming services that blend traditional technique with modern luxury.",
};

const Page = () => {
  return (
    <div className="items-center justify-items-center min-h-screen w-full">
      <ServicesSection />
    </div>
  );
};

export default Page;
