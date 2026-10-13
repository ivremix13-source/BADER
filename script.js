"use strict";

/* ==========================================
   BADER — FRONTEND EXPERIENCE
   All figures and campaigns below are demo data.
========================================== */

const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  [...parent.querySelectorAll(selector)];

/* ==========================================
   CONFIGURATION
========================================== */

const CONFIG = {
  // Replace these values only after verifying
  // the account details and obtaining permission
  // to use the account for receiving donations.

  accountHolder: "",
  accountNumber: "",

  currency: "ج.س",

  // Demo totals only — not verified donations.
  demoTotalDonations: 0,
  demoTotalGoal: 10000000,

  splashDuration: 1900
};

/* ==========================================
   CAMPAIGN DATA
========================================== */

const campaigns = [
  {
    id: 1,
    category: "health",
    icon: "fa-solid fa-hospital",
    badge: "health",
    title: "دعم المستشفيات والمراكز الصحية",
    description:
      "المساهمة في توفير المستلزمات الطبية والأدوية الأساسية ودعم الخدمات الصحية.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",
    goal: 12000000,
    raised: 0,
    featured: true
  },

  {
    id: 2,
    category: "education",
    icon: "fa-solid fa-graduation-cap",
    badge: "education",
    title: "التعليم حق لكل طفل",
    description:
      "المساهمة في توفير الكتب والأدوات المدرسية ودعم فرص التعليم للأطفال.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    goal: 0,
    raised: 3250000,
    featured: true
  },

  {
    id: 3,
    category: "relief",
    icon: "fa-solid fa-house-chimney",
    badge: "relief",
    title: "إغاثة النازحين والأسر المتضررة",
    description:
      "المساهمة في توفير الاحتياجات الأساسية للأسر التي اضطرت إلى مغادرة منازلها.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
    goal: 0,
    raised: 92000000,
    featured: true
  },

  {
    id: 4,
    category: "relief",
    icon: "fa-solid fa-bowl-food",
    badge: "relief",
    title: "سلال الغذاء للأسر المحتاجة",
    description:
      "دعم مبادرات توفير الغذاء والمواد الأساسية للأسر ذات الاحتياجات العاجلة.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80",
    goal: 0,
    raised: 4100000,
    featured: false
  },

  {
    id: 5,
    category: "health",
    icon: "fa-solid fa-pills",
    badge: "health",
    title: "توفير الأدوية والعلاجات",
    description:
      "المساهمة في دعم المبادرات التي توفر الأدوية الأساسية للمرضى المحتاجين.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    goal: 5000000,
    raised: 2150000,
    featured: false
  },

  {
    id: 6,
    category: "community",
    icon: "fa-solid fa-child-reaching",
    badge: "community",
    title: "رعاية الأيتام",
    description:
      "المساهمة في مبادرات الرعاية والتعليم وتوفير الاحتياجات الأساسية للأيتام.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
    goal: 7000000,
    raised: 4600000,
    featured: true
  },

  {
    id: 7,
    category: "community",
    icon: "fa-solid fa-people-roof",
    badge: "community",
    title: "دعم الأسر محدودة الدخل",
    description:
      "مساندة الأسر التي تواجه صعوبات في توفير الاحتياجات اليومية.",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80",
    goal: 5500000,
    raised: 1750000,
    featured: false
  },

  {
    id: 8,
    category: "education",
    icon: "fa-solid fa-school",
    badge: "education",
    title: "إعادة دعم المدارس",
    description:
      "المساهمة في تجهيز الفصول وتوفير الأثاث والمواد التعليمية الأساسية.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    goal: 9000000,
    raised: 3800000,
    featured: false
  },

  {
    id: 9,
    category: "relief",
    icon: "fa-solid fa-droplet",
    badge: "relief",
    title: "مياه نظيفة وحياة أفضل",
    description:
      "دعم مبادرات توفير مياه الشرب النظيفة وتحسين الوصول إلى المياه الآمنة.",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=80",
    goal: 4000000,
    raised: 1950000,
    featured: false
  },

  {
    id: 10,
    category: "community",
    icon: "fa-solid fa-wheelchair",
    badge: "community",
    title: "دعم الأشخاص ذوي الإعاقة",
    description:
      "المساهمة في توفير الاحتياجات المساندة ودعم المشاركة المجتمعية.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    goal: 3500000,
    raised: 1200000,
    featured: false
  },

  {
    id: 11,
    category: "national",
    icon: "fa-solid fa-shield-halved",
    badge: "national",
    title: "مبادرة دعم القوات المسلحة السودانية",
    description:
      "مساحة مخصصة لعرض مبادرة دعم القوات المسلحة السودانية، وفق الأطر القانونية والموافقات اللازمة.",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80",
    goal: 5000000,
    raised: 800000,
    featured: false
  },

  {
    id: 12,
    category: "health",
    icon: "fa-solid fa-heart-pulse",
    badge: "health",
    title: "رعاية المرضى والحالات الإنسانية",
    description:
      "دعم الحالات الإنسانية التي تحتاج إلى المساندة الطبية وفق معايير واضحة.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    goal: 4500000,
    raised: 2400000,
    featured: false
  }
];

