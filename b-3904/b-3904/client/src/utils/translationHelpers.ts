
import { Language } from "@/contexts/LanguageContext";
import translations from "@/data/translations";

/**
 * Get translation strings for the specified language
 */
export const getTranslation = (language: Language) => {
  // Return the translations for the specified language
  return translations[language] || translations.en;
};
