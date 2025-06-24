const hamburgerBtn = document.querySelector('.hamburger-btn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenuBtn = document.getElementById('closeMobileMenu');

function openMobileMenu() {
  mobileMenu.classList.add('active');
  hamburgerBtn.setAttribute('aria-expanded', 'true');
  mobileMenu.setAttribute('aria-hidden', 'false');
}

function closeMobileMenu() {
  mobileMenu.classList.remove('active');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
}

// Event listeners
hamburgerBtn.addEventListener('click', openMobileMenu);
closeMobileMenuBtn.addEventListener('click', closeMobileMenu);

// Optional: close menu when clicking outside menu on mobile (not required, but user friendly)
document.addEventListener('click', (e) => {
  if (
    mobileMenu.classList.contains('active') &&
    !mobileMenu.contains(e.target) &&
    !hamburgerBtn.contains(e.target)
  ) {
    closeMobileMenu();
  }
});



// Elements
const modeToggle = document.getElementById('modeToggle');
const mobileModeToggle = document.getElementById('mobileModeToggle');

// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});



// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    modeToggle.textContent = '☀️'; // change icon to sun
    if (mobileModeToggle) mobileModeToggle.textContent = '☀️ Light Mode';
  } else {
    localStorage.setItem('theme', 'light');
    modeToggle.textContent = '🌓'; // moon icon
    if (mobileModeToggle) mobileModeToggle.textContent = '🌓 Dark Mode';
  }
}

// Event listeners
if (modeToggle) modeToggle.addEventListener('click', toggleDarkMode);
if (mobileModeToggle) mobileModeToggle.addEventListener('click', toggleDarkMode);













document.querySelectorAll('a.scroll-down').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});





document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const direction = el.getAttribute('data-animate');
        el.classList.add('visible');
        if (direction === 'left') el.classList.add('animate-left');
        if (direction === 'right') el.classList.add('animate-right');
        observer.unobserve(el); // animate once
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));
});





// const track = document.querySelector('.carousel-track');

// track.addEventListener('mouseenter', () => {
//   track.style.animationPlayState = 'paused';
// });

// track.addEventListener('mouseleave', () => {
//   track.style.animationPlayState = 'running';
// });






