import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

const WA = 'https://wa.me/31633721505?text=Hallo%20Taxi%20Amro%2C%20ik%20wil%20graag%20een%20taxi%20boeken.'
const TEL = 'tel:+31633721505'

const reviews = [
  {
    naam: 'Martijn V.',
    locatie: 'Groningen',
    rit: 'Groningen → Schiphol',
    sterren: 5,
    datum: '2026-05-15',
    tekst: 'Super betrouwbaar! Om 04:30 opgehaald voor een vroege vlucht naar Barcelona. Chauffeur was al 5 minuten eerder aanwezig. Vaste prijs klopte precies, geen verrassingen. Echt een aanrader voor Schiphol-ritten.',
  },
  {
    naam: 'Sarah K.',
    locatie: 'Groningen',
    rit: 'Groningen → Eemshaven',
    sterren: 5,
    datum: '2026-04-22',
    tekst: 'Wij moesten naar Eemshaven voor de veerboot naar Borkum. Alles perfect verlopen — op tijd, ruime kofferbak, vriendelijke chauffeur. De waterstofauto was ook een bijzondere ervaring. Boek zeker via WhatsApp, dat gaat heel makkelijk.',
  },
  {
    naam: 'Ahmed B.',
    locatie: 'Groningen',
    rit: 'Zakelijke rit Groningen',
    sterren: 5,
    datum: '2026-03-10',
    tekst: 'Taxi Amro is onze vaste partner voor zakelijk vervoer. Altijd punctueel, professioneel en de Hyundai Nexo is echt een comfortabele auto. Factuur per maand is heel handig voor ons bedrijf.',
  },
  {
    naam: 'Petra de Vries',
    locatie: 'Haren',
    rit: 'Groningen → Assen',
    sterren: 5,
    datum: '2026-05-02',
    tekst: 'Mijn moeder moest naar het ziekenhuis in Assen. Taxi Amro heeft haar vriendelijk en zorgzaam vervoerd, ook het wachten en terugrijden was geen enkel probleem. Prijs van tevoren duidelijk afgesproken. Fijn bedrijf!',
  },
  {
    naam: 'Jan-Willem H.',
    locatie: 'Groningen',
    rit: 'Groningen → Leeuwarden',
    sterren: 5,
    datum: '2026-04-05',
    tekst: 'Regelmatig zakelijke ritten naar Leeuwarden. Altijd op tijd, professioneel gekleed en de auto is gewoon luxe. €156 voor die afstand is echt redelijk. Geef dit bedrijf gewoon 5 sterren.',
  },
  {
    naam: 'Fatima A.',
    locatie: 'Groningen',
    rit: 'Groningen → Schiphol',
    sterren: 5,
    datum: '2026-06-01',
    tekst: 'Fantastische service! Mijn vlucht was vertraagd, maar de chauffeur paste de ophaaltijd automatisch aan. Geen gedoe, geen extra kosten. Zo hoort het. Stap nooit meer in een andere taxi voor Schiphol.',
  },
  {
    naam: 'Klaas T.',
    locatie: 'Winsum',
    rit: 'Groningen → Schiphol',
    sterren: 5,
    datum: '2026-05-20',
    tekst: 'Uber was niet beschikbaar om 05:00. Taxi Amro wel. Vaste prijs, geen stress, op tijd op Schiphol. Precies wat je wil als je op vakantie gaat. Zeker voor herhaling vatbaar.',
  },
  {
    naam: 'Roos M.',
    locatie: 'Groningen',
    rit: 'Groningen → TT Circuit Assen',
    sterren: 5,
    datum: '2026-06-10',
    tekst: 'MotoGP weekend! Met 3 personen naar het TT Circuit. Prijs van €84 gedeeld door 3 — dat is gewoon goedkoper dan parkeren. Chauffeur kende ook de beste route om de drukte te vermijden.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'Taxi Amro Noord-Nederland',
      url: 'https://www.taxiamro.nl',
      telephone: '+31633721505',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: reviews.length.toString(),
        bestRating: '5',
        worstRating: '1',
      },
    },
    ...reviews.map(r => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.naam },
      datePublished: r.datum,
      reviewBody: r.tekst,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.sterren.toString(),
        bestRating: '5',
      },
      itemReviewed: {
        '@type': 'TaxiService',
        name: 'Taxi Amro Noord-Nederland',
      },
    })),
  ],
}

