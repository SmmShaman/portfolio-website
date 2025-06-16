
import React, { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";

// Інтерфейс для властивостей зірки
interface TestimonialStarProps {
  id: string;
  text: string;
  author: string;
  company: string;
  avgRating: number;
  onStarClick: (id: string) => void;
  index: number;
  totalStars: number;
  hoveredStarId: string | null;
}

// Компонент зірки
export const TestimonialStar: React.FC<TestimonialStarProps> = ({
  id,
  text,
  author,
  company,
  avgRating,
  onStarClick,
  index,
  totalStars,
  hoveredStarId
}) => {
  const starRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({
    x: 0,
    y: 0
  });
  
  // Стан для анімації
  const animationRef = useRef<number>();
  const rotationRef = useRef(Math.random() * 360);
  const rotationSpeedRef = useRef((Math.random() - 0.5) * 0.5);
  const scaleRef = useRef(1.0 + Math.random() * 0.5);
  const gravityRef = useRef(0.2 + Math.random() * 0.4); // Різна швидкість падіння для кожної зірки
  const horizontalDriftRef = useRef((Math.random() - 0.5) * 0.02);
  const isHoveredRef = useRef(false);
  
  // Розподіл зірок на "смуги"
  const laneCount = Math.min(totalStars, 12);
  const laneWidth = 90 / laneCount;
  const laneIndex = index % laneCount;
  const starHorizontalPosition = (laneIndex * laneWidth) + 5 + (laneWidth / 2);
  
  // Всі зірки в одній площині - використовуємо однаковий z-index
  const zIndex = 10;
  
  const [textLines, setTextLines] = useState<string[]>([]);
  
  // Ініціалізація та очищення анімації
  useEffect(() => {
    // Ініціалізуємо текстові рядки
    const firstWordOfText = text.split(' ')[0];
    const firstWordOfAuthor = author.split(' ')[0];
    const firstWordOfCompany = company.split(' ')[0];
    
    setTextLines([
      firstWordOfText,
      firstWordOfAuthor,
      firstWordOfCompany
    ]);
    
    // Початкова позиція з більшою варіацією по вертикалі
    const maxVariation = laneWidth * 0.3;
    positionRef.current = { 
      x: starHorizontalPosition + (Math.random() * maxVariation - maxVariation/2),
      y: Math.random() * -50 - 10 // Збільшили діапазон початкових позицій
    };
    
    // Установка початкової позиції
    if (starRef.current) {
      starRef.current.style.left = `${positionRef.current.x}%`;
      starRef.current.style.top = `${positionRef.current.y}%`;
    }
    
    // Запуск анімації з затримкою для кожної зірки
    const delay = index * 200; // Затримка між зірками
    const timeoutId = setTimeout(() => {
      startAnimation();
    }, delay);
    
    // Очищення анімації при розмонтуванні
    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [text, author, company, starHorizontalPosition, laneWidth]);
  
  // Оновлення стану наведення
  useEffect(() => {
    isHoveredRef.current = id === hoveredStarId;
  }, [id, hoveredStarId]);
  
  // Функція анімації падіння зірок
  const startAnimation = () => {
    if (!starRef.current) return;
    
    let lastTimestamp = performance.now();
    
    const animate = (timestamp: number) => {
      if (!starRef.current) return;
      
      // Розрахунок дельти часу для плавної анімації
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      const timeScaleFactor = deltaTime / 16.67; // ~60fps
      
      // Якщо зірка не в фокусі - рухається зі своєю унікальною швидкістю
      if (!isHoveredRef.current) {
        // Використовуємо унікальну гравітацію для кожної зірки
        positionRef.current.y += gravityRef.current * timeScaleFactor;
        positionRef.current.x += horizontalDriftRef.current * timeScaleFactor;
        
        // Повернення зірки на початок з новою випадковою позицією
        if (positionRef.current.y > 105) { // Трохи за межі екрану
          const maxVariation = laneWidth * 0.3;
          positionRef.current.x = starHorizontalPosition + (Math.random() * maxVariation - maxVariation/2);
          positionRef.current.y = Math.random() * -30 - 10; // Більша варіація початкової позиції
        }
        
        // Обертання зірки
        rotationRef.current += rotationSpeedRef.current * timeScaleFactor;
      }
      
      // Ефект пульсації
      const pulseValue = 1 + 0.05 * Math.sin(timestamp / 1000);
      
      // Масштаб при наведенні
      const hoverScale = isHoveredRef.current ? 1.8 : 1.0;
      
      // Застосування трансформацій
      if (starRef.current) {
        // Обмеження позиції в горизонтальних межах
        positionRef.current.x = Math.max(5, Math.min(95, positionRef.current.x));
        
        // Застосування стилів
        starRef.current.style.left = `${positionRef.current.x}%`;
        starRef.current.style.top = `${positionRef.current.y}%`;
        starRef.current.style.transform = `rotate(${rotationRef.current}deg) scale(${scaleRef.current * pulseValue * hoverScale})`;
      }
      
      // Продовження анімації
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
  };

  // Обробники подій з використанням замикань для запобігання помилок збірки
  const handleClick = () => {
    onStarClick(id);
  };
  
  const handleMouseEnter = () => {
    // Просто встановлюємо ID наведеної зірки через батьківський компонент
    if (starRef.current) {
      const hoverEvent = new CustomEvent('star-hover', { 
        detail: { id },
        bubbles: true 
      });
      starRef.current.dispatchEvent(hoverEvent);
    }
  };
  
  const handleMouseLeave = () => {
    // Скидаємо ID наведеної зірки через батьківський компонент
    if (starRef.current) {
      const leaveEvent = new CustomEvent('star-leave', { 
        bubbles: true 
      });
      starRef.current.dispatchEvent(leaveEvent);
    }
  };

  return (
    <div
      ref={starRef}
      className="absolute cursor-pointer"
      style={{ 
        zIndex: zIndex 
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <Star
          className="w-32 h-32 text-[#FFD700] fill-[#FFD700]"
          strokeWidth={1 + Math.random() * 0.5}
          style={{
            filter: `brightness(${0.9 + Math.random() * 0.2})`,
            opacity: 0.8 + Math.random() * 0.2
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-sm text-center leading-tight">
          {textLines.map((line, index) => (
            <div key={index} className="text-white font-medium">
              {line.length > 4 ? `${line.substring(0, 4)}...` : line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