/*
  IMPORTANT:
  The campaign names, figures, and images are demonstration content.
  Do not publish the amounts as verified donations or claim that
  the depicted beneficiaries have been verified.
*/

/* ==========================================
   TRANSLATIONS
========================================== */

const translations = {
  ar: {
    brand: "بادر",
    navHome: "الرئيسية",
    navCampaigns: "الحملات",
    navAbout: "عن بادر",
    navContact: "تواصل معنا",
    donateNow: "تبرع الآن",

    heroEyebrow: "معًا نصنع أثرًا يبقى",
    heroTitle:
      'الخير الذي<br><span>تمنحه اليوم</span><br>يصنع غدًا أفضل.',
    heroDescription:
      "كل مساهمة تحمل فرصة جديدة، وكل يد تمتد بالعطاء يمكنها أن تغيّر حياة إنسان. اختر المجال الذي يهمك وكن جزءًا من قصة خير جديدة.",
    exploreCampaigns: "اكتشف الحملات",
    learnAbout: "تعرّف على بادر",
    trustTitle: "العطاء بمسؤولية",
    trustText: "الشفافية أساس كل مساهمة",
    heroImageTitle: "أثر يبدأ منك",
    heroImageText: "خطوة صغيرة، أمل كبير",
    floatingTop: "كل مساهمة مهمة",
    floatingTopText: "كن سببًا في الخير",
    floatingBottom: "الأمل ينمو بالعطاء",
    floatingBottomText: "معًا نحو مستقبل أفضل",

    totalDonations: "إجمالي التبرعات",
    activeCampaigns: "الحملات المعروضة",
    totalGoal: "إجمالي الأهداف",
    openCampaigns: "مجالات العطاء",
    currency: "ج.س",
    demoStats:
      "الأرقام المعروضة توضيحية في هذه النسخة، ولا تمثل مبالغ تم تحصيلها فعليًا.",

    campaignsKicker: "أبواب الخير كثيرة",
    campaignsTitle: 'أين تريد أن <span>يصل عطاؤك؟</span>',
    campaignsDescription:
      "اختر المجال الأقرب إلى قلبك، واجعل مساهمتك بداية حقيقية للتغيير.",
    viewAll: "عرض جميع الحملات",
    searchPlaceholder: "ابحث عن حملة...",
    filterAll: "الكل",
    filterHealth: "الصحة",
    filterEducation: "التعليم",
    filterRelief: "الإغاثة",
    filterCommunity: "المجتمع",
    filterNational: "المبادرات الوطنية",
    noResults: "لم نعثر على حملات مطابقة",
    noResultsText: "جرّب البحث بكلمات أخرى.",

    impactBadge: "العطاء يجمعنا",
    impactKicker: "أكثر من مجرد تبرع",
    impactTitle: 'حين تمد يدك بالخير،<br><span>تفتح بابًا للأمل.</span>',
    impactDescription:
      "نؤمن أن المساهمة الإنسانية لا تُقاس بحجمها فقط، بل بالأثر الذي تتركه. من التعليم إلى الصحة، ومن الإغاثة إلى رعاية الأسر، لكل مساهمة معنى.",
    impactPoint1: "حملات واضحة الأهداف",
    impactPoint2: "معلومات تشرح احتياجات كل حملة",
    impactPoint3: "تجربة تبرع بسيطة وسهلة",
    discoverMission: "اكتشف رسالتنا",

    stepsKicker: "الخير بخطوات بسيطة",
    stepsTitle: 'مساهمتك تبدأ <span>بخطوة</span>',
    stepsDescription:
      "تجربة واضحة ترشدك من اختيار الحملة إلى إرسال بيانات التبرع.",
    step1Title: "اختر حملتك",
    step1Text: "تصفح مجالات الخير واختر المبادرة التي ترغب في دعمها.",
    step2Title: "حدد مساهمتك",
    step2Text: "أدخل المبلغ الذي تريد المساهمة به واختر وسيلة التحويل.",
    step3Title: "أرسل رقم العملية",
    step3Text: "أدخل مرجع التحويل لتتمكن الإدارة من مراجعته لاحقًا.",

    aboutKicker: "حكاية بادر",
    aboutTitle: 'الخير ليس بعيدًا،<br><span>حين نقرر أن نبدأ.</span>',
    aboutDescription:
      "بادر منصة تهدف إلى جمع مجالات العطاء الإنساني في مكان واحد، لتسهيل الوصول إلى المبادرات الصحية والتعليمية والإغاثية والمجتمعية.",
    aboutNote:
      "نعمل على تقديم تجربة واضحة تحترم المتبرع وتُبرز احتياجات الحملات، مع السعي إلى بناء منظومة موثوقة للتحقق من التبرعات والجهات المستفيدة.",

    ctaOverline: "قد تكون مساهمتك بداية قصة جديدة",
    ctaTitle: "لا تنتظر الفرصة لصنع الفرق.",
    ctaDescription: "بادر اليوم، واجعل للخير مكانًا في يومك.",
    ctaButton: "ابدأ بالعطاء",

    footerDescription:
      "مساحة تجمع القلوب حول الخير، وتمنح كل مساهمة فرصة لصنع أثر.",
    footerLinks: "روابط سريعة",
    footerAreas: "مجالات العطاء",
    footerContact: "تواصل معنا",
    contactDescription: "للاستفسارات المتعلقة بالحملات والتبرعات.",
    contactUs: "تواصل معنا",
    copyright: "جميع الحقوق محفوظة.",
    footerMotto: "بادر بالخير، واصنع الأثر.",

    donationKicker: "مساهمتك تصنع فرقًا",
    donationTitle: "ساهم في هذه الحملة",
    amountLabel: "المبلغ المراد التبرع به",
    paymentLabel: "وسيلة التحويل",
    bankak: "بنكك",
    accountDetails: "بيانات حساب التحويل",
    accountDetailsNote: "استخدم البيانات التالية لإجراء التحويل",
    accountName: "اسم صاحب الحساب",
    accountNumber: "رقم الحساب",
    accountNote: "تحقق من اسم المستفيد ورقم الحساب قبل التحويل.",
    continueToReference: "متابعة إلى رقم العملية",
    demoPaymentNotice: "هذه الواجهة لا تنفذ تحويلًا ماليًا بنفسها.",

    referenceKicker: "خطوة أخيرة",
    referenceTitle: "أدخل رقم العملية",
    referenceDescription:
      "إذا كنت قد أجريت التحويل بالفعل، أدخل الرقم المرجعي الظاهر في إشعار العملية.",
    referenceLabel: "رقم العملية المرجعي",
    donorNameLabel: "الاسم (اختياري)",
    sendReference: "إرسال البيانات",
    referenceNotice:
      "في هذه النسخة تُعرض رسالة تأكيد فقط؛ لا تُرسل البيانات إلى خادم ولا يتم التحقق من التحويل.",

    successKicker: "شكرًا لأنك بادرت",
    successTitle: "عطاؤك يحمل الأمل",
    successDescription:
      "شكرًا لمساهمتك. تم تسجيل بياناتك على هذه الواجهة، لكن لم يتم إرسالها إلى خادم أو تأكيد وصول الأموال.",
    finish: "العودة إلى الحملات",

    settings: "الإعدادات",
    settingsTitle: "إعدادات بادر",
    settingsDescription: "خصص تجربتك بالطريقة التي تناسبك.",
    languageSetting: "لغة الموقع",
    languageSettingText: "اختر اللغة التي تفضلها",
    themeSetting: "مظهر الموقع",
    themeSettingText: "اختر الوضع النهاري أو الداكن",
    darkMode: "الوضع الداكن",
    lightMode: "الوضع النهاري",
    settingsFooter: "بادر بالخير، واصنع الأثر.",

    badgeHealth: "الصحة",
    badgeEducation: "التعليم",
    badgeRelief: "الإغاثة",
    badgeCommunity: "المجتمع",
    badgeNational: "مبادرات وطنية",

    raisedLabel: "تم جمعه",
    goalLabel: "الهدف",
    donate: "تبرع",
    demoCampaign: "حملة توضيحية",

    copied: "تم النسخ",
    accountMissing: "لم تتم إضافة بيانات الحساب بعد.",
    invalidAmount: "يرجى إدخال مبلغ صحيح أكبر من صفر.",
    enterReference: "يرجى إدخال رقم العملية.",
    donationPrepared: "تم تجهيز تفاصيل المساهمة.",
    noAccount: "بيانات الحساب غير متاحة حاليًا.",
    contactUnavailable: "سيتم إضافة وسيلة التواصل لاحقًا."
  },

  en: {
    brand: "Bader",
    navHome: "Home",
    navCampaigns: "Campaigns",
    navAbout: "About",
    navContact: "Contact",
    donateNow: "Donate now",

    heroEyebrow: "Together, we create lasting impact",
    heroTitle:
      'Goodness you<br><span>share today</span><br>builds a better tomorrow.',
    heroDescription:
      "Every contribution creates an opportunity. Choose a cause that matters to you and become part of a story of positive change.",
    exploreCampaigns: "Explore campaigns",
    learnAbout: "Discover Bader",
    trustTitle: "Giving responsibly",
    trustText: "Transparency matters",
    heroImageTitle: "Impact starts with you",
    heroImageText: "A small step, a greater hope",
    floatingTop: "Every contribution matters",
    floatingTopText: "Be part of the good",
    floatingBottom: "Hope grows through giving",
    floatingBottomText: "Together for a better future",

    totalDonations: "Total donations",
    activeCampaigns: "Listed campaigns",
    totalGoal: "Combined goals",
    openCampaigns: "Giving categories",
    currency: "SDG",
    demoStats:
      "Figures are illustrative demonstration data, not verified collected donations.",

    campaignsKicker: "Many ways to give",
    campaignsTitle: 'Where would you like <span>your giving to go?</span>',
    campaignsDescription:
      "Choose a cause close to your heart and make your contribution a step toward change.",
    viewAll: "View all campaigns",
    searchPlaceholder: "Search campaigns...",
    filterAll: "All",
    filterHealth: "Health",
    filterEducation: "Education",
    filterRelief: "Relief",
    filterCommunity: "Community",
    filterNational: "National initiatives",
    noResults: "No matching campaigns found",
    noResultsText: "Try different search terms.",

    impactBadge: "Giving brings us together",
    impactKicker: "More than a donation",
    impactTitle: 'When you extend a helping hand,<br><span>you open a door to hope.</span>',
    impactDescription:
      "Humanitarian giving is measured not only by its amount, but by the impact it creates. From education and healthcare to relief and family support, every contribution matters.",
    impactPoint1: "Clear campaign goals",
    impactPoint2: "Information about campaign needs",
    impactPoint3: "A simple donation experience",
    discoverMission: "Discover our mission",

    stepsKicker: "Giving made simple",
    stepsTitle: 'Your contribution starts <span>with one step</span>',
    stepsDescription:
      "A clear journey from choosing a campaign to submitting contribution details.",
    step1Title: "Choose a campaign",
    step1Text: "Explore causes and choose the initiative you wish to support.",
    step2Title: "Choose your amount",
    step2Text: "Enter your contribution and select the transfer method.",
    step3Title: "Submit the reference",
    step3Text: "Provide the transfer reference for subsequent review.",

    aboutKicker: "The Bader story",
    aboutTitle: 'Goodness is within reach,<br><span>when we choose to begin.</span>',
    aboutDescription:
      "Bader brings humanitarian giving opportunities together in one place, helping people discover health, education, relief and community initiatives.",
    aboutNote:
      "Our goal is to offer a clear experience for donors while building a reliable process for verifying donations and beneficiaries.",

    ctaOverline: "Your contribution may begin a new story",
    ctaTitle: "Do not wait for a chance to make a difference.",
    ctaDescription: "Start today and make room for kindness.",
    ctaButton: "Start giving",

    footerDescription:
      "A place that brings people together through kindness and meaningful action.",
    footerLinks: "Quick links",
    footerAreas: "Giving categories",
    footerContact: "Contact",
    contactDescription: "For questions about campaigns and donations.",
    contactUs: "Contact us",
    copyright: "All rights reserved.",
    footerMotto: "Give with purpose. Create an impact.",

    donationKicker: "Your contribution matters",
    donationTitle: "Support this campaign",
    amountLabel: "Donation amount",
    paymentLabel: "Transfer method",
    bankak: "Bankak",
    accountDetails: "Transfer account details",
    accountDetailsNote: "Use the following details to make a transfer",
    accountName: "Account holder",
    accountNumber: "Account number",
    accountNote: "Verify the recipient name and account number before transferring.",
    continueToReference: "Continue to reference",
    demoPaymentNotice: "This interface does not execute a financial transfer.",

    referenceKicker: "One final step",
    referenceTitle: "Enter the transaction reference",
    referenceDescription:
      "If you have already made the transfer, enter the reference shown in your transaction receipt.",
    referenceLabel: "Transaction reference",
    donorNameLabel: "Name (optional)",
    sendReference: "Submit details",
    referenceNotice:
      "This version displays a confirmation only. No data is sent to a server and no transfer is verified.",

    successKicker: "Thank you for giving",
    successTitle: "Your kindness carries hope",
    successDescription:
      "Thank you. Your details were processed in this interface only. They were not sent to a server, and receipt of funds was not verified.",
    finish: "Return to campaigns",

    settings: "Settings",
    settingsTitle: "Bader settings",
    settingsDescription: "Customize your experience.",
    languageSetting: "Website language",
    languageSettingText: "Choose your preferred language",
    themeSetting: "Appearance",
    themeSettingText: "Choose light or dark mode",
    darkMode: "Dark mode",
    lightMode: "Light mode",
    settingsFooter: "Give with purpose. Create an impact.",

    badgeHealth: "Health",
    badgeEducation: "Education",
    badgeRelief: "Relief",
    badgeCommunity: "Community",
    badgeNational: "National initiatives",

    raisedLabel: "Raised",
    goalLabel: "Goal",
    donate: "Donate",
    demoCampaign: "Demonstration campaign",

    copied: "Copied",
    accountMissing: "Account details have not been added yet.",
    invalidAmount: "Enter a valid amount greater than zero.",
    enterReference: "Please enter a transaction reference.",
    donationPrepared: "Contribution details prepared.",
    noAccount: "Account details are not currently available.",
    contactUnavailable: "Contact information will be added later."
  }
};

