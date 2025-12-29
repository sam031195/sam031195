export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  location?: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  bio: string;
  aboutMe?: string;
  summary?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  profileImage?: string;
}

export interface Award {
  id: string;
  title: string;
  category: string;
  icon: string; // Icon name or emoji
}

export interface Membership {
  id: string;
  company: string;
  role: string;
  duration: string;
  logoUrl: string; // Logo image URL
}

export interface TechStackItem {
  id: string;
  name: string;
  description: string;
  logoUrl: string; // Logo image URL
  category: 'Programming' | 'Machine Learning & AI' | 'Data & Systems' | 'Design & Frontend';
}

export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  imageUrl?: string;
  featured?: boolean;
  researchPaperUrl?: string;
  websiteUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  description: string;
  category: string;
  imageUrl?: string;
  featured?: boolean;
  url?: string;
}

export interface Content {
  about: {
    fallbackImage: string;
    fallbackSummary: string;
    fallbackLocation: string;
    contactHeading: string[];
    sectionTitles: {
      awards: string;
      membership: string;
      techStack: string;
    };
    sectionDescriptions: {
      awards: string;
      membership: string;
      techStack: string;
    };
    subscribeButton: string;
    membershipLogos: Record<string, string>;
    techStackCategories: string[];
  };
  projects: {
    title: string;
    subtitle: string;
    readMore: string;
    newsletter: {
      label: string;
      heading: string[];
      buttonText: string;
    };
  };
  blog: {
    title: string[];
    subtitle: string;
    byText: string;
    readArticle: string;
    searchPlaceholder: (count: number) => string;
  };
  research: {
    title: string;
    subtitle: string;
    viewMore: string;
    skills: {
      title: string;
      description: string;
    };
    cta: {
      title: string[];
      buttonText: string;
    };
  };
  lifestyle: {
    philosophy: {
      label: string;
      words: string[];
      description: string;
      imageUrl?: string;
    };
    beyondScreen: {
      title: string;
      description: string;
      items: {
        reading: string;
        location: string;
        football: string;
      };
      viewAll: string;
    };
    infoCards: {
      feed: {
        title: string;
        description: string;
        buttonText: string;
      };
      services: {
        title: string;
        description: string;
        buttonText: string;
      };
    };
    cta: {
      title: string[];
      buttonText: string;
    };
  };
  header: {
    navItems: Array<{ id: string; label: string }>;
    contactButton: string;
  };
}
