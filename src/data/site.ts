import { profile } from "@/data/profile";

export const siteData = {
  name: `${profile.name} | Portfolio`,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  description:
    "Portfolio of Srijan Baral Turja, an Electrical and Electronic Engineering undergraduate at AIUB focused on power systems, electrical installation, AutoCAD, circuit analysis, testing, troubleshooting, and technical documentation.",
  keywords: [
    "Srijan Baral Turja",
    "Electrical Engineer",
    "EEE Undergraduate",
    "Power Systems",
    "Electrical Installation",
    "AutoCAD",
    "Circuit Analysis",
    "SIMEX Bangladesh",
    "AIUB",
    "Electrical and Electronic Engineering"
  ]
};
