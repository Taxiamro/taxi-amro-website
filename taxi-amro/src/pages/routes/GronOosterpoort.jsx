import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-oosterpoort',
  van: 'Groningen',
  naar: 'De Oosterpoort',
  icon: '🎷',
  heroBg: 'bg-gradient-to-br from-indigo-50 via-white to-amber-50',
  orb1: 'bg-indigo-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi naar De Oosterpoort in Groningen',
  intro: 'Concert of voorstelling in De Oosterpoort? Wij brengen je heen en halen je op na afloop — vaste prijs, geen gedoe.',
  seoTitle: 'Taxi De Oosterpoort Groningen | Concertvervoer | Taxi Amro',
  seoDesc: 'Taxi naar De Oosterpoort in Groningen. Naar concert of voorstelling, ophalen na afloop. Vaste prijs, geen surge pricing. Boek via WhatsApp.',
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
    ['Geen surge bij piekdrukte', '✅ Vaste prijs', '❌ 2–3× duurder'],
    ['Chauffeur annuleert niet', '✅ Nooit', '⚠️ Komt voor'],
    ['Waterstof (0 CO₂)', '✅ Hyundai Nexo', '❌ Benzine/diesel'],
  ],
  body: [
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi naar De Oosterpoort</h2>
    <p>De Oosterpoort is hét concert- en poppodium van Groningen. Taxi Amro brengt je er voor een vaste prijs vanaf <strong>€22</strong> (vanuit het centrum) naartoe, zodat je op tijd bent voor de support-act.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Na het concert zo weer thuis</h2>
    <p>Geen zoektocht naar je auto of wachten in de kou. Wij staan op een afgesproken plek klaar zodra de zaal uitloopt en rijden je comfortabel naar huis.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Vaste prijs voor de hele groep</h2>
    <p>Tot 4 personen rijden samen voor dezelfde prijs. Reserveer vooraf, dan is je rit naar huis al geregeld.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi naar De Oosterpoort?', a: 'Vanaf €22 vanuit het centrum van Groningen. Vanuit andere wijken kan het iets afwijken.' },
    { q: 'Halen jullie me op na het concert?', a: 'Ja, op een afgesproken plek zodra de zaal uitloopt.' },
    { q: 'Betaal ik meer bij drukte?', a: 'Nee, de prijs is vooraf vast — geen surge.' },
    { q: 'Kunnen we met de groep mee?', a: 'Ja, tot 4 personen in één auto.' },
    { q: 'Rijden jullie ook \'s avonds laat?', a: 'Ja, 24/7 zonder toeslag.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-martiniplaza', label: 'Taxi → MartiniPlaza' },
    { slug: '/taxi-groningen-paleis', label: 'Taxi → Het Paleis' },
    { slug: '/taxi-groningen-graanfabriek', label: 'Taxi → De Graanfabriek' },
  ],
}

export default function GronOosterpoort() {
  return <RoutePage route={route} />
}
