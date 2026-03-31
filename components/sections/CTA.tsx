'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function CTA() {
  const t = useTranslations('CTA')

  return (
    <section className="py-24 bg-gradient-to-r from-gold/10 to-black">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            {t('description')}
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Link href="/booking">{t('button')}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}