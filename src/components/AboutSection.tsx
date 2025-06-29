'use client'
import { useLanguage } from '../contexts/LanguageContext'

export default function AboutSection() {
  const { t } = useLanguage()
  return (
    <section id="about" className="max-w-4xl mx-auto py-12 px-4 text-center" >
      <p>{t('about')}</p>
    </section>
  )
}
