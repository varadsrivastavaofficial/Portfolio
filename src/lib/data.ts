import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Sandbox', href: '#quant-sandbox' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Hobbies', href: '#hobbies' },
  { name: 'Contact', href: '#contact' },
];

export const PROFILE_DATA = {
  name: 'Varad Srivastava',
  title: 'Economics Major & Data Science Minor',
  institution: 'Indian Institute of Science Education and Research (IISER), Bhopal',
  phone: '+91-8860081209',
  email: 'varadsrivastavaofficial@gmail.com',
  collegeEmail: 'varad24@iiserb.ac.in',
  github: 'https://github.com/varadsrivastavaofficial',
  linkedin: 'https://www.linkedin.com/in/varadsrivastavaofficial/',
  bio: 'An analytical and detail-oriented undergraduate in Economics with strong quantitative, programming, and research skills. A philomath experienced in financial data analysis, statistics, data modelling, and Excel-based analytics. Passionate about investment research, risk analysis, and data-driven decision-making. Proven ability to work collaboratively and meet deadlines in fast-paced environments.',
};

export const SKILLS_DATA = {
  'Python & Quantitative': [
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Scikit-learn',
    'Yfinance',
    'QuantLib',
  ],
  'BI & Financial Analytics': [
    'Power BI',
    'MS Excel (Advanced, Financial Modeling)',
    'Risk Capital Modeling (Monte Carlo)',
    'Time Series & Meta Prophet',
    'DCF Valuation & Football Field Analysis',
  ],
  'Languages & AI Engineering': [
    'Java (Intermediate)',
    'C / C++ (Intermediate)',
    'AI & LLM Risk Agents',
    'Vibe Coding',
    'GitHub / Git',
    'LaTeX',
  ],
  'Creative & Media': [
    'Graphic Designing (Canva)',
    'Video Editing (Adobe After Effects)',
    'Brand & Merchandise Design',
  ],
  'Core Courses & Mathematics': [
    'Linear Algebra',
    'Multi-variable Calculus',
    'Probability & Statistics',
    'Discrete Mathematics',
    'Data Structures & Algorithms',
    'Econometrics',
    'Microeconomics & Macroeconomics',
  ],
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'Intern',
    company: 'Paterson Securities',
    period: 'July 2026 - Present',
    location: 'Remote',
    description:
      'Designed Trading Algorithms using Machine Learning techniques and backtested them systematically to achieve high AUC score and optimized Sharpe ratio.',
    skills: ['Trading Algorithms', 'Machine Learning', 'Backtesting', 'Sharpe Ratio', 'Python'],
  },
  {
    role: 'Data Intern',
    company: 'Karyarth Consultancy',
    period: 'May 2026 - July 2026',
    location: 'Remote',
    description:
      'Redesigned and automated data workflows using AI, significantly improving efficiency, pipeline reliability, and data accuracy across organizational operations.',
    skills: ['Data Workflows', 'AI Automation', 'Process Optimization', 'Python'],
  },
  {
    role: 'AI Applications Intern',
    company: 'Sri Sai Sathya Institute of Actuaries (SSSIA)',
    period: 'Jun. 2026',
    location: 'Remote',
    description:
      'Applied AI and ML techniques to develop an end-to-end Risk Capital Modelling and Validation AI Agent for business risk analytics that automates data cleaning through report generation utilizing Monte Carlo simulations and Meta Prophet.',
    skills: ['Risk Capital Modeling', 'Monte Carlo', 'Meta Prophet', 'AI Agents', 'Risk Analytics'],
  },
  {
    role: 'Data Visualization Intern',
    company: 'Infosys',
    period: 'Jan. 2026 - Apr. 2026',
    location: 'Remote',
    description:
      'Led a team analysing and forecasting Indian election trends using advanced data cleaning, predictive analytics, statistical modelling, and Power BI interactive dashboards.',
    skills: ['Power BI', 'Team Leadership', 'Predictive Analytics', 'Data Visualization'],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  year: string;
};

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: 'McKinsey Forward Program',
    issuer: 'McKinsey & Company',
    year: '2025',
  },
  {
    title: 'Python (Code in Place)',
    issuer: 'Stanford University',
    year: '2025',
  },
  {
    title: 'Fundamental Analysis Certification',
    issuer: 'Finance & Economics Club (FEC), IIT Guwahati',
    year: '2025',
  },
];

