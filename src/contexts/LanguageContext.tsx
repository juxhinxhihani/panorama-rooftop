'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'en' | 'sq' | 'it'

interface LanguageContextProps {
  lang: Language
  setLang: (l: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    title: 'Panorama',
    subtitle: 'The best view in Divjaka',
    
    // Hero Section
    viewMenu: 'View Menu',
    bookTable: 'Book Table',
    
    // About Section
    aboutTitle: 'Experience Divjaka from Above',
    about: 'Located on the ninth floor in the center of Divjaka. Enjoy the coastline and the forest from above. Best time of the day is sunset when the atmosphere is cosy and relaxed.',
    floor: 'Floor',
    view: 'View',
    bestTime: 'Best at Sunset',
    sunsetTime: '6:00 PM - 8:00 PM',
    
    // Menu Section
    ourMenu: 'Our Menu',
    menuDescription: 'Discover our carefully crafted selection of drinks and dishes, perfect for any time of day.',
    drinks: 'Drinks & Cocktails',
    food: 'Pizza, Burgers & Crepes',
    signatureCocktails: 'Handcrafted cocktails with premium spirits',
    freshCoffee: 'Locally roasted coffee beans',
    smoothies: 'Fresh fruit smoothies and healthy blends',
    freshJuices: 'Squeezed daily from local fruits',
    milkshakes: 'Creamy milkshakes with various flavors',
    woodFiredPizza: 'Authentic Italian-style pizza',
    gourmetBurgers: 'Premium beef burgers with fresh ingredients',
    frenchCrepes: 'Sweet and savory crepes made to order',
    lightSnacks: 'Perfect for sharing and light dining',
    specialOffers: 'Special Offers',
    specialOffersDescription: 'Join us during sunset hours for exclusive discounts and special menu items.',
    viewFullMenu: 'View Full Menu',
    
    // Contact Section
    contact: 'Contact Us',
    contactDescription: 'Get in touch with us to make a reservation or ask any questions.',
    getInTouch: 'Get in Touch',
    sendMessage: 'Send us a Message',
    location: 'Location',
    phone: 'Phone',
    email: 'Email',
    hours: 'Opening Hours',
    dailyHours: 'Daily: 10:00 AM - 12:00 AM',
    name: 'Name',
    enterName: 'Enter your name',
    enterEmail: 'Enter your email',
    enterPhone: 'Enter your phone number',
    message: 'Message',
    enterMessage: 'Enter your message',
    send: 'Send Message',
    
    // Footer
    footerDescription: 'Experience the best rooftop dining in Divjaka with panoramic views of the coastline and forest.',
    allRightsReserved: 'All rights reserved.'
  },
  sq: {
    // Navigation
    title: 'Panorama',
    subtitle: 'Pamja me e mire ne Divjake',
    
    // Hero Section
    viewMenu: 'Shiko Menune',
    bookTable: 'Rezervo Tavoline',
    
    // About Section
    aboutTitle: 'Përjetoni Divjakën nga Lart',
    about: 'Ndodhet ne katin e nente ne qender te Divjakes. Shijoni vijën bregdetare dhe pyllin nga lart. Koha me e mire per te qendruar eshte perendimi i diellit kur atmosfera eshte shume e rehatsheme.',
    floor: 'Kati',
    view: 'Pamje',
    bestTime: 'Më e Mirë në Perëndim',
    sunsetTime: '6:00 PM - 8:00 PM',
    
    // Menu Section
    ourMenu: 'Menuja Jonë',
    menuDescription: 'Zbuloni përzgjedhjen tonë të kujdesshme të pijeve dhe ushqimeve, të përsosura për çdo kohë të ditës.',
    drinks: 'Pije & Kokteje',
    food: 'Pizza, Burger & Krepa',
    signatureCocktails: 'Kokteje të punuara me duar me alkool premium',
    freshCoffee: 'Kafe e pjekur lokalisht',
    smoothies: 'Smoothie frutash të freskëta dhe përzierje të shëndetshme',
    freshJuices: 'Të shtrydhura çdo ditë nga frutat lokale',
    milkshakes: 'Milkshake kremoz me aroma të ndryshme',
    woodFiredPizza: 'Pizza autentike në stil italian',
    gourmetBurgers: 'Burger mishi premium me përbërës të freskët',
    frenchCrepes: 'Krepa të ëmbla dhe të kripura të bëra sipas porosisë',
    lightSnacks: 'Të përsosura për ndarje dhe darkë të lehtë',
    specialOffers: 'Ofertat Speciale',
    specialOffersDescription: 'Bashkohuni me ne gjatë orëve të perëndimit për zbritje ekskluzive dhe artikuj specialë menuje.',
    viewFullMenu: 'Shiko Menunë e Plotë',
    
    // Contact Section
    contact: 'Na Kontaktoni',
    contactDescription: 'Kontaktoni me ne për të bërë një rezervim ose për të bërë çdo pyetje.',
    getInTouch: 'Kontaktoni',
    sendMessage: 'Dërgoni një Mesazh',
    location: 'Vendndodhja',
    phone: 'Telefoni',
    email: 'Email',
    hours: 'Orët e Hapjes',
    dailyHours: 'Çdo ditë: 10:00 AM - 12:00 AM',
    name: 'Emri',
    enterName: 'Shkruani emrin tuaj',
    enterEmail: 'Shkruani email-in tuaj',
    enterPhone: 'Shkruani numrin tuaj të telefonit',
    message: 'Mesazhi',
    enterMessage: 'Shkruani mesazhin tuaj',
    send: 'Dërgo Mesazhin',
    
    // Footer
    footerDescription: 'Përjetoni darkën më të mirë në çati në Divjakë me pamje panoramike të bregdetit dhe pyllit.',
    allRightsReserved: 'Të gjitha të drejtat e rezervuara.'
  },
  it: {
    // Navigation
    title: 'Panorama',
    subtitle: 'La vista migliore di Divjaka',
    
    // Hero Section
    viewMenu: 'Vedi Menu',
    bookTable: 'Prenota Tavolo',
    
    // About Section
    aboutTitle: 'Vivi Divjaka dall\'Alto',
    about: 'Situato al nono piano nel centro di Divjaka. Goditi la costa e la foresta dall\'alto. Il momento migliore della giornata è il tramonto quando l\'atmosfera è accogliente e rilassata.',
    floor: 'Piano',
    view: 'Vista',
    bestTime: 'Meglio al Tramonto',
    sunsetTime: '18:00 - 20:00',
    
    // Menu Section
    ourMenu: 'Il Nostro Menu',
    menuDescription: 'Scopri la nostra selezione accuratamente preparata di bevande e piatti, perfetta per ogni momento della giornata.',
    drinks: 'Bevande & Cocktail',
    food: 'Pizza, Burger & Crepes',
    signatureCocktails: 'Cocktail artigianali con liquori premium',
    freshCoffee: 'Chicchi di caffè tostati localmente',
    smoothies: 'Frullati di frutta fresca e miscele salutari',
    freshJuices: 'Spremuti quotidianamente da frutti locali',
    milkshakes: 'Frappè cremosi con vari gusti',
    woodFiredPizza: 'Pizza autentica in stile italiano',
    gourmetBurgers: 'Hamburger di manzo premium con ingredienti freschi',
    frenchCrepes: 'Crepes dolci e salate fatte su ordinazione',
    lightSnacks: 'Perfetti per condividere e cenare leggero',
    specialOffers: 'Offerte Speciali',
    specialOffersDescription: 'Unisciti a noi durante le ore del tramonto per sconti esclusivi e articoli speciali del menu.',
    viewFullMenu: 'Vedi Menu Completo',
    
    // Contact Section
    contact: 'Contattaci',
    contactDescription: 'Mettiti in contatto con noi per fare una prenotazione o fare qualsiasi domanda.',
    getInTouch: 'Mettiti in Contatto',
    sendMessage: 'Inviaci un Messaggio',
    location: 'Posizione',
    phone: 'Telefono',
    email: 'Email',
    hours: 'Orari di Apertura',
    dailyHours: 'Tutti i giorni: 10:00 - 24:00',
    name: 'Nome',
    enterName: 'Inserisci il tuo nome',
    enterEmail: 'Inserisci la tua email',
    enterPhone: 'Inserisci il tuo numero di telefono',
    message: 'Messaggio',
    enterMessage: 'Inserisci il tuo messaggio',
    send: 'Invia Messaggio',
    
    // Footer
    footerDescription: 'Vivi la migliore esperienza culinaria sul tetto a Divjaka con viste panoramiche della costa e della foresta.',
    allRightsReserved: 'Tutti i diritti riservati.'
  }
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('en')

  // Load saved language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('panorama-language') as Language
    if (savedLang && ['en', 'sq', 'it'].includes(savedLang)) {
      setLang(savedLang)
    }
  }, [])

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('panorama-language', lang)
  }, [lang])

  const t = (key: string) => translations[lang][key] || key

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}