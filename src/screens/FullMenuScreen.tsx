'use client'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface MenuItem {
  name: string
  description: string
  price: string
  calories: number
  popular?: boolean
  spicy?: boolean
  vegetarian?: boolean
  category?: string
  image?: string
  ingredients?: string[]
  allergens?: string[]
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
  const [caloriePopup, setCaloriePopup] = useState<{ item: MenuItem; position: { x: number; y: number } } | null>(null)

  const menuCategories: MenuCategory[] = [
    {
      id: 'pizza',
      title: t('woodFiredPizza'),
      icon: '🍕',
      gradient: 'from-red-500 via-orange-500 to-yellow-500',
      items: [
        {
          name: 'Margherita',
          description: t('pizzaMargherita'),
          price: '1,200 ALL',
          calories: 850,
          popular: true,
          vegetarian: true,
          ingredients: ['Domate', 'Mozzarella', 'Borzilok', 'Vaj ulliri'],
          allergens: ['Gluten', 'Qumësht']
        },
        {
          name: 'Panorama Special',
          description: t('pizzaPanorama'),
          price: '1,800 ALL',
          calories: 1150,
          popular: true,
          ingredients: ['Proshutë', 'Rucola', 'Domate qershi', 'Parmesan', 'Mozzarella'],
          allergens: ['Gluten', 'Qumësht']
        },
        {
          name: 'Quattro Stagioni',
          description: t('pizzaQuattro'),
          price: '1,600 ALL',
          calories: 1050,
          ingredients: ['Proshutë', 'Kërpudha', 'Anginare', 'Ullinj', 'Mozzarella'],
          allergens: ['Gluten', 'Qumësht']
        },
        {
          name: 'Prosciutto e Funghi',
          description: t('pizzaProsciutto'),
          price: '1,500 ALL',
          calories: 980,
          ingredients: ['Prosciutto di Parma', 'Kërpudha porcini', 'Mozzarella'],
          allergens: ['Gluten', 'Qumësht']
        },
        {
          name: 'Vegetariana',
          description: t('pizzaVegetarian'),
          price: '1,400 ALL',
          calories: 750,
          vegetarian: true,
          ingredients: ['Speca', 'Kungull', 'Patëllxhan', 'Mozzarella', 'Domate'],
          allergens: ['Gluten', 'Qumësht']
        },
        {
          name: 'Diavola',
          description: t('pizzaDiavola'),
          price: '1,500 ALL',
          calories: 1100,
          spicy: true,
          ingredients: ['Sallam djegës', 'Spec djegës', 'Mozzarella', 'Domate'],
          allergens: ['Gluten', 'Qumësht']
        },
        {
          name: 'Capricciosa',
          description: 'Proshutë, kërpudha, anginare, ullinj',
          price: '1,650 ALL',
          calories: 1080,
          ingredients: ['Proshutë', 'Kërpudha', 'Anginare', 'Ullinj', 'Mozzarella'],
          allergens: ['Gluten', 'Qumësht']
        },
        {
          name: 'Quattro Formaggi',
          description: 'Katër lloje djathërash',
          price: '1,550 ALL',
          calories: 1200,
          vegetarian: true,
          ingredients: ['Mozzarella', 'Gorgonzola', 'Parmesan', 'Ricotta'],
          allergens: ['Gluten', 'Qumësht']
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
          allergens: ['Gluten', 'Vezë']
        },
        {
          name: 'Classic Cheeseburger',
          description: t('burgerClassic'),
          price: '1,200 ALL',
          calories: 850,
          ingredients: ['Hamburger mishi 180g', 'Djathë cheddar', 'Sallatë', 'Domate', 'Qepë'],
          allergens: ['Gluten', 'Qumësht']
        },
        {
          name: 'BBQ Bacon Burger',
          description: t('burgerBBQ'),
          price: '1,500 ALL',
          calories: 1100,
          ingredients: ['Mish 200g', 'Proshutë', 'Unaza qepe', 'Salcë BBQ', 'Djathë cheddar'],
          allergens: ['Gluten', 'Qumësht']
        },
        {
          name: 'Chicken Burger',
          description: t('burgerChicken'),
          price: '1,300 ALL',
          calories: 750,
          ingredients: ['Gjoks pule 180g', 'Avokado', 'Majonezë bimore', 'Sallatë', 'Domate'],
          allergens: ['Gluten', 'Vezë']
        },
        {
          name: 'Veggie Burger',
          description: t('burgerVeggie'),
          price: '1,100 ALL',
          calories: 650,
          vegetarian: true,
          ingredients: ['Hamburger bimor', 'Avokado', 'Sallatë', 'Domate', 'Qepë e kuqe'],
          allergens: ['Gluten', 'Soja']
        },
        {
          name: 'Fish Burger',
          description: 'Peshk i grilluar, sallatë, domate, salcë tartare',
          price: '1,350 ALL',
          calories: 800,
          ingredients: ['Filet peshku 180g', 'Salcë tartare', 'Sallatë', 'Domate', 'Qepë'],
          allergens: ['Gluten', 'Peshk', 'Vezë']
        },
        {
          name: 'Double Cheese',
          description: 'Dy hamburgerë, djathë i dyfishtë, qepë',
          price: '1,800 ALL',
          calories: 1350,
          ingredients: ['2x Hamburger mishi 150g', '2x Djathë cheddar', 'Qepë', 'Sallatë'],
          allergens: ['Gluten', 'Qumësht']
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
          allergens: ['Gluten', 'Qumësht', 'Bajame']
        },
        {
          name: 'Fresh Fruit Crepe',
          description: t('crepeFruit'),
          price: '900 ALL',
          calories: 550,
          vegetarian: true,
          ingredients: ['Fruta stinore', 'Krem të rrahur', 'Mjaltë'],
          allergens: ['Gluten', 'Qumësht']
        },
        {
          name: 'Ham & Cheese Crepe',
          description: t('crepeHamCheese'),
          price: '1,000 ALL',
          calories: 750,
          ingredients: ['Proshutë', 'Djathë emmental', 'Krem djathri'],
          allergens: ['Gluten', 'Qumësht']
        },
        {
          name: 'Spinach & Feta Crepe',
          description: t('crepeSpinach'),
          price: '950 ALL',
          calories: 600,
          vegetarian: true,
          ingredients: ['Spinaq i freskët', 'Djathë feta', 'Bimë aromatike'],
          allergens: ['Gluten', 'Qumësht']
        },
        {
          name: 'Chocolate Banana Crepe',
          description: t('crepeChocolate'),
          price: '850 ALL',
          calories: 700,
          vegetarian: true,
          ingredients: ['Çokollatë e errët', 'Banane', 'Krem vanilie'],
          allergens: ['Gluten', 'Qumësht']
        },
        {
          name: 'Chicken & Mushroom',
          description: 'Mish pule, kërpudha, djathë krem',
          price: '1,100 ALL',
          calories: 800,
          ingredients: ['Mish pule', 'Kërpudha', 'Djathë krem', 'Bimë'],
          allergens: ['Gluten', 'Qumësht']
        },
        {
          name: 'Apple Cinnamon',
          description: 'Mollë, kanellë, mjaltë, krem',
          price: '750 ALL',
          calories: 500,
          vegetarian: true,
          ingredients: ['Mollë', 'Kanellë', 'Mjaltë', 'Krem'],
          allergens: ['Gluten', 'Qumësht']
        }
      ]
    },
    {
      id: 'appetizers',
      title: 'Antipasta & Snacks',
      icon: '🧀',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      items: [
        {
          name: 'Bruschetta Trio',
          description: 'Tri lloje bruschetta me domate, pesto dhe kërpudha',
          price: '900 ALL',
          calories: 450,
          vegetarian: true,
          ingredients: ['Bukë artizanale', 'Domate', 'Pesto', 'Kërpudha', 'Borzilok'],
          allergens: ['Gluten', 'Bajame']
        },
        {
          name: 'Cheese & Charcuterie Board',
          description: 'Përzgjedhje djathrash dhe mishërash me mjaltë dhe arra',
          price: '1,800 ALL',
          calories: 1200,
          ingredients: ['Djathëra lokalë', 'Proshutë', 'Sallam', 'Mjaltë', 'Arra', 'Fiq'],
          allergens: ['Qumësht', 'Arra']
        },
        {
          name: 'Mediterranean Olives',
          description: 'Ullinj të marinuar me bimë dhe spec',
          price: '600 ALL',
          calories: 280,
          vegetarian: true,
          ingredients: ['Ullinj Kalamata', 'Ullinj jeshilë', 'Bimë', 'Spec', 'Vaj ulliri'],
          allergens: []
        },
        {
          name: 'Buffalo Wings',
          description: 'Krahë pule me salcë buffalo dhe ranch',
          price: '1,200 ALL',
          calories: 850,
          spicy: true,
          ingredients: ['Krahë pule', 'Salcë buffalo', 'Salcë ranch', 'Selino'],
          allergens: ['Qumësht']
        },
        {
          name: 'Loaded Nachos',
          description: 'Nachos me djathë, guacamole, salsa dhe jalapeño',
          price: '1,100 ALL',
          calories: 950,
          vegetarian: true,
          spicy: true,
          ingredients: ['Tortilla chips', 'Djathë cheddar', 'Guacamole', 'Salsa', 'Jalapeño'],
          allergens: ['Qumësht']
        },
        {
          name: 'Garlic Bread Supreme',
          description: 'Bukë me hudhra, djathë dhe bimë',
          price: '700 ALL',
          calories: 550,
          vegetarian: true,
          ingredients: ['Bukë artizanale', 'Hudhra', 'Djathë mozzarella', 'Borzilok'],
          allergens: ['Gluten', 'Qumësht']
        }
      ]
    },
    {
      id: 'desserts',
      title: 'Ëmbëlsira',
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
          allergens: ['Gluten', 'Qumësht', 'Vezë', 'Alkool']
        },
        {
          name: 'Panna Cotta Berry',
          description: 'Krem i butë me fruta pylli dhe coulis',
          price: '800 ALL',
          calories: 350,
          vegetarian: true,
          ingredients: ['Krem', 'Sheqer', 'Gelatinë', 'Fruta pylli', 'Vanilie'],
          allergens: ['Qumësht']
        },
        {
          name: 'Chocolate Lava Cake',
          description: 'Kek çokollate me zemër të lëngshme dhe akullore vanilie',
          price: '900 ALL',
          calories: 650,
          vegetarian: true,
          ingredients: ['Çokollatë e errët', 'Gjalpë', 'Vezë', 'Sheqer', 'Akullore vanilie'],
          allergens: ['Gluten', 'Qumësht', 'Vezë']
        },
        {
          name: 'Gelato Selection',
          description: 'Tre topa akullore artizanale me aroma të zgjedhura',
          price: '750 ALL',
          calories: 420,
          vegetarian: true,
          ingredients: ['Qumësht', 'Krem', 'Sheqer', 'Aroma natyrale'],
          allergens: ['Qumësht']
        },
        {
          name: 'Seasonal Fruit Tart',
          description: 'Tartë me fruta stinore dhe krem patissier',
          price: '850 ALL',
          calories: 380,
          vegetarian: true,
          ingredients: ['Brumë i shkurtër', 'Krem patissier', 'Fruta stinore', 'Xhelatin'],
          allergens: ['Gluten', 'Qumësht', 'Vezë']
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

  const handleCalorieClick = (item: MenuItem, event: React.MouseEvent) => {
    event.stopPropagation()
    const rect = (event.target as HTMLElement).getBoundingClientRect()
    setCaloriePopup({
      item,
      position: {
        x: rect.left + rect.width / 2,
        y: rect.top - 10
      }
    })
  }

  const closeCaloriePopup = () => {
    setCaloriePopup(null)
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-pink-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Menu Gourmet
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Zbuloni përzgjedhjen tonë ekskluzive të ushqimeve të përgatitura me përbërës të freskët dhe teknika kulinare moderne
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Kërko në menu..."
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
              <p className="text-white/90 text-lg">{filteredItems.length} specialitete të përzgjedhura</p>
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
                          <span>Popular</span>
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      {item.vegetarian && (
                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                          <span>🌱</span>
                          <span>Vegetarian</span>
                        </span>
                      )}
                      {item.spicy && (
                        <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                          <span>🌶️</span>
                          <span>Spicy</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Calorie Info Button */}
                  <button
                    onClick={(e) => handleCalorieClick(item, e)}
                    className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold hover:scale-110 transition-transform shadow-lg"
                    title="Shiko informacionin ushqyes"
                  >
                    i
                  </button>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {item.description}
                </p>

                {/* Ingredients */}
                {item.ingredients && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Përbërësit kryesorë:</p>
                    <div className="flex flex-wrap gap-1">
                      {item.ingredients.slice(0, 4).map((ingredient, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {ingredient}
                        </span>
                      ))}
                      {item.ingredients.length > 4 && (
                        <span className="text-xs text-gray-500">+{item.ingredients.length - 4} më shumë</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">
                    {item.price}
                  </span>
                  <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-xl font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-md">
                    Shto në Porosi
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuk u gjet asgjë</h3>
            <p className="text-gray-600 text-lg">Provo të kërkosh me fjalë të tjera ose zgjidh një kategori tjetër</p>
          </div>
        )}
      </div>

      {/* Calorie Popup */}
      {caloriePopup && (
        <>
          <div 
            className="fixed inset-0 z-40"
            onClick={closeCaloriePopup}
          />
          <div
            className="fixed z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 max-w-sm w-80"
            style={{
              left: `${caloriePopup.position.x}px`,
              top: `${caloriePopup.position.y}px`,
              transform: 'translate(-50%, -100%)'
            }}
          >
            <div className="text-center mb-4">
              <h4 className="font-bold text-lg text-gray-900 mb-2">{caloriePopup.item.name}</h4>
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-3 mb-4">
                <div className="text-3xl font-bold">{caloriePopup.item.calories}</div>
                <div className="text-sm opacity-90">kalori</div>
              </div>
            </div>

            {caloriePopup.item.allergens && caloriePopup.item.allergens.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">⚠️ Alergjene:</p>
                <div className="flex flex-wrap gap-1">
                  {caloriePopup.item.allergens.map((allergen, idx) => (
                    <span key={idx} className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {caloriePopup.item.ingredients && (
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">🥘 Përbërësit:</p>
                <div className="text-sm text-gray-600 space-y-1">
                  {caloriePopup.item.ingredients.map((ingredient, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                      <span>{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={closeCaloriePopup}
              className="w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white py-2 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all"
            >
              Mbyll
            </button>

            {/* Arrow pointing down */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </div>
        </>
      )}

      {/* Floating Contact Button */}
      <a
        href="tel:+355695687575"
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-40"
        title="Telefono për Porosi"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </section>
  )
}