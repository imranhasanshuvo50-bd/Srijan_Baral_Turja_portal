"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type ProjectVideoPreviewProps = {
  children: ReactNode;
  embedUrl: string;
  title: string;
  mode?: "hover" | "always";
  className?: string;
};

export function ProjectVideoPreview({
  children,
  embedUrl,
  title,
  mode = "hover",
  className
}: ProjectVideoPreviewProps) {
  const [isActive, setIsActive] = useState(mode === "always");
  const shouldShowVideo = mode === "always" || isActive;

  return (
    <div
      className={cn("relative", className)}
      onPointerEnter={() => setIsActive(true)}
      onPointerMove={() => setIsActive(true)}
      onPointerLeave={() => setIsActive(false)}
      onMouseEnter={() => setIsActive(true)}
      onMouseMove={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
    >
      {children}

      {shouldShowVideo ? (
        <iframe
          title={title}
          src={embedUrl}
          className="pointer-events-none absolute inset-0 size-full border-0 bg-black"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : null}
    </div>
  );
}
