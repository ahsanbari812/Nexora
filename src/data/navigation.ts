import { NavGroup, NavItem } from "@/types";

export const MAIN_NAVIGATION: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "For Organizations", href: "/organizations" },
  { label: "For Students", href: "/students" },
  { label: "For Educators", href: "/educators" },
  { label: "About", href: "/about" },
];

export const PRIMARY_CTA: NavItem = {
  label: "Discuss Training",
  href: "/contact",
};

export const FOOTER_NAV_GROUPS: NavGroup[] = [
  {
    title: "Programs",
    items: [
      { label: "For Students", href: "/students" },
      { label: "For Educators", href: "/educators" },
      { label: "For Organizations", href: "/organizations" },
      { label: "Workshops & Bootcamps", href: "/programs" },
      { label: "All Programs", href: "/programs" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Nexora", href: "/about" },
      { label: "Our Mission", href: "/about#mission" },
      { label: "Core Principles", href: "/about#beliefs" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Custom Training Builder", href: "/builder" },
      { label: "Capability Framework", href: "/#framework" },
      { label: "Training Formats", href: "/programs#formats" },
      { label: "Admissions & Inquiries", href: "/contact" },
    ],
  },
  {
    title: "Contact",
    items: [
      { label: "WhatsApp Consultation", href: "https://wa.me/?text=Hello%20Nexora%20AI%20Academy", isExternal: true },
      { label: "admissions@nexora.academy", href: "mailto:admissions@nexora.academy", isExternal: true },
      { label: "Discuss Customized Training", href: "/contact" },
    ],
  },
];

export const BRAND_INFO = {
  name: "NEXORA AI ACADEMY",
  shortName: "NEXORA",
  tagline: "Learn AI. Build Smarter. Work Better.",
  description: "Nexora AI Academy provides practical AI and technology training helping students, educators, and organizations move from AI awareness to practical capability.",
  email: "admissions@nexora.academy",
  whatsapp: "+1 (555) 019-2834",
  copyright: `© ${new Date().getFullYear()} Nexora AI Academy. All rights reserved.`,
};
