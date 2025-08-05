'use client'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function DeliveryPopup() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('panorama-delivery-popup-seen')
    
    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    // Mark as seen so it doesn't show again
    localStorage.setItem('panorama-delivery-popup-seen', 'true')
  }

  const handleOrderNow = () => {
    handleClose()
    // Scroll to contact section or redirect to contact page
    window.location.href = 'tel:+355696068669'
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-slideDown">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 p-6 text-white text-center">
          <div className="text-4xl mb-2">🚚</div>
          <h2 className="text-2xl font-bold mb-1">{t('deliveryAnnouncementTitle')}</h2>
          <p className="text-amber-100 text-sm">{t('deliveryAnnouncementSubtitle')}</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {t('deliveryAnnouncementMessage')}
            </p>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-center space-x-2 text-orange-700">
                <span className="text-xl">📞</span>
                <span className="font-semibold">+355 69 606 8669</span>
              </div>
              <p className="text-sm text-orange-600 mt-1">{t('deliveryCallToOrder')}</p>
            </div>

            <div className="text-sm text-gray-500 space-y-1">
              <p>🕒 {t('deliveryHours')}</p>
              <p>📍 {t('deliveryArea')}</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex space-x-3">
            <button
              onClick={handleOrderNow}
              className="flex-1 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-amber-700 hover:via-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              {t('orderNow')}
            </button>
            <button
              onClick={handleClose}
              className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
            >
              {t('closeLater')}
            </button>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}