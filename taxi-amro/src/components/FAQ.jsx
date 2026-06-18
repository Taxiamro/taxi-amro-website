import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'Hoe kan ik een taxi boeken bij Taxi Amro?',
    a: 'U kunt ons 24/7 bereiken via WhatsApp (+31 6 33721505), telefoon of e-mail (taxiamro@outlook.com). Wij bevestigen uw boeking direct en staan altijd klaar, ook voor last-minute ritten.',
  },
  {
    q: 'Rijdt Taxi Amro ook naar Schiphol vanuit Groningen?',
    a: 'Ja, wij verzorgen transfers naar alle grote luchthavens: Schiphol Amsterdam, Groningen Airport Eelde, Eindhoven Airport, Bremen Airport en Düsseldorf Airport. Vaste prijs €491 voor Schiphol. Meer info op onze pagina taxi Groningen Schiphol.',
  },
  {
    q: 'Rijdt Taxi Amro naar Eemshaven?',
    a: 'Absoluut. Eemshaven is een van onze specialiteiten. Wij verzorgen dagelijks vervoer voor havenarbeiders, zeelieden en cruisegasten naar en van Eemshaven voor €98 vaste prijs. 24 uur per dag, 7 dagen per week.',
  },
  {
    q: 'Kan Taxi Amro mij naar Duitsland brengen (Emden, Leer, Bremen)?',
    a: 'Ja, wij rijden over de grens naar Emden, Leer, Bremen en andere bestemmingen in Noordwest-Duitsland. Grensoverschrijdend vervoer met vaste prijzen. Bel voor een offerte: +31 6 33721505.',
  },
  {
    q: 'Is een vaste prijs mogelijk?',
    a: 'Ja! Voor alle ritten, vliegveldtransfers, Eemshaven, zakelijke ritten en langere trajecten. Geen onverwachte kosten onderweg. Bekijk onze tarieven pagina voor alle vaste prijzen.',
  },
  {
    q: 'Hebben jullie ook vervoer voor groepen?',
    a: 'Ja, wij beschikken over een ruime bus voor groepen tot 8 passagiers. Ideaal voor bedrijfsuitjes, concerten, bruiloften en groepsreizen. Neem contact op voor een groepstarief.',
  },
  {
    q: 'Rijden jullie ook vanuit Friesland en Drenthe?',
    a: 'Ja, wij bedienen het gehele noorden van Nederland: Groningen, Friesland (Leeuwarden, Drachten, Heerenveen) en Drenthe (Assen, Emmen). Bel of app ons voor de exacte prijs vanuit uw locatie.',
  },
  {
    q: 'Hoe laat moet ik boeken voor een vroege vlucht?',
    a: 'Wij adviseren minimaal 24 uur van tevoren te boeken, maar last-minute boekingen zijn ook mogelijk. Voor vroege ochtendvluchten (bijv. 5:00 of 6:00 uur) zijn wij altijd beschikbaar, wij halen u thuis op.',
  },
  // 10 nieuwe vragen
  {
    q: 'Wat kost een taxi van Groningen naar Schiphol in 2026?',
    a: 'De vaste prijs van Taxi Amro voor Groningen naar Schiphol is €491 all-in. Het officiële metertarief in Nederland (€4,31 start + €3,17/km) zou op 205 km uitkomen op €654. U bespaart dus 25% met onze vaste prijs. Geen toeslagen voor vroeg/laat, bagage of tolwegen.',
  },
  {
    q: 'Wat zijn de tarieven voor ritten binnen Noord-Nederland?',
    a: 'Onze vaste prijzen: Groningen, Assen €84 (30 km), Groningen, Eemshaven €98 (35 km), Groningen, Leeuwarden €156 (60 km). Alle prijzen zijn all-in. Bekijk het volledige overzicht op onze tarieven pagina.',
  },
  {
    q: 'Is Taxi Amro goedkoper dan Uber in Groningen?',
    a: 'Voor korte ritten in de stad is Uber soms goedkoper. Voor vliegveldtransfers en ritten buiten Groningen is Taxi Amro bijna altijd voordeliger, en altijd met een vaste prijs. Uber hanteert surge pricing bij hoge vraag (evenementen, carnaval, nacht), waardoor de prijs kan verdubbelen. Bij Taxi Amro betaalt u altijd hetzelfde bedrag.',
  },
  {
    q: 'Rijdt Bolt ook naar Schiphol vanuit Groningen?',
    a: 'Bolt is actief in Groningen stad maar rijdt zelden lange afstanden zoals naar Schiphol (205 km). Als er al een Bolt-chauffeur beschikbaar is, is de prijs niet vast en kan door surge pricing oplopen. Taxi Amro biedt een gegarandeerde rit voor €491 met vluchttracering, ook om 04:00 \'s nachts.',
  },
  {
    q: 'Zijn er toeslagen voor vroege ochtend- of nachtritten?',
    a: 'Nee. Taxi Amro werkt met vaste prijzen zonder extra toeslagen, ongeacht het tijdstip. Of u nu om 03:00 naar Schiphol moet of om 23:00 thuiskomt van een evenement: de prijs is altijd hetzelfde.',
  },
  {
    q: 'Kan ik een taxi boeken voor een retourrit (heen en terug)?',
    a: 'Ja. Geef bij het boeken beide tijden door, heen en terug. Wij plannen beide ritten in. Bij luchthavens volgen we uw vlucht live zodat we de terugrit automatisch aanpassen bij vertraging.',
  },
  {
    q: 'Hoe werkt vluchttracering bij Taxi Amro?',
    a: 'U geeft uw vluchtnummer door bij het boeken. Wij volgen uw vlucht live. Landt u eerder of later? De chauffeur past de aankomsttijd automatisch aan zonder extra kosten of telefoontjes. U hoeft alleen maar te landen.',
  },
  {
    q: 'Wat maakt Taxi Amro anders dan andere taxibedrijven in Groningen?',
    a: 'We rijden in een Hyundai Nexo, een waterstofauto met 0 gram CO₂-uitstoot. We bieden altijd een vaste prijs vooraf. We zijn 24/7 beschikbaar inclusief feestdagen. En we zijn gespecialiseerd in Noord-Nederland, met dagelijkse ritten naar Schiphol, Eemshaven, Leeuwarden en Assen.',
  },
  {
    q: 'Rijdt Taxi Amro ook voor zakelijke klanten en bedrijven?',
    a: 'Ja. Wij hebben zakelijke contracten voor bedrijven in Groningen en omgeving. Regelmatige ritten, factuur per maand, vaste chauffeur. Neem contact op via taxiamro@outlook.com voor de mogelijkheden.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{q}</span>
        <span className={`text-yellow-500 text-xl transition-transform flex-shrink-0 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 bg-gray-50">
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">
            Veelgestelde vragen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Heeft u een vraag?
          </h2>
          <p className="text-gray-500 text-lg">
            Vindt u het antwoord niet? Bel ons direct op{' '}
            <a href="tel:+31633721505" className="text-amber-600 font-semibold hover:underline">
              +31 6 33721505
            </a>.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>

        <div className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-xl text-sm text-gray-600 text-center">
          Bekijk ook onze{' '}
          <Link to="/tarieven" className="text-amber-600 font-semibold hover:underline">tarieven pagina</Link>
          {' '}met vaste prijzen per route, of lees meer op{' '}
          <Link to="/blog" className="text-amber-600 font-semibold hover:underline">ons blog</Link>.
        </div>

        <div className="mt-6 text-center">
          <a href="tel:+31633721505"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-8 py-3.5 rounded-xl transition-colors shadow-md shadow-amber-100 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Bel direct: +31 6 33721505
          </a>
        </div>
      </div>
    </section>
  )
}
