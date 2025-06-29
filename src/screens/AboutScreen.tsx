'use client'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutScreen() {
  const { t } = useLanguage()
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {t('aboutTitle')}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about')}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">9th</div>
                <div className="text-gray-600">{t('floor')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-2">360°</div>
                <div className="text-gray-600">{t('view')}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Panorama Rooftop View"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🌅</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t('bestTime')}</div>
                  <div className="text-sm text-gray-600">{t('sunsetTime')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
