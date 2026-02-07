'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('contact')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-primary-light to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='3' fill='%230F766E' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
            Begin Your Healing Journey
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Ready to take the first step toward emotional wellness? Contact me to schedule 
            your initial consultation. I look forward to supporting you on your path to 
            healing and growth.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-primary text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-dark transition-all hover:-translate-y-1 hover:shadow-lg gap-3"
          >
            Schedule Your Session
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}