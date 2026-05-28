import { siteConfig } from '../config/site';

export interface HomeSlide {
  id: number;
  category: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  images?: string[];
  primaryCta?: {
    label: string;
    href: string;
    external?: boolean;
    analyticsEvent?: string;
    analyticsProduct?: string;
  };
  secondaryCta?: { label: string; href: string; external?: boolean };
  funding?: { amount: string; date: string; backers: string };
  progressSmall: string;
  progressLarge: string;
}

export const homeSlides: HomeSlide[] = [
  {
    id: 1,
    category: 'KeyMod Series',
    headline: 'حوّل هاتفك الذكي إلى لوحة مفاتيح صغيرة',
    description:
      'محاكي USB + Bluetooth HID مدمج يحوّل هاتفك إلى لوحة مفاتيح ولوحة لمس محمولة. Plug-and-play، مفتوح المصدر بالكامل. مثالي للأكشاك وأجهزة Smart TV واختصارات سير العمل السريعة.',
    image: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    imageAlt: 'Openterface KeyMod Series',
    images: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    primaryCta: { label: 'ادعم الآن', href: siteConfig.links.keymodCrowdsupply, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'keymod' },
    secondaryCta: { label: 'عرض المنتج', href: '/keymod/' },
    progressSmall: 'KeyMod Series',
    progressLarge: 'هاتف كلوحة مفاتيح',
  },
  {
    id: 2,
    category: 'KVM-GO Series',
    headline: 'KVM فائق الصغر على سلسلة المفاتيح',
    description:
      'مصمم ليبقى معك دائماً وينقذك في اللحظة الحرجة. KVM-over-USB من الجيل التالي لعمليات IT السريعة في الميدان.',
    image: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    imageAlt: 'KVM-GO Series',
    images: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    primaryCta: { label: 'اطلب مسبقاً', href: siteConfig.links.kvmgoPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'kvm-go' },
    secondaryCta: { label: 'عرض المنتج', href: '/kvmgo/' },
    funding: { amount: '$101,548', date: 'Funded on Dec 30, 2025', backers: '478' },
    progressSmall: 'KVM-GO Series',
    progressLarge: 'KVM على سلسلة المفاتيح',
  },
  {
    id: 3,
    category: 'Mini-KVM Series',
    headline: 'حل KVM مدمج للمحترفين',
    description:
      'حل KVM-over-USB مفتوح المصدر مدمج وغني بالميزات يبسّط مهام IT اليومية واستكشاف الأعطال.',
    image: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    imageAlt: 'Openterface Mini-KVM',
    images: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    primaryCta: { label: 'اطلب الآن', href: siteConfig.links.minikvmPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'minikvm' },
    secondaryCta: { label: 'عرض المنتج', href: '/minikvm/' },
    funding: { amount: '$505,471', date: 'Funded on Jun 13, 2024', backers: '3,775' },
    progressSmall: 'Mini-KVM Series',
    progressLarge: 'KVM للمحترفين',
  },
  {
    id: 4,
    category: 'TxA Shop',
    headline: 'أكمل إعدادك بملحقات متميزة',
    description:
      'اكتشف ملحقاتنا الأساسية: محولات الفيديو وكابلات عالية السرعة وحلول التخزين. حسّن تجربة Openterface بمعدات احترافية.',
    image: 'https://assets.openterface.com/images/cover.webp',
    imageAlt: 'TxA Shop Accessories',
    primaryCta: { label: 'تسوق الآن', href: siteConfig.links.shop, external: true, analyticsEvent: 'shop_click', analyticsProduct: 'accessories' },
    secondaryCta: { label: 'عرض الملحقات', href: '/accessories/' },
    progressSmall: 'TxA Shop',
    progressLarge: 'ملحقات متميزة',
  },
];

export const homeSeo = {
  title: 'Openterface | حلول KVM فائقة الصغر لمحترفي IT',
  description:
    'Openterface — حلول KVM-over-USB فائقة الصغر: KVM-GO Series (بحجم مفتاح)، Mini-KVM Series و uConsole KVM Extension.',
  keywords:
    'KVM-over-USB, KVM switch, portable KVM, USB KVM, headless server management, KVM-GO, Mini-KVM, KeyMod',
};
