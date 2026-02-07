'use client'

import { useState, useEffect } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "Do you take insurance?",
    answer: "I am an out-of-network provider and can provide superbills for insurance reimbursement. Many clients receive 50-80% coverage depending on their plan."
  },
  {
    question: "What are your rates?",
    answer: "Initial intake session: $250 (60 minutes). Ongoing therapy sessions: $180 (50 minutes). Sliding scale spots available based on need."
  },
  {
    question: "Do you have any openings?",
    answer: "I currently have limited openings for new clients. Contact me to check availability and schedule a free 15-minute consultation call."
  },
  {
    question: "What is your cancellation policy?",
    answer: "I require 48 hours notice for cancellations. Appointments cancelled with less than 48 hours notice are subject to the full session fee."
  },
  {
    question: "How long does therapy typically last?",
    answer: "Therapy duration varies based on individual goals. Some clients achieve their goals in 8-12 sessions, while others prefer longer-term work."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
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

    const element = document.getElementById('faq')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="faq" className="py-20 md:py-28 bg-light-bg">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Common questions about starting therapy with me
          </p>
        </div>

        {/* FAQ Items */}
        <div className={`max-w-3xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`mb-4 bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <span className="text-primary flex-shrink-0">
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}