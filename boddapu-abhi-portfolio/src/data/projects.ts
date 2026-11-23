export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  description: string;
  details: string;
  image?: string;
  imageAlt?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsSectionConfig = {
  title: 'Projects & Creations',
  subtitle: 'Ideas transformed into intelligent digital experiences.',
  emptyMessage:
    'Projects are currently being crafted. Stay tuned for upcoming creations.',
  emptySubtext:
    'This space is structured to showcase upcoming AI, Data Science, and Generative AI builds as they are completed and published.',
  previewImage: '/src/assets/images/projects_studio_preview_1795413206560.jpg',
  previewAlt:
    'Minimalist geometric data lattice and translucent smoked glass architectural composition',
};

export const projectsData: ProjectItem[] = [
  {
    id: 'student-learning-agent',
    name: 'Student Learning Agent',
    category: 'Generative AI · Education',
    description:
      'An AI-powered learning assistant designed to help students break down complex topics, structure study sessions, and explore concepts interactively.',
    details:
      'Student Learning Agent applies Generative AI and structured study workflows to support self-paced learners. It focuses on clear step-by-step explanations, topic organization, and guided Q&A so students can understand difficult concepts faster.',
    image: '/assets/aistudio/image_495e5024.png',
    imageAlt:
      'Student Learning Agent AI assistant illustration surrounded by knowledge, tools, memory, and safety icons',
    techStack: [
      'Python',
      'Generative AI',
      'Artificial Intelligence',
    ],
    githubUrl: 'https://github.com/abhiboddapu',
  },
];
