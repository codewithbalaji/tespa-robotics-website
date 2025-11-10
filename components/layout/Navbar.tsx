'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

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
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
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
          className="bg-[#112C41] text-white rounded-full flex items-center justify-center hover:bg-[#1a3f5c] transition-all group"
          style={{ 
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 500,
            fontSize: '14px',
            letterSpacing: '0.02em',
            paddingLeft: '16px',
            paddingRight: '6px',
            paddingTop: '6px',
            paddingBottom: '6px',
            gap: '12px'
          }}
        >
          <span className="whitespace-nowrap">CONTACT</span>
          <div className="bg-white rounded-full flex items-center justify-center flex-shrink-0" style={{ width: '32px', height: '32px' }}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H10M17 7V14"
                stroke="#112C41"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:hidden transition-all duration-300"
              />
              <path
                d="M5 12H19M19 12L15 8M19 12L15 16"
                stroke="#112C41"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hidden group-hover:block transition-all duration-300"
              />
            </svg>
          </div>
        </Link>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center justify-between px-8 py-3 max-w-7xl mx-auto">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Tespa Robotics"
            width={200}
            height={70}
            className="h-14 w-auto"
          />
        </Link>

        <div className="flex items-center justify-center gap-12">
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
                  "text-[16px] font-normal text-gray-800 hover:text-[#112C41] transition-all relative py-2 px-4 tracking-[-0.02em] flex items-center gap-1 group/link",
                  link.hasDropdown && ""
                )}
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {/* Top-left corner */}
                <span className="absolute top-0 left-0 w-0 h-0 opacity-0 group-hover/link:w-3 group-hover/link:h-3 group-hover/link:opacity-100 transition-all duration-300 border-t-2 border-l-2 border-[#112C41]"></span>

                {/* Top-right corner */}
                <span className="absolute top-0 right-0 w-0 h-0 opacity-0 group-hover/link:w-3 group-hover/link:h-3 group-hover/link:opacity-100 transition-all duration-300 border-t-2 border-r-2 border-[#112C41]"></span>

                {/* Bottom-left corner */}
                <span className="absolute bottom-0 left-0 w-0 h-0 opacity-0 group-hover/link:w-3 group-hover/link:h-3 group-hover/link:opacity-100 transition-all duration-300 border-b-2 border-l-2 border-[#112C41]"></span>

                {/* Bottom-right corner */}
                <span className="absolute bottom-0 right-0 w-0 h-0 opacity-0 group-hover/link:w-3 group-hover/link:h-3 group-hover/link:opacity-100 transition-all duration-300 border-b-2 border-r-2 border-[#112C41]"></span>

                {/* Dashed borders */}
                <span className="absolute top-0 left-3 right-3 h-0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 border-t border-dashed border-[#112C41]"></span>
                <span className="absolute bottom-0 left-3 right-3 h-0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 border-b border-dashed border-[#112C41]"></span>
                <span className="absolute left-0 top-3 bottom-3 w-0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 border-l border-dashed border-[#112C41]"></span>
                <span className="absolute right-0 top-3 bottom-3 w-0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 border-r border-dashed border-[#112C41]"></span>

                {/* Active page underline */}
                {(pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#112C41]"></span>
                )}

                {link.name}
                {link.hasDropdown && (
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn(
                      "transition-transform duration-300",
                      activeDropdown === link.name && "rotate-180"
                    )}
                  >
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>

              {link.hasDropdown && activeDropdown === link.name && link.dropdown && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-lg shadow-lg py-2 min-w-[280px]">
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
            className="bg-[#112C41] text-white rounded-full flex items-center justify-center hover:bg-[#1a3f5c] transition-all group relative"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              letterSpacing: '0.02em',
              paddingLeft: '24px',
              paddingRight: '8px',
              paddingTop: '8px',
              paddingBottom: '8px',
              gap: '20px'
            }}
          >
            <span className="whitespace-nowrap">CONTACT</span>
            <div className="bg-white rounded-full flex items-center justify-center flex-shrink-0" style={{ width: '44px', height: '44px' }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H10M17 7V14"
                  stroke="#112C41"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:hidden transition-all duration-300"
                />
                <path
                  d="M5 12H19M19 12L15 8M19 12L15 16"
                  stroke="#112C41"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hidden group-hover:block transition-all duration-300"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-white/20 shadow-lg">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                    className="w-full flex items-center justify-between text-[18px] font-medium text-gray-800 hover:text-[#112C41] transition-colors py-3 tracking-[-0.02em]"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {link.name}
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={cn(
                        "transition-transform duration-300",
                        activeDropdown === link.name && "rotate-180"
                      )}
                    >
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="block text-[18px] font-medium text-gray-800 hover:text-[#112C41] transition-colors py-3 tracking-[-0.02em]"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
                {link.hasDropdown && link.dropdown && activeDropdown === link.name && (
                  <div className="pl-4 mt-2 mb-2 space-y-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-[#112C41] transition-colors py-2"
                        onClick={() => {
                          setIsMenuOpen(false)
                          setActiveDropdown(null)
                        }}
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