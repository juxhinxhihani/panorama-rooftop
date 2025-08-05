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
          name: t('menuEkspres'),
          description: 'Rich, full-bodied espresso',
          price: '70 ALL',
          type: 'drink'
        },
        {
          name: t('menuMacchiato'),
          description: 'Espresso with a dollop of foamed milk',
          price: '70 ALL',
          type: 'drink'
        },
        {
          name: t('menuMacchiatoLarge'),
          description: 'Large macchiato with extra foam',
          price: '120 ALL',
          type: 'drink'
        },
        {
          name: t('menuCappuccino'),
          description: 'Perfect balance of espresso and steamed milk',
          price: '150 ALL',
          popular: true,
          type: 'drink'
        },
        {
          name: t('menuCappuccinoKafe'),
          description: 'Coffee cappuccino with extra coffee flavor',
          price: '150 ALL',
          type: 'drink'
        },
        {
          name: t('menuFreddoCappuccino'),
          description: 'Cold cappuccino perfect for warm days',
          price: '200 ALL',
          type: 'drink'
        },
        {
          name: t('menuChocolateCold'),
          description: 'Cold chocolate drink',
          price: '200 ALL',
          type: 'drink'
        },
        {
          name: t('menuChocolateBlack'),
          description: 'Rich dark chocolate drink',
          price: '150 ALL',
          type: 'drink'
        },
        {
          name: t('menuChocolateWhite'),
          description: 'Creamy white chocolate drink',
          price: '150 ALL',
          type: 'drink'
        },
        {
          name: t('menuMilkshake'),
          description: 'Creamy milkshake with various flavors',
          price: '250 ALL',
          type: 'drink'
        },
        {
          name: t('menuFrappe'),
          description: 'Iced coffee drink',
          price: '150 ALL',
          type: 'drink'
        },
        {
          name: t('menuFreddoKafe'),
          description: 'Cold coffee drink',
          price: '200 ALL',
          type: 'drink'
        },
        {
          name: t('menuFredoccino'),
          description: 'Cold coffee with chocolate',
          price: '200 ALL',
          type: 'drink'
        },
        {
          name: t('menuKafeKremoso'),
          description: 'Creamy coffee drink',
          price: '120 ALL',
          type: 'drink'
        },
        {
          name: t('menuKafeLatte'),
          description: 'Coffee with steamed milk',
          price: '100 ALL',
          type: 'drink'
        },
        {
          name: t('menuKakao'),
          description: 'Hot cocoa drink',
          price: '150 ALL',
          type: 'drink'
        },
        {
          name: t('menuHotTea'),
          description: 'Hot tea selection',
          price: '80 ALL',
          type: 'drink'
        },
        {
          name: t('menuKakaoCold'),
          description: 'Cold cocoa drink',
          price: '150 ALL',
          type: 'drink'
        },
        {
          name: t('menuFrappeOreo'),
          description: 'Oreo flavored frappe',
          price: '200 ALL',
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
          name: t('menuOrangeJuice'),
          description: 'Fresh orange juice',
          price: '200 ALL',
          type: 'drink'
        },
        {
          name: t('menuOrangeJuiceMedium'),
          description: 'Medium fresh orange juice',
          price: '250 ALL',
          type: 'drink'
        },
        {
          name: t('menuLifeJuice'),
          description: 'Life juice blend',
          price: '300 ALL',
          popular: true,
          type: 'drink'
        },
        {
          name: t('menuDetoxJuice'),
          description: 'Detox juice blend',
          price: '300 ALL',
          type: 'drink'
        },
        {
          name: t('menuProteinSmoothie'),
          description: 'Protein-rich smoothie',
          price: '300 ALL',
          type: 'drink'
        },
        {
          name: t('menuPineappleSmoothie'),
          description: 'Pineapple smoothie',
          price: '300 ALL',
          type: 'drink'
        },
        {
          name: t('menuBananaSmoothie'),
          description: 'Banana smoothie',
          price: '250 ALL',
          type: 'drink'
        },
        {
          name: t('menuGenericSmoothie'),
          description: 'Various smoothie flavors available',
          price: '300 ALL',
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
          name: t('menuNegroni'),
          description: 'Classic Italian cocktail with gin, vermouth, and Campari',
          price: '500 ALL',
          type: 'drink'
        },
        {
          name: t('menuMartini'),
          description: 'Classic martini with gin or vodka',
          price: '500 ALL',
          type: 'drink'
        },
        {
          name: t('menuMojito'),
          description: 'Refreshing rum cocktail with mint and lime',
          price: '500 ALL',
          popular: true,
          type: 'drink'
        },
        {
          name: t('menuAperolSpritz'),
          description: 'Italian aperitif with Aperol, prosecco, and soda',
          price: '500 ALL',
          type: 'drink'
        },
        {
          name: t('menuVodkaSour'),
          description: 'Vodka-based sour cocktail',
          price: '500 ALL',
          type: 'drink'
        },
        {
          name: t('menuSexOnTheBeach'),
          description: 'Fruity cocktail with vodka and peach schnapps',
          price: '500 ALL',
          type: 'drink'
        },
        {
          name: t('menuTequilaSunrise'),
          description: 'Tequila cocktail with orange juice and grenadine',
          price: '500 ALL',
          type: 'drink'
        },
        {
          name: t('menuPinaColada'),
          description: 'Tropical cocktail with rum, coconut, and pineapple',
          price: '500 ALL',
          type: 'drink'
        },
        {
          name: t('menuGinTonic'),
          description: 'Classic gin and tonic',
          price: '500 ALL',
          type: 'drink'
        },
        {
          name: t('menuCaipiroska'),
          description: 'Brazilian cocktail with vodka and lime',
          price: '600 ALL',
          type: 'drink'
        },
        {
          name: t('menuCosmopolitan'),
          description: 'Vodka cocktail with cranberry and lime',
          price: '600 ALL',
          type: 'drink'
        },
        {
          name: t('menuAnalcolic'),
          description: 'Non-alcoholic cocktail',
          price: '400 ALL',
          type: 'drink'
        },
        {
          name: t('menuPanorama'),
          description: 'Our signature house cocktail',
          price: '500 ALL',
          popular: true,
          type: 'drink'
        },
        {
          name: t('menuAMF'),
          description: 'Adios Mother F***er - strong mixed cocktail',
          price: '800 ALL',
          type: 'drink'
        },
        {
          name: t('menuGinLemon'),
          description: 'Gin with fresh lemon',
          price: '450 ALL',
          type: 'drink'
        },
        {
          name: t('menuCubaLibre'),
          description: 'Rum with cola and lime',
          price: '500 ALL',
          type: 'drink'
        },
        {
          name: t('menuMargarita'),
          description: 'Tequila cocktail with lime and triple sec',
          price: '500 ALL',
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
      price: '700 ALL',
      popular: true,
      type: 'food'
    },
    {
      name: 'Quattro Stagioni',
      description: t('pizzaQuattro'),
      price: '600 ALL',
      type: 'food'
    },
    {
      name: 'Vegetariana',
      description: t('pizzaVegetarian'),
      price: '500 ALL',
      vegetarian: true,
      type: 'food'
    },
    {
      name: 'Diavola',
      description: t('pizzaDiavola'),
      price: '600 ALL',
      spicy: true,
      type: 'food'
    },
    {
      name: 'Prosciutto',
      description: 'Pizza me prosciutto të freskët dhe mozzarella',
      price: '600 ALL',
      type: 'food'
    }
  ]
},
    {
  id: 'schiacciata',
  title: 'Schiacciata',
  icon: '🥖',
  gradient: 'from-amber-600 via-amber-700 to-amber-800',
  items: [
    {
      name: 'Schiacciata Classica',
      description: 'Proshute pule, mozzarella, majoneze, kastravec, sallate jeshile',
      price: '300 ALL',
      type: 'food'
    },
    {
      name: 'Schiacciata Piccante',
      description: 'Sallam pikant, mozzarella, ullinj te zinj, domate',
      price: '350 ALL',
      spicy: true,
      type: 'food'
    },
    {
      name: 'Schiacciata Crudo',
      description: 'Proshute krudo, mozzarella, rukola, pesto, pomodorini, philadelphia',
      price: '400 ALL',
      type: 'food'
    },
    {
      name: 'Schiacciata Vegetariana',
      description: 'Domate, djathe i bardhe, vaj ulliri, rigon',
      price: '250 ALL',
      vegetarian: true,
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
          name: t('menuZupa'),
          description: 'Traditional Albanian dessert',
          price: '150 ALL',
          type: 'food'
        },
        {
          name: t('menuCheesecake'),
          description: 'Creamy cheesecake with berry topping',
          price: '200 ALL',
          popular: true,
          type: 'food'
        },
        {
          name: t('menuTrilece'),
          description: 'Three milk cake - Albanian specialty',
          price: '150 ALL',
          type: 'food'
        },
        {
          name: t('menuTiramisu'),
          description: 'Classic Italian coffee-flavored dessert',
          price: '200 ALL',
          popular: true,
          type: 'food'
        },
        {
          name: t('menuTrigone'),
          description: 'Traditional pastry dessert',
          price: '150 ALL',
          type: 'food'
        },
        {
          name: t('menuMyfile'),
          description: 'Layered pastry dessert',
          price: '150 ALL',
          type: 'food'
        },
        {
          name: t('menuPastashu'),
          description: 'Cream-filled pastry',
          price: '150 ALL',
          type: 'food'
        },
        {
          name: t('menuBrioshChocolate'),
          description: 'Chocolate brioche',
          price: '120 ALL',
          type: 'food'
        },
        {
          name: t('menuBrioshPistachio'),
          description: 'Pistachio brioche',
          price: '150 ALL',
          type: 'food'
        },
        {
          name: t('menuDonut'),
          description: 'Fresh glazed donut',
          price: '120 ALL',
          type: 'food'
        },
        {
          name: t('menuBigusto'),
          description: 'Double flavor pastry',
          price: '120 ALL',
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
    let items
    
    if (activeCategory === 'all') {
      items = allItems
    } else {
      const category = menuCategories.find(cat => cat.id === activeCategory)
      items = category ? category.items.map(item => ({ ...item, category: category.title })) : []
    }
    
    if (searchTerm) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    return items
  }

  const filteredItems = getFilteredItems()

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

        {/* Category Cards - Always Visible */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {/* All Menu Card */}
          <button
            onClick={() => setActiveCategory('all')}
            className={`bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 rounded-xl p-3 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
              activeCategory === 'all' ? 'ring-4 ring-white/30' : ''
            }`}
          >
            <div className="text-center">
              <span className="text-2xl block mb-1">📋</span>
              <h3 className="text-sm font-bold mb-1">All Menu</h3>
              <p className="text-white/90 text-xs">{allItems.length} items available</p>
            </div>
          </button>
          
          {menuCategories.slice(1).map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`bg-gradient-to-r ${category.gradient} rounded-xl p-3 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                activeCategory === category.id ? 'ring-4 ring-white/30' : ''
              }`}
            >
              <div className="text-center">
                <span className="text-2xl block mb-1">{category.icon}</span>
                <h3 className="text-sm font-bold mb-1">{category.title}</h3>
                <p className="text-white/90 text-xs">{category.items.length} items available</p>
              </div>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => (
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
            <div className="flex justify-center">
              <a
                href="tel:+355695687575"
                className="border-2 border-amber-600 bg-gradient-to-r from-amber-600/10 via-orange-700/10 to-red-800/10 text-amber-800 px-8 py-4 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-amber-600 hover:via-orange-700 hover:to-red-800 hover:text-amber-50 hover:border-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
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
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-amber-600 via-orange-700 to-red-800 text-amber-50 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 hover:from-amber-700 hover:via-orange-800 hover:to-red-900"
        title="Call for Orders"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </section>
  )
}