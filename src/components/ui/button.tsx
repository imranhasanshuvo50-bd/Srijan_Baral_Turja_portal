import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/paths";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  icon?: LucideIcon;
  size?: "sm" | "md";
  variant?: "primary" | "secondary";
  className?: string;
  download?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
};

const variants = {
  primary:
    "border-accent/40 bg-gradient-to-r from-accent to-accent-hover text-white shadow-[0_0_30px_rgb(88_166_255_/_0.22)] hover:brightness-110",
  secondary:
    "border-accent/25 bg-canvas-elevated text-foreground hover:border-accent/45 hover:bg-surface-inset"
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm"
};

export function Button({
  children,
  href,
  icon: Icon,
  size = "md",
  variant = "primary",
  className,
  download,
  target,
  rel
}: ButtonProps) {
  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || download;
  const Comp = isExternal ? "a" : Link;
  const resolvedHref = download ? withBasePath(href) : href;

  return (
    <Comp
      href={resolvedHref}
      download={download}
      target={target}
      rel={rel}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md border font-medium transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
      {Icon ? <Icon className="size-4" aria-hidden="true" /> : null}
    </Comp>
  );
}
