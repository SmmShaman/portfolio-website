
import React, { useRef, useState, useEffect } from "react";
import ThreeHead from "@/components/ThreeHead";

const AvatarSection = ({ mousePosition }: { mousePosition: { x: number, y: number } }) => {
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        
        // Update cursor position for integral symbol
        if (e.clientX >= left && e.clientX <= left + width &&
            e.clientY >= top && e.clientY <= top + height) {
          setShowCustomCursor(true);
          setCursorPosition({
            x: e.clientX - left,
            y: e.clientY - top
          });
        } else {
          setShowCustomCursor(false);
        }
      }
    };

    const handleMouseLeave = () => {
      setShowCustomCursor(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="bento-card row-span-2">
      <div 
        ref={containerRef}
        className="relative w-full h-64 cursor-none"
      >
        <div 
          className="w-full h-full rounded-2xl overflow-hidden"
          style={{ 
            transformStyle: 'preserve-3d',
            transition: 'transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
          }}
        >
          <ThreeHead mouseX={mousePosition.x} mouseY={mousePosition.y} />
        </div>
        {showCustomCursor && (
          <div 
            className="absolute pointer-events-none text-white text-2xl font-serif"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              transform: 'translate(-50%, -50%)',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            ∫
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarSection;
