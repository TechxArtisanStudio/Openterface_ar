import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KeyMod marketing payload — Phase 1E flat landing at /keymod/.
 * Sourced from docs/products/keymod/ (index, features, use-cases).
 */
export const keymodProduct: Product = {
  slug: 'keymod',
  title: "سلسلة Openterface KeyMod",
  slogan: "حوّل هاتفك إلى لوحة مفاتيح ذكية",
  subtitle: "تحكم قابل للبرمجة بلوحة المفاتيح والماوس للتقنيين والمحترفين والألعاب.",
  status: 'pre-launch',
  description:
    "محاكي USB + Bluetooth HID مدمج وقابل للبرمجة يحول هاتفك إلى وحدة تحكم بلوحة مفاتيح ولوحة تتبع محمولة. مبني على نواة HID المجربة من Openterface Mini-KVM — يعمل فور التوصيل، ومفتوح المصدر بنسبة 100%.",
  seoDescription:
    "تحول سلسلة KeyMod هاتفك إلى لوحة مفاتيح ولوحة تتبع محمولة. محاكي USB + Bluetooth HID، مفتوح المصدر، مثالي لأجهزة الخدمة الذاتية واختصارات سير العمل.",
  keywords:
    "KeyMod, محاكي HID, لوحة مفاتيح للهاتف, لوحة مفاتيح Bluetooth, لوحة مفاتيح USB, مفتوح المصدر",
  heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
  heroImages: [
    'https://assets2.openterface.com/images/keymod/2in1.webp',
    'https://assets2.openterface.com/images/keymod/keymod.webp',
    'https://assets2.openterface.com/images/keymod/feature.webp',
  ],
  buyLabel: "ادعم الآن",
  buyHref: siteConfig.links.keymodCrowdsupply,
  painPoints: [
    "حمل لوحة مفاتيح كاملة لإعداد أجهزة الخدمة الذاتية أو التلفزيون أمر غير عملي",
    "تتطلب اختصارات سير العمل وحدات ماكرو قابلة للبرمجة أثناء التنقل",
    "العديد من أدوات HID مغلقة المصدر وتوفر خيارات تخصيص محدودة",
  ],
  solutions: [
    "استخدم هاتفك كلوحة مفاتيح ولوحة تتبع محمولة",
    "HID عبر USB وBluetooth في جهاز مدمج واحد",
    "مفتوح المصدر بنسبة 100% مع دعم تطبيق Openterface",
  ],
  hwFeatures: [
    { title: "تصميم مدمج", description: "يناسب جيبك للعمل الميداني والسفر." },
    { title: "USB + Bluetooth", description: "اتصال مزدوج لأقصى توافق مع الأجهزة." },
    { title: "أجهزة مفتوحة المصدر", description: "تصميم شفاف مبني على نواة Openterface HID المجربة." },
  ],
  swFeatures: [
    { title: "تطبيق KeyMod", description: "قم بتكوين وحدات الماكرو والتخطيطات وملفات تعريف لوحة الألعاب من هاتفك." },
    { title: "متعدد المنصات", description: "يعمل مع Android وiPadOS وأجهزة سطح المكتب عبر تطبيقات Openterface." },
    { title: "مفتوح المصدر", description: "المكدس الكامل متاح على GitHub لمساهمات المجتمع." },
  ],
  specs: [
    { label: "الاتصال", value: "USB-C + Bluetooth LE" },
    { label: "أوضاع HID", value: "لوحة مفاتيح، ماوس، لوحة ألعاب" },
    { label: "الترخيص", value: "أجهزة وبرمجيات مفتوحة المصدر" },
  ],
  useCases: [
    "إدخال البيانات للتلفزيون الذكي وأجهزة الخدمة الذاتية",
    "وحدات ماكرو لسير العمل المتنقل",
    "إعدادات الألعاب وإمكانية الوصول",
  ],
  useCaseCards: [
    {
      title: 'Outdoor display computers',
      description: 'Configure and troubleshoot outdoor PCs without carrying a keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'LED signage players',
      description: 'On-site updates to signage controllers — phone as full keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Kiosks',
      description: 'Debug, configure, or maintain kiosks with immediate HID access.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Smart TVs & set-top boxes',
      description: 'Full keyboard and trackpad when the remote is not enough.',
    },
    {
      title: 'Quick workflow shortcuts',
      description: 'Developers and IT staff — occasional input without extra gear.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Portable & plug-and-play',
      description: 'Your phone is always with you; KeyMod stays compact in your bag.',
    },
  ],
  useCasesDocsHref: docsPath('/keymod/use-cases/'),
  specsDocsHref: docsPath('/keymod/features/'),
  docsOverviewHref: docsPath('/keymod/'),
  videoProductSlug: 'keymod',
  videoSectionTitle: 'Community reviews & demos',
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KeyMod updates',
  latestNewsSubtitle: 'Beta releases, app updates, and pre-launch news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "الميزات", href: docsPath("/product/keymod/features/") },
    { label: "محتويات العلبة", href: docsPath("/product/keymod/whats-in-the-box/") },
    { label: "كيفية الاتصال", href: docsPath("/product/keymod/how-to-connect/") },
    { label: "الأسئلة الشائعة", href: docsPath("/product/keymod/faq/") },
    { label: "تحميل تطبيق KeyMod", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/keymod/",
};
