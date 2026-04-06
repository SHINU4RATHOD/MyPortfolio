
import type { LucideIcon } from 'lucide-react';
import { Briefcase, GraduationCap, Linkedin, Github, Mail, Code, BarChartBig, Database, Cpu, Layers, Brain, Pipette, LinkIcon, MessageCircle, MessageSquareText, Server, Box, Palette, LineChart, AreaChart, Award, BotMessageSquare, SmilePlus, Wrench, TrendingUp, FileText, BrainCircuit, SearchCode, ClipboardCheck, Phone, Shield, Smartphone, Sparkles, Bot, Workflow, Zap, Globe, BookOpen } from 'lucide-react';

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
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  icon?: LucideIcon;
  impact?: string;
}

export interface TimelineEvent {
  id: string;
  type: 'work' | 'education';
  date: string;
  title: string;
  institution: string;
  description: string;
  icon: LucideIcon;
  skills?: string[];
  cgpa?: string;
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
  displayText?: string; // Optional: for text that differs from 'name', like the email address itself
}

// Data
export const professionalName = "Shinu Rathod";
export const professionalTitle = "Data Scientist & AI Researcher";
export const professionalSummaryHero = "AI Researcher at IIT Ropar building production-grade ML systems. Specializing in Transformers, On-Device ML, NLP, Generative AI, and Cybersecurity AI.";
export const profileImageUrl = "https://avatars.githubusercontent.com/u/62996977";

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
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shinurathod-data-scientist', icon: Linkedin, ariaLabel: 'View LinkedIn profile' },
  { name: 'GitHub', url: 'https://github.com/SHINU4RATHOD', icon: Github, ariaLabel: 'View GitHub profile' },
  { name: 'Email', url: 'mailto:shinukrathod0143@gmail.com', icon: Mail, ariaLabel: 'Send an email', displayText: 'shinukrathod0143@gmail.com' },
  { name: 'Phone', url: 'tel:+916364163900', icon: Phone, ariaLabel: 'Call Shinu Rathod', displayText: '+91 63641 63900' },
];

