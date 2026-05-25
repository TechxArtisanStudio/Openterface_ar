export interface MarketingUi {
  docLinkBanner: {
    aboutMessage: string;
    homeMessage: string;
    productMessage: string;
    linkLabel: string;
  };
  homeSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
  siteFooter: {
    tagline: string;
    productsHeading: string;
    keymodSeries: string;
    kvmGoSeries: string;
    miniKvm: string;
    accessories: string;
    resourcesHeading: string;
    videos: string;
    faqs: string;
    apps: string;
    support: string;
    newsletterTitle: string;
    newsletterDescription: string;
    newsletterSubmit: string;
    newsletterNamePlaceholder: string;
    newsletterEmailPlaceholder: string;
    newsletterFootnote: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  productLanding: {
    downloadApp: string;
    backers: string;
    theProblem: string;
    theSolution: string;
    hwSoftwareTitle: string;
    hwSoftwareSubtitle: string;
    hardware: string;
    software: string;
    swFallback: string;
    keySpecs: string;
    useCases: string;
    documentation: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
}

export const ui: MarketingUi = {
  "docLinkBanner": {
    "aboutMessage": "أدلة المنتجات والأسئلة الشائعة والدروس وتنزيلات التطبيقات على docs.openterface.com.",
    "homeMessage": "الدروس والأسئلة الشائعة وتنزيلات التطبيقات وأدلة المنتجات على docs.openterface.com.",
    "linkLabel": "فتح التوثيق ↗",
    "productMessage": "المواصفات التفصيلية وأدلة الإعداد والأسئلة الشائعة على docs.openterface.com."
  },
  "homeSubscribe": {
    "kicker": "ابقَ على اطلاع",
    "heading": "احصل أولاً على تحديثات KVM-GO و KeyMod و Mini-KVM",
    "description": "إطلاقات المنتجات والبرامج الثابتة ونصائح IT عملية — مرة واحدة شهرياً كحد أقصى. بدون رسائل مزعجة، فقط أخبار مفيدة من فريق Openterface.",
    "benefitCrowdfunding": "وصول مبكر للتمويل الجماعي ونوافذ الطلب المسبق",
    "benefitGuides": "أدلة الإعداد وملاحظات إصدارات التطبيق",
    "benefitUnsubscribe": "إلغاء الاشتراك بنقرة واحدة في أي وقت",
    "submitLabel": "اشترك في التحديثات",
    "namePlaceholder": "الاسم (اختياري)",
    "emailPlaceholder": "عنوان البريد الإلكتروني *",
    "footnote": "بريد واحد شهرياً كحد أقصى. إلغاء الاشتراك في أي وقت. استفسارات: info@openterface.com"
  },
  "siteFooter": {
    "tagline": "حلول KVM-over-USB فائقة الصغر لمحترفي IT.",
    "productsHeading": "المنتجات",
    "keymodSeries": "سلسلة KeyMod",
    "kvmGoSeries": "سلسلة KVM-GO",
    "miniKvm": "Mini-KVM",
    "accessories": "الملحقات",
    "resourcesHeading": "الموارد",
    "videos": "فيديو",
    "faqs": "الأسئلة الشائعة",
    "apps": "التطبيقات",
    "support": "الدعم",
    "newsletterTitle": "النشرة الإخبارية",
    "newsletterDescription": "تحديثات شهرية عن المنتجات والبرامج الثابتة ونصائح KVM.",
    "newsletterSubmit": "اشتراك",
    "newsletterNamePlaceholder": "الاسم",
    "newsletterEmailPlaceholder": "البريد الإلكتروني *",
    "newsletterFootnote": "إلغاء الاشتراك في أي وقت.",
    "copyright": "Openterface. KVM-over-USB مفتوح المصدر.",
    "privacy": "الخصوصية",
    "terms": "الشروط"
  },
  "productLanding": {
    "downloadApp": "تنزيل التطبيق",
    "backers": "الداعمون",
    "theProblem": "المشكلة",
    "theSolution": "الحل",
    "hwSoftwareTitle": "الأجهزة + البرمجيات",
    "hwSoftwareSubtitle": "تعمل منتجات Openterface بشكل أفضل مع تطبيقات المضيف مفتوحة المصدر.",
    "hardware": "الأجهزة",
    "software": "البرمجيات",
    "swFallback": "راجع TxA Shop للحصول على تفاصيل توافق الملحقات.",
    "keySpecs": "المواصفات الرئيسية",
    "useCases": "حالات الاستخدام",
    "documentation": "التوثيق",
    "ctaTitle": "هل أنت مستعد للبدء؟",
    "ctaSubtitle": "اطلب الأجهزة وحمّل تطبيق Openterface لمنصتك."
  }
};
