export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  status: string;
  achievements: {
    label: string;
    value: string;
  }[];
  summary: string;
}

export const educationData: EducationEntry[] = [
  {
    id: 'btech',
    degree: 'B-Tech',
    institution: 'Satya Institute of Technology and Management',
    period: '2023 – 2027',
    status: 'Pursuing',
    achievements: [
      { label: 'CGPA', value: '6.96' },
      { label: 'Subject', value: 'AI&DS' },
    ],
    summary:
      'Undergraduate engineering studies focused on Artificial Intelligence and Data Science, building software development foundations across Python, Java, and Generative AI.',
  },
  {
    id: 'intermediate',
    degree: 'Intermediate',
    institution: 'Siddartha Junior College',
    location: 'Tuni',
    period: '2021 – 2023',
    status: 'Completed',
    achievements: [
      { label: 'GPA', value: '8.7' },
      { label: 'Subject', value: 'MPC' },
    ],
    summary:
      'Completed higher secondary education in Mathematics, Physics, and Chemistry (MPC), establishing strong analytical and quantitative problem-solving fundamentals.',
  },
];
