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
    bookDescription: 'Book a table, or place an order for pickup or delivery.',
    dineIn: 'Dine In',
    pickup: 'Pickup',
    delivery: 'Delivery',
    bookTab: 'Book Table',
    pickupTab: 'Pickup',
    deliveryTab: 'Delivery',
    chooseItems: 'Choose Items',
    quantity: 'Quantity',
    totalCost: 'Total Cost',
    estimatedTime: 'Estimated Time',
    paymentOption: 'Payment Option',
    cash: 'Cash',
    card: 'Card',
    placeOrder: 'Place Order',
    date: 'Date',
    time: 'Time',
    guests: 'Guests',
    orderType: 'Order Type',
    bookNow: 'Submit',
    
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
    signatureCocktails: 'Signature Cocktails',
    freshCoffee: 'Locally roasted coffee beans',
    smoothies: 'Fresh fruit smoothies and healthy blends',
    freshJuices: 'Squeezed daily from local fruits',
    milkshakes: 'Creamy milkshakes with various flavors',
    woodFiredPizza: 'Pizza',
    gourmetBurgers: 'Burgers',
    frenchCrepes: 'Crepes',
    lightSnacks: 'Perfect for sharing and light dining',
    specialOffers: 'Special Offers',
    specialOffersDescription: 'Join us during sunset hours for exclusive discounts and special menu items.',
    viewFullMenu: 'View Full Menu',
    
    // Full Menu Screen
    fullMenuTitle: 'Complete Menu',
    fullMenuDescription: 'Explore our full selection of handcrafted cocktails, artisanal coffee, wood-fired pizzas, gourmet burgers, and delicious crepes.',
    backToHome: 'Back to Home',
    popular: 'Popular',
    vegetarian: 'Vegetarian',
    spicy: 'Spicy',
    addToOrder: 'Add to Order',
    readyToOrder: 'Ready to Order?',
    contactUsToOrder: 'Contact us to make a reservation or place your order for pickup.',
    makeReservation: 'Make Reservation',
    callNow: 'Call Now',
    
    // Menu Categories
    coffeeAndTea: 'Coffee & Tea',
    smoothiesAndJuices: 'Smoothies & Juices',
    
    // Cocktails
    cocktailPanoramaSunset: 'Our signature cocktail with rum, passion fruit, and a sunset gradient',
    cocktailDivjakaBreeze: 'Refreshing gin-based cocktail with cucumber and mint',
    cocktailRooftopMojito: 'Classic mojito with a rooftop twist and fresh herbs',
    cocktailAlbanianSpritz: 'Local aperitif with prosecco and Albanian herbs',
    cocktailForestView: 'Whiskey-based cocktail with forest berry infusion',
    cocktailCoastalMule: 'Moscow mule variation with coastal herbs',
    
    // Coffee & Tea
    coffeeEspresso: 'Rich, full-bodied espresso from locally roasted beans',
    coffeeCappuccino: 'Perfect balance of espresso, steamed milk, and foam',
    coffeeLatte: 'Smooth espresso with steamed milk and light foam',
    coffeeMacchiato: 'Espresso "marked" with a dollop of foamed milk',
    coffeeTurkish: 'Traditional Turkish coffee, finely ground and aromatic',
    coffeeIced: 'Cold brew coffee served over ice with milk',
    teaGreen: 'Premium green tea with antioxidants',
    teaHerbal: 'Relaxing herbal blend with chamomile and mint',
    
    // Smoothies & Juices
    smoothieTropical: 'Mango, pineapple, coconut milk, and banana',
    smoothieBerry: 'Mixed berries, yogurt, and honey',
    smoothieGreen: 'Spinach, apple, banana, and ginger',
    juiceOrange: 'Freshly squeezed orange juice',
    juiceApple: 'Pure apple juice from local orchards',
    juiceBerry: 'Mixed berry juice with natural sweetness',
    
    // Pizza
    pizzaMargherita: 'Classic tomato sauce, mozzarella, and fresh basil',
    pizzaPanorama: 'Prosciutto crudo, arugula, cherry tomatoes, parmesan, and mozzarella',
    pizzaQuattro: 'Four seasons with ham, mushrooms, bell peppers, olives, and mozzarella',
    pizzaProsciutto: 'Chicken or pork prosciutto with mozzarella',
    pizzaVegetarian: 'Bell peppers, mushrooms, olives, and mozzarella',
    pizzaDiavola: 'Spicy salami, tabasco (optional), and mozzarella',
    
    // Burgers
    burgerPanorama: 'Angus beef, caramelized onions, bacon, and special sauce',
    burgerClassic: 'Beef patty, lettuce, tomato, onion, and cheese',
    burgerBBQ: 'BBQ sauce, bacon, onion rings, and cheddar cheese',
    burgerChicken: 'Grilled chicken breast, avocado, and herb mayo',
    burgerVeggie: 'Plant-based patty with fresh vegetables',
    
    // Crepes
    crepeNutella: 'Classic crepe with Nutella and powdered sugar',
    crepeFruit: 'Seasonal fresh fruits with whipped cream',
    crepeHamCheese: 'Savory crepe with ham and melted cheese',
    crepeSpinach: 'Spinach, feta cheese, and herbs',
    crepeChocolate: 'Dark chocolate and sliced banana',
    
    // Contact Section
    contact: 'Contact Us',
    contactDescription: 'Get in touch with us to make a reservation or ask any questions.',
    getInTouch: 'Get in Touch',
    sendMessage: 'Send us a Message',
    location: 'Location',
    phone: 'Phone',
    email: 'Email',
    hours: 'Opening Hours',
    dailyHours: 'Daily: 7:30 AM - 11:00 PM',
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
    subtitle: 'Pamja më e mirë në Divjakë',
    
    // Hero Section
    viewMenu: 'Shiko Menune',
    bookTable: 'Rezervo Tavoline',
    bookDescription: 'Rezervoni një tavolinë ose bëni porosi për të marrë ose për dërgesë.',
    dineIn: 'Në lokal',
    pickup: 'Merr vetë',
    delivery: 'Dërgesë',
    bookTab: 'Rezervo Tavolinë',
    pickupTab: 'Merr Vetë',
    deliveryTab: 'Dërgesë',
    chooseItems: 'Zgjidh Produktet',
    quantity: 'Sasia',
    totalCost: 'Kosto Totale',
    estimatedTime: 'Koha e Përafërt',
    paymentOption: 'Mënyra e Pagesës',
    cash: 'Cash',
    card: 'Kartë',
    placeOrder: 'Bëj Porosi',
    date: 'Data',
    time: 'Ora',
    guests: 'Persona',
    orderType: 'Lloji i Porosisë',
    bookNow: 'Dërgo',
    
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
    signatureCocktails: 'Kokteje Speciale',
    freshCoffee: 'Kafe e pjekur lokalisht',
    smoothies: 'Smoothie frutash të freskëta dhe përzierje të shëndetshme',
    freshJuices: 'Të shtrydhura çdo ditë nga frutat lokale',
    milkshakes: 'Milkshake kremoz me aroma të ndryshme',
    woodFiredPizza: 'Pizza',
    gourmetBurgers: 'Burger',
    frenchCrepes: 'Krepa',
    lightSnacks: 'Të përsosura për ndarje dhe darkë të lehtë',
    specialOffers: 'Ofertat Speciale',
    specialOffersDescription: 'Bashkohuni me ne gjatë orëve të perëndimit për zbritje ekskluzive dhe artikuj specialë menuje.',
    viewFullMenu: 'Shiko Menunë e Plotë',
    
    // Full Menu Screen
    fullMenuTitle: 'Menuja e Plotë',
    fullMenuDescription: 'Eksploroni përzgjedhjen tonë të plotë të koktejeve të punuara me dorë, kafesë artizanale, pizzave në dru, scacciata të freskëta dhe ëmbëlsirave të shijshme.',
    backToHome: 'Kthehu në Shtëpi',
    popular: 'Popullore',
    vegetarian: 'Vegetariane',
    spicy: 'Djegëse',
    addToOrder: 'Shto në Porosi',
    readyToOrder: 'Gati për të Porositur?',
    contactUsToOrder: 'Na kontaktoni për të bërë një rezervim ose për të bërë porosinë tuaj.',
    makeReservation: 'Bëj Rezervim',
    callNow: 'Telefono Tani',
    
    // Menu Categories
    coffeeAndTea: 'Kafe & Çaj',
    smoothiesAndJuices: 'Smoothie & Lëngje',
    
    // Cocktails
    cocktailPanoramaSunset: 'Kokteli ynë special me rum, frutë pasioni dhe gradient perëndimi',
    cocktailDivjakaBreeze: 'Koktel freskues me bazë xhin me kastravec dhe mente',
    cocktailRooftopMojito: 'Mojito klasike me një prekje çatie dhe bimë të freskëta',
    cocktailAlbanianSpritz: 'Aperitiv lokal me prosecco dhe bimë shqiptare',
    cocktailForestView: 'Koktel me bazë uiski me infuzion mjedre pylli',
    cocktailCoastalMule: 'Variacion i Moscow mule me bimë bregdetare',
    
    // Coffee & Tea
    coffeeEspresso: 'Espresso i pasur nga kokrra të pjekura lokalisht',
    coffeeCappuccino: 'Ekuilibër i përsosur i espresso, qumësht të avulluar dhe shkumë',
    coffeeLatte: 'Espresso i butë me qumësht të avulluar dhe shkumë të lehtë',
    coffeeMacchiato: 'Espresso "i shënuar" me një pikë shkume qumështi',
    coffeeTurkish: 'Kafe turke tradicionale, e bluar imët dhe aromatike',
    coffeeIced: 'Kafe e ftohtë e shërbyer mbi akull me qumësht',
    teaGreen: 'Çaj jeshil premium me antioksidantë',
    teaHerbal: 'Përzierje qetësuese bimore me kamomil dhe mente',
    
    // Smoothies & Juices
    smoothieTropical: 'Mango, ananas, qumësht kokosi dhe banane',
    smoothieBerry: 'Mjedra të përziera, kos dhe mjaltë',
    smoothieGreen: 'Spinaq, mollë, banane dhe xhenxhefil',
    juiceOrange: 'Lëng portokalli i sapo shtrydh',
    juiceApple: 'Lëng molle i pastër nga kopshtet lokale',
    juiceBerry: 'Lëng mjedrash të përziera me ëmbëlsi natyrale',
    
    // Pizza
    pizzaMargherita: 'Salcë domatesh klasike, mozzarella dhe borzilok i freskët',
    pizzaPanorama: 'Proshutë krudo, rucola, pomodorini, parmigiano dhe mozzarella',
    pizzaQuattro: 'Katër stinë me proshutë, kërpudha, speca, ullinj dhe mozzarella',
    pizzaProsciutto: 'Proshutë pule ose derri me mozzarella',
    pizzaVegetarian: 'Speca, kërpudha, ullinj dhe mozzarella',
    pizzaDiavola: 'Sallam pikant, tabasco sipas dëshirës dhe mozzarella',
    
    // Burgers
    burgerPanorama: 'Mish Angus, qepë të karamelizuara, proshutë dhe salcë speciale',
    burgerClassic: 'Hamburger mishi, sallatë, domate, qepë dhe djathë',
    burgerBBQ: 'Salcë BBQ, proshutë, unaza qepe dhe djathë cheddar',
    burgerChicken: 'Gjoks pule në skarë, avokado dhe majonezë bimore',
    burgerVeggie: 'Hamburger bimor me perime të freskëta',
    
    // Crepes
    crepeNutella: 'Krepë klasike me Nutella dhe sheqer pluhur',
    crepeFruit: 'Fruta të freskëta stinore me krem të rrahur',
    crepeHamCheese: 'Krepë e kripur me proshutë dhe djathë të shkrirë',
    crepeSpinach: 'Spinaq, djathë feta dhe bimë',
    crepeChocolate: 'Çokollatë e errët dhe banane të prera',
    
    // Contact Section
    contact: 'Na Kontaktoni',
    contactDescription: 'Kontaktoni me ne për të bërë një rezervim ose për të bërë çdo pyetje.',
    getInTouch: 'Kontaktoni',
    sendMessage: 'Dërgoni një Mesazh',
    location: 'Vendndodhja',
    phone: 'Telefoni',
    email: 'Email',
    hours: 'Orët e Hapjes',
    dailyHours: 'Çdo ditë: 7:30 AM - 11:00 PM',
    name: 'Emri',
    enterName: 'Shkruani emrin tuaj',
    enterEmail: 'Shkruani email-in tuaj',
    enterPhone: 'Shkruani numrin tuaj të telefonit',
    message: 'Mesazhi',
    enterMessage: 'Shkruani mesazhin tuaj',
    send: 'Dërgo Mesazhin',
    
    // Footer
    footerDescription: 'Përjetoni eksperiencen më të mirë në Panorama Rooftop me pamje panoramike të bregdetit dhe pyllit, ushqime te shijshme dhe cocktails qe te ngelin gjate ne mendje. Eja provoje edhe ti',
    allRightsReserved: 'Të gjitha të drejtat e rezervuara.'
  },
  it: {
    // Navigation
    title: 'Panorama',
    subtitle: 'La vista migliore di Divjaka',
    
    // Hero Section
    viewMenu: 'Vedi Menu',
    bookTable: 'Prenota Tavolo',
    bookDescription: 'Prenota un tavolo o effettua un ordine da asporto o con consegna.',
    dineIn: 'Al tavolo',
    pickup: 'Asporto',
    delivery: 'Consegna',
    bookTab: 'Prenota Tavolo',
    pickupTab: 'Asporto',
    deliveryTab: 'Consegna',
    chooseItems: 'Scegli Prodotti',
    quantity: 'Quantità',
    totalCost: 'Costo Totale',
    estimatedTime: 'Tempo Stimato',
    paymentOption: 'Metodo di Pagamento',
    cash: 'Contanti',
    card: 'Carta',
    placeOrder: 'Effettua Ordine',
    date: 'Data',
    time: 'Ora',
    guests: 'Persone',
    orderType: 'Tipo di Ordine',
    bookNow: 'Invia',
    
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
    signatureCocktails: 'Cocktail Speciali',
    freshCoffee: 'Chicchi di caffè tostati localmente',
    smoothies: 'Frullati di frutta fresca e miscele salutari',
    freshJuices: 'Spremuti quotidianamente da frutti locali',
    milkshakes: 'Frappè cremosi con vari gusti',
    woodFiredPizza: 'Pizza',
    gourmetBurgers: 'Hamburger',
    frenchCrepes: 'Crepes',
    lightSnacks: 'Perfetti per condividere e cenare leggero',
    specialOffers: 'Offerte Speciali',
    specialOffersDescription: 'Unisciti a noi durante le ore del tramonto per sconti esclusivi e articoli speciali del menu.',
    viewFullMenu: 'Vedi Menu Completo',
    
    // Full Menu Screen
    fullMenuTitle: 'Menu Completo',
    fullMenuDescription: 'Esplora la nostra selezione completa di cocktail artigianali, caffè artigianale, pizze a legna, hamburger gourmet e deliziose crepes.',
    backToHome: 'Torna a Casa',
    popular: 'Popolare',
    vegetarian: 'Vegetariano',
    spicy: 'Piccante',
    addToOrder: 'Aggiungi all\'Ordine',
    readyToOrder: 'Pronto per Ordinare?',
    contactUsToOrder: 'Contattaci per fare una prenotazione o effettuare il tuo ordine.',
    makeReservation: 'Fai Prenotazione',
    callNow: 'Chiama Ora',
    
    // Menu Categories
    coffeeAndTea: 'Caffè & Tè',
    smoothiesAndJuices: 'Frullati & Succhi',
    
    // Cocktails
    cocktailPanoramaSunset: 'Il nostro cocktail speciale con rum, frutto della passione e gradiente tramonto',
    cocktailDivjakaBreeze: 'Cocktail rinfrescante a base gin con cetriolo e menta',
    cocktailRooftopMojito: 'Mojito classico con un tocco da terrazza e erbe fresche',
    cocktailAlbanianSpritz: 'Aperitivo locale con prosecco ed erbe albanesi',
    cocktailForestView: 'Cocktail a base whiskey con infusione di frutti di bosco',
    cocktailCoastalMule: 'Variazione del Moscow mule con erbe costiere',
    
    // Coffee & Tea
    coffeeEspresso: 'Espresso ricco e corposo da chicchi tostati localmente',
    coffeeCappuccino: 'Perfetto equilibrio di espresso, latte montato e schiuma',
    coffeeLatte: 'Espresso morbido con latte montato e schiuma leggera',
    coffeeMacchiato: 'Espresso "macchiato" con una goccia di schiuma di latte',
    coffeeTurkish: 'Caffè turco tradizionale, finemente macinato e aromatico',
    coffeeIced: 'Caffè freddo servito su ghiaccio con latte',
    teaGreen: 'Tè verde premium con antiossidanti',
    teaHerbal: 'Miscela rilassante di erbe con camomilla e menta',
    
    // Smoothies & Juices
    smoothieTropical: 'Mango, ananas, latte di cocco e banana',
    smoothieBerry: 'Frutti di bosco misti, yogurt e miele',
    smoothieGreen: 'Spinaci, mela, banana e zenzero',
    juiceOrange: 'Succo d\'arancia appena spremuto',
    juiceApple: 'Succo di mela puro da frutteti locali',
    juiceBerry: 'Succo di frutti di bosco misti con dolcezza naturale',
    
    // Pizza
    pizzaMargherita: 'Salsa di pomodoro classica, mozzarella e basilico fresco',
    pizzaPanorama: 'Prosciutto crudo, rucola, pomodorini, parmigiano e mozzarella',
    pizzaQuattro: 'Quattro stagioni con prosciutto, funghi, peperoni, olive e mozzarella',
    pizzaProsciutto: 'Prosciutto di pollo o maiale con mozzarella',
    pizzaVegetarian: 'Peperoni, funghi, olive e mozzarella',
    pizzaDiavola: 'Salame piccante, tabasco (opzionale) e mozzarella',
    
    // Burgers
    burgerPanorama: 'Manzo Angus, cipolle caramellate, pancetta e salsa speciale',
    burgerClassic: 'Hamburger di manzo, lattuga, pomodoro, cipolla e formaggio',
    burgerBBQ: 'Salsa BBQ, pancetta, anelli di cipolla e formaggio cheddar',
    burgerChicken: 'Petto di pollo grigliato, avocado e maionese alle erbe',
    burgerVeggie: 'Hamburger vegetale con verdure fresche',
    
    // Crepes
    crepeNutella: 'Crepe classica con Nutella e zucchero a velo',
    crepeFruit: 'Frutta fresca di stagione con panna montata',
    crepeHamCheese: 'Crepe salata con prosciutto e formaggio fuso',
    crepeSpinach: 'Spinaci, formaggio feta ed erbe',
    crepeChocolate: 'Cioccolato fondente e banana a fette',
    
    // Contact Section
    contact: 'Contattaci',
    contactDescription: 'Mettiti in contatto con noi per fare una prenotazione o fare qualsiasi domanda.',
    getInTouch: 'Mettiti in Contatto',
    sendMessage: 'Inviaci un Messaggio',
    location: 'Posizione',
    phone: 'Telefono',
    email: 'Email',
    hours: 'Orari di Apertura',
    dailyHours: 'Tutti i giorni: 7:30 - 23:00',
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