export type Education = {
  degree: string;
  institution: string;
  department: string;
  cgpa: string;
  expectedGraduation: string;
};

export type EducationTimelineItem = {
  level: string;
  institution: string;
  location: string;
  period: string;
  program: string;
  result: string;
  highlights: string[];
  image: {
    src: string;
    alt: string;
  };
};

export type Profile = {
  name: string;
  title: string;
  introduction: string;
  summary: string[];
  careerObjective: string;
  roles: string[];
  education: Education;
  focusAreas: string[];
  location: string;
  awards: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  links: {
    email: string;
    phone: string;
    linkedin: string;
    facebook: string;
    instagram: string;
    resume: string;
    resumeDocx: string;
    github?: string;
  };
};

export type ProjectStatus =
  | "Prototype"
  | "In Progress"
  | "Completed"
  | "Research"
  | "Personal Build"
  | "Course Project";

export type ProjectGalleryImage = {
  src: string;
  alt: string;
  caption: string;
  orientation: "landscape" | "portrait";
  fit?: "cover" | "contain";
};

export type ProjectFeatureGroup = {
  title: string;
  items: string[];
};

export type ProjectStat = {
  label: string;
  value: string;
};

export type ProjectProtocolCommand = {
  command: string;
  purpose: string;
};

export type ProjectVideoPreview = {
  embedUrl: string;
  title: string;
};

export type ProjectSpotlight = {
  eyebrow: string;
  title: string;
  summary: string;
  repositoryLabel: string;
  documentationLabel: string;
  documentationUrl?: string;
  videoLabel?: string;
  videoUrl?: string;
  stats: ProjectStat[];
  featureGroups: ProjectFeatureGroup[];
  protocolTitle?: string;
  protocol: ProjectProtocolCommand[];
  galleryTitle?: string;
  gallery: ProjectGalleryImage[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    fit?: "cover" | "contain";
  };
  techStack: string[];
  status: ProjectStatus;
  githubUrl: string;
  detailsUrl: string;
  videoPreview?: ProjectVideoPreview;
  spotlight?: ProjectSpotlight;
};

export type LabProject = {
  title: string;
  description: string;
  focus: string;
  tools: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ExperienceItem = {
  title: string;
  period: string;
  category: string;
  summary: string;
  highlights: string[];
};

export type Certificate = {
  title: string;
  issuer: string;
  issueDate: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  downloadUrl: string;
};
