"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Target, Award, Users, Globe } from 'lucide-react'

export default function AboutPage() {
  const t = useTranslations('About')

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto mb-12">
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">{t('storyTitle')}</h2>
            <p className="text-gray-300 mb-4">
              {t('story1')}
            </p>
            <p className="text-gray-300">
              {t('story2')}
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/assets/images/team-rachid.jpg"
              alt="Rachid Dev Team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-6 bg-black/50 rounded-lg border border-gold/20">
            <Target className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-white font-semibold text-xl mb-2">{t('mission')}</h3>
            <p className="text-gray-400 text-sm">{t('missionDesc')}</p>
          </div>
          <div className="text-center p-6 bg-black/50 rounded-lg border border-gold/20">
            <Award className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-white font-semibold text-xl mb-2">{t('vision')}</h3>
            <p className="text-gray-400 text-sm">{t('visionDesc')}</p>
          </div>
          <div className="text-center p-6 bg-black/50 rounded-lg border border-gold/20">
            <Users className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-white font-semibold text-xl mb-2">{t('values')}</h3>
            <p className="text-gray-400 text-sm">{t('valuesDesc')}</p>
          </div>
          <div className="text-center p-6 bg-black/50 rounded-lg border border-gold/20">
            <Globe className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-white font-semibold text-xl mb-2">{t('global')}</h3>
            <p className="text-gray-400 text-sm">{t('globalDesc')}</p>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="/booking">{t('cta')}</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}