import TeamSection from "@/components/sections/teamSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Meet the Team – Suir Barber Co.",
  description:
    "Get to know the passionate professionals behind our craft. Discover the talent that brings Suir Barber Co. to life.",
};

const Page = () => {
  return (
    <div className="items-center justify-items-center min-h-screen w-full">
      <TeamSection />
    </div>
  );
};

export default Page;