export const skillsData: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python", icon: Code },
      { name: "SQL", icon: Database },
      { name: "Kotlin", icon: Smartphone },
      { name: "R", icon: Code },
    ],
  },
  {
    category: "Machine Learning & Deep Learning",
    skills: [
      { name: "PyTorch", icon: Brain },
      { name: "TensorFlow", icon: BrainCircuit },
      { name: "Keras", icon: Layers },
      { name: "Scikit-learn", icon: Pipette },
      { name: "Hugging Face", icon: Brain },
      { name: "LoRA / QLoRA", icon: Zap },
      { name: "ONNX Runtime", icon: Cpu },
    ],
  },
  {
    category: "Generative AI (GenAI)",
    skills: [
      { name: "LLM Fine-Tuning", icon: Sparkles },
      { name: "Prompt Engineering", icon: MessageCircle },
      { name: "RAG", icon: SearchCode },
      { name: "LangChain", icon: LinkIcon },
      { name: "LlamaIndex", icon: BookOpen },
      { name: "Vector Databases", icon: Database },
      { name: "Pinecone", icon: Database },
      { name: "ChromaDB", icon: Database },
    ],
  },
  {
    category: "Agentic AI (Upskilling)",
    skills: [
      { name: "AI Agents", icon: Bot },
      { name: "ReAct Framework", icon: Workflow },
      { name: "Tool Use & Function Calling", icon: Wrench },
      { name: "Multi-Agent Systems", icon: BotMessageSquare },
      { name: "Claude Agent SDK", icon: Sparkles },
    ],
  },
  {
    category: "AI Tools",
    skills: [
      { name: "Claude", icon: Sparkles },
      { name: "ChatGPT", icon: MessageCircle },
      { name: "Gemini", icon: Globe },
      { name: "Perplexity", icon: SearchCode },
      { name: "Claude Code", icon: Code },
    ],
  },
  {
    category: "MLOps & Deployment",
    skills: [
      { name: "Flask", icon: Server },
      { name: "FastAPI", icon: Zap },
      { name: "Docker", icon: Box },
      { name: "Streamlit", icon: BarChartBig },
      { name: "Android / ONNX", icon: Smartphone },
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
    id: 'work-0',
    type: 'work',
    date: '2025 – Present',
    title: 'AI Researcher',
    institution: 'IIT Ropar — Cybersecurity AI Division',
    description: 'Leading research on production-grade phishing URL detection using MiniLM Transformers + LoRA fine-tuning on 35.3M URLs. Achieved 98.91% AUC-ROC. Deployed as PhishGuard — an on-device Android app with INT8 ONNX quantization (32.6 MB, ~100ms inference).',
    icon: BrainCircuit,
    skills: ['PyTorch', 'Transformers', 'LoRA', 'ONNX', 'Kotlin', 'Android', 'Cybersecurity AI'],
  },
  {
    id: 'work-2',
    type: 'work',
    date: 'Apr 2025 – May 2025',
    title: 'Data Scientist Intern',
    institution: 'AISPRY, Hyderabad, Telangana',
    description: 'Developed an AI-powered Autism Spectrum Detection system using TensorFlow Lite, achieving 91.8% accuracy.',
    icon: Briefcase,
  },
  {
    id: 'work-1',
    type: 'work',
    date: 'Aug 2024 – Nov 2024',
    title: 'Data Science & Analytics Intern',
    institution: 'Zidio Development, Bengaluru, Karnataka',
    description: 'Engineered AI-driven solutions using Python and TensorFlow, improving system efficiency by 15%.',
    icon: Briefcase,
  },
  {
    id: 'work-3',
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
    id: 'project-phishguard',
    title: 'PhishGuard — On-Device Phishing URL Detection',
    description: 'IIT Ropar research project: Production-grade phishing detection system using MiniLM-L12 Transformer + LoRA fine-tuning on 35.3M URLs. Deployed as a fully offline Android app via INT8 ONNX quantization (32.6 MB model, ~100ms inference on-device). No internet required, zero data exfiltration.',
    imageUrl: '/images/projects/project-phishguard.png',
    imageHint: 'cybersecurity AI mobile',
    technologies: ['PyTorch', 'Transformers', 'LoRA', 'ONNX', 'Kotlin', 'Android', 'Jetpack Compose'],
    githubLink: 'https://github.com/SHINU4RATHOD/PhishDetect',
    icon: Shield,
    impact: 'AUC-ROC 98.91% on 4.4M test URLs. 32.6 MB on-device model with <100ms inference — production deployed.',
  },
  {
    id: 'project-asd',
    title: 'AI-driven Autism Spectrum Detection (ASD)',
    description: 'Developed a machine learning system to predict Autism Spectrum Disorder using video and webcam input, leveraging MediaPipe for pose estimation and TensorFlow Lite for binary classification. Integrated a React frontend, Flask backend, and Gemini-powered chatbot for scalable user interaction.',
    imageUrl: '/images/projects/project-asd.png',
    imageHint: 'AI healthcare',
    technologies: ['Python', 'TensorFlow Lite', 'MediaPipe', 'NLP', 'React', 'Flask', 'Gemini API'],
    githubLink: 'https://github.com/SHINU4RATHOD/ASD-Autistic-Spectrum-Disorders--Prediction-System',
    icon: BrainCircuit,
    impact: 'Achieved 91.8% model accuracy, supporting early ASD diagnosis for clinicians.'
  },
  {
    id: 'project-ai-tutor',
    title: 'Behavior Detection for AI Tutor',
    description: 'Built a behavior detection system for an AI Tutor platform using classification models to analyze user interactions. Deployed the model to improve personalized learning experiences, supported by data visualizations.',
    imageUrl: '/images/projects/project-ai-tutor.png',
    imageHint: 'AI education',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Power BI'],
    githubLink: 'https://www.kaggle.com/code/shinnurathod/02-behavior-detection-for-aitutor-160',
    icon: BotMessageSquare,
    impact: 'Increased user engagement by 10% through tailored recommendations.'
  },
  {
    id: 'project-downtime',
    title: 'Optimization of Machine Downtime',
    description: 'Designed a predictive maintenance model to minimize machine downtime using classification algorithms. Implemented feature engineering to identify critical failure patterns, visualized with Power BI.',
    imageUrl: '/images/projects/project-downtime.png',
    imageHint: 'industrial AI',
    technologies: ['Python', 'Scikit-learn', 'SQL', 'Power BI'],
    githubLink: 'https://github.com/SHINU4RATHOD/1.-OPTIMIZATION-OF-MACHINE-DOWNTIME',
    icon: Wrench,
    impact: 'Reduced operational downtime by 20%, enhancing productivity.'
  },
  {
    id: 'project-code-analysis',
    title: 'AI-Powered Code Analysis',
    description: 'Developed a code analysis tool using LangChain, LLMs, and ChromaDB to provide intelligent code insights and recommendations. Integrated vector databases for efficient data retrieval and analysis.',
    imageUrl: '/images/projects/project-code-analysis.png',
    imageHint: 'AI coding',
    technologies: ['Python', 'LangChain', 'ChromaDB', 'LLMs'],
    githubLink: 'https://github.com/SHINU4RATHOD/AI-Powered-CodeAnalysis-LangChain-LLM-ChromaDB',
    icon: Code,
    impact: 'Enhanced code review efficiency by 25% for development teams.'
  },
  {
    id: 'project-medical-chatbots',
    title: 'Medical Chatbots and Chat With Multi PDF Document Readers',
    description: 'Built AI-driven chatbots and document readers using LangChain and LLMs, improving data retrieval efficiency by 30%. Implemented vector databases for scalable querying.',
    imageUrl: '/images/projects/project-medical-chatbots.png',
    imageHint: 'medical chatbot',
    technologies: ['Python', 'LangChain', 'LLMs', 'Pinecone', 'ChromaDB'],
    githubLink: 'https://github.com/SHINU4RATHOD/Medical-Chatbot-LLM-Pinecone-LangChain',
    icon: MessageSquareText,
    impact: 'Streamlined healthcare data access and insights extraction.'
  }
];

