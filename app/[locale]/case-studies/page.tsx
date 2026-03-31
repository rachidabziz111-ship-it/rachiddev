"use client";
// حيدنا السطر ديال prisma وعوضناه بـ JSON
import caseStudiesData from '@/data/case-studies.json' 
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default async function CaseStudiesPage() {
  // دابا كنجيبو الداتا نيشان من ملف الجيسون بلاصة قاعدة البيانات
  const caseStudies = caseStudiesData
  
  const t = useTranslations('CaseStudies')

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
        {t('title')}
      </h1>
      <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto mb-12">
        {t('subtitle')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study: any) => (
          // درنا study.slug بلاصة study.id حيت فالجيسون غالبا كاين غير slug
          <Card key={study.slug || study.id} className="bg-black/50 border-gold/20 overflow-hidden group">
            <div className="relative h-48">
              <Image
                // رديناها تقبل image ولا imageUrl على حساب شنو مسمينها فـ JSON
                src={study.image || study.imageUrl || '/assets/images/placeholder.jpg'}
                alt={study.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-white">{study.title}</CardTitle>
              <CardDescription className="text-gray-400">
                {study.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-gold font-bold mb-4">
                {/* إلى مكانش roi كيعرض أول نتيجة من النتائج أو جملة افتراضية */}
                {study.metrics?.roi || study.results?.[0] || 'See results'}
              </div>
              <Button asChild variant="link" className="text-gold p-0">
                <Link href={`/case-studies/${study.slug}`}>
                  Read Case Study →
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}