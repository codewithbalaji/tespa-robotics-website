'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'APPLICATIONS', href: '/applications', hasDropdown: true },
    { name: 'SERVICES', href: '/services', hasDropdown: true },
    { name: 'CLIENTS', href: '/clients' },
  ]

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      {/* Mobile Navbar */}
      <div className="lg:hidden flex items-center justify-between px-6 py-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-800 p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Tespa Robotics"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>

        <Link
          href="/contact"
          className="bg-[#112C41] text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-[#1a3f5c] transition-colors"
        >
          CONTACT
          <ArrowUpRight size={18} />
        </Link>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:grid grid-cols-3 items-center px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Tespa Robotics"
            width={200}
            height={70}
            className="h-14 w-auto"
          />
        </Link>

        <div className="flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors relative",
                link.hasDropdown && "after:content-['▼'] after:ml-1 after:text-xs"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex justify-end">
          <Link
            href="/contact"
            className="bg-[#112C41] text-white px-8 py-3 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-[#1a3f5c] transition-colors"
          >
            CONTACT
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar