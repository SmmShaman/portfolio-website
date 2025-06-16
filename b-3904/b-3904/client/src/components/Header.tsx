
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translationHelpers";
import LanguageSwitcher from "./LanguageSwitcher";
import { ColorPalette } from "./ColorPalette";

const Header = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return <header className="py-6 px-8 flex flex-col items-start max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-400">Vitalii Berbeha</h1>
      <p className="text-blue-400 mt-1">
        {language === "en" && "Marketing & Analytics Expert | Creator of Elvarika"}
        {language === "uk" && "Експерт з маркетингу та аналітики | Засновник Elvarika"}
        {language === "no" && "Marketing- og analyseekspert | Skaperen av Elvarika"}
      </p>
      <p className="text-gray-300 mt-3 max-w-2xl">
        {t.description}
      </p>
      
      <div className="absolute top-6 right-8 flex flex-col gap-3">
        <LanguageSwitcher />
        <ColorPalette />
      </div>
    </header>;
};

export default Header;
