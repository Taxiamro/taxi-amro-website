import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-heerenveen',
  van: 'Groningen',
  naar: 'Heerenveen',
  icon: '⛸️',
  heroBg: 'bg-gradient-to-br from-blue-50 via-white to-amber-50',
  orb1: 'bg-blue-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi Groningen → Heerenveen',
  intro: 'Naar Thialf, Abe Lenstra Stadion of een afspraak in Heerenveen. Vaste prijs €155, 24/7.',
  seoTitle: 'Taxi Groningen Heerenveen | Vaste Prijs €155 | Thialf | Taxi Amro',
  seoDesc: 'Taxi van Groningen naar Heerenveen voor €155 vaste prijs all-in. Naar Thialf, Abe Lenstra Stadion of zakelijk. 24/7. Boek via WhatsApp.',
  prijs: '€155',
  vanPrijs: '€195',
  prijsRaw: '155',
  kortingLabel: '20% goedkoper dan metertarief',
  afstand: '~62 km',
  rijdtijd: '±50 min',
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
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi van Groningen naar Heerenveen</h2>
    <p>Heerenveen is bekend van ijsstadion Thialf en het Abe Lenstra Stadion van sc Heerenveen. Taxi Amro rijdt u voor een vaste prijs van <strong>€155</strong> rechtstreeks van Groningen naar Heerenveen via de A7, doorgaans in ±50 minuten.</p>`,
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Naar Thialf, het stadion of een evenement</h2>
    <p>Wedstrijd, schaatsevenement of concert? Wij brengen u en uw gezelschap op tijd tot bij de ingang en halen u na afloop weer op, geen parkeergedoe en veilig samen terug, ook met een borrel op.</p>`,
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Vaste prijs, 24/7</h2>
    <p>De prijs van €155 staat vooraf vast, zonder toeslag voor avond, nacht of weekend. Ideaal voor evenementen die laat eindigen.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi van Groningen naar Heerenveen?', a: 'Vaste prijs €155 all-in. Het metertarief zou ±€195 zijn, u bespaart 20%.' },
    { q: 'Hoe lang duurt de rit van Groningen naar Heerenveen?', a: 'Gemiddeld ±50 minuten via de A7.' },
    { q: 'Brengen jullie mij tot Thialf of het stadion?', a: 'Ja, tot bij de ingang. Geef de eindtijd door, dan halen wij u na afloop weer op.' },
    { q: 'Rijden jullie ook laat na een evenement?', a: 'Ja, 24/7 zonder toeslag, veilig samen terug naar Groningen.' },
    { q: 'Hoeveel personen kunnen mee?', a: 'Tot 4 personen voor dezelfde vaste prijs.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-drachten', label: 'Groningen → Drachten' },
    { slug: '/taxi-groningen-leeuwarden', label: 'Groningen → Leeuwarden' },
    { slug: '/taxi-groningen-assen', label: 'Groningen → Assen' },
  ],
}

export default function GronHeerenveen() {
  return <RoutePage route={route} />
}
