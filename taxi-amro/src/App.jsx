import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
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
import GronSchiphol from './pages/routes/GronSchiphol'
import GronAssen from './pages/routes/GronAssen'
import GronLeeuwarden from './pages/routes/GronLeeuwarden'
import GronEemshaven from './pages/routes/GronEemshaven'
import Reviews from './pages/Reviews'
import Luchthaven from './pages/blog/Luchthaven'
import Zakelijk from './pages/blog/Zakelijk'
import Evenementen from './pages/blog/Evenementen'
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

// Scroll naar boven bij elke route-wissel
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
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
        title="Taxichauffeur Groningen | 24/7 Taxi | Vaste Prijs | Taxi Amro"
        description="Op zoek naar een taxichauffeur in Groningen? Taxi Amro rijdt 24/7, vaste prijs vooraf. Geen toeslag voor nacht of weekend. Boek direct via WhatsApp of bel +31 6 33721505."
        canonical="/"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'TaxiService',
          name: 'Taxi Amro Noord-Nederland',
          url: 'https://www.taxiamro.nl',
          telephone: '+31633721505',
          priceRange: '€€',
          areaServed: ['Groningen', 'Friesland', 'Drenthe'],
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
      <ScrollToTop />
      <HashRedirect />
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/diensten"  element={<Diensten />} />
        <Route path="/tarieven"  element={<Tarieven />} />
        <Route path="/contact"   element={<ContactPage />} />
        <Route path="/blog"      element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/taxi-groningen-schiphol"  element={<GronSchiphol />} />
        <Route path="/taxi-groningen-assen"      element={<GronAssen />} />
        <Route path="/taxi-groningen-leeuwarden" element={<GronLeeuwarden />} />
        <Route path="/taxi-groningen-eemshaven"  element={<GronEemshaven />} />
        <Route path="/reviews"             element={<Reviews />} />
        <Route path="/blog/luchthaven"   element={<Luchthaven />} />
        <Route path="/blog/zakelijk"     element={<Zakelijk />} />
        <Route path="/blog/evenementen"  element={<Evenementen />} />
        <Route path="*"          element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
