'use client'
import { useLanguage } from '../contexts/LanguageContext'

export default function MenuSection() {
  const { t } = useLanguage()
  return (
    <section id="menu" className="bg-gradient-to-b from-pink-300 to-purple-300 py-12 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-4">{t('drinks')}</h2>
      <p>Cocktails, coffee, smoothies, fresh juice, milkshakes</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">{t('food')}</h2>
      <p>Pizza, burgers, crepes</p>
    </section>
  )
}
