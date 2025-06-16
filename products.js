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













function shuffleVisibleProducts(grid) {
  const visibleCards = Array.from(grid.children).filter(card => card.style.display !== 'none');
  visibleCards.sort(() => Math.random() - 0.5);
  visibleCards.forEach(card => grid.appendChild(card));
}

function filterProducts() {
  const sizeValue = document.getElementById('filter-size').value.toLowerCase();
  const typeValue = document.getElementById('filter-type').value.toLowerCase();
  const grid = document.querySelector('.product-grid');
  const cards = grid.querySelectorAll('.product-card');

  cards.forEach(card => {
    const cardSize = card.dataset.size?.toLowerCase();
    const cardType = card.dataset.type?.toLowerCase();

    const matchesSize = !sizeValue || cardSize === sizeValue;
    const matchesType = !typeValue || cardType === typeValue;

    card.style.display = (matchesSize && matchesType) ? 'block' : 'none';
  });

  shuffleVisibleProducts(grid);
}

// Shuffle on first load
window.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.product-grid');
  shuffleVisibleProducts(grid);
});












function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

function getRandomMessage(productName, qty) {
  const messages = [
    `I'm interested in buying ${qty} pcs of ${productName}.`,
    `Please send me your best price for ${qty} pcs of ${productName}.`,
    `I need ${qty} units of ${productName}. Kindly reply soon.`,
    `Looking to purchase ${qty} pcs of ${productName}.`,
    `Can you confirm availability and pricing for ${qty} of ${productName}?`
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

async function fetchCountry() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    return data.country_name || "your country";
  } catch {
    return "your country";
  }
}

async function sendWhatsApp(button) {
  const card = button.closest('.product-card');
  const name = card.querySelector('h3').innerText;
  const qty = card.querySelector('.qty-input').value || 1;
  const greeting = getGreeting();
  const country = await fetchCountry();
  const msg = getRandomMessage(name, qty);

  const finalMessage = `${greeting} 👋

${msg}

🌍 I'm messaging you from ${country}.

✍️ My Name: 
🏢 Company Name: 
📞 Phone: 
📧 Email: 

Our CHENHUA AUTO team will reply as soon as possible.`;

  const phone = "2348135584643"; // Replace with your WhatsApp number
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(finalMessage)}`;
  window.open(url, '_blank');
}

async function sendEmail(button) {
  const card = button.closest('.product-card');
  const name = card.querySelector('h3').innerText;
  const qty = card.querySelector('.qty-input').value || 1;
  const greeting = getGreeting();
  const country = await fetchCountry();
  const msg = getRandomMessage(name, qty);

  const fullBody = `${greeting},

${msg}

🌍 I am contacting you from ${country}.

✍️ My Name: 
🏢 Company Name: 
📞 Phone: 
📧 Email: 

Looking forward to your reply.

