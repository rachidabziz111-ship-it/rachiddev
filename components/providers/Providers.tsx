// components/providers/Providers.tsx
'use client'

import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
// import { AnalyticsTracker } from '@/components/analytics/AnalyticsTracker' // غنحبسو هادي مؤقتا حيت باقي ماصايبناهاش

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      {children}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid #D4AF37',
          },
          success: {
            iconTheme: {
              primary: '#D4AF37',
              secondary: '#000',
            },
          },
          error: {
            iconTheme: {
              primary: '#ff4444',
              secondary: '#fff',
            },
          },
        }}
      />
      {/* <AnalyticsTracker /> */}
    </SessionProvider>
  )
}