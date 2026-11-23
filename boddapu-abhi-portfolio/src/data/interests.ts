export interface InterestItem {
  id: string;
  title: string;
  domain: string;
  summary: string;
  explorationFocus: string;
  iconKey:
    | 'cpu'
    | 'wand'
    | 'radar'
    | 'lightbulb'
    | 'puzzle'
    | 'compass';
}

export const interestsData: InterestItem[] = [
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    domain: 'Intelligent Systems',
    summary:
      'Understanding how computational models reason, learn from patterns, and support real-world decision-making.',
    explorationFocus:
      'Studying core AI principles, problem formulation, and practical applications across modern software.',
    iconKey: 'cpu',
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    domain: 'Creative Synthesis',
    summary:
      'Exploring large language models, generative interfaces, and how AI augments human creativity.',
    explorationFocus:
      'Experimenting with prompt design, generative workflows, and responsible creative AI applications.',
    iconKey: 'wand',
  },
  {
    id: 'emerging-technologies',
    title: 'Emerging Technologies',
    domain: 'Future Horizon',
    summary:
      'Following new breakthroughs in data science, developer tooling, and next-generation digital platforms.',
    explorationFocus:
      'Tracking how rapidly evolving technologies reshape how individuals and teams build solutions.',
    iconKey: 'radar',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    domain: 'Applied Thinking',
    summary:
      'Translating curiosity and emerging technical concepts into fresh, practical digital ideas.',
    explorationFocus:
      'Looking beyond conventional patterns to design experiences that feel thoughtful and forward-looking.',
    iconKey: 'lightbulb',
  },
  {
    id: 'creative-problem-solving',
    title: 'Creative Problem Solving',
    domain: 'Design & Logic',
    summary:
      'Connecting analytical structure with creative perspective to untangle meaningful real-world challenges.',
    explorationFocus:
      'Breaking complex questions into clear steps and iterating toward human-centered outcomes.',
    iconKey: 'puzzle',
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    domain: 'Growth Mindset',
    summary:
      'Committing to steady exploration, sharing knowledge clearly, and evolving alongside the AI field.',
    explorationFocus:
      'Building durable fundamentals through reading, community exchange, and hands-on experimentation.',
    iconKey: 'compass',
  },
];
