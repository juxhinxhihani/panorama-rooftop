'use client'
import { useLanguage } from '../contexts/LanguageContext'

export default function ContactSection() {
  const { t } = useLanguage()
  return (
    <section id="contact" className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-center text-2xl font-semibold mb-4">{t('contact')}</h2>
      <form className="flex flex-col gap-4">
        <input className="border p-2" placeholder={t('name')} />
        <input className="border p-2" placeholder={t('email')} />
        <textarea className="border p-2" rows={4} placeholder={t('message')} />
        <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded self-start">{t('send')}</button>
      </form>
    </section>
  )
}
