'use client'
import { useState, useRef, useEffect } from 'react'
import { useLanguage, Language } from '../../contexts/LanguageContext'

interface LanguageSelectorProps {
  isScrolled?: boolean
}

const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'sq' as Language, name: 'Shqip', flag: '🇦🇱' },
  { code: 'it' as Language, name: 'Italiano', flag: '🇮🇹' }
]

export default function LanguageSelector({ isScrolled = false }: LanguageSelectorProps) {
  const { lang, setLang } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage = languages.find(l => l.code === lang) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-105 hover:shadow-lg ${
          isScrolled 
            ? 'text-gray-700 hover:bg-gray-100 bg-white/90' 
            : 'text-white hover:bg-white/20 bg-white/10'
        }`}
        aria-label="Select language"
      >
        <span className="text-xl">{currentLanguage.flag}</span>
        <span className="font-semibold text-sm tracking-wider">{currentLanguage.code.toUpperCase()}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-52 z-50">
          <div className="absolute -inset-1 bg-gradient-to-b from-white/20 to-white/10 rounded-2xl blur-sm"></div>
          <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 py-3 ring-1 ring-white/20">
            <div className="absolute top-0 right-6 w-3 h-3 bg-white/95 transform rotate-45 -translate-y-1.5 border-l border-t border-white/30"></div>
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center space-x-4 px-5 py-3 text-left transition-all duration-200 rounded-xl mx-2 group ${
                lang === language.code 
                  ? 'bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-600 shadow-lg' 
                  : 'text-gray-700 hover:bg-white/60 hover:scale-105'
              }`}
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-200">{language.flag}</span>
              <span className="font-semibold tracking-wide">{language.name}</span>
              {lang === language.code && (
                <svg className="w-5 h-5 ml-auto text-orange-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
          </div>
        </div>
      )}
    </div>
  )
}