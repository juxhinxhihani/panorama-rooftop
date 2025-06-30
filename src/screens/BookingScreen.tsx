'use client'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface Item {
  id: string
  name: string
  price: number
  time: number
}

const menu: Item[] = [
  { id: 'pizza', name: 'Pizza', price: 700, time: 15 },
  { id: 'burger', name: 'Burger', price: 600, time: 10 },
  { id: 'smoothie', name: 'Smoothie', price: 500, time: 5 }
]

export default function BookingScreen() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<'pickup' | 'book' | 'delivery'>('pickup')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: 1,
    date: '',
    time: ''
  })
  const [order, setOrder] = useState<Record<string, number>>({})
  const [payment, setPayment] = useState('cash')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleOrderChange = (id: string, qty: number) => {
    setOrder((prev) => ({ ...prev, [id]: qty }))
  }

  const totalCost = menu.reduce(
    (sum, item) => sum + (order[item.id] || 0) * item.price,
    0
  )
  const estimatedTime = menu.reduce(
    (sum, item) => sum + (order[item.id] || 0) * item.time,
    0
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (activeTab === 'book') {
      console.log('Reservation submitted:', formData)
    } else {
      console.log('Order submitted:', {
        ...formData,
        type: activeTab,
        order,
        totalCost,
        estimatedTime,
        payment
      })
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('bookTable')}</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600">{t('bookDescription')}</p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab('pickup')}
            className={`px-4 py-2 rounded-full ${
              activeTab === 'pickup' ? 'bg-orange-500 text-white' : 'bg-gray-200'
            }`}
          >
            {t('pickupTab')}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('book')}
            className={`px-4 py-2 rounded-full ${
              activeTab === 'book' ? 'bg-orange-500 text-white' : 'bg-gray-200'
            }`}
          >
            {t('bookTab')}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('delivery')}
            className={`px-4 py-2 rounded-full ${
              activeTab === 'delivery' ? 'bg-orange-500 text-white' : 'bg-gray-200'
            }`}
          >
            {t('deliveryTab')}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                {t('name')} *
              </label>
              <input
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
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                {t('phone')} *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                placeholder={t('enterPhone')}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {t('email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              placeholder={t('enterEmail')}
            />
          </div>

          {activeTab === 'book' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('date')}
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('time')}
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('guests')}
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>
          )}

          {activeTab !== 'book' && (
            <>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('chooseItems')}</h3>
                {menu.map((item) => (
                  <div key={item.id} className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.price} ALL</p>
                    </div>
                    <input
                      type="number"
                      min="0"
                      value={order[item.id] ?? 0}
                      onChange={(e) => handleOrderChange(item.id, parseInt(e.target.value || '0', 10))}
                      className="w-16 border rounded px-2 py-1"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span>
                  {t('totalCost')}: {totalCost} ALL
                </span>
                <span>
                  {t('estimatedTime')}: {estimatedTime} min
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('paymentOption')}
                </label>
                <select
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="cash">{t('cash')}</option>
                  <option value="card">{t('card')}</option>
                </select>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            {activeTab === 'book' ? t('bookNow') : t('placeOrder')}
          </button>
        </form>
      </div>
    </section>
  )
}

