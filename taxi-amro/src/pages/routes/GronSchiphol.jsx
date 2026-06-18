import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-schiphol',
  van: 'Groningen',
  naar: 'Schiphol',
  icon: '✈️',
  heroBg: 'bg-gradient-to-br from-blue-50 via-white to-amber-50',
  orb1: 'bg-blue-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi Groningen → Schiphol',
  intro: 'Vaste prijs, geen files-stress, geen parkeerkosten. Wij rijden u op tijd van deur tot gate, ook om 03:00 \'s nachts.',
  seoTitle: 'Taxi Groningen Schiphol | Vaste Prijs €491 | 24/7 Taxi Amro',
  seoDesc: 'Taxi van Groningen naar Schiphol voor €491 vaste prijs all-in. Vluchttracering, ruime kofferbak, 24/7 beschikbaar. Boek direct via WhatsApp.',
  prijs: '€491',
  vanPrijs: '€654',
  prijsRaw: '491',
  kortingLabel: '25% goedkoper dan metertarief',
  afstand: '~205 km',
  rijdtijd: '±2u15',
  body: [
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi van Groningen naar Schiphol</h2>
    <p>Een vlucht vanuit Schiphol boeken terwijl je in Groningen woont betekent vroeg opstaan, stress over parkeren of dure P-long tarieven. Taxi Amro rijdt dagelijks van Groningen centrum naar Amsterdam Schiphol Airport voor een vaste prijs van <strong>€491</strong>, all-in zonder surprises.</p>
    <p style="margin-top:0.75rem;">We nemen de route via de A28/A1 en hebben doorgaans ±2u15 nodig. Bij drukte op de A10 kennen we de alternatieve routes. De prijs is altijd vast, geen surge pricing, geen files-toeslag.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Ophalen na landing, vluchttracering inbegrepen</h2>
    <p>Komt u terug van een vlucht? Geef uw vluchtnummer door en wij volgen uw aankomsttijd live. Vertraagd? Geen kosten, wij passen de ophaaltijd automatisch aan. U hoeft niet te bellen. Na aankomst wacht de chauffeur in de aankomsthal met een naambordje.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Vroege vluchten, ook om 03:00 's nachts</h2>
    <p>Schiphol is een hub voor vroege ochtendvluchten. Veel klanten moeten om <strong>04:00 of 05:00</strong> worden opgehaald in Groningen. Taxi Amro is 24/7 beschikbaar, inclusief weekenden en feestdagen. Geen toeslag voor vroege ritten.</p>
    <p style="margin-top:0.75rem;">Uber en Bolt zijn op die tijdstippen in Groningen nauwelijks beschikbaar. En als er al een auto is, kan surge pricing oplopen tot €400 tot €500, terwijl u bij ons altijd €491 betaalt.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Taxi vs. trein vs. parkeren bij Schiphol</h2>
    <p>Het officiële metertarief (€4,31 start + €3,17/km) zou op 205 km uitkomen op <strong>€654</strong>. Taxi Amro rekent <strong>€491 vast</strong>, 25% goedkoper. De trein kost €30 tot €50 p.p. maar met overstappen en koffers slepen duurt het 3+ uur. P-long parkeren bij Schiphol kost €12 tot €18 per dag. Bij een week weg is dat al €84 tot €126 extra.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi van Groningen naar Schiphol?', a: 'Vaste prijs €491 all-in. Geen toeslagen voor bagage, vroege/late ritten of tolwegen. Het officiële metertarief zou €654 zijn, u bespaart 25%.' },
    { q: 'Hoe lang duurt de rit van Groningen naar Schiphol?', a: 'Gemiddeld ±2u15. We adviseren 3 uur voor uw vlucht te vertrekken bij EU-vluchten, 3,5 uur bij intercontinentale vluchten.' },
    { q: 'Rijden jullie ook terug van Schiphol naar Groningen?', a: 'Ja. Geef uw vluchtnummer door, wij volgen de aankomsttijd live. Vertraging? Geen extra kosten. De chauffeur wacht in de aankomsthal met een naambordje.' },
    { q: 'Zijn er toeslagen voor vroege of late ritten?', a: 'Nee. De prijs van €491 geldt altijd, ook om 03:00 of 04:00 \'s nachts, in het weekend en op feestdagen.' },
    { q: 'Hoeveel koffers passen er mee?', a: 'Onze Hyundai Nexo heeft een ruime kofferbak. Standaard passen 2 tot 3 grote koffers + handbagage. Meer bagage? Bel ons even.' },
    { q: 'Kan ik ook met meerdere personen rijden?', a: 'Ja, tot 4 personen. De prijs blijft €491, per persoon goedkoper dan de trein als u met 2 of meer bent.' },
    { q: 'Is Uber beschikbaar van Groningen naar Schiphol?', a: 'Uber rijdt zelden lange afstanden vanuit Groningen en is vroeg in de ochtend nauwelijks beschikbaar. Bij hoge vraag loopt de surge price op zonder de zekerheid van een vaste prijs.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-eindhoven-airport', label: 'Groningen → Eindhoven Airport' },
    { slug: '/taxi-groningen-dusseldorf-airport', label: 'Groningen → Düsseldorf Airport' },
    { slug: '/taxi-groningen-bremen-airport', label: 'Groningen → Bremen Airport' },
    { slug: '/taxi-groningen-eelde-airport', label: 'Groningen → Airport Eelde' },
  ],
}

export default function GronSchiphol() {
  return <RoutePage route={route} />
}
