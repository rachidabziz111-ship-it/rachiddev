// hooks/useAnalytics.ts
'use client'

import { useCallback } from 'react'
window.gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export function useAnalytics() {
  const trackEvent = useCallback(
    (eventName: string, properties?: Record<string, any>) => {
      // إرسال الحدث إلى Google Analytics (إذا تم تحميل gtag)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, properties)
      }

      // إرسال الحدث إلى الخادم الخاص بك لتخزينه في قاعدة البيانات
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventName, properties }),
      }).catch(console.error) // تجاهل أخطاء الشبكة
    },
    []
  )

  const trackPageView = useCallback(
    (page: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
          page_path: page,
        })
      }

      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventName: 'page_view', properties: { page } }),
      }).catch(console.error)
    },
    []
  )

  return { trackEvent, trackPageView }
}