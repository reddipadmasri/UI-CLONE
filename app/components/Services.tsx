'use client'

import { useEffect, useState } from 'react'
import { Brain, Heart, Users } from 'lucide-react'

const services = [
  {
    icon: <Brain className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: "Anxiety & Depression Therapy",
    description: "Cognitive Behavioral Therapy and mindfulness approaches to manage symptoms and build resilience for lasting change."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: "Trauma & EMDR Treatment",
    description: "Specialized EMDR therapy to process traumatic memories and reduce their emotional impact. Safe, structured healing."
  },
  {
    icon: <Users className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: "Life Transitions Counseling",
    description: "Support during career changes, relationship challenges, or major life shifts. Navigate transitions with confidence."
  }
]

export default function Services() {
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

    const element = document.getElementById('services')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-20 md:py-28 bg-light-bg">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            My Specialties
          </h2>
          <p className="text-gray-600 text-lg">
            Evidence-based therapy tailored to your unique needs and goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border border-gray-100 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image Section */}
              <div 
                className="h-48 w-full relative overflow-hidden"
                style={{
                  backgroundImage: `url('${service.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <div className="text-primary">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Treatment Methods */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-700 mb-2">Treatment Methods:</p>
                  <div className="flex flex-wrap gap-2">
                    {index === 0 && (
                      <>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">CBT</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Mindfulness</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">ACT</span>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">EMDR</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">TF-CBT</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Somatic</span>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Solution-Focused</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Narrative</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Career Counseling</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center justify-center bg-primary/5 rounded-full px-6 py-3">
            <span className="text-primary font-medium">All therapies are:</span>
            <span className="ml-4 flex items-center gap-4">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span className="text-sm">Evidence-Based</span>
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span className="text-sm">Culturally-Sensitive</span>
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span className="text-sm">Client-Centered</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}