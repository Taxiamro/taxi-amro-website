import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

const WA = 'https://wa.me/31633721505?text=Hallo%20Taxi%20Amro%2C%20ik%20wil%20graag%20een%20vaste%20prijs%20weten%20voor%20mijn%20rit.'
const TEL = '+31633721505'

const tarieven = [
  { id: 'schiphol',   rit: 'Groningen → Schiphol',              afstand: '~205 km', prijs: 'vanaf €275' },
  { id: 'eelde',      rit: 'Groningen → Airport Eelde',          afstand: '~12 km',  prijs: 'vanaf €25'  },
  { id: 'eemshaven',  rit: 'Groningen → Eemshaven',              afstand: '~35 km',  prijs: 'vanaf €65'  },
  { id: 'leeuwarden', rit: 'Groningen → Leeuwarden',             afstand: '~60 km',  prijs: 'vanaf €95'  },
  { id: 'assen',      rit: 'Groningen → Assen',                  afstand: '~30 km',  prijs: 'vanaf €55'  },
  { id: 'drachten',   rit: 'Groningen → Drachten',               afstand: '~40 km',  prijs: 'vanaf €70'  },
  { id: 'bremen',     rit: 'Groningen → Bremen Airport',         afstand: '~190 km', prijs: 'vanaf €295' },
  { id: 'dusseldorf', rit: 'Groningen → Düsseldorf Airport',     afstand: '~290 km', prijs: 'vanaf €425' },
  { id: 'stad',       rit: 'Stadsrit Groningen (binnen stad)',   afstand: 'tot 5 km', prijs: 'vanaf €15' },
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
    price: t.prijs.replace(/[^0-9]/g, ''),
  })),
}

const faqs = [
  {
    q: 'Geldt er een nachttarief?',
    a: 'Nee. Bij Taxi Amro betaal je altijd de vooraf afgesproken vaste prijs — ook \'s nachts, in het weekend of op feestdagen.',
  },
  {
    q: 'Wat als de rit langer duurt door file of omleidingen?',
    a: 'Geen probleem. De vaste prijs die wij vooraf afspreken is altijd leidend. Extra reistijd door file of omleidingen is nooit voor jouw rekening.',
  },
  {
    q: 'Rekenen jullie per persoon of per rit?',
    a: 'Per rit, niet per persoon. Je kunt met meerdere reizigers (max. 4 personen) voor dezelfde prijs mee.',
  },
  {
    q: 'Krijg ik korting bij een retourrit?',
    a: 'Vraag gerust naar een retourpakket via WhatsApp. Voor vaste routes bieden we vaak een voordelig gecombineerd tarief.',
  },
]

function CtaBtns({ center = false }) {
  return (
    <div className={`flex flex-wrap gap-3 ${center ? 'justify-center' : ''}`}>
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-6 py-3 rounded-xl transition-all shadow-sm shadow-amber-200 text-sm"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Vraag vaste prijs via WhatsApp
      </a>
      <a
        href={`tel:${TEL}`}
        className="inline-flex items-center gap-2 border-2 border-amber-400 text-amber-600 hover:bg-amber-400 hover:text-gray-900 font-bold px-6 py-3 rounded-xl transition-all text-sm"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Bel +31 6 33721505
      </a>
    </div>
  )
}

export default function Tarieven() {
  return (
    <>
      <Seo
        title="Wat kost een taxi in Groningen? | Tarieven Taxi Amro"
        description="Bekijk vaste taxitarieven in Noord-Nederland: Schiphol, Eemshaven, Leeuwarden en meer. Geen verrassingen, prijs vooraf bekend."
        canonical="/tarieven"
        schema={schema}
      />
      <div className="min-h-screen bg-white">
        <Navbar blogMode />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">

          {/* Hero */}
          <section className="mb-12">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-wider mb-2">Vaste prijzen</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Wat kost een taxi in Groningen?
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl">
              Bij Taxi Amro betaal je altijd een <strong>vaste prijs, vooraf afgesproken</strong>.
              Geen taximeter, geen verrassingen achteraf.
            </p>
            <CtaBtns />
          </section>

          {/* Tarieven tabel */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" id="tarieven-tabel">
              Vaste prijzen voor populaire ritten
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-5 py-3 text-sm font-semibold text-gray-600">Rit</th>
                    <th className="px-5 py-3 text-sm font-semibold text-gray-600 whitespace-nowrap">Afstand</th>
                    <th className="px-5 py-3 text-sm font-semibold text-gray-600 whitespace-nowrap">Prijs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {tarieven.map((t) => (
                    <tr key={t.id} id={t.id} className="hover:bg-amber-50 transition-colors">
                      <td className="px-5 py-3.5 text-gray-900 font-medium">{t.rit}</td>
                      <td className="px-5 py-3.5 text-gray-500 whitespace-nowrap text-sm">{t.afstand}</td>
                      <td className="px-5 py-3.5 font-bold text-amber-600 whitespace-nowrap">{t.prijs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-gray-400">
              * Indicatieprijzen. Exacte vaste prijs via{' '}
              <a href={WA} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline font-medium">WhatsApp</a>
              {' '}of bel{' '}
              <a href={`tel:${TEL}`} className="text-amber-600 hover:underline font-medium">+31 6 33721505</a>.
            </p>
          </section>

          {/* Hoe prijs berekend */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Hoe wordt de prijs berekend?</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: '🤝', title: 'Vaste prijs vooraf', text: 'De prijs wordt vóór de rit afgesproken. Jij weet precies wat je betaalt voordat je instapt.' },
                { icon: '📍', title: 'Afstand + reistijd', text: 'Het tarief is gebaseerd op de afstand en verwachte reistijd van jouw rit.' },
                { icon: '✅', title: 'Geen verrassingen', text: 'File, omleidingen of wachttijd op de luchthaven? Dat is nooit voor jouw rekening.' },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-2xl p-5">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Inbegrepen */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Inbegrepen in elke rit</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                ['🚗', 'Comfortabele Hyundai Nexo (luxe SUV, 100% waterstof)'],
                ['🕐', '24/7 beschikbaar — ook \'s nachts en in het weekend'],
                ['😊', 'Vriendelijke chauffeur die meedenkt'],
                ['✈️', 'Wachttijd inbegrepen bij luchthaven-pickup'],
                ['📶', 'Gratis WiFi onderweg'],
                ['💳', 'Pin & contant betaling mogelijk'],
              ].map(([icon, text]) => (
                <li key={text} className="flex items-start gap-3 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-700">
                  <span className="text-lg leading-none mt-0.5">{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Veelgestelde vragen over tarieven</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-gray-200 rounded-2xl overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer px-5 py-4 font-semibold text-gray-900 text-sm hover:bg-gray-50 list-none">
                    {faq.q}
                    <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-5 pb-4 pt-1 text-gray-600 text-sm border-t border-gray-100">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="bg-gray-900 rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Klaar om te boeken?</h2>
            <p className="text-gray-400 text-sm mb-6">Wij reageren snel — ook \'s avonds en in het weekend.</p>
            <CtaBtns center />
            <p className="mt-4 text-xs text-gray-600">
              Of bekijk{' '}
              <Link to="/#services" className="text-amber-400 hover:underline">al onze diensten</Link>
            </p>
          </section>

        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}
