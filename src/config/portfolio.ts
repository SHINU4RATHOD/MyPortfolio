import type { LucideIcon } from 'lucide-react';
import { Briefcase, GraduationCap, Linkedin, Github, Mail, Code, BarChartBig, Database } from 'lucide-react';

// Types
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
  icon?: LucideIcon;
}

export interface TimelineEvent {
  id: string;
  type: 'work' | 'education';
  date: string;
  title: string;
  institution: string;
  description: string;
  icon: LucideIcon;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  ariaLabel: string;
}

// Data
export const professionalName = "Alex Johnson"; // Replace with actual name
export const professionalTitle = "AI & Machine Learning Engineer"; // Replace with actual title
export const professionalSummary = "Passionate AI and Machine Learning Engineer with a knack for developing innovative solutions to complex problems. Expertise in data science, deep learning, and building scalable AI systems."; // Replace

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'AI-Powered Predictive Maintenance',
    description: 'Developed a machine learning model to predict equipment failures in a manufacturing plant, reducing downtime by 20% and saving an estimated $500k annually.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'industrial AI',
    techStack: ['Python', 'Scikit-learn', 'TensorFlow', 'AWS SageMaker', 'Pandas'],
    repoLink: 'https://github.com/yourusername/predictive-maintenance', // Replace
    icon: BarChartBig,
  },
  {
    id: 'project-2',
    title: 'Natural Language Question Answering System',
    description: 'Built an NLP system for a customer support portal that understands and answers user queries from a large knowledge base, improving response time by 40%.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'NLP chatbot',
    techStack: ['Python', 'Hugging Face Transformers', 'PyTorch', 'Elasticsearch', 'Flask'],
    liveLink: '#', // Replace if applicable
    repoLink: 'https://github.com/yourusername/nlp-qa-system', // Replace
    icon: Code,
  },
  {
    id: 'project-3',
    title: 'Real-time Anomaly Detection Platform',
    description: 'Engineered a platform for real-time anomaly detection in financial transactions, utilizing unsupervised learning techniques to identify fraudulent activities.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'finance security',
    techStack: ['Kafka', 'Spark Streaming', 'Python', 'Scikit-learn', 'Grafana'],
    // liveLink: '#', // No live link for this one example
    repoLink: 'https://github.com/yourusername/anomaly-detection', // Replace
    icon: Database,
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'work-2',
    type: 'work',
    date: 'Jul 2021 - Present',
    title: 'AI & Machine Learning Engineer',
    institution: 'Innovatech Solutions', // Replace
    description: 'Leading the design and implementation of cutting-edge AI models. Specialized in computer vision and natural language processing. Successfully deployed 5+ large-scale AI projects.',
    icon: Briefcase,
  },
  {
    id: 'work-1',
    type: 'work',
    date: 'Jun 2019 - Jul 2021',
    title: 'Data Scientist',
    institution: 'Data Insights Corp.', // Replace
    description: 'Analyzed large datasets to extract actionable insights, built predictive models, and contributed to data-driven decision-making processes. Developed and maintained data pipelines.',
    icon: Briefcase,
  },
  {
    id: 'edu-2',
    type: 'education',
    date: '2017 - 2019',
    title: 'M.S. in Computer Science (AI Specialization)',
    institution: 'Stanford University', // Replace
    description: 'Focused on advanced machine learning algorithms, deep learning, and big data analytics. Thesis on reinforcement learning for robotic control.',
    icon: GraduationCap,
  },
  {
    id: 'edu-1',
    type: 'education',
    date: '2013 - 2017',
    title: 'B.S. in Software Engineering',
    institution: 'University of California, Berkeley', // Replace
    description: 'Graduated with honors. Capstone project involved developing a mobile application for local community engagement.',
    icon: GraduationCap,
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: Linkedin, ariaLabel: 'View LinkedIn profile' }, // Replace
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: Github, ariaLabel: 'View GitHub profile' }, // Replace
  { name: 'Email', url: 'mailto:your.email@example.com', icon: Mail, ariaLabel: 'Send an email' }, // Replace
];

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#resume-tool", label: "Resume Tool" },
  { href: "#contact", label: "Contact" },
];