export type Language = {
  language: string;
  proficiency: string;
};

export const LANGUAGES_DATA: Language[] = [
  { language: 'English', proficiency: 'Proficient' },
  { language: 'Hindi', proficiency: 'Native' },
  { language: 'German', proficiency: 'Early Intermediate' },
];

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
  subtitle?: string;
  period?: string;
  category: 'Valuation' | 'Algorithmic' | 'Analytics';
  description: string;
  problem: string;
  tools: string[];
  outcome: string;
  metrics?: { label: string; value: string }[];
  deepDive?: {
    methodology: string;
    architecture: string;
    keyLearnings: string[];
  };
  image: ImagePlaceholder;
  liveUrl?: string;
  sourceUrl?: string;
};

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Fundamental Analysis of List of Stocks',
    subtitle: 'Finance & Economics Club • IIT Guwahati',
    period: 'May 2025 - Jun. 2025',
    category: 'Valuation',
    description:
      'Performed comprehensive equity valuation using Football Field Chart Analysis and core financial metrics (P/E, EV/EBITDA, DCF).',
    problem:
      'Traditional fundamental equity analysis is often fragmented across multiple disparate sources and lacks standardized multi-dimensional valuation ranges.',
    tools: ['Python', 'Pandas', 'Yfinance', 'DCF Valuation', 'Football Field Analysis'],
    outcome:
      'Engineered an automated pipeline aggregating balance sheets, calculating multi-stage DCF, and generating comparative valuation bands.',
    metrics: [
      { label: 'Valuation Metrics', value: 'DCF, P/E, EV/EBITDA' },
      { label: 'Data Source', value: 'Yfinance / SEC API' },
      { label: 'Pipeline Speed', value: '< 2.5s per Ticker' },
    ],
    deepDive: {
      methodology:
        'Constructed an intrinsic Discounted Cash Flow (DCF) model using a 5-year free cash flow projection with terminal growth rate (g=2.5%) and Weighted Average Cost of Capital (WACC) sensitivity matrix. Combined with relative valuation metrics (EV/EBITDA and P/E percentiles).',
      architecture:
        'Python backend orchestrating Yfinance data ingestion -> Pandas cash flow restructuring -> NumPy matrix DCF engine -> Football Field visualization.',
      keyLearnings: [
        'Sensitivity of terminal value to minor changes in WACC discount rates.',
        'Normalization of non-recurring line items in EBITDA across sector peers.',
      ],
    },
    image: project1,
    sourceUrl: 'https://github.com/varadsrivastavaofficial/Investing-_Portfolio_Project',
  },
  {
    title: 'Risk Capital Modelling AI Agent',
    subtitle: 'SSSIA Actuarial Project',
    period: 'Jun. 2026',
    category: 'Algorithmic',
    description:
      'Developed an autonomous AI agent for business risk capital validation, automating data cleaning, Monte Carlo simulation, and Meta Prophet forecasting.',
    problem:
      'Actuarial and risk validation workflows require tedious manual data scrubbing and computational validation across thousands of risk scenarios.',
    tools: ['Python', 'Monte Carlo (GBM)', 'Meta Prophet', 'AI Agents', 'Risk Analytics'],
    outcome:
      'Automated end-to-end actuarial risk assessment, producing capital adequacy ratios and statistical confidence intervals automatically.',
    metrics: [
      { label: 'Simulations', value: '10,000+ Scenarios' },
      { label: 'Time Saved', value: '~85% vs Manual' },
      { label: 'Confidence Band', value: '95% & 99% VaR' },
    ],
    deepDive: {
      methodology:
        'Employed Geometric Brownian Motion with jump-diffusion and Meta Prophet time-series modeling to project worst-case tail risk and compute 99% Value at Risk (VaR) and Expected Shortfall (CVaR).',
      architecture:
        'Agentic AI orchestrator -> Automated data preprocessing -> Monte Carlo simulation engine -> Automated LaTeX/HTML executive report builder.',
      keyLearnings: [
        'Handling fat-tailed non-Gaussian empirical distributions in business cash flows.',
        'Designing autonomous agent loops with deterministic validation checks.',
      ],
    },
    image: project3,
    sourceUrl: 'https://github.com/varadsrivastavaofficial',
  },
  {
    title: 'Netflix Viewing Trends & Content Strategy Analysis',
    subtitle: 'Data Analytics & Trend Modeling',
    period: '2025',
    category: 'Analytics',
    description:
      'Conducted data analysis on Netflix viewing trends to identify genre popularity and content release patterns.',
    problem:
      'Understanding global viewer engagement, content longevity, and release timing on streaming platforms.',
    tools: ['Power BI', 'Excel', 'Python', 'Pandas', 'Matplotlib'],
    outcome:
      'Derived predictive audience retention insights and created interactive executive dashboards.',
    metrics: [
      { label: 'Dataset Size', value: '50,000+ Titles' },
      { label: 'Dashboard', value: 'Power BI Live' },
      { label: 'Key Finding', value: 'Optimal Release Window' },
    ],
    deepDive: {
      methodology:
        'Cleaned historical viewership logs, analyzed genre saturation indices, and calculated retention half-life across seasonal launch windows.',
      architecture:
        'Python ETL pipeline -> Cleaned CSV warehouse -> Power BI DAX semantic data model -> Interactive executive report.',
      keyLearnings: [
        'Time-decay modeling for entertainment media consumption.',
        'Executive data storytelling with high visual impact in Power BI.',
      ],
    },
    image: project2,
    sourceUrl: 'https://github.com/varadsrivastavaofficial',
  },
];

