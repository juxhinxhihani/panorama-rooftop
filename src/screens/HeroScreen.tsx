'use client'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function HeroScreen() {
  const { t } = useLanguage()
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero.jpg')"
          }}
      >
        {/* Vintage Sunset Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 via-orange-800/20 to-red-900/50" />
        {/* Grainy Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
        {/* Warm Light Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-amber-500/5 to-orange-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="block">{t('title')}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-red-400 drop-shadow-lg">
            Rooftop
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 text-amber-50/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/menu"
            className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-amber-50 px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-700 hover:via-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-amber-400/20"
          >
            {t('viewMenu')}
          </Link>
          
          <Link
            href="/contact"
            className="border-2 border-amber-200/60 text-amber-50 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-100/90 hover:text-amber-900 hover:border-amber-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-md"
          >
            {t('contact')}
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-amber-200/80 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}