
import { Suspense, useRef, useState, useEffect } from 'react';
import { toast } from "sonner";

// We'll create a pure CSS/HTML fallback instead of using Three.js
// This will ensure compatibility across all environments

interface ThreeHeadProps {
  mouseX: number;
  mouseY: number;
}

function FallbackContent() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg">
      <p className="text-white text-center p-4">
        3D content could not be displayed. Your browser might not support WebGL.
      </p>
    </div>
  );
}

// Simple CSS-based animated head representation
function CSSHead({ mouseX, mouseY }: ThreeHeadProps) {
  const headRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (headRef.current) {
      // Apply rotation based on mouse position
      headRef.current.style.transform = `rotateY(${mouseX * 20}deg) rotateX(${-mouseY * 20}deg)`;
    }
  }, [mouseX, mouseY]);

  return (
    <div className="w-full h-full flex items-center justify-center perspective-500">
      <div 
        ref={headRef}
        className="w-32 h-32 bg-gray-200 rounded-full transform-3d transition-transform duration-200"
        style={{
          boxShadow: "inset -10px -10px 20px rgba(0,0,0,0.2), 0 5px 15px rgba(0,0,0,0.3)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Eyes */}
        <div className="absolute top-10 left-6 w-4 h-4 bg-gray-900 rounded-full"></div>
        <div className="absolute top-10 right-6 w-4 h-4 bg-gray-900 rounded-full"></div>
        
        {/* Mouth */}
        <div className="absolute bottom-10 left-1/4 w-1/2 h-1 bg-gray-900 rounded-full"></div>
      </div>
    </div>
  );
}

export default function ThreeHead({ mouseX, mouseY }: ThreeHeadProps) {
  const [hasError, setHasError] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if WebGL is supported
    const checkWebGLSupport = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        if (!gl) {
          setWebGLSupported(false);
          toast.error("WebGL is not supported by your browser. Showing fallback content.");
          return false;
        }
        
        setWebGLSupported(true);
        return true;
      } catch (e) {
        setWebGLSupported(false);
        toast.error("WebGL is not supported by your browser. Showing fallback content.");
        return false;
      }
    };
    
    checkWebGLSupport();
  }, []);

  // Show fallback if WebGL is not supported or an error occurred
  if (hasError || webGLSupported === false) {
    return <FallbackContent />;
  }

  // If still checking WebGL support, show loading
  if (webGLSupported === null) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-white">Checking display capabilities...</p>
      </div>
    );
  }

  // If WebGL is supported, render the CSS head
  return (
    <div className="w-full h-full">
      <CSSHead mouseX={mouseX} mouseY={mouseY} />
    </div>
  );
}
