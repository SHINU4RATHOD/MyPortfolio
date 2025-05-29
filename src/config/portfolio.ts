
import type { LucideIcon } from 'lucide-react';
import { Briefcase, GraduationCap, Linkedin, Github, Mail, Code, BarChartBig, Database, Cpu, Layers, Brain, Pipette, LinkIcon, MessageCircle, MessageSquareText, Server, Box, Palette, LineChart, AreaChart, Award, BotMessageSquare, SmilePlus, Wrench, TrendingUp, FileText, BrainCircuit } from 'lucide-react';

// Types
export interface NavLink {
  href: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
}
export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  technologies: string[]; // Changed from techStack to technologies
  githubLink?: string; // Changed from repoLink to githubLink for clarity
  liveLink?: string; // Added for consistency, though not used for all projects in prompt
  icon?: LucideIcon;
  impact?: string; // Added for project impact
}

export interface TimelineEvent {
  id: string;
  type: 'work' | 'education'; // Kept type for potential future use, but will separate sections
  date: string;
  title: string;
  institution: string;
  description: string;
  icon: LucideIcon;
  skills?: string[]; // Added for education section
  cgpa?: string; // Added for education section
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  verificationLink: string;
  icon: LucideIcon;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  ariaLabel: string;
}

// Data
export const professionalName = "Shinu Rathod";
export const professionalTitle = "Data Scientist & AI Engineer";
// Short summary for Hero section
export const professionalSummaryHero = "Building AI-Driven Solutions for Tomorrow. Specializing in Machine Learning, Deep Learning, NLP, and LLMs.";

// Full bio for About Me section will be directly in the component as it's longer.

export const navLinks: NavLink[] = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'http://bit.ly/shinu-linkedin', icon: Linkedin, ariaLabel: 'View LinkedIn profile' },
  { name: 'GitHub', url: 'http://bit.ly/shinu-github', icon: Github, ariaLabel: 'View GitHub profile' },
  { name: 'Email', url: 'mailto:shinukrathod0143@gmail.com', icon: Mail, ariaLabel: 'Send an email' },
];

export const skillsData: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python", icon: Code },
      { name: "SQL", icon: Database },
      { name: "R", icon: Code }, // Using Code as generic for R
    ],
  },
  {
    category: "Machine Learning & AI",
    skills: [
      { name: "TensorFlow", icon: BrainCircuit },
      { name: "Keras", icon: Layers },
      { name: "PyTorch", icon: Brain },
      { name: "Scikit-learn", icon: Pipette },
      { name: "LangChain", icon: LinkIcon },
      { name: "LLMs", icon: MessageCircle },
      { name: "NLP", icon: MessageSquareText },
    ],
  },
  {
    category: "Data Technologies",
    skills: [
      { name: "Flask", icon: Server },
      { name: "Docker", icon: Box },
      { name: "Pinecone", icon: Database }, // Using Database for vector DBs
      { name: "ChromaDB", icon: Database }, // Using Database for vector DBs
    ],
  },
  {
    category: "Data Visualization",
    skills: [
      { name: "Power BI", icon: BarChartBig },
      { name: "Matplotlib", icon: LineChart },
      { name: "Seaborn", icon: AreaChart },
    ],
  },
];

export const experienceTimeline: TimelineEvent[] = [
  {
    id: 'work-2',
    type: 'work',
    date: 'Apr 2025 – May 2025', // Corrected date order based on prompt
    title: 'Data Scientist Intern',
    institution: 'AISPRY, Hyderabad, Telangana',
    description: 'Developed an AI-powered Autism Spectrum Detection system using TensorFlow Lite, achieving 91.8% accuracy.',
    icon: Briefcase,
  },
  {
    id: 'work-1', // Corrected ID
    type: 'work',
    date: 'Aug 2024 – Nov 2024', // Corrected date order based on prompt
    title: 'Data Science & Analytics Intern',
    institution: 'Zidio Development, Bengaluru, Karnataka',
    description: 'Engineered AI-driven solutions using Python and TensorFlow, improving system efficiency by 15%.',
    icon: Briefcase,
  },
  {
    id: 'work-3', // New ID for logical ordering
    type: 'work',
    date: 'Feb 2023 – Feb 2024',
    title: 'Data Science Trainee',
    institution: '360DigiTMG, Hyderabad, Telangana',
    description: 'Built a predictive maintenance model using Scikit-learn, reducing downtime by 20%.',
    icon: Briefcase,
  },
];

