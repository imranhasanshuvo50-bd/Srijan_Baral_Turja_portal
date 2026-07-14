import { profile } from "@/data/profile";

export type SocialLinkKey = "linkedin" | "facebook" | "instagram" | "email" | "phone";

export const socialLinks = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: profile.links.linkedin
  },
  {
    key: "facebook",
    label: "Facebook",
    href: profile.links.facebook
  },
  {
    key: "instagram",
    label: "Instagram",
    href: profile.links.instagram
  },
  {
    key: "email",
    label: "Email",
    href: `mailto:${profile.links.email}`
  },
  {
    key: "phone",
    label: "Phone",
    href: `tel:${profile.links.phone}`
  }
] satisfies Array<{
  key: SocialLinkKey;
  label: string;
  href: string;
}>;
