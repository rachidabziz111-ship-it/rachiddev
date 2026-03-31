import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // 1. كنجيبو اللغة من الطلب
  let locale = await requestLocale;

  // 2. إيلا السيت مالقاش اللغة (undefined)، كنعطيوه النڭليزية باش مايطيحش الإيرور
  if (!locale) {
    locale = 'en';
  }

  // 3. كنرجعو اللغة والملف ديالها
  return {
    locale, // هادي ضرورية باش مايطلعش ليك إيرور ديال Typescript
    messages: (await import(`../messages/${locale}.json`)).default
  };
});