import { Language } from "../contexts/LanguageContext";

// Define the translation structure
type TranslationStrings = {
  welcome: string;
  hiIm: string;
  description: string;
  featuredProjects: string;
  letsConnect: string;
  languages: string;
  viewProject: string;
  closeModal: string;
  nextProject: string;
  previousProject: string;
  aboutMe: string;
  aboutContent: string;
  projects: string;
  projectsContent: string;
  services: string;
  servicesContent: string;
  skills: string;
  skillsContent: string;
  testimonials: string;
  testimonialsContent: string;
  contact: string;
  contactContent: string;
  // Contact form translations
  contactFormTitle: string;
  contactFormDescription: string;
  contactFormName: string;
  contactFormEmail: string;
  contactFormSubject: string;
  contactFormMessage: string;
  contactFormSend: string;
  contactFormCancel: string;
  contactFormAlternative: string;
  contactFormNamePlaceholder: string;
  contactFormSubjectPlaceholder: string;
  contactFormMessagePlaceholder: string;
  // About modal translations
  aboutModalDescription: string;
  aboutModalSpecialization: string;
  aboutModalList: string[];
  // QR code modal translations
  qrCodeScanText: string;
  projectsList: Array<{
    title: string;
    shortDesc: string;
    fullDesc: string;
    imageUrl: string;
  }>;
};

