import { Cpu } from "lucide-react";

type FocusAreaCardProps = {
  title: string;
  description?: string;
};

export function FocusAreaCard({ title, description }: FocusAreaCardProps) {
  return (
    <article className="rounded-lg border border-border bg-canvas-muted p-5 transition hover:border-border-strong">
      <Cpu className="size-5 text-accent" aria-hidden="true" />
      <h3 className="mt-4 text-base font-medium text-foreground">{title}</h3>
      {description ? (
        <p className="mt-2 text-sm leading-6 text-foreground-muted">{description}</p>
      ) : null}
    </article>
  );
}
