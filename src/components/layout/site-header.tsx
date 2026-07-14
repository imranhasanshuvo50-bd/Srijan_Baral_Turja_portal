import Link from "next/link";
import { Moon } from "lucide-react";

import { navigation } from "@/data/navigation";
import { headerContent } from "@/data/sections";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-muted bg-canvas/95 shadow-card shadow-line">
      <div className="container relative grid gap-1.5 py-1.5 md:flex md:h-14 md:items-center md:gap-4 md:py-0">
        <Link
          href="#home"
          className="shrink-0 rounded-md font-mono text-base font-semibold text-accent transition hover:text-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas sm:text-lg"
          aria-label="Srijan Baral Turja home"
        >
          {headerContent.logoText}
        </Link>

        <a
          href="#contact"
          className="absolute right-4 top-2 flex size-9 shrink-0 items-center justify-center rounded-md text-foreground-muted transition hover:bg-surface-inset hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas md:static"
          aria-label={headerContent.contactLabel}
        >
          <Moon className="size-4" aria-hidden="true" />
        </a>

        <nav
          aria-label={headerContent.mainNavLabel}
          className="grid min-w-0 grid-cols-4 gap-1 pt-1 md:flex md:flex-1 md:items-center md:justify-center md:gap-4 md:overflow-visible md:pt-0 lg:gap-5"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-6 items-center justify-center rounded-md px-1 text-[10px] font-medium leading-4 text-foreground-muted transition hover:bg-surface-inset hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas sm:text-xs md:min-h-0 md:px-1 md:py-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
