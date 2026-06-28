import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home',      href: '/' },
  { label: 'Tarieven',  href: '/tarieven' },
  { label: 'Diensten',  href: '/diensten' },
  { label: 'FAQ',       href: '/faq' },
  { label: 'Blog',      href: '/blog' },
  { label: 'Reviews',   href: '/reviews' },
  { label: 'Contact',   href: '/contact' },
]

const populaireRitten = [
  { label: '✈️  Taxi → Schiphol',          href: '/taxi-groningen-schiphol',           prijs: '€491' },
  { label: '✈️  Taxi → Eindhoven Airport', href: '/taxi-groningen-eindhoven-airport',  prijs: '€645' },
  { label: '✈️  Taxi → Düsseldorf Airport', href: '/taxi-groningen-dusseldorf-airport', prijs: '€693' },
  { label: '✈️  Taxi → Bremen Airport',    href: '/taxi-groningen-bremen-airport',     prijs: '€455' },
  { label: '🏙️  Taxi → Amsterdam',         href: '/taxi-groningen-amsterdam',          prijs: '€445' },
  { label: '🛫  Taxi → Airport Eelde',     href: '/taxi-groningen-eelde-airport',      prijs: '€42'  },
  { label: '⚓  Taxi → Eemshaven',         href: '/taxi-groningen-eemshaven',          prijs: '€98'  },
  { label: '🏛️  Taxi → Leeuwarden',        href: '/taxi-groningen-leeuwarden',         prijs: '€156' },
  { label: '🗺️  Taxi → Assen',             href: '/taxi-groningen-assen',              prijs: '€84'  },
]

const regionLinks = [
  { label: 'Groningen', href: '/' },
  { label: 'Assen', href: '/taxi-groningen-assen' },
  { label: 'Leeuwarden', href: '/taxi-groningen-leeuwarden' },
  { label: 'Drachten', href: '/taxi-groningen-drachten' },
  { label: 'Heerenveen', href: '/taxi-groningen-heerenveen' },
  { label: 'Emmen', href: '/taxi-groningen-emmen' },
  { label: 'Winschoten', href: '/taxi-groningen-winschoten' },
  { label: 'Delfzijl', href: '/taxi-groningen-delfzijl' },
]

const blogCategories = [
  { label: '✈️ Luchthaven blogs', href: '/blog/luchthaven' },
  { label: '💼 Zakelijk vervoer', href: '/blog/zakelijk' },
  { label: '🎉 Evenementen',      href: '/blog/evenementen' },
  { label: '📰 Alle blogs',       href: '/blog' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">

      {/* Top trust bar */}
      <div className="border-b border-gray-800 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4 text-xs text-gray-400">
            <div className="flex flex-wrap justify-center gap-6">
              <span className="flex items-center gap-1.5"><span className="text-amber-400">★★★★★</span> 4.9/5 beoordelingen</span>
              <span className="flex items-center gap-1.5"><span className="text-green-400">●</span> Waterstoftaxi, 0 CO₂</span>
              <span className="flex items-center gap-1.5"><span className="text-blue-400">✓</span> Vaste prijs, nooit meer</span>
              <span className="flex items-center gap-1.5"><span className="text-amber-400">⏱</span> 24/7 beschikbaar</span>
            </div>
            <a href="tel:+31633721505" className="text-amber-400 font-bold hover:text-amber-300 transition-colors whitespace-nowrap">
              📞 +31 6 33721505
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand column, wider */}
          <div className="lg:col-span-2">
            {/* Logo text mark */}
            <div className="mb-5">
              <div className="inline-flex flex-col">
                <span className="text-3xl font-black text-white tracking-tight leading-none">Taxi</span>
                <span className="text-3xl font-black text-amber-400 tracking-tight leading-none">Amro</span>
              </div>
              <p className="text-gray-500 text-xs mt-1 font-medium tracking-widest uppercase">Noord-Nederland</p>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
              Betrouwbare taxiservice in Groningen, Friesland en Drenthe. Vaste prijzen, waterstoftaxi, 24/7 beschikbaar voor vliegveld, Eemshaven en zakelijk vervoer.
            </p>

            {/* Contact blok */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 space-y-2.5">
              <a href="tel:+31633721505"
                className="flex items-center gap-3 group">
                <span className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center text-sm group-hover:bg-amber-400/20 transition-colors">📞</span>
                <span className="text-amber-400 font-bold text-sm group-hover:text-amber-300 transition-colors">+31 6 33721505</span>
              </a>
              <a href="https://wa.me/31633721505" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 group">
                <span className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center text-sm group-hover:bg-green-500/20 transition-colors">💬</span>
                <span className="text-gray-300 text-sm group-hover:text-green-400 transition-colors">WhatsApp, direct antwoord</span>
              </a>
              <a href="mailto:taxiamro@outlook.com"
                className="flex items-center gap-3 group">
                <span className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-sm group-hover:bg-gray-600 transition-colors">✉️</span>
                <span className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">taxiamro@outlook.com</span>
              </a>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-sm">📍</span>
                <span className="text-gray-500 text-sm">Groningen, Nederland</span>
              </div>
            </div>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Navigatie</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-200 text-amber-400 text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-bold mt-6 mb-3 text-xs uppercase tracking-widest">Blogs</h4>
            <ul className="space-y-2">
              {blogCategories.map(b => (
                <li key={b.href}>
                  <Link to={b.href} className="text-gray-400 hover:text-amber-400 transition-colors text-sm">{b.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Populaire ritten */}
          <div>
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Populaire ritten</h4>
            <ul className="space-y-2.5">
              {populaireRitten.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}
                    className="flex items-center justify-between text-gray-400 hover:text-amber-400 transition-colors text-sm group">
                    <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
                    <span className="text-xs text-gray-600 group-hover:text-amber-500 font-mono ml-2 whitespace-nowrap">{link.prijs}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Werkgebied */}
          <div>
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Werkgebied</h4>
            <ul className="space-y-2">
              {regionLinks.map((r) => (
                <li key={r.label} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                  <Link to={r.href} className="text-gray-400 hover:text-amber-400 transition-colors text-sm">{r.label}</Link>
                </li>
              ))}
            </ul>

            {/* Live bereikbaar badge */}
            <div className="mt-5 p-3.5 bg-gray-900 rounded-2xl border border-gray-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 text-xs font-semibold">Nu bereikbaar</span>
                </div>
                <a href="tel:+31633721505" className="text-amber-400 font-black text-base hover:text-amber-300 transition-colors block leading-tight">
                  +31 6 33721505
                </a>
                <p className="text-gray-600 text-xs mt-1">24 uur, 7 dagen per week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-gray-600 text-xs text-center sm:text-left">
              <p>© {new Date().getFullYear()} Taxi Amro · Alle rechten voorbehouden.</p>
              <p className="mt-0.5">KvK: 87581868 &nbsp;|&nbsp; BTW: NL004440433B79</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <a href="/privacybeleid.pdf" target="_blank" rel="noopener noreferrer"
                className="text-gray-600 hover:text-amber-400 transition-colors">
                Privacybeleid
              </a>
              <a href="/algemene-voorwaarden.pdf" target="_blank" rel="noopener noreferrer"
                className="text-gray-600 hover:text-amber-400 transition-colors">
                Algemene Voorwaarden
              </a>
              <span className="text-gray-700">|</span>
              <Link to="/reviews" className="text-gray-600 hover:text-amber-400 transition-colors">
                ★ Reviews
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
