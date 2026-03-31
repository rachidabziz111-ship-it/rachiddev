'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
// التغيير لي درنا هو هاد السطر: حيدنا Link ديال next وجبنا Link ديال next-intl
import { Link } from '@/lib/navigation' 
import { useTranslations } from 'next-intl'
import { Code, Smartphone, Globe, BarChart, Users, Shield } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'webDevelopment',
    description: 'webDevelopmentDesc',
    href: '/services/web-development',
  },
  {
    icon: Smartphone,
    title: 'mobileApps',
    description: 'mobileAppsDesc',
    href: '/services/mobile-apps',
  },
  {
    icon: Globe,
    title: 'digitalMarketing',
    description: 'digitalMarketingDesc',
    href: '/services/digital-marketing',
  },
  {
    icon: BarChart,
    title: 'dataAnalytics',
    description: 'dataAnalyticsDesc',
    href: '/services/data-analytics',
  },
  {
    icon: Users,
    title: 'consulting',
    description: 'consultingDesc',
    href: '/services/consulting',
  },
  {
    icon: Shield,
    title: 'cybersecurity',
    description: 'cybersecurityDesc',
    href: '/services/cybersecurity',
  },
]

export default function ServicesPreview() {
  const t = useTranslations('ServicesPreview')

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/50 border-gold/20 hover:border-gold/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <service.icon className="w-6 h-6 text-gold" />
                  </div>
                  <CardTitle className="text-white text-xl">
                    {t(service.title)}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {t(service.description)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="text-gold p-0">
                    <Link href={service.href}>
                      {t('learnMore')} →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}