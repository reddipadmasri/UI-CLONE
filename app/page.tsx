import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TwoColumn from './components/TwoColumn'
import Services from './components/Services'
import BulletSection from './components/BulletSection'
import About from './components/About'
import Office from './components/Office'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TwoColumn />
      <Services />
      <BulletSection />
      <About />
      <Office />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}