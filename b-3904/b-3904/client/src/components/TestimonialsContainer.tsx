import React, { useState, useEffect, useRef } from "react";
import { TestimonialStar } from "./TestimonialStar";
import { Testimonial } from "@/utils/testimonialsHelpers";

interface TestimonialsContainerProps {
  testimonials: Testimonial[];
  onStarClick: (id: string) => void;
}

export const TestimonialsContainer: React.FC<TestimonialsContainerProps> = ({
  testimonials,
  onStarClick
}) => {
  // Стан для відстеження наведеної зірки
  const [hoveredStarId, setHoveredStarId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Використання прямих DOM-подій для запобігання помилок мінімізації
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Обробник події наведення на зірку
    const handleStarHover = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail && customEvent.detail.id) {
        setHoveredStarId(customEvent.detail.id);
      }
    };
    
    // Обробник події виходу з зірки
    const handleStarLeave = () => {
      setHoveredStarId(null);
    };
    
    // Додавання слухачів подій до контейнера
    containerRef.current.addEventListener('star-hover', handleStarHover);
    containerRef.current.addEventListener('star-leave', handleStarLeave);
    
    // Очищення подій при розмонтуванні
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('star-hover', handleStarHover);
        containerRef.current.removeEventListener('star-leave', handleStarLeave);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="w-full h-full relative" 
      style={{ height: "calc(100% - 40px)" }}
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialStar
          key={testimonial.id}
          id={testimonial.id}
          text={testimonial.text}
          author={testimonial.author}
          company={testimonial.company}
          avgRating={testimonial.avgRating}
          onStarClick={onStarClick}
          index={index}
          totalStars={testimonials.length}
          hoveredStarId={hoveredStarId}
        />
      ))}
    </div>
  );
};
