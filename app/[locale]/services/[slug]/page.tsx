import { notFound } from 'next/navigation'
import servicesData from '@/data/services.json'
import { Button } from '@/components/ui/button'
import { Link } from '@/lib/navigation'
import { CheckCircle, Hexagon, Fingerprint, Zap, Rocket, ShieldAlert } from 'lucide-react'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string; locale: string }>
}

async function getService(slug: string) {
  return servicesData.find((service) => service.slug === slug)
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#030305] overflow-hidden selection:bg-gold/30 selection:text-gold pb-32 font-sans relative">

      {/* 🌌 الفضاء السحيق: خلفية النجوم والسدم (Nebulas) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* شبكة خفيفة جداً */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
        {/* سحب فضائية (Nebula glowing) */}
        <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-indigo-900/20 blur-[150px] rounded-full"></div>
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-gold/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-purple-900/20 blur-[180px] rounded-full"></div>
      </div>

      {/* 🚀 1. الهيرو (Hero Section) */}
      <section className="relative pt-40 pb-20 px-4 z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm font-medium tracking-widest mb-8 uppercase backdrop-blur-md shadow-[0_0_20px_rgba(255,215,0,0.1)]">
          <Zap className="w-4 h-4 animate-pulse" /> التحول الرقمي الحتمي
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 mb-8 tracking-tighter drop-shadow-2xl">
          {service.title}
        </h1>
        <p className="text-xl md:text-3xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          {service.shortDescription}
        </p>
        <Button asChild size="lg" className="relative group bg-gold text-black hover:bg-white transition-all duration-500 text-lg px-12 py-8 rounded-full overflow-hidden shadow-[0_0_50px_-10px_rgba(255,215,0,0.4)] hover:shadow-[0_0_80px_-10px_rgba(255,255,255,0.7)] hover:-translate-y-2">
          <Link href="/booking">
            <span className="relative z-10 font-black flex items-center gap-3">
              احجز مكانك في المستقبل <Rocket className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
          </Link>
        </Button>
      </section>

      {/* 💬 2. قسم الإقناع القوي (Persuasive Punch) */}
      <section className="relative z-10 container mx-auto px-4 py-20 max-w-5xl">
        <div className="relative p-1 lg:p-[2px] rounded-3xl bg-gradient-to-b from-gold/40 via-transparent to-transparent">
          <div className="bg-[#050508]/90 backdrop-blur-2xl p-10 md:p-16 rounded-[22px] border border-white/5 text-center shadow-2xl shadow-black">
            <ShieldAlert className="w-12 h-12 text-gold mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              في عالم رقمي لا يرحم الضعفاء، <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">البقاء ليس للأقوى، بل للأسرع تطوراً.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
              {service.persuasiveText}
            </p>
          </div>
        </div>
      </section>

      {/* 🌌 3. معرض الصور العائم فالفضاء (Floating Space Gallery) */}
      {service.gallery && service.gallery.length >= 3 && (
        <section className="relative z-10 container mx-auto px-4 py-32 min-h-[800px] lg:min-h-[1000px]">
          <h2 className="text-center text-gray-500 font-mono tracking-widest text-sm mb-20 uppercase">-- نظرة من داخل المصفوفة --</h2>
          
          <div className="relative w-full h-full max-w-6xl mx-auto">
            {/* الصورة 1: عائمة على اليسار (كبيرة) */}
            <div className="lg:absolute top-0 left-0 w-full lg:w-[500px] mb-12 lg:mb-0 transform hover:scale-105 hover:-rotate-2 transition-all duration-1000 group">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-gold/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                <Image src={service.gallery[0]} alt="Matrix view 1" fill className="object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 blur-[40px] rounded-full pointer-events-none"></div>
            </div>

            {/* الصورة 2: عائمة على اليمين (متوسطة ومائلة) */}
            <div className="lg:absolute top-[20%] right-[5%] w-full lg:w-[400px] mb-12 lg:mb-0 transform hover:scale-105 hover:rotate-3 transition-all duration-1000 lg:translate-y-12 group">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-gold/20 shadow-[0_0_40px_rgba(255,215,0,0.1)]">
                <div className="absolute inset-0 bg-blue-900/30 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                <Image src={service.gallery[1]} alt="Matrix view 2" fill className="object-cover group-hover:scale-110 transition-all duration-1000" />
              </div>
            </div>

            {/* الصورة 3: عائمة فالوسط التحت (عريضة) */}
            <div className="lg:absolute bottom-0 left-[20%] w-full lg:w-[600px] transform hover:scale-105 hover:-translate-y-4 transition-all duration-1000 z-20 group">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <Image src={service.gallery[2]} alt="Matrix view 3" fill className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute bottom-4 left-6 z-20 text-white font-mono text-sm tracking-widest opacity-50">SYS.ONLINE // 100%</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ⚙️ 4. الميزات والخوارزمية (Features & Process) */}
      <section className="relative z-10 container mx-auto px-4 pt-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* الميزات - الترسانة */}
          <div className="space-y-8">
            <h3 className="text-4xl font-extrabold text-white mb-10 flex items-center gap-4">
              <Fingerprint className="text-gold w-10 h-10" />
              ترسانتك التكنولوجية
            </h3>
            <div className="grid gap-4">
              {service.features?.map((feature: string, index: number) => (
                <div key={index} className="flex items-center gap-5 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-white/[0.05] transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-black border border-gold/20 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-gray-300 text-lg md:text-xl font-light group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* منهجية العمل - الخوارزمية */}
          {service.process && (
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-[31px] w-[2px] bg-gradient-to-b from-gold/50 via-gold/10 to-transparent"></div>
              <h3 className="text-4xl font-extrabold text-white mb-10 pl-20">
                خوارزمية التنفيذ
              </h3>
              <div className="space-y-12">
                {service.process.map((step: any, index: number) => (
                  <div key={index} className="relative pl-20 group">
                    <div className="absolute left-0 top-1 w-16 h-16 bg-black border-2 border-gold/40 rounded-xl flex items-center justify-center text-gold font-bold font-mono text-xl z-10 group-hover:bg-gold group-hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.1)]">
                      {step.step}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{step.title}</h4>
                    <p className="text-xl text-gray-500 font-light leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
      
    </div>
  )
}