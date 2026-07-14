import {
  Activity,
  Bot,
  Boxes,
  Cpu,
  FlaskConical,
  RadioTower
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { labProjects } from "@/data/lab";
import { engineeringLabSectionContent } from "@/data/sections";

const labIcons: Record<string, LucideIcon> = {
  "Scalable Home Automation": Boxes,
  "AI Pet Robot": Bot,
  "ESP32 Experiments": Cpu,
  "Bluetooth Mesh": RadioTower
};

export function EngineeringLabSection() {
  return (
    <Section id="lab" className="border-t border-border-muted bg-canvas-muted/35">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-success/25 bg-success-muted/30 px-3 py-1.5 text-xs font-medium text-success">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-success opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              {engineeringLabSectionContent.liveStatusLabel}
            </div>

            <p className="mt-6 font-mono text-sm font-medium uppercase tracking-[0.18em] text-accent-secondary">
              {engineeringLabSectionContent.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
              {engineeringLabSectionContent.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-foreground-muted">
              {engineeringLabSectionContent.description}
            </p>

            <div className="mt-8 rounded-xl border border-border bg-surface-card p-5 shadow-card shadow-line">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-md border border-border-muted bg-surface-inset text-success">
                  <FlaskConical className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {engineeringLabSectionContent.researchMode.title}
                  </p>
                  <p className="text-sm text-foreground-subtle">
                    {engineeringLabSectionContent.researchMode.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {labProjects.map((project) => {
              const Icon = labIcons[project.title] ?? Activity;

              return (
                <article
                  key={project.title}
                  className="group rounded-xl border border-border bg-surface-card p-5 shadow-card shadow-line transition duration-300 hover:-translate-y-1 hover:border-success/45 hover:bg-surface-card-hover hover:shadow-elevated"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-11 items-center justify-center rounded-md border border-border-muted bg-surface-inset text-success transition group-hover:border-success/35">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-success/25 bg-success-muted/30 px-2.5 py-1 text-xs font-medium text-success">
                      <span className="size-1.5 rounded-full bg-success" />
                      {engineeringLabSectionContent.cardStatusLabel}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-foreground-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 border-t border-border-muted pt-4">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-foreground-subtle">
                      {project.focus}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-md border border-border-muted bg-surface-inset px-2.5 py-1 text-xs font-medium text-foreground-muted"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
