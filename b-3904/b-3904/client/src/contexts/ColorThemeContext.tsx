import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface ColorTheme {
  background: string;
  aboutCard: string;
  projectsCard: string;
  servicesCard: string;
  skillsCard: string;
  testimonialsCard: string;
  contactCard: string;
}

const defaultTheme: ColorTheme = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  aboutCard: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  projectsCard: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  servicesCard: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  skillsCard: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  testimonialsCard: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  contactCard: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
};

interface ColorThemeContextType {
  theme: ColorTheme;
  updateColor: (element: keyof ColorTheme, color: string) => void;
  resetTheme: () => void;
  isColorPickerOpen: boolean;
  setIsColorPickerOpen: (open: boolean) => void;
  activeElement: keyof ColorTheme | null;
  setActiveElement: (element: keyof ColorTheme | null) => void;
}

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined);

export const ColorThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ColorTheme>(() => {
    const saved = localStorage.getItem('colorTheme');
    return saved ? JSON.parse(saved) : defaultTheme;
  });
  
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [activeElement, setActiveElement] = useState<keyof ColorTheme | null>(null);

  useEffect(() => {
    localStorage.setItem('colorTheme', JSON.stringify(theme));
  }, [theme]);

  const updateColor = (element: keyof ColorTheme, color: string) => {
    setTheme(prev => ({
      ...prev,
      [element]: color
    }));
  };

  const resetTheme = () => {
    setTheme(defaultTheme);
    localStorage.removeItem('colorTheme');
  };

  return (
    <ColorThemeContext.Provider value={{
      theme,
      updateColor,
      resetTheme,
      isColorPickerOpen,
      setIsColorPickerOpen,
      activeElement,
      setActiveElement
    }}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export const useColorTheme = () => {
  const context = useContext(ColorThemeContext);
  if (!context) {
    throw new Error('useColorTheme must be used within ColorThemeProvider');
  }
  return context;
};