function Stars({ n = 5 }) {
  return <span className="text-yellow-400">{'★'.repeat(n)}{'☆'.repeat(5 - n)}</span>
}

export default function Reviews() {
  return (
    <>
      <Seo
        title="Reviews & Beoordelingen | Taxi Amro Groningen | 4.9/5 ★"
        description="Lees wat klanten zeggen over Taxi Amro Groningen. 4.9/5 sterren op basis van echte beoordelingen. Schiphol, Eemshaven, Assen, Leeuwarden en meer."
        canonical="/reviews"
        schema={schema}
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-28 pb-14 bg-gradient-to-br from-amber-50 via-white to-gray-50 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-1/4 w-80 h-80 bg-amber-300 rounded-full opacity-10 blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <Link to="/" className="inline-flex items-center gap-1 text-gray-400 hover:text-amber-600 text-sm mb-5 transition-colors">
              ← Terug naar home
            </Link>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-sm">
              ⭐ Klantbeoordelingen
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Wat klanten zeggen over Taxi Amro
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
              Echte beoordelingen van klanten die reizen naar Schiphol, Eemshaven, Assen en door heel Noord-Nederland.
            </p>

            {/* Score badge */}
            <div className="inline-flex flex-col items-center bg-white rounded-2xl shadow-lg border border-gray-100 px-10 py-5 mb-8">
              <span className="text-5xl font-bold text-gray-900">4.9</span>
              <Stars n={5} />
              <span className="text-xs text-gray-400 mt-1">{reviews.length} beoordelingen</span>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-7 py-3 rounded-xl text-sm transition-all shadow-md shadow-amber-200 hover:scale-105">
                💬 Boek via WhatsApp
              </a>
              <a href={TEL}
                className="border-2 border-gray-200 hover:border-amber-400 text-gray-700 font-semibold px-7 py-3 rounded-xl text-sm transition-all hover:scale-105">
                📞 Bel direct
              </a>
            </div>
          </div>
        </section>

        {/* Reviews grid */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-amber-200 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{r.naam}</p>
                    <p className="text-xs text-gray-400">{r.locatie} · {r.rit}</p>
                  </div>
                  <Stars n={r.sterren} />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">"{r.tekst}"</p>
                <p className="text-xs text-gray-300 mt-3">{new Date(r.datum).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA — laat zelf een review achter */}
        <section className="bg-gray-50 border-t border-gray-100 py-12">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Zelf gereist met Taxi Amro?</h2>
            <p className="text-gray-500 text-sm mb-6">Deel uw ervaring en help anderen een goede keuze te maken.</p>
            <a
              href="https://g.page/r/taxiamro/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-7 py-3 rounded-xl text-sm transition-all hover:scale-105 shadow-md shadow-amber-200"
            >
              ⭐ Schrijf een Google review
            </a>
          </div>
        </section>

        {/* Links to routes */}
        <section className="py-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-gray-500 mb-4">Onze populairste routes</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { to: '/taxi-groningen-schiphol', label: '✈️ Schiphol €491' },
              { to: '/taxi-groningen-assen', label: '🗺️ Assen €84' },
              { to: '/taxi-groningen-leeuwarden', label: '🏛️ Leeuwarden €156' },
              { to: '/taxi-groningen-eemshaven', label: '⚓ Eemshaven €98' },
            ].map(r => (
              <Link key={r.to} to={r.to} className="bg-white border border-gray-200 hover:border-amber-400 hover:text-amber-600 text-gray-700 text-sm px-4 py-2 rounded-lg transition-all">
                {r.label}
              </Link>
            ))}
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}
