import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-eemshaven',
  van: 'Groningen',
  naar: 'Eemshaven',
  icon: '⚓',
  heroBg: 'bg-gradient-to-br from-teal-50 via-white to-amber-50',
  orb1: 'bg-teal-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi Groningen → Eemshaven',
  intro: 'Op tijd bij de veerboot naar Borkum of Eemshaven terminal. Vaste prijs €98, 24/7 beschikbaar.',
  seoTitle: 'Taxi Groningen Eemshaven | Vaste Prijs €98 | Veerboot Borkum',
  seoDesc: 'Taxi van Groningen naar Eemshaven voor €98 vaste prijs. Ideaal voor veerboot Borkum, cruise of zakelijk. 24/7 beschikbaar. Boek direct via WhatsApp.',
  prijs: '€98',
  vanPrijs: '€115',
  prijsRaw: '98',
  kortingLabel: '15% goedkoper dan metertarief',
  afstand: '~35 km',
  rijdtijd: '±30 min',
  body: [
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi van Groningen naar Eemshaven</h2>
    <p>Eemshaven is de grootste haven van Noord-Nederland en het vertrekpunt voor de veerboot naar het Duitse eiland Borkum. Taxi Amro rijdt dagelijks van Groningen naar Eemshaven voor <strong>€98 vaste prijs</strong>. We vertrekken op tijd zodat u de boot nooit mist, ook vroeg in de ochtend.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Veerboot naar Borkum, taxi tot aan de terminal</h2>
    <p>De AG EMS veerboot vertrekt meerdere keren per dag vanuit Eemshaven naar Borkum. De overtocht duurt ±2,5 uur. Wij brengen u met koffers en al rechtstreeks naar de veerterminal. Geen parkeerkosten (Eemshaven parkeren kan €8 tot €12/dag kosten per week dat is al snel €60+), geen rij bij de bus.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Zakelijk vervoer naar Eemshaven industrieterrein</h2>
    <p>Eemshaven heeft een groot industriegebied met datacenters (Google, Microsoft), energiecentrales en scheepvaartbedrijven. Veel zakelijke klanten laten zich door ons vervoeren voor early morning meetings of late avond afspraken. De prijs is altijd <strong>€98 vast</strong>.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi van Groningen naar Eemshaven?', a: 'Vaste prijs €98 all-in. Het officiële metertarief zou €115 zijn, u bespaart 15%.' },
    { q: 'Hoe laat vertrekt de veerboot naar Borkum?', a: 'De AG EMS veerboot heeft meerdere afvaarten per dag. Controleer de actuele tijden op ag-ems.com. Wij passen de ophaaltijd aan op uw vertrekttijd.' },
    { q: 'Rijden jullie ook terug van Eemshaven?', a: 'Ja. Geef uw aankomsttijd van de veerboot door, wij zijn er op tijd. €98 vaste prijs voor de terugrit.' },
    { q: 'Kunnen jullie mij ook ophalen na terugkomst van Borkum?', a: 'Absoluut. Geef uw aankomsttijd van de veerboot door bij het boeken, dan staan wij klaar.' },
    { q: 'Is er openbaar vervoer naar Eemshaven?', a: 'Er rijdt een bus (lijn 65), maar die stopt vroeg en is niet direct. Voor vroege vertrekken of met bagage is de taxi comfortabeler en sneller.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-schiphol', label: 'Groningen → Schiphol' },
    { slug: '/taxi-groningen-assen', label: 'Groningen → Assen' },
    { slug: '/taxi-groningen-leeuwarden', label: 'Groningen → Leeuwarden' },
  ],
}

export default function GronEemshaven() {
  return <RoutePage route={route} />
}
