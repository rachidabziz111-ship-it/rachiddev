import Hero from '@/components/sections/Hero'
import TrustedBy from '@/components/sections/TrustedBy'
import ServicesPreview from '@/components/sections/ServicesPreview'
import CaseStudiesPreview from '@/components/sections/CaseStudiesPreview'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesPreview />
      <CaseStudiesPreview />
      <Testimonials />
      <CTA />
    </>
  )
}