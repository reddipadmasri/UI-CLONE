import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column with Doctor Image */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              {/* Doctor Image */}
              <div 
                className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30"
                style={{
                  backgroundImage: `url('https://image2url.com/r2/default/images/1770462938704-b3d2d12d-fe1a-4d61-98db-c6dffa29867d.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="w-full h-full bg-primary/20 flex items-center justify-center text-white font-bold">
                
                </div>
              </div>
              <div>
                <span className="text-xl font-bold block">Dr. Maya Reynolds</span>
                <span className="text-primary text-sm font-medium">PsyD • Licensed Psychologist</span>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Culturally-sensitive therapy for anxiety, depression & trauma in Denver, Colorado.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md"
            >
              <Phone size={16} />
              Get In Touch
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">123th Street 45 W</p>
                  <p className="text-gray-400">Santa Monica, CA 90401</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-gray-400">(720) 555-1234</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-gray-400">hello@drmayareynolds.com</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Monday - Friday</p>
                  <p className="text-gray-400">9am - 6pm</p>
                </div>
              </div>
              <p className="text-primary text-sm mt-4 font-medium">
                Saturday appointments available
              </p>
              <p className="text-primary text-sm font-medium">
                Telehealth available
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#services" className="block text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#office" className="block text-gray-400 hover:text-white transition-colors">Our Office</a>
              <a href="#faq" className="block text-gray-400 hover:text-white transition-colors">FAQ</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              {/* Small Doctor Image in Footer Bottom */}
              <div 
                className="w-8 h-8 rounded-full overflow-hidden"
                style={{
                  backgroundImage: `url('https://image2url.com/r2/default/images/1770462938704-b3d2d12d-fe1a-4d61-98db-c6dffa29867d.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Good Faith Estimate
              </a>
            </div>
          </div>
          <p className="text-gray-600 text-xs text-center mt-6">
            Website designed with care for healing and connection.
          </p>
        </div>
      </div>
    </footer>
  )
}