import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { useScrollTilt } from '../hooks/useScrollTilt'

const contactItems = [
  { icon: '📞', label: 'Bel ons', value: '+31 6 33721505', sub: 'Direct verbonden', href: 'tel:+31633721505', accent: '#f59e0b', bg: 'linear-gradient(135deg,#fffbeb,#fff)', border: 'rgba(245,158,11,0.25)', glow: 'rgba(245,158,11,0.15)' },
  { icon: '💬', label: 'WhatsApp', value: 'Stuur een bericht', sub: 'Reactie binnen minuten', href: 'https://wa.me/31633721505', accent: '#22c55e', bg: 'linear-gradient(135deg,#f0fdf4,#fff)', border: 'rgba(34,197,94,0.25)', glow: 'rgba(34,197,94,0.15)', external: true },
  { icon: '✉️', label: 'E-mail', value: 'taxiamro@outlook.com', sub: 'Reactie binnen 24 uur', href: 'mailto:taxiamro@outlook.com', accent: '#3b82f6', bg: 'linear-gradient(135deg,#eff6ff,#fff)', border: 'rgba(59,130,246,0.25)', glow: 'rgba(59,130,246,0.15)' },
]

const infoItems = [
  { icon: '🕐', title: '24/7 bereikbaar', text: 'Dag en nacht, ook op zon- en feestdagen.' },
  { icon: '📍', title: 'Groningen', text: 'Werkgebied: Groningen, Friesland & Drenthe.' },
  { icon: '⚡', title: 'Snel antwoord', text: 'WhatsApp reactie gemiddeld binnen 5 minuten.' },
  { icon: '💳', title: 'Betaling', text: 'Pin, contant of op rekening (zakelijk).' },
]

function ContactCard({ item }) {
  const { ref, tilt, hovered, onMouseMove, onMouseEnter, onMouseLeave } = useScrollTilt(10)
  return (
    <a
      ref={ref}
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noopener noreferrer' : undefined}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ perspective: 800, display: 'block' }}
    >
      <div style={{
        background: hovered ? item.bg : '#fafafa',
        border: `1.5px solid ${hovered ? item.border : '#f3f4f6'}`,
        borderRadius: 20,
        padding: '20px 24px',
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${hovered ? 10 : 0}px)`,
        transition: hovered ? 'transform 0.08s ease, box-shadow 0.2s, background 0.2s' : 'transform 0.5s ease, box-shadow 0.3s, background 0.3s',
        boxShadow: hovered ? `0 20px 48px ${item.glow}, 0 4px 12px rgba(0,0,0,0.06)` : '0 2px 8px rgba(0,0,0,0.04)',
        willChange: 'transform',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      }}>
        <div style={{
          width: 52, height: 52, borderRadius: 14,
          background: hovered ? item.bg : '#f3f4f6',
          border: `1.5px solid ${hovered ? item.border : 'transparent'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 24, flexShrink: 0,
          transition: 'all 0.3s ease',
        }}>
          {item.icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-gray-400 text-xs mb-0.5">{item.label}</p>
          <p className="font-bold text-gray-900 text-base truncate" style={{ color: hovered ? item.accent : '#111827', transition: 'color 0.2s' }}>
            {item.value}
          </p>
          <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
        </div>
        <svg className="w-5 h-5 text-gray-300 flex-shrink-0" style={{ color: hovered ? item.accent : undefined, transition: 'color 0.2s, transform 0.2s', transform: hovered ? 'translateX(3px)' : '' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  )
}

export default function ContactPage() {
  useScrollRevealAll()

  return (
    <>
      <Seo
        title="Contact Taxi Amro | Bel of WhatsApp 24/7 | Groningen"
        description="Neem contact op met Taxi Amro. Bel of WhatsApp +31 6 33721505 voor een taxi in Groningen. Binnen 5 minuten reactie. 24/7 beschikbaar."
        canonical="/contact"
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-1/3 w-72 h-72 bg-emerald-200 rounded-full opacity-20 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-blue-200 rounded-full opacity-20 blur-3xl" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link to="/" className="inline-flex items-center gap-1.5 text-gray-400 hover:text-amber-600 text-sm mb-6 transition-colors">
              ← Terug naar home
            </Link>
            <div data-reveal className="fade-in">
              <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                24/7 bereikbaar
              </span>
            </div>
            <h1 data-reveal className="fade-up stagger-1 text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Direct in contact
            </h1>
            <p data-reveal className="fade-up stagger-2 text-lg text-gray-500 max-w-lg mx-auto">
              Bel, app of mail ons. Wij reageren snel en helpen je graag verder.
            </p>
          </div>
        </section>

        {/* Contact cards */}
        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 mb-12">
              {contactItems.map((item, i) => (
                <div key={item.label} data-reveal className={`fade-up stagger-${i + 1}`}>
                  <ContactCard item={item} />
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div data-reveal className="fade-up stagger-4">
              <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-md" style={{ height: 320 }}>
                <iframe
                  title="Taxi Amro Groningen"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37925.34890916774!2d6.522273636669637!3d53.21917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c83282ddf14e87%3A0x200827462e40e3ca!2sGroningen!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
                  width="100%" height="320"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              {/* Map footer */}
              <div className="mt-3 flex items-center justify-between px-1">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse inline-block" />
                  <span>Taxi Amro, actief in heel Groningen</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Groningen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-600 font-semibold hover:underline"
                >
                  Openen in Maps →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Info cards */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-reveal className="fade-up text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Handige informatie</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 items-stretch">
              {infoItems.map((item, i) => (
                <div key={item.title} data-reveal className={`fade-up stagger-${i + 1} flex`}>
                  <div className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-amber-300 hover:shadow-md transition-all w-full min-h-[96px]">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm mb-0.5">{item.title}</p>
                      <p className="text-gray-500 text-sm leading-snug">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-gray-900">
          <div data-reveal className="fade-up max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Rit boeken?</h2>
            <p className="text-gray-400 mb-8">Stuur een WhatsApp. Wij bevestigen snel met een vaste prijs.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/31633721505" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-7 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-amber-900/30 text-sm">
                💬 WhatsApp sturen
              </a>
              <Link to="/tarieven"
                 className="inline-flex items-center gap-2 border border-gray-600 hover:border-amber-400 text-gray-300 hover:text-amber-400 font-semibold px-7 py-3.5 rounded-xl transition-all text-sm">
                Bekijk tarieven →
              </Link>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}
