import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "المنتجات",
    href: '/products/',
    children: [
      { label: "جميع المنتجات", href: '/products/' },
      { label: 'KeyMod Series', href: '/keymod/' },
      { label: 'KVM-GO Series', href: '/kvmgo/' },
      { label: 'Mini-KVM', href: '/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/kvmext/' },
      { label: "الملحقات", href: '/accessories/' },
    ],
  },
  {
    label: "التطبيقات",
    href: '/app/',
    children: [
      { label: "جميع التطبيقات", href: '/app/' },
      { label: "تحكم KVM", href: '/kvm/' },
      { label: 'KeyCmd', href: '/keycmd/' },
    ],
  },
  { label: "الوسائط", href: '/videos/' },
  { label: "من نحن", href: '/about/' },
  { label: "التوثيق", href: docsPath(), external: true },
  { label: "الأخبار", href: newsPath(), external: true },
  { label: "المتجر", href: siteConfig.links.shop, external: true },
];
