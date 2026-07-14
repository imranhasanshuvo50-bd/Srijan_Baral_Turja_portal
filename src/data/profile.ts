import type { Profile } from "@/features/portfolio/types";

export const focusAreas = [
  "Power Systems",
  "Electrical Installation",
  "AutoCAD",
  "Circuit Analysis",
  "Testing & Troubleshooting"
] as const;

export const profile: Profile = {
  name: "Srijan Baral Turja",
  title: "Electrical Engineer (EEE Undergraduate)",
  introduction:
    "EEE undergraduate at AIUB focused on power systems, electrical installation, AutoCAD, circuit analysis, testing, troubleshooting, and technical documentation.",
  summary: [
    "I am an Electrical and Electronic Engineering undergraduate at American International University-Bangladesh with academic and practical interest in power systems, electrical installation, circuit analysis, AutoCAD-based electrical drawings, testing, and troubleshooting.",
    "I am a quick learner with strong communication, teamwork, documentation, and problem-solving skills. I am seeking a Graduate Electrical Engineer position where I can contribute to electrical installation, site coordination, project execution, and technical documentation with discipline and professional integrity."
  ],
  careerObjective:
    "Motivated EEE undergraduate at AIUB (CGPA 3.67/4.00) with knowledge of power systems, electrical installation, AutoCAD, circuit analysis, testing, troubleshooting, technical documentation and Microsoft Office. Quick learner with strong communication and problem-solving skills seeking a Graduate Electrical Engineer position at SIMEX Bangladesh.",
  roles: [
    "EEE Undergraduate",
    "Graduate Electrical Engineer Candidate",
    "Power Systems Learner",
    "Electrical Documentation"
  ],
  education: {
    degree: "B.Sc. in Electrical & Electronic Engineering (EEE)",
    institution: "American International University-Bangladesh (AIUB)",
    department: "Electrical & Electronic Engineering",
    cgpa: "3.67/4.00",
    expectedGraduation: "5th Semester Running"
  },
  focusAreas: [...focusAreas],
  location: "Dhaka, Bangladesh",
  awards: ["OSMIC SPECTRUM Club Member"],
  image: {
    src: "/images/profile-photo.jpg",
    alt: "Portrait of Srijan Baral Turja",
    width: 1600,
    height: 1600
  },
  links: {
    email: "srijanbaral989@gmail.com",
    phone: "+8801788628892",
    linkedin: "https://www.linkedin.com/in/srijan-baral-218804305",
    facebook: "https://www.facebook.com/share/1BbARjxyhq/",
    instagram: "https://www.instagram.com/srijan.baral.turja?igsh=ejN1NHhjN3luN3Ez",
    resume: "/documents/resume.pdf",
    resumeDocx: "/documents/resume.docx"
  }
};
