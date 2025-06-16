import { getTranslation } from "@/utils/translationHelpers";
import { Language } from "@/contexts/LanguageContext";

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  company: string;
  avgRating: number;
  ratingsCount: number;
}

// Additional sample testimonials
export const additionalTestimonials = [
  {
    id: "additional-1",
    text: "The product exceeded all my expectations. Truly remarkable service!",
    author: "Jennifer Smith",
    company: "TechGurus LLC",
  },
  {
    id: "additional-2",
    text: "Incredible attention to detail. I couldn't be happier with the results.",
    author: "Michael Johnson",
    company: "Creative Solutions",
  },
  {
    id: "additional-3",
    text: "Outstanding support team that resolved my issues promptly.",
    author: "Sarah Williams",
    company: "InnovateNow",
  },
  {
    id: "additional-4",
    text: "Best customer experience I've had in years. Highly recommended!",
    author: "Robert Davis",
    company: "Apex Industries",
  },
  {
    id: "additional-5",
    text: "The interface is intuitive and user-friendly. Makes my job easier.",
    author: "Amanda Lee",
    company: "Digital Frontiers",
  },
  {
    id: "additional-6",
    text: "Great value for money. This product has transformed our workflow.",
    author: "Thomas Wright",
    company: "Momentum Media",
  },
  // Add 6 more testimonials for visual variation
  {
    id: "additional-7",
    text: "Innovative solutions that perfectly addressed our unique needs.",
    author: "Daniel Brown",
    company: "Future Tech",
  },
  {
    id: "additional-8",
    text: "The team went above and beyond to ensure our satisfaction.",
    author: "Lisa Chen",
    company: "Global Innovations",
  },
  {
    id: "additional-9",
    text: "Exceptional quality and attention to detail throughout the project.",
    author: "Marco Rossi",
    company: "Design Masters",
  },
  {
    id: "additional-10",
    text: "Responsive communication and professional service from start to finish.",
    author: "Emily Watson",
    company: "Strategic Partners",
  },
  {
    id: "additional-11",
    text: "A game-changer for our business operations. Highly recommended!",
    author: "James Wilson",
    company: "Modern Solutions",
  },
  {
    id: "additional-12",
    text: "Consistently exceeds expectations. A trusted partner for our ongoing projects.",
    author: "Sophia Kim",
    company: "Visionary Inc",
  }
];

export const parseTestimonials = (language: Language): Testimonial[] => {
  const t = getTranslation(language);
  
  // Parse testimonials from the content text
  const testimonialsContent = t.testimonialsContent;
  const testimonialBlocks = testimonialsContent.split('\n\n');
  
  const parsedTestimonials: Testimonial[] = testimonialBlocks.map((block, index) => {
    const lines = block.split('\n');
    const testimonialText = lines[0].replace(/[""]/g, '');
    
    // Parse author and company name
    const authorLine = lines[1] || '';
    const authorMatch = authorLine.match(/[—–-]\s*(.+),\s*(.+),\s*(.+)/);
    
    const author = authorMatch ? authorMatch[1].trim() : authorLine.replace(/[—–-]/, '').trim();
    const role = authorMatch ? authorMatch[2].trim() : '';
    const company = authorMatch ? authorMatch[3].trim() : '';
    
    return {
      id: `testimonial-${index}`,
      text: testimonialText,
      author: author,
      company: company || role, // Use role as company if company not specified
      avgRating: parseFloat((3 + Math.random() * 2).toFixed(1)), // Sample rating between 3-5
      ratingsCount: Math.floor(Math.random() * 50) + 10 // Sample count between 10-60
    };
  });
  
  // Add ratings to additional testimonials
  const additionalWithRatings = additionalTestimonials.map(t => ({
    ...t,
    avgRating: parseFloat((3 + Math.random() * 2).toFixed(1)),
    ratingsCount: Math.floor(Math.random() * 50) + 10
  }));
  
  return [...parsedTestimonials, ...additionalWithRatings];
};

// Remove the getStarGroup function since we no longer need grouping