/* ==========================================
   STATE
========================================== */

let currentLanguage = "ar";
let currentFilter = "all";
let searchTerm = "";
let selectedCampaign = null;
let pendingDonation = null;
let toastTimer = null;

/* ==========================================
   HELPERS
========================================== */

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function t(key) {
  return translations[currentLanguage][key] ??
         translations.ar[key] ??
         key;
}

function formatMoney(value) {
  const locale = currentLanguage === "ar"
    ? "ar"
    : "en";

  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: 0
  }).format(value);
}

function getCampaignTitle(campaign) {
  return currentLanguage === "en"
    ? campaign.titleEn || campaign.title
    : campaign.title;
}

function getCampaignDescription(campaign) {
  return currentLanguage === "en"
    ? campaign.descriptionEn || campaign.description
    : campaign.description;
}

function showToast(message) {
  const toast = $("#toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

/* ==========================================
   THEME
========================================== */

function applyTheme(theme) {
  const normalized = theme === "dark" ? "dark" : "light";

  document.documentElement.dataset.theme = normalized;

  try {
    localStorage.setItem("bader-theme", normalized);
  } catch (error) {
    // Storage may be unavailable in some browser contexts.
  }

  const icon = $("#themeToggle i");

  if (icon) {
    icon.className = normalized === "dark"
      ? "fa-solid fa-sun"
      : "fa-solid fa-moon";
  }

  const settingsThemeToggle = $("#settingsThemeToggle");

  if (settingsThemeToggle) {
    const settingsIcon = $("i", settingsThemeToggle);
    const settingsLabel = $("span", settingsThemeToggle);

    settingsIcon.className = normalized === "dark"
      ? "fa-solid fa-sun"
      : "fa-solid fa-moon";

    settingsLabel.textContent = normalized === "dark"
      ? t("lightMode")
      : t("darkMode");
  }
}

function initializeTheme() {
  let savedTheme = "light";

  try {
    savedTheme = localStorage.getItem("bader-theme") || "light";
  } catch (error) {
    savedTheme = "light";
  }

  applyTheme(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme;
  applyTheme(current === "dark" ? "light" : "dark");
}

/* ==========================================
   LANGUAGE
========================================== */

function applyTranslations() {
  const dictionary = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;

  document.documentElement.dir =
    currentLanguage === "ar" ? "rtl" : "ltr";

  $$("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (dictionary[key] !== undefined) {
      element.innerHTML = dictionary[key];
    }
  });

  $$("[data-i18n-placeholder]").forEach(element => {
    const key = element.dataset.i18nPlaceholder;

    if (dictionary[key] !== undefined) {
      element.placeholder = dictionary[key];
    }
  });

  $("#languageLabel").textContent =
    currentLanguage === "ar" ? "EN" : "ع";

  $("#settingsLanguage").value = currentLanguage;

  $("#donationAmount").placeholder =
    currentLanguage === "ar" ? "مثال: 50000" : "e.g. 50000";

  $("#transactionReference").placeholder =
    currentLanguage === "ar"
      ? "أدخل رقم العملية"
      : "Enter transaction reference";

  $("#donorName").placeholder =
    currentLanguage === "ar"
      ? "اسم المتبرع"
      : "Donor name";

  renderCampaigns();
  updateStatistics();
  applyTheme(document.documentElement.dataset.theme || "light");
}

function setLanguage(language) {
  currentLanguage = language === "en" ? "en" : "ar";

  try {
    localStorage.setItem("bader-language", currentLanguage);
  } catch (error) {
    // Storage may be unavailable.
  }

  applyTranslations();
}

function initializeLanguage() {
  try {
    const savedLanguage = localStorage.getItem("bader-language");

    if (savedLanguage === "en" || savedLanguage === "ar") {
      currentLanguage = savedLanguage;
    }
  } catch (error) {
    currentLanguage = "ar";
  }

  applyTranslations();
}

/* ==========================================
   CAMPAIGN CARDS
========================================== */

function getBadgeLabel(category) {
  const map = {
    health: "badgeHealth",
    education: "badgeEducation",
    relief: "badgeRelief",
    community: "badgeCommunity",
    national: "badgeNational"
  };

  return t(map[category] || "demoCampaign");
}

function renderCampaigns() {
  const grid = $("#campaignGrid");
  const emptyState = $("#emptyState");

  const normalizedSearch = searchTerm.trim().toLocaleLowerCase();

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesCategory =
      currentFilter === "all" ||
      campaign.category === currentFilter;

    const title = getCampaignTitle(campaign).toLocaleLowerCase();
    const description =
      getCampaignDescription(campaign).toLocaleLowerCase();

    const matchesSearch =
      !normalizedSearch ||
      title.includes(normalizedSearch) ||
      description.includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });

  grid.innerHTML = filteredCampaigns.map(campaign => {
    const percentage = campaign.goal > 0
      ? Math.min(
          100,
          Math.round((campaign.raised / campaign.goal) * 100)
        )
      : 0;

    return `
      <article class="campaign-card">

        <div class="campaign-image-wrap">

          <img
            class="campaign-image"
            src="${escapeHTML(campaign.image)}"
            alt="${escapeHTML(getCampaignTitle(campaign))}"
            loading="lazy"
          >

          <span class="campaign-badge">
            <i class="fa-solid fa-heart"></i>
            ${escapeHTML(getBadgeLabel(campaign.category))}
          </span>

          <div class="campaign-category-icon">
            <i class="${escapeHTML(campaign.icon)}"></i>
          </div>

        </div>

        <div class="campaign-body">

          <div class="campaign-meta">
            <i class="fa-solid fa-circle-check"></i>
            <span>${escapeHTML(t("demoCampaign"))}</span>
          </div>

          <h3 class="campaign-title">
            ${escapeHTML(getCampaignTitle(campaign))}
          </h3>

          <p class="campaign-description">
            ${escapeHTML(getCampaignDescription(campaign))}
          </p>

          <div class="campaign-progress-heading">
            <span>
              ${escapeHTML(t("raisedLabel"))}
              ${formatMoney(campaign.raised)}
              ${escapeHTML(t("currency"))}
            </span>

            <strong>${percentage}%</strong>
          </div>

          <div
            class="progress-track"
            role="progressbar"
            aria-label="${escapeHTML(t("raisedLabel"))}"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="${percentage}"
          >
            <div
              class="progress-fill"
              style="width:${percentage}%"
            ></div>
          </div>

          <div class="campaign-footer">

            <div class="campaign-goal">
              <span>${escapeHTML(t("goalLabel"))}</span>

              <strong>
                ${formatMoney(campaign.goal)}
                ${escapeHTML(t("currency"))}
              </strong>
            </div>

            <button
              type="button"
              class="campaign-donate-button"
              data-donate-id="${campaign.id}"
            >
              <i class="fa-solid fa-heart"></i>
              <span>${escapeHTML(t("donate"))}</span>
            </button>

          </div>

        </div>

      </article>
    `;
  }).join("");

  emptyState.hidden = filteredCampaigns.length > 0;

  $("#campaignCount").textContent = campaigns.length;
}

