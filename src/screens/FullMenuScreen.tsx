'use client'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

interface MenuItem {
  name: string
  description: string
  price: string
  popular?: boolean
  spicy?: boolean
  vegetarian?: boolean
  image?: string
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
  const [activeCategory, setActiveCategory] = useState('cocktails')
  const [searchTerm, setSearchTerm] = useState('')

  const menuCategories: MenuCategory[] = [
    {
      id: 'cocktails',
      title: t('signatureCocktails'),
      icon: '🍹',
      gradient: 'from-purple-500 to-pink-500',
      items: [
        {
          name: 'Panorama Sunset',
          description: t('cocktailPanoramaSunset'),
          price: '950 ALL',
          popular: true
        },
        {
          name: 'Divjaka Breeze',
          description: t('cocktailDivjakaBreeze'),
          price: '900 ALL'
        },
        {
          name: 'Rooftop Mojito',
          description: t('cocktailRooftopMojito'),
          price: '850 ALL',
          popular: true
        },
        {
          name: 'Albanian Spritz',
          description: t('cocktailAlbanianSpritz'),
          price: '800 ALL'
        },
        {
          name: 'Forest View',
          description: t('cocktailForestView'),
          price: '900 ALL'
        },
        {
          name: 'Coastal Mule',
          description: t('cocktailCoastalMule'),
          price: '850 ALL'
        },
        {
          name: 'Negroni Panorama',
          description: 'Gin, Campari, vermouth me një prekje lokale',
          price: '950 ALL'
        },
        {
          name: 'Aperol Spritz',
          description: 'Aperol, prosecco, soda dhe portokall',
          price: '750 ALL'
        }
      ]
    },
    {
      id: 'coffee',
      title: t('coffeeAndTea'),
      icon: '☕',
      gradient: 'from-amber-500 to-orange-500',
      items: [
        {
          name: 'Espresso',
          description: t('coffeeEspresso'),
          price: '200 ALL'
        },
        {
          name: 'Cappuccino',
          description: t('coffeeCappuccino'),
          price: '300 ALL',
          popular: true
        },
        {
          name: 'Latte',
          description: t('coffeeLatte'),
          price: '350 ALL'
        },
        {
          name: 'Macchiato',
          description: t('coffeeMacchiato'),
          price: '250 ALL'
        },
        {
          name: 'Turkish Coffee',
          description: t('coffeeTurkish'),
          price: '200 ALL'
        },
        {
          name: 'Iced Coffee',
          description: t('coffeeIced'),
          price: '400 ALL'
        },
        {
          name: 'Americano',
          description: 'Espresso me ujë të nxehtë',
          price: '250 ALL'
        },
        {
          name: 'Flat White',
          description: 'Espresso me qumësht të mikroshkumëzuar',
          price: '380 ALL'
        },
        {
          name: 'Green Tea',
          description: t('teaGreen'),
          price: '200 ALL',
          vegetarian: true
        },
        {
          name: 'Herbal Tea',
          description: t('teaHerbal'),
          price: '200 ALL',
          vegetarian: true
        }
      ]
    },
    {
      id: 'smoothies',
      title: t('smoothiesAndJuices'),
      icon: '🥤',
      gradient: 'from-green-500 to-teal-500',
      items: [
        {
          name: 'Tropical Paradise',
          description: t('smoothieTropical'),
          price: '500 ALL',
          popular: true,
          vegetarian: true
        },
        {
          name: 'Berry Blast',
          description: t('smoothieBerry'),
          price: '450 ALL',
          vegetarian: true
        },
        {
          name: 'Green Goddess',
          description: t('smoothieGreen'),
          price: '550 ALL',
          vegetarian: true
        },
        {
          name: 'Protein Power',
          description: 'Banane, bajame, protein pluhur dhe qumësht',
          price: '600 ALL',
          vegetarian: true
        },
        {
          name: 'Orange Juice',
          description: t('juiceOrange'),
          price: '300 ALL',
          vegetarian: true
        },
        {
          name: 'Apple Juice',
          description: t('juiceApple'),
          price: '300 ALL',
          vegetarian: true
        },
        {
          name: 'Mixed Berry Juice',
          description: t('juiceBerry'),
          price: '400 ALL',
          vegetarian: true
        },
        {
          name: 'Lemonade',
          description: 'Limonada e freskët me mente',
          price: '250 ALL',
          vegetarian: true
        }
      ]
    },
    {
      id: 'pizza',
      title: t('woodFiredPizza'),
      icon: '🍕',
      gradient: 'from-red-500 to-orange-500',
      items: [
        {
          name: 'Margherita',
          description: t('pizzaMargherita'),
          price: '1200 ALL',
          popular: true,
          vegetarian: true
        },
        {
          name: 'Panorama Special',
          description: t('pizzaPanorama'),
          price: '1600 ALL',
          popular: true
        },
        {
          name: 'Quattro Stagioni',
          description: t('pizzaQuattro'),
          price: '1500 ALL'
        },
        {
          name: 'Prosciutto e Funghi',
          description: t('pizzaProsciutto'),
          price: '1400 ALL'
        },
        {
          name: 'Vegetariana',
          description: t('pizzaVegetarian'),
          price: '1300 ALL',
          vegetarian: true
        },
        {
          name: 'Diavola',
          description: t('pizzaDiavola'),
          price: '1400 ALL',
          spicy: true
        },
        {
          name: 'Capricciosa',
          description: 'Proshutë, kërpudha, anginare, ullinj',
          price: '1500 ALL'
        },
        {
          name: 'Marinara',
          description: 'Domate, hudhra, oregano, vaj ulliri',
          price: '1000 ALL',
          vegetarian: true
        },
        {
          name: 'Quattro Formaggi',
          description: 'Katër lloje djathërash',
          price: '1400 ALL',
          vegetarian: true
        }
      ]
    },
    {
      id: 'burgers',
      title: t('gourmetBurgers'),
      icon: '🍔',
      gradient: 'from-yellow-500 to-red-500',
      items: [
        {
          name: 'Panorama Burger',
          description: t('burgerPanorama'),
          price: '1500 ALL',
          popular: true
        },
        {
          name: 'Classic Cheeseburger',
          description: t('burgerClassic'),
          price: '1200 ALL'
        },
        {
          name: 'BBQ Bacon Burger',
          description: t('burgerBBQ'),
          price: '1400 ALL'
        },
        {
          name: 'Chicken Burger',
          description: t('burgerChicken'),
          price: '1300 ALL'
        },
        {
          name: 'Veggie Burger',
          description: t('burgerVeggie'),
          price: '1100 ALL',
          vegetarian: true
        },
        {
          name: 'Fish Burger',
          description: 'Peshk i grilluar, sallatë, domate, salcë tartare',
          price: '1400 ALL'
        },
        {
          name: 'Double Cheese',
          description: 'Dy hamburgerë, djathë i dyfishtë, qepë',
          price: '1800 ALL'
        }
      ]
    },
    {
      id: 'crepes',
      title: t('frenchCrepes'),
      icon: '🥞',
      gradient: 'from-pink-500 to-purple-500',
      items: [
        {
          name: 'Nutella Crepe',
          description: t('crepeNutella'),
          price: '800 ALL',
          popular: true,
          vegetarian: true
        },
        {
          name: 'Fresh Fruit Crepe',
          description: t('crepeFruit'),
          price: '900 ALL',
          vegetarian: true
        },
        {
          name: 'Ham & Cheese Crepe',
          description: t('crepeHamCheese'),
          price: '950 ALL'
        },
        {
          name: 'Spinach & Feta Crepe',
          description: t('crepeSpinach'),
          price: '900 ALL',
          vegetarian: true
        },
        {
          name: 'Chocolate Banana Crepe',
          description: t('crepeChocolate'),
          price: '850 ALL',
          vegetarian: true
        },
        {
          name: 'Chicken & Mushroom',
          description: 'Mish pule, kërpudha, djathë krem',
          price: '1000 ALL'
        },
        {
          name: 'Apple Cinnamon',
          description: 'Mollë, kanellë, mjaltë, krem',
          price: '800 ALL',
          vegetarian: true
        }
      ]
    },
    {
      id: 'appetizers',
      title: 'Antipasta & Snacks',
      icon: '🧀',
      gradient: 'from-indigo-500 to-purple-500',
      items: [
        {
          name: 'Bruschetta',
          description: 'Bukë e pjekur, domate, borzilok, hudhra',
          price: '600 ALL',
          vegetarian: true
        },
        {
          name: 'Cheese Platter',
          description: 'Përzgjedhje djathrash lokalë me mjaltë',
          price: '1200 ALL',
          vegetarian: true
        },
        {
          name: 'Olives & Peppers',
          description: 'Ullinj dhe speca të marinuar',
          price: '500 ALL',
          vegetarian: true
        },
        {
          name: 'Chicken Wings',
          description: 'Krahë pule me salcë BBQ ose buffalo',
          price: '800 ALL',
          spicy: true
        },
        {
          name: 'Nachos',
          description: 'Nachos me djathë, salcë, jalapeño',
          price: '700 ALL',
          vegetarian: true,
          spicy: true
        },
        {
          name: 'Garlic Bread',
          description: 'Bukë me hudhra dhe borzilok',
          price: '400 ALL',
          vegetarian: true
        }
      ]
    },
    {
      id: 'desserts',
      title: 'Ëmbëlsira',
      icon: '🍰',
      gradient: 'from-pink-500 to-rose-500',
      items: [
        {
          name: 'Tiramisu',
          description: 'Tiramisu klasike italiane',
          price: '600 ALL',
          popular: true,
          vegetarian: true
        },
        {
          name: 'Panna Cotta',
          description: 'Krem i butë me fruta pylli',
          price: '550 ALL',
          vegetarian: true
        },
        {
          name: 'Chocolate Lava Cake',
          description: 'Kek çokollate me zemër të lëngshme',
          price: '650 ALL',
          vegetarian: true
        },
        {
          name: 'Ice Cream',
          description: 'Akullore artizanale - 3 topa',
          price: '400 ALL',
          vegetarian: true
        },
        {
          name: 'Fruit Salad',
          description: 'Sallatë frutash stinore',
          price: '450 ALL',
          vegetarian: true
        }
      ]
    }
  ]

