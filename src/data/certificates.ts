import type { Certificate } from "@/features/portfolio/types";

export const certificates = [
  {
    title: "IEEE Certified Professional in Database System",
    issuer: "IEEE",
    issueDate: "Listed in CV",
    thumbnail: {
      src: "/images/certificates/academic-excellence.svg",
      alt: "IEEE certification card"
    },
    downloadUrl: "/images/certificates/academic-excellence.svg"
  },
  {
    title: "IEEE Learning Network Courses",
    issuer: "IEEE Learning Network",
    issueDate: "Recommended",
    thumbnail: {
      src: "/images/certificates/ai-iot.svg",
      alt: "IEEE Learning Network courses card"
    },
    downloadUrl: "/images/certificates/ai-iot.svg"
  },
  {
    title: "AutoCAD Certification",
    issuer: "Recommended",
    issueDate: "Recommended",
    thumbnail: {
      src: "/images/certificates/embedded-systems.svg",
      alt: "AutoCAD certification card"
    },
    downloadUrl: "/images/certificates/embedded-systems.svg"
  },
  {
    title: "MATLAB/Simulink Certification",
    issuer: "Recommended",
    issueDate: "Recommended",
    thumbnail: {
      src: "/images/certificates/ai-iot.svg",
      alt: "MATLAB and Simulink certification card"
    },
    downloadUrl: "/images/certificates/ai-iot.svg"
  },
  {
    title: "PLC & Industrial Automation Training",
    issuer: "Recommended",
    issueDate: "Recommended",
    thumbnail: {
      src: "/images/certificates/academic-excellence.svg",
      alt: "PLC and industrial automation training card"
    },
    downloadUrl: "/images/certificates/academic-excellence.svg"
  },
  {
    title: "Current Resume",
    issuer: "Srijan Baral Turja",
    issueDate: "2026",
    thumbnail: {
      src: "/images/cv-design-srijan.png",
      alt: "Resume preview for Srijan Baral Turja"
    },
    downloadUrl: "/documents/resume.pdf"
  },
  {
    title: "Cover Letter",
    issuer: "Application to SIMEX Bangladesh",
    issueDate: "30 June 2026",
    thumbnail: {
      src: "/images/cover-letter-srijan.png",
      alt: "Cover letter preview for SIMEX Bangladesh application"
    },
    downloadUrl: "/images/cover-letter-srijan.png"
  }
] satisfies Certificate[];
