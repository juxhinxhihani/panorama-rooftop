'use client'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface MenuItem {
  name: string
  description: string
  price: string
  calories?: number
  popular?: boolean
  spicy?: boolean
  vegetarian?: boolean
  category?: string
  image?: string
  ingredients?: string[]
  allergens?: string[]
  type: 'food' | 'drink'
}

interface MenuCategory {
  id: string
  title: string
  icon: string
  gradient: string
  items: MenuItem[]
}

export default function FullMenuScreen() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const menuCategories: MenuCategory[] = [
    {
      id: 'all',
      title: 'All Menu',
      icon: '🍽️',
      gradient: 'from-slate-600 via-slate-700 to-slate-800',
      items: []
    },
    {
      id: 'coffee',
      title: 'Coffee & Tea',
      icon: '☕',
      gradient: 'from-amber-700 via-amber-800 to-amber-900',
      items: [
        {
          name: 'Espresso',
          description: t('coffeeEspresso'),
          price: '70 ALL',
          type: 'drink'
        },
        {
          name: 'Cappuccino',
          description: t('coffeeCappuccino'),
          price: '150 ALL',
          popular: true,
          type: 'drink'
        },
        {
          name: 'Latte',
          description: t('coffeeLatte'),
          price: '180 ALL',
          type: 'drink'
        },
        {
          name: 'Macchiato',
          description: t('coffeeMacchiato'),
          price: '120 ALL',
          type: 'drink'
        },
        {
          name: 'Turkish Coffee',
          description: t('coffeeTurkish'),
          price: '100 ALL',
          type: 'drink'
        },
        {
          name: 'Iced Coffee',
          description: t('coffeeIced'),
          price: '200 ALL',
          type: 'drink'
        },
        {
          name: 'Green Tea',
          description: t('teaGreen'),
          price: '80 ALL',
          type: 'drink'
        },
        {
          name: 'Herbal Tea',
          description: t('teaHerbal'),
          price: '90 ALL',
          type: 'drink'
        }
      ]
    },
    {
      id: 'smoothies',
      title: 'Smoothies & Juices',
      icon: '🥤',
      gradient: 'from-teal-600 via-cyan-700 to-blue-800',
      items: [
        {
          name: 'Tropical Smoothie',
          description: t('smoothieTropical'),
          price: '300 ALL',
          popular: true,
          type: 'drink'
        },
        {
          name: 'Berry Smoothie',
          description: t('smoothieBerry'),
          price: '280 ALL',
          type: 'drink'
        },
        {
          name: 'Green Smoothie',
          description: t('smoothieGreen'),
          price: '320 ALL',
          type: 'drink'
        },
        {
          name: 'Orange Juice',
          description: t('juiceOrange'),
          price: '200 ALL',
          type: 'drink'
        },
        {
          name: 'Apple Juice',
          description: t('juiceApple'),
          price: '180 ALL',
          type: 'drink'
        },
        {
          name: 'Mixed Berry Juice',
          description: t('juiceBerry'),
          price: '250 ALL',
          type: 'drink'
        },
        {
          name: 'Lemonade',
          description: 'Fresh lemon juice with mint and sparkling water',
          price: '150 ALL',
          type: 'drink'
        },
        {
          name: 'Iced Tea',
          description: 'Refreshing iced tea with lemon and mint',
          price: '120 ALL',
          type: 'drink'
        }
      ]
    },
    {
      id: 'cocktails',
      title: 'Cocktails',
      icon: '🍹',
      gradient: 'from-blue-700 via-indigo-800 to-slate-800',
      items: [
        {
          name: 'Panorama Sunset',
          description: t('cocktailPanoramaSunset'),
          price: '600 ALL',
          popular: true,
          type: 'drink'
        },
        {
          name: 'Divjaka Breeze',
          description: t('cocktailDivjakaBreeze'),
          price: '550 ALL',
          type: 'drink'
        },
        {
          name: 'Rooftop Mojito',
          description: t('cocktailRooftopMojito'),
          price: '500 ALL',
          popular: true,
          type: 'drink'
        },
        {
          name: 'Albanian Spritz',
          description: t('cocktailAlbanianSpritz'),
          price: '450 ALL',
          type: 'drink'
        },
        {
          name: 'Forest View',
          description: t('cocktailForestView'),
          price: '650 ALL',
          type: 'drink'
        },
        {
          name: 'Coastal Mule',
          description: t('cocktailCoastalMule'),
          price: '520 ALL',
          type: 'drink'
        }
      ]
    },
    {
      id: 'pizza',
      title: 'Pizza',
      icon: '🍕',
      gradient: 'from-stone-600 via-stone-700 to-stone-800',
      items: [
        {
          name: 'Pizza Rucola',
          description: 'Rucola, Crudo, Parmigiano, Pomodorini, Mozzarella, Sauce',
          price: '700 ALL',
          popular: true,
          type: 'food'
        },
        {
          name: 'Margherita',
          description: t('pizzaMargherita'),
          price: '500 ALL',
          popular: true,
          vegetarian: true,
          type: 'food'
        },
        {
          name: 'Panorama Special',
          description: t('pizzaPanorama'),
          price: '800 ALL',
          popular: true,
          type: 'food'
        },
        {
          name: 'Quattro Stagioni',
          description: t('pizzaQuattro'),
          price: '750 ALL',
          type: 'food'
        },
        {
          name: 'Vegetariana',
          description: t('pizzaVegetarian'),
          price: '650 ALL',
          vegetarian: true,
          type: 'food'
        },
        {
          name: 'Diavola',
          description: t('pizzaDiavola'),
          price: '700 ALL',
          spicy: true,
          type: 'food'
        }
      ]
    },
    {
      id: 'scacciata',
      title: 'Scacciata',
      icon: '🥖',
      gradient: 'from-amber-600 via-amber-700 to-amber-800',
      items: [
        {
          name: 'Scacciata Milano',
          description: 'Milanese salami, mozzarella, philadelphia, olive cream',
          price: '300 ALL',
          popular: true,
          type: 'food'
        },
        {
          name: 'Scacciata Prosciutto',
          description: 'Prosciutto di Parma, mozzarella, rucola, pomodorini',
          price: '350 ALL',
          type: 'food'
        },
        {
          name: 'Scacciata Vegetariana',
          description: 'Zucchine grigliate, melanzane, peperoni, mozzarella',
          price: '280 ALL',
          vegetarian: true,
          type: 'food'
        },
        {
          name: 'Scacciata Tonno',
          description: 'Tonno, mozzarella, pomodorini, olive, capperi',
          price: '320 ALL',
          type: 'food'
        }
      ]
    },
    {
      id: 'desserts',
      title: 'Desserts',
      icon: '🍰',
      gradient: 'from-rose-700 via-rose-800 to-rose-900',
      items: [
        {
          name: 'Tiramisu Panorama',
          description: 'Tiramisu klasike me prekje speciale të shtëpisë',
          price: '450 ALL',
          popular: true,
          vegetarian: true,
          type: 'food'
        },
        {
          name: 'Panna Cotta Berry',
          description: 'Krem i butë me fruta pylli dhe coulis',
          price: '400 ALL',
          vegetarian: true,
          type: 'food'
        },
        {
          name: 'Chocolate Lava Cake',
          description: 'Kek çokollate me zemër të lëngshme dhe akullore vanilie',
          price: '500 ALL',
          vegetarian: true,
          type: 'food'
        },
        {
          name: 'Gelato Selection',
          description: 'Tre topa akullore artizanale me aroma të zgjedhura',
          price: '350 ALL',
          vegetarian: true,
          type: 'food'
        }
      ]
    },
    {
      id: 'burgers',
      title: 'Burgers',
      icon: '🍔',
      gradient: 'from-stone-600 via-stone-700 to-stone-800',
      items: [
        {
          name: 'Coming Soon',
          description: 'Delicious burgers coming to our menu soon!',
          price: 'Soon',
          type: 'food'
        }
      ]
    }
  ]

  // Get all items for "View All" option
  const allItems = menuCategories.flatMap(category => 
    category.items.map(item => ({ ...item, category: category.title }))
  )

  // Filter items based on active category and search term
  const getFilteredItems = () => {
    let items = activeCategory === 'all' ? allItems : 
      menuCategories.find(cat => cat.id === activeCategory)?.items || []
    
    if (searchTerm) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    return items
  }

  const filteredItems = getFilteredItems()
  const activeMenu = menuCategories.find(cat => cat.id === activeCategory)

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('fullMenuTitle')}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('fullMenuDescription')}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
           className="w-full px-6 py-4 pl-12 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 transition-all shadow-lg text-gray-900 placeholder-gray-500"
          />
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Modern Navigation Bar */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-2 mb-12 sticky top-24 z-30">
          <div className="flex overflow-x-auto scrollbar-hide gap-2">
            {/* All Menu Button */}
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
              }`}
            >
              <span className="text-xl">🍽️</span>
              <div className="text-left">
                <div className="text-sm font-bold">All Menu</div>
                <div className={`text-xs ${activeCategory === 'all' ? 'text-white/80' : 'text-gray-500'}`}>
                  {allItems.length} items
                </div>
              </div>
            </button>
            
            {menuCategories.slice(1).map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg transform scale-105`
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <div className="text-left">
                  <div className="text-sm font-bold">{category.title}</div>
                  <div className={`text-xs ${
                    activeCategory === category.id ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    {category.items.length} items
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(activeCategory === 'all' ? allItems : filteredItems).map((item, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 h-full flex flex-col"
            >
              {/* Item Header */}
              <div className="relative p-4 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                        {item.name}
                      </h3>
                      {item.popular && (
                       <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 flex-shrink-0">
                          <span>⭐</span>
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-1 mb-2">
                      {item.vegetarian && (
                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <span>🌱</span>
                        </span>
                      )}
                      {item.spicy && (
                        <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <span>🌶️</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4 text-sm flex-1 line-clamp-2">
                  {item.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-blue-700">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-600">Try searching with different keywords or select another category</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('readyToOrder')}</h3>
            <p className="text-gray-600 mb-6">{t('contactUsToOrder')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                {t('makeReservation')}
              </a>
              <a
                href="tel:+355695687575"
                className="border-2 border-blue-600 text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                {t('callNow')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <a
        href="tel:+355695687575"
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-40"
        title="Call for Orders"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </section>
  )
}