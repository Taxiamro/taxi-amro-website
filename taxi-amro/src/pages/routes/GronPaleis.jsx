import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-the-palace',
  van: 'Groningen',
  naar: 'The Palace',
  icon: '🎉',
  heroBg: 'bg-gradient-to-br from-pink-50 via-white to-amber-50',
  orb1: 'bg-pink-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi naar The Palace in Groningen',
  intro: 'Een avond uit in The Palace? Wij brengen je heen en halen je veilig op na sluitingstijd, vaste prijs, geen surge.',
  seoTitle: 'Taxi The Palace Groningen | Uitgaansvervoer | Taxi Amro',
  seoDesc: 'Taxi naar The Palace in Groningen. Veilig uitgaan, ophalen na sluitingstijd. Vaste prijs, geen surge pricing. Boek direct via WhatsApp.',
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
    ['Geen surge bij piekdrukte', '✅ Vaste prijs', '❌ 2 tot 3× duurder'],
    ['Chauffeur annuleert niet', '✅ Nooit', '⚠️ Komt voor'],
    ['Waterstof (0 CO₂)', '✅ Hyundai Nexo', '❌ Benzine/diesel'],
  ],
  body: [
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi naar The Palace</h2>
    <p>The Palace is een bekende uitgaans- en evenementenlocatie in Groningen. Taxi Amro brengt je er voor een vaste prijs vanaf <strong>€22</strong> (vanuit het centrum) naartoe, zodat je zorgeloos kunt beginnen aan je avond.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Veilig terug na sluitingstijd</h2>
    <p>Het uitgaan loopt vaak door tot in de kleine uurtjes. Wij rijden 24/7 en staan op een afgesproken plek klaar, ook na 04:00, veilig samen terug, ook met een borrel op.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Vaste prijs voor de hele groep</h2>
    <p>Tot 4 personen rijden samen voor dezelfde prijs. Reserveer vooraf, dan is de rit naar huis al geregeld voordat de avond begint.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi naar The Palace?', a: 'Vanaf €22 vanuit het centrum van Groningen. Vanuit andere wijken kan het iets afwijken.' },
    { q: 'Halen jullie me op na sluitingstijd?', a: 'Ja, ook na 04:00 op een afgesproken plek.' },
    { q: 'Is er surge bij piekdrukte?', a: 'Nee, je betaalt altijd de vaste prijs.' },
    { q: 'Kunnen we met de groep mee?', a: 'Ja, tot 4 personen in één auto.' },
    { q: 'Rijden jullie \'s nachts?', a: 'Ja, 24/7 zonder nachttoeslag.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-suikerterrein', label: 'Taxi → Suikerterrein' },
    { slug: '/taxi-groningen-graanfabriek', label: 'Taxi → De Graanfabriek' },
    { slug: '/taxi-groningen-drie-gezusters', label: 'Taxi → De Drie Gezusters' },
  ],
}

export default function GronPaleis() {
  return <RoutePage route={route} />
}