/* ==========================================
   STATISTICS
========================================== */

function animateNumber(element, target) {
  if (!element) return;

  const startTime = performance.now();
  const duration = 900;

  function frame(now) {
    const progress = Math.min((now - startTime) / duration, 1);

    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);

    element.textContent = formatMoney(value);

    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
}

function updateStatistics() {
  animateNumber(
    $("#totalDonations"),
    CONFIG.demoTotalDonations
  );

  animateNumber(
    $("#totalGoal"),
    CONFIG.demoTotalGoal
  );

  $("#campaignCount").textContent = campaigns.length;
}

/* ==========================================
   MODAL MANAGEMENT
========================================== */

function openModal(modal) {
  if (!modal) return;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
}

function closeModal(modal) {
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  const anotherOpenModal = $$(".modal-backdrop")
    .some(item => item.classList.contains("open"));

  if (!anotherOpenModal) {
    document.body.classList.remove("modal-open");
  }
}

function resetDonationSteps() {
  $("#donationStepAmount").hidden = false;
  $("#donationStepReference").hidden = true;
  $("#donationStepSuccess").hidden = true;

  $("#donationForm").reset();
  $("#referenceForm").reset();

  pendingDonation = null;
}

/* ==========================================
   DONATION MODAL
========================================== */

function openDonation(campaignId) {
  selectedCampaign = campaigns.find(
    campaign => campaign.id === Number(campaignId)
  );

  if (!selectedCampaign) return;

  resetDonationSteps();

  const title = getCampaignTitle(selectedCampaign);

  $("#donationCampaignDescription").textContent =
    getCampaignDescription(selectedCampaign);

  $("#selectedCampaignSummary").innerHTML = `
    <div class="summary-icon">
      <i class="${escapeHTML(selectedCampaign.icon)}"></i>
    </div>

    <div>
      <strong>${escapeHTML(title)}</strong>
      <span>${escapeHTML(getBadgeLabel(selectedCampaign.category))}</span>
    </div>
  `;

  const accountHolder =
    CONFIG.accountHolder.trim() || t("accountMissing");

  const accountNumber =
    CONFIG.accountNumber.trim() || t("noAccount");

  $("#accountHolder").textContent = accountHolder;
  $("#accountNumber").textContent = accountNumber;

  $("#paymentMethod").value = "bankak";

  openModal($("#donationModal"));
}

