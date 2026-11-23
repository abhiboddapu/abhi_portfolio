export type SkillBadgeIcon =
  | 'photoshop'
  | 'premiere'
  | 'content'
  | 'camera'
  | 'ai'
  | 'genai'
  | 'python'
  | 'java'
  | 'communication'
  | 'vscode'
  | 'git'
  | 'vercel';

export interface SkillChipItem {
  id: string;
  name: string;
  icon: SkillBadgeIcon;
  detail: string;
}

export interface SkillCategoryCard {
  id: string;
  headingPrimary: string;
  headingSecondary: string;
  headerIcon: 'brush' | 'brain' | 'wrench';
  description: string;
  items: SkillChipItem[];
}

export const skillCategoriesData: SkillCategoryCard[] = [
  {
    id: 'programming-and-ai',
    headingPrimary: 'Programming',
    headingSecondary: '& AI',
    headerIcon: 'brain',
    description:
      'Core programming languages, Artificial Intelligence foundations, Generative AI exploration, and communication.',
    items: [
      {
        id: 'python',
        name: 'Python',
        icon: 'python',
        detail:
          'Programming for problem-solving, data science foundations, scripting, and AI workflows.',
      },
      {
        id: 'java',
        name: 'Java',
        icon: 'java',
        detail:
          'Object-oriented programming fundamentals, core logic, and structured software design.',
      },
      {
        id: 'artificial-intelligence',
        name: 'Artificial Intelligence',
        icon: 'ai',
        detail:
          'Exploring intelligent systems, AI concepts, and real-world applications.',
      },
      {
        id: 'generative-ai',
        name: 'Generative AI',
        icon: 'genai',
        detail:
          'Interested in generative technologies, large language models, and creative AI tools.',
      },
      {
        id: 'communication-skills',
        name: 'Communication Skills',
        icon: 'communication',
        detail:
          'Expressing ideas clearly, collaborating effectively, and sharing knowledge.',
      },
    ],
  },
  {
    id: 'creative-skills',
    headingPrimary: 'Creative',
    headingSecondary: 'Skills',
    headerIcon: 'brush',
    description:
      'Visual storytelling across graphic design, video production, editing, and structured written content.',
    items: [
      {
        id: 'graphic-design',
        name: 'Graphic Design',
        icon: 'photoshop',
        detail:
          'Visual layouts, typography balance, thumbnails, and digital brand graphics.',
      },
      {
        id: 'video-editing',
        name: 'Video Editing',
        icon: 'premiere',
        detail:
          'Pacing, narrative cuts, color adjustments, and polished post-production.',
      },
      {
        id: 'content-writing',
        name: 'Content Writing',
        icon: 'content',
        detail:
          'Clear storytelling, structured technical summaries, and engaging digital copy.',
      },
      {
        id: 'video-shooting',
        name: 'Video Shooting',
        icon: 'camera',
        detail: 'Framing, lighting awareness, and capturing clean visual footage.',
      },
    ],
  },
  {
    id: 'tools-and-workflow',
    headingPrimary: 'Tools &',
    headingSecondary: 'Platforms',
    headerIcon: 'wrench',
    description:
      'Everyday creative and engineering tools supporting software development, design, version control, and media workflows.',
    items: [
      {
        id: 'adobe-photoshop',
        name: 'Adobe Photoshop',
        icon: 'photoshop',
        detail:
          'Image composition, graphic assets, retouching, and visual design work.',
      },
      {
        id: 'adobe-premiere-pro',
        name: 'Adobe Premiere Pro',
        icon: 'premiere',
        detail:
          'Timeline editing, motion pacing, audio sync, and video exports.',
      },
      {
        id: 'vs-code',
        name: 'VS Code',
        icon: 'vscode',
        detail:
          'Primary development environment for Python, Java, and AI project workflows.',
      },
      {
        id: 'git-github',
        name: 'Git & GitHub',
        icon: 'git',
        detail:
          'Source control, repository management, and collaborative code hosting.',
      },
      {
        id: 'vercel',
        name: 'Vercel',
        icon: 'vercel',
        detail:
          'Modern cloud hosting and fast deployment workflows for project previews.',
      },
    ],
  },
];
