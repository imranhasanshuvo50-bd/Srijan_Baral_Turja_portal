# Portfolio Architecture

## Goals

- Keep the portfolio fast, accessible, SEO-friendly, and easy to extend.
- Use Server Components by default and Client Components only for interactivity or Framer Motion.
- Keep content centralized so recruiter-facing copy can be edited without digging through layouts.
- Build reusable primitives before composing full sections or pages.

## Route Strategy

- `src/app/layout.tsx` owns global metadata, fonts, and the site shell.
- `src/app/(site)/page.tsx` is the only route scaffolded in this pass.
- Future routes should live under route groups, for example `src/app/(site)/projects/page.tsx` or `src/app/(site)/contact/page.tsx`.

## Component Strategy

- `components/ui` contains small design primitives with stable APIs.
- `components/layout` contains site chrome such as header, footer, and shell.
- `components/motion` contains isolated Client Components for animation.
- `features/portfolio` contains portfolio-domain components that may compose UI primitives.

## Design Direction

- Dark developer aesthetic inspired by GitHub, VS Code, Vercel, and Linear.
- Minimal motion, restrained contrast, clear information hierarchy, and recruiter-friendly scanning.
- Accessibility defaults: semantic HTML, visible focus states, readable contrast, and reduced-motion support.

## Content Strategy

- `src/data/profile.ts` is the source of truth for owner information.
- `src/data/navigation.ts` is the source of truth for site navigation.
- `src/data/sections.ts` centralizes section copy so components stay render-focused.
- Full project, experience, and article content can be added later as typed data modules.
