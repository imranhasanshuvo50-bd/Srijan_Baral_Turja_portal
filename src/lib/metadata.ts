import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/site-config";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteConfig.url,
  jobTitle: profile.title,
  email: profile.links.email,
  telephone: profile.links.phone,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: profile.education.institution
  },
  knowsAbout: profile.focusAreas
};
