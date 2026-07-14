import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { notFoundContent } from "@/data/sections";

export default function NotFound() {
  return (
    <Section className="flex min-h-[70vh] items-center">
      <Container>
        <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">
          {notFoundContent.code}
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-foreground">{notFoundContent.title}</h1>
        <p className="mt-3 max-w-xl text-foreground-muted">
          {notFoundContent.description}
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md border border-border bg-canvas-elevated px-4 py-2 text-sm font-medium text-foreground transition hover:border-border-strong hover:bg-canvas-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
        >
          {notFoundContent.homeLabel}
        </Link>
      </Container>
    </Section>
  );
}
