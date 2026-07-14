import Image from "next/image";
import { CalendarDays, CheckCircle2, GraduationCap, MapPin } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { educationTimeline } from "@/data/education";
import { profile } from "@/data/profile";
import { educationSectionContent } from "@/data/sections";
import type { EducationTimelineItem } from "@/features/portfolio/types";
import { withBasePath } from "@/lib/paths";

type EducationCardProps = {
  item: EducationTimelineItem;
};

function EducationCard({ item }: EducationCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border-muted bg-surface-card/85 shadow-card shadow-line transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-surface-card-hover hover:shadow-elevated">
      <div className="relative overflow-hidden border-b border-border-muted bg-surface-inset">
        <Image
          src={withBasePath(item.image.src)}
          alt={item.image.alt}
          width={1100}
          height={825}
          sizes="(min-width: 1280px) 352px, (min-width: 768px) 50vw, 100vw"
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-md border border-accent/30 bg-accent-muted/80 px-2.5 py-1 text-xs font-medium text-accent">
          {item.level}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-snug text-foreground">
          {item.institution}
        </h3>

        <div className="mt-3 grid gap-2 text-sm text-foreground-muted">
          <p className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0 text-accent" aria-hidden="true" />
            {item.location}
          </p>
          <p className="flex items-center gap-2">
            <CalendarDays className="size-4 shrink-0 text-accent" aria-hidden="true" />
            {item.period}
          </p>
        </div>

        <dl className="mt-5 grid gap-3 rounded-lg border border-border-muted bg-surface-inset p-4 text-sm">
          <div>
            <dt className="text-xs font-medium uppercase text-foreground-subtle">
              {educationSectionContent.programLabel}
            </dt>
            <dd className="mt-1 font-medium text-foreground">{item.program}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase text-foreground-subtle">
              {educationSectionContent.resultLabel}
            </dt>
            <dd className="mt-1 font-medium text-accent-secondary">{item.result}</dd>
          </div>
        </dl>

        <div className="mt-5">
          <p className="text-xs font-medium uppercase text-foreground-subtle">
            {educationSectionContent.highlightsLabel}
          </p>
          <ul className="mt-3 grid gap-2 text-sm text-foreground-muted">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-secondary" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function EducationSection() {
  return (
    <Section id="education" className="border-t border-border-muted bg-canvas py-10 sm:py-12">
      <Container>
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div>
            <h2 className="border-l-2 border-accent pl-3 text-2xl font-semibold text-foreground">
              {educationSectionContent.eyebrow}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground-muted">
              {educationSectionContent.description}
            </p>
          </div>

          <div className="rounded-xl border border-border-muted bg-surface-card/80 p-4 shadow-card shadow-line">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-accent-muted text-accent">
                <GraduationCap className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase text-foreground-subtle">
                  {educationSectionContent.graduationLabel}
                </p>
                <p className="font-semibold text-foreground">
                  {profile.education.expectedGraduation}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {educationTimeline.map((item) => (
            <EducationCard key={item.institution} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
