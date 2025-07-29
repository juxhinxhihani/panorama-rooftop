'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: Array<{ href: string; label: string }>
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className="fixed top-24 left-4 right-4">
        <div className="absolute -inset-1 bg-gradient-to-b from-white/20 to-white/10 rounded-3xl blur-sm"></div>
        <div className="relative bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/30 ring-1 ring-white/20">
          <nav className="px-6 py-8 space-y-2">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Panorama Menu</h3>
            </div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`block py-4 px-6 font-semibold rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                pathname === item.href
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-pink-500/10 hover:text-orange-600 hover:scale-105'
              }`}
            >
              <span className="relative z-10 tracking-wide">{item.label}</span>
              {pathname !== item.href && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:to-pink-500/5 transition-all duration-300"></div>
              )}
            </Link>
          ))}
          </nav>
        </div>
      </div>
    </div>
  )
}