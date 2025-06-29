'use client'
import React, { createContext, useContext, useState } from 'react'

export type Language = 'en' | 'sq' | 'it'

interface LanguageContextProps {
  lang: Language
  setLang: (l: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    title: 'Panorama Rooftop',
    subtitle: 'The best view in Divjaka',
    about: 'Located on the ninth floor in the center of Divjaka. Enjoy the coastline and the forest from above. Best time of the day is sunset when the atmosphere is cosy and relaxed.',
    drinks: 'Drinks & Cocktails',
    food: 'Pizza, Burgers & Crepes',
    contact: 'Contact Us',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send'
  },
  sq: {
    title: 'Panorama Rooftop',
    subtitle: 'Pamja me e mire ne Divjake',
    about: 'Ndodhet ne katin e nente ne qender te Divjakes. Shijoni vijën bregdetare dhe pyllin nga lart. Koha me e mire per te qendruar eshte perendimi i diellit kur atmosfera eshte shume e rehatsheme.',
    drinks: 'Pije & Kokteje',
    food: 'Pizza, Burger & Krepa',
    contact: 'Na Kontaktoni',
    name: 'Emri',
    email: 'Email',
    message: 'Mesazhi',
    send: 'Dergo'
  },
  it: {
    title: 'Panorama Rooftop',
    subtitle: 'La vista migliore di Divjaka',
    about: 'Situato al nono piano nel centro di Divjaka. Goditi la costa e la foresta dall\'alto. Il momento migliore della giornata è il tramonto quando l\'atmosfera è accogliente.',
    drinks: 'Bevande & Cocktail',
    food: 'Pizza, Burger & Crepes',
    contact: 'Contattaci',
    name: 'Nome',
    email: 'Email',
    message: 'Messaggio',
    send: 'Invia'
  }
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('en')
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