export type Hobby = {
  title: string;
  description: string;
  image: ImagePlaceholder;
  tag?: string;
};

export const HOBBIES_DATA: Hobby[] = [
  {
    title: 'Karate',
    description:
      'Dedicated martial artist training in Karate to cultivate discipline, precision, focus, and peak physical fitness.',
    image: hobby4,
    tag: 'Martial Arts',
  },
  {
    title: 'Boxing',
    description:
      'Practicing boxing to sharpen reflexes, cardiovascular conditioning, and high-intensity strategic reaction.',
    image: hobby2,
    tag: 'Combat Sports',
  },
  {
    title: 'Video Creation & Motion Design',
    description:
      'Passionate about storytelling through video, synthesizing visual effects and dynamic motion graphics with Adobe After Effects.',
    image: hobby3,
    tag: 'Creative Media',
  },
];

export type Education = {
  title: string;
  institution: string;
  year: string;
  grade?: string;
  description: string;
  image: ImagePlaceholder;
};

export const EDUCATION_DATA: Education[] = [
  {
    title: 'B.S. Major in Economics (Minor in Data Science)',
    institution: 'Indian Institute of Science Education and Research (IISER), Bhopal',
    year: '2024 - Present',
    grade: 'CPI: 7.68',
    description:
      'Rigorous undergraduate program emphasizing quantitative economic theory, econometrics, statistics, mathematical modeling, data structures, and empirical analytics.',
    image: education1,
  },
  {
    title: 'Intermediate Class XII',
    institution: 'Lucknow Public College, CISCE Board',
    year: '2023',
    grade: '95.50%',
    description:
      'Graduated with top academic honors in Sciences and Mathematics under the CISCE Board curriculum.',
    image: education2,
  },
  {
    title: 'Matriculation Class X',
    institution: 'Lucknow Public College, CISCE Board',
    year: '2021',
    grade: '96.60%',
    description:
      'Completed Class X with distinction, demonstrating foundational excellence across analytical and scientific disciplines.',
    image: education3,
  },
];

export type Volunteering = {
  title: string;
  organization: string;
  period: string;
  description: string;
  image: ImagePlaceholder;
};

export const VOLUNTEERING_DATA: Volunteering[] = [
  {
    title: 'Media Head',
    organization: 'Computing and Networking Council (CNC), IISER Bhopal',
    period: 'Oct. 2025 - Present',
    description:
      'Leading digital communications, event promotion, and media campaigns for the student-led computing council.',
    image: volunteering1,
  },
  {
    title: 'Vice President',
    organization: 'LPC Computer Club',
    period: 'Mar. 2022 - Jun. 2023',
    description:
      'Spearheaded coding workshops, technical exhibitions, and inter-school competitive programming initiatives.',
    image: volunteering2,
  },
  {
    title: 'Secretary',
    organization: 'Calculathon (Mathematics Club), LPC',
    period: 'Mar. 2022 - Jun. 2023',
    description:
      'Organized large-scale Olympiad-style math competitions and peer tutoring sessions for high school students.',
    image: volunteering3,
  },
];
