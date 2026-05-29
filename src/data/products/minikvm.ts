import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * Mini-KVM marketing payload — reference template for Phase 1D–1G.
 * Sourced from docs/products/minikvm/ (index, features, reviews).
 */
export const minikvmProduct: Product = {
  slug: 'minikvm',
  title: "Openterface Mini-KVM",
  slogan: "حوّل حاسوبك المحمول إلى وحدة تحكم KVM",
  subtitle: "بسّط حياتك التقنية.",
  status: 'shipping',
  description:
    "حل KVM-over-USB يعمل فور التوصيل. تحكم في جهاز كمبيوتر قريب عديم الشاشة من حاسوبك المحمول باستخدام USB وHDMI — دون الحاجة إلى أجهزة طرفية إضافية أو شبكة.",
  seoDescription:
    "Openterface Mini-KVM: جهاز KVM-over-USB يعمل فور التوصيل مع HDMI. تحكم في أجهزة الكمبيوتر عديمة الشاشة من حاسوبك المحمول دون الحاجة إلى شبكة.",
  keywords:
    "Mini-KVM, KVM عبر USB, التحكم عديم الشاشة, KVM عبر HDMI, KVM يعمل فور التوصيل",
  heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    'https://assets.openterface.com/images/cover/mini-kvm.webp',
  ],
  buyLabel: "اطلب الآن",
  buyHref: siteConfig.links.minikvmPurchase,
  funding: { amount: "$505,471", date: "تم التمويل في 13 يونيو 2024", backers: "3,775" },
  painPoints: [
    "حمل شاشة ولوحة مفاتيح لإصلاح كل خادم أمر غير عملي",
    "يتطلب KVM عبر الشبكة إعدادات واتصالاً مستقراً",
    "يحتاج محترفو تكنولوجيا المعلومات إلى جهاز KVM موثوق بحجم الجيب يومياً",
  ],
  solutions: [
    "استخدم حاسوبك المحمول الحالي كوحدة تحكم KVM",
    "التقاط HDMI + USB HID في جهاز مدمج واحد",
    "مجرب ومعتمد من قبل أكثر من 5,000 عضو في المجتمع منذ عام 2024",
  ],
  hwFeatures: [
    { title: "التقاط HDMI", description: "فيديو كامل من الجهاز المستهدف إلى حاسوبك المحمول المضيف." },
    { title: "مفتاح USB", description: "تبديل أجهزة USB بين الجهاز المضيف والمستهدف." },
    { title: "دبابيس التمديد", description: "خيارات تعديل الأجهزة والتكامل المخصص." },
  ],
  swFeatures: [
    { title: "تطبيقات Qt / macOS / Android", description: "تطبيقات أصلية لكل منصة مضيفة رئيسية." },
    { title: "مفتوح المصدر", description: "نظام بيئي كامل للأجهزة والبرمجيات مفتوحة المصدر." },
    { title: "مجتمع نشط", description: "Discord وGitHub وتحديثات منتظمة للبرامج الثابتة." },
  ],
  specs: [
    { label: "مدخل الفيديو", value: "HDMI" },
    { label: "USB", value: "USB-C مع منفذ قابل للتبديل" },
    { label: "الحالة", value: "متاح للشحن — Crowd Supply" },
  ],
  useCases: [
    "إدارة المختبرات المنزلية",
    "التحكم الجانبي في محطات عمل المطورين",
    "استكشاف الأخطاء وإصلاحها على منضدة تكنولوجيا المعلومات",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with the laptop you already carry.',
      href: docsPath('/minikvm/reviews/'),
    },
    {
      title: 'Homelab & SBC setup',
      description: 'Configure headless Raspberry Pi, NAS, and lab nodes from one laptop.',
    },
    {
      title: 'BIOS & firmware access',
      description: 'Reach boot menus and recovery screens with no network KVM required.',
      href: docsPath('/minikvm/features/'),
    },
    {
      title: 'Developer bench',
      description: 'Side-by-side host/target control without a second monitor.',
    },
    {
      title: 'Kiosk & embedded systems',
      description: 'Field configuration for displays, signage, and appliances.',
    },
    {
      title: 'MSP field toolkit',
      description: 'Quick headless access on customer sites — fast, offline-capable, pocket-sized.',
      href: docsPath('/minikvm/reviews/'),
    },
  ],
  useCasesDocsHref: docsPath('/minikvm/'),
  specsDocsHref: docsPath('/minikvm/features/'),
  docsOverviewHref: docsPath('/minikvm/'),
  videoProductSlug: 'minikvm',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What reviewers & testers say',
  socialProof: [
    {
      quote:
        'Promises to be a low cost, feature packed way to use a laptop as a monitor, keyboard and mouse for accessing servers and other computers.',
      author: 'Cameron Gray — YouTube review',
      href: 'https://www.youtube.com/watch?v=xAEQpWyfY-c',
    },
    {
      quote:
        'A simple gadget concept that has a permanent home on my test bench, turning my laptop into my display, keyboard, and mouse.',
      author: "apalrd's adventures",
      href: 'https://www.youtube.com/watch?v=ZZ5P6MnBcHw',
    },
    {
      quote:
        'Plug-and-play and network-independent KVM-over-USB that establishes a direct HDMI and USB connection between host and target.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2024/05/09/openterface-mini-kvm-affordable-kvm-over-usb-device/',
    },
    {
      quote:
        "In datacenters it's cool that this totally replaces a crash cart using the laptop you'd already have with you!",
      author: 'samw — tinytoolk.it',
      href: 'https://tinytoolk.it/tools/openterface-kvm/',
    },
    {
      quote:
        'Latency is definitely better than using VNC… Overall a very solid device, it has been a very worthy addition to my daily carry toolkit.',
      author: '65Diamond — r/msp',
      href: 'https://www.reddit.com/r/msp/comments/1j2dlde/comment/mju6uru/',
    },
    {
      quote:
        'An extremely useful tool… The hardware is more than solid and the toolbox also contains all the accessories you need.',
      author: 'Florian Bernd — beta tester',
      href: 'https://blog.flobernd.de/2024/06/openterface-beta-test/',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest Mini-KVM updates',
  latestNewsSubtitle: 'Firmware releases, app updates, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "الميزات", href: docsPath("/product/minikvm/features/") },
    { label: "مفتاح USB", href: docsPath("/product/minikvm/usb-switch/") },
    { label: "الدعم الفني", href: docsPath("/product/minikvm/support/") },
    { label: "الأسئلة الشائعة", href: docsPath("/product/minikvm/faq/") },
    { label: "تحميل التطبيق", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/minikvm/",
};
