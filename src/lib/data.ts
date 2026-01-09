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
  Python: [
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Scikit',
    'Yfinance',
    'QuantLib',
  ],
  'Finance Tools': [
    'MS Excel (Advanced, Financial Modeling, Pivot Tables)',
    'Quantitative Analysis',
  ],
  'Graphic Design': [
    'Canva',
    'Logo Design',
    'Merch & Template Design',
    'Video Editing (Adobe AE)',
  ],
  Others: ['GitHub', 'LaTeX', 'C/C++', 'Java'],
};

const [
  project1,
  project2,
  project3,
  hobby1,
  hobby2,
  hobby3,
  education1,
  volunteering1,
  education2,
  education3,
  volunteering2,
  volunteering3,
  hobby4,
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
    title: 'Fundamental Analysis of Stocks',
    description:
      'Performed equity valuation using Football Field Chart Analysis and financial metrics (P/E, EV/EBITDA, DCF).',
    problem:
      'Needed to perform comprehensive valuation on a list of stocks to identify investment opportunities.',
    tools: ['Python', 'Pandas', 'Yfinance'],
    outcome:
      'Developed a robust valuation model and visualized data to support investment decisions. The project source is available on GitHub.',
    image: project1,
    sourceUrl: 'https://github.com', // Replace with your actual GitHub link
  },
  {
    title: 'Netflix Viewing Trends Analysis',
    description:
      'Conducted data analysis on Netflix viewing trends to identify genre popularity and content release patterns.',
    problem:
      'Understanding content performance and viewer engagement on the Netflix platform.',
    tools: ['Excel', 'Python'],
    outcome:
      'Applied statistical tools and visualization techniques to derive insights and present findings on content strategy.',
    image: project2,
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
      'I am a dedicated martial artist, training in Karate to cultivate discipline, focus, and physical fitness.',
    image: hobby4,
  },
  {
    title: 'Boxing',
    description:
      'I practice boxing to improve my reflexes, conditioning, and strategic thinking in a high-intensity sport.',
    image: hobby2,
  },
  {
    title: 'Video Editing',
    description:
      'I enjoy telling stories through video, combining visuals and sound to create compelling narratives using Adobe After Effects.',
    image: hobby3,
  },
];

export type Education = {
  title: string;
  description: string;
  image: ImagePlaceholder;
};

export const EDUCATION_DATA: Education[] = [
  {
    title: 'B.S. Major, Economics',
    description:
      'Indian Institute of Science Education and Research, Bhopal (2024-Present, CGPA: 7.83)',
    image: education1,
  },
  {
    title: 'Senior Secondary',
    description: 'CISCE Board (2023, 95.50%)',
    image: education2,
  },
  {
    title: 'Secondary',
    description: 'CISCE Board (2021, 96.60%)',
    image: education3,
  },
];

export type Volunteering = {
  title: string;
  description: string;
  image: ImagePlaceholder;
};

export const VOLUNTEERING_DATA: Volunteering[] = [
  {
    title: 'Media Head, Computing and Networking Council, IISER-B',
    description: 'Responsible for managing media and communications for the council (Oct. 2025 - Present).',
    image: volunteering1,
  },
  {
    title: 'Vice President, LPC Computer Club, LPC',
    description:
      'Led club activities and initiatives (Mar. 2022 - Jun. 2023).',
    image: volunteering2,
  },
  {
    title: 'Secretary, Calculathon (Mathematics Club), LPC',
    description:
      'Organized and managed events for the mathematics club (Mar. 2022 - Jun. 2023).',
    image: volunteering3,
  },
];
