import { useTranslations } from 'next-intl'
import { Link } from '@/lib/navigation'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CalendarDays, User } from 'lucide-react'

// تعريف نوع البيانات (يمكن استيراده من ملف منفصل)
type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  imageUrl: string
  author: string
  publishedAt: string
}

// استيراد البيانات (افترض وجود ملف data/blog.json)
import blogData from '@/data/blog.json'

export const metadata = {
  title: 'Blog - Rachid Dev',
  description: 'Insights, tutorials, and industry trends from Rachid Dev experts.',
}

export default function BlogPage() {
  const t = useTranslations('Blog')
  const posts: BlogPost[] = blogData.posts || blogData // حسب هيكل ملفك

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.id} className="bg-black/50 border-gold/20 overflow-hidden group transition-all hover:border-gold/50">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.imageUrl || '/assets/images/default-blog.jpg'}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
              </div>
              <CardTitle className="text-white text-xl line-clamp-2">
                {post.title}
              </CardTitle>
              <CardDescription className="text-gray-400 line-clamp-3">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild variant="link" className="text-gold p-0">
                <Link href={`/blog/${post.slug}`}>
                  {t('readMore')} →
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}