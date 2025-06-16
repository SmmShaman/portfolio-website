
import React from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { skillCategories, techLogos, getCategoryForSkill } from "@/utils/skillsData";

interface SkillTagProps {
  skill: string;
  onClick?: (skill: string) => void;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, onClick }) => {
  // Determine category and styling
  const category = getCategoryForSkill(skill);
  const { color, hoverColor } = skillCategories[category];
  
  // All skills should have tooltips
  const techInfo = techLogos[skill] || { description: skill };

  const handleClick = () => {
    if (onClick) {
      onClick(skill);
    }
  };

  const badgeContent = (
    <Badge 
      className={`whitespace-nowrap ${color} ${hoverColor} transition-all duration-200 cursor-pointer px-3 py-1 hover:scale-105 ${onClick ? 'hover:shadow-lg' : ''}`}
      onClick={handleClick}
    >
      {skill}
    </Badge>
  );

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {badgeContent}
        </TooltipTrigger>
        <TooltipContent className="bg-card border-card-hover p-3 max-w-[220px]">
          <div className="flex items-center gap-2">
            {techInfo?.icon ? (
              <techInfo.icon className="w-8 h-8" />
            ) : techInfo?.url ? (
              <img 
                src={techInfo.url} 
                alt={`${skill} logo`} 
                className="w-8 h-8 object-contain"
              />
            ) : null}
            <div className="text-sm">{techInfo?.description}</div>
          </div>
          {onClick && (
            <div className="text-xs text-muted-foreground mt-1">
              Click to view details
            </div>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SkillTag;
