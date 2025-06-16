
import React from "react";
import { Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translationHelpers";
import { FullTextCard } from "./FullTextCard";

const ProjectsCard = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <FullTextCard
      title={t.projects}
      content={t.projectsContent}
      icon={<Briefcase className="w-4 h-4 text-white" />}
      cardClass="card-projects"
    />
  );
};

export default ProjectsCard;
