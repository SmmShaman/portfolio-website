
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translationHelpers";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const ProjectsCarousel = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [openProject, setOpenProject] = useState<number | null>(null);

  const handleOpenProject = (index: number) => {
    setOpenProject(index);
  };

  const handleCloseProject = () => {
    setOpenProject(null);
  };

  return (
    <div className="bento-card col-span-3">
      <h2 className="text-2xl font-bold mb-6">{t.featuredProjects}</h2>
      <Carousel className="w-full">
        <CarouselContent>
          {t.projectsList.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div 
                className="p-6 bg-card-hover rounded-lg cursor-pointer hover:bg-opacity-80 transition-all h-full"
                onClick={() => handleOpenProject(index)}
              >
                <div className="h-40 mb-3 overflow-hidden rounded-lg">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.shortDesc}</p>
                <Button className="mt-3 w-full" size="sm">
                  {t.viewProject}
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-5 bg-card-hover border-none text-white h-10 w-10" />
        <CarouselNext className="-right-5 bg-card-hover border-none text-white h-10 w-10" />
      </Carousel>

      {/* Project Detail Modal */}
      <Dialog open={openProject !== null} onOpenChange={handleCloseProject}>
        <DialogContent className="sm:max-w-[700px] bg-card border-card-hover">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {openProject !== null && t.projectsList[openProject]?.title}
            </DialogTitle>
            <DialogClose className="absolute right-4 top-4">
              <X className="h-4 w-4" />
              <span className="sr-only">{t.closeModal}</span>
            </DialogClose>
          </DialogHeader>
          {openProject !== null && (
            <div className="grid gap-6">
              <div className="h-64 overflow-hidden rounded-lg">
                <img 
                  src={t.projectsList[openProject]?.imageUrl} 
                  alt={t.projectsList[openProject]?.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogDescription className="text-lg text-white">
                {t.projectsList[openProject]?.fullDesc}
              </DialogDescription>
              <div className="flex justify-between mt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setOpenProject(prev => (prev !== null && prev > 0) ? prev - 1 : t.projectsList.length - 1)}
                >
                  {t.previousProject}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setOpenProject(prev => (prev !== null && prev < t.projectsList.length - 1) ? prev + 1 : 0)}
                >
                  {t.nextProject}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsCarousel;
