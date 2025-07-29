'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import LanguageSelector from '../ui/LanguageSelector'
import MobileMenu from '../ui/MobileMenu'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/menu', label: 'MENU' },
    { href: '/contact', label: 'CONTACT' }
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform shadow-lg">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl text-white drop-shadow-lg">
                Panorama
              </span>
            </Link>

            {/* Center Navigation Pill */}
            <div className="hidden md:flex items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-full px-2 py-2 shadow-lg border border-white/20">
                <nav className="flex items-center space-x-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-6 py-2 rounded-full font-medium text-sm tracking-wide transition-all duration-200 ${
                        pathname === item.href 
                          ? 'bg-white text-gray-900 shadow-md' 
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Right side - Language selector and mobile menu */}
            <div className="flex items-center space-x-4">
              <LanguageSelector isScrolled={false} />
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10 backdrop-blur-sm"
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <span className={`block h-0.5 w-6 bg-current transform transition-transform ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                  }`} />
                  <span className={`block h-0.5 w-6 bg-current transition-opacity ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`} />
                  <span className={`block h-0.5 w-6 bg-current transform transition-transform ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  )
}