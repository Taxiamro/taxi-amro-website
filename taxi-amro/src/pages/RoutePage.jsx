import { Link } from 'react-router-dom'
import { useState } from 'react'
import Seo from '../components/Seo'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

const WA_BASE = 'https://wa.me/31633721505?text='
const TEL = 'tel:+31633721505'

function Stars() {
  return <span className="text-yellow-400 text-sm">★★★★★</span>
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-900 text-sm pr-4">{q}</span>
        <span className={`text-amber-500 text-xl transition-transform flex-shrink-0 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3 bg-gray-50">
          {a}
        </div>
      )}
    </div>
  )
}

export default function RoutePage({ route }) {
  const waLink = `${WA_BASE}${encodeURIComponent(`Hallo Taxi Amro, ik wil graag een taxi boeken van ${route.van} naar ${route.naar}.`)}`

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TaxiService',
        name: 'Taxi Amro Noord-Nederland',
        url: `https://www.taxiamro.nl${route.slug}`,
        telephone: '+31633721505',
        priceRange: '€€',
        areaServed: [route.van, route.naar],
        offers: {
          '@type': 'Offer',
          name: `Taxi ${route.van} naar ${route.naar}`,
          description: `Vaste prijs taxi van ${route.van} naar ${route.naar}. ${route.prijs} all-in, geen verrassingen.`,
          priceCurrency: 'EUR',
          price: route.prijsRaw,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: route.faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <Seo
        title={route.seoTitle}
        description={route.seoDesc}
        canonical={route.slug}
        schema={schema}
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className={`relative pt-28 pb-14 overflow-hidden ${route.heroBg}`}>
          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute top-10 right-1/3 w-80 h-80 rounded-full opacity-20 blur-3xl ${route.orb1}`} />
            <div className={`absolute bottom-0 left-1/4 w-56 h-56 rounded-full opacity-20 blur-3xl ${route.orb2}`} />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <Link to="/" className="inline-flex items-center gap-1 text-gray-400 hover:text-amber-600 text-sm mb-5 transition-colors">
              ← Terug naar home
            </Link>

            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-gray-200 text-gray-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-sm">
              <span className="text-base">{route.icon}</span>
              {route.van} → {route.naar}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {route.h1}
            </h1>
            <p className="text-base sm:text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              {route.intro}
            </p>

            {/* Prijs badge */}
            <div className="inline-flex flex-col items-center bg-white rounded-2xl shadow-lg border border-gray-100 px-10 py-5 mb-8">
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Vaste prijs all-in</span>
              <span className="text-4xl font-bold text-gray-900">{route.prijs}</span>
              {route.vanPrijs && (
                <span className="text-xs text-gray-400 line-through mt-0.5">{route.vanPrijs} metertarief</span>
              )}
              <span className="text-xs text-green-600 font-semibold mt-1">{route.kortingLabel}</span>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-7 py-3 rounded-xl text-sm transition-all shadow-md shadow-amber-200 hover:scale-105"
              >
                💬 Boek via WhatsApp
              </a>
              <a
                href={TEL}
                className="border-2 border-gray-200 hover:border-amber-400 text-gray-700 font-semibold px-7 py-3 rounded-xl text-sm transition-all hover:scale-105"
              >
                📞 Bel direct
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8 text-xs text-gray-500">
              <span className="flex items-center gap-1"><Stars /> 4.9/5 beoordelingen</span>
              <span>• Vaste prijs, geen meter</span>
              <span>• 24/7 beschikbaar</span>
              <span>• Waterstof taxi (0 CO₂)</span>
            </div>
          </div>
        </section>

        {/* Route details strip */}
        <section className="bg-gray-50 border-y border-gray-100 py-6">
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Afstand', val: route.afstand },
              { label: 'Rijdtijd', val: route.rijdtijd },
              { label: 'Vaste prijs', val: route.prijs },
              { label: 'Beschikbaar', val: '24/7' },
            ].map(({ label, val }) => (
              <div key={label}>
                <div className="text-lg font-bold text-gray-900">{val}</div>
                <div className="text-xs text-gray-400 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Inhoud */}
        <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
            {route.body.map((block, i) => (
              <div key={i} dangerouslySetInnerHTML={{ __html: block }} />
            ))}
          </div>
        </section>

        {/* Uber/Bolt vergelijking */}
        <section className="bg-gray-50 py-12 border-y border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Taxi Amro vs. Uber & Bolt</h2>
            <p className="text-sm text-gray-500 mb-6">Waarom klanten kiezen voor een vaste-prijs taxi in plaats van een app</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Kenmerk</th>
                    <th className="text-center px-4 py-3 font-semibold">Taxi Amro</th>
                    <th className="text-center px-4 py-3 font-semibold">Uber / Bolt</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Prijs vooraf bekend', '✅ Altijd vast', '❌ Dynamisch (surge)'],
                    ['Beschikbaar om 04:00', '✅ Altijd', '⚠️ Wisselend'],
                    [`Rit naar ${route.naar}`, '✅ Dagelijks', '❌ Niet of zelden'],
                    ['Chauffeur annuleert niet', '✅ Nooit', '⚠️ Komt voor'],
                    ['Vluchttracering ophalen', '✅ Inbegrepen', '❌ Niet beschikbaar'],
                    ['Waterstof (0 CO₂)', '✅ Hyundai Nexo', '❌ Benzine/diesel'],
                    ['Ruime kofferbak bagage', '✅ XL kofferbak', '⚠️ Afhankelijk auto'],
                  ].map(([feat, amro, other], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2.5 font-medium text-gray-700 border-b border-gray-100">{feat}</td>
                      <td className="px-4 py-2.5 text-center border-b border-gray-100 text-green-700 font-medium">{amro}</td>
                      <td className="px-4 py-2.5 text-center border-b border-gray-100 text-gray-500">{other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Veelgestelde vragen</h2>
          <p className="text-sm text-gray-500 mb-6">{route.van} → {route.naar}</p>
          <div className="space-y-3">
            {route.faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </section>

        {/* Gerelateerde routes */}
        <section className="bg-gray-50 py-10 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-base font-bold text-gray-700 mb-4">Andere populaire routes</h2>
            <div className="flex flex-wrap gap-3">
              {route.relatedRoutes.map(r => (
                <Link
                  key={r.slug}
                  to={r.slug}
                  className="bg-white border border-gray-200 hover:border-amber-400 text-gray-700 hover:text-amber-600 text-sm px-4 py-2 rounded-lg transition-all"
                >
                  {r.label} →
                </Link>
              ))}
              <Link
                to="/tarieven"
                className="bg-white border border-gray-200 hover:border-amber-400 text-gray-600 hover:text-amber-600 text-sm px-4 py-2 rounded-lg transition-all"
              >
                Alle tarieven →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA bottom */}
        <section className="bg-gray-900 py-14">
          <div className="max-w-xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Klaar om te boeken?</h2>
            <p className="text-gray-400 text-sm mb-6">
              Vaste prijs {route.prijs} · 24/7 beschikbaar · Geen toeslagen · Waterstof taxi
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-7 py-3 rounded-xl text-sm transition-all hover:scale-105"
              >
                💬 Boek via WhatsApp
              </a>
              <a
                href={TEL}
                className="border border-gray-600 hover:border-amber-400 text-gray-300 hover:text-amber-400 font-semibold px-7 py-3 rounded-xl text-sm transition-all"
              >
                📞 +31 6 33721505
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-5">
              Of bekijk{' '}
              <Link to="/tarieven" className="text-amber-400 hover:underline">alle tarieven</Link>
              {' '}en{' '}
              <Link to="/blog" className="text-amber-400 hover:underline">onze blogs</Link>
            </p>
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}
