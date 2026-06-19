import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-graanfabriek',
  van: 'Groningen',
  naar: 'De Graanfabriek',
  icon: '🎶',
  heroBg: 'bg-gradient-to-br from-violet-50 via-white to-amber-50',
  orb1: 'bg-violet-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi naar De Graanfabriek in Groningen',
  intro: 'Naar een feest, clubnacht of evenement in De Graanfabriek? Vaste prijs, en wij halen je veilig op na afloop.',
  seoTitle: 'Taxi De Graanfabriek Groningen | Uitgaansvervoer | Taxi Amro',
  seoDesc: 'Taxi naar De Graanfabriek in Groningen. Veilig naar feesten, clubnachten en evenementen, ophalen na afloop. Vaste prijs, geen surge. Boek via WhatsApp.',
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
    ['Geen surge bij piekdrukte', '✅ Vaste prijs', '❌ 2 tot 3× duurder'],
    ['Chauffeur annuleert niet', '✅ Nooit', '⚠️ Komt voor'],
    ['Waterstof (0 CO₂)', '✅ Hyundai Nexo', '❌ Benzine/diesel'],
  ],
  body: [
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi naar De Graanfabriek</h2>
    <p>De Graanfabriek aan de oostkant van Groningen is een populaire locatie voor clubnachten, feesten, bruiloften en culturele evenementen. Taxi Amro brengt je er voor een vaste prijs vanaf <strong>€25</strong> (vanuit het centrum) rechtstreeks naartoe, zonder parkeerzorgen.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Veilig en op tijd</h2>
    <p>Of het nu een avondvullend programma of een doorloopfeest is, wij staan klaar wanneer jij wilt, ook laat in de nacht. Vaste prijs, betrouwbare chauffeur, geen verrassingen.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Met de groep in één auto</h2>
    <p>Tot 4 personen reizen samen voor dezelfde prijs. Spreek vooraf een ophaaltijd af, dan rijden we je na afloop veilig terug naar huis.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi naar De Graanfabriek?', a: 'Vanaf €25 vanuit het centrum van Groningen. Vanuit andere wijken kan het iets afwijken, vraag het bij het boeken.' },
    { q: 'Halen jullie me op na het feest?', a: 'Ja, op een afgesproken plek en tijd, ook na sluitingstijd.' },
    { q: 'Betaal ik meer bij drukte?', a: 'Nee, de prijs is vooraf vast, geen surge.' },
    { q: 'Kunnen we met meerdere personen?', a: 'Ja, tot 4 personen in één auto.' },
    { q: 'Rijden jullie \'s nachts?', a: 'Ja, 24/7. Reserveer vooraf voor zekerheid.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-suikerterrein', label: 'Taxi → Suikerterrein' },
    { slug: '/taxi-groningen-the-palace', label: 'Taxi → The Palace' },
    { slug: '/taxi-groningen-oosterpoort', label: 'Taxi → De Oosterpoort' },
  ],
}

export default function GronGraanfabriek() {
  return <RoutePage route={route} />
}
