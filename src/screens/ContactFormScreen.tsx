'use client'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ContactFormScreen() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add actual form submission logic here
    alert('Mesazhi u dërgua me sukses!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('contact')}
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('getInTouch')}</h2>
              
              <div className="space-y-6">
                <a
                  href="https://maps.app.goo.gl/zAChtNyijUZ6sVU68"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 group-hover:text-orange-600 transition-colors">{t('location')}</h3>
                    <p className="text-gray-600">
                      9th Floor, Center of Divjaka<br />
                      Divjakë, Albania
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+355695687575"
                  className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 group-hover:text-orange-600 transition-colors">{t('phone')}</h3>
                    <p className="text-gray-600">+355 69 568 7575</p>
                  </div>
                </a>

                <a
                  href="mailto:panoramadivjake@gmail.com"
                  className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 group-hover:text-orange-600 transition-colors">{t('email')}</h3>
                    <p className="text-gray-600">panoramadivjake@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">{t('hours')}</h3>
                    <p className="text-gray-600">{t('dailyHours')}</p>
                    <p className="text-orange-600 text-sm mt-1">{t('bestTime')}: {t('sunsetTime')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('sendMessage')}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder={t('enterName')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder={t('enterEmail')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  placeholder={t('enterPhone')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                  placeholder={t('enterMessage')}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                {t('send')}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Na gjeni këtu</h3>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1501.0101!2d19.533167!3d40.99625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1719828000000!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Panorama Rooftop Location"
              />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
