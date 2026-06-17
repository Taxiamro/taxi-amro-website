import BlogCategory from './BlogCategory'

const category = {
  path: '/blog/zakelijk',
  label: 'Zakelijk vervoer',
  icon: '💼',
  heroBg: 'bg-gradient-to-br from-gray-50 via-white to-amber-50',
  h1: 'Zakelijk taxivervoer in Noord-Nederland',
  intro: 'Informatie voor zakelijke reizigers: contracten, facturen, betrouwbare chauffeur, op tijd bij klanten en vergaderingen.',
  seoTitle: 'Zakelijk Taxivervoer Groningen | MKB, Zakenreizen | Taxi Amro',
  seoDesc: 'Zakelijk vervoer met Taxi Amro Groningen. Maandfactuur, vast contract, altijd op tijd. Lees onze blogs over zakelijk taxivervoer in Noord-Nederland.',
  title: 'Zakelijk taxivervoer Groningen',
  description: 'Blogs over zakelijk vervoer, MKB-contracten en zakenreizen met Taxi Amro in Noord-Nederland.',
  slugs: [
    'zakelijk-vervoer-mkb-bedrijven-groningen',
    'taxi-hotel-zakenreizigers-groningen',
    'taxichauffeur-groningen',
    'verschil-straattaxi-vooraf-geboekte-taxi',
    'betrouwbare-taxi-kiezen-5-tips',
    'taxi-senioren-ouderen-comfortabel-vervoer',
    'ziekenhuisvervoer-umcg-groningen',
  ],
}

export default function Zakelijk() {
  return <BlogCategory category={category} />
}
