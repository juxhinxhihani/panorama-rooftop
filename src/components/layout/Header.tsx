'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import LanguageSelector from '../ui/LanguageSelector'
import MobileMenu from '../ui/MobileMenu'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Menu' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className={`font-bold text-xl transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Panorama
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-orange-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right side - Language selector and mobile menu */}
            <div className="flex items-center space-x-4">
              <LanguageSelector isScrolled={isScrolled} />
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
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
