export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly githubUrl?: string;
  readonly liveUrl?: string;
  readonly imageUrl?: string;
  readonly embedInModal?: boolean;
  readonly websiteUrl?: string;
}

export interface Skill {
  readonly name: string;
  readonly level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface Experience {
  readonly id: string;
  readonly title: string;
  readonly company: string;
  readonly duration: string;
  readonly location?: string;
  readonly description: readonly string[];
  readonly technologies: readonly string[];
}

export interface Education {
  readonly degree: string;
  readonly institution: string;
  readonly duration: string;
  readonly description?: string;
}

export interface PersonalInfo {
  readonly name: string;
  readonly title: string;
  readonly email: string;
  readonly phone?: string;
  readonly location: string;
  readonly bio: string;
  readonly aboutMe?: string;
  readonly summary?: string;
  readonly github?: string;
  readonly linkedin?: string;
  twitter?: string;
  website?: string;
  profileImage?: string;
}

export interface Award {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly icon: string;
}

export interface Membership {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly duration: string;
  readonly logoUrl: string;
}

export interface TechStackItem {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly logoUrl: string;
  readonly category: 'Programming' | 'Machine Learning & AI' | 'Data & Systems' | 'Design & Frontend';
}

export interface ResearchProject {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly year: string;
  readonly imageUrl?: string;
  readonly featured?: boolean;
  readonly researchPaperUrl?: string;
  readonly websiteUrl?: string;
  readonly embedInModal?: boolean;
}

export interface SkillCategory {
  readonly title: string;
  readonly skills: readonly string[];
}

export interface BlogPost {
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly author: string;
  readonly description: string;
  readonly category: string;
  readonly imageUrl?: string;
  readonly featured?: boolean;
  readonly url?: string;
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
