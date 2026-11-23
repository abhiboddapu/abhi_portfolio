export interface SocialLink {
  id: 'github' | 'linkedin' | 'email';
  label: string;
  href: string;
  displayValue: string;
}

export const personalInfo = {
  fullName: 'Boddapu Abhi',
  monogram: 'AB.',
  department: 'Artificial Intelligence and Data Science (AI&DS)',
  departmentShort: 'Artificial Intelligence & Data Science',
  role: 'Aspiring Software Developer',
  stackSummary: 'Python | Java | Generative AI',
  email: 'abhiboddapu839@gmail.com',
  githubUrl: 'https://github.com/abhiboddapu',
  linkedinUrl: 'https://www.linkedin.com/in/boddapu-abhi-59a362321/',
  tagline: 'Exploring Intelligence. Creating Possibilities.',
  alternativeTagline: 'Turning Ideas Into Intelligent Experiences.',
  hero: {
    kicker: 'Aspiring Software Developer',
    heading: "Hi, I'm Boddapu Abhi.",
    animatedHeadline: 'Python | Java | Generative AI',
    rotatingRoles: [
      'Aspiring Software Developer',
      'AI & Data Science Student',
      'Generative AI Explorer',
      'Creative Media Enthusiast',
    ],
    description:
      'Passionate about Artificial Intelligence, Generative AI, and emerging technologies. Exploring innovative ideas and building a future powered by intelligent technology.',
  },
  about: {
    title: 'About Me',
    subtitle: 'Curious Mind. Intelligent Technology. Continuous Growth.',
    paragraphs: [
      "I'm Boddapu Abhi, an Artificial Intelligence and Data Science student with a strong interest in Artificial Intelligence and Generative AI.",
      'I enjoy exploring emerging technologies, understanding how intelligent systems work, and discovering innovative ways to use technology alongside software development and creative media.',
      'My goal is to continuously learn, improve my skills, and contribute to building intelligent and meaningful digital solutions.',
    ],
    summaryStatement:
      'I believe technology and creativity together can create meaningful digital experiences.',
    highlights: [
      {
        title: 'Artificial Intelligence',
        note: 'Understanding intelligent systems and real-world applications.',
      },
      {
        title: 'Generative AI',
        note: 'Exploring creative models, language tools, and modern workflows.',
      },
      {
        title: 'Software Development',
        note: 'Building problem-solving foundations across Python, Java, and clean engineering.',
      },
      {
        title: 'Creative Media',
        note: 'Blending graphic design, video editing, shooting, and content writing.',
      },
    ],
    sculptureImage: '/src/assets/images/about_ai_sculpture_1795413207583.jpg',
    sculptureAlt:
      'Abstract obsidian and titanium sculptural model representing artificial intelligence neural connectivity',
  },
  // Set resumeUrl to '/resume.pdf' once a PDF is placed in /public/resume.pdf.
  resumeUrl: null as string | null,
  socialLinks: [
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/abhiboddapu',
      displayValue: 'github.com/abhiboddapu',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/boddapu-abhi-59a362321/',
      displayValue: 'linkedin.com/in/boddapu-abhi-59a362321',
    },
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:abhiboddapu839@gmail.com',
      displayValue: 'abhiboddapu839@gmail.com',
    },
  ] satisfies SocialLink[],
} as const;
