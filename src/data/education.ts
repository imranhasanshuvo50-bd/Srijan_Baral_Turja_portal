import { profile } from "@/data/profile";
import type { EducationTimelineItem } from "@/features/portfolio/types";

export const educationTimeline = [
  {
    level: "University",
    institution: "American International University-Bangladesh (AIUB)",
    location: "Dhaka, Bangladesh",
    period: "5th Semester Running",
    program: profile.education.degree,
    result: `CGPA ${profile.education.cgpa}`,
    highlights: [
      profile.education.department,
      "Power Systems",
      "Electrical Installation and Circuit Analysis"
    ],
    image: {
      src: "/images/education/aiub-campus.jpg",
      alt: "AIUB campus with the university globe building"
    }
  },
  {
    level: "College",
    institution: "Govt. Joy Bangla College",
    location: "Bangladesh",
    period: "HSC 2024",
    program: "Science",
    result: "GPA 4.08/5.00",
    highlights: [
      "Higher Secondary Certificate",
      "Science Group",
      "Academic foundation for engineering studies"
    ],
    image: {
      src: "/images/education/govt-joy-bangla-college.svg",
      alt: "Govt. Joy Bangla College academic card"
    }
  },
  {
    level: "School",
    institution: "Khulna Zilla School",
    location: "Khulna, Bangladesh",
    period: "SSC 2022",
    program: "Science",
    result: "GPA 5.00/5.00",
    highlights: [
      "Secondary School Certificate",
      "Science Group",
      "Strong academic result"
    ],
    image: {
      src: "/images/education/khulna-zilla-school.svg",
      alt: "Khulna Zilla School academic card"
    }
  }
] satisfies EducationTimelineItem[];
