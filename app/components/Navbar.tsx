'use client'

import { useState } from 'react'
import { Menu, X, Home, Briefcase, User, Building, HelpCircle, Phone } from 'lucide-react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const navItems = [
    { icon: <Home size={18} />, label: 'Home', href: '#home' },
    { icon: <Briefcase size={18} />, label: 'Services', href: '#services' },
    { icon: <User size={18} />, label: 'About', href: '#about' },
    { icon: <Building size={18} />, label: 'Our Office', href: '#office' },
    { icon: <HelpCircle size={18} />, label: 'FAQ', href: '#faq' },
    { icon: <Phone size={18} />, label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 py-4 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo with Doctor Image */}
            <a href="#home" className="flex items-center gap-3 group">
              {/* Doctor Image Circle */}
              <div className="relative">
                <div 
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors"
                  style={{
                    backgroundImage: `url('https://image2url.com/r2/default/images/1770462938704-b3d2d12d-fe1a-4d61-98db-c6dffa29867d.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Fallback if image doesn't load */}
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  
                  </div>
                </div>
                {/* Online Status Indicator */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              
              {/* Name with Credentials */}
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 leading-tight">
                  Dr. Maya Reynolds
                </span>
                <span className="text-xs text-primary font-medium">
                  PsyD • Licensed Psychologist
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary transition-colors"
                >
                  <Menu size={20} />
                  <span>Menu</span>
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[200px] py-2 z-50">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {item.icon}
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#contact"
                className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md"
              >
                Book Session
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-gray-700"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="p-6">
              {/* Mobile Header with Doctor Image */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
                <div 
                  className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30"
                  style={{
                    backgroundImage: `url('https://image2url.com/r2/default/images/1770462938704-b3d2d12d-fe1a-4d61-98db-c6dffa29867d.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    MR
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Dr. Maya Reynolds</h3>
                  <p className="text-sm text-primary font-medium">Licensed Psychologist</p>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="ml-auto text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </a>
                ))}
                
                <a
                  href="#contact"
                  className="block bg-primary text-white text-center py-3 rounded-full font-medium hover:bg-primary-dark transition-colors mt-6 shadow-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Session
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}