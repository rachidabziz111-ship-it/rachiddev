'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Link } from '@/lib/navigation' // التغيير الأهم كاين هنا 🚀
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const caseStudies = [
  {
    title: 'ecommerceRevolution',
    description: 'ecommerceDesc',
    image: '/assets/images/case-study-1.jpg',
    metrics: '+240% ROI',
    href: '/case-studies/ecommerce-revolution',
  },
  {
    title: 'fintechInnovation',
    description: 'fintechDesc',
    image: '/assets/images/case-study-2.jpg',
    metrics: '50K Users',
    href: '/case-studies/fintech-innovation',
  },
  {
    title: 'healthcareAi',
    description: 'healthcareDesc',
    image: '/assets/images/case-study-3.jpg',
    metrics: '98% Accuracy',
    href: '/case-studies/healthcare-ai',
  },
]

export default function CaseStudiesPreview() {
  const t = useTranslations('CaseStudiesPreview')

  return (
    <section className="py-24 bg-black">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/50 border-gold/20 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{t(study.title)}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {t(study.description)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-gold font-bold text-xl mb-4">
                    {study.metrics}
                  </div>
                  <Button asChild variant="link" className="text-gold p-0">
                    {/* دابا هاد اللينك غيزيد رمز اللغة بوحدو */}
                    <Link href={study.href}> 
                      {t('readMore')} →
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