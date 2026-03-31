import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/20 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gold font-bold text-lg mb-4">Rachid Dev</h3>
            <p className="text-gray-400 text-sm">
              Premium digital solutions for global brands.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-gold text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-gold text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gold text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-gold text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-gold text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-gold text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Rachid Dev. All rights reserved.
        </div>
      </div>
    </footer>
  )
}