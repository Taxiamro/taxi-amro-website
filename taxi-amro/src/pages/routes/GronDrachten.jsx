import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-drachten',
  van: 'Groningen',
  naar: 'Drachten',
  icon: '📍',
  heroBg: 'bg-gradient-to-br from-lime-50 via-white to-amber-50',
  orb1: 'bg-lime-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi Groningen → Drachten',
  intro: 'Snel en comfortabel naar Drachten voor een vaste prijs van €105. Winkelen, zakelijk of bezoek, 24/7 beschikbaar.',
  seoTitle: 'Taxi Groningen Drachten | Vaste Prijs €105 | 24/7 Taxi Amro',
  seoDesc: 'Taxi van Groningen naar Drachten voor €105 vaste prijs all-in. Zakelijk, winkelen of bezoek. 24/7, van deur tot deur. Boek via WhatsApp.',
  prijs: '€105',
  vanPrijs: '€131',
  prijsRaw: '105',
  kortingLabel: '20% goedkoper dan metertarief',
  afstand: '~40 km',
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
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi van Groningen naar Drachten</h2>
    <p>Drachten is het commerciële hart van Zuidoost-Friesland, met veel winkels en bedrijven. Taxi Amro rijdt u voor een vaste prijs van <strong>€105</strong> rechtstreeks van Groningen naar Drachten via de A7, doorgaans in ±35 minuten.</p>`,
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Zakelijk, winkelen of op bezoek</h2>
    <p>Of u nu een zakelijke afspraak heeft, gaat winkelen of familie bezoekt, wij brengen u van deur tot deur, op tijd en zonder parkeerstress. Factuur op verzoek voor zakelijke ritten.</p>`,
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Vaste prijs, ook vroeg of laat</h2>
    <p>De prijs van €105 geldt 24/7, zonder toeslag voor avond, nacht of weekend. Reserveer vooraf en wij staan op de afgesproken tijd voor uw deur.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi van Groningen naar Drachten?', a: 'Vaste prijs €105 all-in. Het metertarief zou ±€131 zijn, u bespaart 20%.' },
    { q: 'Hoe lang duurt de rit van Groningen naar Drachten?', a: 'Gemiddeld ±35 minuten via de A7.' },
    { q: 'Rijden jullie ook \'s avonds en in het weekend?', a: 'Ja, 24/7 zonder toeslag.' },
    { q: 'Kan ik een factuur krijgen?', a: 'Zeker, geef het bij het boeken aan voor zakelijk vervoer.' },
    { q: 'Hoeveel personen kunnen mee?', a: 'Tot 4 personen voor dezelfde vaste prijs.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-heerenveen', label: 'Groningen → Heerenveen' },
    { slug: '/taxi-groningen-leeuwarden', label: 'Groningen → Leeuwarden' },
    { slug: '/taxi-groningen-assen', label: 'Groningen → Assen' },
  ],
}

export default function GronDrachten() {
  return <RoutePage route={route} />
}
