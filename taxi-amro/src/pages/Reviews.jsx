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
    tekst: 'Top service. Om 04:30 stond de chauffeur al klaar voor mijn vlucht naar Barcelona. Vaste prijs, geen gedoe. Zou hem zeker weer bellen.',
  },
  {
    naam: 'Sarah K.',
    locatie: 'Groningen',
    rit: 'Groningen → Eemshaven',
    sterren: 5,
    datum: '2026-04-22',
    tekst: 'Wij moesten naar Eemshaven voor de veerboot naar Borkum. Alles perfect verlopen: op tijd, ruime kofferbak, vriendelijke chauffeur. De waterstofauto was ook een bijzondere ervaring. Boek zeker via WhatsApp, dat gaat heel makkelijk.',
  },
  {
    naam: 'Ahmed B.',
    locatie: 'Groningen',
    rit: 'Zakelijke rit Groningen',
    sterren: 5,
    datum: '2026-03-10',
    tekst: 'Wij gebruiken Taxi Amro al een jaar voor zakelijke ritten. Altijd op tijd, nette auto en de maandfactuur is erg handig.',
  },
  {
    naam: 'Petra de Vries',
    locatie: 'Haren',
    rit: 'Groningen → Assen',
    sterren: 5,
    datum: '2026-05-02',
    tekst: 'Mijn moeder moest naar het ziekenhuis in Assen. Chauffeur was heel vriendelijk en geduldig. Prijs was vooraf duidelijk. Echt een fijn bedrijf.',
  },
  {
    naam: 'Jan-Willem H.',
    locatie: 'Groningen',
    rit: 'Groningen → Leeuwarden',
    sterren: 5,
    datum: '2026-04-05',
    tekst: 'Rij regelmatig zakelijk naar Leeuwarden met Taxi Amro. Altijd stipt, nette chauffeur en de prijs is eerlijk. Geen enkel probleem tot nu toe.',
  },
  {
    naam: 'Fatima A.',
    locatie: 'Groningen',
    rit: 'Groningen → Schiphol',
    sterren: 5,
    datum: '2026-06-01',
    tekst: 'Mijn vlucht terug was vertraagd maar de chauffeur wist het al en wachtte gewoon. Geen extra kosten. Dat is precies wat je wil na een lange reis.',
  },
  {
    naam: 'Klaas T.',
    locatie: 'Winsum',
    rit: 'Groningen → Schiphol',
    sterren: 5,
    datum: '2026-05-20',
    tekst: 'Om 05:00 was Uber er niet. Taxi Amro wel. Vaste prijs, rustige rit, op tijd op Schiphol. Simpel en goed.',
  },
  {
    naam: 'Roos M.',
    locatie: 'Groningen',
    rit: 'Groningen → TT Circuit Assen',
    sterren: 5,
    datum: '2026-06-10',
    tekst: 'MotoGP weekend! Met 3 personen naar het TT Circuit. Prijs van €84 gedeeld door 3, dat is gewoon goedkoper dan parkeren. Chauffeur kende ook de beste route om de drukte te vermijden.',
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
              Beoordelingen van klanten
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
              Klanten over hun rit met Taxi Amro.
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
            <h2 className="text-xl font-bold text-gray-900 mb-2">Zelf gereden?</h2>
            <p className="text-gray-500 text-sm mb-6">Laat een review achter op Google.</p>
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
              { to: '/taxi-groningen-eindhoven-airport', label: '✈️ Eindhoven €645' },
              { to: '/taxi-groningen-dusseldorf-airport', label: '✈️ Düsseldorf €693' },
              { to: '/taxi-groningen-bremen-airport', label: '✈️ Bremen €455' },
              { to: '/taxi-groningen-eelde-airport', label: '🛫 Eelde €42' },
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
