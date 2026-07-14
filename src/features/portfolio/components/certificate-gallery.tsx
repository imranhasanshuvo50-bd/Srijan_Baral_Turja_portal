"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Download, Eye, X } from "lucide-react";

import { certificateGalleryContent } from "@/data/sections";
import type { Certificate } from "@/features/portfolio/types";
import { withBasePath } from "@/lib/paths";

type CertificateGalleryProps = {
  certificates: Certificate[];
};

export function CertificateGallery({ certificates }: CertificateGalleryProps) {
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!activeCertificate) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveCertificate(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCertificate]);

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-2">
        {certificates.map((certificate) => (
          <article
            key={certificate.title}
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface-card shadow-card shadow-line transition duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-surface-card-hover hover:shadow-elevated"
          >
            <button
              type="button"
              onClick={() => setActiveCertificate(certificate)}
              className="overflow-hidden border-b border-border-muted bg-white p-3 text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
              aria-label={`${certificateGalleryContent.previewLabelPrefix} ${certificate.title}`}
            >
              <Image
                src={withBasePath(certificate.thumbnail.src)}
                alt={certificate.thumbnail.alt}
                width={1440}
                height={980}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[1.42] h-auto w-full rounded-md object-contain transition duration-500 group-hover:scale-[1.02]"
              />
            </button>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold leading-snug text-foreground">
                {certificate.title}
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.16em] text-foreground-subtle">
                    {certificateGalleryContent.issuerLabel}
                  </dt>
                  <dd className="mt-1 leading-6 text-foreground-muted">
                    {certificate.issuer}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.16em] text-foreground-subtle">
                    {certificateGalleryContent.issueDateLabel}
                  </dt>
                  <dd className="mt-1 text-foreground-muted">{certificate.issueDate}</dd>
                </div>
              </dl>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setActiveCertificate(certificate)}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-canvas-elevated px-3 text-sm font-medium text-foreground transition hover:border-border-strong hover:bg-canvas-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
                >
                  <Eye className="size-4" aria-hidden="true" />
                  {certificateGalleryContent.viewLabel}
                </button>
                <a
                  href={withBasePath(certificate.downloadUrl)}
                  download
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-accent/35 bg-accent px-3 text-sm font-medium text-black transition hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
                >
                  <Download className="size-4" aria-hidden="true" />
                  {certificateGalleryContent.downloadLabel}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeCertificate ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-preview-title"
          onClick={() => setActiveCertificate(null)}
        >
          <div
            className="max-h-[94vh] w-full max-w-7xl overflow-hidden rounded-xl border border-border bg-canvas shadow-elevated"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
              <div>
                <h3 id="certificate-preview-title" className="text-lg font-semibold text-foreground">
                  {activeCertificate.title}
                </h3>
                <p className="mt-1 text-sm text-foreground-muted">
                  {activeCertificate.issuer} · {activeCertificate.issueDate}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface-card text-foreground-muted transition hover:border-border-strong hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
                aria-label={certificateGalleryContent.closePreviewLabel}
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-[calc(94vh-5rem)] overflow-auto bg-surface-inset p-4 sm:p-6">
              <Image
                src={withBasePath(activeCertificate.thumbnail.src)}
                alt={activeCertificate.thumbnail.alt}
                width={2200}
                height={1500}
                sizes="100vw"
                className="mx-auto h-auto w-full max-w-6xl rounded-lg border border-border bg-white"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