export const educationData: TimelineEvent[] = [
  {
    id: 'edu-1',
    type: 'education',
    date: 'Feb 2023 – Feb 2024',
    title: 'Data Science Trainee',
    institution: '360DigiTMG, Bengaluru, Karnataka',
    description: 'Comprehensive training in Data Science methodologies and tools.',
    skills: ['Python', 'SQL', 'Power BI', 'Machine Learning', 'Deep Learning'],
    icon: GraduationCap,
  },
  {
    id: 'edu-2',
    type: 'education',
    date: '2022 – 2023',
    title: 'Professional Training Program',
    institution: 'Jitendra Mishra Academy (JMA), India',
    description: 'Focused professional development program.',
    icon: GraduationCap,
  },
  {
    id: 'edu-3',
    type: 'education',
    date: '2018 – 2021',
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'Karnataka College, Bidar, Karnataka',
    description: 'Foundation in computer science principles and applications.',
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
    verificationLink: 'https://www.linkedin.com/posts/shinurathod-data-scientist_internship-completion-cirtificate-activity-7269614242863951874-Jiyw',
    icon: Award,
  },
  {
    id: 'cert-2',
    title: 'Autism Detection Internship',
    issuer: 'AISPRY',
    date: 'May 2025',
    verificationLink: 'https://www.linkedin.com/posts/shinurathod-data-scientist_autism-detection-with-aispry-activity-7331568503365267457-kjGu',
    icon: Award,
  },
];
