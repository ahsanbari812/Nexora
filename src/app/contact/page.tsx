import React from "react";
import { Metadata } from "next";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactFAQ } from "@/components/contact/ContactFAQ";

export const metadata: Metadata = {
  title: "Contact & Consultations — Nexora AI Academy",
  description:
    "Let's build AI capability together. Discuss customized corporate training, institutional faculty workshops, or student bootcamps with Nexora AI Academy curriculum directors.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pb-16 md:pb-24">
      {/* 1. Hero with exact headline: Let's Build AI Capability Together. */}
      <ContactHero />

      {/* 2. Main Content Container */}
      <SectionContainer size="narrow">
        {/* Direct Channels: WhatsApp CTA & Direct Email */}
        <ContactChannels />

        {/* 7-Field Lead Inquiry Form */}
        <ContactForm />

        {/* Process & Common Inquiries */}
        <ContactFAQ />
      </SectionContainer>
    </main>
  );
}
