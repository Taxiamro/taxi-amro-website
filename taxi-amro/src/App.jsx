import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Fleet from './components/Fleet'
import PriceCalculator from './components/PriceCalculator'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import CookieBanner from './components/CookieBanner'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import NotFound from './pages/NotFound'
import Tarieven from './pages/Tarieven'
import Diensten from './pages/Diensten'
import ContactPage from './pages/ContactPage'
import Seo from './components/Seo'
import { Link } from 'react-router-dom'

// Redirect hash-fragments naar echte routes
function HashRedirect() {
  const navigate = useNavigate()
  useEffect(() => {
    const hash = window.location.hash
    const map = {
      '#contact':   '/contact',
      '#diensten':  '/diensten',
      '#services':  '/diensten',
      '#blog':      '/blog',
      '#tarieven':  '/tarieven',
      '#pricing':   '/tarieven',
      '#prijzen':   '/tarieven',
    }
    if (window.location.pathname === '/' && map[hash]) {
      navigate(map[hash], { replace: true })
    }
  }, [navigate])
  return null
}

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    if (!elements.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export function HomePage() {
  useScrollReveal()
  return (
    <>
      <Seo
        title="Taxi Groningen | Vaste Prijs 24/7 | Taxi Amro"
        description="Betrouwbare taxi in Groningen, Friesland en Drenthe. Bereken direct je ritprijs. Schiphol €275, Eelde €25, Eemshaven €65. Geen toeslag, vaste prijs vooraf."
        canonical="/"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'TaxiService',
              name: 'Taxi Amro Noord-Nederland',
              url: 'https://www.taxiamro.nl',
              telephone: '+31633721505',
              priceRange: '€15 t/m €425',
              areaServed: ['Groningen', 'Friesland', 'Drenthe'],
            },
            {
              '@type': 'FAQPage',
              mainEntity: [
                { '@type': 'Question', name: 'Wat kost een taxi in Groningen?', acceptedAnswer: { '@type': 'Answer', text: 'Een stadsrit in Groningen kost €15. Naar Groningen Airport Eelde €25, naar Eemshaven €65, naar Schiphol €275. Gebruik onze prijscalculator voor een vaste prijs op maat.' } },
                { '@type': 'Question', name: 'Wat kost een taxi van Groningen naar Schiphol?', acceptedAnswer: { '@type': 'Answer', text: 'Een taxi van Groningen naar Schiphol kost €275 vaste prijs (circa 205 km). Prijs geldt voor maximaal 4 personen, geen toeslag voor bagage of tijdstip.' } },
                { '@type': 'Question', name: 'Rekent Taxi Amro een nachttarief?', acceptedAnswer: { '@type': 'Answer', text: "Nee. Bij Taxi Amro betaal je altijd de vooraf afgesproken vaste prijs, ook 's nachts, in het weekend of op feestdagen." } },
                { '@type': 'Question', name: 'Is er een retourkorting beschikbaar?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, bij een retourrit ontvang je 10% korting op de totaalprijs. Selecteer Retour rit in de boekingswidget of vraag ernaar via WhatsApp.' } },
              ],
            },
          ],
        }}
      />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <PriceCalculator />

        {/* Snelle links */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 flex flex-wrap justify-center gap-3">
              <Link
                to="/tarieven"
                className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-6 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
              >
                Bekijk alle tarieven →
              </Link>
              <Link
                to="/diensten"
                className="border border-gray-200 hover:border-amber-300 text-gray-700 font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
              >
                Onze diensten
              </Link>
              <a href="https://wa.me/31633721505" target="_blank" rel="noopener noreferrer"
                className="border border-green-200 hover:border-green-400 text-green-700 font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
              >
                💬 WhatsApp boeken
              </a>
          </div>
        </section>

        <WhyUs />
        <Fleet />
        <Testimonials />
        <FAQ />

        {/* Contact CTA blok */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Klaar om te boeken?</h2>
            <p className="text-gray-400 text-sm mb-6">24/7 bereikbaar. Ook 's avonds en in het weekend.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/31633721505"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
              >
                Boek via WhatsApp
              </a>
              <Link
                to="/contact"
                className="border border-gray-600 hover:border-amber-400 text-gray-300 hover:text-amber-400 font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
              >
                Alle contactopties →
              </Link>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
        <CookieBanner />
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <HashRedirect />
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/diensten"  element={<Diensten />} />
        <Route path="/tarieven"  element={<Tarieven />} />
        <Route path="/contact"   element={<ContactPage />} />
        <Route path="/blog"      element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="*"          element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
