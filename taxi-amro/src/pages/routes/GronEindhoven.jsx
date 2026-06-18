import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-eindhoven-airport',
  van: 'Groningen',
  naar: 'Eindhoven Airport',
  icon: '✈️',
  heroBg: 'bg-gradient-to-br from-blue-50 via-white to-amber-50',
  orb1: 'bg-blue-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi Groningen → Eindhoven Airport',
  intro: 'Vroege budgetvlucht vanaf Eindhoven? Vaste prijs, geen overstappen, geen parkeerstress. Wij rijden u van deur tot vertrekhal, ook midden in de nacht.',
  seoTitle: 'Taxi Groningen Eindhoven Airport | Vaste Prijs €645 | 24/7 Taxi Amro',
  seoDesc: 'Taxi van Groningen naar Eindhoven Airport voor €645 vaste prijs all-in. Ideaal voor Ryanair, Transavia en Wizz Air. Vluchttracering, 24/7 beschikbaar. Boek via WhatsApp.',
  prijs: '€645',
  vanPrijs: '€860',
  prijsRaw: '645',
  kortingLabel: '25% goedkoper dan metertarief',
  afstand: '~270 km',
  rijdtijd: '±2u50',
  body: [
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi van Groningen naar Eindhoven Airport</h2>
    <p>Eindhoven Airport is de tweede luchthaven van Nederland en dé thuisbasis voor goedkope vluchten met Ryanair, Transavia en Wizz Air. Vanuit Groningen is het ±270 km, te ver voor een dure metertaxi en lastig met het OV vroeg in de ochtend. Taxi Amro rijdt u voor een vaste prijs van <strong>€645</strong> rechtstreeks van uw voordeur naar de vertrekhal.</p>
    <p style="margin-top:0.75rem;">We vertrekken ruim op tijd via de A28 en A50. Geen overstappen, geen koffers slepen, geen parkeerstress. De prijs staat vooraf vast, ook bij files of een vroege afvaart.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Vroege vluchten? Wij rijden ook midden in de nacht</h2>
    <p>Veel budgetvluchten vanaf Eindhoven vertrekken rond 06:00 tot 07:00. Met ±2u50 reistijd betekent dat ophalen in Groningen rond 02:30 tot 03:00. Taxi Amro is 24/7 beschikbaar, <strong>zonder nachttoeslag</strong>. Terwijl Uber en Bolt op die tijden in Groningen nauwelijks rijden, staan wij gewoon voor uw deur.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Ophalen na landing, vluchttracering inbegrepen</h2>
    <p>Komt u terug via Eindhoven Airport? Geef uw vluchtnummer door en wij volgen uw landing live. Bij vertraging passen we de ophaaltijd kosteloos aan. De chauffeur wacht u op, u stapt in en wij brengen u rechtstreeks naar Groningen.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Taxi vs. trein vs. parkeren bij Eindhoven Airport</h2>
    <p>Met de trein bent u vanuit Groningen 3,5 tot 4 uur onderweg met twee overstappen (Zwolle, Eindhoven Centraal + bus 401). Parkeren bij Eindhoven Airport kost €30 tot €80 voor een weekend. Bij een vaste prijs van <strong>€645</strong> reist u met 2 tot 4 personen vaak voordeliger én comfortabeler, van deur tot deur.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi van Groningen naar Eindhoven Airport?', a: 'Vaste prijs €645 all-in. Geen toeslagen voor bagage, vroege ritten of tol. Het metertarief zou ±€860 zijn, u bespaart 25%.' },
    { q: 'Hoe lang duurt de rit van Groningen naar Eindhoven Airport?', a: 'Gemiddeld ±2u50 via de A28 en A50. We adviseren 3 uur voor uw vlucht te vertrekken bij EU-vluchten.' },
    { q: 'Rijden jullie ook midden in de nacht voor vroege vluchten?', a: 'Ja. Taxi Amro is 24/7 beschikbaar zonder nachttoeslag, ook om 02:30 of 03:00.' },
    { q: 'Halen jullie mij ook op bij terugkomst?', a: 'Ja. Geef uw vluchtnummer door, wij volgen de aankomst live. Bij vertraging geen extra kosten.' },
    { q: 'Hoeveel personen en koffers kunnen mee?', a: 'Tot 4 personen met een ruime kofferbak (2 tot 3 grote koffers + handbagage). Meer bagage? Bel ons even.' },
    { q: 'Is een taxi goedkoper dan parkeren?', a: 'Bij 2 of meer personen of een langere reis vaak wel. U betaalt geen €30 tot €80 parkeerkosten en reist van deur tot deur.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-schiphol', label: 'Groningen → Schiphol' },
    { slug: '/taxi-groningen-dusseldorf-airport', label: 'Groningen → Düsseldorf Airport' },
    { slug: '/taxi-groningen-eelde-airport', label: 'Groningen → Airport Eelde' },
  ],
}

export default function GronEindhoven() {
  return <RoutePage route={route} />
}
