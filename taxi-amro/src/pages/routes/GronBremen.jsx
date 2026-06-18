import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-bremen-airport',
  van: 'Groningen',
  naar: 'Bremen Airport',
  icon: '✈️',
  heroBg: 'bg-gradient-to-br from-red-50 via-white to-amber-50',
  orb1: 'bg-red-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi Groningen → Bremen Airport',
  intro: 'De dichtstbijzijnde internationale luchthaven na Eelde. Vaste prijs €455, ideaal voor een citytrip of goedkope vlucht. Van deur tot terminal, 24/7.',
  seoTitle: 'Taxi Groningen Bremen Airport | Vaste Prijs €455 | 24/7 Taxi Amro',
  seoDesc: 'Taxi van Groningen naar Bremen Airport (BRE) voor €455 vaste prijs all-in. Dichterbij dan Schiphol, ideaal voor citytrips en Ryanair-vluchten. Vluchttracering, 24/7. Boek via WhatsApp.',
  prijs: '€455',
  vanPrijs: '€607',
  prijsRaw: '455',
  kortingLabel: '25% goedkoper dan metertarief',
  afstand: '~190 km',
  rijdtijd: '±2u00',
  body: [
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi van Groningen naar Bremen Airport</h2>
    <p>Bremen Airport (BRE) is na Eelde de dichtstbijzijnde internationale luchthaven voor Noord-Nederland, ±190 km via de A7. Met goedkope vluchten van onder andere Ryanair naar Europese steden is Bremen een populair alternatief voor Schiphol. Taxi Amro rijdt u voor een vaste prijs van <strong>€455</strong> rechtstreeks naar de terminal.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Citytrip of vakantie via Bremen</h2>
    <p>Vanaf Bremen vliegt u voordelig naar bestemmingen als München, Wenen, Barcelona en de Turkse kust. Vooral voor een citytrip is Bremen ideaal: minder druk dan Schiphol, snel inchecken en vaste-prijs vervoer tot aan de deur. Geen parkeerkosten, geen overstappen.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Ophalen na landing, vluchttracering inbegrepen</h2>
    <p>Terug op Bremen Airport? Geef uw vluchtnummer door en wij volgen uw aankomst. Bij vertraging passen we de ophaaltijd kosteloos aan. De chauffeur wacht u op en brengt u direct terug naar Groningen.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Bremen vs. Schiphol vanuit Groningen</h2>
    <p>Bremen ligt dichterbij dan Schiphol en is vaak rustiger. Voor Europese vluchten bespaart u reistijd én parkeerstress. Voor intercontinentale reizen blijven Schiphol of Düsseldorf interessanter. Twijfelt u? Wij rijden u naar alle drie voor een vaste prijs.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi van Groningen naar Bremen Airport?', a: 'Vaste prijs €455 all-in. Het metertarief zou ±€607 zijn, u bespaart 25%.' },
    { q: 'Hoe lang duurt de rit van Groningen naar Bremen?', a: 'Gemiddeld ±2 uur via de A7. We adviseren ruim op tijd te vertrekken voor het inchecken.' },
    { q: 'Is de route all-in geprijsd?', a: 'Ja. €455 is volledig all-in, zonder toeslagen (er is geen tol op deze route).' },
    { q: 'Halen jullie mij op bij terugkomst?', a: 'Ja. Geef uw vluchtnummer door, wij volgen de aankomst live. Bij vertraging geen extra kosten.' },
    { q: 'Hoeveel personen en koffers kunnen mee?', a: 'Tot 4 personen met een ruime kofferbak. Meer bagage? Bel ons even.' },
    { q: 'Waarom Bremen in plaats van Schiphol?', a: 'Bremen ligt dichterbij, is rustiger en biedt vaak goedkope Europese vluchten, ideaal voor een citytrip.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-schiphol', label: 'Groningen → Schiphol' },
    { slug: '/taxi-groningen-dusseldorf-airport', label: 'Groningen → Düsseldorf Airport' },
    { slug: '/taxi-groningen-eelde-airport', label: 'Groningen → Airport Eelde' },
  ],
}

export default function GronBremen() {
  return <RoutePage route={route} />
}