const translations = {
  en: {
    home: "Home",
    products: "Products",
    about: "About",
    contact: "Contact",
    about_title: "About CHENHUA AUTO",
    about_subtitle: "Global Leader in Agricultural Rims",
    scroll_down: "↓ Scroll Down",

    // Company story
    who_we_are_title: "Who We Are",
    who_we_are_text: "CHENHUA AUTO is a leading manufacturer and supplier of high-quality agricultural rims and truck tires. Founded with the vision to empower farmers and transporters globally, our company blends innovation with durability.",
    what_drives_us_title: "What Drives Us",
    what_drives_us_text: "Our commitment is to deliver products that enhance efficiency and safety for our customers. We are driven by a passion for excellence, innovation, and sustainable growth that supports communities worldwide.",
    our_journey_title: "Our Journey",
    our_journey_text: "Starting from humble beginnings, CHENHUA AUTO has grown into a trusted brand known for quality and reliability. Our journey continues as we expand our reach and develop new solutions tailored to the evolving needs of our customers.",

    // Why choose us section
    why_choose_us: "Why Choose CHENHUA AUTO",
    countries_title: "30+ Countries",
    countries_text: "Exported worldwide with trusted global presence.",
    models_title: "100+ Rim Models",
    models_text: "Wide range of agricultural & truck rims for all uses.",
    experience_title: "10+ Years Experience",
    experience_text: "Built on a decade of quality rim manufacturing.",
    iso_title: "ISO Certified",
    iso_text: "Certified for international manufacturing standards.",

    // Team Section
    meet_our_team: "Meet Our Team",

    team_1_name: "Sucky Cui",
    team_1_role: "Managing Director",
    team_1_bio: "Sucky is the Managing Director and co-founder of the company. She brings strong leadership and business vision, ensuring our growth and partnerships remain strong across global markets.",

    team_2_name: "Kari Cai",
    team_2_role: "International Sales Manager",
    team_2_bio: "Kari is responsible for helping customers connect with the right products. Her professional support and communication make the buying process smooth and reliable.",

    team_3_name: "Daniel Eze",
    team_3_role: "Web Developer",
    team_3_bio: "Daniel handles all things tech and digital. From website development to creative marketing ideas, he brings innovation to how we present and promote our brand.",

    team_4_name: "Daniel Doe",
    team_4_role: "CEO",
    team_4_bio: "John leads the company with over 15 years of experience in the automotive rim industry, focusing on growth and innovation.",

    // Certifications section
    certs_title: "Our Certifications & Brand Partners",

    testimonials: "What our customer say",
    testimonial_1_text: "From product durability to customer service, the experience was outstanding. We were impressed with the speed and the communication!",
    testimonial_2_text: "Kari and the team helped us get exactly what we needed. The rims are solid and delivery was on point.",
    testimonial_3_text: "Professional support, quality rims, and fast responses. Will surely continue working with CHENHUA AUTO.",
    testimonial_4_text: "Every order is delivered with care and precision. Their support team is always available, and that builds trust.",

    action_1: "Want to do business with CHENHUA AUTO ?",
    action_2: "We’re ready to provide you with the best rims and support for your needs. Let’s grow together.",
    contact_sales: "Contact Our Sales Team",

    quick_links: "Quick Links",
    about_us: "About Us",
    contact: "Contact",
    follow_us: "Follow Us",
    privacy_policy: "Privacy Policy",
    terms_of_service: "Terms of Service",
    contact_us: "Contact CHENHUA AUTO",
    full_name: "Full Name",
    company_name: "Company Name",
    phone_number: "Phone Number",
    whatsapp: "WhatsApp",
    wechat: "WeChat",
    toggle_theme: "Toggle Theme"
  },
  fr: {
    home: "Accueil",
    products: "Produits",
    about: "À propos",
    contact: "Contact",
    about_title: "À propos de CHENHUA AUTO",
    about_subtitle: "Leader mondial des jantes agricoles",
    scroll_down: "↓ Faites défiler",

    // Company story
    who_we_are_title: "Qui sommes-nous",
    who_we_are_text: "CHENHUA AUTO est un fabricant et fournisseur de jantes agricoles et de pneus de camion de haute qualité. Fondée avec la vision d’autonomiser les agriculteurs et les transporteurs dans le monde entier, notre entreprise allie innovation et durabilité.",
    what_drives_us_title: "Ce qui nous motive",
    what_drives_us_text: "Notre engagement est de fournir des produits qui améliorent l'efficacité et la sécurité de nos clients. Nous sommes animés par une passion pour l’excellence, l’innovation et une croissance durable qui soutient les communautés dans le monde entier.",
    our_journey_title: "Notre parcours",
    our_journey_text: "Partie de débuts modestes, CHENHUA AUTO est devenue une marque de confiance reconnue pour sa qualité et sa fiabilité. Notre parcours se poursuit alors que nous élargissons notre portée et développons de nouvelles solutions adaptées aux besoins changeants de nos clients.",

    // Why choose us section
    why_choose_us: "Pourquoi choisir CHENHUA AUTO",
    countries_title: "30+ pays",
    countries_text: "Exporté dans le monde entier avec une présence mondiale de confiance.",
    models_title: "100+ modèles de jantes",
    models_text: "Large gamme de jantes agricoles et de camions pour tous les usages.",
    experience_title: "10+ ans d'expérience",
    experience_text: "Basé sur une décennie de fabrication de jantes de qualité.",
    iso_title: "Certifié ISO",
    iso_text: "Certifié selon les normes internationales de fabrication.",

    // Team Section
    meet_our_team: "Rencontrez notre équipe",

    team_1_name: "Sucky Cui",
    team_1_role: "Directrice Générale",
    team_1_bio: "Sucky est la directrice générale et cofondatrice de l'entreprise. Elle apporte un leadership fort et une vision commerciale, assurant notre croissance et nos partenariats à l’échelle mondiale.",

    team_2_name: "Kari Cai",
    team_2_role: "Responsable des ventes internationales",
    team_2_bio: "Kari aide les clients à trouver les bons produits. Son soutien professionnel et sa communication rendent le processus d'achat fluide et fiable.",

    team_3_name: "Daniel Eze",
    team_3_role: "Développeur Web",
    team_3_bio: "Daniel s'occupe de toute la technologie et du numérique. Du développement de sites web aux idées marketing créatives, il apporte de l'innovation dans la manière dont nous présentons et promouvons notre marque.",

    team_4_name: "Daniel Doe",
    team_4_role: "PDG",
    team_4_bio: "John dirige l’entreprise avec plus de 15 ans d’expérience dans l’industrie des jantes automobiles, en mettant l’accent sur la croissance et l’innovation.",

    // Certifications section
    certs_title: "Nos certifications & partenaires de marque",

    // Testimonials
    testimonials: "Ce que nos clients disent",
    testimonial_1_text: "De la durabilité des produits au service client, l’expérience a été exceptionnelle. Nous avons été impressionnés par la rapidité et la communication !",
    testimonial_2_text: "Kari et l'équipe nous ont aidés à obtenir exactement ce dont nous avions besoin. Les jantes sont solides et la livraison était parfaite.",
    testimonial_3_text: "Soutien professionnel, jantes de qualité et réponses rapides. Nous continuerons sûrement à travailler avec CHENHUA AUTO.",
    testimonial_4_text: "Chaque commande est livrée avec soin et précision. Leur équipe de support est toujours disponible, ce qui inspire confiance.",

    action_1: "Vous voulez faire des affaires avec CHENHUA AUTO ?",
    action_2: "Nous sommes prêts à vous fournir les meilleures jantes et le soutien dont vous avez besoin. Grandissons ensemble.",
    contact_sales: "Contactez notre équipe commerciale",

    // Footer and contact
    quick_links: "Liens rapides",
    about_us: "À propos de nous",
    follow_us: "Suivez-nous",
    privacy_policy: "Politique de confidentialité",
    terms_of_service: "Conditions d'utilisation",
    contact_us: "Contactez CHENHUA AUTO",
    full_name: "Nom complet",
    company_name: "Nom de l'entreprise",
    phone_number: "Numéro de téléphone",
    whatsapp: "WhatsApp",
    wechat: "WeChat",
    toggle_theme: "Changer de thème"
  },

  ar: {
    home: "الرئيسية",
    products: "المنتجات",
    about: "من نحن",
    contact: "اتصل بنا",
    about_title: "حول CHENHUA AUTO",
    about_subtitle: "الرائد العالمي في جنوط الآلات الزراعية",
    scroll_down: "↓ مرر لأسفل",

    // Company story
    who_we_are_title: "من نحن",
    who_we_are_text: "تُعد CHENHUA AUTO شركة رائدة في تصنيع وتوريد جنوط الآلات الزراعية وإطارات الشاحنات عالية الجودة. تأسست برؤية لتمكين المزارعين وناقلي البضائع عالميًا، حيث نمزج بين الابتكار والمتانة.",
    what_drives_us_title: "ما الذي يحفزنا",
    what_drives_us_text: "نلتزم بتقديم منتجات تعزز الكفاءة والسلامة لعملائنا. نحن مدفوعون بالشغف نحو التميز والابتكار والنمو المستدام الذي يدعم المجتمعات حول العالم.",
    our_journey_title: "رحلتنا",
    our_journey_text: "بدأنا من بدايات متواضعة، ونمت CHENHUA AUTO لتصبح علامة تجارية موثوقة تشتهر بالجودة والاعتمادية. وتستمر رحلتنا ونحن نوسع نطاق أعمالنا ونطور حلولًا جديدة تلبي احتياجات عملائنا المتغيرة.",

    // Why choose us section
    why_choose_us: "لماذا تختار CHENHUA AUTO",
    countries_title: "30+ دولة",
    countries_text: "نُصدّر منتجاتنا إلى أكثر من 30 دولة حول العالم بثقة وسمعة عالمية.",
    models_title: "100+ طراز من الجنوط",
    models_text: "مجموعة واسعة من جنوط الشاحنات والآلات الزراعية لجميع الاستخدامات.",
    experience_title: "+10 سنوات من الخبرة",
    experience_text: "نستند إلى عقد من الزمن في تصنيع الجنوط بجودة عالية.",
    iso_title: "حاصل على شهادة ISO",
    iso_text: "معتمد وفق المعايير الدولية للتصنيع.",

    // Team Section
    meet_our_team: "تعرف على فريقنا",

    team_1_name: "Sucky Cui",
    team_1_role: "المدير العام",
    team_1_bio: "Sucky هي المديرة العامة والمؤسسة المشاركة للشركة. تقود الشركة برؤية واضحة وتساهم في بناء شراكات قوية ونمو عالمي.",

    team_2_name: "Kari Cai",
    team_2_role: "مديرة المبيعات الدولية",
    team_2_bio: "Kari مسؤولة عن مساعدة العملاء في الحصول على المنتجات المناسبة. دعمها المهني وتواصلها الجيد يجعلان تجربة الشراء سهلة وموثوقة.",

    team_3_name: "Daniel Eze",
    team_3_role: "مطوّر الويب",
    team_3_bio: "Daniel مسؤول عن التكنولوجيا والتسويق الرقمي. من تطوير الموقع إلى الأفكار التسويقية الإبداعية، يضيف الابتكار إلى طريقة عرضنا للعلامة التجارية.",

    team_4_name: "Daniel Doe",
    team_4_role: "الرئيس التنفيذي",
    team_4_bio: "يقود John الشركة بخبرة تتجاوز 15 عامًا في صناعة جنوط السيارات، مع تركيز على النمو والابتكار.",

    // Certifications section
    certs_title: "شهاداتنا وشركاؤنا في العلامات التجارية",

    // Testimonials
    testimonials: "آراء عملائنا",
    testimonial_1_text: "من متانة المنتج إلى خدمة العملاء، كانت التجربة رائعة. لقد أُعجبنا بسرعة التواصل والتنفيذ!",
    testimonial_2_text: "ساعدتنا Kari والفريق في الحصول على ما نحتاجه بالضبط. الجنوط متينة والتوصيل كان دقيقًا.",
    testimonial_3_text: "دعم احترافي، جنوط ذات جودة عالية، واستجابات سريعة. بالتأكيد سنواصل العمل مع CHENHUA AUTO.",
    testimonial_4_text: "كل طلب يتم توصيله بعناية ودقة. فريق الدعم دائمًا متاح، وهذا يعزز الثقة.",

    action_1: "هل ترغب في التعاون مع CHENHUA AUTO ؟",
    action_2: "نحن جاهزون لتقديم أفضل الجنوط والدعم لاحتياجاتك. لننمو معًا.",
    contact_sales: "تواصل مع فريق المبيعات لدينا",

    // Footer and contact
    quick_links: "روابط سريعة",
    about_us: "من نحن",
    follow_us: "تابعنا",
    privacy_policy: "سياسة الخصوصية",
    terms_of_service: "شروط الخدمة",
    contact_us: "اتصل بـ CHENHUA AUTO",
    full_name: "الاسم الكامل",
    company_name: "اسم الشركة",
    phone_number: "رقم الهاتف",
    whatsapp: "واتساب",
    wechat: "ويتشات",
    toggle_theme: "تبديل المظهر"
  },

  zh: {
    home: "首页",
    products: "产品",
    about: "关于我们",
    contact: "联系我们",
    about_title: "关于 CHENHUA AUTO",
    about_subtitle: "全球领先的农业轮辋制造商",
    scroll_down: "↓ 下滑查看更多",

    // Company story
    who_we_are_title: "我们是谁",
    who_we_are_text: "CHENHUA AUTO 是一家领先的高质量农业轮辋和卡车轮胎制造商与供应商。我们致力于为全球农民和运输者提供强大支持，将创新与耐用性相结合。",
    what_drives_us_title: "我们的动力",
    what_drives_us_text: "我们致力于提供提升效率与安全的产品。我们的驱动力来源于对卓越、创新和可持续发展的热情，致力于服务全球社区。",
    our_journey_title: "我们的旅程",
    our_journey_text: "从微小起步，CHENHUA AUTO 成长为全球信赖的品牌，以品质与可靠性著称。我们将不断拓展市场，开发适应客户需求的创新解决方案。",

    // Why choose us section
    why_choose_us: "为什么选择 CHENHUA AUTO",
    countries_title: "30+个国家",
    countries_text: "产品出口至全球，建立了广泛的国际信誉。",
    models_title: "100+种轮辋型号",
    models_text: "丰富的农业和卡车轮辋选择，适用于多种用途。",
    experience_title: "10+年经验",
    experience_text: "十余年轮辋制造经验，品质有保障。",
    iso_title: "ISO 认证",
    iso_text: "通过国际制造标准认证。",

    // Team Section
    meet_our_team: "认识我们的团队",

    team_1_name: "Sucky Cui",
    team_1_role: "总经理",
    team_1_bio: "Sucky 是公司联合创始人兼总经理。她拥有卓越的领导力与商业远见，带领公司在全球市场持续成长并建立稳固的合作关系。",

    team_2_name: "Kari Cai",
    team_2_role: "国际销售经理",
    team_2_bio: "Kari 负责帮助客户找到合适的产品。她的专业支持与沟通能力让采购过程顺畅又可靠。",

    team_3_name: "Daniel Eze",
    team_3_role: "网站开发工程师",
    team_3_bio: "Daniel 负责网站建设与数字化工作，从网页开发到创意营销，带来品牌传播的新方式。",

    team_4_name: "Daniel Doe",
    team_4_role: "首席执行官",
    team_4_bio: "John 拥有超过15年的汽车轮辋行业经验，专注于企业增长与创新引领。",

    // Certifications section
    certs_title: "我们的认证与品牌合作伙伴",

    // Testimonials
    testimonials: "客户评价",
    testimonial_1_text: "无论是产品质量还是客户服务，体验都非常出色。沟通迅速，交付及时，让人满意！",
    testimonial_2_text: "Kari 和她的团队帮我们找到了合适的产品。轮辋质量很好，发货也非常准时。",
    testimonial_3_text: "专业的支持，优质的轮辋，以及快速的响应，让我们决定继续与 CHENHUA AUTO 合作。",
    testimonial_4_text: "每一次订单都细致处理，支持团队随时响应，令人信赖。",

    action_1: "想与 CHENHUA AUTO  开展合作？",
    action_2: "我们随时为您提供优质轮辋和支持服务。让我们一起成长。",
    contact_sales: "联系销售团队",

    // Footer and contact
    quick_links: "快速链接",
    about_us: "关于我们",
    follow_us: "关注我们",
    privacy_policy: "隐私政策",
    terms_of_service: "服务条款",
    contact_us: "联系 CHENHUA AUTO",
    full_name: "姓名",
    company_name: "公司名称",
    phone_number: "电话号码",
    whatsapp: "WhatsApp",
    wechat: "微信",
    toggle_theme: "切换主题"
  }


};




function changeLanguage(lang) {
  // Save selected language to localStorage (optional)
  localStorage.setItem('selectedLanguage', lang);

  // Find all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Also update language select dropdowns (to keep them in sync)
  document.querySelectorAll('.language-select, .mobile-language-select').forEach(select => {
    select.value = lang;
  });
}

// On page load, set language from saved preference or default to English
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('selectedLanguage') || 'en';
  changeLanguage(savedLang);
});
