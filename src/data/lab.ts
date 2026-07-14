import type { LabProject } from "@/features/portfolio/types";

export const labProjects = [
  {
    title: "Power Systems Study",
    description:
      "Strengthening understanding of generation, transmission, distribution, load behavior, and practical system reliability.",
    focus: "Power Systems",
    tools: ["Load Flow", "Protection", "Distribution"]
  },
  {
    title: "Electrical Installation Practice",
    description:
      "Learning safe installation workflows, drawing interpretation, site coordination, and documentation discipline.",
    focus: "Installation",
    tools: ["Safety", "Drawings", "Documentation"]
  },
  {
    title: "AutoCAD Drawing",
    description:
      "Practicing clean electrical drawings, layout interpretation, and revision-ready technical documentation.",
    focus: "Design Documentation",
    tools: ["AutoCAD", "Layouts", "Schematics"]
  },
  {
    title: "Testing & Troubleshooting",
    description:
      "Building practical habits around inspection, test planning, issue isolation, and clear reporting.",
    focus: "Field Readiness",
    tools: ["Testing", "Reports", "Root Cause"]
  }
] satisfies LabProject[];
