import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'fr', 'ar'],
  defaultLocale: 'en'
});

export const config = {
  matcher: [
    // يراقب الباب الرئيسي
    '/',
    // يراقب الروابط لي فيها اللغات
    '/(en|fr|ar)/:path*',
    // يراقب كاع الروابط الأخرى باش يوجهها للنڭليزية (باستثناء الملفات الأساسية ديال السيت)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};