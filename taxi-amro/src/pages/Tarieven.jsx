import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { useScrollTilt } from '../hooks/useScrollTilt'
import PriceCalculator from '../components/PriceCalculator'

const WA = 'https://wa.me/31633721505?text=Hallo%20Taxi%20Amro%2C%20ik%20wil%20graag%20een%20vaste%20prijs%20weten.'
const TEL = '+31633721505'

const tarieven = [
  { id: 'schiphol',   rit: 'Groningen naar Schiphol',           afstand: '~205 km', prijs: '€491', vanPrijs: '€654', korting: '25%', icon: '✈️', accent: '#3b82f6', bg: 'linear-gradient(135deg,#eff6ff,#fff)', border: 'rgba(59,130,246,0.2)', glow: 'rgba(59,130,246,0.12)' },
  { id: 'eelde',      rit: 'Groningen naar Airport Eelde',       afstand: '~12 km',  prijs: '€42',  vanPrijs: null,   korting: null,  icon: '🛫', accent: '#8b5cf6', bg: 'linear-gradient(135deg,#f5f3ff,#fff)', border: 'rgba(139,92,246,0.2)',  glow: 'rgba(139,92,246,0.12)' },
  { id: 'eemshaven',  rit: 'Groningen naar Eemshaven',           afstand: '~35 km',  prijs: '€98',  vanPrijs: '€115', korting: '15%', icon: '🚢', accent: '#10b981', bg: 'linear-gradient(135deg,#ecfdf5,#fff)', border: 'rgba(16,185,129,0.2)',  glow: 'rgba(16,185,129,0.12)' },
  { id: 'leeuwarden', rit: 'Groningen naar Leeuwarden',          afstand: '~60 km',  prijs: '€156', vanPrijs: '€195', korting: '20%', icon: '🏙️', accent: '#f59e0b', bg: 'linear-gradient(135deg,#fffbeb,#fff)', border: 'rgba(245,158,11,0.2)',  glow: 'rgba(245,158,11,0.12)' },
  { id: 'assen',      rit: 'Groningen naar Assen',               afstand: '~30 km',  prijs: '€84',  vanPrijs: '€99',  korting: '15%', icon: '🗺️', accent: '#ef4444', bg: 'linear-gradient(135deg,#fef2f2,#fff)', border: 'rgba(239,68,68,0.2)',   glow: 'rgba(239,68,68,0.12)'  },
  { id: 'drachten',   rit: 'Groningen naar Drachten',            afstand: '~40 km',  prijs: '€105', vanPrijs: '€131', korting: '20%', icon: '📍', accent: '#06b6d4', bg: 'linear-gradient(135deg,#ecfeff,#fff)', border: 'rgba(6,182,212,0.2)',   glow: 'rgba(6,182,212,0.12)'  },
  { id: 'bremen',     rit: 'Groningen naar Bremen Airport',      afstand: '~190 km', prijs: '€455', vanPrijs: '€607', korting: '25%', icon: '🇩🇪', accent: '#f97316', bg: 'linear-gradient(135deg,#fff7ed,#fff)', border: 'rgba(249,115,22,0.2)',  glow: 'rgba(249,115,22,0.12)' },
  { id: 'dusseldorf', rit: 'Groningen naar Düsseldorf Airport',  afstand: '~290 km', prijs: '€693', vanPrijs: '€924', korting: '25%', icon: '🌍', accent: '#ec4899', bg: 'linear-gradient(135deg,#fdf2f8,#fff)', border: 'rgba(236,72,153,0.2)',  glow: 'rgba(236,72,153,0.12)' },
  { id: 'stad',       rit: 'Stadsrit Groningen',                 afstand: 'tot 5 km',prijs: '€20',  vanPrijs: null,   korting: null,  icon: '🏘️', accent: '#64748b', bg: 'linear-gradient(135deg,#f8fafc,#fff)', border: 'rgba(100,116,139,0.2)', glow: 'rgba(100,116,139,0.12)' },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'TaxiService',
  name: 'Taxi Amro Noord-Nederland',
  url: 'https://www.taxiamro.nl',
  telephone: '+31633721505',
  priceRange: '€€',
  areaServed: [
    { '@type': 'City', name: 'Groningen' },
    { '@type': 'AdministrativeArea', name: 'Friesland' },
    { '@type': 'AdministrativeArea', name: 'Drenthe' },
  ],
  offers: tarieven.map((t) => ({
    '@type': 'Offer',
    name: t.rit,
    description: `Vaste prijs taxi: ${t.rit}`,
    priceCurrency: 'EUR',
    price: t.prijs.replace('€', ''),
  })),
}

