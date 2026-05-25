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
  }
};
