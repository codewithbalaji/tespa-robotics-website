import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#112C41] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Contact */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Tespa Robotics"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <a
              href="mailto:sales@tesparobotics.com"
              className="text-sm hover:text-gray-300 transition-colors block mb-6"
            >
              sales@tesparobotics.com
            </a>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-base font-semibold mb-6">Menu</h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm hover:text-gray-300 transition-colors"
              >
                About
              </Link>
              <Link
                href="/applications"
                className="text-sm hover:text-gray-300 transition-colors"
              >
                Application
              </Link>
              <Link
                href="/services"
                className="text-sm hover:text-gray-300 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/clients"
                className="text-sm hover:text-gray-300 transition-colors"
              >
                Clients
              </Link>
              <Link
                href="/contact"
                className="text-sm hover:text-gray-300 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* QR Code */}
          <div>
            <h3 className="text-base font-semibold mb-6">QR Code</h3>
            <div className="bg-white p-3 inline-block rounded">
              <Image
                src="/qrcode.png"
                alt="QR Code"
                width={120}
                height={120}
                className="w-28 h-28"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-base font-semibold mb-6">Address</h3>
            <address className="text-sm not-italic leading-relaxed">
              Tespa India Pvt Ltd
              <br />
              D-106 First Main Road,
              <br />
              Anna Nagar East,
              <br />
              Chennai-600102,
              <br />
              TamilNadu.
              <br />
              India.
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>Copyright © 2025 Tespa India Pvt Ltd.</p>
          <p>
            Design by{' '}
            <a
              href="https://rithudesigns.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              rithu designs
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
