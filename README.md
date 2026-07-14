# Srijan Baral Turja Portfolio

Personal portfolio website for Srijan Baral Turja, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Current Scope

This pass creates the production-ready project architecture and reusable foundation only. Full page content and section implementation should be added incrementally on top of this structure.

## Structure

```txt
src/
  app/                 App Router routes, metadata, robots, sitemap
  components/          Reusable UI, layout, motion, SEO, and shared primitives
  data/                Profile, navigation, section copy, and portfolio-owned data
  features/portfolio/  Portfolio-specific domain components and types
  lib/                 App config, metadata helpers, constants, utilities
  styles/              Global Tailwind layer and design tokens
  types/               Shared TypeScript contracts
public/
  documents/           Resume and downloadable files
  icons/               Favicons and platform icons
  images/              Optimized local imagery
docs/
  architecture.md      Architecture notes and implementation conventions
```

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
```
