
import React, { useEffect } from "react";
import { X } from "lucide-react";
import { techLogos, getSkillLogoUrl, getCategoryForSkill, skillCategories } from "@/utils/skillsData";

interface SkillOverlayProps {
  selectedSkill: string | null;
  onClose: () => void;
  isVisible: boolean;
}

const SkillOverlay: React.FC<SkillOverlayProps> = ({ selectedSkill, onClose, isVisible }) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEsc);
      // Prevent body scroll when overlay is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible, onClose]);

  if (!selectedSkill || !isVisible) {
    return null;
  }

  const techInfo = techLogos[selectedSkill];
  const logoUrl = getSkillLogoUrl(selectedSkill);
  const category = getCategoryForSkill(selectedSkill);
  const categoryInfo = skillCategories[category];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-skill-overlay-enter"
      onClick={handleBackdropClick}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 text-white hover:text-gray-300 transition-colors"
        aria-label="Close overlay"
      >
        <X size={28} />
      </button>

      {/* Beautiful animated content window */}
      <div className="bg-gradient-to-br from-purple-900/90 to-blue-900/90 backdrop-blur-md rounded-2xl p-8 max-w-md mx-4 shadow-2xl border border-white/20 animate-skill-icon-bounce">
        <div className="flex flex-col items-center text-center text-white">
          {/* Large skill icon/logo */}
          <div className="mb-6 animate-skill-icon-bounce">
            {logoUrl ? (
              <img 
                src={logoUrl}
                alt={`${selectedSkill} logo`}
                className="w-24 h-24 object-contain drop-shadow-lg"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : techInfo?.icon ? (
              <techInfo.icon className="w-24 h-24 text-white drop-shadow-lg" />
            ) : (
              <div className={`w-24 h-24 rounded-full ${categoryInfo?.color || 'bg-purple-500'} flex items-center justify-center text-3xl font-bold shadow-lg`}>
                {selectedSkill.charAt(0)}
              </div>
            )}
          </div>

          {/* Skill name and details */}
          <div className="animate-skill-text-slide-up">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {selectedSkill}
            </h3>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              {techInfo?.description || `Professional expertise in ${selectedSkill} technology and implementation`}
            </p>
            <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${categoryInfo?.color || 'bg-purple-500 text-white'} shadow-md`}>
              {categoryInfo?.label || 'Technology'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillOverlay;
