import Image from "next/image";
import { ArrowUpRight, CheckCircle2, FileText, Github, PlayCircle, RadioTower } from "lucide-react";

import { projectCardContent } from "@/data/sections";
import { ProjectGallery } from "@/features/portfolio/components/project-gallery";
import { ProjectVideoPreview } from "@/features/portfolio/components/project-video-preview";
import type { Project } from "@/features/portfolio/types";
import { withBasePath } from "@/lib/paths";
import { cn } from "@/lib/utils";

const placeholderRepositoryUrl = "https://github.com/";

function getActionHref(href: string) {
  return href.startsWith("/") ? withBasePath(href) : href;
}

type ProjectSpotlightProps = {
  project: Project;
};

export function ProjectSpotlight({ project }: ProjectSpotlightProps) {
  if (!project.spotlight) {
    return null;
  }

  const hasRepository = project.githubUrl !== placeholderRepositoryUrl;
  const heroImage = (
    <Image
      src={withBasePath(project.image.src)}
      alt={project.image.alt}
      width={1600}
      height={1200}
      sizes="(min-width: 1024px) 42vw, 100vw"
      className={cn(
        "aspect-[4/3] w-full bg-surface-inset",
        project.image.fit === "contain" ? "object-contain" : "object-cover"
      )}
    />
  );

  return (
    <article
      id={project.slug}
      aria-labelledby={`${project.slug}-title`}
      className="mt-12 scroll-mt-28 border-t border-border-muted pt-10"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)] lg:items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-md border border-success/25 bg-success-muted/25 px-3 py-1.5 text-xs font-medium text-success">
            <RadioTower className="size-3.5" aria-hidden="true" />
            {project.spotlight.eyebrow}
          </div>

          <h3
            id={`${project.slug}-title`}
            className="mt-4 text-3xl font-semibold leading-tight text-foreground"
          >
            {project.spotlight.title}
          </h3>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground-muted">
            {project.spotlight.summary}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.spotlight.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border-muted bg-surface-card/80 p-4 shadow-card shadow-line"
              >
                <p className="text-xs font-medium uppercase text-foreground-subtle">
                  {stat.label}
                </p>
                <p className="mt-1 font-semibold text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {hasRepository ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-accent/30 bg-canvas-elevated px-4 text-sm font-medium text-foreground transition hover:border-accent/50 hover:bg-surface-inset focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
              >
                <Github className="size-4" aria-hidden="true" />
                {project.spotlight.repositoryLabel}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            ) : null}

            {project.spotlight.documentationUrl ? (
              <a
                href={getActionHref(project.spotlight.documentationUrl)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border-muted bg-surface-card px-4 text-sm font-medium text-foreground transition hover:border-accent/40 hover:bg-surface-inset focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
              >
                <FileText className="size-4" aria-hidden="true" />
                {project.spotlight.documentationLabel}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            ) : null}

            {project.spotlight.videoUrl ? (
              <a
                href={getActionHref(project.spotlight.videoUrl)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-success/30 bg-success-muted/25 px-4 text-sm font-medium text-foreground transition hover:border-success/45 hover:bg-success-muted/35 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
              >
                <PlayCircle className="size-4" aria-hidden="true" />
                {project.spotlight.videoLabel ?? "Watch Project Video"}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            ) : null}

            {!project.spotlight.documentationUrl && !project.spotlight.videoUrl ? (
              <span className="text-xs text-foreground-subtle">
                {project.spotlight.documentationLabel}
              </span>
            ) : null}
          </div>
        </div>

        <figure className="overflow-hidden rounded-xl border border-border-muted bg-surface-inset shadow-card shadow-line">
          {project.videoPreview ? (
            <ProjectVideoPreview
              embedUrl={project.videoPreview.embedUrl}
              title={project.videoPreview.title}
              mode="always"
            >
              {heroImage}
            </ProjectVideoPreview>
          ) : (
            heroImage
          )}
        </figure>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {project.spotlight.featureGroups.map((group) => (
          <section
            key={group.title}
            aria-labelledby={`${project.slug}-${group.title.toLowerCase().replaceAll(" ", "-")}`}
            className="rounded-xl border border-border-muted bg-surface-card/80 p-5 shadow-card shadow-line"
          >
            <h4
              id={`${project.slug}-${group.title.toLowerCase().replaceAll(" ", "-")}`}
              className="text-base font-semibold text-foreground"
            >
              {group.title}
            </h4>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-foreground-muted">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-accent-secondary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[22rem_minmax(0,1fr)]">
        <section
          aria-labelledby={`${project.slug}-protocol`}
          className="rounded-xl border border-border-muted bg-surface-card/80 p-5 shadow-card shadow-line"
        >
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-accent-muted text-accent">
              <RadioTower className="size-5" aria-hidden="true" />
            </div>
            <h4 id={`${project.slug}-protocol`} className="text-base font-semibold text-foreground">
              {project.spotlight.protocolTitle ?? projectCardContent.spotlightLabels.protocol}
            </h4>
          </div>

          <dl className="mt-5 grid gap-3">
            {project.spotlight.protocol.map((item) => (
              <div key={item.command} className="rounded-lg border border-border-muted bg-surface-inset p-3">
                <dt className="font-mono text-xs font-semibold text-accent">{item.command}</dt>
                <dd className="mt-1 text-sm leading-6 text-foreground-muted">{item.purpose}</dd>
              </div>
            ))}
          </dl>
        </section>

        <ProjectGallery
          gallery={project.spotlight.gallery}
          projectSlug={project.slug}
          title={project.spotlight.galleryTitle ?? projectCardContent.spotlightLabels.gallery}
        />
      </div>
    </article>
  );
}
