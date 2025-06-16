import React, { useState } from "react";
import { Star } from "lucide-react";
import { TestimonialsContainer } from "./TestimonialsContainer";
import { TestimonialDialog } from "./TestimonialDialog";
import { parseTestimonials } from "@/utils/testimonialsHelpers";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translationHelpers";
import type { Testimonial } from "@/utils/testimonialsHelpers";

export const TestimonialsCard: React.FC = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  
  const testimonials = parseTestimonials(language);

  const handleStarClick = (id: string) => {
    const testimonial = testimonials.find(t => t.id === id);
    if (testimonial) {
      setSelectedTestimonial(testimonial);
      setIsOpen(true);
    }
  };

  const handleRatingChange = (rating: number) => {
    // Handle rating change if needed
  };

  return (
    <>
      <div className="card-full-text card-testimonials relative overflow-hidden">
        {/* Фонова назва */}
        <div className="background-title">
          {t.testimonials.toUpperCase()}
        </div>
        
        {/* Мінімальна іконка */}
        <div className="card-icon-minimal">
          <Star className="w-4 h-4 text-white" />
        </div>
        
        {/* Контейнер з падаючими зірками */}
        <div className="absolute inset-0 pt-16">
          <TestimonialsContainer 
            testimonials={testimonials}
            onStarClick={handleStarClick}
          />
        </div>
      </div>

      {/* Діалог з повним відгуком */}
      <TestimonialDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        testimonial={selectedTestimonial}
        onRatingChange={handleRatingChange}
      />
    </>
  );
};