'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const clients = [
  { name: 'Google', logo: '/assets/images/clients/google.svg' },
  { name: 'Microsoft', logo: '/assets/images/clients/microsoft.svg' },
  { name: 'Amazon', logo: '/assets/images/clients/amazon.svg' },
  { name: 'Meta', logo: '/assets/images/clients/meta.svg' },
  { name: 'Netflix', logo: '/assets/images/clients/netflix.svg' },
]

export default function TrustedBy() {
  const t = useTranslations('TrustedBy')

  return (
    <section className="py-16 bg-black/50">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400 text-sm uppercase tracking-wider mb-8">
          {t('title')}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={40}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}