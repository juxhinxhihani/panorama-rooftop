'use client'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 overflow-hidden rounded-full">
                <Image
                  src="/icon.png/image.png"
                  alt="Panorama Rooftop Logo"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="font-mono text-base font-bold tracking-normal">Panorama Rooftop</span>
            </div>
            <p className="text-gray-400 text-sm">
              {t('footerDescription')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t('contact')}</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                📍 <a
                  href="https://maps.app.goo.gl/zAChtNyijUZ6sVU68"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
              >
                9th Floor, Center of Divjaka
              </a>
              </p>
              <p>
                📞 <a href="tel:+355695687575" className="hover:underline">+355 69 568 7575</a>
              </p>
              <p>
                ✉️ <a href="mailto:panoramadivjake@gmail.com" className="hover:underline">panoramadivjake@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t('hours')}</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>{t('dailyHours')}</p>
              <p className="text-orange-400">{t('bestTime')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Panorama Rooftop. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  )
}
