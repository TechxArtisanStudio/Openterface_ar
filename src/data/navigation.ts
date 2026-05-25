import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: 'المنتجات',
    href: '#',
    children: [
      { label: 'KeyMod Series', href: '/products/keymod/' },
      { label: 'KVM-GO Series', href: '/products/kvm-go/' },
      { label: 'Mini-KVM', href: '/products/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/products/uconsole-kvm-extension/' },
      { label: 'الملحقات', href: '/products/accessories/' },
    ],
  },
  { label: 'الفيديو', href: '/videos/' },
  { label: 'حالات الاستخدام', href: '/use-cases/' },
  { label: 'عن Openterface', href: '/about/' },
  { label: 'التوثيق', href: docsPath(), external: true },
  { label: 'الأخبار', href: newsPath(), external: true },
  { label: 'المتجر', href: siteConfig.links.shop, external: true },
];
