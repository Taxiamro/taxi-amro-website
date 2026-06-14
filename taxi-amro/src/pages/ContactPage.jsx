import { useScrollRevealAll } from '../hooks/useScrollReveal'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Contact from '../components/Contact'
import Seo from '../components/Seo'

export default function ContactPage() {
  useScrollRevealAll()
  return (
    <>
      <Seo
        title="Contact | Taxi Amro Noord-Nederland"
        description="Bel +31 6 33721505 of WhatsApp ons. 24/7 bereikbaar voor taxiritten in Groningen, Friesland en Drenthe."
        canonical="/contact"
      />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-16">
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}
