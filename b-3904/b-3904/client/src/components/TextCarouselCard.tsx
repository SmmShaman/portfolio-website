import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface TextCarouselCardProps {
  title: string;
  content: string;
  icon: React.ReactNode;
  cardClass: string;
  fullText?: boolean;
  animatedText?: boolean;
}

export const TextCarouselCard: React.FC<TextCarouselCardProps> = ({
  title,
  content,
  icon,
  cardClass,
  fullText = false,
  animatedText = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Розбиваємо контент на частини для анімації
  const textSegments = content.split('\n\n').filter(segment => segment.trim());

  // Анімація тексту для animatedText режиму
  useEffect(() => {
    if (!animatedText || textSegments.length <= 1) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % textSegments.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [animatedText, textSegments.length]);

  // Функція для парсингу та форматування контенту
  const parseContent = (text: string) => {
    if (!text) return [];

    const sections = text.split('\n\n').filter(section => section.trim());
    
    return sections.map((section, sectionIndex) => {
      const lines = section.split('\n').filter(line => line.trim());
      
      return (
        <div key={sectionIndex} className="text-section">
          {lines.map((line, lineIndex) => {
            const trimmedLine = line.trim();
            
            // Обробка списків (починаються з цифри та крапки або • або -)
            if (/^(\d+\.|•|-)/.test(trimmedLine)) {
              return (
                <div key={lineIndex} className="text-list-item">
                  {trimmedLine.replace(/^(\d+\.|•|-)/, '').trim()}
                </div>
              );
            }
            
            // Обробка заголовків (короткі рядки з великих літер або з двокрапкою)
            if (trimmedLine.length < 50 && (
              trimmedLine === trimmedLine.toUpperCase() || 
              trimmedLine.endsWith(':') ||
              /^[A-Z][a-z]+ [A-Z]/.test(trimmedLine)
            )) {
              return (
                <div key={lineIndex} className="text-title">
                  {trimmedLine}
                </div>
              );
            }
            
            // Звичайний текст
            return (
              <div key={lineIndex} className="text-line">
                {trimmedLine}
              </div>
            );
          })}
        </div>
      );
    });
  };

  // Функція для отримання короткої назви для фону
  const getBackgroundTitle = (title: string) => {
    // Видаляємо зайві слова та залишаємо основну частину
    const cleanTitle = title
      .replace(/^(About|My|The|Our)\s+/i, '')
      .replace(/\s+(Card|Section|Area)$/i, '')
      .toUpperCase();
    
    return cleanTitle;
  };

  // Рендеринг в анімованому режимі
  if (animatedText) {
    return (
      <>
        <div 
          className={`card-full-text ${cardClass}`}
          onClick={() => setIsOpen(true)}
        >
          {/* Фонова назва */}
          <div className="background-title">
            {getBackgroundTitle(title)}
          </div>
          
          {/* Мінімальна іконка */}
          <div className="card-icon-minimal">
            {icon}
          </div>
          
          {/* Анімований контент */}
          <div className="animated-text-content">
            <div className={`animated-text-segment ${isVisible ? 'visible' : 'hidden'}`}>
              {parseContent(textSegments[currentTextIndex] || content)}
            </div>
          </div>
        </div>

        {/* Модальне вікно для детального перегляду */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-[600px] bg-card text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                {icon}
                {title}
              </DialogTitle>
            </DialogHeader>
            <div className="text-white/80 mt-4 max-h-[60vh] overflow-y-auto">
              {content.split('\n\n').map((paragraph, i) => (
                <div key={i} className="mb-4">
                  {paragraph.split('\n').map((line, j) => (
                    <p key={j} className="mb-1">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  // Рендеринг у повному режимі
  if (fullText) {
    return (
      <>
        <div 
          className={`card-full-text ${cardClass}`}
          onClick={() => setIsOpen(true)}
        >
          {/* Фонова назва */}
          <div className="background-title">
            {getBackgroundTitle(title)}
          </div>
          
          {/* Мінімальна іконка */}
          <div className="card-icon-minimal">
            {icon}
          </div>
          
          {/* Основний контент */}
          <div className="full-text-content scroll-container">
            {parseContent(content)}
          </div>
        </div>

        {/* Модальне вікно для детального перегляду */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-[600px] bg-card text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                {icon}
                {title}
              </DialogTitle>
            </DialogHeader>
            <div className="text-white/80 mt-4 max-h-[60vh] overflow-y-auto">
              {content.split('\n\n').map((paragraph, i) => (
                <div key={i} className="mb-4">
                  {paragraph.split('\n').map((line, j) => (
                    <p key={j} className="mb-1">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  // Стандартний режим (для зворотної сумісності)
  return (
    <>
      <div 
        className={`card-base ${cardClass} cursor-pointer`}
        onClick={() => setIsOpen(true)}
      >
        <div className="card-icon">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <div className="text-white/80 text-sm overflow-hidden">
          {content.split('\n').slice(0, 4).map((line, idx) => (
            <span key={idx} className="block mb-1">
              {line}
            </span>
          ))}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] bg-card text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-3">
              {icon}
              {title}
            </DialogTitle>
          </DialogHeader>
          <div className="text-white/80 mt-4">
            {content.split('\n\n').map((paragraph, i) => (
              <div key={i} className="mb-4">
                {paragraph.split('\n').map((line, j) => (
                  <p key={j} className="mb-1">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
