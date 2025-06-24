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
























const translations = {
    en: {
        home: "Home",
        products: "Products",
        about: "About",
        contact: "Contact",
        privacy_title: "Privacy Policy",
        privacy_text: "This Privacy Policy outlines how CHENHUA AUTO collects, uses, and protects your information.",

        privacy_title: "Privacy Policy",
        privacy_intro: "This Privacy Policy outlines how <strong>CHENHUA AUTO</strong> collects, uses, and protects your information.",

        info_title: "Information We Collect",
        info_intro: "CHENHUA AUTO may collect the following types of information:",
        info_personal: "Personal Data: Name, email address, phone number, and other contact details.",
        info_technical: "Technical Data: IP address, browser type, operating system, device information, and access times.",
        info_behavioral: "Behavioral Data: Pages visited, links clicked, time spent on site, and user preferences.",

        usage_title: "How We Use Your Information",
        usage_intro: "CHENHUA AUTO uses the collected information for the following purposes:",
        usage_inquiries: "To process inquiries: We use your personal information to respond to your messages, product requests, or customer support needs.",
        usage_experience: "To improve user experience: Technical and behavioral data help us optimize our website and tailor our services to user preferences.",
        usage_marketing: "For marketing (if applicable): With your consent, we may send you updates, offers, or promotional content.",
        usage_legal: "To comply with legal obligations: We may use your information to fulfill regulatory, tax, or legal requirements.",

        sharing_title: "Sharing Your Information",
        sharing_intro: "CHENHUA AUTO values your privacy and transparency. We want you to understand how your information is shared:",
        sharing_nosell: "No Selling of Data: We do not sell, trade, or rent your personal data to third parties.",
        sharing_services: "Third-Party Services: We may share data with trusted partners who help us operate the website and services, such as:",
        sharing_google: "Google Analytics – to analyze website traffic and usage patterns",
        sharing_payment: "Payment processors – to securely handle transactions",
        sharing_email: "Email service providers – to send communication you opted into",

        security_title: "Data Security",
        security_intro: "CHENHUA AUTO is committed to protecting your information and has implemented strong security measures to safeguard it:",
        security_ssl: "SSL Encryption: All data transmitted between your browser and our servers is encrypted using industry-standard SSL (Secure Socket Layer) technology.",
        security_firewall: "Firewalls and Access Control: We use advanced firewalls and restricted access protocols to keep your data secure.",
        security_storage: "Secure Storage: Your personal data is stored in secure environments and only accessible to authorized personnel.",
        security_breach: "Breach Prevention: Regular security audits, software updates, and monitoring are conducted to prevent unauthorized access or data breaches.",

        rights_title: "Your Rights",
        rights_intro: "As a user of CHENHUA AUTO’s services, you have the following rights regarding your personal data:",
        rights_access: "Right to Access: You can request a copy of the personal information we hold about you at any time.",
        rights_correct: "Right to Correction: If you believe any information we have is inaccurate or incomplete, you have the right to request a correction.",
        rights_delete: "Right to Deletion: You may request that we delete your personal data from our systems, subject to legal and operational obligations.",
        rights_contact: "To make a data request, please contact us at sales@chenhuaauto.com.",

        cookies_title: "Cookies",
        cookies_intro1: "Our website may use cookies to enhance your browsing experience and analyze site traffic. Cookies are small data files stored on your device that help us understand how you use our site.",
        cookies_intro2: "You have the option to disable cookies through your browser settings. However, please note that some features of the website may not function properly without cookies enabled.",
        cookies_intro3: "By continuing to use our site, you consent to our use of cookies in accordance with this Privacy Policy.",

        updates_title: "Policy Updates",
        updates_intro: "We may update this Privacy Policy occasionally to reflect changes in our practices or legal requirements. Any changes will be posted on this page, and the revised policy will apply from the date of publication.",

        contact_title: "Contact Information",
        contact_intro: "If you have any questions or concerns about this Privacy Policy, feel free to contact us:",
        contact_email: "📧 Email: Generating link...",
        contact_phone: "📞 Phone: +2348135584643",
        contact_page: "🔗 Visit our Contact Page",

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
        privacy_title: "Politique de Confidentialité",
        privacy_text: "Cette politique de confidentialité décrit comment CHENHUA AUTO collecte, utilise et protège vos informations.",

        privacy_title: "Politique de Confidentialité",
        privacy_intro: "Cette politique de confidentialité décrit comment <strong>CHENHUA AUTO</strong> collecte, utilise et protège vos informations.",

        info_title: "Informations que nous collectons",
        info_intro: "CHENHUA AUTO peut collecter les types d’informations suivants :",
        info_personal: "Données personnelles : nom, adresse e-mail, numéro de téléphone et autres coordonnées.",
        info_technical: "Données techniques : adresse IP, type de navigateur, système d’exploitation, informations sur l’appareil et heures d’accès.",
        info_behavioral: "Données comportementales : pages visitées, liens cliqués, temps passé sur le site et préférences de l'utilisateur.",

        usage_title: "Comment nous utilisons vos informations",
        usage_intro: "CHENHUA AUTO utilise les informations collectées aux fins suivantes :",
        usage_inquiries: "Pour traiter les demandes : nous utilisons vos informations personnelles pour répondre à vos messages, demandes de produits ou besoins de support client.",
        usage_experience: "Pour améliorer l'expérience utilisateur : les données techniques et comportementales nous aident à optimiser notre site web et à adapter nos services aux préférences des utilisateurs.",
        usage_marketing: "À des fins marketing (le cas échéant) : avec votre consentement, nous pouvons vous envoyer des mises à jour, des offres ou du contenu promotionnel.",
        usage_legal: "Pour respecter les obligations légales : nous pouvons utiliser vos informations pour répondre à des exigences réglementaires, fiscales ou légales.",

        sharing_title: "Partage de vos informations",
        sharing_intro: "CHENHUA AUTO respecte votre vie privée et la transparence. Nous voulons que vous compreniez comment vos informations sont partagées :",
        sharing_nosell: "Aucune vente de données : nous ne vendons, n’échangeons ni ne louons vos données personnelles à des tiers.",
        sharing_services: "Services tiers : nous pouvons partager des données avec des partenaires de confiance qui nous aident à exploiter le site web et les services, tels que :",
        sharing_google: "Google Analytics – pour analyser le trafic du site et les habitudes d'utilisation",
        sharing_payment: "Prestataires de paiement – pour gérer les transactions de manière sécurisée",
        sharing_email: "Fournisseurs de services e-mail – pour envoyer les communications auxquelles vous avez souscrit",

        security_title: "Sécurité des données",
        security_intro: "CHENHUA AUTO s'engage à protéger vos informations et a mis en place des mesures de sécurité solides :",
        security_ssl: "Chiffrement SSL : toutes les données transmises entre votre navigateur et nos serveurs sont cryptées selon les normes SSL (Secure Socket Layer).",
        security_firewall: "Pare-feux et contrôle d'accès : nous utilisons des pare-feux avancés et des protocoles d’accès restreint pour garantir la sécurité de vos données.",
        security_storage: "Stockage sécurisé : vos données personnelles sont stockées dans des environnements sécurisés et uniquement accessibles au personnel autorisé.",
        security_breach: "Prévention des violations : des audits de sécurité réguliers, des mises à jour logicielles et une surveillance sont réalisés pour empêcher tout accès non autorisé ou violation de données.",

        rights_title: "Vos droits",
        rights_intro: "En tant qu'utilisateur des services de CHENHUA AUTO, vous disposez des droits suivants concernant vos données personnelles :",
        rights_access: "Droit d'accès : vous pouvez demander une copie des informations personnelles que nous détenons à votre sujet à tout moment.",
        rights_correct: "Droit de rectification : si vous pensez que des informations sont incorrectes ou incomplètes, vous pouvez demander une correction.",
        rights_delete: "Droit de suppression : vous pouvez demander la suppression de vos données personnelles, sous réserve des obligations légales et opérationnelles.",
        rights_contact: "Pour faire une demande concernant vos données, veuillez nous contacter à l'adresse : sales@chenhuaauto.com.",

        cookies_title: "Cookies",
        cookies_intro1: "Notre site web peut utiliser des cookies pour améliorer votre expérience de navigation et analyser le trafic du site. Les cookies sont de petits fichiers stockés sur votre appareil qui nous aident à comprendre comment vous utilisez notre site.",
        cookies_intro2: "Vous avez la possibilité de désactiver les cookies via les paramètres de votre navigateur. Veuillez noter que certaines fonctionnalités du site peuvent ne pas fonctionner correctement sans cookies.",
        cookies_intro3: "En continuant à utiliser notre site, vous consentez à l'utilisation de cookies conformément à cette politique de confidentialité.",

        updates_title: "Mises à jour de la politique",
        updates_intro: "Nous pouvons mettre à jour cette politique de confidentialité occasionnellement pour refléter les changements dans nos pratiques ou les exigences légales. Toute modification sera publiée sur cette page, et la politique révisée s'appliquera à partir de la date de publication.",

        contact_title: "Informations de contact",
        contact_intro: "Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, n'hésitez pas à nous contacter :",
        contact_email: "📧 E-mail : Génération du lien...",
        contact_phone: "📞 Téléphone : +2348135584643",
        contact_page: "🔗 Visitez notre page de contact",

        quick_links: "Liens rapides",
        about_us: "À propos de nous",
        follow_us: "Suivez-nous",
        privacy_policy: "Politique de confidentialité",
        terms_of_service: "Conditions d'utilisation",
        contact_us: "Contacter CHENHUA AUTO",
        full_name: "Nom complet",
        company_name: "Nom de l’entreprise",
        phone_number: "Numéro de téléphone",
        whatsapp: "WhatsApp",
        wechat: "WeChat",

        toggle_theme: "Changer le thème"
    },

    ar: {
        home: "الرئيسية",
        products: "المنتجات",
        about: "من نحن",
        contact: "اتصل بنا",
        privacy_title: "سياسة الخصوصية",
        privacy_text: "توضح سياسة الخصوصية هذه كيف تقوم CHENHUA AUTO بجمع معلوماتك واستخدامها وحمايتها.",

        privacy_title: "سياسة الخصوصية",
        privacy_intro: "توضح سياسة الخصوصية هذه كيف تقوم <strong>CHENHUA AUTO</strong> بجمع معلوماتك واستخدامها وحمايتها.",

        info_title: "المعلومات التي نجمعها",
        info_intro: "قد تقوم CHENHUA AUTO بجمع الأنواع التالية من المعلومات:",
        info_personal: "البيانات الشخصية: الاسم، عنوان البريد الإلكتروني، رقم الهاتف، وغيرها من تفاصيل الاتصال.",
        info_technical: "البيانات التقنية: عنوان IP، نوع المتصفح، نظام التشغيل، معلومات الجهاز، وأوقات الوصول.",
        info_behavioral: "البيانات السلوكية: الصفحات التي تم زيارتها، الروابط التي تم النقر عليها، الوقت المستغرق في الموقع، وتفضيلات المستخدم.",

        usage_title: "كيف نستخدم معلوماتك",
        usage_intro: "تستخدم CHENHUA AUTO المعلومات التي يتم جمعها للأغراض التالية:",
        usage_inquiries: "لمعالجة الاستفسارات: نستخدم معلوماتك الشخصية للرد على رسائلك وطلباتك ودعم العملاء.",
        usage_experience: "لتحسين تجربة المستخدم: تساعدنا البيانات التقنية والسلوكية في تحسين موقعنا وخدماتنا وفقًا لتفضيلات المستخدم.",
        usage_marketing: "لأغراض تسويقية (إن وُجد): بموافقتك، قد نرسل لك تحديثات أو عروضًا أو محتوى ترويجيًا.",
        usage_legal: "للإيفاء بالالتزامات القانونية: قد نستخدم معلوماتك للامتثال للمتطلبات التنظيمية أو الضريبية أو القانونية.",

        sharing_title: "مشاركة معلوماتك",
        sharing_intro: "تقدر CHENHUA AUTO خصوصيتك وتهدف إلى الشفافية. نريدك أن تفهم كيفية مشاركة معلوماتك:",
        sharing_nosell: "عدم بيع البيانات: لا نقوم ببيع أو تأجير أو مشاركة بياناتك الشخصية مع أطراف ثالثة.",
        sharing_services: "الخدمات الخارجية: قد نشارك بياناتك مع شركاء موثوقين يساعدوننا في تشغيل الموقع والخدمات، مثل:",
        sharing_google: "Google Analytics – لتحليل حركة الزوار وسلوك المستخدمين",
        sharing_payment: "معالجات الدفع – لإجراء المعاملات بأمان",
        sharing_email: "مزودو خدمة البريد الإلكتروني – لإرسال الرسائل التي اشتركت بها",

        security_title: "أمان البيانات",
        security_intro: "تلتزم CHENHUA AUTO بحماية معلوماتك وقد طبقت تدابير أمان قوية لضمان ذلك:",
        security_ssl: "تشفير SSL: يتم تشفير جميع البيانات المرسلة بين متصفحك وخوادمنا باستخدام تقنية SSL القياسية.",
        security_firewall: "جدران حماية وضوابط وصول: نستخدم جدران حماية متقدمة وبروتوكولات وصول مقيدة لضمان أمان بياناتك.",
        security_storage: "تخزين آمن: يتم تخزين بياناتك الشخصية في بيئات آمنة ولا يمكن الوصول إليها إلا من قبل الموظفين المصرح لهم.",
        security_breach: "منع الانتهاكات: نقوم بإجراء تدقيقات أمان دورية وتحديثات برمجية ومراقبة لمنع الوصول غير المصرح به أو الانتهاكات.",

        rights_title: "حقوقك",
        rights_intro: "بصفتك مستخدمًا لخدمات CHENHUA AUTO، لديك الحقوق التالية فيما يتعلق ببياناتك الشخصية:",
        rights_access: "حق الوصول: يمكنك طلب نسخة من المعلومات الشخصية التي نحتفظ بها عنك في أي وقت.",
        rights_correct: "حق التصحيح: إذا كنت تعتقد أن لدينا معلومات غير دقيقة أو غير مكتملة، يمكنك طلب تصحيحها.",
        rights_delete: "حق الحذف: يمكنك طلب حذف بياناتك الشخصية من أنظمتنا، مع مراعاة الالتزامات القانونية والتشغيلية.",
        rights_contact: "لإرسال طلب بخصوص البيانات، يرجى التواصل معنا عبر البريد الإلكتروني: sales@chenhuaauto.com.",

        cookies_title: "الكوكيز",
        cookies_intro1: "قد يستخدم موقعنا الإلكتروني ملفات تعريف الارتباط (الكوكيز) لتحسين تجربة التصفح وتحليل حركة المرور. الكوكيز هي ملفات صغيرة يتم تخزينها على جهازك وتساعدنا في فهم كيفية استخدامك للموقع.",
        cookies_intro2: "يمكنك تعطيل الكوكيز من خلال إعدادات المتصفح. ومع ذلك، قد لا تعمل بعض ميزات الموقع بشكل صحيح بدون تمكين الكوكيز.",
        cookies_intro3: "من خلال الاستمرار في استخدام موقعنا، فإنك توافق على استخدامنا للكوكيز وفقًا لسياسة الخصوصية هذه.",

        updates_title: "تحديثات السياسة",
        updates_intro: "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في ممارساتنا أو المتطلبات القانونية. سيتم نشر أي تغييرات على هذه الصفحة، وستدخل السياسة المحدثة حيز التنفيذ من تاريخ النشر.",

        contact_title: "معلومات الاتصال",
        contact_intro: "إذا كان لديك أي أسئلة أو استفسارات بخصوص سياسة الخصوصية هذه، لا تتردد في التواصل معنا:",
        contact_email: "📧 البريد الإلكتروني: جاري توليد الرابط...",
        contact_phone: "📞 الهاتف: +2348135584643",
        contact_page: "🔗 زر صفحتنا الخاصة بالتواصل",

        quick_links: "روابط سريعة",
        about_us: "معلومات عنا",
        follow_us: "تابعنا",
        privacy_policy: "سياسة الخصوصية",
        terms_of_service: "شروط الاستخدام",
        contact_us: "اتصل بـ CHENHUA AUTO",
        full_name: "الاسم الكامل",
        company_name: "اسم الشركة",
        phone_number: "رقم الهاتف",
        whatsapp: "واتساب",
        wechat: "وي شات",

        toggle_theme: "تبديل المظهر"
    },

    zh: {
        "home": "首页",
        "products": "产品",
        "about": "关于我们",
        "contact": "联系我们",
        "privacy_title": "隐私政策",
        "privacy_text": "本隐私政策说明了 CHENHUA AUTO 如何收集、使用和保护您的信息。",

        "privacy_title": "隐私政策",
        "privacy_intro": "本隐私政策说明了 <strong>CHENHUA AUTO</strong> 如何收集、使用和保护您的信息。",

        "info_title": "我们收集的信息",
        "info_intro": "CHENHUA AUTO 可能会收集以下类型的信息：",
        "info_personal": "个人数据：姓名、电子邮箱、电话号码及其他联系方式。",
        "info_technical": "技术数据：IP 地址、浏览器类型、操作系统、设备信息和访问时间。",
        "info_behavioral": "行为数据：访问的页面、点击的链接、在网站上的停留时间和用户偏好。",

        "usage_title": "我们如何使用您的信息",
        "usage_intro": "CHENHUA AUTO 使用收集的信息用于以下目的：",
        "usage_inquiries": "处理咨询：我们使用您的个人信息来回复您的留言、产品请求或客户支持需求。",
        "usage_experience": "提升用户体验：技术和行为数据帮助我们优化网站并根据用户偏好进行调整。",
        "usage_marketing": "市场营销（如适用）：在您同意的情况下，我们可能会向您发送更新、优惠或促销内容。",
        "usage_legal": "履行法律义务：我们可能会使用您的信息来满足监管、税务或法律要求。",

        "sharing_title": "我们如何共享您的信息",
        "sharing_intro": "CHENHUA AUTO 重视您的隐私并致力于透明。我们希望您了解信息共享的方式：",
        "sharing_nosell": "不出售数据：我们不会向第三方出售、交易或出租您的个人数据。",
        "sharing_services": "第三方服务：我们可能会与帮助我们运营网站和服务的可信合作伙伴共享数据，例如：",
        "sharing_google": "Google Analytics – 用于分析网站流量和使用模式",
        "sharing_payment": "支付处理商 – 安全处理交易",
        "sharing_email": "电子邮件服务提供商 – 发送您订阅的通信内容",

        "security_title": "数据安全",
        "security_intro": "CHENHUA AUTO 致力于保护您的信息，并已采取强有力的安全措施保障数据安全：",
        "security_ssl": "SSL 加密：您的浏览器与我们服务器之间传输的所有数据均采用行业标准的 SSL 技术加密。",
        "security_firewall": "防火墙与访问控制：我们使用先进的防火墙和受限访问协议以确保数据安全。",
        "security_storage": "安全存储：您的个人数据被存储在安全的环境中，仅限授权人员访问。",
        "security_breach": "防范数据泄露：我们定期进行安全审计、软件更新和监控，防止未经授权的访问或数据泄露。",

        "rights_title": "您的权利",
        "rights_intro": "作为 CHENHUA AUTO 服务的用户，您拥有以下关于个人数据的权利：",
        "rights_access": "访问权：您可随时请求我们提供我们所持有的您的个人信息副本。",
        "rights_correct": "更正权：如果您认为我们的信息不准确或不完整，您有权要求更正。",
        "rights_delete": "删除权：您可以请求我们删除您的个人数据，但需符合法律与运营义务。",
        "rights_contact": "如需提出数据请求，请通过 sales@chenhuaauto.com 联系我们。",

        "cookies_title": "Cookie 政策",
        "cookies_intro1": "我们的网站可能使用 Cookie 来增强您的浏览体验并分析网站流量。Cookie 是存储在您设备上的小型数据文件，帮助我们了解您如何使用我们的网站。",
        "cookies_intro2": "您可以通过浏览器设置禁用 Cookie。但请注意，禁用后网站某些功能可能无法正常工作。",
        "cookies_intro3": "继续使用我们的网站即表示您同意我们根据本隐私政策使用 Cookie。",

        "updates_title": "政策更新",
        "updates_intro": "我们可能会不时更新本隐私政策以反映我们做法或法律要求的变化。任何更改将发布在本页面，更新后的政策将自发布之日起生效。",

        "contact_title": "联系信息",
        "contact_intro": "如果您对本隐私政策有任何疑问或担忧，请随时联系我们：",
        "contact_email": "📧 邮箱：正在生成链接...",
        "contact_phone": "📞 电话：+2348135584643",
        "contact_page": "🔗 访问我们的联系页面",

        "quick_links": "快速链接",
        "about_us": "关于我们",
        "follow_us": "关注我们",
        "privacy_policy": "隐私政策",
        "terms_of_service": "服务条款",
        "contact_us": "联系 CHENHUA AUTO",
        "full_name": "全名",
        "company_name": "公司名称",
        "phone_number": "电话号码",
        "whatsapp": "WhatsApp",
        "wechat": "微信",

        "toggle_theme": "切换主题"
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