// Define translations for each language
const translations: Record<Language, TranslationStrings> = {
  en: {
    welcome: "welcome",
    hiIm: "Hi, I'm",
    description: "I help organisations grow by blending data-driven marketing with modern tech.",
    featuredProjects: "Featured Projects",
    letsConnect: "Let's Connect",
    languages: "Languages",
    viewProject: "View Project",
    closeModal: "Close",
    nextProject: "Next",
    previousProject: "Previous",
    aboutMe: "About Me",
    aboutContent: "I am **Vitalii Berbeha** — AI project leader and entrepreneur who combines 20+ years of experience in business development with modern artificial intelligence technologies. I specialize in creating innovative EdTech solutions and automating business processes.\n\n**My flagship project — Elvarika** — is a revolutionary SaaS platform for language learning that uses personalized audio playlists and AI algorithms. The app combines B2B and B2C approaches, offering individual learning paths based on user data analysis. From concept to realization, I've conducted the full development cycle: market research, system architecture, programming (React/TypeScript, Supabase), localization, and market entry strategy.\n\n**Technical expertise:** Azure OpenAI, React, TypeScript, Python (FastAPI), Supabase, automation through Zapier/Make. Experience integrating AI into real business processes — from chatbots to predictive analytics.\n\n**Entrepreneurial experience:** Behind me lies successful leadership of my own company (2007-2017), product launches on Amazon Marketplace in the USA and Europe, development of strategies for entering the Norwegian market. Worked with companies from startups to corporations, specializing in digital transformation and business scaling.\n\n**Education and localization:** Master's degree in pedagogy with mathematics and economics. Fluent in Ukrainian, Norwegian, English, and Russian. Based in Norway, where I actively develop EdTech initiatives and consult local companies on AI integration.\n\n**My mission:** To create technological solutions that make learning and business processes more efficient, personalized, and accessible to a global audience.",
    projects: "Projects",
    projectsContent: "• Elvarika SaaS – FastAPI + Vue.js + Supabase; 1,000 users in Q1.\n• AI Content Automation – Zapier + OpenAI; cut production time from 3 h to 25 min.\n• Nordic Vitamins Study – Mixed-methods (n = 420); trimmed SKU list to 15 with ROI > 28%.",
    services: "Services",
    servicesContent: "AI Integration – from concept to production (OpenAI, LangChain)•Growth Marketing – Meta & Google Ads, A/B testing•Data & BI Dashboards – Power BI, Supabase, SQL•Market Intelligence – SEMrush, SimilarWeb, surveys•Workshops & Training – hands-on sessions for teams•Strategic Consulting – digital transformation roadmaps",
    skills: "Skills",
    skillsContent: "Programming: Python, JavaScript, TypeScript, SQL, React Native, Expo, REST APIs. Artificial Intelligence: OpenAI API, Claude, AI assistants. Databases: Supabase. Marketing: Meta Ads Manager, Instagram Ads, Google Analytics 4, SimilarWeb, Power BI. E-commerce: Amazon, Etsy, Shopify. EdTech platforms: diagnostic tests, personalized learning systems. Analytics: Power BI, Google Analytics 4, ROI optimization, financial modeling.",
    testimonials: "Testimonials",
    testimonialsContent: "\"Vitalii automated our campaigns with Python scripts and cut CPA by 31%. He delivers every time.\"\n— Klara Svendsen, CMO, Aliance Group\n\n\"Elvarika gave us insights we thought only big corporations could afford.\"\n— Øystein Moe, CEO, SME Norway",
    contact: "Contact",
    contactContent: "Let's talk!\nPhone: +47 925 64 334\nEmail: stuardbmw@gmail.com\nLinkedIn: /in/smmshaman",
    // Contact form translations
    contactFormTitle: "Write to me",
    contactFormDescription: "Fill out the form below and I'll receive your message via email",
    contactFormName: "Name",
    contactFormEmail: "Email",
    contactFormSubject: "Subject",
    contactFormMessage: "Message",
    contactFormSend: "Send",
    contactFormCancel: "Cancel",
    contactFormAlternative: "Or contact me through:",
    contactFormNamePlaceholder: "Your name",
    contactFormSubjectPlaceholder: "What would you like to talk about?",
    contactFormMessagePlaceholder: "Describe your project or question...",
    // About modal translations
    aboutModalDescription: "Detailed information about me",
    aboutModalSpecialization: "I specialize in:",
    aboutModalList: [
      "AI solutions development and integration",
      "Business process automation",
      "Data analytics and BI solutions",
      "Web development and UX/UI design",
      "Digital transformation consulting"
    ],
    qrCodeScanText: "Scan QR code to visit profile",
    projectsList: [
      {
        title: "E-Commerce Platform",
        shortDesc: "Full-stack online shopping solution with personalized recommendations",
        fullDesc: "A comprehensive e-commerce platform built with React, Node.js and MongoDB. Features include user authentication, product catalog, shopping cart, payment processing, and order management. The platform is fully responsive and optimized for mobile devices. Implemented ML-based recommendation engine that increased average order value by 28%.",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      },
      {
        title: "Portfolio Website",
        shortDesc: "Responsive developer portfolio with interactive project showcase",
        fullDesc: "A modern portfolio website designed to showcase projects and skills. Features a clean, minimalist design with smooth animations and interactive elements. Built with React and Tailwind CSS, optimized for all devices. Implemented custom 3D elements to highlight technical capabilities.",
        imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
      },
      {
        title: "Task Management App",
        shortDesc: "Productivity tool for teams with real-time collaboration features",
        fullDesc: "A collaborative task management application that helps teams organize their work. Features include task creation, assignment, due dates, progress tracking, and team communication tools. Built with React, TypeScript, and a Firebase backend. Implemented real-time updates and notifications system.",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      },
      {
        title: "Weather Dashboard",
        shortDesc: "Real-time weather forecasting with historical data visualization",
        fullDesc: "A weather dashboard that provides real-time weather information and forecasts. Features include current conditions, 7-day forecast, hourly updates, radar maps, and location-based services. Uses OpenWeatherMap API and built with React. Implemented historical data comparisons and climate trend analysis.",
        imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      },
      {
        title: "Social Media App",
        shortDesc: "Community platform for networking with AI-powered content moderation",
        fullDesc: "A social media application focused on connecting professionals in the tech industry. Features include user profiles, posts, comments, likes, and direct messaging. Built with React, Redux, and a Node.js/Express backend. Implemented AI-powered content moderation and spam detection.",
        imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      },
      {
        title: "Fitness Tracker",
        shortDesc: "Health and wellness monitoring with personalized workout plans",
        fullDesc: "A comprehensive fitness tracking application that helps users monitor their health and wellness goals. Features include workout logging, nutrition tracking, progress visualization, and personalized recommendations. Built with React Native. Implemented machine learning algorithms to generate custom workout recommendations.",
        imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      },
      {
        title: "Recipe Finder",
        shortDesc: "Culinary inspiration platform with dietary restriction filtering",
        fullDesc: "A recipe finder application that helps users discover new dishes based on ingredients they have. Features include recipe search, filtering by dietary restrictions, save favorites, and meal planning. Integrates with a recipe API and built with React. Implemented advanced filtering algorithms for dietary needs and preferences.",
        imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
      },
      {
        title: "Virtual Learning Platform",
        shortDesc: "Online education system with interactive assessments and feedback",
        fullDesc: "An e-learning platform designed for creating and consuming educational content. Features include course creation, video lectures, quizzes, progress tracking, and certificates. Built with React, Node.js, and MongoDB. Implemented advanced analytics dashboard for educators to track student progress and engagement.",
        imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
      },
      {
        title: "AI Content Generator",
        shortDesc: "NLP-powered tool for creating marketing and social media content",
        fullDesc: "An AI-powered content generation tool that helps marketers create compelling copy for various channels. The system uses advanced NLP models to generate contextually relevant content based on minimal input. Features include tone adjustment, length control, and content type templates. Built with OpenAI API, React, and Node.js backend.",
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
      },
      {
        title: "Data Visualization Dashboard",
        shortDesc: "Interactive business intelligence tool with real-time metrics",
        fullDesc: "A comprehensive data visualization dashboard for businesses to monitor KPIs and metrics in real-time. Features include customizable widgets, multiple data source integration, automated reporting, and trend analysis. Built with D3.js, React, and a Python/FastAPI backend that connects to various data sources including SQL databases and APIs.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      },
      {
        title: "IoT Home Automation",
        shortDesc: "Smart home system with centralized control and energy optimization",
        fullDesc: "An Internet of Things (IoT) platform for home automation that connects and controls various smart devices through a single interface. Features include scheduled routines, energy usage monitoring, voice control integration, and remote access. Built with React Native for mobile, with a Node.js backend and MQTT protocol for device communication.",
        imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827"
      },
      {
        title: "Blockchain Wallet",
        shortDesc: "Secure cryptocurrency management with multi-chain support",
        fullDesc: "A secure cryptocurrency wallet application supporting multiple blockchain networks. Features include transaction history, multi-wallet management, QR code scanning, and real-time price tracking. Implemented enhanced security features including biometric authentication and cold storage options. Built with React Native and blockchain-specific libraries.",
        imageUrl: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28"
      },
      {
        title: "Augmented Reality Tour Guide",
        shortDesc: "Interactive AR experience for historical landmarks and museums",
        fullDesc: "An augmented reality application that enhances the experience of visiting historical sites and museums. Users can point their device at landmarks to see historical information, 3D reconstructions of past appearances, and interactive storytelling elements. Built with Unity, ARKit/ARCore, and a content management system for curators to update information.",
        imageUrl: "https://images.unsplash.com/photo-1574169208507-84376144848b"
      }
    ]
  },
  uk: {
    welcome: "ласкаво просимо",
    hiIm: "Привіт, я",
    description: "Допомагаю бізнесу зростати, поєднуючи маркетинг, аналітику й сучасні технології.",
    featuredProjects: "Вибрані Проекти",
    letsConnect: "Давайте Зв'яжемося",
    languages: "Мови",
    viewProject: "Переглянути проект",
    closeModal: "Закрити",
    nextProject: "Наступний",
    previousProject: "Попередній",
    aboutMe: "Про мене",
    aboutContent: "Я **Виталій Бербега** — проектлідер AI та підприємець, який поєднує 20+ років досвіду в бізнес-розробці з сучасними технологіями штучного інтелекту. Спеціалізуюся на створенні інноваційних EdTech рішень та автоматизації бізнес-процесів.\n\n**Мій флагманський проект — Elvarika** — революційна SaaS-платформа для вивчення мов, що використовує персоналізовані аудіо плейлисти та AI-алгоритми. Додаток поєднує B2B та B2C підходи, пропонуючи індивідуальні навчальні шляхи на основі аналізу користувацьких даних. Від концепції до реалізації я проводив повний цикл розробки: маркетингові дослідження, архітектуру системи, програмування (React/TypeScript, Supabase), локалізацію та стратегію виходу на ринок.\n\n**Технічна експертиза:** Azure OpenAI, React, TypeScript, Python (FastAPI), Supabase, автоматизація через Zapier/Make. Досвід інтеграції AI в реальні бізнес-процеси — від чат-ботів до предиктивної аналітики.\n\n**Підприємницький досвід:** За плечима успішне керівництво власною компанією (2007-2017), запуск продуктів на Amazon Marketplace в США та Європі, розробка стратегій для входження в норвезький ринок. Працював з компаніями від стартапів до корпорацій, специалізуючись на цифровій трансформації та масштабуванні бізнесу.\n\n**Освіта та локалізація:** Магістр педагогіки з математики та економіки. Вільно володію українською, норвезькою, англійською та російською мовами. Базуюся в Норвегії, де активно розвиваю EdTech ініціативи та консультую місцеві компанії з питань AI-інтеграції.\n\n**Моя місія:** Створювати технологічні рішення, які роблять навчання та бізнес-процеси більш ефективними, персоналізованими та доступними для глобальної аудиторії.",
    projects: "Проекти",
    projectsContent: "• Elvarika SaaS – FastAPI + Vue.js + Supabase; 1 000 користувачів за перший квартал.\n• AI-автомат контенту – Zapier + OpenAI; час виробництва з 3 год до 25 хв.\n• Nordic Vitamins Study – змішані методи (n = 420); скорочено лінійку до 15 SKU, ROI > 28%.",
    services: "Послуги",
    servicesContent: "Інтеграція штучного інтелекту – від концепції до виробництва (OpenAI, LangChain)•Маркетинг зростання – Meta та Google Ads, A/B тестування•Дашборди даних та бізнес-аналітики – Power BI, Supabase, SQL•Ринкова аналітика – дослідження та оптимізація конверсій•Воркшопи та навчання – практичні сесії для команд•Стратегічне консультування – дорожні карти цифрової трансформації",
    skills: "Навички",
    skillsContent: "Програмування: Python, JavaScript, TypeScript, SQL, React Native, Expo, REST API. Штучний інтелект: OpenAI API, Claude, AI-асистенти. Бази даних: Supabase. Маркетинг: Meta Ads Manager, Instagram Ads, Google Analytics 4, SimilarWeb, Power BI. Електронна комерція: Amazon, Etsy, Shopify. EdTech платформи: діагностичні тести, персоналізовані навчальні системи. Аналітика: Power BI, Google Analytics 4, оптимізація ROI, фінансове моделювання.",
    testimonials: "Відгуки",
    testimonialsContent: "\"Виталій автоматизував наші кампанії за допомогою Python-скриптів і зменшив CPA на 31%. Він завжди виконує обіцянки.\"\n— Клара Свендсен, CMO, Aliance Group\n\n\"Elvarika дала нам аналітику, яку ми думали, можуть собі дозволити лише великі корпорації.\"\n— Ойстейн Мое, CEO, SME Norway",
    contact: "Контакт",
    contactContent: "Давайте поговоримо!\nТелефон: +47 925 64 334\nEmail: stuardbmw@gmail.com\nLinkedIn: /in/smmshaman",
    // Contact form translations
    contactFormTitle: "Напишіть мені",
    contactFormDescription: "Заповніть форму нижче, і я отримаю ваше повідомлення електронною поштою",
    contactFormName: "Ім'я",
    contactFormEmail: "Email",
    contactFormSubject: "Тема",
    contactFormMessage: "Повідомлення",
    contactFormSend: "Відправити",
    contactFormCancel: "Скасувати",
    contactFormAlternative: "Або зв'яжіться зі мною через:",
    contactFormNamePlaceholder: "Ваше ім'я",
    contactFormSubjectPlaceholder: "Про що ви хочете поговорити?",
    contactFormMessagePlaceholder: "Опишіть ваш проект або запитання...",
    // About modal translations
    aboutModalDescription: "Детальна інформація про мене",
    aboutModalSpecialization: "Я спеціалізуюся на:",
    aboutModalList: [
      "Розробці AI-рішень та інтеграції",
      "Автоматизації бізнес-процесів",
      "Аналітиці даних та BI-рішеннях",
      "Веб-розробці та UX/UI дизайні",
      "Консалтингу з цифрової трансформації"
    ],
    qrCodeScanText: "Скануйте QR-код для переходу",
    projectsList: [
      {
        title: "Платформа електронної комерції",
        shortDesc: "Повнофункціональне рішення з персоналізованими рекомендаціями",
        fullDesc: "Комплексна платформа електронної комерції, побудована на React, Node.js та MongoDB. Функції включають аутентифікацію користувачів, каталог продуктів, кошик для покупок, обробку платежів та управління замовленнями. Платформа повністю адаптивна та оптимізована для мобільних пристроїв. Впроваджено систему рекомендацій на основі ML, яка збільшила середню вартість замовлення на 28%.",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      },
      {
        title: "Сайт-портфоліо",
        shortDesc: "Адаптивне портфоліо розробника з інтерактивною демонстрацією проектів",
        fullDesc: "Сучасний сайт-портфоліо, розроблений для демонстрації проектів та навичок. Має чистий, мінімалістичний дизайн з плавною анімацією та інтерактивними елементами. Створений за допомогою React та Tailwind CSS, оптимізований для всіх пристроїв. Впроваджено користувацькі 3D елементи для виділення технічних можливостей.",
        imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
      },
      {
        title: "Додаток для управління завданнями",
        shortDesc: "Інструмент продуктивності з функціями співпраці в реальному часі",
        fullDesc: "Колаборативний додаток для управління завданнями, який допомагає командам організувати свою роботу. Функції включають створення завдань, призначення, терміни виконання, відстеження прогресу та інструменти для комунікації в команді. Створений на React, TypeScript та з бекендом Firebase. Впроваджено оновлення в реальному часі та систему сповіщень.",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      },
      {
        title: "Погодна панель",
        shortDesc: "Прогнозування погоди в реальному часі з візуалізацією історичних даних",
        fullDesc: "Погодна панель, яка надає інформацію про погоду в реальному часі та прогнози. Функції включають поточні умови, прогноз на 7 днів, погодинні оновлення, радарні карти та послуги на основі місцезнаходження. Використовує API OpenWeatherMap і побудований на React. Впроваджено порівняння історичних даних та аналіз кліматичних трендів.",
        imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      },
      {
        title: "Додаток для соціальних мереж",
        shortDesc: "Платформа спільноти з модерацією контенту на основі ШІ",
        fullDesc: "Додаток для соціальних мереж, орієнтований на з'єднання професіоналів у технологічній галузі. Функції включають профілі користувачів, дописи, коментарі, лайки та прямі повідомлення. Створений на React, Redux та з бекендом Node.js/Express. Впроваджено модерацію контенту та виявлення спаму на основі ШІ.",
        imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      },
      {
        title: "Фітнес-трекер",
        shortDesc: "Моніторинг здоров'я та благополуччя з персоналізованими планами тренувань",
        fullDesc: "Комплексний додаток для відстеження фітнесу, який допомагає користувачам контролювати свої цілі щодо здоров'я та благополуччя. Функції включають реєстрацію тренувань, відстеження харчування, візуалізацію прогресу та персоналізовані рекомендації. Створений на React Native. Впроваджено алгоритми машинного навчання для генерації індивідуальних рекомендацій щодо тренувань.",
        imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      },
      {
        title: "Пошук рецептів",
        shortDesc: "Кулінарна платформа з фільтрацією за дієтичними обмеженнями",
        fullDesc: "Додаток для пошуку рецептів, який допомагає користувачам відкривати нові страви на основі наявних інгредієнтів. Функції включають пошук рецептів, фільтрацію за дієтичними обмеженнями, збереження улюблених та планування харчування. Інтегрується з API рецептів та створений на React. Впроваджено розширені алгоритми фільтрації для дієтичних потреб та уподобань.",
        imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
      },
      {
        title: "Платформа віртуального навчання",
        shortDesc: "Система онлайн-освіти з інтерактивними завданнями та зворотним зв'язком",
        fullDesc: "Платформа електронного навчання, розроблена для створення та споживання освітнього контенту. Функції включають створення курсів, відеолекції, тести, відстеження прогресу та сертифікати. Створена на React, Node.js та MongoDB. Впроваджено розширену аналітичну панель для викладачів, щоб відстежувати прогрес та залученість студентів.",
        imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
      },
      {
        title: "Генератор контенту на базі ШІ",
        shortDesc: "Інструмент на основі NLP для створення маркетингового контенту",
        fullDesc: "Інструмент генерації контенту з використанням ШІ, який допомагає маркетологам створювати переконливі тексти для різних каналів. Система використовує передові моделі NLP для генерації контекстно релевантного змісту на основі мінімальних вхідних даних. Функції включають налаштування тону, контроль довжини та шаблони типів контенту. Створено з використанням API OpenAI, React та бекенду Node.js.",
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
      },
      {
        title: "Дашборд візуалізації даних",
        shortDesc: "Інтерактивний інструмент бізнес-аналітики з показниками в реальному часі",
        fullDesc: "Комплексний дашборд візуалізації даних для бізнесу, щоб відстежувати KPI та метрики в реальному часі. Функції включають налаштовувані віджети, інтеграцію з кількома джерелами даних, автоматизовану звітність та аналіз трендів. Створено з використанням D3.js, React та бекенду Python/FastAPI, який з'єднується з різними джерелами даних, включаючи SQL-бази даних та API.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      },
      {
        title: "IoT система автоматизації дому",
        shortDesc: "Система розумного будинку з централізованим керуванням",
        fullDesc: "Платформа Інтернету речей (IoT) для домашньої автоматизації, яка з'єднує та контролює різні розумні пристрої через єдиний інтерфейс. Функції включають заплановані рутини, моніторинг енергоспоживання, інтеграцію голосового керування та віддалений доступ. Створено з використанням React Native для мобільних пристроїв, з бекендом Node.js та протоколом MQTT для комунікації пристроїв.",
        imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827"
      },
      {
        title: "Блокчейн-гаманець",
        shortDesc: "Безпечне управління криптовалютами з підтримкою кількох блокчейнів",
        fullDesc: "Безпечний додаток-гаманець для криптовалют, що підтримує кілька блокчейн-мереж. Функції включають історію транзакцій, управління кількома гаманцями, сканування QR-кодів та відстеження цін у реальному часі. Впроваджено розширені функції безпеки, включаючи біометричну автентифікацію та опції холодного зберігання. Створено з використанням React Native та бібліотек для роботи з блокчейном.",
        imageUrl: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28"
      },
      {
        title: "AR-гід",
        shortDesc: "Інтерактивний AR-досвід для історичних пам'яток та музеїв",
        fullDesc: "Додаток доповненої реальності, який покращує досвід відвідування історичних місць та музеїв. Користувачі можуть направити свій пристрій на пам'ятки, щоб побачити історичну інформацію, 3D-реконструкції минулого вигляду та інтерактивні елементи розповіді. Створено з використанням Unity, ARKit/ARCore та системи управління контентом для кураторів, щоб оновлювати інформацію.",
        imageUrl: "https://images.unsplash.com/photo-1574169208507-84376144848b"
      }
    ]
  },
  no: {
    welcome: "velkommen",
    hiIm: "Hei, jeg er",
    description: "Jeg hjelper bedrifter å vokse gjennom data, markedsføring og moderne teknologi.",
    featuredProjects: "Utvalgte Prosjekter",
    letsConnect: "La Oss Koble Til",
    languages: "Språk",
    viewProject: "Se Prosjekt",
    closeModal: "Lukk",
    nextProject: "Neste",
    previousProject: "Forrige",
    aboutMe: "Om meg",
    aboutContent: "Jeg er **Vitalii Berbeha** — AI-prosjektleder og entreprenør som kombinerer 20+ års erfaring innen forretningsutvikling med moderne kunstig intelligens-teknologier. Jeg spesialiserer meg på å skape innovative EdTech-løsninger og automatisering av forretningsprosesser.\n\n**Mitt flaggskipprosjekt — Elvarika** — er en revolusjonerende SaaS-plattform for språklæring som bruker personaliserte lydspillelister og AI-algoritmer. Appen kombinerer B2B- og B2C-tilnærminger og tilbyr individuelle læringsstier basert på brukerdata-analyse. Fra konsept til realisering har jeg gjennomført hele utviklingssyklusen: markedsundersøkelser, systemarkitektur, programmering (React/TypeScript, Supabase), lokalisering og markedsinntredningsstrategi.\n\n**Teknisk ekspertise:** Azure OpenAI, React, TypeScript, Python (FastAPI), Supabase, automatisering gjennom Zapier/Make. Erfaring med AI-integrering i reelle forretningsprosesser — fra chatbots til prediktiv analyse.\n\n**Entreprenøriell erfaring:** Bak meg ligger vellykket ledelse av mitt eget selskap (2007-2017), lansering av produkter på Amazon Marketplace i USA og Europa, utvikling av strategier for inntreden i det norske markedet. Har jobbet med selskaper fra startups til korporasjoner, med spesialisering innen digital transformasjon og forretningsskalering.\n\n**Utdanning og lokalisering:** Magister i pedagogikk med matematikk og økonomi. Behersker flytende ukrainsk, norsk, engelsk og russisk. Basert i Norge, hvor jeg aktivt utvikler EdTech-initiativer og rådgir lokale selskaper om AI-integrering.\n\n**Min misjon:** Å skape teknologiske løsninger som gjør læring og forretningsprosesser mer effektive, personaliserte og tilgjengelige for et globalt publikum.",
    projects: "Prosjekter",
    projectsContent: "• Elvarika SaaS – bygget med FastAPI + Vue.js + Supabase; 1 000 brukere første kvartal.\n• AI-drevet innholdsautomat – Zapier + OpenAI; reduserte produksjonstid fra 3 t til 25 min.\n• Nordic Vitamins Study – Mixed-methods analyse (n = 420); prioriterte 15 SKU med ROI > 28%.",
    services: "Tjenester",
    servicesContent: "AI-integrasjon – fra konsept til produksjon (OpenAI, LangChain)•Vekstmarkedsføring – Meta og Google Ads, A/B-testing•Data og BI-dashbord – Power BI, Supabase, SQL•Markedsintelligens – undersøkelser og konverteringsoptimalisering•Workshops og opplæring – praktiske sesjoner for team•Strategisk rådgivning – veikart for digital transformasjon",
    skills: "Ferdigheter",
    skillsContent: "Programmering: Python, JavaScript, TypeScript, SQL, React Native, Expo, REST API. Kunstig intelligens: OpenAI API, Claude, AI-assistenter. Databaser: Supabase. Markedsføring: Meta Ads Manager, Instagram Ads, Google Analytics 4, SimilarWeb, Power BI. Netthandel: Amazon, Etsy, Shopify. EdTech-plattformer: diagnostiske tester, personaliserte læringssystemer. Analyse: Power BI, Google Analytics 4, ROI-optimalisering, finansiell modellering.",
    testimonials: "Anbefalinger",
    testimonialsContent: "«Vitalii automatiserte kampanjene våre med Python-skript og reduserte CPA med 31%. Han leverer hver gang.»\n— Klara Svendsen, CMO, Aliance Group\n\n«Elvarika ga oss innsikt vi trodde kun store selskaper hadde råd til.»\n— Øystein Moe, Daglig leder, SME Norway",
    contact: "Kontakt",
    contactContent: "La oss snakke!\nTelefon: +47 925 64 334\nE-post: stuardbmw@gmail.com\nLinkedIn: /in/smmshaman",
    // Contact form translations
    contactFormTitle: "Skriv til meg",
    contactFormDescription: "Fyll ut skjemaet nedenfor så får jeg meldingen din på e-post",
    contactFormName: "Navn",
    contactFormEmail: "E-post",
    contactFormSubject: "Emne",
    contactFormMessage: "Melding",
    contactFormSend: "Send",
    contactFormCancel: "Avbryt",
    contactFormAlternative: "Eller kontakt meg gjennom:",
    contactFormNamePlaceholder: "Ditt navn",
    contactFormSubjectPlaceholder: "Hva vil du snakke om?",
    contactFormMessagePlaceholder: "Beskriv prosjektet eller spørsmålet ditt...",
    // About modal translations
    aboutModalDescription: "Detaljert informasjon om meg",
    aboutModalSpecialization: "Jeg spesialiserer meg på:",
    aboutModalList: [
      "AI-løsningsutvikling og integrasjon",
      "Automatisering av forretningsprosesser",
      "Dataanalyse og BI-løsninger",
      "Webutvikling og UX/UI-design",
      "Rådgivning innen digital transformasjon"
    ],
    qrCodeScanText: "Skann QR-kode for å besøke profil",
    projectsList: [
      {
        title: "E-handelsplattform",
        shortDesc: "Fullstack netthandelsløsning med personlige anbefalinger",
        fullDesc: "En omfattende e-handelsplattform bygget med React, Node.js og MongoDB. Funksjoner inkluderer brukerautentisering, produktkatalog, handlekurv, betalingsbehandling og ordrestyring. Plattformen er responsiv og optimalisert for mobile enheter. Implementerte ML-basert anbefalingsmotor som økte gjennomsnittlig ordreverdien med 28%.",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      },
      {
        title: "Porteføljenettsted",
        shortDesc: "Responsiv utviklerportefølje med interaktiv prosjektutstilling",
        fullDesc: "Et moderne porteføljenettsted designet for å vise frem prosjekter og ferdigheter. Har et rent, minimalistisk design med jevne animasjoner og interaktive elementer. Bygget med React og Tailwind CSS, optimalisert for alle enheter. Implementerte tilpassede 3D-elementer for å fremheve tekniske muligheter.",
        imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
      },
      {
        title: "Oppgavestyringsapp",
        shortDesc: "Produktivitetsverktøy for team med sanntidssamarbeidsfunksjoner",
        fullDesc: "En samarbeidende oppgavestyringsapplikasjon som hjelper team med å organisere arbeidet sitt. Funksjoner inkluderer oppgaveoppretting, tildeling, frister, fremdriftssporing og teamkommunikasjonsverktøy. Bygget med React, TypeScript og en Firebase-backend. Implementerte sanntidsoppdateringer og varslingssystem.",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      },
      {
        title: "Værdashbord",
        shortDesc: "Værvarsling i sanntid med visualisering av historiske data",
        fullDesc: "Et værdashbord som gir værinformasjon og prognoser i sanntid. Funksjoner inkluderer nåværende forhold, 7-dagers prognose, timesoppdateringer, radarkart og posisjonsbaserte tjenester. Bruker OpenWeatherMap API og er bygget med React. Implementerte historiske datasammenligninger og klimatrendanalyse.",
        imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      },
      {
        title: "Sosiale medier-app",
        shortDesc: "Fellesskapsplattform med AI-drevet innholdsmoderering",
        fullDesc: "En sosiale medier-applikasjon fokusert på å koble sammen profesjonelle i teknologibransjen. Funksjoner inkluderer brukerprofiler, innlegg, kommentarer, liker og direktemeldinger. Bygget med React, Redux og en Node.js/Express-backend. Implementerte AI-drevet innholdsmoderering og spamdeteksjon.",
        imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      },
      {
        title: "Fitnesssporer",
        shortDesc: "Helse- og velværeovervåking med personlige treningsplaner",
        fullDesc: "En omfattende fitnesssporingsapplikasjon som hjelper brukere med å overvåke sine helse- og velværemål. Funksjoner inkluderer treningslogging, ernæringssporing, fremdriftsvisualisering og personlige anbefalinger. Bygget med React Native. Implementerte maskinlæringsalgoritmer for å generere tilpassede treningsanbefalinger.",
        imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      },
      {
        title: "Oppskriftsfinner",
        shortDesc: "Plattform for kulinarisk inspirasjon med diettrestriksjonfiltrering",
        fullDesc: "En oppskriftssøkeapplikasjon som hjelper brukere med å oppdage nye retter basert på ingredienser de har. Funksjoner inkluderer oppskriftssøk, filtrering etter kostholdsrestriksjoner, lagre favoritter og måltidsplanlegging. Integrerer med et oppskrifts-API og er bygget med React. Implementerte avanserte filtreringsalgoritmer for kostholdsbehov og preferanser.",
        imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
      },
      {
        title: "Virtuell læringsplattform",
        shortDesc: "Online utdanningssystem med interaktive vurderinger og tilbakemeldinger",
        fullDesc: "En e-læringsplattform designet for å skape og konsumere pedagogisk innhold. Funksjoner inkluderer kursoppretting, videoforelesninger, quizer, fremdriftssporing og sertifikater. Bygget med React, Node.js og MongoDB. Implementerte avansert analysedashbord for lærere til å spore studenters fremgang og engasjement.",
        imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
      },
      {
        title: "AI-innholdsgenerator",
        shortDesc: "NLP-drevet verktøy for å lage markedsførings- og sosiale medier-innhold",
        fullDesc: "Et AI-drevet innholdsgeneratorverktøy som hjelper markedsførere med å lage overbevisende tekster for forskjellige kanaler. Systemet bruker avanserte NLP-modeller for å generere kontekstuelt relevant innhold basert på minimal input. Funksjoner inkluderer tonejustering, lengdekontroll og innholdstype-maler. Bygget med OpenAI API, React og Node.js backend.",
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
      },
      {
        title: "Datavisualiseringsdashbord",
        shortDesc: "Interaktivt forretningsanalyseverktøy med sanntidsberegninger",
        fullDesc: "Et omfattende datavisualiseringsdashbord for bedrifter å overvåke KPIer og beregninger i sanntid. Funksjoner inkluderer tilpassbare widgets, integrering av flere datakilder, automatisk rapportering og trendanalyse. Bygget med D3.js, React og en Python/FastAPI-backend som kobler til ulike datakilder inkludert SQL-databaser og APIer.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      },
      {
        title: "IoT-hjemmeautomatisering",
        shortDesc: "Smart hjemesystem med sentralisert kontroll og energioptimalisering",
        fullDesc: "En Internet of Things (IoT)-plattform for hjemmeautomatisering som kobler til og kontrollerer ulike smarte enheter gjennom ett enkelt grensesnitt. Funksjoner inkluderer planlagte rutiner, overvåking av energibruk, taleintegrasjon og ekstern tilgang. Bygget med React Native for mobil, med en Node.js-backend og MQTT-protokoll for enhetskommunikasjon.",
        imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827"
      },
      {
        title: "Blokkjede-lommebok",
        shortDesc: "Sikker kryptovalutastyring med støtte for flere kjeder",
        fullDesc: "En sikker kryptovalutalommebokapplikasjon som støtter flere blokkjedenettverk. Funksjoner inkluderer transaksjonshistorikk, multikjede-håndtering, QR-kodeskanning og sanntidsprissporing. Implementerte forbedrede sikkerhetsfunksjoner inkludert biometrisk autentisering og kaldt lagringsalternativer. Bygget med React Native og blokkjede-spesifikke biblioteker.",
        imageUrl: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28"
      },
      {
        title: "Augmented Reality Turguide",
        shortDesc: "Interaktiv AR-opplevelse for historiske landemerker og museer",
        fullDesc: "En augmented reality-applikasjon som forløfter opplevelsen av å besøke historiske steder og museer. Brukere kan peke enheten sin på landemerker for å se historisk informasjon, 3D-rekonstruksjoner av tidligere utseende og interaktive fortellerelementer. Bygget med Unity, ARKit/ARCore og et innholdsstyringssystem for kuratorer som kan oppdatere informasjon.",
        imageUrl: "https://images.unsplash.com/photo-1574169208507-84376144848b"
      }
    ]
  }
};

export default translations;
