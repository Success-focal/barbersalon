import ContactPage from "@/components/sections/contact/contactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Suri Barber Co.",
  description:
    "Reach out to Suri Barber Co. for appointments, queries. We're here to help!",
};

export default function Page() {
  return <ContactPage />;
}
