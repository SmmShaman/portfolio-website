import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Palette, Pipette, RotateCcw, X } from 'lucide-react';
import { useColorTheme } from '@/contexts/ColorThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

const gradients = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
];

// HSV to RGB conversion
const hsvToRgb = (h: number, s: number, v: number) => {
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  
  let r, g, b;
  
  if (h >= 0 && h < 60) {
    r = c; g = x; b = 0;
  } else if (h >= 60 && h < 120) {
    r = x; g = c; b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0; g = c; b = x;
  } else if (h >= 180 && h < 240) {
    r = 0; g = x; b = c;
  } else if (h >= 240 && h < 300) {
    r = x; g = 0; b = c;
  } else {
    r = c; g = 0; b = x;
  }
  
  return [
    Math.round((r + m) * 255),
    Math.round((g + m) * 255),
    Math.round((b + m) * 255)
  ];
};

// RGB to Hex conversion
const rgbToHex = (r: number, g: number, b: number) => {
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

// Professional Color Picker Component
const ColorPickerCanvas: React.FC<{
  onColorSelect: (color: string) => void;
  currentHue: number;
  onHueChange: (hue: number) => void;
}> = ({ onColorSelect, currentHue, onHueChange }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hueBarRef = useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHueDragging, setIsHueDragging] = useState(false);

  // Draw main color picker canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Create saturation gradient (left to right)
    const satGrad = ctx.createLinearGradient(0, 0, width, 0);
    satGrad.addColorStop(0, 'white');
    satGrad.addColorStop(1, `hsl(${currentHue}, 100%, 50%)`);
    ctx.fillStyle = satGrad;
    ctx.fillRect(0, 0, width, height);

    // Create brightness gradient (top to bottom)
    const brightGrad = ctx.createLinearGradient(0, 0, 0, height);
    brightGrad.addColorStop(0, 'transparent');
    brightGrad.addColorStop(1, 'black');
    ctx.fillStyle = brightGrad;
    ctx.fillRect(0, 0, width, height);
  }, [currentHue]);

  // Draw hue bar
  useEffect(() => {
    const canvas = hueBarRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Create hue gradient
    const hueGrad = ctx.createLinearGradient(0, 0, 0, height);
    for (let i = 0; i <= 360; i += 60) {
      hueGrad.addColorStop(i / 360, `hsl(${i}, 100%, 50%)`);
    }
    ctx.fillStyle = hueGrad;
    ctx.fillRect(0, 0, width, height);
  }, []);

  const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const saturation = x / canvas.width;
    const brightness = 1 - (y / canvas.height);

    const [r, g, b] = hsvToRgb(currentHue, saturation, brightness);
    const color = rgbToHex(r, g, b);
    onColorSelect(color);
  }, [currentHue, onColorSelect]);

  const handleHueClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = hueBarRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const hue = (y / canvas.height) * 360;
    onHueChange(Math.max(0, Math.min(360, hue)));
  }, [onHueChange]);

  return (
    <div className="flex gap-3">
      {/* Main color picker area */}
      <canvas
        ref={canvasRef}
        width={200}
        height={150}
        className="border border-gray-300 rounded cursor-crosshair"
        onClick={handleCanvasClick}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseMove={isDragging ? handleCanvasClick : undefined}
      />
      
      {/* Hue bar */}
      <canvas
        ref={hueBarRef}
        width={20}
        height={150}
        className="border border-gray-300 rounded cursor-pointer"
        onClick={handleHueClick}
        onMouseDown={() => setIsHueDragging(true)}
        onMouseUp={() => setIsHueDragging(false)}
        onMouseMove={isHueDragging ? handleHueClick : undefined}
      />
    </div>
  );
};

