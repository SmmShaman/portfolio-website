
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  testimonialId: string;
  initialRating?: number;
  totalRatings?: number;
  readOnly?: boolean;
  onRatingChange?: (rating: number) => void;
  className?: string;
}

export const RatingStars = ({
  testimonialId,
  initialRating = 0,
  totalRatings = 0,
  readOnly = false,
  onRatingChange,
  className
}: RatingStarsProps) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [hasRated, setHasRated] = useState<boolean>(false);

  const handleStarClick = (value: number) => {
    if (readOnly || hasRated) return;
    
    setRating(value);
    setHasRated(true);
    
    if (onRatingChange) {
      onRatingChange(value);
    }

    // This is where we would normally make the API call
    // For now, we'll just show a toast as feedback
    toast({
      title: "Thank you for your rating!",
      description: `You rated this testimonial ${value} stars.`,
      duration: 3000,
    });

    // Later we would implement actual API:
    // const submitRating = async () => {
    //   try {
    //     const response = await fetch(`/api/testimonial/${testimonialId}/rating`, {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({ value })
    //     });
    //     const data = await response.json();
    //     if (data.avgRating) {
    //       setRating(data.avgRating);
    //     }
    //   } catch (error) {
    //     console.error('Error submitting rating:', error);
    //     toast({
    //       title: "Error",
    //       description: "Failed to submit your rating. Please try again.",
    //       variant: "destructive",
    //     });
    //   }
    // };
    //
    // submitRating();
  };

  // Render stars with filled/half-filled/empty states
  const renderStars = () => {
    const stars = [];
    const ratingToUse = hoverRating !== null ? hoverRating : rating;

    for (let i = 1; i <= 5; i++) {
      const filled = i <= ratingToUse;
      const halfFilled = !filled && i - 0.5 <= ratingToUse;
      
      stars.push(
        <Star
          key={i}
          className={cn(
            "w-6 h-6 cursor-pointer transition-all duration-200",
            filled ? "text-[#FFD700] fill-[#FFD700]" : 
            halfFilled ? "text-[#FFD700] fill-[#FFD700]/50" : "text-[#FFD700] fill-transparent",
            !readOnly && !hasRated && "hover:scale-110"
          )}
          onMouseEnter={() => !readOnly && !hasRated && setHoverRating(i)}
          onMouseLeave={() => !readOnly && !hasRated && setHoverRating(null)}
          onClick={() => handleStarClick(i)}
        />
      );
    }

    return stars;
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {renderStars()}
      {totalRatings > 0 && (
        <span className="text-xs text-white/60 ml-1">({totalRatings})</span>
      )}
    </div>
  );
};
