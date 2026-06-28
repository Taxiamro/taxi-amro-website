import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const linkClass = 'text-gray-600 hover:text-amber-600 transition-colors text-sm font-medium'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [logoHovered, setLogoHovered] = useState(false)
  const logoRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLogoMove = (e) => {
    const rect = logoRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    setTilt({
      x: ((e.clientY - cy) / (rect.height / 2)) * -12,
      y: ((e.clientX - cx) / (rect.width / 2)) * 12,
    })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md border-b border-gray-100' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            ref={logoRef}
            onMouseMove={handleLogoMove}
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => { setLogoHovered(false); setTilt({ x: 0, y: 0 }) }}
            style={{ perspective: 400, display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
          >
            <img src="/taxi-amro-logo.png" alt="Taxi Amro" style={{
              height: 46, width: 'auto', display: 'block',
              transform: `rotateX(${tilt.x * 0.5}deg) rotateY(${tilt.y * 0.5}deg) translateZ(${logoHovered ? 6 : 0}px)`,
              transition: logoHovered ? 'transform 0.06s ease' : 'transform 0.5s ease',
            }} />
          </Link>

          {/* Desktop nav: Home | Tarieven | Diensten | Blog | Contact */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/"          className={linkClass}>Home</Link>
            <Link to="/tarieven"  className={linkClass}>Tarieven</Link>
            <Link to="/diensten"  className={linkClass}>Diensten</Link>
            <Link to="/faq"       className={linkClass}>FAQ</Link>
            <Link to="/reviews"   className={linkClass}>Reviews</Link>
            <Link to="/blog"      className={linkClass}>Blog</Link>
            <Link to="/contact"   className={linkClass}>Contact</Link>
          </div>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+31633721505"
               className="flex items-center gap-1.5 text-gray-700 hover:text-amber-600 transition-colors font-semibold text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +31 6 33721505
            </a>
            <Link to="/boeken"
               className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold px-5 py-2 rounded-lg text-sm transition-colors shadow-sm">
              Boek nu
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <a href="tel:+31633721505" className="flex items-center gap-1 text-amber-600 font-bold text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel nu
            </a>
            <button className="text-gray-700 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`h-0.5 bg-gray-700 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 bg-gray-700 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 bg-gray-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 shadow-lg">
          <Link to="/"         onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Home</Link>
          <Link to="/tarieven" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Tarieven</Link>
          <Link to="/diensten" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Diensten</Link>
          <Link to="/faq" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">FAQ</Link>
          <Link to="/reviews"  onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Reviews</Link>
          <Link to="/blog"     onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Blog</Link>
          <Link to="/contact"  onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Contact</Link>
          <Link to="/boeken" onClick={() => setMenuOpen(false)} className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-4 py-2.5 rounded-xl text-center">Boek nu</Link>
          <a href="tel:+31633721505"
             className="flex items-center gap-2 text-amber-600 font-bold text-base border border-amber-200 bg-amber-50 rounded-lg px-4 py-2.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +31 6 33721505
          </a>
        </div>
      )}
    </nav>
  )
}
