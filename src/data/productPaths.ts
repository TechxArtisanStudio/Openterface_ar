/** Flat marketing URLs from slug-map SSOT (legacy nested slugs → short paths). */
export const PRODUCT_FLAT_PATHS: Record<string, string> = {
  keymod: '/keymod/',
  'kvm-go': '/kvmgo/',
  minikvm: '/minikvm/',
  'uconsole-kvm-extension': '/kvmext/',
  accessories: '/accessories/',
};

export const productsHubOrder = [
  'keymod',
  'kvm-go',
  'minikvm',
  'uconsole-kvm-extension',
  'accessories',
] as const;

export function productFlatPath(slug: string): string {
  return PRODUCT_FLAT_PATHS[slug] ?? `/products/${slug}/`;
}

export const productsHubSeo = {
  title: 'المنتجات',
  description:
    'أجهزة KVM-over-USB فائقة الصغر وتطبيقات مفتوحة المصدر لمحترفي IT والمطورين وصناع المحتوى.',
  keywords: 'منتجات Openterface, KeyMod, KVM-GO, Mini-KVM, KVM Extension, ملحقات, تطبيق KVM',
};