function showReferenceStep(amount) {
  if (!selectedCampaign) return;

  pendingDonation = {
    campaignId: selectedCampaign.id,
    amount,
    currency: CONFIG.currency
  };

  $("#donationStepAmount").hidden = true;
  $("#donationStepReference").hidden = false;
  $("#donationStepSuccess").hidden = true;

  $("#referenceSummary").innerHTML = `
    <strong>${escapeHTML(getCampaignTitle(selectedCampaign))}</strong>

    <span>${escapeHTML(t("amountLabel"))}</span>

    <strong class="summary-total">
      ${formatMoney(amount)} ${escapeHTML(t("currency"))}
    </strong>

    <span>${escapeHTML(t("bankak"))}</span>
  `;

  $("#transactionReference").focus();
}

function handleDonationSubmit(event) {
  event.preventDefault();

  const amount = Number($("#donationAmount").value);

  if (!Number.isFinite(amount) || amount <= 0) {
    showToast(t("invalidAmount"));
    return;
  }

  if (
    !CONFIG.accountHolder.trim() ||
    !CONFIG.accountNumber.trim()
  ) {
    showToast(t("accountMissing"));

    /*
      This demonstration deliberately prevents proceeding
      while the recipient details are missing.

      Add the verified account holder and number to CONFIG
      before enabling the transfer-information flow.
    */

    return;
  }

  if ($("#paymentMethod").value !== "bankak") {
    showToast(t("noAccount"));
    return;
  }

  showReferenceStep(amount);
}

