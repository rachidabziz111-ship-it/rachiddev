import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers/Providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Chatbot from '@/components/Chatbot/Chatbot'

// هادا هو السطر لي بدلت ليك (باش يرجع الديزاين والألوان)
import '../globals.css' 

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rachid Dev - Premium Digital Agency',
  description: 'Global digital solutions for forward-thinking brands.',
  keywords: 'digital agency, web development, mobile apps, AI, marketing',
  authors: [{ name: 'Rachid Dev' }],
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }> // رديناها Promise
}) {
  // درنا await باش نجبدو اللغة بلا إيرور
  const { locale } = await params;
  
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Providers>
            <Header />
            <main className="min-h-screen pt-20">{children}</main>
            <Footer />
            <Chatbot />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}