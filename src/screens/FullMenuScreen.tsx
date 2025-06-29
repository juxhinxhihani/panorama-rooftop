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
          price: '600 ALL',
          popular: true
        },
        {
          name: 'Divjaka Breeze',
          description: t('cocktailDivjakaBreeze'),
          price: '600 ALL'
        },
        {
          name: 'Rooftop Mojito',
          description: t('cocktailRooftopMojito'),
          price: '600 ALL',
          popular: true
        },
        {
          name: 'Albanian Spritz',
          description: t('cocktailAlbanianSpritz'),
          price: '450 ALL'
        },
        {
          name: 'Forest View',
          description: t('cocktailForestView'),
          price: '550 ALL'
        },
        {
          name: 'Coastal Mule',
          description: t('cocktailCoastalMule'),
          price: '500 ALL'
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
          price: '70 ALL'
        },
        {
          name: 'Cappuccino',
          description: t('coffeeCappuccino'),
          price: '150 ALL',
          popular: true
        },
        {
          name: 'Latte',
          description: t('coffeeLatte'),
          price: '150 ALL'
        },
        {
          name: 'Macchiato',
          description: t('coffeeMacchiato'),
          price: '80 ALL'
        },
        {
          name: 'Turkish Coffee',
          description: t('coffeeTurkish'),
          price: '80 ALL'
        },
        {
          name: 'Iced Coffee',
          description: t('coffeeIced'),
          price: '200 ALL'
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
          price: '250 ALL',
          popular: true
        },
        {
          name: 'Berry Blast',
          description: t('smoothieBerry'),
          price: '250 ALL'
        },
        {
          name: 'Green Goddess',
          description: t('smoothieGreen'),
          price: '300 ALL',
          vegetarian: true
        },
        {
          name: 'Orange Juice',
          description: t('juiceOrange'),
          price: '200 ALL'
        },
        {
          name: 'Apple Juice',
          description: t('juiceApple'),
          price: '200 ALL'
        },
        {
          name: 'Mixed Berry Juice',
          description: t('juiceBerry'),
          price: '400 ALL'
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
          price: '450 ALL',
          popular: true,
          vegetarian: true
        },
        {
          name: 'Panorama Special',
          description: t('pizzaPanorama'),
          price: '650 ALL',
          popular: true
        },
        {
          name: 'Quattro Stagioni',
          description: t('pizzaQuattro'),
          price: '600 ALL'
        },
        {
          name: 'Prosciutto e Funghi',
          description: t('pizzaProsciutto'),
          price: '550 ALL'
        },
        {
          name: 'Vegetariana',
          description: t('pizzaVegetarian'),
          price: '500 ALL',
          vegetarian: true
        },
        {
          name: 'Diavola',
          description: t('pizzaDiavola'),
          price: '600 ALL',
          spicy: true
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
          price: '500 ALL',
          popular: true
        },
        {
          name: 'Classic Cheeseburger',
          description: t('burgerClassic'),
          price: '450 ALL'
        },
        {
          name: 'BBQ Bacon Burger',
          description: t('burgerBBQ'),
          price: '600 ALL'
        },
        {
          name: 'Chicken Burger',
          description: t('burgerChicken'),
          price: '550 ALL'
        },
        {
          name: 'Veggie Burger',
          description: t('burgerVeggie'),
          price: '400 ALL',
          vegetarian: true
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
          price: '180 ALL',
          popular: true
        },
        {
          name: 'Fresh Fruit Crepe',
          description: t('crepeFruit'),
          price: '250 ALL'
        },
        {
          name: 'Ham & Cheese Crepe',
          description: t('crepeHamCheese'),
          price: '250 ALL'
        },
        {
          name: 'Spinach & Feta Crepe',
          description: t('crepeSpinach'),
          price: '300 ALL',
          vegetarian: true
        },
        {
          name: 'Nutella Banana Crepe',
          description: t('crepeChocolate'),
          price: '220 ALL'
        }
      ]
    }
  ]

  const activeMenu = menuCategories.find(cat => cat.id === activeCategory) || menuCategories[0]

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            href="/#menu"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('backToHome')}
          </Link>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('fullMenuTitle')}
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('fullMenuDescription')}
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg transform scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Category Header */}
          <div className={`bg-gradient-to-r ${activeMenu.gradient} p-8 text-white`}>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-5xl">{activeMenu.icon}</span>
              <h2 className="text-3xl font-bold">{activeMenu.title}</h2>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeMenu.items.map((item, index) => (
                <div
                  key={index}
                  className="relative p-6 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-200 group"
                >
                  {/* Popular Badge */}
                  {item.popular && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {t('popular')}
                    </div>
                  )}

                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-2 ml-4">
                      {item.vegetarian && (
                        <span className="text-green-500 text-lg" title={t('vegetarian')}>🌱</span>
                      )}
                      {item.spicy && (
                        <span className="text-red-500 text-lg" title={t('spicy')}>🌶️</span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">
                      {item.price}
                    </span>
                    <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 opacity-0 group-hover:opacity-100">
                      {t('addToOrder')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('readyToOrder')}</h3>
            <p className="text-gray-600 mb-6">{t('contactUsToOrder')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200"
              >
                {t('makeReservation')}
              </Link>
              <a
                href="tel:+355695687575"
                className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200"
              >
                {t('callNow')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
