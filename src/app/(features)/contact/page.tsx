import Navbar from "@/components/layouts/Navbar";
import RecaptchaProvider from "@/components/reCaptchaProvider";
import { ContactForm } from "@/components/sections/contactSection";
import { Clock4, MapPin, Phone, Scissors } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Suri Barber Co.",
  description:
    "Reach out to Suri Barber Co. for appointments, queries. We're here to help!",
};

export default function Page() {
  return (
    <section
      className="relative w-full min-h-[100vh] bg-cover bg-center bg-fixed overflow-hidden py-20 px-6 sm:px-10 md:px-16 lg:px-24"
      style={{ backgroundImage: "url('/images/Background.webp')" }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-background/10 mix-blend-multiply" />

      <div className="relative z-10 ">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 sm:w-12 h-px bg-accent mr-3 sm:mr-4" />
            <Scissors className="w-8 h-8 text-accent" />
            <h1 className="text-accent font-semibold tracking-wider uppercase text-lg sm:text-xl md:text-2xl lg:text-[2.168rem] text-center leading-tight">
              Suri Barber Co.
            </h1>
            <Scissors className="w-8 h-8 text-accent scale-x-[-1]" />
            <div className="w-8 sm:w-12 h-px bg-accent mr-3 sm:mr-4" />
          </div>
          <p className="text-muted-foreground text-lg">
            Get in touch with us for inquiries or book your appointment
          </p>
        </div>

        <RecaptchaProvider>
          <ContactForm />
        </RecaptchaProvider>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto px-6 py-16">
          {/* Map Section */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                Find Us Here
              </h2>
            </div>
            <div className="overflow-hidden shadow-md border border-muted">
              <iframe
                title="Suri Barber Co. Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1686.8284161774154!2d85.33413174351918!3d27.671429761931197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c2a519a38b%3A0xaef4c5e4e667295!2sGuita%20Domar!5e1!3m2!1sen!2snp!4v1751260274970!5m2!1sen!2snp"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="bg-muted/40 p-8 shadow-sm space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-primary flex items-center gap-2 mb-2">
                <MapPin size={20} /> Studio Location
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">
                  Suri Barber Co.
                </span>
                <br />
                Gwarko, Lalitpur, Nepal
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary flex items-center gap-2 mb-2">
                <Phone size={20} /> Contact
              </h3>
              <p className="text-muted-foreground">
                <a href="tel:+9779818361787" className="hover:underline block">
                  +977-9818361787
                </a>
                <a
                  href="mailto:info@suribarber.com"
                  className="hover:underline block"
                >
                  info@suribarber.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary flex items-center gap-2 mb-2">
                <Clock4 size={20} /> Working Hours
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {[
                  ["Sunday", "11:00 AM – 07:00 PM"],
                  ["Monday", "11:00 AM – 08:00 PM"],
                  ["Tuesday", "11:00 AM – 08:00 PM"],
                  ["Wednesday", "11:00 AM – 08:00 PM"],
                  ["Thursday", "11:00 AM – 08:00 PM"],
                  ["Friday", "10:00 AM – 08:00 PM"],
                  ["Saturday", "10:00 AM – 08:00 PM"],
                ].map(([day, hours]) => (
                  <li key={day}>
                    <span className="font-medium text-foreground">{day}:</span>{" "}
                    {hours}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </section>
  );
}
