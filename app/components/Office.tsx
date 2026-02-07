'use client'

import { useEffect, useState } from 'react'
import { MapPin, Building, Laptop } from 'lucide-react'

const officeFeatures = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Convenient Location",
    description: "123 Cherry Creek Drive, Suite 401 in Denver. Easy parking and public transit access. Wheelchair accessible."
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Comfortable Space",
    description: "Calming therapy environment with natural light, comfortable seating, and complete privacy for your sessions."
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Virtual Sessions",
    description: "Secure telehealth sessions available for clients across Colorado. Flexible options for your convenience."
  }
]

export default function Office() {
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

    const element = document.getElementById('office')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="office" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Cherry Creek Office
          </h2>
          <p className="text-gray-600 text-lg">
            A calm, welcoming space designed for your comfort and healing journey
          </p>
        </div>

        {/* Office Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Location Card */}
          <div 
            className={`bg-white rounded-xl p-8 shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-primary/30 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="w-16 h-16 bg-accent-light rounded-2xl flex items-center justify-center mb-6">
              <div className="text-accent">
                <MapPin className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Convenient Location
            </h3>
            <p className="text-gray-600 leading-relaxed">
              123th Street 45 W, Santa Monica, CA 90401. Easy parking and public transit access. Wheelchair accessible.
            </p>
          </div>

          {/* Comfortable Space Card with Image Background - IMPROVED VISIBILITY */}
          <div 
            className={`rounded-xl p-8 shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-primary/30 relative overflow-hidden ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              transitionDelay: '200ms',
              backgroundImage: `linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.92)), url('https://image2url.com/r2/default/images/1770463046184-4b5488d2-69e9-4b76-a710-2aed34ec5734.jpeg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-accent-light/80 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <div className="text-accent">
                  <Building className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 bg-white/70 rounded-lg px-3 py-1 inline-block">
                Comfortable Space
              </h3>
              <p className="text-gray-800 leading-relaxed bg-white/60 rounded-lg p-3 backdrop-blur-sm">
                Calming therapy environment with natural light, comfortable seating, and complete privacy for your sessions.
              </p>
            </div>
          </div>

          {/* Virtual Sessions Card */}
          <div 
            className={`bg-white rounded-xl p-8 shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-primary/30 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="w-16 h-16 bg-accent-light rounded-2xl flex items-center justify-center mb-6">
              <div className="text-accent">
                <Laptop className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Virtual Sessions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Secure telehealth sessions available for clients across Colorado. Flexible options for your convenience.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className={`mt-16 bg-primary-light rounded-2xl p-8 border border-primary/20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">📍 Location Details</h4>
              <p className="text-gray-600">
                123 Cherry Creek Drive, Suite 401<br />
                Denver, CO 80206<br />
                <span className="text-sm text-gray-500">Easy parking & public transit access</span>
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">🕐 Session Hours</h4>
              <p className="text-gray-600">
                Monday - Friday: 9am - 6pm<br />
                Saturday: 10am - 2pm (by appointment)<br />
                <span className="text-primary font-medium">Telehealth sessions available</span>
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">✓ Office Features</h4>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Comfortable, confidential therapy space
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Natural light and calming atmosphere
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Wheelchair accessible
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}