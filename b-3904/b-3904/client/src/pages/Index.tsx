
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { AboutMeCard } from "@/components/AboutMeCard";
import { ProjectsVerticalCarousel } from "@/components/ProjectsVerticalCarousel";
import { ServicesCard } from "@/components/ServicesCard";
import { SkillsCard } from "@/components/SkillsCard";
import { TestimonialsCard } from "@/components/TestimonialsCard";
import { ContactCard } from "@/components/ContactCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { useColorTheme } from "@/contexts/ColorThemeContext";
import { DynamicCardStyles } from "@/components/DynamicCardStyles";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { language } = useLanguage();
  const { theme } = useColorTheme();

  // Enhanced 3D head tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      className="min-h-screen text-white"
      style={{ background: theme.background }}
    >
      <DynamicCardStyles />
      <Header />
      <div className="content-grid">
        <AboutMeCard />
        <ProjectsVerticalCarousel />
        <ServicesCard />
        <SkillsCard />
        <TestimonialsCard />
        <ContactCard />
      </div>
    </div>
  );
};

export default Index;
