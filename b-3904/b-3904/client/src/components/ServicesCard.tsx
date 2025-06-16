
import React, { useState, useEffect, useRef } from "react";
import { Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translationHelpers";

interface Service {
  text: string;
  position: { x: number; y: number };
  animation: 'fire' | 'water' | 'lightning' | 'wind' | 'earth';
  delay: number;
}

export const ServicesCard: React.FC = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const [pauseAnimation, setPauseAnimation] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const services: Service[] = [
    {
      text: "AI Integration – from concept to production (OpenAI, LangChain)",
      position: { x: 15, y: 20 },
      animation: 'fire',
      delay: 0
    },
    {
      text: "Workshops & Training – hands-on sessions for teams",
      position: { x: 60, y: 45 },
      animation: 'fire',
      delay: 2000
    },
    {
      text: "Data & BI Dashboards – Power BI, Supabase, SQL",
      position: { x: 20, y: 65 },
      animation: 'water',
      delay: 4000
    },
    {
      text: "Growth Marketing & Analytics – conversion optimization",
      position: { x: 70, y: 25 },
      animation: 'lightning',
      delay: 6000
    },
    {
      text: "Automation & Process Optimization – streamline workflows",
      position: { x: 10, y: 80 },
      animation: 'wind',
      delay: 8000
    },
    {
      text: "Strategic Consulting – digital transformation roadmaps",
      position: { x: 65, y: 70 },
      animation: 'earth',
      delay: 10000
    }
  ];

  useEffect(() => {
    if (isHovered) {
      setShowAllServices(true);
      setPauseAnimation(true);
      
      // Очищуємо інтервал анімації
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      // Встановлюємо таймер на 3 секунди для показу всіх сервісів
      pauseTimeoutRef.current = setTimeout(() => {
        setShowAllServices(false);
        setPauseAnimation(false);
      }, 3000);
      
      return;
    }

    // Якщо не в стані hover, відновлюємо звичайну анімацію
    if (!pauseAnimation) {
      setShowAllServices(false);
      
      const cycleServices = () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
          setCurrentServiceIndex((prev) => (prev + 1) % services.length);
        }, 3000);
      };

      cycleServices();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [isHovered, pauseAnimation, services.length]);

  const getAnimationClass = (animation: string, isVisible: boolean) => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'fire':
        return 'animate-fire opacity-100 text-red-400';
      case 'water':
        return 'animate-water opacity-100 text-blue-400';
      case 'lightning':
        return 'animate-lightning opacity-100 text-yellow-300';
      case 'wind':
        return 'animate-wind opacity-100 text-cyan-300';
      case 'earth':
        return 'animate-earth opacity-100 text-amber-600';
      default:
        return 'opacity-100';
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    
    // Очищуємо таймер паузи при покиданні області
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = null;
    }
    
    // Відновлюємо звичайну анімацію
    setShowAllServices(false);
    setPauseAnimation(false);
  };

  return (
    <div 
      className="card-full-text card-services relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Великий фоновий напис */}
      <div className="background-title">
        {t.services.toUpperCase()}
      </div>
      
      {/* Мінімальна іконка */}
      <div className="card-icon-minimal">
        <Wrench className="w-4 h-4 text-white" />
      </div>
      
      {/* Анімовані сервіси */}
      <div className="absolute inset-0 pt-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`absolute text-xs text-white/90 font-medium max-w-[45%] leading-tight transition-all duration-1000 ${
              getAnimationClass(
                service.animation, 
                showAllServices || index === currentServiceIndex
              )
            }`}
            style={{
              left: `${service.position.x}%`,
              top: `${service.position.y}%`,
              transform: showAllServices ? 'scale(0.8)' : 'scale(1)',
              zIndex: showAllServices ? 10 : (index === currentServiceIndex ? 20 : 5)
            }}
          >
            {service.text}
          </div>
        ))}
      </div>
    </div>
  );
};
