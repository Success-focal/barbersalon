import AboutSection from "@/components/sections/aboutSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us – Suir Barber Co.",
  description:
    "Discover the story behind Suir Barber Co. Meet our passionate team and learn how we combine tradition and modern style to redefine masculine grooming.",
};

const Page = () => {
  return (
    <div className="items-center justify-items-center min-h-[100vh] w-full">
      <AboutSection />
    </div>
  );
};

export default Page;
