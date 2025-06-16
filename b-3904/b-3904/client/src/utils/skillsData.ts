
import { Code } from "lucide-react";

// Technology categories with their colors
export const skillCategories = {
  languages: {
    label: "Languages",
    color: "bg-blue-500 text-white",
    hoverColor: "hover:bg-blue-600"
  },
  frameworks: {
    label: "Frameworks",
    color: "bg-green-500 text-white",
    hoverColor: "hover:bg-green-600"
  },
  tools: {
    label: "Tools",
    color: "bg-orange-500 text-white",
    hoverColor: "hover:bg-orange-600"
  },
  marketing: {
    label: "Marketing",
    color: "bg-pink-500 text-white",
    hoverColor: "hover:bg-pink-600"
  },
  analytics: {
    label: "Analytics",
    color: "bg-purple-500 text-white",
    hoverColor: "hover:bg-purple-600"
  },
  management: {
    label: "Management",
    color: "bg-indigo-500 text-white",
    hoverColor: "hover:bg-indigo-600"
  },
  cloud: {
    label: "Cloud",
    color: "bg-cyan-500 text-white",
    hoverColor: "hover:bg-cyan-600"
  },
  databases: {
    label: "Databases",
    color: "bg-red-500 text-white",
    hoverColor: "hover:bg-red-600"
  },
  other: {
    label: "Other",
    color: "bg-gray-500 text-white",
    hoverColor: "hover:bg-gray-600"
  }
};

// Map of technologies to their logos/icons
export const techLogos: Record<string, { icon?: React.ElementType, description: string, url?: string }> = {
  // Programming Languages
  "Python": { 
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    description: "High-level programming language for AI/ML and backend development" 
  },
  "JavaScript": { 
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
    description: "Dynamic programming language for web and mobile development" 
  },
  "TypeScript": { 
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", 
    description: "Typed superset of JavaScript" 
  },
  "SQL": { 
    icon: Code, 
    description: "Structured Query Language for database management" 
  },

  // Web Frameworks
  "FastAPI": {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    description: "Modern, fast web framework for building APIs with Python"
  },
  "React": { 
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
    description: "JavaScript library for building user interfaces" 
  },
  "Vue.js": { 
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", 
    description: "Progressive JavaScript framework" 
  },
  "React Native": { 
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
    description: "Framework for building mobile apps with React" 
  },
  "Expo": {
    icon: Code,
    description: "Platform for universal React applications"
  },

  // Data Libraries
  "pandas": {
    icon: Code,
    description: "Python data manipulation and analysis library"
  },

  // APIs
  "REST APIs": {
    icon: Code,
    description: "Representational State Transfer web services"
  },

  // AI/ML Technologies
  "OpenAI API": {
    icon: Code,
    description: "AI-powered API for natural language processing and generation"
  },
  "Claude": {
    icon: Code,
    description: "Advanced AI assistant by Anthropic for complex reasoning and analysis"
  },

  // Databases
  "Supabase": {
    icon: Code,
    description: "Open source Firebase alternative with PostgreSQL"
  },

  // Digital Marketing
  "Meta Ads Manager": {
    icon: Code,
    description: "Facebook and Instagram advertising platform"
  },
  "Facebook Ads": {
    icon: Code,
    description: "Facebook advertising platform"
  },
  "Instagram Ads": {
    icon: Code,
    description: "Instagram advertising platform"
  },
  "Google Ads": {
    icon: Code,
    description: "Google's online advertising platform"
  },
  "Google Analytics 4": {
    icon: Code,
    description: "Google's advanced web analytics platform"
  },
  "Power BI": {
    icon: Code,
    description: "Microsoft's business analytics and data visualization tool"
  },
  "SEMrush": {
    icon: Code,
    description: "SEO and digital marketing toolkit"
  },
  "SimilarWeb": {
    icon: Code,
    description: "Website traffic and market intelligence platform"
  },

  // Automation
  "Zapier": {
    icon: Code,
    description: "Automation platform connecting apps and services"
  },
  "Make/Integromat": {
    icon: Code,
    description: "Visual platform for creating automated workflows"
  },

  // E-commerce Platforms
  "Amazon": {
    icon: Code,
    description: "E-commerce marketplace and advertising platform"
  },
  "Etsy": {
    icon: Code,
    description: "Global marketplace for creative goods"
  },
  "eBay": {
    icon: Code,
    description: "Online marketplace for buying and selling"
  },
  "Shopify": {
    icon: Code,
    description: "E-commerce platform for online stores and retail"
  },

  // Educational Technologies
  "EdTech platforms": {
    icon: Code,
    description: "Educational technology platforms and solutions"
  },
  "EdTech платформи": {
    icon: Code,
    description: "Educational technology platforms and solutions"
  },

  // Analytics & Business Intelligence
  "ROI optimization": {
    icon: Code,
    description: "Return on Investment optimization strategies"
  },
  "ROI оптимізація": {
    icon: Code,
    description: "Return on Investment optimization strategies"
  },
  "Financial modeling": {
    icon: Code,
    description: "Financial modeling and forecasting"
  },
  "Фінансове моделювання": {
    icon: Code,
    description: "Financial modeling and forecasting"
  }
};

// Helper function to get skill logo URL
export const getSkillLogoUrl = (skillName: string): string | null => {
  const normalizedSkill = skillName.trim();
  const techInfo = techLogos[normalizedSkill];
  
  if (techInfo?.url) {
    return techInfo.url;
  }
  
  return null;
};

// Helper function to determine category of a skill
export const getCategoryForSkill = (skill: string): keyof typeof skillCategories => {
  const skillLower = skill.toLowerCase();
  
  // Programming Languages
  if (['python', 'javascript', 'typescript', 'sql'].some(lang => skillLower.includes(lang))) {
    return 'languages';
  }
  
  // Frameworks
  if (['fastapi', 'react', 'vue.js', 'vue', 'react native', 'expo'].some(fw => skillLower.includes(fw))) {
    return 'frameworks';
  }
  
  // Databases
  if (['sql', 'supabase', 'postgresql'].some(db => skillLower.includes(db))) {
    return 'databases';
  }
  
  // Tools
  if (['pandas', 'rest apis', 'zapier', 'make', 'integromat'].some(tool => skillLower.includes(tool))) {
    return 'tools';
  }
  
  // Marketing
  if (['meta ads', 'facebook ads', 'instagram ads', 'google ads', 'google analytics', 'semrush', 'similarweb'].some(marketing => skillLower.includes(marketing))) {
    return 'marketing';
  }
  
  // Analytics
  if (['power bi', 'roi оптимізація', 'roi optimization', 'фінансове моделювання', 'financial modeling', 'openai api', 'langchain'].some(analytics => skillLower.includes(analytics))) {
    return 'analytics';
  }
  
  // Other (E-commerce, EdTech)
  if (['amazon', 'etsy', 'ebay', 'edtech platforms', 'edtech платформи', 'edtech'].some(other => skillLower.includes(other))) {
    return 'other';
  }
  
  // Default
  return 'other';
};
