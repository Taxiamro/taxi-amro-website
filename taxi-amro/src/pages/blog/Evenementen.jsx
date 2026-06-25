import BlogCategory from './BlogCategory'

const category = {
  path: '/blog/evenementen',
  label: 'Evenementen',
  icon: '🎉',
  heroBg: 'bg-gradient-to-br from-purple-50 via-white to-amber-50',
  h1: 'Taxi naar evenementen in Groningen en Noord-Nederland',
  intro: 'Festivals, concerten, bruiloften, TT Circuit, Eurosonic, Koningsdag, wij brengen u veilig heen en terug.',
  seoTitle: 'Taxi Evenementen Groningen | Festival, Concert, TT | Taxi Amro',
  seoDesc: 'Taxi naar festivals, concerten en evenementen vanuit Groningen. TT Assen, Eurosonic, Ahoy. Vaste prijs, geen surge pricing. Lees onze event-blogs.',
  title: 'Taxi naar evenementen Groningen',
  description: 'Blogs over taxi vervoer naar festivals, concerten, bruiloften en evenementen vanuit Groningen.',
  slugs: [
    'taxi-tt-assen-2026-vervoer',
    'taxi-bruiloft-feest-evenement-vervoer',
    'taxi-concert-ahoy-ziggo-dome-festival',
    'eurosonic-noorderslag-festival-groningen-vervoer',
    'koningsdag-groningen-vervoer-feestvieren',
    'studententaxi-groningen-nachtleven-veilig',
    'oudjaarsavond-carbid-vervoer-veilig-thuis',
    'kerstmis-sinterklaas-familie-vervoer',
  ],
}

export default function Evenementen() {
  return <BlogCategory category={category} />
}
