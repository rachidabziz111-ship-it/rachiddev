"use client";
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'

const plans = [
  {
    name: 'starter',
    price: '$2,500',
    description: 'starterDesc',
    features: ['feature1', 'feature2', 'feature3'],
    cta: 'starterCta',
  },
  {
    name: 'professional',
    price: '$5,000',
    description: 'professionalDesc',
    features: ['feature1', 'feature2', 'feature3', 'feature4', 'feature5'],
    cta: 'professionalCta',
    popular: true,
  },
  {
    name: 'enterprise',
    price: 'Custom',
    description: 'enterpriseDesc',
    features: ['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6'],
    cta: 'enterpriseCta',
  },
]

export default function PricingPage() {
  const t = useTranslations('Pricing')

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`bg-black/50 border ${
                plan.popular ? 'border-gold shadow-lg shadow-gold/20' : 'border-gold/20'
              } relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl text-white">{t(plan.name)}</CardTitle>
                <CardDescription className="text-gray-400">
                  {t(plan.description)}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-gray-400">/project</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-300">
                      <Check className="w-4 h-4 text-gold" />
                      {t(feature)}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant={plan.popular ? 'secondary' : 'outline'} className="w-full">
                  <Link href="/booking">{t(plan.cta)}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  )
}