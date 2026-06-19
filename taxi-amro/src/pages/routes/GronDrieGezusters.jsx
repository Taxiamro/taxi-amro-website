import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-drie-gezusters',
  van: 'Groningen',
  naar: 'De Drie Gezusters',
  icon: '🍻',
  heroBg: 'bg-gradient-to-br from-orange-50 via-white to-amber-50',
  orb1: 'bg-orange-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi naar De Drie Gezusters in Groningen',
  intro: 'Een avondje uit bij De Drie Gezusters op de Grote Markt? Wij brengen je heen en halen je veilig op na sluitingstijd, vaste prijs, geen surge.',
  seoTitle: 'Taxi De Drie Gezusters Groningen | Uitgaansvervoer | Taxi Amro',
  seoDesc: 'Taxi naar De Drie Gezusters op de Grote Markt in Groningen. Veilig uitgaan, ophalen na sluitingstijd. Vaste prijs, geen surge. Bel of app Taxi Amro.',
  prijs: '€22',
  prijsRaw: '22',
  kortingLabel: 'Vaste ritprijs vanaf het centrum',
  afstand: '~2 km',
  rijdtijd: '±8 min',
  compareRows: [
    ['Prijs vooraf bekend', '✅ Altijd vast', '❌ Dynamisch (surge)'],
    ['Beschikbaar na sluitingstijd', '✅ Ook na 04:00', '⚠️ Wisselend'],
    ['Ophalen op afgesproken plek', '✅ Altijd', '⚠️ Onduidelijk'],
    ['Groep tot 4 personen', '✅ Samen in één auto', '⚠️ Afhankelijk'],
    ['Geen surge bij piekdrukte', '✅ Vaste prijs', '❌ 2 tot 3x duurder'],
    ['Chauffeur annuleert niet', '✅ Nooit', '⚠️ Komt voor'],
    ['Waterstof (0 CO₂)', '✅ Hyundai Nexo', '❌ Benzine/diesel'],
  ],
  body: [
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi naar De Drie Gezusters</h2>
    <p>De Drie Gezusters aan de Grote Markt is een van de grootste horecacomplexen van Noord-Nederland, met tientallen bars en clubs onder één dak. Taxi Amro brengt je er voor een vaste prijs vanaf <strong>€22</strong> (vanuit het centrum) naartoe, zodat je zorgeloos aan je avond begint.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Veilig terug na sluitingstijd</h2>
    <p>Na een avond stappen op de Grote Markt wil je gewoon veilig thuiskomen. Wij rijden 24/7 en staan op een afgesproken plek klaar, ook na 04:00, en je chauffeur annuleert niet.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Vaste prijs voor de hele groep</h2>
    <p>Tot 4 personen rijden samen voor dezelfde prijs. Reserveer vooraf, dan is je rit naar huis al geregeld voordat de avond losbarst.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi naar De Drie Gezusters?', a: 'Vanaf €22 vanuit het centrum van Groningen. Vanuit andere wijken kan het iets afwijken.' },
    { q: 'Halen jullie me op na sluitingstijd?', a: 'Ja, ook na 04:00 op een afgesproken plek.' },
    { q: 'Is er surge bij grote drukte?', a: 'Nee, je betaalt altijd de vaste prijs.' },
    { q: 'Kunnen we met de groep mee?', a: 'Ja, tot 4 personen samen in één auto.' },
    { q: 'Rijden jullie \'s nachts?', a: 'Ja, 24/7 zonder nachttoeslag.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-the-palace', label: 'Taxi → The Palace' },
    { slug: '/taxi-groningen-suikerterrein', label: 'Taxi → Suikerterrein' },
    { slug: '/taxi-groningen-oosterpoort', label: 'Taxi → De Oosterpoort' },
  ],
}

export default function GronDrieGezusters() {
  return <RoutePage route={route} />
}
