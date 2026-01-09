import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Projects', href: '#projects' },
  { name: 'Hobbies', href: '#hobbies' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS_DATA = {
  Finance: [
    'Financial Modeling',
    'Valuation Analysis',
    'Portfolio Management',
    'Equity Research',
    'Risk Assessment',
  ],
  Risk: [
    'Market Risk',
    'Credit Risk',
    'Operational Risk',
    'Quantitative Analysis',
    'Regulatory Compliance',
  ],
  Python: [
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Scikit-learn',
    'Django',
    'Flask',
  ],
  'Data Tools': [
    'SQL',
    'Tableau',
    'Power BI',
    'Excel',
    'R',
    'Google Analytics',
  ],
};

const [
  project1,
  project2,
  project3,
  hobby1,
  hobby2,
  hobby3,
] = PlaceHolderImages;

export type Project = {
  title: string;
  description: string;
  problem: string;
  tools: string[];
  outcome: string;
  image: ImagePlaceholder;
  liveUrl?: string;
  sourceUrl?: string;
};

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Automated Portfolio Risk Analyzer',
    description:
      'A Python-based tool for real-time risk assessment of equity portfolios.',
    problem:
      'Traders needed a way to quickly assess the Value at Risk (VaR) and other risk metrics for their portfolios without manual calculations in Excel.',
    tools: ['Python', 'Pandas', 'NumPy', 'SciPy', 'Matplotlib'],
    outcome:
      'Developed a script that reduced the time for daily risk reporting from 1 hour to under 5 minutes. The tool provided historical simulation and Monte Carlo VaR estimations.',
    image: project1,
    liveUrl: '#',
  },
  {
    title: 'DCF Valuation Model Dashboard',
    description:
      'An interactive web dashboard for performing Discounted Cash Flow (DCF) analysis on public companies.',
    problem:
      'Financial analysts required a more dynamic and shareable way to present their valuation models than static spreadsheets.',
    tools: ['Flask', 'Plotly Dash', 'Pandas', 'yfinance API'],
    outcome:
      'Created a web application that allows users to input their assumptions and instantly see the impact on a company’s valuation and generate PDF reports.',
    image: project2,
    sourceUrl: '#',
  },
  {
    title: 'Credit Score Prediction Model',
    description:
      'A machine learning model to predict credit default probability based on customer data.',
    problem:
      'A financial institution wanted to improve its loan approval process by more accurately identifying high-risk applicants.',
    tools: ['Python', 'Scikit-learn', 'TensorFlow', 'SQL', 'Tableau'],
    outcome:
      'The model achieved an 85% accuracy rate, improving upon the existing logistic regression model by 12%. Integrated into a Tableau dashboard for loan officers.',
    image: project3,
    liveUrl: '#',
    sourceUrl: '#',
  },
];

export type Hobby = {
  title: string;
  description: string;
  image: ImagePlaceholder;
};

export const HOBBIES_DATA: Hobby[] = [
  {
    title: 'Karate',
    description:
      'A discipline of mind and body, karate teaches me focus and perseverance. It is a constant pursuit of self-improvement and control.',
    image: hobby1,
  },
  {
    title: 'Boxing',
    description:
      'The sweet science of boxing is a test of strategy, endurance, and heart. It keeps me sharp, agile, and resilient under pressure.',
    image: hobby2,
  },
  {
    title: 'Video Editing',
    description:
      'I enjoy telling stories through video, combining visuals and sound to create compelling narratives. It is my creative outlet to transform ideas into motion.',
    image: hobby3,
  },
];
