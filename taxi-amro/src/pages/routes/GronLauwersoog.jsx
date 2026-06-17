import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-lauwersoog',
  van: 'Groningen',
  naar: 'Lauwersoog',
  icon: '⛴️',
  heroBg: 'bg-gradient-to-br from-sky-50 via-white to-amber-50',
  orb1: 'bg-sky-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi Groningen → Lauwersoog (veerboot Schiermonnikoog)',
  intro: 'Naar de veerboot naar Schiermonnikoog. Vaste prijs €110, ook bij vroege afvaarten, 24/7 beschikbaar.',
  seoTitle: 'Taxi Groningen Lauwersoog | Veerboot Schiermonnikoog | €110',
  seoDesc: 'Taxi van Groningen naar Lauwersoog voor €110 vaste prijs. Op tijd bij de veerboot naar Schiermonnikoog, geen parkeerkosten. 24/7. Boek via WhatsApp.',
  prijs: '€110',
  vanPrijs: '€135',
  prijsRaw: '110',
  kortingLabel: '18% goedkoper dan metertarief',
  afstand: '~38 km',
  rijdtijd: '±40 min',
  compareRows: [
    ['Prijs vooraf bekend', '✅ Altijd vast', '❌ Dynamisch (surge)'],
    ['Op tijd voor de afvaart', '✅ Gegarandeerd', '⚠️ Onzeker'],
    ['Vroege ochtendboot', '✅ Altijd', '⚠️ Wisselend'],
    ['Ophalen bij terugkomst', '✅ Afgestemd op aankomst', '❌ Niet'],
    ['Ruimte voor bagage', '✅ XL kofferbak', '⚠️ Afhankelijk auto'],
    ['Geen parkeerkosten haven', '✅ Bespaart €8–12/dag', '—'],
    ['Waterstof (0 CO₂)', '✅ Hyundai Nexo', '❌ Benzine/diesel'],
  ],
  body: [
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi van Groningen naar Lauwersoog</h2>
    <p>Vanuit Lauwersoog vaart de veerboot van Wagenborg naar Schiermonnikoog. Taxi Amro brengt u voor een vaste prijs van <strong>€110</strong> op tijd naar de veerterminal. Omdat Schiermonnikoog vrijwel autovrij is, laat u de auto toch thuis — wij brengen u tot aan de boot.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Ideaal omdat Schiermonnikoog autovrij is</h2>
    <p>Op Schiermonnikoog mag u niet met de auto. In plaats van dagenlang betaald parkeren bij Lauwersoog, laat u zich door ons afzetten bij de terminal. Geen parkeerkosten, geen zorgen over uw auto — gewoon op de boot stappen met al uw bagage.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Ophalen bij terugkomst</h2>
    <p>Geef uw aankomsttijd van de veerboot door, dan staan wij klaar zodra u weer in Lauwersoog bent. Vaste prijs €110 voor de terugrit naar Groningen, ook \'s avonds en in het weekend.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi van Groningen naar Lauwersoog?', a: 'Vaste prijs €110 all-in. Het metertarief zou ±€135 zijn — u bespaart 18%.' },
    { q: 'Halen jullie de veerboot naar Schiermonnikoog op tijd?', a: 'Ja. Geef uw boottijd door; wij vertrekken ruim op tijd zodat u de afvaart haalt.' },
    { q: 'Kan ik mijn auto beter thuislaten?', a: 'Ja. Schiermonnikoog is vrijwel autovrij, dus parkeren bij Lauwersoog is alleen kosten. Wij brengen u tot aan de boot.' },
    { q: 'Halen jullie mij op bij terugkomst?', a: 'Ja. Geef uw aankomsttijd door, dan staan wij klaar in Lauwersoog.' },
    { q: 'Rijden jullie ook vroeg in de ochtend?', a: 'Ja, 24/7 zonder toeslag — ook voor de eerste boot.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-holwerd', label: 'Groningen → Holwerd' },
    { slug: '/taxi-groningen-eemshaven', label: 'Groningen → Eemshaven' },
    { slug: '/taxi-groningen-leeuwarden', label: 'Groningen → Leeuwarden' },
  ],
}

export default function GronLauwersoog() {
  return <RoutePage route={route} />
}