export const ColorPalette: React.FC = () => {
  const { language } = useLanguage();
  const { theme, updateColor, resetTheme, activeElement, setActiveElement } = useColorTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [currentHue, setCurrentHue] = useState(0);
  const [customColor, setCustomColor] = useState('#ffffff');
  const [isEyedropper, setIsEyedropper] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const elementLabels = {
    en: {
      background: 'Background',
      aboutCard: 'About Me',
      projectsCard: 'Projects', 
      servicesCard: 'Services',
      skillsCard: 'Skills',
      testimonialsCard: 'Testimonials',
      contactCard: 'Contact'
    },
    uk: {
      background: 'Фон',
      aboutCard: 'Про мене',
      projectsCard: 'Проекти',
      servicesCard: 'Послуги', 
      skillsCard: 'Навички',
      testimonialsCard: 'Відгуки',
      contactCard: 'Контакти'
    },
    no: {
      background: 'Bakgrunn',
      aboutCard: 'Om meg',
      projectsCard: 'Prosjekter',
      servicesCard: 'Tjenester',
      skillsCard: 'Ferdigheter', 
      testimonialsCard: 'Anmeldelser',
      contactCard: 'Kontakt'
    }
  };

  const texts = {
    en: {
      title: "Don't like how I colored the windows? Color them yourself!",
      reset: "Reset",
      eyedropper: "Eyedropper",
      custom: "Custom Color"
    },
    uk: {
      title: "Не подобається, як я розкрасив вікна? Розкрась сам!",
      reset: "Скинути",
      eyedropper: "Піпетка", 
      custom: "Власний колір"
    },
    no: {
      title: "Liker du ikke hvordan jeg farget vinduene? Farg dem selv!",
      reset: "Tilbakestill",
      eyedropper: "Pipette",
      custom: "Egendefinert farge"
    }
  };

  const t = texts[language];
  const labels = elementLabels[language];

  const handleEyedropper = async () => {
    if ('EyeDropper' in window) {
      try {
        setIsEyedropper(true);
        const eyeDropper = new (window as any).EyeDropper();
        const result = await eyeDropper.open();
        if (activeElement) {
          updateColor(activeElement, result.sRGBHex);
        }
      } catch (error) {
        console.log('Eyedropper was cancelled');
      } finally {
        setIsEyedropper(false);
      }
    } else {
      // Fallback for browsers without EyeDropper API
      fileInputRef.current?.click();
    }
  };

  const handleColorSelect = (color: string) => {
    if (activeElement) {
      updateColor(activeElement, color);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 text-white text-sm"
      >
        <Palette className="w-4 h-4" />
        {t.title.split(' ').slice(0, 3).join(' ')}...
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 p-4 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20 z-50 min-w-[320px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium text-gray-800">{t.title}</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* Element Selector */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700 mb-2">
              Оберіть елемент:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(labels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveElement(key as keyof typeof theme)}
                  className={`p-2 text-xs rounded-lg border transition-all ${
                    activeElement === key
                      ? 'bg-blue-100 border-blue-300 text-blue-800'
                      : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {activeElement && (
            <>
              {/* Professional Color Picker */}
              <div className="mb-4">
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Професійна палітра кольорів:
                </label>
                <ColorPickerCanvas
                  onColorSelect={handleColorSelect}
                  currentHue={currentHue}
                  onHueChange={setCurrentHue}
                />
              </div>

              {/* Gradients */}
              <div className="mb-4">
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Градієнти:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {gradients.map((gradient, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorSelect(gradient)}
                      className="w-12 h-8 rounded-lg border-2 border-white shadow-md hover:scale-110 transition-transform"
                      style={{ background: gradient }}
                    />
                  ))}
                </div>
              </div>

              {/* Custom Color Picker */}
              <div className="mb-4">
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  {t.custom}:
                </label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={customColor}
                    onChange={(e) => setCustomColor(e.target.value)}
                    className="w-12 h-8 rounded-lg border-2 border-gray-300"
                  />
                  <button
                    onClick={() => handleColorSelect(customColor)}
                    className="px-3 py-1 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Застосувати
                  </button>
                </div>
              </div>

              {/* Eyedropper Tool */}
              <div className="mb-4">
                <button
                  onClick={handleEyedropper}
                  disabled={isEyedropper}
                  className={`flex items-center gap-2 px-3 py-2 bg-green-500 text-white text-xs rounded-lg transition-colors ${
                    isEyedropper 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-green-600'
                  }`}
                >
                  <Pipette className="w-4 h-4" />
                  {t.eyedropper}
                </button>
              </div>
            </>
          )}

          {/* Reset Button */}
          <div className="border-t pt-3">
            <button
              onClick={resetTheme}
              className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white text-xs rounded-lg hover:bg-red-600 transition-colors w-full justify-center"
            >
              <RotateCcw className="w-4 h-4" />
              {t.reset}
            </button>
          </div>

          {/* Hidden file input for eyedropper fallback */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              // This would require canvas manipulation to extract colors
              // For now, just a placeholder
            }}
          />
        </div>
      )}
    </div>
  );
};