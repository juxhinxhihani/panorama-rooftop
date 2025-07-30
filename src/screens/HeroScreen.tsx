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
        <div className="absolute inset-0 bg-black bg-opacity-40" />
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
            className="bg-gradient-to-r from-amber-600 via-orange-700 to-red-800 text-amber-50 px-8 py-4 rounded-xl font-semibold text-lg hover:from-amber-700 hover:via-orange-800 hover:to-red-900 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {t('viewMenu')}
          </Link>
          
          <Link
            href="/contact"
            className="border-2 border-amber-600 bg-gradient-to-r from-amber-600/10 via-orange-700/10 to-red-800/10 text-amber-50 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gradient-to-r hover:from-amber-600 hover:via-orange-700 hover:to-red-800 hover:text-amber-50 hover:border-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto"
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