  const activeMenu = menuCategories.find(cat => cat.id === activeCategory) || menuCategories[0]

  const filteredItems = activeMenu.items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      {/* Fixed Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link 
              href="/#menu"
              className="flex items-center text-orange-600 hover:text-orange-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">{t('backToHome')}</span>
            </Link>
            
            <h1 className="text-xl font-bold text-gray-900">
              {t('fullMenuTitle')}
            </h1>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Kërko në menu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 bg-gray-100 border-0 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Category Tabs - Horizontal Scroll */}
          <div className="overflow-x-auto pb-2">
            <div className="flex space-x-2 min-w-max">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="text-sm">{category.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Category Header */}
        <div className={`bg-gradient-to-r ${activeMenu.gradient} rounded-2xl p-6 text-white mb-6 mt-4`}>
          <div className="flex items-center justify-center space-x-3">
            <span className="text-4xl">{activeMenu.icon}</span>
            <div className="text-center">
              <h2 className="text-2xl font-bold">{activeMenu.title}</h2>
              <p className="text-white/80 text-sm">{filteredItems.length} artikuj</p>
            </div>
          </div>
        </div>

        {/* Menu Items - Mobile Optimized */}
        <div className="space-y-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1 pr-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                    {item.popular && (
                      <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {t('popular')}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    {item.vegetarian && (
                      <span className="text-green-500 text-sm flex items-center">
                        <span className="mr-1">🌱</span>
                        <span className="text-xs">{t('vegetarian')}</span>
                      </span>
                    )}
                    {item.spicy && (
                      <span className="text-red-500 text-sm flex items-center">
                        <span className="mr-1">🌶️</span>
                        <span className="text-xs">{t('spicy')}</span>
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="text-right">
                  <span className="text-xl font-bold text-orange-600">{item.price}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {item.description}
              </p>

              <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>{t('addToOrder')}</span>
              </button>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Nuk u gjet asgjë</h3>
            <p className="text-gray-600">Provo të kërkosh me fjalë të tjera</p>
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="tel:+355695687575"
          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 p-4 z-40">
        <div className="max-w-md mx-auto">
          <div className="flex space-x-3">
            <Link
              href="/#contact"
              className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-xl font-semibold text-center hover:from-orange-600 hover:to-pink-600 transition-all duration-200"
            >
              {t('makeReservation')}
            </Link>
            <a
              href="tel:+355695687575"
              className="flex-1 border-2 border-orange-500 text-orange-600 py-3 rounded-xl font-semibold text-center hover:bg-orange-500 hover:text-white transition-all duration-200"
            >
              {t('callNow')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}