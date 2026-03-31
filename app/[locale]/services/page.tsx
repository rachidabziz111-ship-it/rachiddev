import  servicesData  from '@/data/services.json'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function ServicesPage() {
  const t = useTranslations('Services')

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
        {t('title')}
      </h1>
      <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto mb-12">
        {t('subtitle')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service:any) => (
          <Card key={service.id} className="bg-black/50 border-gold/20">
            <CardHeader>
              <CardTitle className="text-white">{service.title}</CardTitle>
              <CardDescription className="text-gray-400">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="link" className="text-gold p-0">
                <Link href={`/services/${service.slug}`}>
                  Learn More →
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}