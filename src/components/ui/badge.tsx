import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
};

export function Badge({ children, icon: Icon, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-md border border-border bg-canvas-elevated px-3 py-1.5 text-xs font-medium text-foreground-muted shadow-line",
        className
      )}
    >
      {Icon ? <Icon className="size-3.5 text-accent" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
