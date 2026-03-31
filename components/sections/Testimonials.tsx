'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { useTranslations } from 'next-intl'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    content: 'testimonial1',
    rating: 5,
    avatar: '/assets/images/avatar-1.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'CTO, InnovateLabs',
    content: 'testimonial2',
    rating: 5,
    avatar: '/assets/images/avatar-2.jpg',
  },
  {
    name: 'Emma Davis',
    role: 'Marketing Director, GlobalBrand',
    content: 'testimonial3',
    rating: 5,
    avatar: '/assets/images/avatar-3.jpg',
  },
]

export default function Testimonials() {
  const t = useTranslations('Testimonials')

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/50 border-gold/20">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{t(testimonial.content)}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonial */}
        <div className="mt-16 max-w-4xl mx-auto">
          <video controls className="w-full rounded-lg shadow-2xl">
            <source src="/assets/videos/testimonial-video-01.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}