function handleReferenceSubmit(event) {
  event.preventDefault();

  if (!pendingDonation || !selectedCampaign) {
    showToast(t("invalidAmount"));
    return;
  }

  const reference = $("#transactionReference").value.trim();

  const donorName = $("#donorName").value.trim();

  if (!reference) {
    showToast(t("enterReference"));
    return;
  }

  /*
    IMPORTANT:
    This is a front-end demonstration.

    Do not interpret the following step as a successful
    payment, verified transfer, or completed donation.

    No server request is made.
    No transaction is verified.
    No campaign totals are incremented.
  */

  $("#donationStepAmount").hidden = true;
  $("#donationStepReference").hidden = true;
  $("#donationStepSuccess").hidden = false;

  $("#successReference").textContent =
    currentLanguage === "ar"
      ? `رقم العملية المدخل: ${reference}`
      : `Entered reference: ${reference}`;

  // Avoid persisting sensitive transaction information.
  // The donor's name is deliberately not stored.
  void donorName;

  $("#donationStepSuccess").setAttribute(
    "data-submission-status",
    "demo-only-not-submitted"
  );
}

function finishDonation() {
  closeModal($("#donationModal"));
  resetDonationSteps();

  $("#campaigns").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

/* ==========================================
   SETTINGS MODAL
========================================== */

function openSettings() {
  $("#settingsLanguage").value = currentLanguage;
  openModal($("#settingsModal"));
}

/* ==========================================
   EVENT LISTENERS
========================================== */

// Theme
$("#themeToggle").addEventListener("click", toggleTheme);

$("#settingsThemeToggle").addEventListener(
  "click",
  toggleTheme
);

// Language
$("#languageToggle").addEventListener("click", () => {
  setLanguage(currentLanguage === "ar" ? "en" : "ar");
});

$("#settingsLanguage").addEventListener("change", event => {
  setLanguage(event.target.value);
});

// Campaign filtering
$("#filterButtons").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");

  if (!button) return;

  currentFilter = button.dataset.filter;

  $$(".filter-button").forEach(item => {
    item.classList.toggle("active", item === button);
  });

  renderCampaigns();
});

