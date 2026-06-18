import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-assen',
  van: 'Groningen',
  naar: 'Assen',
  icon: '🏙️',
  heroBg: 'bg-gradient-to-br from-green-50 via-white to-amber-50',
  orb1: 'bg-green-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi Groningen → Assen',
  intro: 'Snel en comfortabel van Groningen naar Assen. Vaste prijs €84, geen parkeergedoe, geen omwegen.',
  seoTitle: 'Taxi Groningen Assen | Vaste Prijs €84 | Direct & Betrouwbaar',
  seoDesc: 'Taxi van Groningen naar Assen voor €84 vaste prijs. 24/7 beschikbaar, geen toeslagen. Ideaal voor zakelijke ritten, avondjes uit en ziekenhuisbezoek. Boek via WhatsApp.',
  prijs: '€84',
  vanPrijs: '€99',
  prijsRaw: '84',
  kortingLabel: '15% goedkoper dan metertarief',
  afstand: '~30 km',
  rijdtijd: '±25 min',
  body: [
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi van Groningen naar Assen</h2>
    <p>De afstand tussen Groningen en Assen is slechts 30 kilometer via de A28, maar niet iedereen wil rijden of heeft een auto. Taxi Amro brengt u comfortabel en op tijd voor <strong>€84 vaste prijs</strong>. Ideaal voor zakelijke afspraken, ziekenhuisbezoek, avondjes uit of ritten naar de TT Circuit.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Populaire ritten naar Assen</h2>
    <p>Onze klanten boeken de rit Groningen, Assen voor uiteenlopende doeleinden:</p>
    <ul style="list-style-type:disc;padding-left:1.5rem;margin-top:0.5rem;space-y:0.25rem;">
      <li><strong>TT Circuit Assen</strong>, MotoGP, DTM en andere evenementen. Geen parkeerprobleem, geen busje.</li>
      <li><strong>UMCG Assen</strong>, ziekenhuisafspraken waarbij u niet zelf wilt rijden.</li>
      <li><strong>Zakelijke afspraken</strong>, de provincie Drenthe heeft haar hoofdstad in Assen.</li>
      <li><strong>Avonduitjes</strong>, festival, restaurant, theater. Veilig heen en terug.</li>
    </ul>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Taxi of trein naar Assen?</h2>
    <p>De trein van Groningen naar Assen rijdt frequent en kost ca. €7 tot €10. Maar de taxi wint op comfort en flexibiliteit: deur-tot-deur, geen overstap, geen incheckstress bij avondritten. Met 2 tot 4 personen is de prijs per persoon vergelijkbaar of lager dan de trein.</p>
    <p style="margin-top:0.75rem;">Uber en Bolt zijn in Groningen actief maar rijden zelden naar Assen. Bij hoge vraag (evenementen) loopt de surge price fors op. Taxi Amro rekent altijd <strong>€84 vast</strong>.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi van Groningen naar Assen?', a: 'Vaste prijs €84 all-in. Het officiële metertarief zou €99 zijn, u bespaart 15%.' },
    { q: 'Hoe lang duurt de rit van Groningen naar Assen?', a: 'Gemiddeld ±25 minuten via de A28. Bij evenementen (TT) kan het iets langer duren.' },
    { q: 'Rijden jullie ook terug van Assen naar Groningen?', a: 'Ja, dezelfde prijs van €84. U kunt een retourrit plannen of ons bellen als u klaar bent.' },
    { q: 'Zijn er toeslagen voor avond- of nachtritten?', a: 'Nee. €84 is de vaste prijs, ook laat op de avond of vroeg in de ochtend.' },
    { q: 'Kunnen jullie mij ophalen bij de TT Circuit?', a: 'Ja. We rijden regelmatig naar en van het TT Circuit bij evenementen. Boek van tevoren, want tijdens groot evenement is de vraag hoog.' },
    { q: 'Wat als ik een retourrit wil dezelfde dag?', a: 'Dat plannen we graag. Geef de ophaaltijden door bij het boeken, dan regelen we beide ritten.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-schiphol', label: 'Groningen → Schiphol' },
    { slug: '/taxi-groningen-leeuwarden', label: 'Groningen → Leeuwarden' },
    { slug: '/taxi-groningen-eemshaven', label: 'Groningen → Eemshaven' },
  ],
}

export default function GronAssen() {
  return <RoutePage route={route} />
}
