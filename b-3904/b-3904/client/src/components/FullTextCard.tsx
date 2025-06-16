
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface FullTextCardProps {
  title: string;
  content: string;
  icon: React.ReactNode;
  cardClass: string;
}

export const FullTextCard: React.FC<FullTextCardProps> = ({
  title,
  content,
  icon,
  cardClass,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div 
        className={`card-base ${cardClass} cursor-pointer card-full-text`}
        onClick={() => setIsOpen(true)}
      >
        {/* Background title */}
        <div className="background-title">
          {title}
        </div>
        
        {/* Icon */}
        <div className="card-icon-minimal">
          {icon}
        </div>
        
        {/* Main content with full text */}
        <div className="full-text-content">
          {content.split('\n\n').map((paragraph, i) => (
            <div key={i} className="text-paragraph">
              {paragraph.split('\n').map((line, j) => (
                <div key={j} className="text-line">
                  {line}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] bg-card text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-3">
              {icon}
              {title}
            </DialogTitle>
          </DialogHeader>
          <div className="text-white/80 mt-4">
            {content.split('\n\n').map((paragraph, i) => (
              <div key={i} className="mb-4">
                {paragraph.split('\n').map((line, j) => (
                  <p key={j} className="mb-1">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
