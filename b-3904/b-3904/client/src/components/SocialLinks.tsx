
import React from "react";
import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translationHelpers";

const SocialLinks = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <div className="bento-card">
      <h2 className="text-2xl font-bold mb-6">{t.letsConnect}</h2>
      <div className="flex space-x-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
           className="p-3 rounded-full hover:bg-gray-800 transition-colors">
          <Facebook className="w-8 h-8" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
           className="p-3 rounded-full hover:bg-gray-800 transition-colors">
          <Linkedin className="w-8 h-8" />
        </a>
        <a href="mailto:your@email.com"
           className="p-3 rounded-full hover:bg-gray-800 transition-colors">
          <Mail className="w-8 h-8" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
           className="p-3 rounded-full hover:bg-gray-800 transition-colors">
          <Twitter className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
