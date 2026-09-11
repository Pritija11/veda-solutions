import { Sparkles, Cloud, Code2, Database } from "lucide-react";

export const solutions = [
  {
    slug: "ai",
    number: "01",
    tag: "AI",
    icon: Sparkles,
    title: "AI & Intelligent Systems",
    shortDescription:
      "Intelligent workflows, automation, generative AI and AI-powered applications built into real products.",
    href: "/solutions/ai",
    pastel: "powder-blue",
  },
  {
    slug: "cloud",
    number: "02",
    tag: "CLOUD",
    icon: Cloud,
    title: "Cloud & DevOps",
    shortDescription:
      "Cloud infrastructure, deployment, scalability and reliable digital operations.",
    href: "/solutions/cloud",
    pastel: "soft-mint",
  },
  {
    slug: "software",
    number: "03",
    tag: "SOFTWARE",
    icon: Code2,
    title: "Software Engineering",
    shortDescription:
      "Web applications, APIs, platforms and custom digital products.",
    href: "/solutions/software",
    pastel: "butter-yellow",
  },
  {
    slug: "data",
    number: "04",
    tag: "DATA",
    icon: Database,
    title: "Data & Digital Intelligence",
    shortDescription:
      "Data systems, analytics and information-driven decision making.",
    href: "/solutions/data",
    pastel: "soft-apricot",
  },
] as const;
