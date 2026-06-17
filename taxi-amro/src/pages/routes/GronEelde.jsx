import RoutePage from '../RoutePage'

const route = {
  slug: '/taxi-groningen-eelde-airport',
  van: 'Groningen',
  naar: 'Airport Eelde',
  icon: '🛫',
  heroBg: 'bg-gradient-to-br from-sky-50 via-white to-amber-50',
  orb1: 'bg-sky-400',
  orb2: 'bg-amber-300',
  h1: 'Taxi Groningen → Groningen Airport Eelde',
  intro: 'Snel en stressvrij naar GRQ voor een vaste prijs van €42. Vakantievlucht of zakelijk — wij staan op tijd voor uw deur, ook vroeg in de ochtend.',
  seoTitle: 'Taxi Groningen Airport Eelde (GRQ) | Vaste Prijs €42 | Taxi Amro',
  seoDesc: 'Taxi van Groningen naar Groningen Airport Eelde (GRQ) voor €42 vaste prijs. Ideaal voor vakantievluchten met Corendon of TUI. 24/7, vroege ochtend. Boek via WhatsApp.',
  prijs: '€42',
  prijsRaw: '42',
  kortingLabel: 'Vaste prijs — geen starttarief',
  afstand: '~12 km',
  rijdtijd: '±20 min',
  body: [
    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Taxi naar Groningen Airport Eelde (GRQ)</h2>
    <p>Groningen Airport Eelde (GRQ) ligt op slechts ±12 km van Groningen centrum. Of u nu op vakantie gaat of zakelijk vliegt — Taxi Amro brengt u voor een vaste prijs van <strong>€42</strong> snel en stressvrij naar de vertrekhal. Geen parkeerkosten, geen gedoe met de bus.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Vakantievluchten vanaf Eelde — comfortabel naar de zon</h2>
    <p>Vanaf Eelde vertrekken vakantievluchten met onder andere Corendon en TUI naar de Canarische Eilanden, Turkije, Griekenland en Egypte. Met koffers, kinderen en strandspullen is een taxi tot aan de terminal veel makkelijker dan parkeren of overstappen. Wij staan op de afgesproken tijd voor uw deur in Groningen.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Vroege ochtendvlucht? Wij staan klaar</h2>
    <p>Veel vluchten vanaf Eelde vertrekken vroeg. Taxi Amro rijdt 24/7 <strong>zonder nachttoeslag</strong> — ook om 04:00. U hoeft niet te zoeken naar een taxi die zo vroeg beschikbaar is; reserveer vooraf en wij staan op tijd klaar.</p>`,

    `<h2 style="font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;margin-top:1.5rem;">Ophalen na uw vakantie</h2>
    <p>Net geland op Eelde? Geef uw vluchtnummer door, dan volgen we uw aankomst en staan we klaar zodra u de bagageband verlaat. Vaste prijs <strong>€42</strong> voor de rit terug naar Groningen — ook bij vertraging.</p>`,
  ],
  faqs: [
    { q: 'Wat kost een taxi van Groningen naar Airport Eelde?', a: 'Vaste prijs €42 all-in, zonder starttarief of toeslagen.' },
    { q: 'Hoe ver is Groningen Airport Eelde van de stad?', a: '±12 km, ongeveer 20 minuten rijden vanaf Groningen centrum.' },
    { q: 'Rijden jullie ook vroeg in de ochtend?', a: 'Ja. Taxi Amro is 24/7 beschikbaar zonder nachttoeslag — ook voor vroege vakantievluchten om 04:00.' },
    { q: 'Halen jullie mij op na mijn vakantie?', a: 'Ja. Geef uw vluchtnummer door; wij volgen de aankomst en staan klaar zodra u landt, ook bij vertraging.' },
    { q: 'Kan het hele gezin mee?', a: 'Ja, tot 4 personen met een ruime kofferbak voor koffers en strandspullen.' },
    { q: 'Is een taxi goedkoper dan parkeren bij Eelde?', a: 'Bij meerdere dagen parkeren bespaart u al snel, en u reist comfortabel van deur tot deur zonder uw auto achter te laten.' },
  ],
  relatedRoutes: [
    { slug: '/taxi-groningen-schiphol', label: 'Groningen → Schiphol' },
    { slug: '/taxi-groningen-eindhoven-airport', label: 'Groningen → Eindhoven Airport' },
    { slug: '/taxi-groningen-bremen-airport', label: 'Groningen → Bremen Airport' },
  ],
}

export default function GronEelde() {
  return <RoutePage route={route} />
}
