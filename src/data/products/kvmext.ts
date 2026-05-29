import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

const KVMEXT_SHOP =
  'https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole';

/**
 * KVM Extension (uConsole) marketing payload — Phase 1F flat landing at /kvmext/.
 * Sourced from docs/products/kvmext/ (index, features).
 */
export const kvmextProduct: Product = {
  slug: 'uconsole-kvm-extension',
  title: "ملحق uConsole KVM",
  slogan: "قوة KVM لجهاز uConsole الخاص بك",
  subtitle: "حوّل جهاز uConsole المحمول إلى محطة KVM كاملة.",
  status: 'oshwa',
  description:
    "ملحق أجهزة يضيف قدرة KVM-over-USB إلى جهاز Clockwork uConsole. مثالي لأعمال تكنولوجيا المعلومات المحمولة مع لوحة مفاتيح وشاشة مدمجتين.",
  seoDescription:
    "يضيف ملحق uConsole KVM قدرة KVM-over-USB إلى حاسوب Clockwork uConsole المحمول.",
  keywords:
    "uConsole, ملحق KVM, KVM محمول, Clockwork uConsole",
  heroImage:
    'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
  heroImages: [
    'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    'https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension.webp',
  ],
  buyLabel: "اعرف المزيد",
  buyHref: KVMEXT_SHOP,
  painPoints: [
    "تفتقر وحدات التحكم المحمولة إلى KVM مدمج للأجهزة عديمة الشاشة",
    "يرغب الفنيون الميدانيون في جهاز واحد لكل المهام",
  ],
  solutions: [
    "لوحة تمديد بتصميم أصلي يتناسب مع جهاز uConsole",
    "مكدس Openterface KVM الكامل على جهاز بحجم الجيب",
  ],
  hwFeatures: [
    { title: "متوافق أصلاً مع uConsole", description: "مصمم خصيصاً لجهاز Clockwork uConsole." },
    { title: "لوحة دوائر مطبوعة مدمجة", description: "يتم تثبيتها داخل هيكل uConsole." },
  ],
  swFeatures: [
    { title: "تطبيقات Openterface", description: "نفس البرمجيات الموثوقة المستخدمة في Mini-KVM وKVM-GO." },
    { title: "أدلة الإعداد", description: "وثائق تثبيت الأجهزة والبرمجيات خطوة بخطوة." },
  ],
  specs: [
    { label: "التوافق", value: "Clockwork uConsole" },
    { label: "الشهادة", value: "معتمد من OSHWA" },
  ],
  useCases: [
    "أداة مراكز البيانات المحمولة",
    "صناع المحتوى والمختبرات المنزلية أثناء التنقل",
  ],
  useCaseCards: [
    {
      title: 'Portable datacenter tool',
      description: 'Walk racks with your uConsole — one device for display, keyboard, and KVM.',
      href: docsPath('/products/kvmext/'),
    },
    {
      title: 'Maker & homelab on the go',
      description: 'Configure headless SBCs, NAS nodes, and lab gear from a pocketable console.',
      href: docsPath('/products/kvmext/features/'),
    },
    {
      title: 'Field IT & MSP visits',
      description: 'BIOS access and quick fixes without hauling a crash cart.',
    },
    {
      title: 'Network-free troubleshooting',
      description: 'When the target has no IP — HDMI + HID still works.',
      href: docsPath('/products/kvmext/connect-to-target/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmext/'),
  specsDocsHref: docsPath('/products/kvmext/features/'),
  docsOverviewHref: docsPath('/products/kvmext/'),
  videoProductSlug: 'uconsole-kvm-extension',
  videoSectionTitle: 'Installation & community demos',
  latestNewsHref: `${siteConfig.links.news}/products/kvmext/2025-08-28-oshwa-certification/`,
  latestNewsTitle: 'OSHWA certification achieved',
  latestNewsSubtitle: 'Official Open Source Hardware Association certification for the uConsole KVM Extension.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "تثبيت الأجهزة", href: docsPath("/product/uconsole-kvm-extension/hardware-installation/") },
    { label: "إعداد البرمجيات", href: docsPath("/product/uconsole-kvm-extension/software-setup/") },
    { label: "كيفية الاتصال", href: docsPath("/product/uconsole-kvm-extension/connect-to-target/") },
    { label: "الأسئلة الشائعة", href: docsPath("/product/uconsole-kvm-extension/faq/") },
  ],
  legacyBase: "/products/uconsole-kvm-extension/",
};
