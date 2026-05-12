import { useState } from 'react'

const faqs = [
  {
    q: 'Hoe kan ik een taxi boeken bij Taxi Amro?',
    a: 'U kunt ons 24/7 bereiken via WhatsApp (+31 6 33721505), telefoon of e-mail (taxiamro@outlook.com). Wij bevestigen uw boeking direct en staan altijd klaar — ook voor last-minute ritten.',
  },
  {
    q: 'Rijdt Taxi Amro ook naar Schiphol vanuit Groningen?',
    a: 'Ja, wij verzorgen transfers naar alle grote luchthavens: Schiphol Amsterdam, Groningen Airport Eelde, Eindhoven Airport, Bremen Airport en Düsseldorf Airport. Vraag een vaste prijs aan via +31 6 33721505.',
  },
  {
    q: 'Rijdt Taxi Amro naar Eemshaven?',
    a: 'Absoluut. Eemshaven is een van onze specialiteiten. Wij verzorgen dagelijks vervoer voor havenarbeiders, zeelieden en cruisegasten naar en van Eemshaven — 24 uur per dag, 7 dagen per week, ook vroeg in de ochtend.',
  },
  {
    q: 'Kan Taxi Amro mij naar Duitsland brengen (Emden, Leer, Bremen)?',
    a: 'Ja, wij rijden over de grens naar Emden, Leer, Bremen en andere bestemmingen in Noordwest-Duitsland. Grensoverschrijdend vervoer bieden wij met vaste prijzen aan. Bel voor een offerte: +31 6 33721505.',
  },
  {
    q: 'Is een vaste prijs mogelijk?',
    a: 'Ja! Voor alle ritten — vliegveldtransfers, Eemshaven, zakelijke ritten en langere trajecten — kunt u altijd een vrijblijvende vaste prijs aanvragen. Geen onverwachte kosten onderweg.',
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
    a: 'Wij adviseren minimaal 24 uur van tevoren te boeken, maar last-minute boekingen zijn ook mogelijk. Voor vroege ochtendvluchten (bijv. 5:00 of 6:00 uur) zijn wij altijd beschikbaar — wij halen u thuis op.',
  },
]

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

        <div className="mt-10 text-center">
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
