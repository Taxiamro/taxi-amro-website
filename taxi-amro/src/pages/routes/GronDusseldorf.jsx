import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-dusseldorf-airport',
  van: 'Groningen',
  naar: 'Düsseldorf Airport',
  icon: '✈️',
  heroBg: 'bg-gradient-to-br from-rose-50 via-white to-amber-50',
  orb1: 'bg-rose-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi Groningen → Düsseldorf Airport',
  intro: 'Intercontinentale vlucht vanaf Düsseldorf? Vaste prijs all-in, geen overstappen, geen grensgedoe. Van deur tot terminal, 24/7.',
  seoTitle: 'Taxi Groningen Düsseldorf Airport | Vaste Prijs €693 | 24/7 Taxi Amro',
  seoDesc: 'Taxi van Groningen naar Düsseldorf Airport (DUS) voor €693 vaste prijs all-in, inclusief tol. Ideaal voor intercontinentale vluchten. Vluchttracering, 24/7. Boek via WhatsApp.',
  prijs: '€693',
  vanPrijs: '€924',
  prijsRaw: '693',
  kortingLabel: '25% goedkoper dan metertarief',
  afstand: '~290 km',
  rijdtijd: '±3u00',
  body: [
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi van Groningen naar Düsseldorf Airport</h2>
    <p>Düsseldorf Airport (DUS) is de grootste luchthaven van de regio en een belangrijke hub voor intercontinentale vluchten — naar Azië, het Midden-Oosten en Noord-Amerika. Vanuit Groningen is het ±290 km. Taxi Amro rijdt u voor een vaste prijs van <strong>€693</strong> rechtstreeks naar de terminal, zonder overstappen of grensgedoe.</p>
    <p style="margin-top:0.75rem;">We rijden via de A28 en A1 de grens over. De prijs is all-in en vooraf vast — inclusief tol en eventuele files.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Waarom Düsseldorf vanuit Noord-Nederland?</h2>
    <p>Düsseldorf biedt vaak directe intercontinentale verbindingen die Schiphol mist, of die er goedkoper zijn. Voor zakenreizigers en vakantiegangers uit Groningen, Drenthe en Friesland is een vaste-prijs taxi naar DUS een comfortabel alternatief: u reist van deur tot deur en hoeft niet te parkeren of over te stappen.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Ophalen na landing — ook na een lange vlucht</h2>
    <p>Komt u terug via Düsseldorf na een intercontinentale reis? Geef uw vluchtnummer door; wij volgen de aankomst live en passen de ophaaltijd kosteloos aan bij vertraging. De chauffeur wacht u op in de aankomsthal — u stapt in en bent zonder overstappen weer thuis in Groningen.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Taxi vs. trein naar Düsseldorf</h2>
    <p>Met het OV bent u vanuit Groningen al snel 5+ uur onderweg met meerdere overstappen. Met een vaste prijs van <strong>€693</strong> reist u met 2 tot 4 personen comfortabel en direct, met al uw bagage. En u betaalt geen €100+ aan parkeerkosten voor een lange reis.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi van Groningen naar Düsseldorf Airport?', a: 'Vaste prijs €693 all-in, inclusief tol. Het metertarief zou ±€924 zijn — u bespaart 25%.' },
    { q: 'Hoe lang duurt de rit van Groningen naar Düsseldorf?', a: 'Gemiddeld ±3 uur via de A28 en A1. Houd bij intercontinentale vluchten rekening met 3,5 uur inchecktijd vooraf.' },
    { q: 'Zijn tol en grenskosten inbegrepen?', a: 'Ja. De prijs van €693 is volledig all-in — geen verrassingen achteraf.' },
    { q: 'Halen jullie mij op bij terugkomst?', a: 'Ja. Geef uw vluchtnummer door, wij volgen de aankomst live. Bij vertraging geen extra kosten.' },
    { q: 'Hoeveel personen en koffers kunnen mee?', a: 'Tot 4 personen met een ruime kofferbak. Meer bagage? Bel ons even.' },
    { q: 'Rijden jullie ook \'s nachts?', a: 'Ja, Taxi Amro is 24/7 beschikbaar zonder nachttoeslag.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-schiphol', label: 'Groningen → Schiphol' },
    { slug: '/taxi-groningen-bremen-airport', label: 'Groningen → Bremen Airport' },
    { slug: '/taxi-groningen-eindhoven-airport', label: 'Groningen → Eindhoven Airport' },
  ],
}

export default function GronDusseldorf() {
  return <RoutePage route={route} />
}
