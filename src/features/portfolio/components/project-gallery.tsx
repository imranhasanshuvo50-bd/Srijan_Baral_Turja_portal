"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Eye, X } from "lucide-react";

import { projectCardContent } from "@/data/sections";
import type { ProjectGalleryImage } from "@/features/portfolio/types";
import { withBasePath } from "@/lib/paths";
import { cn } from "@/lib/utils";

const imageAspectStyles: Record<ProjectGalleryImage["orientation"], string> = {
  landscape: "aspect-[16/10]",
  portrait: "aspect-[9/16]"
};

type ProjectGalleryProps = {
  gallery: ProjectGalleryImage[];
  projectSlug: string;
  title: string;
};

export function ProjectGallery({ gallery, projectSlug, title }: ProjectGalleryProps) {
  const [activeImage, setActiveImage] = useState<ProjectGalleryImage | null>(null);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage]);

  return (
    <>
      <section aria-labelledby={`${projectSlug}-gallery`}>
        <h4 id={`${projectSlug}-gallery`} className="text-base font-semibold text-foreground">
          {title}
        </h4>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {gallery.map((image) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveImage(image)}
              className="group overflow-hidden rounded-xl border border-border-muted bg-surface-card/80 text-left shadow-card shadow-line transition hover:border-accent/45 hover:bg-surface-card-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
              aria-label={`${projectCardContent.spotlightLabels.viewImage} ${image.caption}`}
            >
              <span className="relative block overflow-hidden">
                <Image
                  src={withBasePath(image.src)}
                  alt={image.alt}
                  width={900}
                  height={1200}
                  sizes="(min-width: 1280px) 248px, (min-width: 640px) 50vw, 100vw"
                  className={cn(
                    "w-full bg-surface-inset transition duration-300 group-hover:scale-[1.02]",
                    imageAspectStyles[image.orientation],
                    image.fit === "contain" ? "object-contain" : "object-cover"
                  )}
                />
                <span className="absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-center gap-2 rounded-md border border-border-muted bg-canvas/90 px-3 py-2 text-xs font-medium text-foreground opacity-0 shadow-card transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <Eye className="size-3.5" aria-hidden="true" />
                  {projectCardContent.spotlightLabels.viewImage}
                </span>
              </span>
              <span className="block border-t border-border-muted px-3 py-2 text-xs font-medium text-foreground-muted">
                {image.caption}
              </span>
            </button>
          ))}
        </div>
      </section>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${projectSlug}-gallery-preview-title`}
          onClick={() => setActiveImage(null)}
        >
          <div
            className="max-h-[94vh] w-full max-w-6xl overflow-hidden rounded-xl border border-border bg-canvas shadow-elevated"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
              <div>
                <h3
                  id={`${projectSlug}-gallery-preview-title`}
                  className="text-lg font-semibold text-foreground"
                >
                  {activeImage.caption}
                </h3>
                <p className="mt-1 text-sm leading-6 text-foreground-muted">{activeImage.alt}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface-card text-foreground-muted transition hover:border-border-strong hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
                aria-label={projectCardContent.spotlightLabels.closePreview}
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-[calc(94vh-6rem)] overflow-auto bg-surface-inset p-4 sm:p-6">
              <Image
                src={withBasePath(activeImage.src)}
                alt={activeImage.alt}
                width={1800}
                height={1600}
                sizes="100vw"
                className="mx-auto h-auto max-h-[72vh] w-auto max-w-full rounded-lg border border-border bg-canvas object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
