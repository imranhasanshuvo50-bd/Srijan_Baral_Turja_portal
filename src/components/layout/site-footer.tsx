import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { profile } from "@/data/profile";
import { footerContent } from "@/data/sections";
import { socialLinks, type SocialLinkKey } from "@/data/social";

const socialIcons: Record<SocialLinkKey, LucideIcon> = {
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  email: Mail,
  phone: Phone
};

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border-muted bg-canvas-muted/55">
      <div className="container flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">
            {profile.links.email}
          </p>
          <p className="mt-1 text-sm text-foreground-subtle">
            {profile.links.phone} · © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
        <nav aria-label={footerContent.socialNavLabel} className="flex items-center gap-2">
          {socialLinks.map(({ key, label, href }) => {
            const Icon = socialIcons[key];

            return (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex size-9 items-center justify-center rounded-md border border-border-muted bg-surface-card text-foreground-muted transition hover:border-accent/45 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
