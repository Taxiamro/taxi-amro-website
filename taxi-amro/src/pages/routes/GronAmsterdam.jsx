import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-amsterdam',
  van: 'Groningen',
  naar: 'Amsterdam',
  icon: '🏙️',
  heroBg: 'bg-gradient-to-br from-orange-50 via-white to-amber-50',
  orb1: 'bg-orange-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi Groningen → Amsterdam',
  intro: 'Rechtstreeks naar Amsterdam centrum, uw hotel of een zakelijke afspraak. Vaste prijs, geen overstappen, 24/7 beschikbaar.',
  seoTitle: 'Taxi Groningen Amsterdam | Vaste Prijs €445 | 24/7 Taxi Amro',
  seoDesc: 'Taxi van Groningen naar Amsterdam voor €445 vaste prijs all-in. Direct naar centrum, hotel, RAI of beurs. 24/7, geen overstappen. Boek direct via WhatsApp.',
  prijs: '€445',
  vanPrijs: '€560',
  prijsRaw: '445',
  kortingLabel: '20% goedkoper dan metertarief',
  afstand: '~185 km',
  rijdtijd: '±2u00',
  compareRows: [
    ['Prijs vooraf bekend', '✅ Altijd vast', '❌ Dynamisch (surge)'],
    ['Beschikbaar 24/7', '✅ Altijd', '⚠️ Wisselend'],
    ['Vaste prijs hele rit', '✅ Geen verrassingen', '❌ Meter loopt door'],
    ['Lange afstand', '✅ Dagelijks', '❌ Zelden beschikbaar'],
    ['Chauffeur annuleert niet', '✅ Nooit', '⚠️ Komt voor'],
    ['Waterstof (0 CO₂)', '✅ Hyundai Nexo', '❌ Benzine/diesel'],
    ['Ruime kofferbak bagage', '✅ XL kofferbak', '⚠️ Afhankelijk auto'],
  ],
  body: [
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi van Groningen naar Amsterdam</h2>
    <p>Naar de hoofdstad voor een afspraak, een concert, de trein naar het buitenland of een dagje uit? Taxi Amro rijdt u rechtstreeks van uw voordeur in Groningen naar elk adres in Amsterdam voor een vaste prijs van <strong>€445</strong>. Geen overstappen, geen koffers slepen, geen zoektocht naar parkeerplek.</p>
    <p style="margin-top:0.75rem;">We rijden via de A7 en A6/A1 en doen er doorgaans ±2 uur over. De prijs staat vooraf vast, ook bij drukte op de snelweg.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Naar uw hotel, de RAI of een beurs</h2>
    <p>Parkeren in Amsterdam is duur en schaars. Wij zetten u af voor de deur van uw hotel, de RAI, een congres of de beurs, en halen u op dezelfde manier weer op. Ideaal voor zakelijke reizigers die op tijd en uitgerust willen aankomen. Factuur op verzoek.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Taxi vs. trein naar Amsterdam</h2>
    <p>De trein naar Amsterdam duurt ruim 2 uur en zit vaak vol, met overstappen en koffers sjouwen. Met 2 tot 4 personen reist u met een vaste taxiprijs comfortabeler en vaak voordeliger, van deur tot deur, op uw eigen tijd, zonder vertraging of uitval.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi van Groningen naar Amsterdam?', a: 'Vaste prijs €445 all-in. Geen toeslagen voor bagage, avond/nacht of weekend. Het metertarief zou ±€560 zijn, u bespaart 20%.' },
    { q: 'Hoe lang duurt de rit van Groningen naar Amsterdam?', a: 'Gemiddeld ±2 uur via de A7 en A6/A1, afhankelijk van het verkeer rond de stad.' },
    { q: 'Brengen jullie mij tot het exacte adres?', a: 'Ja, van deur tot deur, uw hotel, een beurs, de RAI of een privéadres in Amsterdam.' },
    { q: 'Kan ik een factuur krijgen voor zakelijk vervoer?', a: 'Zeker. Geef bij het boeken aan dat u een factuur wilt, dan regelen wij dat.' },
    { q: 'Rijden jullie ook \'s avonds en in het weekend?', a: 'Ja, 24/7 zonder toeslag. Ook na een concert of late afspraak brengen wij u terug naar Groningen.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-schiphol', label: 'Groningen → Schiphol' },
    { slug: '/taxi-groningen-zwolle', label: 'Groningen → Zwolle' },
    { slug: '/taxi-groningen-leeuwarden', label: 'Groningen → Leeuwarden' },
  ],
}

export default function GronAmsterdam() {
  return <RoutePage route={route} />
}
