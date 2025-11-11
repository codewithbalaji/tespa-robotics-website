import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#112C41] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Us */}
          <div>
            <h3 className="text-base font-semibold mb-6 uppercase">About Us</h3>
            <p className="text-sm leading-relaxed text-gray-300 mb-6">
              Tespa Robotics (Chennai) Offers Turnkey Robot-based Automation Systems For Manufacturing Industries To Improve The Process Outputs.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded transition-colors"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded transition-colors"
                aria-label="Twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-6 uppercase">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm hover:text-gray-300 transition-colors flex items-center gap-2"
              >
                <span className="text-gray-400">›</span> Home
              </Link>
              <Link
                href="/about"
                className="text-sm hover:text-gray-300 transition-colors flex items-center gap-2"
              >
                <span className="text-gray-400">›</span> About
              </Link>
              <Link
                href="/applications"
                className="text-sm hover:text-gray-300 transition-colors flex items-center gap-2"
              >
                <span className="text-gray-400">›</span> Applications
              </Link>
              <Link
                href="/services"
                className="text-sm hover:text-gray-300 transition-colors flex items-center gap-2"
              >
                <span className="text-gray-400">›</span> Services
              </Link>
              <Link
                href="/clients"
                className="text-sm hover:text-gray-300 transition-colors flex items-center gap-2"
              >
                <span className="text-gray-400">›</span> Clients
              </Link>
              <Link
                href="/contact"
                className="text-sm hover:text-gray-300 transition-colors flex items-center gap-2"
              >
                <span className="text-gray-400">›</span> Contact
              </Link>
            </nav>
          </div>

          {/* QR Code */}
          <div>
            <h3 className="text-base font-semibold mb-6 uppercase">QR Code</h3>
            <div className="bg-white p-3 inline-block rounded">
              <Image
                src="/qrcode.png"
                alt="QR Code"
                width={120}
                height={120}
                className="w-28 h-28"
              />
            </div>
            <p className="text-xs text-gray-300 mt-3">Scan to visit our website</p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-base font-semibold mb-6 uppercase">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold mb-2">TESPA ROBOTICS</p>
                <p className="text-xs text-gray-300">(A GROUP COMPANY OF TESPA)</p>
              </div>
              
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0 text-gray-400" />
                <address className="text-sm not-italic leading-relaxed text-gray-300">
                  D-106, First Main Road, Anna Nagar East, Chennai - 600102, Tamil Nadu, India
                </address>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-gray-400" />
                <div className="text-sm text-gray-300">
                  <a href="tel:+914426250532" className="hover:text-white transition-colors">
                    +91-44-26250532
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-gray-400" />
                <a
                  href="mailto:sales@tesparobotics.com"
                  className="text-sm hover:text-white transition-colors text-gray-300"
                >
                  sales@tesparobotics.com
                </a>
              </div>

             
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2025 TESPA ROBOTICS PRIVATE LIMITED. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
