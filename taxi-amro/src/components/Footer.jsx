import { Link } from 'react-router-dom'

const serviceLinks = [
  { label: 'Vliegveld Transfer', href: '#services' },
  { label: 'Zakelijk Vervoer', href: '#services' },
  { label: 'Eemshaven Vervoer', href: '#services' },
  { label: 'Groepsvervoer (8 pax)', href: '#services' },
  { label: 'Stads Taxi Groningen', href: '#services' },
  { label: 'Grensoverschrijdend (DE)', href: '#services' },
]

const populaireRitten = [
  { label: 'Taxi → Schiphol',     href: '/tarieven#schiphol'   },
  { label: 'Taxi → Eemshaven',    href: '/tarieven#eemshaven'  },
  { label: 'Taxi → Airport Eelde',href: '/tarieven#eelde'      },
  { label: 'Taxi → Leeuwarden',   href: '/tarieven#leeuwarden' },
  { label: 'Taxi → Bremen Airport',href: '/tarieven#bremen'    },
  { label: 'Stadsrit Groningen',  href: '/tarieven#stad'       },
]

const regionLinks = [
  'Groningen', 'Assen', 'Leeuwarden', 'Drachten',
  'Heerenveen', 'Emmen', 'Eemshaven', 'Emden (DE)',
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand + NAP */}
          <div className="lg:col-span-1">
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Betrouwbare taxiservice in Groningen, Friesland en Drenthe. 24/7 beschikbaar voor vliegveld, Eemshaven en zakelijk vervoer.
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+31633721505" className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-2 transition-colors">
                  <span>📞</span> +31 6 33721505
                </a>
              </li>
              <li>
                <a href="mailto:taxiamro@outlook.com" className="text-gray-400 hover:text-amber-300 flex items-center gap-2 transition-colors">
                  <span>✉️</span> taxiamro@outlook.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/31633721505" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-green-400 flex items-center gap-2 transition-colors">
                  <span>💬</span> WhatsApp
                </a>
              </li>
              <li className="text-gray-500 flex items-center gap-2">
                <span>📍</span> Groningen, Nederland
              </li>
            </ul>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigatie</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Home</a></li>
              <li><Link to="/tarieven" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Tarieven</Link></li>
              <li><a href="/#services" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Diensten</a></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Blog</Link></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Populaire ritten */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Populaire ritten</h4>
            <ul className="space-y-2">
              {populaireRitten.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Werkgebied */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Werkgebied</h4>
            <ul className="space-y-2">
              {regionLinks.map((r) => (
                <li key={r} className="text-gray-400 text-sm flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-amber-400 rounded-full" />
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-gray-800 rounded-xl border border-gray-700">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-semibold">24/7 bereikbaar</span>
              </div>
              <a href="tel:+31633721505" className="text-amber-400 font-bold text-sm hover:text-amber-300 transition-colors">
                +31 6 33721505
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-xs text-center sm:text-left space-y-1">
              <p>© {new Date().getFullYear()} Taxi Amro. Alle rechten voorbehouden.</p>
              <p>KvK: 87581868 &nbsp;|&nbsp; BTW: NL004440433B79</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <a href="/privacybeleid.pdf" target="_blank" rel="noopener noreferrer"
                 className="text-gray-500 hover:text-amber-400 transition-colors underline underline-offset-2">
                Privacybeleid
              </a>
              <a href="/algemene-voorwaarden.pdf" target="_blank" rel="noopener noreferrer"
                 className="text-gray-500 hover:text-amber-400 transition-colors underline underline-offset-2">
                Algemene Voorwaarden
              </a>
              <span className="text-gray-600">|</span>
              <span className="text-gray-500">Taxi Amro · Groningen · taxiamro@outlook.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
