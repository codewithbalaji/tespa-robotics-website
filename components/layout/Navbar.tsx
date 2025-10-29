'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const applicationsDropdown = [
    { name: 'SPOT WELDING', href: '/applications/spot-welding' },
    { name: 'MIG/TIG WELDING', href: '/applications/mig-tig-welding' },
    { name: 'GRINDING & POLISHING', href: '/applications/grinding-polishing' },
    { name: 'ULTRASONIC WELDING', href: '/applications/ultrasonic-welding' },
    { name: 'LOADING UNLOADING AUTOMATION', href: '/applications/loading-unloading' },
    { name: 'ASSEMBLY AUTOMATION', href: '/applications/assembly-automation' },
    { name: 'VISION AUTOMATION SYSTEMS', href: '/applications/vision-automation' },
    { name: 'SEALING', href: '/applications/sealing' },
    { name: 'DEBURRING', href: '/applications/deburring' },
    { name: 'PRESS TENDING', href: '/applications/press-tending' },
    { name: 'HANDLING & PALLETIZING', href: '/applications/handling-palletizing' },
    { name: 'FLAME/PLASMA CUTTING', href: '/applications/flame-plasma-cutting' },
    { name: 'EDUCATION KITS', href: '/applications/education-kits' },
    { name: "PM'S", href: '/applications/pms' },
    { name: 'WAREHOUSE SOLUTION', href: '/applications/warehouse-solution' },
  ]

  const servicesDropdown = [
    { name: 'EQUIPMENT SUPPLY', href: '/services/equipment-supply' },
    { name: 'IN HOUSE SERVICE FACILITY', href: '/services/in-house-service' },
    { name: 'JIGS & FIXTURES DESIGN & MANUFACTURING', href: '/services/jigs-fixtures' },
    { name: 'OFFLINE PROGRAMMING', href: '/services/offline-programming' },
    { name: 'SPARES & CONSUMABLES', href: '/services/spares-consumables' },
    { name: 'TRAINING', href: '/services/training' },
  ]

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'APPLICATIONS', href: '/applications', hasDropdown: true, dropdown: applicationsDropdown },
    { name: 'SERVICES', href: '/services', hasDropdown: true, dropdown: servicesDropdown },
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
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium text-gray-800 hover:text-[#112C41] transition-colors relative py-2",
                  link.hasDropdown && "after:content-['▼'] after:ml-1 after:text-xs"
                )}
              >
                {link.name}
              </Link>

              {link.hasDropdown && activeDropdown === link.name && link.dropdown && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[280px]">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#112C41] hover:text-white transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="block text-sm font-medium text-gray-800 hover:text-[#112C41] transition-colors py-2"
                  onClick={() => !link.hasDropdown && setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && link.dropdown && (
                  <div className="pl-4 mt-2 space-y-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-xs text-gray-600 hover:text-[#112C41] transition-colors py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar