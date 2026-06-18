import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-delfzijl',
  van: 'Groningen',
  naar: 'Delfzijl',
  icon: '⚓',
  heroBg: 'bg-gradient-to-br from-teal-50 via-white to-amber-50',
  orb1: 'bg-teal-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi Groningen → Delfzijl',
  intro: 'Naar Delfzijl of de haven voor een vaste prijs van €90. Zakelijk, haven of bezoek, 24/7 beschikbaar.',
  seoTitle: 'Taxi Groningen Delfzijl | Vaste Prijs €90 | 24/7 Taxi Amro',
  seoDesc: 'Taxi van Groningen naar Delfzijl voor €90 vaste prijs all-in. Haven, zakelijk of bezoek. 24/7, van deur tot deur. Boek via WhatsApp.',
  prijs: '€90',
  vanPrijs: '€112',
  prijsRaw: '90',
  kortingLabel: '20% goedkoper dan metertarief',
  afstand: '~30 km',
  rijdtijd: '±30 min',
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
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi van Groningen naar Delfzijl</h2>
    <p>Delfzijl is een belangrijke haven- en industrieplaats aan de Eems. Taxi Amro rijdt u voor een vaste prijs van <strong>€90</strong> rechtstreeks van Groningen naar Delfzijl via de N360, doorgaans in ±30 minuten.</p>`,
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Haven, zakelijk of op bezoek</h2>
    <p>Veel ritten gaan naar het haven- en industriegebied of de chemie in Delfzijl. Wij brengen werknemers en bezoekers op tijd, ook bij vroege diensten. Voor de Eemshaven verderop rijden wij eveneens dagelijks.</p>`,
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Vaste prijs, 24/7</h2>
    <p>De prijs van €90 staat vooraf vast, zonder toeslag voor avond, nacht of weekend. Ideaal voor ploegendiensten en vroege afspraken.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi van Groningen naar Delfzijl?', a: 'Vaste prijs €90 all-in. Het metertarief zou ±€112 zijn, u bespaart 20%.' },
    { q: 'Hoe lang duurt de rit van Groningen naar Delfzijl?', a: 'Gemiddeld ±30 minuten via de N360.' },
    { q: 'Rijden jullie naar het haven- en industriegebied?', a: 'Ja, van deur tot deur, ook bij vroege ploegendiensten.' },
    { q: 'Rijden jullie ook \'s nachts?', a: 'Ja, 24/7 zonder toeslag.' },
    { q: 'Hoeveel personen kunnen mee?', a: 'Tot 4 personen voor dezelfde vaste prijs.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-eemshaven', label: 'Groningen → Eemshaven' },
    { slug: '/taxi-groningen-winschoten', label: 'Groningen → Winschoten' },
    { slug: '/taxi-groningen-assen', label: 'Groningen → Assen' },
  ],
}

export default function GronDelfzijl() {
  return <RoutePage route={route} />
}
