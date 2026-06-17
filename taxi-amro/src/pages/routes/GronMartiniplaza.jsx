import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-martiniplaza',
  van: 'Groningen',
  naar: 'MartiniPlaza',
  icon: '🎤',
  heroBg: 'bg-gradient-to-br from-rose-50 via-white to-amber-50',
  orb1: 'bg-rose-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi naar MartiniPlaza in Groningen',
  intro: 'Concert, theater, beurs of congres in MartiniPlaza? Vaste prijs heen en terug, ophalen na afloop.',
  seoTitle: 'Taxi MartiniPlaza Groningen | Concert & Beurs | Taxi Amro',
  seoDesc: 'Taxi naar MartiniPlaza in Groningen. Naar concert, theater, beurs of congres, ophalen na afloop. Vaste prijs, geen surge. Boek via WhatsApp.',
  prijs: '€25',
  prijsRaw: '25',
  kortingLabel: 'Vaste ritprijs vanaf het centrum',
  afstand: '~3 km',
  rijdtijd: '±10 min',
  compareRows: [
    ['Prijs vooraf bekend', '✅ Altijd vast', '❌ Dynamisch (surge)'],
    ['Beschikbaar na sluitingstijd', '✅ Ook na 04:00', '⚠️ Wisselend'],
    ['Ophalen op afgesproken plek', '✅ Altijd', '⚠️ Onduidelijk'],
    ['Groep tot 4 personen', '✅ Samen in één auto', '⚠️ Afhankelijk'],
    ['Geen surge bij piekdrukte', '✅ Vaste prijs', '❌ 2–3× duurder'],
    ['Chauffeur annuleert niet', '✅ Nooit', '⚠️ Komt voor'],
    ['Waterstof (0 CO₂)', '✅ Hyundai Nexo', '❌ Benzine/diesel'],
  ],
  body: [
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi naar MartiniPlaza</h2>
    <p>MartiniPlaza is de grote evenementenhal van Groningen, met concerten, theater, beurzen en congressen. Bij grote evenementen is parkeren schaars. Taxi Amro zet je voor een vaste prijs vanaf <strong>€25</strong> (vanuit het centrum) af bij de ingang.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Op tijd én vlot weer weg</h2>
    <p>Na een uitverkocht concert of beurs sta je niet graag in de file van het parkeerterrein. Wij halen je op een afgesproken plek op, zodat je vlot en comfortabel weer thuis bent.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Zakelijk of met de groep</h2>
    <p>Voor een congres rijden we je op tijd tot aan de ingang, factuur op verzoek. Ga je met meer mensen? Tot 4 personen voor dezelfde vaste prijs.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi naar MartiniPlaza?', a: 'Vanaf €25 vanuit het centrum van Groningen. Vanuit andere wijken kan het iets afwijken.' },
    { q: 'Halen jullie me op na het concert?', a: 'Ja, op een afgesproken plek — zo vermijd je de drukte op het parkeerterrein.' },
    { q: 'Kan ik een factuur krijgen voor een congres?', a: 'Zeker, geef het bij het boeken aan.' },
    { q: 'Is er surge bij grote evenementen?', a: 'Nee, de prijs staat vooraf vast.' },
    { q: 'Rijden jullie ook \'s avonds laat?', a: 'Ja, 24/7 zonder toeslag.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-oosterpoort', label: 'Taxi → De Oosterpoort' },
    { slug: '/taxi-groningen-paleis', label: 'Taxi → Het Paleis' },
    { slug: '/taxi-groningen-suikerterrein', label: 'Taxi → Suikerterrein' },
  ],
}

export default function GronMartiniplaza() {
  return <RoutePage route={route} />
}
