'use client'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function DeliveryPopup() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show popup after a short delay on every visit
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1200)
    
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleOrderNow = () => {
    handleClose()
    window.location.href = 'tel:+355696068669'
  }

  const handleViewMenu = () => {
    handleClose()
    window.location.href = '/menu'
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30"
        onClick={handleClose}
      />
      
      {/* Simple Popup */}
      <div className="relative bg-white rounded-lg shadow-lg max-w-sm w-full p-6 text-center">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Content */}
        <div className="mb-4">
          <div className="text-3xl mb-3">🛵</div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            {t('deliveryPopupTitle')}
          </h2>
          <p className="text-gray-600 text-sm mb-2">
            {t('deliveryPopupSubtitle')}
          </p>
          <p className="text-orange-600 font-semibold text-lg">
            📞 {t('deliveryPopupPhone')}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleOrderNow}
            className="flex-1 bg-orange-500 text-white py-2 px-4 rounded font-medium hover:bg-orange-600 transition-colors"
          >
            {t('deliveryPopupOrderButton')}
          </button>
          <button
            onClick={handleViewMenu}
            className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded font-medium hover:bg-gray-50 transition-colors"
          >
            {t('deliveryPopupMenuButton')}
          </button>
        </div>
      </div>
    </div>
  )
}
