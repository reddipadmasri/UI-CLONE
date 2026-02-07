'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function TwoColumn() {
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

    const element = document.getElementById('two-column')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="two-column" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Find Hope & Healing in Denver
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Life transitions, anxiety, and past trauma can make you feel isolated. 
              As a culturally-sensitive therapist specializing in EMDR and CBT, I provide 
              evidence-based care tailored to your unique journey.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Whether you're navigating anxiety, depression, or relationship challenges, 
              I offer a safe space for growth and healing.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-primary font-semibold text-lg hover:gap-3 transition-all"
            >
              Schedule Consultation
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Image with Hover Effect */}
          <div className={`relative rounded-2xl overflow-hidden shadow-soft transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Office Image */}
            <div 
              className="h-80 md:h-96 rounded-2xl relative overflow-hidden"
              style={{
                backgroundImage: `url('https://image2url.com/r2/default/images/1770463010425-9a645860-0f64-4744-8080-daa35c6f2c14.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="image-hover-overlay">
                <h3 className="text-2xl font-serif font-bold mb-4">Our Healing Space</h3>
                <p className="text-white/90">
                  A serene environment designed for comfort, privacy, and therapeutic progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}