const faqs = [
  { q: 'Geldt er een nachttarief?', a: 'Nee. Bij Taxi Amro betaal je altijd de vooraf afgesproken vaste prijs. Ook \'s nachts, in het weekend of op feestdagen.' },
  { q: 'Wat als de rit langer duurt door file?', a: 'De vaste prijs die wij vooraf afspreken is altijd leidend. Extra reistijd door file of omleidingen is nooit voor jouw rekening.' },
  { q: 'Rekenen jullie per persoon of per rit?', a: 'Per rit, niet per persoon. Je kunt met meerdere reizigers (max. 4 personen) voor dezelfde prijs mee.' },
  { q: 'Krijg ik korting bij een retourrit?', a: 'Vraag gerust naar een retourpakket via WhatsApp. Voor vaste routes bieden we vaak een voordelig gecombineerd tarief.' },
]

function TariefCard({ t, index }) {
  const { ref, tilt, hovered, onMouseMove, onMouseEnter, onMouseLeave } = useScrollTilt(10)
  return (
    <div
      ref={ref}
      id={t.id}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-reveal
      className={`fade-up stagger-${(index % 6) + 1}`}
      style={{ perspective: 800 }}
    >
      <div style={{
        background: hovered ? t.bg : '#fafafa',
        border: `1.5px solid ${hovered ? t.border : '#f3f4f6'}`,
        borderRadius: 20,
        padding: '20px',
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${hovered ? 10 : 0}px)`,
        transition: hovered ? 'transform 0.08s ease, box-shadow 0.2s ease, background 0.2s ease' : 'transform 0.5s ease, box-shadow 0.3s ease, background 0.3s ease',
        boxShadow: hovered ? `0 16px 40px ${t.glow}, 0 4px 12px rgba(0,0,0,0.06)` : '0 2px 8px rgba(0,0,0,0.04)',
        willChange: 'transform',
      }}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{t.icon}</span>
            <div>
              <p className="font-semibold text-gray-900 text-sm leading-tight">{t.rit}</p>
              <p className="text-gray-400 text-xs mt-0.5">{t.afstand}</p>
              {t.korting && (
                <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full mt-1">{t.korting} korting</span>
              )}
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-xs text-gray-400">vanaf</p>
            <p className="font-bold text-lg leading-tight" style={{ color: t.accent }}>{t.prijs}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Tarieven() {
  useScrollRevealAll()

  return (
    <>
      <Seo
        title="Taxi Tarieven Groningen | Bereken je Ritprijs | Taxi Amro"
        description="Bereken direct je taxiprijs. Schiphol €491, Eemshaven €98, Eelde €42. Officieel metertarief met afstandskorting tot 25%. Vaste prijs, geen extra kosten."
        canonical="/tarieven"
        schema={schema}
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-blue-50">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-amber-200 rounded-full opacity-20 blur-3xl" />
            <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-blue-200 rounded-full opacity-20 blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link to="/" className="inline-flex items-center gap-1.5 text-gray-400 hover:text-amber-600 text-sm mb-6 transition-colors">
              ← Terug naar home
            </Link>
            <div data-reveal className="fade-in">
              <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                Vaste prijzen
              </span>
            </div>
            <h1 data-reveal className="fade-up stagger-1 text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Wat kost een taxi<br className="hidden md:block" /> in Groningen?
            </h1>
            <p data-reveal className="fade-up stagger-2 text-lg text-gray-500 mb-8 max-w-xl mx-auto">
              Altijd een <strong className="text-gray-700">vaste prijs vooraf</strong>. Geen verrassingen achteraf.
            </p>
            <div data-reveal className="fade-up stagger-3 flex flex-wrap justify-center gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-amber-200 text-sm hover:scale-105">
                💬 Vraag vaste prijs via WhatsApp
              </a>
              <a href={`tel:${TEL}`}
                 className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-amber-400 text-gray-700 hover:text-amber-600 font-semibold px-6 py-3 rounded-xl transition-all text-sm hover:scale-105">
                📞 Bel +31 6 33721505
              </a>
            </div>
          </div>
        </section>

        {/* Inline prijscalculator */}
        <PriceCalculator />

        {/* Tarieven cards grid */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-reveal className="fade-up text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Populaire ritten</h2>
              
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tarieven.map((t, i) => <TariefCard key={t.id} t={t} index={i} />)}
            </div>
            <p data-reveal className="fade-in mt-5 text-center text-xs text-gray-400">
              * Indicatieprijzen. Exacte vaste prijs op aanvraag via{' '}
              <a href={WA} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline font-medium">WhatsApp</a>.
            </p>
          </div>
        </section>

        {/* Hoe berekend */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-reveal className="fade-up text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Hoe wordt de prijs berekend?</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: '🤝', title: 'Vaste prijs vooraf', text: 'Jij weet precies wat je betaalt vóór je instapt.', delay: 'stagger-1' },
                { icon: '📍', title: 'Afstand + reistijd', text: 'Tarief gebaseerd op afstand en verwachte reistijd. Eerlijk en transparant.', delay: 'stagger-2' },
                { icon: '✅', title: 'Geen verrassingen', text: 'File, omleidingen of wachttijd op de luchthaven? Nooit voor jouw rekening.', delay: 'stagger-3' },
              ].map((item) => (
                <div key={item.title} data-reveal className={`fade-up ${item.delay}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inbegrepen */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-reveal className="fade-up text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Inbegrepen in elke rit</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                ['🚗', 'Hyundai Nexo', 'Luxe SUV, 100% waterstof'],
                ['🕐', '24/7 beschikbaar', 'Ook \'s nachts & weekend'],
                ['😊', 'Vriendelijke chauffeur', 'Denkt altijd mee'],
                ['✈️', 'Wachttijd inbegrepen', 'Bij luchthaven-pickup'],
                ['📶', 'Gratis WiFi', 'Onderweg altijd verbonden'],
                ['💳', 'Pin & contant', 'Betaal zoals jij wilt'],
              ].map(([icon, title, sub], i) => (
                <div key={title} data-reveal className={`fade-up stagger-${(i % 3) + 1}`}>
                  <div className="flex items-center gap-4 bg-gray-50 hover:bg-amber-50 border border-transparent hover:border-amber-200 rounded-2xl p-4 transition-all">
                    <span className="text-3xl flex-shrink-0">{icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{title}</p>
                      <p className="text-gray-400 text-xs">{sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-reveal className="fade-up text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Veelgestelde vragen</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} data-reveal className={`fade-up stagger-${i + 1} group border border-gray-200 bg-white rounded-2xl overflow-hidden`}>
                  <summary className="flex justify-between items-center cursor-pointer px-6 py-4 font-semibold text-gray-900 text-sm hover:bg-amber-50 list-none transition-colors">
                    {faq.q}
                    <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-5 pt-1 text-gray-500 text-sm border-t border-gray-100 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-gray-900">
          <div data-reveal className="fade-up max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Klaar om te boeken?</h2>
            <p className="text-gray-400 mb-8">Wij reageren snel. Ook 's avonds en in het weekend.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-7 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-amber-900/30 text-sm">
                💬 Vraag vaste prijs via WhatsApp
              </a>
              <Link to="/diensten"
                 className="inline-flex items-center gap-2 border border-gray-600 hover:border-amber-400 text-gray-300 hover:text-amber-400 font-semibold px-7 py-3.5 rounded-xl transition-all text-sm">
                Bekijk onze diensten →
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