CHENHUA AUTO`;

  const subject = `Inquiry: ${name}`;
  const email = "ezesomtochukwu588@gmail.com"; // Replace with your real email

  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
  window.open(gmailURL, '_blank');
}











document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.product-img img');

  images.forEach(img => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });

    // Optional fallback if cached
    if (img.complete) {
      img.classList.add('loaded');
    }
  });
});













const translations = {
  en: {
    home: "Home",
    products: "Products",
    about: "About",
    contact: "Contact",
    main_intro: "Our Tractor Rims",
    sub_intro: "Strong. Durable. Built for farms everywhere.",
    // ✅ Filter section translations
    filter_by_size: "Filter by Size:",
    all_sizes: "All Sizes",
    filter_by_type: "Filter by Type:",
    all_types: "All Types",
    disc: "Disc",
    split: "Split",
    solid: "Solid",
    action_1: "Want to do business with <span class='span'>CHENHUA AUTO</span>?",
    action_2: "We’re ready to provide you with the best rims and support for your needs. Let’s grow together.",
    contact_sales: "Contact Our Sales Team",

    testimonials: "What our customer say",
    testimonial_1_text: "From product durability to customer service, the experience was outstanding. We were impressed with the speed and the communication!",
    testimonial_2_text: "Kari and the team helped us get exactly what we needed. The rims are solid and delivery was on point.",
    testimonial_3_text: "Professional support, quality rims, and fast responses. Will surely continue working with CHENHUA AUTO.",
    testimonial_4_text: "Every order is delivered with care and precision. Their support team is always available, and that builds trust.",

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
    main_intro: "Nos Jantes de Tracteur",
    sub_intro: "Solides. Durables. Conçues pour les fermes partout.",

    // ✅ Filter section translations
    filter_by_size: "Filtrer par taille :",
    all_sizes: "Toutes les tailles",
    filter_by_type: "Filtrer par type :",
    all_types: "Tous les types",
    disc: "Disque",
    split: "Partagé",
    solid: "Solide",

    action_1: "Vous voulez faire des affaires avec <span class='span'>CHENHUA AUTO</span>?",
    action_2: "Nous sommes prêts à vous fournir les meilleures jantes et le soutien dont vous avez besoin. Grandissons ensemble.",
    contact_sales: "Contactez notre équipe commerciale",

    testimonials: "Ce que disent nos clients",
    testimonial_1_text: "De la durabilité du produit au service client, l'expérience a été exceptionnelle. Nous avons été impressionnés par la rapidité et la communication !",
    testimonial_2_text: "Kari et l'équipe nous ont aidés à obtenir exactement ce dont nous avions besoin. Les jantes sont solides et la livraison était parfaite.",
    testimonial_3_text: "Support professionnel, jantes de qualité, et réponses rapides. Nous continuerons certainement à travailler avec CHENHUA AUTO.",
    testimonial_4_text: "Chaque commande est livrée avec soin et précision. Leur équipe de support est toujours disponible, et cela crée de la confiance.",

    quick_links: "Liens rapides",
    about_us: "À propos de nous",
    contact: "Contact",
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
    main_intro: "جنوط الجرارات لدينا",
    sub_intro: "قوية. متينة. مصممة للمزارع في كل مكان.",

    // ✅ Filter section translations
    filter_by_size: "تصفية حسب المقاس:",
    all_sizes: "جميع المقاسات",
    filter_by_type: "تصفية حسب النوع:",
    all_types: "جميع الأنواع",
    disc: "قرص",
    split: "مقسمة",
    solid: "صلبة",

    action_1: "هل ترغب في التعاون مع <span class='span'>CHENHUA AUTO</span>؟",
    action_2: "نحن جاهزون لتقديم أفضل الجنوط والدعم لاحتياجاتك. لننمو معًا.",
    contact_sales: "تواصل مع فريق المبيعات لدينا",

    testimonials: "آراء عملائنا",
    testimonial_1_text: "من متانة المنتج إلى خدمة العملاء، كانت التجربة رائعة. لقد أُعجبنا بالسرعة والتواصل!",
    testimonial_2_text: "ساعدتنا كاري والفريق في الحصول على ما نحتاجه بالضبط. الجنوط متينة والتوصيل كان دقيقًا.",
    testimonial_3_text: "دعم احترافي، وجودة عالية للجنوط، واستجابات سريعة. سنستمر في التعامل مع CHENHUA AUTO.",
    testimonial_4_text: "يتم تسليم كل طلب بعناية ودقة. فريق الدعم متاح دائمًا، وهذا يعزز الثقة.",

    quick_links: "روابط سريعة",
    about_us: "من نحن",
    contact: "اتصل بنا",
    follow_us: "تابعنا",
    privacy_policy: "سياسة الخصوصية",
    terms_of_service: "شروط الخدمة",
    contact_us: "تواصل مع CHENHUA AUTO",
    full_name: "الاسم الكامل",
    company_name: "اسم الشركة",
    phone_number: "رقم الهاتف",
    whatsapp: "واتساب",
    wechat: "وي شات",
    toggle_theme: "تبديل الوضع"
  },

  zh: {

    home: "首页",
    products: "产品",
    about: "关于我们",
    contact: "联系我们",
    main_intro: "我们的拖拉机轮辋",
    sub_intro: "坚固、耐用，适用于各地农场。",

    // ✅ Filter section translations
    filter_by_size: "按尺寸筛选：",
    all_sizes: "所有尺寸",
    filter_by_type: "按类型筛选：",
    all_types: "所有类型",
    disc: "实心盘",
    split: "分体式",
    solid: "实心",

    action_1: "想与 <span class='span'>CHENHUA AUTO</span> 开展合作？",
    action_2: "我们随时为您提供优质轮辋和支持服务。让我们一起成长。",
    contact_sales: "联系销售团队",

    testimonials: "客户评价",
    testimonial_1_text: "从产品的耐用性到客户服务，体验非常棒。我们对速度和沟通印象深刻！",
    testimonial_2_text: "Kari 和团队帮助我们找到了正合适的产品。轮辋很结实，交货也很及时。",
    testimonial_3_text: "专业支持，高质量轮辋，响应迅速。我们肯定会继续与 CHENHUA AUTO 合作。",
    testimonial_4_text: "每一笔订单都被细心处理。他们的支持团队总是在线，这增强了信任感。",

    quick_links: "快速链接",
    about_us: "关于我们",
    contact: "联系我们",
    follow_us: "关注我们",
    privacy_policy: "隐私政策",
    terms_of_service: "服务条款",
    contact_us: "联系 CHENHUA AUTO",
    full_name: "全名",
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