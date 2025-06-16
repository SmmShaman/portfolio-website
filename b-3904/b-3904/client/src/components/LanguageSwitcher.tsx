
import React from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Flag } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "no", label: "NO", flag: "🇳🇴" },
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "uk", label: "UA", flag: "🇺🇦" },
  ];

  return (
    <div className="flex rounded-full bg-gray-800 p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-4 py-1 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
            language === lang.code 
              ? "bg-purple-500 text-white" 
              : "text-gray-300 hover:text-white"
          }`}
        >
          <span>{lang.flag}</span>
          <span>{lang.label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
