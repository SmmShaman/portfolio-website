
import React, { useState, useEffect } from "react";
import { FolderOpen } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translationHelpers";

export const ProjectsVerticalCarousel: React.FC = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [isOpen, setIsOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<Array<{index: number, id: string, delay: number}>>([]);

  const totalProjects = t.projectsList.length;

  // Створюємо безперервний потік проектів з великими проміжками
  useEffect(() => {
    if (isPaused || totalProjects === 0) return;

    let projectCounter = 0;

    const addNewProject = () => {
      const projectIndex = projectCounter % totalProjects;
      const projectId = `project-${Date.now()}-${projectCounter}`;
      
      setVisibleProjects(prev => [
        ...prev,
        { index: projectIndex, id: projectId, delay: 0 }
      ]);
      
      projectCounter++;

      // Видаляємо проект після завершення анімації (12 секунд)
      setTimeout(() => {
        setVisibleProjects(prev => prev.filter(p => p.id !== projectId));
      }, 12000);
    };

    // Додаємо перший проект відразу
    addNewProject();

    // Потім додаємо новий проект кожні 8 секунд для великих проміжків
    const interval = setInterval(addNewProject, 8000);

    return () => clearInterval(interval);
  }, [isPaused, totalProjects]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <>
      <div 
        className="card-full-text card-projects cursor-pointer"
        onClick={() => setIsOpen(true)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Фонова назва */}
        <div className="background-title">
          {t.projects.toUpperCase()}
        </div>
        
        {/* Мінімальна іконка */}
        <div className="card-icon-minimal">
          <FolderOpen className="w-4 h-4 text-white" />
        </div>
        
        {/* Контент з плавно рухомими проектами */}
        <div 
          className="card-content relative h-full overflow-hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <div className="absolute inset-0 p-3">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="absolute inset-x-3 text-center bg-white/10 rounded-lg p-3 continuous-scroll-up hover:bg-white/20 transition-colors"
              >
                <div className="text-sm font-semibold text-white mb-2 leading-tight">
                  {t.projectsList[project.index]?.title}
                </div>
                <div className="text-xs text-white/80 leading-relaxed">
                  {t.projectsList[project.index]?.shortDesc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Модальне вікно для детального перегляду */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] bg-gray-900 text-white border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-3">
              <FolderOpen className="w-6 h-6 text-white" />
              Projects
            </DialogTitle>
          </DialogHeader>
          <div className="text-white/80 mt-4 max-h-[60vh] overflow-y-auto">
            {t.projectsList.map((project, index) => (
              <div key={index} className="mb-6 p-4 bg-white/5 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-white/70">
                  {project.fullDesc}
                </p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
