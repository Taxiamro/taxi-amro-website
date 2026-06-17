import BlogCategory from './BlogCategory'

const category = {
  path: '/blog/luchthaven',
  label: 'Luchthaven vervoer',
  icon: '✈️',
  heroBg: 'bg-gradient-to-br from-blue-50 via-white to-amber-50',
  h1: 'Taxi naar de luchthaven vanuit Groningen',
  intro: 'Alles over luchthaventransfers: Schiphol, Eelde, Eindhoven, Bremen. Vaste prijzen, vluchttracering, 24/7 beschikbaar.',
  seoTitle: 'Taxi Luchthaven Groningen | Schiphol, Eelde, Bremen | Taxi Amro',
  seoDesc: 'Artikelen over taxi naar de luchthaven vanuit Groningen. Schiphol €491, Eelde €42, Bremen €455. Vaste prijs, 24/7. Lees onze blogs voor tips en prijzen.',
  title: 'Luchthaven taxi Groningen',
  description: 'Blogs over luchthaventransfers vanuit Groningen naar Schiphol, Eelde, Eindhoven en Bremen.',
  slugs: [
    'taxi-groningen-schiphol-prijs-2026',
    'taxi-eelde-airport-vroege-ochtendvlucht',
    'taxi-emden-leer-duitsland-grensoverschrijdend',
    'taxi-leeuwarden-schiphol-prijs',
    'bremen-airport-vs-schiphol-noord-nederland',
  ],
}

export default function Luchthaven() {
  return <BlogCategory category={category} />
}
