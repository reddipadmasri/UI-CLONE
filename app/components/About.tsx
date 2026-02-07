'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function About() {
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

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 md:py-28 bg-light-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image - Dr. Maya */}
          <div className={`relative rounded-2xl overflow-hidden shadow-soft transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div 
              className="h-80 md:h-96 rounded-2xl relative overflow-hidden"
              style={{
                backgroundImage: `url('https://image2url.com/r2/default/images/1770462938704-b3d2d12d-fe1a-4d61-98db-c6dffa29867d.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="image-hover-overlay">
                <h3 className="text-2xl font-serif font-bold mb-4">Dr. Maya Reynolds</h3>
                <p className="text-white/90">
                  Licensed Clinical Psychologist specializing in culturally-sensitive therapy with over 10 years of experience.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Dr. Maya Reynolds, PsyD
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm a Licensed Clinical Psychologist specializing in culturally-sensitive therapy 
                for anxiety, depression, and trauma. My approach integrates evidence-based practices 
                with genuine compassion.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                With specialized training in EMDR, CBT, and mindfulness-based therapies, I provide 
                a safe, supportive environment for healing. I'm LGBTQ+ affirming and committed to 
                creating an inclusive therapeutic space.
              </p>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center text-primary font-semibold text-lg mt-8 hover:gap-3 transition-all"
            >
              Learn About My Approach
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}