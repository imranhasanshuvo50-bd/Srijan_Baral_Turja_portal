"use client";

import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import type { KeyboardEvent, MouseEvent } from "react";

import { projectCardContent } from "@/data/sections";
import { ProjectVideoPreview } from "@/features/portfolio/components/project-video-preview";
import type { Project, ProjectStatus } from "@/features/portfolio/types";
import { withBasePath } from "@/lib/paths";
import { cn } from "@/lib/utils";

const statusStyles: Record<ProjectStatus, string> = {
  Prototype: "border-accent/30 bg-accent-muted/35 text-accent",
  "In Progress": "border-warning/30 bg-warning-muted/35 text-warning",
  Completed: "border-success/30 bg-success-muted/35 text-success",
  Research: "border-foreground-subtle/30 bg-surface-inset text-foreground-muted",
  "Personal Build": "border-success/30 bg-success-muted/35 text-success",
  "Course Project": "border-accent/30 bg-accent-muted/35 text-accent"
};

const placeholderRepositoryUrl = "https://github.com/";

type ProjectCardProps = {
  project: Project;
};

function isInteractiveTarget(target: EventTarget | null) {
  return target instanceof Element
    ? Boolean(target.closest("a, button, input, select, textarea, [role='button']"))
    : false;
}

export function ProjectCard({ project }: ProjectCardProps) {
  function openDetails() {
    window.location.href = project.detailsUrl;
  }

  function handleCardClick(event: MouseEvent<HTMLElement>) {
    if (isInteractiveTarget(event.target)) {
      return;
    }

    openDetails();
  }

  function handleCardKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.target !== event.currentTarget || isInteractiveTarget(event.target)) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDetails();
    }
  }

  const image = (
    <Image
      src={withBasePath(project.image.src)}
      alt={project.image.alt}
      width={960}
      height={540}
      className={cn(
        "aspect-[16/9] h-auto w-full bg-surface-inset transition duration-500 group-hover:scale-[1.03]",
        project.image.fit === "contain" ? "object-contain" : "object-cover"
      )}
    />
  );
  const hasRepository =
    project.githubUrl.trim().length > 0 && project.githubUrl !== placeholderRepositoryUrl;

  return (
    <article
      role="link"
      tabIndex={0}
      aria-label={`${projectCardContent.detailsLabel}: ${project.title}`}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-border-muted bg-surface-card/85 p-3 shadow-card shadow-line transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-surface-card-hover hover:shadow-elevated focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
    >
      <div className="relative overflow-hidden rounded-lg border border-border-muted bg-surface-inset">
        {project.videoPreview ? (
          <ProjectVideoPreview
            embedUrl={project.videoPreview.embedUrl}
            title={project.videoPreview.title}
          >
            {image}
          </ProjectVideoPreview>
        ) : (
          image
        )}
        <span
          className={cn(
            "absolute left-3 top-3 rounded-md border px-2 py-1 text-[0.68rem] font-medium",
            statusStyles[project.status]
          )}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
        <h3 className="text-base font-semibold leading-snug text-foreground">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-6 text-foreground-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border-muted bg-surface-inset px-2 py-0.5 text-[0.68rem] font-medium text-foreground-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          {hasRepository ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md text-xs font-medium text-foreground-muted transition hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
            >
              <Github className="size-4" aria-hidden="true" />
              {projectCardContent.githubLabel}
            </a>
          ) : (
            <span className="text-xs text-foreground-subtle">Coursework</span>
          )}
          <a
            href={project.detailsUrl}
            className="inline-flex items-center gap-2 rounded-md text-xs font-medium text-accent transition hover:text-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
          >
            {projectCardContent.detailsLabel}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
