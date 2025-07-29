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
  const [activeCategory, setActiveCategory] = useState('pizza')
  const [searchTerm, setSearchTerm] = useState('')

  const menuCategories: MenuCategory[] = [
    {
      id: 'pizza',
      title: 'Pizza',
      icon: '🍕',
      gradient: 'from-red-500 via-orange-500 to-yellow-500',
      items: [
        {
          name: 'Pizza Rucola',
          description: 'Rucola, Crudo, Parmigiano, Pomodorini, Mozzarella, Sauce',
          price: '700 ALL',
          calories: 850,
          popular: true,
          ingredients: ['Rucola', 'Crudo', 'Parmigiano', 'Pomodorini', 'Mozzarella', 'Sauce'],
          allergens: ['Gluten', 'Qumësht'],
          type: 'food'
        },
        {
          name: 'Margherita',
          description: t('pizzaMargherita'),
          price: '1,200 ALL',
          calories: 850,
          popular: true,
          vegetarian: true,
          ingredients: ['Domate', 'Mozzarella', 'Borzilok', 'Vaj ulliri'],
          allergens: ['Gluten', 'Qumësht'],
          type: 'food'
        },
        {
          name: 'Panorama Special',
          description: t('pizzaPanorama'),
          price: '1,800 ALL',
          calories: 1150,
          popular: true,
          ingredients: ['Proshutë', 'Rucola', 'Domate qershi', 'Parmesan', 'Mozzarella'],
          allergens: ['Gluten', 'Qumësht'],
          type: 'food'
        },
        {
          name: 'Quattro Stagioni',
          description: t('pizzaQuattro'),
          price: '1,600 ALL',
          calories: 1050,
          ingredients: ['Proshutë', 'Kërpudha', 'Anginare', 'Ullinj', 'Mozzarella'],
          allergens: ['Gluten', 'Qumësht'],
          type: 'food'
        },
        {
          name: 'Vegetariana',
          description: t('pizzaVegetarian'),
          price: '1,400 ALL',
          calories: 750,
          vegetarian: true,
          ingredients: ['Speca', 'Kungull', 'Patëllxhan', 'Mozzarella', 'Domate'],
          allergens: ['Gluten', 'Qumësht'],
          type: 'food'
        },
        {
          name: 'Diavola',
          description: t('pizzaDiavola'),
          price: '1,500 ALL',
          calories: 1100,
          spicy: true,
          ingredients: ['Sallam djegës', 'Spec djegës', 'Mozzarella', 'Domate'],
          allergens: ['Gluten', 'Qumësht'],
          type: 'food'
        }
      ]
    },
    {
      id: 'burgers',
      title: t('gourmetBurgers'),
      icon: '🍔',
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      items: [
        {
          name: 'Panorama Burger',
          description: t('burgerPanorama'),
          price: '1,400 ALL',
          calories: 950,
          popular: true,
          ingredients: ['Mish Angus 200g', 'Qepë karamelizuar', 'Proshutë', 'Salcë speciale', 'Sallatë'],
          allergens: ['Gluten', 'Vezë'],
          type: 'food'
        },
        {
          name: 'Classic Cheeseburger',
          description: t('burgerClassic'),
          price: '1,200 ALL',
          calories: 850,
          ingredients: ['Hamburger mishi 180g', 'Djathë cheddar', 'Sallatë', 'Domate', 'Qepë'],
          allergens: ['Gluten', 'Qumësht'],
          type: 'food'
        },
        {
          name: 'BBQ Bacon Burger',
          description: t('burgerBBQ'),
          price: '1,500 ALL',
          calories: 1100,
          ingredients: ['Mish 200g', 'Proshutë', 'Unaza qepe', 'Salcë BBQ', 'Djathë cheddar'],
          allergens: ['Gluten', 'Qumësht'],
          type: 'food'
        },
        {
          name: 'Chicken Burger',
          description: t('burgerChicken'),
          price: '1,300 ALL',
          calories: 750,
          ingredients: ['Gjoks pule 180g', 'Avokado', 'Majonezë bimore', 'Sallatë', 'Domate'],
          allergens: ['Gluten', 'Vezë'],
          type: 'food'
        },
        {
          name: 'Veggie Burger',
          description: t('burgerVeggie'),
          price: '1,100 ALL',
          calories: 650,
          vegetarian: true,
          ingredients: ['Hamburger bimor', 'Avokado', 'Sallatë', 'Domate', 'Qepë e kuqe'],
          allergens: ['Gluten', 'Soja'],
          type: 'food'
        }
      ]
    },
    {
      id: 'scachiata',
      title: 'Scachiata',
      icon: '🥖',
      gradient: 'from-amber-500 via-yellow-500 to-orange-500',
      items: [
        {
          name: 'Scachiata Milano',
          description: 'Milanese salami, mozzarella, philadelphia, olive cream',
          price: '300 ALL',
          calories: 420,
          popular: true,
          ingredients: ['Milanese salami', 'Mozzarella', 'Philadelphia', 'Olive cream'],
          allergens: ['Gluten', 'Qumësht'],
          type: 'food'
        },
        {
          name: 'Scachiata Prosciutto',
          description: 'Prosciutto di Parma, mozzarella, rucola, pomodorini',
          price: '350 ALL',
          calories: 380,
          ingredients: ['Prosciutto di Parma', 'Mozzarella', 'Rucola', 'Pomodorini'],
          allergens: ['Gluten', 'Qumësht'],
          type: 'food'
        },
        {
          name: 'Scachiata Vegetariana',
          description: 'Zucchine grigliate, melanzane, peperoni, mozzarella',
          price: '280 ALL',
          calories: 320,
          vegetarian: true,
          ingredients: ['Zucchine grigliate', 'Melanzane', 'Peperoni', 'Mozzarella'],
          allergens: ['Gluten', 'Qumësht'],
          type: 'food'
        },
        {
          name: 'Scachiata Tonno',
          description: 'Tonno, mozzarella, pomodorini, olive, capperi',
          price: '320 ALL',
          calories: 360,
          ingredients: ['Tonno', 'Mozzarella', 'Pomodorini', 'Olive', 'Capperi'],
          allergens: ['Gluten', 'Qumësht', 'Peshk'],
          type: 'food'
        }
      ]
    },
    {
      id: 'crepes',
      title: t('frenchCrepes'),
      icon: '🥞',
      gradient: 'from-pink-500 via-purple-500 to-indigo-500',
      items: [
        {
          name: 'Nutella Crepe',
          description: t('crepeNutella'),
          price: '800 ALL',
          calories: 650,
          popular: true,
          vegetarian: true,
          ingredients: ['Nutella', 'Sheqer pluhur', 'Krem'],
          allergens: ['Gluten', 'Qumësht', 'Bajame'],
          type: 'food'
        },
        {
          name: 'Fresh Fruit Crepe',
          description: t('crepeFruit'),
          price: '900 ALL',
          calories: 550,
          vegetarian: true,
          ingredients: ['Fruta stinore', 'Krem të rrahur', 'Mjaltë'],
          allergens: ['Gluten', 'Qumësht'],
          type: 'food'
        },
        {
          name: 'Ham & Cheese Crepe',
          description: t('crepeHamCheese'),
          price: '1,000 ALL',
          calories: 750,
          ingredients: ['Proshutë', 'Djathë emmental', 'Krem djathri'],
          allergens: ['Gluten', 'Qumësht'],
          type: 'food'
        },
        {
          name: 'Spinach & Feta Crepe',
          description: t('crepeSpinach'),
          price: '950 ALL',
          calories: 600,
          vegetarian: true,
          ingredients: ['Spinaq i freskët', 'Djathë feta', 'Bimë aromatike'],
          allergens: ['Gluten', 'Qumësht'],
          type: 'food'
        }
      ]
    },
    {
      id: 'cocktails',
      title: 'Cocktails',
      icon: '🍹',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      items: [
        {
          name: 'Panorama Sunset',
          description: t('cocktailPanoramaSunset'),
          price: '800 ALL',
          popular: true,
          type: 'drink'
        },
        {
          name: 'Divjaka Breeze',
          description: t('cocktailDivjakaBreeze'),
          price: '750 ALL',
          type: 'drink'
        },
        {
          name: 'Rooftop Mojito',
          description: t('cocktailRooftopMojito'),
          price: '700 ALL',
          popular: true,
          type: 'drink'
        },
        {
          name: 'Albanian Spritz',
          description: t('cocktailAlbanianSpritz'),
          price: '650 ALL',
          type: 'drink'
        },
        {
          name: 'Forest View',
          description: t('cocktailForestView'),
          price: '850 ALL',
          type: 'drink'
        },
        {
          name: 'Coastal Mule',
          description: t('cocktailCoastalMule'),
          price: '720 ALL',
          type: 'drink'
        }
      ]
    },
    {
      id: 'coffee',
      title: 'Coffee & Tea',
      icon: '☕',
      gradient: 'from-amber-600 via-yellow-600 to-orange-600',
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
      gradient: 'from-green-500 via-teal-500 to-blue-500',
      items: [
        {
          name: 'Tropical Smoothie',
          description: t('smoothieTropical'),
          price: '400 ALL',
          popular: true,
          type: 'drink'
        },
        {
          name: 'Berry Smoothie',
          description: t('smoothieBerry'),
          price: '380 ALL',
          type: 'drink'
        },
        {
          name: 'Green Smoothie',
          description: t('smoothieGreen'),
          price: '420 ALL',
          type: 'drink'
        },
        {
          name: 'Orange Juice',
          description: t('juiceOrange'),
          price: '250 ALL',
          type: 'drink'
        },
        {
          name: 'Apple Juice',
          description: t('juiceApple'),
          price: '230 ALL',
          type: 'drink'
        },
        {
          name: 'Mixed Berry Juice',
          description: t('juiceBerry'),
          price: '280 ALL',
          type: 'drink'
        },
        {
          name: 'Lemonade',
          description: 'Fresh lemon juice with mint and sparkling water',
          price: '200 ALL',
          type: 'drink'
        },
        {
          name: 'Iced Tea',
          description: 'Refreshing iced tea with lemon and mint',
          price: '180 ALL',
          type: 'drink'
        }
      ]
    },
    {
      id: 'desserts',
      title: 'Desserts',
      icon: '🍰',
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      items: [
        {
          name: 'Tiramisu Panorama',
          description: 'Tiramisu klasike me prekje speciale të shtëpisë',
          price: '950 ALL',
          calories: 480,
          popular: true,
          vegetarian: true,
          ingredients: ['Mascarpone', 'Kafe espresso', 'Savoiardi', 'Kakao', 'Marsala'],
          allergens: ['Gluten', 'Qumësht', 'Vezë', 'Alkool'],
          type: 'food'
        },
        {
          name: 'Panna Cotta Berry',
          description: 'Krem i butë me fruta pylli dhe coulis',
          price: '800 ALL',
          calories: 350,
          vegetarian: true,
          ingredients: ['Krem', 'Sheqer', 'Gelatinë', 'Fruta pylli', 'Vanilie'],
          allergens: ['Qumësht'],
          type: 'food'
        },
        {
          name: 'Chocolate Lava Cake',
          description: 'Kek çokollate me zemër të lëngshme dhe akullore vanilie',
          price: '900 ALL',
          calories: 650,
          vegetarian: true,
          ingredients: ['Çokollatë e errët', 'Gjalpë', 'Vezë', 'Sheqer', 'Akullore vanilie'],
          allergens: ['Gluten', 'Qumësht', 'Vezë'],
          type: 'food'
        },
        {
          name: 'Gelato Selection',
          description: 'Tre topa akullore artizanale me aroma të zgjedhura',
          price: '750 ALL',
          calories: 420,
          vegetarian: true,
          ingredients: ['Qumësht', 'Krem', 'Sheqer', 'Aroma natyrale'],
          allergens: ['Qumësht'],
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
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-pink-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('fullMenuTitle')}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto mb-6" />
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
            className="w-full px-6 py-4 pl-12 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-lg text-gray-900 placeholder-gray-500"
          />
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/20">
            <div className="flex flex-wrap justify-center gap-2">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                      : 'text-gray-700 hover:bg-white/80 hover:shadow-md'
                  }`}
                >
                  <span className="text-2xl">{category.icon}</span>
                  <span className="hidden sm:inline">{category.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Header */}
        {activeMenu && (
          <div className={`bg-gradient-to-r ${activeMenu.gradient} rounded-3xl p-8 text-white mb-12 shadow-2xl`}>
            <div className="text-center">
              <span className="text-6xl mb-4 block">{activeMenu.icon}</span>
              <h2 className="text-3xl font-bold mb-2">{activeMenu.title}</h2>
              <p className="text-white/90 text-lg">{filteredItems.length} items available</p>
            </div>
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20"
            >
              {/* Item Header */}
              <div className="relative p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {item.name}
                      </h3>
                      {item.popular && (
                        <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                          <span>⭐</span>
                          <span>{t('popular')}</span>
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      {item.vegetarian && (
                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                          <span>🌱</span>
                          <span>{t('vegetarian')}</span>
                        </span>
                      )}
                      {item.spicy && (
                        <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                          <span>🌶️</span>
                          <span>{t('spicy')}</span>
                        </span>
                      )}
                    </div>
                  </div>

                </div>

                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {item.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">
                    {item.price}
                  </span>
                  <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-xl font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-md">
                    {t('addToOrder')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No items found</h3>
            <p className="text-gray-600 text-lg">Try searching with different keywords or select another category</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('readyToOrder')}</h3>
            <p className="text-gray-600 mb-8 text-lg">{t('contactUsToOrder')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                {t('makeReservation')}
              </a>
              <a
                href="tel:+355695687575"
                className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-2xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200"
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
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-40"
        title="Call for Orders"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </section>
  )
}