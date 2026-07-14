import type { SkillGroup } from "@/features/portfolio/types";

export const technicalSkills = [
  {
    title: "Electrical Engineering",
    skills: [
      "Electrical Installation",
      "Power Systems",
      "Circuit Analysis",
      "Electrical Troubleshooting",
      "Electrical Drawing Interpretation"
    ]
  },
  {
    title: "Design & Documentation",
    skills: ["AutoCAD", "Technical Documentation", "Report Preparation", "Microsoft Office"]
  },
  {
    title: "Testing & Operations",
    skills: ["Testing", "Troubleshooting", "Operational Coordination", "Process Improvement"]
  },
  {
    title: "Engineering Tools",
    skills: ["AutoCAD", "MATLAB/Simulink", "PLC & Industrial Automation"]
  },
  {
    title: "Professional Coordination",
    skills: ["Team Coordination", "Communication", "Problem Solving"]
  }
] satisfies SkillGroup[];

export const softSkills = [
  {
    title: "Professional Skills",
    skills: [
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Adaptability",
      "Time Management",
      "Analytical Thinking",
      "Leadership"
    ]
  }
] satisfies SkillGroup[];
