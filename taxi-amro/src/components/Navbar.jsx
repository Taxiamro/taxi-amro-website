import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const homeLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Diensten', href: '#services' },
  { label: 'Tarieven', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ blogMode = false }) {
  const navigate = useNavigate()
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md border-b border-gray-100' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href={blogMode ? '/' : '#home'}
            ref={logoRef}
            onMouseMove={handleLogoMove}
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => { setLogoHovered(false); setTilt({ x: 0, y: 0 }) }}
            style={{
              perspective: 400,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              textDecoration: 'none',
            }}
          >
            <span style={{
              fontWeight: 800,
              fontSize: 20,
              letterSpacing: '-0.3px',
              background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 60%, #1d4ed8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transform: `rotateX(${tilt.x * 0.5}deg) rotateY(${tilt.y * 0.5}deg) translateZ(${logoHovered ? 6 : 0}px)`,
              transition: logoHovered ? 'transform 0.06s ease' : 'transform 0.5s ease',
              textShadow: 'none',
              display: 'block',
            }}>
              Taxi Amro
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {homeLinks.map((link) => (
              blogMode ? (
                <a
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={(e) => { e.preventDefault(); navigate('/'); setTimeout(() => { const el = document.querySelector(link.href); if (el) el.scrollIntoView({ behavior: 'smooth' }) }, 100) }}
                  className="text-gray-600 hover:text-amber-600 transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-amber-600 transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              )
            ))}
            <Link
              to="/blog"
              className="text-gray-600 hover:text-amber-600 transition-colors text-sm font-medium"
            >
              Blog
            </Link>
          </div>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+31633721505"
              className="flex items-center gap-1.5 text-gray-700 hover:text-amber-600 transition-colors font-semibold text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +31 6 33721505
            </a>
            <a
              href="https://wa.me/31633721505"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold px-5 py-2 rounded-lg text-sm transition-colors shadow-sm"
            >
              Boek Nu
            </a>
          </div>

          {/* Mobile: phone + menu button */}
          <div className="md:hidden flex items-center gap-2">
            <a href="tel:+31633721505"
              className="flex items-center gap-1 text-amber-600 font-bold text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel nu
            </a>
            <button
              className="text-gray-700 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
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
          {homeLinks.map((link) => (
            <a
              key={link.href}
              href={blogMode ? `/${link.href}` : link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/blog"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
          >
            Blog
          </Link>
          <a href="tel:+31633721505"
            className="flex items-center gap-2 text-amber-600 font-bold text-base border border-amber-200 bg-amber-50 rounded-lg px-4 py-2.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +31 6 33721505
          </a>
          <a
            href="https://wa.me/31633721505"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 text-gray-900 font-semibold px-5 py-2 rounded-lg text-center"
          >
            Boek Nu via WhatsApp
          </a>
        </div>
      )}
    </nav>
  )
}
