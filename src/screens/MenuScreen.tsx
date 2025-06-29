'use client'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MenuScreen() {
  const { t } = useLanguage()
  
  const menuCategories = [
    {
      title: t('drinks'),
      icon: '🍹',
      items: [
        { name: 'Signature Cocktails', description: t('signatureCocktails') },
        { name: 'Fresh Coffee', description: t('freshCoffee') },
        { name: 'Smoothies', description: t('smoothies') },
        { name: 'Fresh Juices', description: t('freshJuices') },
        { name: 'Milkshakes', description: t('milkshakes') }
      ],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: t('food'),
      icon: '🍕',
      items: [
        { name: 'Wood-fired Pizza', description: t('woodFiredPizza') },
        { name: 'Gourmet Burgers', description: t('gourmetBurgers') },
        { name: 'French Crepes', description: t('frenchCrepes') },
        { name: 'Light Snacks', description: t('lightSnacks') }
      ],
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('ourMenu')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('menuDescription')}
          </p>
        </div>

        {/* Menu Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {menuCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.gradient} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-6 space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('specialOffers')}</h3>
            <p className="text-gray-600 mb-6">{t('specialOffersDescription')}</p>
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200">
              {t('viewFullMenu')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
