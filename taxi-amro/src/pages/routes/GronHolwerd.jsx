import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-holwerd',
  van: 'Groningen',
  naar: 'Holwerd',
  icon: '⛴️',
  heroBg: 'bg-gradient-to-br from-cyan-50 via-white to-amber-50',
  orb1: 'bg-cyan-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi Groningen → Holwerd (veerboot Ameland)',
  intro: 'Op tijd bij de veerboot naar Ameland. Vaste prijs €145, ook bij vroege afvaarten, 24/7 beschikbaar.',
  seoTitle: 'Taxi Groningen Holwerd | Veerboot Ameland | Vaste Prijs €145',
  seoDesc: 'Taxi van Groningen naar Holwerd voor €145 vaste prijs. Op tijd bij de veerboot naar Ameland, geen parkeerkosten. 24/7 beschikbaar. Boek via WhatsApp.',
  prijs: '€145',
  vanPrijs: '€180',
  prijsRaw: '145',
  kortingLabel: '19% goedkoper dan metertarief',
  afstand: '~55 km',
  rijdtijd: '±50 min',
  compareRows: [
    ['Prijs vooraf bekend', '✅ Altijd vast', '❌ Dynamisch (surge)'],
    ['Op tijd voor de afvaart', '✅ Gegarandeerd', '⚠️ Onzeker'],
    ['Vroege ochtendboot', '✅ Altijd', '⚠️ Wisselend'],
    ['Ophalen bij terugkomst', '✅ Afgestemd op aankomst', '❌ Niet'],
    ['Ruimte voor bagage', '✅ XL kofferbak', '⚠️ Afhankelijk auto'],
    ['Geen parkeerkosten haven', '✅ Bespaart €8–12/dag', '—'],
    ['Waterstof (0 CO₂)', '✅ Hyundai Nexo', '❌ Benzine/diesel'],
  ],
  body: [
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi van Groningen naar Holwerd</h2>
    <p>Vanuit Holwerd vertrekt de veerboot van Wagenborg naar Ameland. Taxi Amro brengt u voor een vaste prijs van <strong>€145</strong> op tijd naar de veerterminal — ook bij een vroege afvaart. We rijden via de N355/N357 en houden rekening met uw boottijd zodat u niets mist.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Geen parkeerkosten, geen gedoe</h2>
    <p>Wie met de eigen auto gaat, betaalt al snel €8–12 per dag parkeren bij Holwerd — bij een weekje weg loopt dat flink op. Wij zetten u met koffers en al af bij de terminal, zodat u zorgeloos op de boot stapt.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Ophalen bij terugkomst van Ameland</h2>
    <p>Geef uw aankomsttijd van de veerboot door, dan staan wij klaar zodra u weer in Holwerd aankomt. Vaste prijs €145 voor de terugrit naar Groningen — ook \'s avonds of in het weekend.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi van Groningen naar Holwerd?', a: 'Vaste prijs €145 all-in. Het metertarief zou ±€180 zijn — u bespaart 19%.' },
    { q: 'Halen jullie de veerboot naar Ameland op tijd?', a: 'Ja. Geef uw boottijd door; wij vertrekken ruim op tijd zodat u de afvaart nooit mist.' },
    { q: 'Hoe laat vertrekt de veerboot naar Ameland?', a: 'Wagenborg (wpd.nl) heeft meerdere afvaarten per dag. Wij stemmen de ophaaltijd af op uw boot.' },
    { q: 'Halen jullie mij ook op als ik terugkom?', a: 'Ja. Geef uw aankomsttijd door, dan staan wij klaar in Holwerd voor de terugrit.' },
    { q: 'Is dit goedkoper dan parkeren bij de haven?', a: 'Bij meerdere dagen parkeren bespaart u al snel, en u hoeft de auto niet achter te laten.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-lauwersoog', label: 'Groningen → Lauwersoog' },
    { slug: '/taxi-groningen-eemshaven', label: 'Groningen → Eemshaven' },
    { slug: '/taxi-groningen-leeuwarden', label: 'Groningen → Leeuwarden' },
  ],
}

export default function GronHolwerd() {
  return <RoutePage route={route} />
}
