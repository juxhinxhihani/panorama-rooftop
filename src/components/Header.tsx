'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Header() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const changeLang = (l: typeof lang) => {
    setLang(l)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 bg-gradient-to-b from-orange-200 to-pink-200 text-gray-900 shadow-md z-10">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-xl">Panorama</Link>
        <nav className="hidden md:flex gap-4">
          <Link href="#about">About</Link>
          <Link href="#menu">Menu</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <div className="flex gap-2 items-center">
          <select value={lang} onChange={(e)=>changeLang(e.target.value as any)} className="border rounded px-1 py-0.5 text-sm">
            <option value="sq">AL</option>
            <option value="en">EN</option>
            <option value="it">IT</option>
          </select>
          <button className="md:hidden" onClick={()=>setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden flex flex-col items-center gap-2 pb-4">
          <Link href="#about" onClick={()=>setOpen(false)}>About</Link>
          <Link href="#menu" onClick={()=>setOpen(false)}>Menu</Link>
          <Link href="#contact" onClick={()=>setOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  )
}