// Search
$("#campaignSearch").addEventListener("input", event => {
  searchTerm = event.target.value;
  renderCampaigns();
});

// Open donation modal
$("#campaignGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-donate-id]");

  if (!button) return;

  openDonation(button.dataset.donateId);
});

// Footer category links
$$("[data-filter-link]").forEach(link => {
  link.addEventListener("click", () => {
    currentFilter = link.dataset.filterLink;

    $$(".filter-button").forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.filter === currentFilter
      );
    });

    renderCampaigns();
  });
});

// View all campaigns
$("#showAllCampaigns").addEventListener("click", () => {
  currentFilter = "all";
  searchTerm = "";

  $("#campaignSearch").value = "";

  $$(".filter-button").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.filter === "all"
    );
  });

  renderCampaigns();
});

// Quick donation amounts
$$("[data-amount]").forEach(button => {
  button.addEventListener("click", () => {
    $("#donationAmount").value = button.dataset.amount;
  });
});

// Donation form
$("#donationForm").addEventListener(
  "submit",
  handleDonationSubmit
);

// Transaction reference form
$("#referenceForm").addEventListener(
  "submit",
  handleReferenceSubmit
);

// Finish donation
$("#finishDonation").addEventListener(
  "click",
  finishDonation
);

// Close donation modal
$("#closeDonation").addEventListener("click", () => {
  closeModal($("#donationModal"));
});

