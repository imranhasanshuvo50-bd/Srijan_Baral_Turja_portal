import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { featuredProjects } from "@/data/projects";
import { featuredProjectsSectionContent } from "@/data/sections";
import { ProjectCard } from "@/features/portfolio/components/project-card";
import { ProjectSpotlight } from "@/features/portfolio/components/project-spotlight";

export function FeaturedProjectsSection() {
  return (
    <Section id="projects" className="border-t border-border-muted bg-canvas py-10 sm:py-12">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <h2 className="border-l-2 border-accent pl-3 text-2xl font-semibold text-foreground">
            {featuredProjectsSectionContent.eyebrow}
          </h2>
          <a
            href="#projects"
            className="hidden items-center gap-2 text-sm font-medium text-accent transition hover:text-accent-hover sm:inline-flex"
          >
            {featuredProjectsSectionContent.viewAllLabel}
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {featuredProjects.map((project) => (
          <ProjectSpotlight key={project.slug} project={project} />
        ))}
      </Container>
    </Section>
  );
}
