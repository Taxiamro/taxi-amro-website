import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-tt-assen',
  van: 'Groningen',
  naar: 'TT Assen',
  icon: '🏁',
  heroBg: 'bg-gradient-to-br from-red-50 via-white to-amber-50',
  orb1: 'bg-red-500',
  orb2: 'bg-amber-300',
  h1: 'Taxi naar de TT in Assen',
  intro: 'TT Assen van 26 t/m 28 juni 2026? Wij brengen je groep op tijd naar het TT Circuit en veilig weer terug. Vaste prijs, geen parkeerstress.',
  seoTitle: 'Taxi TT Assen 2026 | Vervoer naar TT Circuit | Taxi Amro',
  seoDesc: 'Taxi naar de TT in Assen, 26 t/m 28 juni 2026. Vanuit Groningen en omgeving naar het TT Circuit. Vaste prijs, ophalen na de races, 24/7. Boek via WhatsApp.',
  prijs: '€95',
  vanPrijs: '€118',
  prijsRaw: '95',
  kortingLabel: '20% goedkoper dan metertarief',
  afstand: '~35 km',
  rijdtijd: '±35 min',
  compareRows: [
    ['Prijs vooraf bekend', '✅ Altijd vast', '❌ Dynamisch (surge)'],
    ['Geen parkeerstress bij de TT', '✅ Tot bij de ingang', '❌ Ver lopen'],
    ['Ophalen na de races', '✅ Afgesproken plek', '⚠️ Onzeker'],
    ['Groep tot 4 personen', '✅ Samen in één auto', '⚠️ Afhankelijk'],
    ['Geen surge bij piekdrukte', '✅ Vaste prijs', '❌ 2 tot 3x duurder'],
    ['Beschikbaar 24/7', '✅ Ook laat terug', '⚠️ Wisselend'],
    ['Waterstof (0 CO₂)', '✅ Hyundai Nexo', '❌ Benzine/diesel'],
  ],
  body: [
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi naar de TT Assen 2026</h2>
    <p>De TT van Assen is van <strong>26 t/m 28 juni 2026</strong> een van de grootste evenementen van Noord-Nederland, met tienduizenden bezoekers op en rond het TT Circuit. Parkeren is dan een uitdaging en de wegen lopen vol. Taxi Amro brengt je vanuit Groningen en omgeving voor een vaste prijs van <strong>€95</strong> tot dicht bij de ingang.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Geen parkeerstress, geen files</h2>
    <p>Rond het circuit is het razend druk en sta je zo een uur in de rij voor een parkeerplek ver van de ingang. Wij zetten je af waar het kan en je hoeft niet eindeloos te lopen of te zoeken. Na afloop sta je niet uren vast op een modderig parkeerterrein.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Ophalen na de races, ook laat</h2>
    <p>Na de races en het avondprogramma staan wij klaar op een afgesproken plek, ook laat in de avond. Zo kom je veilig samen terug, ook als je een drankje hebt gehad. Taxi Amro rijdt 24/7, dus ook na een lange festivaldag.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Boek op tijd voor het TT-weekend</h2>
    <p>Tijdens het TT-weekend is het enorm druk en zijn taxi's snel volgeboekt. Reserveer ruim van tevoren zodat je rit gegarandeerd is. Met je vrienden reis je tot 4 personen samen voor dezelfde vaste prijs.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi naar de TT in Assen?', a: 'Vaste prijs vanaf €95 vanuit Groningen, afhankelijk van je opstapplaats. Het metertarief zou rond €118 liggen.' },
    { q: 'Wanneer is de TT Assen in 2026?', a: 'Van 26 t/m 28 juni 2026 op het TT Circuit Assen.' },
    { q: 'Halen jullie mij op na de races?', a: 'Ja, op een afgesproken plek, ook laat in de avond. Geef je tijd door bij het boeken.' },
    { q: 'Kunnen we met een groep mee?', a: 'Ja, tot 4 personen samen in één auto voor dezelfde vaste prijs.' },
    { q: 'Moet ik vroeg boeken?', a: 'Ja, tijdens het TT-weekend is het erg druk. Reserveer ruim van tevoren zodat je rit zeker is.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-assen', label: 'Groningen → Assen' },
    { slug: '/taxi-groningen-emmen', label: 'Groningen → Emmen' },
    { slug: '/taxi-groningen-leeuwarden', label: 'Groningen → Leeuwarden' },
  ],
}

export default function GronTTAssen() {
  return <RoutePage route={route} />
}