// Close settings modal
$("#closeSettings").addEventListener("click", () => {
  closeModal($("#settingsModal"));
});

// Close modals when clicking backdrop
$$(".modal-backdrop").forEach(modal => {
  modal.addEventListener("click", event => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});

// Escape key
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;

  $$(".modal-backdrop.open").forEach(closeModal);
});

// Copy account details
$$("[data-copy]").forEach(button => {
  button.addEventListener("click", async () => {
    const element = $(`#${button.dataset.copy}`);
    const value = element?.textContent?.trim();

    if (
      !value ||
      value === t("accountMissing") ||
      value === t("noAccount")
    ) {
      showToast(t("accountMissing"));
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      showToast(t("copied"));
    } catch (error) {
      // Fallback for browsers where Clipboard API is unavailable.
      const temporary = document.createElement("textarea");

      temporary.value = value;
      temporary.style.position = "fixed";
      temporary.style.opacity = "0";

      document.body.appendChild(temporary);

      temporary.select();

      try {
        document.execCommand("copy");
        showToast(t("copied"));
      } catch (copyError) {
        showToast(value);
      }

      temporary.remove();
    }
  });
});

// Mobile settings
$("#mobileSettings").addEventListener("click", openSettings);

// Contact placeholder
$("#contactButton").addEventListener("click", () => {
  showToast(t("contactUnavailable"));
});

// Header scroll state
window.addEventListener("scroll", () => {
  $(".site-header").classList.toggle(
    "scrolled",
    window.scrollY > 15
  );
}, { passive: true });

// Mobile active navigation
$$(".mobile-nav-item[href]").forEach(link => {
  link.addEventListener("click", () => {
    $$(".mobile-nav-item").forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});

/* ==========================================
   INITIALIZATION
========================================== */

function initializeApp() {
  $("#currentYear").textContent = new Date().getFullYear();

  initializeTheme();
  initializeLanguage();

  renderCampaigns();
  updateStatistics();

  const splash = $("#splashScreen");

  window.setTimeout(() => {
    splash.classList.add("is-hidden");
  }, CONFIG.splashDuration);
}

document.addEventListener("DOMContentLoaded", initializeApp);