export const projectsData: Project[] = [
  {
    id: 'project-asd',
    title: 'AI-driven Autism Spectrum Detection (ASD)',
    description: 'Engineered a machine learning system using TensorFlow Lite and MediaPipe to predict ASD with 91.8% accuracy. Integrated NLP and a Gemini-powered chatbot.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'healthcare AI autism',
    technologies: ['Python', 'TensorFlow Lite', 'MediaPipe', 'NLP', 'React', 'Flask', 'Gemini API'],
    githubLink: 'http://bit.ly/shinu-github', // General GitHub link as requested
    icon: SmilePlus, // Or BrainCircuit
    impact: 'Achieved 91.8% accuracy in ASD prediction.'
  },
  {
    id: 'project-downtime',
    title: 'Optimization of Machine Downtime',
    description: 'Developed a predictive maintenance model using Scikit-learn, reducing downtime by 20%.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'industrial maintenance AI',
    technologies: ['Python', 'Scikit-learn', 'SQL', 'Power BI'],
    githubLink: 'http://bit.ly/shinu-github', // General GitHub link
    icon: TrendingUp, // Or Wrench
    impact: 'Reduced machine downtime by 20%.'
  },
  {
    id: 'project-chatbots',
    title: 'Medical Chatbots and Multi PDF Document Readers',
    description: 'Built AI-driven chatbots using LangChain and LLMs, improving data retrieval efficiency by 30%.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'AI chatbot document',
    technologies: ['Python', 'LangChain', 'LLMs', 'Pinecone', 'ChromaDB'],
    githubLink: 'http://bit.ly/shinu-github', // General GitHub link
    icon: BotMessageSquare,
    impact: 'Improved data retrieval efficiency by 30%.'
  },
];

export const educationData: TimelineEvent[] = [
  {
    id: 'edu-1',
    type: 'education',
    date: 'Feb 2023 – Feb 2024',
    title: 'Data Science Trainee',
    institution: '360DigiTMG, Bengaluru, Karnataka',
    description: 'Comprehensive training in Data Science methodologies and tools.', // Added a small description
    skills: ['Python', 'SQL', 'Power BI', 'Machine Learning', 'Deep Learning'],
    icon: GraduationCap,
  },
  {
    id: 'edu-2',
    type: 'education',
    date: '2022 – 2023',
    title: 'Professional Training Program',
    institution: 'Jitendra Mishra Academy (JMA), India',
    description: 'Focused professional development program.', // Added a small description
    icon: GraduationCap,
  },
  {
    id: 'edu-3',
    type: 'education',
    date: '2018 – 2021',
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'Karnataka College, Bidar, Karnataka',
    description: 'Foundation in computer science principles and applications.', // Added a small description
    cgpa: '7.64',
    icon: GraduationCap,
  },
];

export const certificationsData: Certification[] = [
  {
    id: 'cert-1',
    title: 'Data Science & Analytics Internship',
    issuer: 'Zidio Development',
    date: 'Dec 2024',
    verificationLink: 'http://bit.ly/zidio-cert-2024',
    icon: Award,
  },
  {
    id: 'cert-2',
    title: 'Autism Detection Internship',
    issuer: 'AISPRY',
    date: 'May 2025',
    verificationLink: 'http://bit.ly/aispry-cert-2025',
    icon: Award,
  },
];

    