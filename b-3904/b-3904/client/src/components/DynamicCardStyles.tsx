import React, { useEffect } from 'react';
import { useColorTheme } from '@/contexts/ColorThemeContext';

export const DynamicCardStyles: React.FC = () => {
  const { theme } = useColorTheme();

  useEffect(() => {
    // Динамічно оновлюємо CSS змінні для карток
    const root = document.documentElement;
    
    root.style.setProperty('--card-about', theme.aboutCard);
    root.style.setProperty('--card-projects', theme.projectsCard);
    root.style.setProperty('--card-services', theme.servicesCard);
    root.style.setProperty('--card-skills', theme.skillsCard);
    root.style.setProperty('--card-testimonials', theme.testimonialsCard);
    root.style.setProperty('--card-contact', theme.contactCard);
  }, [theme]);

  return null; // Цей компонент тільки встановлює CSS змінні
};