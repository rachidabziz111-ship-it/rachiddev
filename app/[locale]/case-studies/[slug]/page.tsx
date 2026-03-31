import { notFound } from 'next/navigation'
import caseStudiesData from '@/data/case-studies.json' // رجعناها تقرا من JSON
import { Button } from '@/components/ui/button'
import { Link } from '@/lib/navigation'
import { CheckCircle, Activity, ShieldCheck, Zap, ArrowRight, TrendingUp, Users, Clock } from 'lucide-react'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string; locale: string }>
}

// دابا كنجيبو الداتا من JSON ماشي من Prisma
async function getCaseStudy(slug: string) {
  return caseStudiesData.find((study) => study.slug === slug)
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  // هاد المتركس درتهم كأمثلة، يقدر تزيدهم فـ JSON من بعد
  const metrics = {
    roi: "240%",
    users: "50K",
    growth: "3x"
  }

  return (
    <div className="min-h-screen bg-[#030305] overflow-hidden selection:bg-gold/30 selection:text-gold pb-32 font-sans relative">

      {/* 🌌 الفضاء السحيق: خلفية النجوم والسدم */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-indigo-900/10 blur-[180px] rounded-full"></div>
      </div>

      {/* 🚀 قسم الهيرو (Hero Section) */}
      <section className="relative pt-40 pb-20 px-4 z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm font-medium tracking-widest mb-8 uppercase backdrop-blur-md shadow-[0_0_20px_rgba(255,215,0,0.1)]">
          <Activity className="w-4 h-4 animate-pulse" /> قصة نجاح: {caseStudy.client}
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 mb-8 tracking-tighter drop-shadow-2xl hover:scale-105 transition-transform duration-700">
          {caseStudy.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          {caseStudy.description}
        </p>
      </section>

      <section className="relative z-10 container mx-auto px-4 max-w-6xl">
        
        {/* صورة المشروع (Holographic Image) */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,215,0,0.1)] mb-20 group">
          <div className="absolute inset-0 bg-gold/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
          <Image 
            src={caseStudy.image || "/assets/images/placeholder.jpg"} 
            alt={caseStudy.title} 
            fill 
            className="object-cover transform group-hover:scale-105 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
          />
          <div className="absolute bottom-4 left-6 z-20 text-white font-mono text-sm tracking-widest opacity-50">SYSTEM.LOG // SUCCESS_OVERRIDE</div>
        </div>

        {/* المقاييس السريعة (Metrics Cards Sci-Fi Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-black/50 backdrop-blur-md border border-white/10 hover:border-gold/30 rounded-2xl p-8 text-center transition-all duration-300 group hover:-translate-y-2">
            <TrendingUp className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <div className="text-4xl font-black text-white mb-2">{metrics.roi}</div>
            <div className="text-gray-400 font-light tracking-wider">زيادة في العائد</div>
          </div>
          <div className="bg-black/50 backdrop-blur-md border border-white/10 hover:border-gold/30 rounded-2xl p-8 text-center transition-all duration-300 group hover:-translate-y-2">
            <Users className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <div className="text-4xl font-black text-white mb-2">{metrics.users}</div>
            <div className="text-gray-400 font-light tracking-wider">مستخدم نشط</div>
          </div>
          <div className="bg-black/50 backdrop-blur-md border border-white/10 hover:border-gold/30 rounded-2xl p-8 text-center transition-all duration-300 group hover:-translate-y-2">
            <Clock className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <div className="text-4xl font-black text-white mb-2">{metrics.growth}</div>
            <div className="text-gray-400 font-light tracking-wider">نمو قياسي</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* التحدي والحل */}
          <div className="space-y-12">
            <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
              <div className="absolute -left-4 -top-4 bg-black border border-red-500/30 p-3 rounded-2xl shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                <ShieldCheck className="text-red-500 w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 ml-6">التحدي</h3>
              <p className="text-gray-400 text-xl leading-relaxed font-light">{caseStudy.challenge}</p>
            </div>
            
            <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-gold/20 hover:border-gold/50 transition-all shadow-[0_0_30px_rgba(255,215,0,0.05)] group">
              <div className="absolute -right-4 -top-4 bg-black border border-gold/50 p-3 rounded-2xl shadow-[0_0_20px_rgba(255,215,0,0.3)] group-hover:scale-110 transition-transform">
                <Zap className="text-gold w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 mr-6">الحل الخوارزمي</h3>
              <p className="text-gray-400 text-xl leading-relaxed font-light">{caseStudy.solution}</p>
            </div>
          </div>

          {/* النتائج (الأرقام كتهضر) */}
          <div className="sticky top-24 p-10 rounded-3xl border border-gold/20 bg-gradient-to-b from-black/80 to-black/40 backdrop-blur-2xl shadow-[0_0_50px_-15px_rgba(255,215,0,0.15)]">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-10 border-b border-white/10 pb-6">
              نتائج المصفوفة
            </h3>
            <ul className="space-y-8">
              {caseStudy.results?.map((result: string, index: number) => (
                <li key={index} className="flex items-start gap-5 group">
                  <div className="relative mt-1">
                    <div className="absolute inset-0 bg-gold rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <CheckCircle className="relative w-6 h-6 text-gold bg-black rounded-full" />
                  </div>
                  <span className="text-gray-300 text-xl font-light group-hover:text-white transition-colors duration-300">{result}</span>
                </li>
              ))}
            </ul>

            <div className="mt-16 pt-8 border-t border-white/10">
              <Button asChild className="w-full relative group bg-gold text-black hover:bg-white transition-all duration-500 text-xl py-8 rounded-2xl overflow-hidden shadow-[0_0_30px_-5px_rgba(255,215,0,0.4)] hover:shadow-[0_0_50px_-5px_rgba(255,255,255,0.6)]">
                {/* 🚀 التعديل تدار هنا: بدلنا /contact بـ /booking */}
                <Link href="/booking">
                  <span className="relative z-10 font-black flex items-center justify-center gap-3">
                    احصل على نتائج مشابهة <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </section>
      
    </div>
  )
}