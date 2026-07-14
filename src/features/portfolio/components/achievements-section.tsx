import Image from "next/image";
import { Award, GraduationCap, Sparkles } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { certificates } from "@/data/certificates";
import { profile } from "@/data/profile";
import { achievementsSectionContent } from "@/data/sections";
import { CertificateGallery } from "@/features/portfolio/components/certificate-gallery";
import { withBasePath } from "@/lib/paths";

export function AchievementsSection() {
  return (
    <Section id="certificates" className="border-t border-border-muted bg-canvas">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <p className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-accent">
              {achievementsSectionContent.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
              {achievementsSectionContent.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-foreground-muted">
              {achievementsSectionContent.description}
            </p>
          </div>

          <article className="overflow-hidden rounded-xl border border-success/30 bg-success-muted/20 shadow-card shadow-line">
            <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-success/30 bg-surface-inset text-success">
                    <Award className="size-6" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-success/25 bg-success-muted/30 px-3 py-1 text-xs font-medium text-success">
                      <Sparkles className="size-3.5" aria-hidden="true" />
                      {achievementsSectionContent.highlight.badge}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-foreground">
                      {achievementsSectionContent.highlight.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-foreground-muted">
                      {achievementsSectionContent.highlight.descriptionPrefix}
                      {` ${profile.education.department}`} at {profile.education.institution}.
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t border-success/20 pt-4 text-sm text-foreground-muted">
                      <GraduationCap className="size-4 text-success" aria-hidden="true" />
                      <span>
                        {achievementsSectionContent.highlight.cgpaPrefix} {profile.education.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <figure className="border-t border-success/20 bg-surface-inset md:border-l md:border-t-0">
                <Image
                  src={withBasePath(achievementsSectionContent.highlight.ceremonyPhoto.src)}
                  alt={achievementsSectionContent.highlight.ceremonyPhoto.alt}
                  width={900}
                  height={1600}
                  className="aspect-[4/3] h-full w-full object-cover object-[center_35%]"
                />
                <figcaption className="border-t border-border-muted px-4 py-3 text-xs font-medium text-foreground-muted">
                  {achievementsSectionContent.highlight.ceremonyPhoto.caption}
                </figcaption>
              </figure>
              </div>
          </article>
        </div>

        <div className="mt-14">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-foreground">
                {achievementsSectionContent.gallery.title}
              </h3>
              <p className="mt-2 text-sm text-foreground-muted">
                {achievementsSectionContent.gallery.description}
              </p>
            </div>
          </div>

          <CertificateGallery certificates={certificates} />
        </div>
      </Container>
    </Section>
  );
}
