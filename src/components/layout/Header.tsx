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
      <header className="fixed top-0 left-0 right-0 z-50 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between relative">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group z-10 relative">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl group-hover:shadow-orange-500/25">
                  <span className="text-white font-bold text-xl tracking-wider">P</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm"></div>
              </div>
              <span className="font-bold text-2xl text-white drop-shadow-2xl tracking-wide group-hover:text-orange-200 transition-colors duration-300">
                Panorama
              </span>
            </Link>

            {/* Center Navigation Pill */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-sm"></div>
                <div className="relative bg-white/15 backdrop-blur-xl rounded-full px-3 py-3 shadow-2xl border border-white/30 ring-1 ring-white/20">
                  <nav className="flex items-center space-x-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`relative px-6 py-3 rounded-full font-semibold text-sm tracking-wider transition-all duration-300 group ${
                          pathname === item.href 
                            ? 'bg-white text-gray-900 shadow-xl shadow-white/25 scale-105' 
                            : 'text-white/90 hover:text-white hover:bg-white/20 hover:scale-105 hover:shadow-lg'
                        }`}
                      >
                        <span className="relative z-10">{item.label}</span>
                        {pathname === item.href && (
                          <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-full opacity-90"></div>
                        )}
                        {pathname !== item.href && (
                          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-full transition-all duration-300"></div>
                        )}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Right side - Language selector and mobile menu */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/5 rounded-xl blur-sm"></div>
                <div className="relative">
                  <LanguageSelector isScrolled={false} />
                </div>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-xl blur-sm"></div>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="relative p-3 rounded-xl transition-all duration-300 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:scale-105 hover:shadow-lg"
                  aria-label="Toggle mobile menu"
                >
                  <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                    <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`} />
                    <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0 scale-0' : ''
                    }`} />
                    <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`} />
                  </div>
                </button>
              </div>
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