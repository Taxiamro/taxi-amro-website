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
        title="Taxi Groningen | Taxi Amro Noord-Nederland – 24/7 Bereikbaar"
        description="Taxi in Groningen, Friesland en Drenthe. Vaste prijs naar Schiphol & Eemshaven. 24/7 bereikbaar. Bel of app: +31 6 33721505."
        canonical="/"
      />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <PriceCalculator />

        {/* Korte diensten-intro met link naar /diensten */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-wider mb-2">Wat doen wij</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Betrouwbaar taxi vervoer in Noord-Nederland
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              Van vliegveld transfer naar Schiphol tot Eemshaven shuttle, zakelijk vervoer en grensoverschrijdende ritten naar Duitsland — altijd vaste prijs, altijd op tijd.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/diensten"
                className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
              >
                Bekijk alle diensten →
              </Link>
              <Link
                to="/tarieven"
                className="border border-gray-200 hover:border-amber-300 text-gray-700 font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
              >
                Bekijk tarieven
              </Link>
            </div>
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
            <p className="text-gray-400 text-sm mb-6">24/7 bereikbaar — ook 's avonds en in het weekend.</p>
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
