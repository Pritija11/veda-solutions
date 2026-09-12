import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = createPageMetadata(
  "Contact Us",
  "Get in touch with Veda Solutions Hub, a technology startup building software, websites, mobile apps, AI and cloud solutions for businesses. Tell us about your project.",
  "/contact",
);

export default function ContactPage() {
  return <ContactPageContent />;
}
