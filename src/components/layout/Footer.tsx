'use client'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="font-bold text-lg">Panorama Rooftop</span>
            </div>
            <p className="text-gray-400 text-sm">
              {t('footerDescription')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t('contact')}</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 9th Floor, Center of Divjaka</p>
              <p>📞 +355 XX XXX XXX</p>
              <p>✉️ info@panoramarooftop.al</p>
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