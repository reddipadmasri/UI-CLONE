'use client'

import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'

const symptoms = [
  "Persistent anxiety or panic attacks",
  "Depression and loss of interest in activities",
  "Trauma and PTSD symptoms",
  "Relationship conflicts and communication issues",
  "Career stress, burnout, and work-life balance",
  "Life transitions and adjustment difficulties"
]

export default function BulletSection() {
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

    const element = document.getElementById('bullet-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="bullet-section" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-3xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
            You Don't Have to Face This Alone
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            If you're experiencing any of these challenges, there's hope and support available:
          </p>
          
          <ul className="space-y-4 mb-10">
            {symptoms.map((symptom, index) => (
              <li 
                key={index}
                className="flex items-start gap-4 py-3 border-b border-gray-100 last:border-0"
              >
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-lg">{symptom}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-gray-600 text-lg">
            With empathy and evidence-based guidance, we'll work together to build lasting resilience and emotional wellness.
          </p>
        </div>
      </div>
    </section>
  )
}