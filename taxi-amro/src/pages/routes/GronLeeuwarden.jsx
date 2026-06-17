import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-leeuwarden',
  van: 'Groningen',
  naar: 'Leeuwarden',
  icon: '🏛️',
  heroBg: 'bg-gradient-to-br from-purple-50 via-white to-amber-50',
  orb1: 'bg-purple-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi Groningen → Leeuwarden',
  intro: 'Comfortabel van Groningen naar de Friese hoofdstad. Vaste prijs €156 all-in — 24/7, ook bij vroege vergaderingen.',
  seoTitle: 'Taxi Groningen Leeuwarden | Vaste Prijs €156 | Taxi Amro',
  seoDesc: 'Taxi van Groningen naar Leeuwarden voor €156 vaste prijs. 24/7 beschikbaar, geen toeslagen. Zakelijk, luchthaven Eelde of privé. Boek via WhatsApp.',
  prijs: '€156',
  vanPrijs: '€195',
  prijsRaw: '156',
  kortingLabel: '20% goedkoper dan metertarief',
  afstand: '~60 km',
  rijdtijd: '±45 min',
  body: [
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi van Groningen naar Leeuwarden</h2>
    <p>Leeuwarden, de hoofdstad van Friesland, ligt op zo'n 60 kilometer van Groningen — een rit van ±45 minuten via de N355 of A7. Taxi Amro rijdt deze route dagelijks voor <strong>€156 vaste prijs</strong>. Of u nu een zakelijke vergadering heeft, familie bezoekt of naar een evenement gaat: wij zorgen dat u er op tijd bent.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Populaire redenen voor de rit</h2>
    <p>Klanten boeken de rit Groningen–Leeuwarden voor:</p>
    <ul style="list-style-type:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li><strong>Zakelijke afspraken</strong> bij provincie Friesland, WTC Leeuwarden of andere kantoren</li>
      <li><strong>Elfstedentocht-gerelateerde evenementen</strong> en winterfestivals</li>
      <li><strong>Ziekenhuisbezoek</strong> MCL Leeuwarden</li>
      <li><strong>Familiebezoek</strong> zonder zelf te hoeven rijden</li>
    </ul>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Taxi of trein naar Leeuwarden?</h2>
    <p>De trein van Groningen naar Leeuwarden rijdt frequent (ca. 45 min, €12–18 p.p.). Met 2+ personen is de taxi vergelijkbaar van prijs, maar veel comfortabeler: deur-tot-deur, geen incheckstress, ruimte voor bagage. Uber en Bolt rijden zelden buiten de stad naar Friesland — en zeker niet 's nachts of vroeg in de ochtend.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi van Groningen naar Leeuwarden?', a: 'Vaste prijs €156 all-in. Het officiële metertarief zou €195 zijn — u bespaart 20%.' },
    { q: 'Hoe lang duurt de rit naar Leeuwarden?', a: 'Gemiddeld ±45 minuten via de N355 of A7, afhankelijk van uw exacte bestemming in de stad.' },
    { q: 'Rijden jullie ook terug van Leeuwarden?', a: 'Ja, dezelfde vaste prijs van €156. U kunt een retourrit plannen of bellen als u klaar bent.' },
    { q: 'Zijn er toeslagen voor vroege ritten?', a: 'Nee. €156 is altijd de prijs, ook om 05:00 voor een vroege vergadering.' },
    { q: 'Wat als ik naar het MCL ziekenhuis moet?', a: 'We brengen u tot aan de deur van het MCL. Wilt u ook worden opgehaald na uw afspraak? Plan dan een retourrit.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-schiphol', label: 'Groningen → Schiphol' },
    { slug: '/taxi-groningen-assen', label: 'Groningen → Assen' },
    { slug: '/taxi-groningen-eemshaven', label: 'Groningen → Eemshaven' },
  ],
}

export default function GronLeeuwarden() {
  return <RoutePage route={route} />
}
