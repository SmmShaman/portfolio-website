
import React, { useState, useEffect, useRef } from "react";
import { Book } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translationHelpers";
import profileImage from "@assets/ChatGPT Image 16 июн. 2025 г., 07_43_07_1750059830976.png";

export const AboutMeCard: React.FC = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [displayedText, setDisplayedText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [photoScale, setPhotoScale] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);
  
  // Скорочений текст для відображення в картці (410 символів)
  const getShortText = () => {
    if (language === 'uk') {
      return "Мене звати Віталій Бербега — проектлідер AI та підприємець, який поєднує 20+ років досвіду в бізнес-розробці з сучасними технологіями штучного інтелекту. Спеціалізуюся на створенні інноваційних EdTech рішень та автоматизації бізнес-процесів. **Мій флагманський проект — Elvarika** — революційна SaaS-платформа для вивчення мов, що використовує персоналізовані аудіо плейлисти та AI-алгоритми.";
    } else if (language === 'no') {
      return "Jeg er Vitalii Berbeha — AI-prosjektleder og entreprenør som kombinerer 20+ års erfaring innen forretningsutvikling med moderne kunstig intelligens-teknologier. Jeg spesialiserer meg på å skape innovative EdTech-løsninger og automatisering av forretningsprosesser. **Mitt flaggskipprosjekt — Elvarika** — er en revolusjonerende SaaS-plattform for språklæring som bruker personaliserte lydspillelister og AI-algoritmer.";
    } else {
      return "I am Vitalii Berbeha — AI project leader and entrepreneur combining 20+ years of business development experience with modern artificial intelligence technologies. I specialize in creating innovative EdTech solutions and automating business processes. **My flagship project — Elvarika** — is a revolutionary SaaS platform for language learning using personalized audio playlists and AI algorithms.";
    }
  };
  
  const shortText = getShortText();
  const fullText = t.aboutContent;

  // Скидаємо анімацію при зміні мови
  useEffect(() => {
    setDisplayedText('');
    currentIndexRef.current = 0;
    setIsTyping(true);
    setPhotoScale(4.2);
  }, [language]);

  useEffect(() => {
    if (isHovered) {
      // Зупиняємо анімацію при наведенні
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      return;
    }

    // Функція для друкування та стирання тексту
    const typeWriter = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        if (isTyping) {
          // Друкуємо текст
          if (currentIndexRef.current < shortText.length) {
            setDisplayedText(shortText.substring(0, currentIndexRef.current + 1));
            currentIndexRef.current++;
            
            // Обчислюємо масштаб фотографії - зменшується коли текст збільшується
            const textProgress = currentIndexRef.current / shortText.length;
            const newScale = 4.2 - (textProgress * 3.84); // від 4.2 до 0.36 (зменшено на 20%)
            setPhotoScale(newScale);
          } else {
            // Закінчили друкування, починаємо стирати
            setIsTyping(false);
            setTimeout(() => {
              // Пауза перед стиранням
            }, 2000);
          }
        } else {
          // Стираємо текст
          if (currentIndexRef.current > 0) {
            currentIndexRef.current--;
            setDisplayedText(shortText.substring(0, currentIndexRef.current));
            
            // Обчислюємо масштаб фотографії - збільшується коли текст зменшується
            const textProgress = currentIndexRef.current / shortText.length;
            const newScale = 4.2 - (textProgress * 3.84); // від 0.36 назад до 4.2 (зменшено на 20%)
            setPhotoScale(newScale);
          } else {
            // Закінчили стирання, починаємо друкувати знову
            setIsTyping(true);
          }
        }
      }, isTyping ? 50 : 30); // Швидкість друкування та стирання
    };

    typeWriter();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [fullText, isHovered, isTyping]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div 
        className="card-full-text card-about cursor-pointer transition-transform hover:scale-105"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* Великий фоновий напис */}
        <div className="background-title">
          {t.aboutMe.toUpperCase()}
        </div>
        
        {/* Мінімальна іконка */}
        <div className="card-icon-minimal">
          <Book className="w-4 h-4 text-white" />
        </div>
        
        {/* Динамічна фотографія що росте від нижнього кута */}
        <div className="absolute bottom-0 right-0 pointer-events-none">
          <div 
            className="shadow-lg transition-all duration-300 ease-out overflow-hidden rounded-lg"
            style={{ 
              width: `${photoScale * 80}px`,
              height: `${photoScale * 100}px`,
              transform: `translate(-${photoScale * 5}px, -${photoScale * 5}px)`,
              opacity: photoScale > 2.0 ? 0.8 : 0.2
            }}
          >
            <img 
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Текст що друкується */}
        <div className="card-content relative z-10">
          <p className="text-sm text-white/90 leading-relaxed min-h-[4rem]">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </div>

      {/* Модальне вікно */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl bg-gray-900 text-white border-gray-700">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-white">
              <Book className="w-5 h-5 text-blue-400" />
              {t.aboutMe}
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              {t.aboutModalDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-gray-200">
              {t.aboutContent}
            </p>
            <div className="text-sm text-gray-300">
              <p className="text-white font-medium">{t.aboutModalSpecialization}</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {t.aboutModalList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
