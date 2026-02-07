'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-light to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='2' fill='%230F766E' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Badge */}
          <div className="inline-flex items-center bg-primary/10 text-primary px-5 py-2 rounded-full mb-8">
            <span className="text-sm font-semibold">Licensed Clinical Psychologist</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Healing Minds,
            <span className="block text-primary">Renewing Lives</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Culturally-sensitive therapy for anxiety, depression & trauma. 
            In-person in Cherry Creek or online across Colorado.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-dark transition-all hover:-translate-y-1 hover:shadow-lg gap-3"
            >
              Connect With Me
              <ArrowRight size={20} />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/5 transition-all"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}