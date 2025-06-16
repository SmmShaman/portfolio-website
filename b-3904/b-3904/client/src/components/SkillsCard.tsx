import React, { useState } from "react";
import { Code } from "lucide-react";
import SkillsDisplay from "./SkillsDisplay";
import SkillOverlay from "./SkillOverlay";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translationHelpers";
import { skillCategories } from "@/utils/skillsData";

export const SkillsCard: React.FC = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // FINAL SKILLS LIST - FORCED UPDATE
  const allSkills = [
    "Python", "JavaScript", "TypeScript", "SQL", "React Native", "Expo",
    "REST APIs", "OpenAI API", "Claude", "Supabase", "Meta Ads Manager",
    "Instagram Ads", "Google Analytics 4", "SimilarWeb", "Power BI",
    "Amazon", "Etsy", "Shopify", "EdTech платформи", "ROI оптимізація",
    "Фінансове моделювання"
  ];

  const handleSkillClick = (skill: string) => {
    setSelectedSkill(skill);
  };

  const handleCloseOverlay = () => {
    setSelectedSkill(null);
  };

  return (
    <>
      <div className="card-full-text card-skills">
        {/* Великий фоновий напис */}
        <div className="background-title">
          {t.skills.toUpperCase()}
        </div>
        
        {/* Мінімальна іконка */}
        <div className="card-icon-minimal">
          <Code className="w-4 h-4 text-white" />
        </div>
        
        {/* Інтерактивні навички як плашки */}
        <div className="card-content">
          <SkillsDisplay 
            skills={allSkills} 
            onSkillClick={handleSkillClick}
          />
        </div>
      </div>

      {/* Анімоване вікно з детальною інформацією */}
      <SkillOverlay
        selectedSkill={selectedSkill}
        onClose={handleCloseOverlay}
        isVisible={selectedSkill !== null}
      />
    </>
  );
};