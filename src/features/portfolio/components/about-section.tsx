import { Building2, GraduationCap, MapPin, Trophy } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";
import { aboutSectionContent } from "@/data/sections";

const quickFacts = [
  {
    label: aboutSectionContent.quickFactLabels.location,
    value: profile.location,
    icon: MapPin
  },
  {
    label: aboutSectionContent.quickFactLabels.university,
    value: "AIUB",
    icon: Building2
  },
  {
    label: aboutSectionContent.quickFactLabels.department,
    value: profile.education.department,
    icon: GraduationCap
  },
  {
    label: aboutSectionContent.quickFactLabels.cgpa,
    value: profile.education.cgpa,
    icon: Trophy
  }
];

export function AboutSection() {
  return (
    <Section id="about" className="border-t border-border-muted bg-canvas-muted/35 py-10 sm:py-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start lg:gap-16">
          <div>
            <h2 className="border-l-2 border-accent pl-3 text-2xl font-semibold text-foreground">
              {aboutSectionContent.eyebrow}
            </h2>
            <div className="mt-5 grid max-w-2xl gap-4 text-sm leading-7 text-foreground-muted">
              {profile.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-3 rounded-xl border border-border-muted bg-surface-card/80 p-5 shadow-card shadow-line">
            {quickFacts.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 text-sm"
              >
                <div className="flex size-8 items-center justify-center rounded-md text-accent">
                  <Icon className="size-4" aria-hidden="true" />
                </div>
                <p className="font-medium leading-6 text-foreground">
                  {value}
                </p>
                <span className="sr-only">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
