import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-winschoten',
  van: 'Groningen',
  naar: 'Winschoten',
  icon: '📍',
  heroBg: 'bg-gradient-to-br from-amber-50 via-white to-amber-50',
  orb1: 'bg-amber-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi Groningen → Winschoten',
  intro: 'Naar Winschoten of de Blauwestad voor een vaste prijs van €105. Zakelijk, bezoek of dagje uit — 24/7.',
  seoTitle: 'Taxi Groningen Winschoten | Vaste Prijs €105 | 24/7 Taxi Amro',
  seoDesc: 'Taxi van Groningen naar Winschoten voor €105 vaste prijs all-in. Oost-Groningen, Blauwestad, zakelijk of bezoek. 24/7. Boek via WhatsApp.',
  prijs: '€105',
  vanPrijs: '€131',
  prijsRaw: '105',
  kortingLabel: '20% goedkoper dan metertarief',
  afstand: '~38 km',
  rijdtijd: '±35 min',
  compareRows: [
    ['Prijs vooraf bekend', '✅ Altijd vast', '❌ Dynamisch (surge)'],
    ['Beschikbaar 24/7', '✅ Altijd', '⚠️ Wisselend'],
    ['Vaste prijs hele rit', '✅ Geen verrassingen', '❌ Meter loopt door'],
    ['Ook vroeg of laat', '✅ Zonder toeslag', '⚠️ Toeslag of uitval'],
    ['Chauffeur annuleert niet', '✅ Nooit', '⚠️ Komt voor'],
    ['Waterstof (0 CO₂)', '✅ Hyundai Nexo', '❌ Benzine/diesel'],
    ['Ruime kofferbak bagage', '✅ XL kofferbak', '⚠️ Afhankelijk auto'],
  ],
  body: [
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi van Groningen naar Winschoten</h2>
    <p>Winschoten is het centrum van Oost-Groningen, vlak bij de Blauwestad. Taxi Amro rijdt u voor een vaste prijs van <strong>€105</strong> rechtstreeks van Groningen naar Winschoten via de A7 — doorgaans in ±35 minuten.</p>`,
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Blauwestad, zakelijk of op bezoek</h2>
    <p>Of u nu naar de Blauwestad gaat, een zakelijke afspraak heeft of familie bezoekt — wij brengen u van deur tot deur, op tijd en zonder parkeerzorgen. Factuur op verzoek.</p>`,
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Vaste prijs, ook vroeg of laat</h2>
    <p>De prijs van €105 geldt 24/7 zonder toeslag. In Oost-Groningen is het OV beperkt, zeker \'s avonds — met ons reist u altijd op tijd en comfortabel.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi van Groningen naar Winschoten?', a: 'Vaste prijs €105 all-in. Het metertarief zou ±€131 zijn — u bespaart 20%.' },
    { q: 'Hoe lang duurt de rit van Groningen naar Winschoten?', a: 'Gemiddeld ±35 minuten via de A7.' },
    { q: 'Rijden jullie ook naar de Blauwestad?', a: 'Ja, van deur tot deur naar elk adres in de regio Winschoten en Blauwestad.' },
    { q: 'Rijden jullie ook \'s avonds en in het weekend?', a: 'Ja, 24/7 zonder toeslag — handig waar het OV beperkt rijdt.' },
    { q: 'Hoeveel personen kunnen mee?', a: 'Tot 4 personen voor dezelfde vaste prijs.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-delfzijl', label: 'Groningen → Delfzijl' },
    { slug: '/taxi-groningen-eemshaven', label: 'Groningen → Eemshaven' },
    { slug: '/taxi-groningen-assen', label: 'Groningen → Assen' },
  ],
}

export default function GronWinschoten() {
  return <RoutePage route={route} />
}
