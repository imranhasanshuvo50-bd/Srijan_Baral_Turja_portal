import { BadgeCheck, BriefcaseBusiness, CalendarDays, CheckCircle2, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { relevantExperience } from "@/data/experience";
import { experienceSectionContent } from "@/data/sections";

const experienceIcons: LucideIcon[] = [ShieldCheck, BriefcaseBusiness];

export function ExperienceSection() {
  return (
    <Section id="experience" className="border-t border-border-muted bg-canvas">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {experienceSectionContent.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
              {experienceSectionContent.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">
              {experienceSectionContent.description}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-success/25 bg-success-muted/30 px-3 py-1.5 text-xs font-medium text-success">
              <BadgeCheck className="size-4" aria-hidden="true" />
              {experienceSectionContent.currentLabel}
            </div>
          </div>

          <div className="grid gap-4">
            {relevantExperience.map((experience, index) => {
              const Icon = experienceIcons[index % experienceIcons.length];
              const headingId = `experience-${experience.title.toLowerCase().replaceAll(" ", "-")}`;

              return (
                <article
                  key={experience.title}
                  aria-labelledby={headingId}
                  className="rounded-xl border border-border-muted bg-surface-card/80 p-5 shadow-card shadow-line transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-surface-card-hover hover:shadow-elevated"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border-muted bg-surface-inset text-accent">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                          {experience.category}
                        </p>
                        <h3 id={headingId} className="mt-2 text-lg font-semibold text-foreground">
                          {experience.title}
                        </h3>
                      </div>
                    </div>

                    <div className="inline-flex w-fit items-center gap-2 rounded-md border border-border-muted bg-surface-inset px-3 py-1.5 text-xs font-medium text-foreground-muted">
                      <CalendarDays className="size-4" aria-hidden="true" />
                      {experience.period}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-foreground-muted">{experience.summary}</p>

                  <ul className="mt-5 grid gap-3 text-sm text-foreground-muted sm:grid-cols-3">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-accent-secondary"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
