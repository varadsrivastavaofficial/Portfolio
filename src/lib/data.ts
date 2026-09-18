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
  title: 'B.S. Economics • Minor in Data Science Engineering',
  institution: 'Indian Institute of Science Education and Research - Bhopal',
  phone: '+91-8869981299',
  email: 'varadsrivastavaofficial@gmail.com',
  collegeEmail: 'varad24@iiserb.ac.in',
  github: 'https://github.com/varadsrivastavaofficial',
  linkedin: 'https://www.linkedin.com/in/varadsrivastavaofficial/',
  bio: 'Economics undergraduate at IISER Bhopal with a minor in Data Science Engineering, combining quantitative finance, econometrics, machine learning, and programming with hands-on experience in trading strategies, valuation, insurance analytics, and AI-driven solutions. Interested in risk analysis, investment research, and quantitative finance, with additional strengths in data analysis, visualisation, and creative design.',
};

export const SKILLS_DATA = {
  'Quantitative & Mathematical Proficiency': [
    'Probability & Statistics',
    'Machine Learning',
    'Feature Engineering',
    'Optimisation',
    'Data Structures & Algorithms',
    'Econometrics',
    'Game Theory',
    'Valuations & Finance',
  ],
  'Technical & Financial Programming': [
    'Python (Pandas, NumPy, Matplotlib, Scikit-learn, Yfinance, QuantLib)',
    'Java',
    'C',
    'Power BI (DAX, Power Query)',
    'MS Excel (Financial Modeling, Advanced Analytics)',
    'Agentic AI Development',
    'Solidity & Blockchain',
    'Git & GitHub',
    'LaTeX',
  ],
  'Soft Skills & Professional Leadership': [
    'Professional Communication',
    'Strategic Decision Making under Pressure',
    'Teamwork & Collaboration',
    'Adaptability & Critical Thinking',
    'Attention to Detail',
    'Adobe Creative Suite (Video & Motion Design)',
    'Time Management',
  ],
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'Quantitative Researcher Intern',
    company: 'Paterson Securities Pvt. Ltd.',
    period: 'July 2026 – Present',
    location: 'Remote',
    description:
      'Quantitative algorithmic research focusing on dynamic technical indicators, statistical arbitrage, and machine learning models.',
    highlights: [
      'Experimented with different algorithms - DMA, Mean Reversions, Momentum and Statistical Arbitrage using Pair Trading.',
      'Designed and Backtested Trading Algorithms using ML Techniques. High AUC/Sharpe ratio achieved.',
    ],
    skills: ['Trading Algorithms', 'Machine Learning', 'Statistical Arbitrage', 'Pair Trading', 'Backtesting', 'Sharpe Ratio', 'Python'],
  },
  {
    role: 'Financial Analyst Apprentice',
    company: 'First Step Finance',
    period: 'Aug 2026 – Present',
    location: 'Remote',
    description:
      'Institutional financial research and fundamental valuation of market infrastructure institutions.',
    highlights: [
      'Financial & Ratio Analysis: Analyzed CDSL\'s 5-year financial performance and benchmarked against NSDL.',
      'DCF & Valuation: Built DCF, WACC, FCFF and comparable-company valuation models.',
    ],
    skills: ['Financial Analysis', 'DCF Valuation', 'WACC', 'FCFF', 'Ratio Analysis', 'Peer Benchmarking'],
  },
  {
    role: 'Data Intern',
    company: 'Karyarth Consultancy',
    period: 'May 2026 – July 2026',
    location: 'Remote',
    description:
      'Enterprise data workflow automation, AI pipeline integration, and executive reporting systems.',
    highlights: [
      'Redesigned and automated data workflows using AI, significantly improving efficiency, pipeline reliability, and data accuracy across organisational operations.',
      'Developed automated Excel/Google Sheets reporting workflows and performance dashboards, enabling faster tracking of recruitment, attendance, and operational metrics.',
    ],
    skills: ['Data Workflows', 'AI Automation', 'Process Optimization', 'Excel Dashboards', 'Google Sheets'],
  },
  {
    role: 'AI Intern',
    company: 'Sri Sai Sathya Institute of Actuaries (SSSIA)',
    period: 'June 2026',
    location: 'Remote',
    description:
      'End-to-end actuarial risk capital modelling and validation AI agents for enterprise insurance risk analytics.',
    highlights: [
      'Developed an AI/ML-driven risk capital modelling and validation agent for business risk analytics, automating processes from data cleaning to report generation, using Monte Carlo simulations and Meta Prophet.',
      'Co-designed a modular AI pipeline automating insurance risk analysis, from data validation to multi-dimensional risk modelling (XGBoost, Monte Carlo VaR) and regulatory reporting.',
    ],
    skills: ['Risk Capital Modeling', 'Monte Carlo Simulation', 'Meta Prophet', 'XGBoost', 'Value at Risk (VaR)', 'Actuarial Analytics'],
  },
  {
    role: 'Data Visualisation Intern',
    company: 'Infosys',
    period: 'Jan 2025 – Apr 2025',
    location: 'Remote',
    description:
      'Electoral data intelligence, predictive analytics, and executive interactive dashboard development.',
    highlights: [
      'Led a team building an interactive Power BI dashboard on the 2024 Indian General Election, using Power Query and DAX to visualise party performance, alliance dynamics, and seat distribution.',
      'Delivered state, region, and constituency-level electoral insights via dynamic slicers, enabling comparative and trend-based analysis of voting patterns.',
    ],
    skills: ['Power BI', 'DAX', 'Power Query', 'Data Visualisation', 'Predictive Analytics', 'Team Leadership'],
  },
];

