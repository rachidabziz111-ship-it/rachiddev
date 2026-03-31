import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'fr'] as const;

// 1. كنعرفو الإعدادات ديال الروتاج (Routing)
export const routing = defineRouting({
  locales: locales,
  defaultLocale: 'en' // هادي هي اللغة الافتراضية، تقدر تردها 'fr' إيلا بغيتي
});

// 2. كنخرجو الدوال ديال النافيڭاسيون بالطريقة الجديدة
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);