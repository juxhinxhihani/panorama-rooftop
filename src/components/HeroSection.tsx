'use client'
import { useLanguage } from '../contexts/LanguageContext'

export default function HeroSection() {
  const { t } = useLanguage()
  return (
    <section className="h-[60vh] flex flex-col items-center justify-center text-center bg-gradient-to-b from-orange-300 to-pink-300" id="hero">
      <h1 className="text-4xl font-bold mb-2 text-gray-900 drop-shadow-lg">{t('title')}</h1>
      <p className="text-lg text-gray-800">{t('subtitle')}</p>
    </section>
  )
}
