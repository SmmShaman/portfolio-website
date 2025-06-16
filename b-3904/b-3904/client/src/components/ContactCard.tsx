import React, { useState } from "react";
import { Mail, MessageCircle, Send, Globe, Github, Twitter, X } from "lucide-react";
import { SiTelegram, SiFacebook, SiLinkedin, SiTiktok, SiYoutube, SiInstagram } from "react-icons/si";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translationHelpers";

// Import QR code images
import telegramQR from "@assets/telegram_1750073663605.png";
import instagramQR from "@assets/instagram_1750073663604.png";
import websiteQR from "@assets/website_1750073663607.png";
import facebookQR from "@assets/facebook_1750073663603.png";
import linkedinQR from "@assets/linkedin_1750073663605.png";
import githubQR from "@assets/github_1750073663604.png";
import twitterQR from "@assets/twitter_1750073663606.png";
import tiktokQR from "@assets/tiktok_1750073663606.png";
import youtubeQR from "@assets/youtube_1750073663607.png";

export const ContactCard: React.FC = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [isEmailFormOpen, setIsEmailFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@vitalii.no?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setIsEmailFormOpen(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      id: "telegram",
      name: "Telegram",
      handle: "@smmshaman",
      icon: <SiTelegram className="w-6 h-6" />,
      qrCode: telegramQR,
      color: "text-blue-500"
    },
    {
      id: "instagram", 
      name: "Instagram",
      handle: "@smmshaman",
      icon: <SiInstagram className="w-6 h-6" />,
      qrCode: instagramQR,
      color: "text-pink-500"
    },
    {
      id: "email",
      name: "Email",
      handle: "info@vitalii.no",
      icon: <Mail className="w-6 h-6" />,
      color: "text-orange-500",
      isForm: true
    },
    {
      id: "website",
      name: "Website", 
      handle: "vitalii.no",
      icon: <Globe className="w-6 h-6" />,
      qrCode: websiteQR,
      color: "text-green-500"
    },
    {
      id: "facebook",
      name: "Facebook",
      handle: "SMM.shaman",
      icon: <SiFacebook className="w-6 h-6" />,
      qrCode: facebookQR,
      color: "text-blue-600"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      handle: "smmshaman",
      icon: <SiLinkedin className="w-6 h-6" />,
      qrCode: linkedinQR,
      color: "text-blue-700"
    },
    {
      id: "github",
      name: "GitHub",
      handle: "SmmShaman",
      icon: <Github className="w-6 h-6" />,
      qrCode: githubQR,
      color: "text-gray-400"
    },
    {
      id: "twitter",
      name: "Twitter",
      handle: "SmmShaman", 
      icon: <Twitter className="w-6 h-6" />,
      qrCode: twitterQR,
      color: "text-sky-500"
    },
    {
      id: "tiktok",
      name: "TikTok",
      handle: "@stuardbmw",
      icon: <SiTiktok className="w-6 h-6" />,
      qrCode: tiktokQR,
      color: "text-red-500"
    },
    {
      id: "youtube",
      name: "YouTube",
      handle: "SMMShaman",
      icon: <SiYoutube className="w-6 h-6" />,
      qrCode: youtubeQR,
      color: "text-red-600"
    }
  ];

  const getContactUrl = (contact: any) => {
    switch (contact.id) {
      case 'telegram':
        return 'https://t.me/smmshaman';
      case 'instagram':
        return 'https://instagram.com/smmshaman';
      case 'website':
        return 'https://vitalii.no';
      case 'facebook':
        return 'https://facebook.com/SMM.shaman';
      case 'linkedin':
        return 'https://linkedin.com/in/smmshaman';
      case 'github':
        return 'https://github.com/SmmShaman';
      case 'twitter':
        return 'https://twitter.com/SmmShaman';
      case 'tiktok':
        return 'https://tiktok.com/@stuardbmw';
      case 'youtube':
        return 'https://youtube.com/@SMMShaman';
      default:
        return '#';
    }
  };

  const handleContactClick = (contact: any) => {
    if (contact.isForm) {
      setIsEmailFormOpen(true);
    } else {
      setSelectedContact(contact.id);
    }
  };

  const selectedContactData = selectedContact ? contactInfo.find(c => c.id === selectedContact) : null;

  return (
    <>
      <div className="card-full-text card-contact">
        {/* Великий фоновий напис */}
        <div className="background-title">
          {t.contact.toUpperCase()}
        </div>
        
        {/* Мінімальна іконка */}
        <div className="card-icon-minimal">
          <MessageCircle className="w-4 h-4 text-white" />
        </div>
        
        {/* Сітка соціальних мереж - тільки логотипи */}
        <div className="card-content relative overflow-hidden">
          <div className="grid grid-cols-5 grid-rows-2 gap-3 w-full h-full p-4 justify-items-center items-center relative">
            {contactInfo.map((contact, index) => (
              <div
                key={contact.id}
                className="relative group w-full h-full flex items-center justify-center overflow-hidden"
                style={{
                  gridColumn: index === 9 ? 'span 1 / -1' : 'auto', // Останній елемент по центру
                  gridRow: index >= 5 ? '2' : '1'
                }}
              >
                {/* Прямий лінк на профіль (невидимий) */}
                {!contact.isForm && (
                  <a
                    href={getContactUrl(contact)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 opacity-0 pointer-events-none"
                    aria-label={`Відкрити ${contact.name}`}
                  />
                )}
                
                {/* Кнопка з логотипом */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (contact.isForm) {
                      handleContactClick(contact);
                    } else {
                      // Відкриваємо тільки QR-код при кліку
                      handleContactClick(contact);
                    }
                  }}
                  onDoubleClick={(e) => {
                    e.preventDefault();
                    if (!contact.isForm) {
                      // Подвійний клік відкриває профіль
                      window.open(getContactUrl(contact), '_blank');
                    }
                  }}
                  className={`
                    w-full h-full flex flex-col items-center justify-center
                    transition-all duration-700 ease-out
                    bg-transparent rounded-lg cursor-pointer relative z-20
                    ${contact.color}
                    group-hover:z-30
                    hover:shadow-2xl hover:bg-black/90 hover:rounded-xl
                  `}
                  style={{
                    transformOrigin: 'center center'
                  }}
                >
                  {/* Логотип з постійним тремтінням - збільшений на 200% */}
                  <div 
                    className="w-10 h-10 transition-all duration-700 group-hover:w-24 group-hover:h-24 group-hover:scale-110"
                    style={{
                      animation: 'gentleShake 2s ease-in-out infinite',
                      transformOrigin: 'center',
                      maxWidth: '90%',
                      maxHeight: '90%'
                    }}
                  >
                    {React.cloneElement(contact.icon, {
                      className: "w-full h-full"
                    })}
                  </div>
                  
                  {/* Анімований текст з вогняним ефектом */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex whitespace-nowrap bg-black/80 px-2 py-1 rounded backdrop-blur-sm">
                      {contact.handle.split('').map((char, index) => (
                        <span
                          key={index}
                          className="font-bold text-sm animate-bounce"
                          style={{
                            animationDelay: `${index * 80}ms`,
                            animationDuration: '1s',
                            color: '#ff6b35',
                            textShadow: `
                              0 0 5px #ff6b35,
                              0 0 10px #ff6b35,
                              0 0 15px #ff4500,
                              0 0 20px #ff4500,
                              0 0 25px #dc2626,
                              0 0 30px #dc2626
                            `,
                            filter: 'brightness(1.2) saturate(1.5)',
                            transform: `translateY(${Math.sin(index * 0.5) * 2}px)`
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      <Dialog open={!!selectedContact} onOpenChange={() => setSelectedContact(null)}>
        <DialogContent className="sm:max-w-[400px] bg-gray-900 text-white border-gray-700">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-white">
              {selectedContactData && (
                <>
                  <div className={selectedContactData.color}>
                    {selectedContactData.icon}
                  </div>
                  {selectedContactData.name}
                </>
              )}
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              {t.qrCodeScanText}
            </DialogDescription>
          </DialogHeader>
          
          {selectedContactData && selectedContactData.qrCode && (
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <img 
                  src={selectedContactData.qrCode} 
                  alt={`${selectedContactData.name} QR Code`}
                  className="w-64 h-64 object-contain"
                />
              </div>
              <div className="text-center">
                <p className="text-lg font-medium text-white">{selectedContactData.name}</p>
                <a 
                  href={getContactUrl(selectedContactData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors underline"
                >
                  {selectedContactData.handle}
                </a>
              </div>
            </div>
          )}
          
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setSelectedContact(null)}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <X className="w-4 h-4 mr-2" />
              Закрити
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Email Form Modal */}
      <Dialog open={isEmailFormOpen} onOpenChange={setIsEmailFormOpen}>
        <DialogContent className="sm:max-w-[500px] bg-gray-900 text-white border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-3 text-white">
              <Mail className="w-6 h-6 text-orange-400" />
              {t.contactFormTitle}
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              {t.contactFormDescription}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">{t.contactFormName}</Label>
              <Input
                id="name"
                type="text"
                placeholder={t.contactFormNamePlaceholder}
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">{t.contactFormEmail}</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-white">{t.contactFormSubject}</Label>
              <Input
                id="subject"
                type="text"
                placeholder={t.contactFormSubjectPlaceholder}
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                required
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">{t.contactFormMessage}</Label>
              <Textarea
                id="message"
                placeholder={t.contactFormMessagePlaceholder}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                required
                rows={4}
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400 resize-none"
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button 
                type="submit" 
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Send className="w-4 h-4 mr-2" />
                {t.contactFormSend}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsEmailFormOpen(false)}
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                {t.contactFormCancel}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};