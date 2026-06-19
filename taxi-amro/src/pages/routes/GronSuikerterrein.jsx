import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-suikerterrein',
  van: 'Groningen',
  naar: 'Suikerterrein',
  icon: '🎪',
  heroBg: 'bg-gradient-to-br from-fuchsia-50 via-white to-amber-50',
  orb1: 'bg-fuchsia-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi naar het Suikerterrein in Groningen',
  intro: 'Festival of evenement op het Suikerterrein? Wij brengen je heen en halen je veilig op na afloop, vaste prijs, ook na sluitingstijd.',
  seoTitle: 'Taxi Suikerterrein Groningen | Festivalvervoer | Taxi Amro',
  seoDesc: 'Taxi naar het Suikerterrein (Suikerunieterrein) in Groningen. Veilig naar festivals en evenementen, ophalen na afloop. Vaste prijs, geen surge. Boek via WhatsApp.',
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
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi naar het Suikerterrein</h2>
    <p>Het Suikerterrein (het voormalige Suikerunieterrein) ten noordwesten van het centrum is een van de grootste festival- en evenementenlocaties van Groningen. Bij grote evenementen is parkeren in de buurt lastig en duur. Taxi Amro zet je voor een vaste prijs vanaf <strong>€25</strong> (vanuit het centrum) af bij de ingang, zonder zoeken naar een plek.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Veilig terug na het feest</h2>
    <p>Na een lange festivaldag wil je gewoon veilig naar huis. Wij staan op een afgesproken plek klaar, ook na 04:00. Geen surge pricing zoals bij apps op piekmomenten, en je chauffeur annuleert niet.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Groepsvervoer met vaste prijs</h2>
    <p>Ga je met vrienden? Tot 4 personen rijden samen in één auto voor dezelfde vaste prijs. Reserveer je rit vooraf, dan staat de taxi gegarandeerd klaar wanneer het feest is afgelopen.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi naar het Suikerterrein?', a: 'Vanaf €25 vanuit het centrum van Groningen. Vanuit andere wijken kan de prijs iets afwijken, vraag het even bij het boeken.' },
    { q: 'Halen jullie me op na het festival?', a: 'Ja. Spreek een ophaalplek en -tijd af; wij staan klaar, ook na sluitingstijd om 04:00.' },
    { q: 'Is er surge bij grote drukte?', a: 'Nee. Je betaalt altijd de vaste prijs, ook op piekmomenten.' },
    { q: 'Kunnen we met een groep mee?', a: 'Ja, tot 4 personen samen in één auto voor dezelfde prijs.' },
    { q: 'Rijden jullie ook diep in de nacht?', a: 'Ja, 24/7. Reserveer vooraf zodat de taxi gegarandeerd klaarstaat.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-graanfabriek', label: 'Taxi → De Graanfabriek' },
    { slug: '/taxi-groningen-the-palace', label: 'Taxi → The Palace' },
    { slug: '/taxi-groningen-oosterpoort', label: 'Taxi → De Oosterpoort' },
  ],
}

export default function GronSuikerterrein() {
  return <RoutePage route={route} />
}