export type Achievement = {
  title: string;
  issuer: string;
  category: 'Competition' | 'Selection' | 'Certification' | 'Sports' | 'Leadership';
  description?: string;
};

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: '10th Summer School on AI Selection',
    issuer: 'CVIT, IIIT Hyderabad (IIITH)',
    category: 'Selection',
    description: 'Selected for competitive summer school focused on Computer Vision and Machine Learning.',
  },
  {
    title: 'Online Foundation Course in Mathematics (OFCM 2025)',
    issuer: 'MTTS & National Board for Higher Mathematics (NBHM)',
    category: 'Selection',
    description: 'Selected into advanced mathematical foundation training program.',
  },
  {
    title: 'Solvothon Hackathon (Round 1 Cleared)',
    issuer: 'IIT Delhi (IITD) & Apollo Hospitals',
    category: 'Competition',
    description: 'Cleared the initial competitive round in healthcare & AI hackathon.',
  },
  {
    title: '1st Prize - JEE Simulated Grand Tests',
    issuer: 'PW Lucknow (All 5 Branches)',
    category: 'Competition',
    description: 'Achieved highest final marks across Kapoorthala, Hazratganj, Gomtinagar, Alambagh, and Vrindavan centers.',
  },
  {
    title: 'Two-Time Continuous Runner-Up in Martial Arts',
    issuer: 'Sangarsh (Sports Fest) 2025 & 2026',
    category: 'Sports',
    description: 'Demonstrated competitive martial arts prowess and athletic discipline.',
  },
  {
    title: 'Multiple-Time Winner in Design Competitions',
    issuer: 'Logo & Video Editing Competitions',
    category: 'Competition',
    description: 'Recognized for creative excellence in graphic design and motion editing.',
  },
  {
    title: 'AWS AI/ML Scholar & Agentic AI Nanodegree',
    issuer: 'Amazon Web Services (AWS)',
    category: 'Certification',
  },
  {
    title: 'Python: Code in Place',
    issuer: 'Stanford University',
    category: 'Certification',
  },
  {
    title: 'McKinsey Forward Program & Aspire Institute',
    issuer: 'McKinsey & Company / Aspire Institute',
    category: 'Leadership',
  },
];

export const CERTIFICATIONS_DATA = [
  {
    title: 'Python: Code in Place',
    issuer: 'Stanford University',
    year: '2025',
  },
  {
    title: 'AWS AI/ML Scholar & Agentic AI Nanodegree',
    issuer: 'Amazon Web Services (AWS)',
    year: '2025',
  },
  {
    title: 'McKinsey Forward Program',
    issuer: 'McKinsey & Company',
    year: '2025',
  },
  {
    title: 'Aspire Leaders Program',
    issuer: 'Aspire Institute',
    year: '2025',
  },
];

export type Language = {
  language: string;
  proficiency: string;
};

