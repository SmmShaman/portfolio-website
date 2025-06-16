
import React, { useEffect } from "react";
import { RatingStars } from "./RatingStars";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translationHelpers";
import { Testimonial } from "@/utils/testimonialsHelpers";
import { X } from "lucide-react";

interface TestimonialDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  testimonial: Testimonial | null;
  onRatingChange: (rating: number) => void;
}

export const TestimonialDialog: React.FC<TestimonialDialogProps> = ({
  isOpen,
  setIsOpen,
  testimonial,
  onRatingChange
}) => {
  const { language } = useLanguage();
  const t = getTranslation(language);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, setIsOpen]);

  if (!testimonial || !isOpen) return null;

  // Create star path for SVG
  const starPath = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div 
        className="relative w-screen h-screen flex items-center justify-center cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        {/* Animated Star Background */}
        <div className="relative">
          <svg 
            viewBox="0 0 24 24" 
            className="w-[85vw] h-[85vh] max-w-[700px] max-h-[700px] fill-yellow-500 drop-shadow-2xl star-glow"
          >
            <path d={starPath} />
          </svg>

          {/* Content Container */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors text-black hover:text-gray-800"
            >
              <X size={24} />
            </button>

            {/* Testimonial Text */}
            <div className="max-w-[70%] mb-8">
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-black/90 italic leading-relaxed text-center">
                "{testimonial.text}"
              </blockquote>
            </div>

            {/* Author Info */}
            <div className="text-black/80 font-semibold text-lg md:text-xl text-center">
              — {testimonial.author}
              {testimonial.company && (
                <div className="text-base md:text-lg text-black/70 font-normal mt-2">
                  {testimonial.company}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
