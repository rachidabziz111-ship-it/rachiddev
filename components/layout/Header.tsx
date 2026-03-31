'use client'

import { useState, useEffect } from 'react'
// 🚀 التعديل الأهم: جبنا Link و usePathname من ملف الـ navigation ديالكم ماشي ديال Next.js العادي
import { Link, usePathname } from '@/lib/navigation' 
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
// تأكد من المسار ديال Button واش هو هادا عندك
import { Button } from '@/components/ui/button' 
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslations } from 'next-intl'

const navItems = [
  { href: '/', label: 'home' },
  { href: '/services', label: 'services' },
  { href: '/case-studies', label: 'caseStudies' },
  { href: '/about', label: 'about' },
  { href: '/blog', label: 'blog' },
  { href: '/pricing', label: 'pricing' },
  { href: '/contact', label: 'contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // دابا usePathname غيخدم مزيان مع اللغات وغايبين ليك الصفحة فين نتا باللون الذهبي
  const pathname = usePathname()
  const t = useTranslations('Navigation')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image 
            src="/assets/images/logo.png" 
            alt="Rachid Dev Logo" 
            width={45} 
            height={45} 
            className="object-contain"
            priority
          />
          <span className="text-white font-bold text-2xl tracking-tight">
            Rachid Dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                pathname === item.href ? 'text-gold' : 'text-white'
              }`}
            >
              {t(item.label)}
            </Link>
          ))}
          <LanguageSwitcher />
          <Button asChild variant="secondary">
            <Link href="/booking">{t('bookConsultation')}</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-gold ${
                    pathname === item.href ? 'text-gold' : 'text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(item.label)}
                </Link>
              ))}
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
              <Button asChild variant="secondary" className="w-full">
                <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
                  {t('bookConsultation')}
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}