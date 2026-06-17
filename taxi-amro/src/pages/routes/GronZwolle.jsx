import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-zwolle',
  van: 'Groningen',
  naar: 'Zwolle',
  icon: '🚉',
  heroBg: 'bg-gradient-to-br from-emerald-50 via-white to-amber-50',
  orb1: 'bg-emerald-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi Groningen → Zwolle',
  intro: 'Naar het station, het Isala ziekenhuis of een zakelijke afspraak in Zwolle. Vaste prijs €255, 24/7 beschikbaar.',
  seoTitle: 'Taxi Groningen Zwolle | Vaste Prijs €255 | 24/7 Taxi Amro',
  seoDesc: 'Taxi van Groningen naar Zwolle voor €255 vaste prijs all-in. Naar station, Isala ziekenhuis of zakelijk. 24/7, van deur tot deur. Boek via WhatsApp.',
  prijs: '€255',
  vanPrijs: '€320',
  prijsRaw: '255',
  kortingLabel: '20% goedkoper dan metertarief',
  afstand: '~105 km',
  rijdtijd: '±1u15',
  compareRows: [
    ['Prijs vooraf bekend', '✅ Altijd vast', '❌ Dynamisch (surge)'],
    ['Beschikbaar 24/7', '✅ Altijd', '⚠️ Wisselend'],
    ['Vaste prijs hele rit', '✅ Geen verrassingen', '❌ Meter loopt door'],
    ['Direct, geen overstap', '✅ Van deur tot deur', '❌ Trein met overstap'],
    ['Chauffeur annuleert niet', '✅ Nooit', '⚠️ Komt voor'],
    ['Waterstof (0 CO₂)', '✅ Hyundai Nexo', '❌ Benzine/diesel'],
    ['Ruime kofferbak bagage', '✅ XL kofferbak', '⚠️ Afhankelijk auto'],
  ],
  body: [
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi van Groningen naar Zwolle</h2>
    <p>Zwolle is een belangrijk knooppunt tussen Noord- en Midden-Nederland. Taxi Amro rijdt u voor een vaste prijs van <strong>€255</strong> rechtstreeks van Groningen naar Zwolle — naar het station, een afspraak of een privéadres. We rijden via de A28 en doen er doorgaans ±1u15 over.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Naar het Isala ziekenhuis of een zakelijke afspraak</h2>
    <p>Veel klanten reizen naar het Isala ziekenhuis of een bedrijf in de regio Zwolle. Wij brengen u rustig en op tijd tot aan de ingang, wachten indien gewenst en rijden u weer terug. Comfortabel en betrouwbaar, ook bij vroege afspraken.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Aansluiting of overstap vermijden</h2>
    <p>Met de trein stapt u vaak over en bent u afhankelijk van de dienstregeling. Met een vaste taxiprijs reist u direct van deur tot deur, met al uw bagage en op uw eigen tijd — handig bij vroege of late reizen wanneer het OV beperkt rijdt.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi van Groningen naar Zwolle?', a: 'Vaste prijs €255 all-in. Het metertarief zou ±€320 zijn — u bespaart 20%.' },
    { q: 'Hoe lang duurt de rit van Groningen naar Zwolle?', a: 'Gemiddeld ±1u15 via de A28.' },
    { q: 'Rijden jullie tot het Isala ziekenhuis?', a: 'Ja, van deur tot deur tot aan de ingang. Op verzoek wachten wij en rijden u weer terug.' },
    { q: 'Is er een toeslag voor avond of weekend?', a: 'Nee. De prijs van €255 geldt 24/7, ook \'s avonds, \'s nachts en in het weekend.' },
    { q: 'Kan ik met meerdere personen reizen?', a: 'Ja, tot 4 personen voor dezelfde vaste prijs.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-amsterdam', label: 'Groningen → Amsterdam' },
    { slug: '/taxi-groningen-leeuwarden', label: 'Groningen → Leeuwarden' },
    { slug: '/taxi-groningen-assen', label: 'Groningen → Assen' },
  ],
}

export default function GronZwolle() {
  return <RoutePage route={route} />
}
