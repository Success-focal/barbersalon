import type { Metadata } from "next";
import { Belleza } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import AudioPlayer from "@/components/layouts/beatPlayer";

const belleza = Belleza({
  variable: "--font-belleza",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Suri Barber Co.",
  description: "Luxury grooming experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${belleza.variable} antialiased scroll-smooth font-belleza`}
      >
        <Header />
        {children}
        <AudioPlayer />
      </body>
    </html>
  );
}
