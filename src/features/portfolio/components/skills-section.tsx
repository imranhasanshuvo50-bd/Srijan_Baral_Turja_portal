import { Brain, Check, Code2, Cpu, GitBranch, Hammer, TestTube2, Wrench } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { skillsSectionContent } from "@/data/sections";
import { softSkills, technicalSkills } from "@/data/skills";
import type { SkillGroup } from "@/features/portfolio/types";

const skillIcons = [Cpu, Wrench, Code2, Hammer, GitBranch, Brain];

function SkillGroupCard({ group, index }: { group: SkillGroup; index: number }) {
  const Icon = skillIcons[index % skillIcons.length];

  return (
    <article className="rounded-xl border border-border-muted bg-surface-card/80 p-5 shadow-card shadow-line transition hover:border-accent/45 hover:bg-surface-card-hover">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-accent-muted text-accent">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <h3 className="text-base font-semibold text-foreground">{group.title}</h3>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-border-muted bg-surface-inset px-2.5 py-1 text-xs font-medium text-foreground-muted"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

export function SkillsSection() {
  return (
    <Section id="skills" className="border-t border-border-muted bg-canvas py-10 sm:py-12">
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            {skillsSectionContent.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-foreground">
            {skillsSectionContent.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-foreground-muted">
            {skillsSectionContent.description}
          </p>
        </div>

        <div className="mt-8">
          <h3 className="border-l-2 border-accent pl-3 text-lg font-semibold text-foreground">
            {skillsSectionContent.technicalTitle}
          </h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {technicalSkills.map((group, index) => (
              <SkillGroupCard key={group.title} group={group} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="border-l-2 border-accent-secondary pl-3 text-lg font-semibold text-foreground">
            {skillsSectionContent.softTitle}
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {softSkills.flatMap((group) =>
              group.skills.map((skill) => (
                <article
                  key={skill}
                  className="flex items-center gap-3 rounded-xl border border-border-muted bg-surface-card/80 p-5 shadow-card shadow-line"
                >
                  <div className="flex size-9 items-center justify-center rounded-lg bg-success-muted text-success">
                    {skill === "Problem-Solving" ? (
                      <TestTube2 className="size-4" aria-hidden="true" />
                    ) : (
                      <Check className="size-4" aria-hidden="true" />
                    )}
                  </div>
                  <p className="text-sm font-semibold text-foreground">{skill}</p>
                </article>
              ))
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
