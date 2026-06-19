import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import { useScrollRevealAll } from '../hooks/useScrollReveal'

export default function Diensten() {
  useScrollRevealAll()

  return (
    <>
      <Seo
        title="Taxichauffeur Groningen | Diensten & Vervoer | Taxi Amro"
        description="Professionele taxichauffeur in Groningen. Ritten naar Eemshaven, Schiphol, Hoogkerk, Eelde en heel Noord-Nederland. Zakelijk en privé. 24/7 beschikbaar, vaste prijs."
        canonical="/diensten"
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 right-1/4 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-amber-200 rounded-full opacity-20 blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link to="/" className="inline-flex items-center gap-1.5 text-gray-400 hover:text-amber-600 text-sm mb-6 transition-colors">
              ← Terug naar home
            </Link>
            <div data-reveal className="fade-in">
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                Onze diensten
              </span>
            </div>
            <h1 data-reveal className="fade-up stagger-1 text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Taxi op maat<br className="hidden md:block" /> voor elke rit
            </h1>
            <p data-reveal className="fade-up stagger-2 text-lg text-gray-500 mb-8 max-w-xl mx-auto">
              Van vliegveld transfer tot Eemshaven shuttle. Altijd een <strong className="text-gray-700">vaste prijs vooraf</strong>. 24/7 beschikbaar.
            </p>
            <div data-reveal className="fade-up stagger-3 flex flex-wrap justify-center gap-3">
              <Link to="/tarieven"
                 className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-amber-200 text-sm hover:scale-105">
                🧮 Bereken je ritprijs
              </Link>
              <a href="tel:+31633721505"
                 className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-amber-400 text-gray-700 hover:text-amber-600 font-semibold px-6 py-3 rounded-xl transition-all text-sm hover:scale-105">
                📞 Bel direct
              </a>
            </div>
          </div>
        </section>

        {/* Diensten cards (Services component heeft eigen 3D tilt) */}
        <Services />

        {/* Waarom Taxi Amro */}
        <WhyUs />

        {/* Bottom CTA */}
        <section className="py-20 bg-gray-900">
          <div data-reveal className="fade-up max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Vragen over een dienst?</h2>
            <p className="text-gray-400 mb-8">We helpen je graag, ook voor maatwerk of zakelijke contracten.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact"
                 className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-7 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-amber-900/30 text-sm">
                📞 Neem contact op
              </Link>
              <Link to="/tarieven"
                 className="inline-flex items-center gap-2 border border-gray-600 hover:border-amber-400 text-gray-300 hover:text-amber-400 font-semibold px-7 py-3.5 rounded-xl transition-all text-sm">
                Bekijk tarieven →
              </Link>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}
