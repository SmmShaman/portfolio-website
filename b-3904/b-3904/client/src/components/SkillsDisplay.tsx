
import React from "react";
import SkillTag from "./SkillTag";

interface SkillsDisplayProps {
  skills: string[];
  onSkillClick?: (skill: string) => void;
}

const SkillsDisplay: React.FC<SkillsDisplayProps> = ({ skills, onSkillClick }) => {
  return (
    <div className="flex flex-wrap gap-2 py-1 px-1">
      {skills.map((skill, index) => (
        <SkillTag 
          key={index} 
          skill={skill} 
          onClick={onSkillClick}
        />
      ))}
    </div>
  );
};

export default SkillsDisplay;
