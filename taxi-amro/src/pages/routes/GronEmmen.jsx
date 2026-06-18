import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-emmen',
  van: 'Groningen',
  naar: 'Emmen',
  icon: '🦒',
  heroBg: 'bg-gradient-to-br from-green-50 via-white to-amber-50',
  orb1: 'bg-green-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi Groningen → Emmen',
  intro: 'Naar Emmen of dierenpark Wildlands voor een vaste prijs van €150. Dagje uit, zakelijk of bezoek, 24/7.',
  seoTitle: 'Taxi Groningen Emmen | Vaste Prijs €150 | Wildlands | Taxi Amro',
  seoDesc: 'Taxi van Groningen naar Emmen voor €150 vaste prijs all-in. Ideaal voor Wildlands, zakelijk of bezoek. 24/7, van deur tot deur. Boek via WhatsApp.',
  prijs: '€150',
  vanPrijs: '€188',
  prijsRaw: '150',
  kortingLabel: '20% goedkoper dan metertarief',
  afstand: '~57 km',
  rijdtijd: '±55 min',
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
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi van Groningen naar Emmen</h2>
    <p>Emmen is de grootste plaats van Zuidoost-Drenthe en bekend van dierenpark Wildlands. Taxi Amro rijdt u voor een vaste prijs van <strong>€150</strong> rechtstreeks van Groningen naar Emmen via de A28/N34, doorgaans in ±55 minuten.</p>`,
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Dagje Wildlands of een afspraak</h2>
    <p>Een dagje naar Wildlands Adventure Zoo met het gezin? Wij zetten u af bij de ingang en halen u na sluitingstijd weer op, geen parkeerkosten en geen vermoeide rit naar huis. Ook voor zakelijke afspraken bent u bij ons aan het juiste adres.</p>`,
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Vaste prijs, 24/7</h2>
    <p>De prijs van €150 staat vooraf vast, zonder toeslag voor avond, nacht of weekend. Reserveer vooraf en wij staan op tijd klaar.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi van Groningen naar Emmen?', a: 'Vaste prijs €150 all-in. Het metertarief zou ±€188 zijn, u bespaart 20%.' },
    { q: 'Hoe lang duurt de rit van Groningen naar Emmen?', a: 'Gemiddeld ±55 minuten via de A28 en N34.' },
    { q: 'Brengen jullie mij tot Wildlands?', a: 'Ja, tot aan de ingang. Geef uw eindtijd door, dan halen wij u weer op.' },
    { q: 'Rijden jullie ook \'s avonds en in het weekend?', a: 'Ja, 24/7 zonder toeslag.' },
    { q: 'Hoeveel personen kunnen mee?', a: 'Tot 4 personen voor dezelfde vaste prijs.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-assen', label: 'Groningen → Assen' },
    { slug: '/taxi-groningen-winschoten', label: 'Groningen → Winschoten' },
    { slug: '/taxi-groningen-schiphol', label: 'Groningen → Schiphol' },
  ],
}

export default function GronEmmen() {
  return <RoutePage route={route} />
}