export const LANGUAGES_DATA: Language[] = [
  { language: 'Hindi', proficiency: 'Native' },
  { language: 'English', proficiency: 'Proficient' },
  { language: 'German', proficiency: 'Early Intermediate' },
  { language: 'Sanskrit', proficiency: 'Early Intermediate' },
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
  category: 'Valuation' | 'Risk & Actuarial' | 'Blockchain' | 'Analytics';
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
    subtitle: 'Institutional Equity Valuation',
    category: 'Valuation',
    description:
      'Performed comprehensive Equity Valuation using Football Field Chart Analysis and Core Financial Metrics (P/E, EV/EBITDA, DCF).',
    problem:
      'Fragmented financial reporting and inconsistent multiple valuation across industry peers requiring automated aggregation.',
    tools: ['Python', 'Pandas', 'Yfinance', 'DCF Valuation', 'Football Field Analysis'],
    outcome:
      'Engineered an automated data pipeline extracting SEC/NSE filings, generating intrinsic DCF cash flow bands and relative peer comparables.',
    metrics: [
      { label: 'Models', value: 'DCF, P/E, EV/EBITDA' },
      { label: 'Data Source', value: 'Yfinance / SEC API' },
      { label: 'Output', value: 'Football Field Chart' },
    ],
    deepDive: {
      methodology:
        'Constructed multi-stage Discounted Cash Flow models with WACC sensitivity matrices and comparative multiple benchmarking.',
      architecture:
        'Python Yfinance ingestion -> Pandas financial statement restructuring -> NumPy DCF engine -> Football Field visualization.',
      keyLearnings: [
        'Sensitivity of terminal value to marginal fluctuations in WACC.',
        'Normalizing non-recurring line items across competitor balance sheets.',
      ],
    },
    image: project1,
    sourceUrl: 'https://github.com/varadsrivastavaofficial/Investing-_Portfolio_Project',
  },
  {
    title: 'CRIP: Capital Risk Intelligence Pipeline',
    subtitle: 'Multi-Agent Insurance Risk AI',
    category: 'Risk & Actuarial',
    description:
      'Co-developed a multi-agent AI pipeline for insurance risk analytics, integrating an XGBoost regressor for claims prediction and Monte Carlo simulations for portfolio stress testing and Value at Risk (VaR) calculation, deployed via a unified Streamlit dashboard.',
    problem:
      'Complex multi-risk assessment (insurance, credit, market, operational, catastrophe) traditionally requires fragmented manual calculations.',
    tools: ['Python', 'XGBoost', 'Monte Carlo', 'VaR', 'Streamlit', 'Multi-Agent AI'],
    outcome:
      'Engineered a multi-dimensional risk evaluation module assessing insurance, credit, market, operational, and catastrophe (CAT) risk profiles to support comprehensive data-driven decision making.',
    metrics: [
      { label: 'Simulations', value: '10,000+ Paths' },
      { label: 'Risk Modules', value: '5 Dimensions' },
      { label: 'Deployment', value: 'Streamlit Cloud' },
    ],
    deepDive: {
      methodology:
        'Integrated XGBoost claims regression with stochastic Monte Carlo jump-diffusion for portfolio tail risk (95% & 99% VaR and CVaR).',
      architecture:
        'Agentic AI Orchestrator -> Preprocessing pipeline -> XGBoost & Monte Carlo Engine -> Interactive Streamlit UI.',
      keyLearnings: [
        'Fat-tailed loss distributions in actuarial catastrophe modeling.',
        'Deploying multi-agent deterministic check loops for risk compliance.',
      ],
    },
    image: project3,
    sourceUrl: 'https://github.com/varadsrivastavaofficial',
  },
  {
    title: 'BlockFund: Blockchain Time-Based Donation Contract',
    subtitle: 'Decentralized Finance & Web3 Security',
    category: 'Blockchain',
    description:
      'Built a Solidity smart contract on Ethereum Sepolia with re-entrancy protection, alongside a JS frontend for wallet integration and real-time fund tracking.',
    problem:
      'Lack of transparency, centralized fee extraction, and vulnerability to re-entrancy exploits in traditional donation workflows.',
    tools: ['Solidity', 'Ethereum Sepolia', 'JavaScript', 'Web3.js', 'MetaMask', 'Smart Contracts'],
    outcome:
      'Implemented secure, trustless financial logic, including goal-based withdrawals, donor refunds, and a live leaderboard, demonstrating applied blockchain security principles.',
    metrics: [
      { label: 'Network', value: 'Ethereum Sepolia' },
      { label: 'Security', value: 'Re-entrancy Guard' },
      { label: 'Features', value: 'Goal Refunds & Rank' },
    ],
    deepDive: {
      methodology:
        'Designed smart contract state machines with time-lock checks, pull-over-push withdrawal patterns, and OpenZeppelin security standards.',
      architecture:
        'Solidity Contract -> Sepolia Testnet -> Ethers.js/Web3 connector -> Responsive DApp Frontend.',
      keyLearnings: [
        'Gas optimization in on-chain leaderboard sorting.',
        'Preventing re-entrancy vulnerabilities with checks-effects-interactions pattern.',
      ],
    },
    image: project2,
    sourceUrl: 'https://github.com/varadsrivastavaofficial',
  },
  {
    title: 'ElectViz: Election Data Visualization for Media',
    subtitle: 'National Electoral Intelligence & Forecasting',
    category: 'Analytics',
    description:
      'Led a team in developing an interactive Power BI dashboard analysing national and state-level election data, covering party performance, alliance dynamics, vote share, voter turnout, and seat distribution.',
    problem:
      'Massive scale multi-party electoral datasets requiring instant granular drill-down across states, constituencies, and vote types.',
    tools: ['Power BI', 'DAX', 'Power Query', 'Statistical Modeling', 'Excel'],
    outcome:
      'Built data transformations and DAX-based KPIs for state, constituency, and party-level analysis, including winning margins and EVM versus postal voting comparisons.',
    metrics: [
      { label: 'Data Points', value: '543 Constituencies' },
      { label: 'Engine', value: 'Power BI DAX' },
      { label: 'Granularity', value: 'Constituency & EVM' },
    ],
    deepDive: {
      methodology:
        'Engineered star-schema relational data model with calculated DAX measures for vote-swing percentiles and alliance aggregation.',
      architecture:
        'Raw Election Commission Data -> Power Query ETL -> Star Schema Model -> Power BI Executive Dashboard.',
      keyLearnings: [
        'Advanced DAX matrix optimization for multi-tier visual filtering.',
        'Storytelling for complex political and demographic trend forecasting.',
      ],
    },
    image: project1,
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
    title: 'Karate & Martial Arts',
    description:
      'Two-Time Continuous Runner-Up in Sangarsh Sports Fest (2025 & 2026). Cultivating discipline, physical conditioning, and mental resilience.',
    image: hobby4,
    tag: 'Martial Arts',
  },
  {
    title: 'Boxing & Strategic Combat',
    description:
      'Practicing boxing to develop split-second reflexes, tactical awareness under pressure, and peak cardiovascular stamina.',
    image: hobby2,
    tag: 'Combat Sports',
  },
  {
    title: 'Video Creation & Motion Graphics',
    description:
      'Multiple-time winner in logo and video editing competitions. Passionate about visual storytelling using Adobe After Effects and Premiere Pro.',
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
    title: 'Major: B.S. in Economics, Minor: Data Science Engineering',
    institution: 'Indian Institute of Science Education and Research - Bhopal',
    year: '2024 – Present',
    grade: 'GPA: 7.68/10',
    description:
      'Undergraduate program combining quantitative economic theory, econometrics, machine learning, probability & statistics, data structures, and financial data modeling.',
    image: education1,
  },
  {
    title: 'Matriculation Class X (CISCE Board)',
    institution: 'Lucknow Public College, Lucknow, India',
    year: '2022 – 2023',
    grade: '95.5/100',
    description:
      'Major: Physics, Chemistry, Mathematics and Computer Science. Completed with high academic distinction.',
    image: education3,
  },
  {
    title: 'Intermediate Class XII (CISCE Board)',
    institution: 'Lucknow Public College, Lucknow, India',
    year: '2020 – 2021',
    grade: '96.6/100',
    description:
      'Major: Science, Mathematics and Computer Applications. Graduated with top academic honors.',
    image: education2,
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
    title: 'Secretary',
    organization: 'Computing and Networking Council (CNC), IISER Bhopal',
    period: '2025 – Present',
    description:
      'Contributed to technical workshops, event coordination, creative design, and digital outreach for the institute\'s computing and networking community.',
    image: volunteering1,
  },
  {
    title: 'Representative Council',
    organization: 'Hostel Representative H-8, IISER Bhopal',
    period: '2025 – Present',
    description:
      'Represented hostel residents in coordinating student concerns, communicating with administration, and supporting the smooth functioning of hostel facilities and activities.',
    image: volunteering2,
  },
  {
    title: 'Vice President',
    organization: 'LPC Computer Club',
    period: 'Mar 2021 – Jun 2023',
    description:
      'Managed event budgets and logistics while coordinating activities and contributing to the strategic development of the club.',
    image: volunteering3,
  },
  {
    title: 'General Secretary',
    organization: 'Calculathon, Mathematics Club, LPC',
    period: 'Mar 2022 – Jun 2023',
    description:
      'Organised the flagship Calculathon event and workshops focused on advanced mathematical problem-solving and learning.',
    image: volunteering1,
  },
  {
    title: 'Coordinator',
    organization: 'Gaming Club, LPC',
    period: 'Mar 2021 – Jun 2023',
    description:
      'Coordinated gaming leagues and competitions, managing event planning and execution across hybrid sessions.',
    image: volunteering2,
  },
  {
    title: 'Designer and Trainee',
    organization: 'Armageddon, IISER Bhopal',
    period: 'Jan 2025 – Mar 2025',
    description:
      'Designed posters and standees, edited promotional videos, and supported event logistics and coordination.',
    image: volunteering3,
  },
];
