import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

const TEL = '+31633721505'

const faqs = [
  { q: 'Hoe boek ik een taxi bij Taxi Amro?', a: 'Boek direct online via onze boekingspagina, of bel of app naar +31 6 33721505. Je krijgt vooraf een vaste prijs en een bevestiging per e-mail. Ook last minute kun je bij ons terecht.' },
  { q: 'Wat kost een taxi bij Taxi Amro?', a: 'Je betaalt altijd een vaste prijs vooraf, gebaseerd op het officiele metertarief met afstandskorting tot 25% op lange ritten. Bereken je ritprijs op de homepage of bekijk alle vaste prijzen op de tarievenpagina.' },
  { q: 'Zijn jullie 24/7 beschikbaar?', a: 'Ja, 24 uur per dag en 7 dagen per week, ook in het weekend en op feestdagen. Er is geen nacht- of weekendtoeslag, de prijs blijft altijd hetzelfde.' },
  { q: 'Rijden jullie naar Schiphol en andere luchthavens?', a: 'Ja. Wij rijden naar Schiphol, Eindhoven, Düsseldorf en Bremen Airport, en naar Groningen Airport Eelde. Vaste prijs, en bij terugkomst volgen we je vlucht live zodat we op tijd klaarstaan, ook bij vertraging.' },
  { q: 'Hoeveel personen kunnen mee?', a: 'Onze taxi vervoert tot 4 personen. Voor grotere groepen hebben we een taxibusje tot 8 personen. Je kiest je voertuig tijdens het boeken.' },
  { q: 'Bieden jullie korting op een retourrit?', a: 'Ja, op een retourrit krijg je 10% korting. Vink retour aan bij het boeken en geef je gewenste ophaaltijd voor de terugrit door.' },
  { q: 'Kan ik zakelijk rijden en een factuur krijgen?', a: 'Zeker. Vink bij het boeken zakelijk of factuur aan, dan ontvang je een nette factuur. Handig voor bedrijven en declaraties.' },
  { q: 'Hoe ver van tevoren moet ik boeken?', a: 'Een stadsrit kun je vaak dezelfde dag boeken. Voor luchthavenritten raden we minimaal 24 uur vooruit aan. Heb je haast? Bel ons, dan kijken we wat mogelijk is.' },
  { q: 'Wat gebeurt er als mijn vlucht vertraagd is?', a: 'Geen zorgen. Geef je vluchtnummer door, dan volgen we je aankomst live en passen we de ophaaltijd kosteloos aan. De eerste 60 minuten wachten zijn gratis.' },
  { q: 'Hoe kan ik betalen?', a: 'Je kunt contant betalen, met pin of via een betaalverzoek (Tikkie). Zakelijke klanten kunnen op factuur betalen.' },
  { q: 'Rijden jullie ook buiten Groningen en naar Duitsland?', a: 'Ja. We rijden door heel Noord-Nederland (Groningen, Friesland, Drenthe) en over de grens naar onder andere Bremen, Leer en Düsseldorf. Vraag gerust een vaste prijs aan.' },
  { q: 'Is jullie taxi milieuvriendelijk?', a: 'Ja, we rijden in een Hyundai Nexo op waterstof, met nul CO2-uitstoot onderweg. Comfortabel en duurzaam, een bewuste keuze voor het milieu.' },
  { q: 'Halen jullie me op na een evenement of festival?', a: 'Ja, ook laat in de nacht. Voor bijvoorbeeld de TT Assen, een concert of een avond uit spreken we een ophaalplek en tijd af, zodat je veilig en samen thuiskomt. Geen surge pricing.' },
  { q: 'Waarom Taxi Amro in plaats van Uber of Bolt?', a: 'Bij ons weet je de prijs vooraf, zonder surge pricing. We rijden ook lange afstanden en vroege ochtendritten waar apps vaak afhaken, en je chauffeur annuleert niet.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors" onClick={() => setOpen(!open)}>
        <span className="font-semibold text-gray-900 text-sm pr-4">{q}</span>
        <span className={`text-amber-500 text-xl transition-transform flex-shrink-0 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3 bg-gray-50">{a}</div>}
    </div>
  )
}

export default function FaqPage() {
  return (
    <>
      <Seo
        title="Veelgestelde vragen | Taxi Amro Groningen"
        description="Antwoorden op veelgestelde vragen over Taxi Amro: vaste prijs, boeken, luchthavenvervoer, retour, betalen en 24/7 beschikbaarheid in Groningen, Friesland en Drenthe."
        canonical="/faq"
        schema={schema}
      />
      <div className="min-h-screen bg-white">
        <Navbar />
        <section className="relative pt-28 pb-10 bg-gradient-to-br from-amber-50 via-white to-blue-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> Veelgestelde vragen
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Veelgestelde vragen</h1>
            <p className="text-gray-500 text-base max-w-xl mx-auto">Alles over boeken, vaste prijzen, luchthavenvervoer en meer bij Taxi Amro.</p>
          </div>
        </section>

        <section className="py-12 max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-3">
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </section>

        <section className="bg-gray-900 py-14">
          <div className="max-w-xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Staat je vraag er niet bij?</h2>
            <p className="text-gray-400 text-sm mb-6">We helpen je graag, 24/7 bereikbaar.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/boeken" className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-7 py-3 rounded-xl text-sm transition-all hover:scale-105">📅 Boek nu</Link>
              <a href={`tel:${TEL}`} className="border border-gray-600 hover:border-amber-400 text-gray-300 hover:text-amber-400 font-semibold px-7 py-3 rounded-xl text-sm transition-all">📞 +31 6 33721505</a>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}
