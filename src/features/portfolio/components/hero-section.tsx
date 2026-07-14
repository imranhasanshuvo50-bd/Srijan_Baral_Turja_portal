import Image from "next/image";
import { Code2, Download, Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";
import { heroSectionContent } from "@/data/sections";
import { socialLinks, type SocialLinkKey } from "@/data/social";
import { AnimatedRole } from "@/features/portfolio/components/animated-role";
import { withBasePath } from "@/lib/paths";

const socialIcons: Record<SocialLinkKey, LucideIcon> = {
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  email: Mail,
  phone: Phone
};

export function HeroSection() {
  return (
    <Section
      id="home"
      className="relative overflow-hidden border-b border-border-muted py-14 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgb(88_166_255_/_0.2),transparent_18rem),linear-gradient(rgb(88_166_255_/_0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(88_166_255_/_0.05)_1px,transparent_1px)] [background-size:auto,3.5rem_3.5rem,3.5rem_3.5rem]"
        aria-hidden="true"
      />
      <Container>
        <FadeIn className="relative grid items-center gap-12 lg:grid-cols-[1fr_25rem] lg:gap-16">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted">
              <span className="size-2 rounded-full bg-success" aria-hidden="true" />
              {heroSectionContent.eyebrow}
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-normal text-foreground sm:text-6xl">
              {profile.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="text-base font-medium text-accent">{profile.title}</span>
              <AnimatedRole roles={profile.roles} />
            </div>

            <p className="mt-5 max-w-xl text-base leading-8 text-foreground-muted">
              {profile.introduction}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#projects" icon={Code2}>
                {heroSectionContent.projectsLabel}
              </Button>
              <Button href={profile.links.resume} variant="secondary" icon={Download} download>
                Download {heroSectionContent.resumeLabel}
              </Button>
            </div>

            <nav aria-label={heroSectionContent.socialNavLabel} className="mt-8 flex items-center gap-3">
              {socialLinks.map(({ key, label, href }) => {
                const Icon = socialIcons[key];

                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex size-10 items-center justify-center rounded-md border border-border-muted bg-surface-card/80 text-foreground-muted shadow-line transition hover:border-accent/50 hover:bg-surface-card-hover hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="mx-auto w-full max-w-72 lg:max-w-[24rem]">
            <div className="relative mx-auto aspect-square max-w-[22rem] rounded-full border border-accent/45 p-3 shadow-[0_0_60px_rgb(88_166_255_/_0.28)]">
              <div className="absolute -left-1 bottom-[26%] size-5 rounded-full border border-accent bg-accent shadow-[0_0_22px_rgb(88_166_255_/_0.8)]" aria-hidden="true" />
              <div className="absolute inset-6 rounded-full border border-accent-hover/40" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-full border border-border-muted bg-surface-inset">
                <Image
                  src={withBasePath(profile.image.src)}
                  alt={profile.image.alt}
                  width={profile.image.width}
                  height={profile.image.height}
                  priority
                  className="aspect-square h-auto w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
