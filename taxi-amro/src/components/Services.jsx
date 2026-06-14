import { useScrollTilt } from '../hooks/useScrollTilt'

const services = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 52, height: 52 }}>
        <circle cx="32" cy="32" r="28" fill="#3b82f6" opacity="0.1" />
        <path d="M12 38 L24 24 L40 24 L52 38" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M8 38h48" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M18 38V44M46 38V44" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 24V16l8-4 8 4v8" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="32" cy="12" r="2" fill="#3b82f6" />
      </svg>
    ),
    image: '/schiphol.png',
    imageAlt: 'Amsterdam Airport Schiphol vliegveld transfer',
    title: 'Vliegveld Transfer',
    desc: 'Stipt & stressvrij naar elk vliegveld.',
    features: ['Vluchtvolging', 'Ruime bagageruimte', 'Vaste prijs'],
    accent: '#3b82f6',
    glow: 'rgba(59,130,246,0.15)',
    border: 'rgba(59,130,246,0.18)',
    bg: 'linear-gradient(145deg, #eff6ff 0%, #ffffff 60%, #f0f9ff 100%)',
    tag: null,
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 52, height: 52 }}>
        <circle cx="32" cy="32" r="28" fill="#f59e0b" opacity="0.1" />
        <rect x="12" y="22" width="40" height="26" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2.5" />
        <path d="M12 30h40" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="22" cy="38" r="3.5" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5" />
        <circle cx="42" cy="38" r="3.5" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5" />
        <path d="M28 38h8" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 22v-5M42 22v-5" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 14l2 3h-4l2-3z" fill="#f59e0b" />
      </svg>
    ),
    image: '/zakelijk.png',
    imageAlt: 'Zakelijk vervoer chauffeur luxe auto',
    title: 'Zakelijk Vervoer',
    desc: 'Luxe SUV voor elke zakelijke afspraak.',
    features: ['Hyundai Nexo', 'WiFi aan boord', 'Factuur mogelijk'],
    accent: '#f59e0b',
    glow: 'rgba(245,158,11,0.18)',
    border: 'rgba(245,158,11,0.25)',
    bg: 'linear-gradient(145deg, #fffbeb 0%, #ffffff 60%, #fef9ee 100%)',
    tag: 'Populair',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 52, height: 52 }}>
        <circle cx="32" cy="32" r="28" fill="#10b981" opacity="0.1" />
        <path d="M10 36L20 26H44L54 36" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 36h48v6a2 2 0 01-2 2H10a2 2 0 01-2-2v-6z" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
        <circle cx="20" cy="47" r="5" fill="#a7f3d0" stroke="#10b981" strokeWidth="2" />
        <circle cx="44" cy="47" r="5" fill="#a7f3d0" stroke="#10b981" strokeWidth="2" />
        <rect x="28" y="26" width="8" height="8" rx="1" fill="#6ee7b7" stroke="#10b981" strokeWidth="1.5" />
        <path d="M32 18v5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="16" r="2" fill="#10b981" />
      </svg>
    ),
    image: '/groningen.png',
    imageAlt: 'Groningen stad centrum met Martinitoren',
    title: 'Stads Taxi',
    desc: 'Direct door Groningen, altijd op tijd.',
    features: ['Direct beschikbaar', 'Transparante prijs', 'Alle locaties'],
    accent: '#10b981',
    glow: 'rgba(16,185,129,0.15)',
    border: 'rgba(16,185,129,0.18)',
    bg: 'linear-gradient(145deg, #ecfdf5 0%, #ffffff 60%, #f0fdf4 100%)',
    tag: null,
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 52, height: 52 }}>
        <circle cx="32" cy="32" r="28" fill="#0ea5e9" opacity="0.1" />
        <path d="M14 36h36M14 36l4-10h28l4 10" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M14 36v6M50 36v6" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 26v-8a2 2 0 012-2h20a2 2 0 012 2v8" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="22" cy="44" r="4" fill="#bae6fd" stroke="#0ea5e9" strokeWidth="1.5" />
        <circle cx="42" cy="44" r="4" fill="#bae6fd" stroke="#0ea5e9" strokeWidth="1.5" />
        <path d="M28 26h8M26 30h12" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    image: '/eemshaven.png',
    imageAlt: 'Beatrixhaven Eemshaven',
    title: 'Eemshaven Vervoer',
    desc: 'Voor havenarbeiders, cruisegasten & zeelieden.',
    features: ['24/7 beschikbaar', 'Vaste prijs', 'Cruise terminal'],
    accent: '#0ea5e9',
    glow: 'rgba(14,165,233,0.15)',
    border: 'rgba(14,165,233,0.18)',
    bg: 'linear-gradient(145deg, #f0f9ff 0%, #ffffff 60%, #e0f2fe 100%)',
    tag: null,
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 52, height: 52 }}>
        <circle cx="32" cy="32" r="28" fill="#8b5cf6" opacity="0.1" />
        <path d="M8 40h48M8 40l5-14h38l5 14" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M8 40v6M56 40v6" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="48" r="4" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="1.5" />
        <circle cx="48" cy="48" r="4" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="1.5" />
        <path d="M13 26h38v-4a2 2 0 00-2-2H15a2 2 0 00-2 2v4z" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5" />
        <path d="M20 26v-6M28 26v-6M36 26v-6M44 26v-6" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    image: '/groepsvervoer.png',
    imageAlt: 'Mercedes groepsvervoer bus',
    title: 'Groepsvervoer',
    desc: 'Comfortabele bus voor groepen tot 8 personen.',
    features: ['Tot 8 passagiers', 'Evenementen & uitjes', 'Vaste groepsprijs'],
    accent: '#8b5cf6',
    glow: 'rgba(139,92,246,0.15)',
    border: 'rgba(139,92,246,0.18)',
    bg: 'linear-gradient(145deg, #f5f3ff 0%, #ffffff 60%, #faf5ff 100%)',
    tag: 'Nieuw',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 52, height: 52 }}>
        <circle cx="32" cy="32" r="28" fill="#ef4444" opacity="0.1" />
        <path d="M32 14l3 8h8l-6.5 5 2.5 8L32 30l-7 5 2.5-8L22 22h8l2-8z" fill="#fecaca" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round" />
        <path d="M20 44h24M22 48h20" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="50" r="2" fill="#ef4444" />
        <circle cx="44" cy="50" r="2" fill="#ef4444" />
      </svg>
    ),
    image: '/duitsland.png',
    imageAlt: 'Grens Bundesrepublik Deutschland grensoverschrijdend vervoer',
    title: 'Grensoverschrijdend',
    desc: 'Naar Emden, Leer, Bremen & Düsseldorf.',
    features: ['Emden & Leer (DE)', 'Bremen Airport', 'Vaste grensrit prijs'],
    accent: '#ef4444',
    glow: 'rgba(239,68,68,0.15)',
    border: 'rgba(239,68,68,0.18)',
    bg: 'linear-gradient(145deg, #fef2f2 0%, #ffffff 60%, #fff5f5 100%)',
    tag: null,
  },
]

function ServiceCard({ service, index }) {
  const { ref: cardRef, tilt, hovered, onMouseMove, onMouseEnter, onMouseLeave } = useScrollTilt(10)

  return (
    <div
      ref={cardRef}
      data-reveal
      className={`fade-up stagger-${index + 1}`}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ perspective: 900 }}
    >
      <div style={{
        background: service.bg,
        border: `1.5px solid ${hovered ? service.accent : service.border}`,
        borderRadius: 24,
        overflow: 'hidden',
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovered
          ? 'transform 0.06s ease, box-shadow 0.3s, border-color 0.3s'
          : 'transform 0.55s ease, box-shadow 0.3s, border-color 0.3s',
        boxShadow: hovered
          ? `0 28px 60px ${service.glow}, 0 8px 24px rgba(0,0,0,0.07)`
          : '0 4px 16px rgba(0,0,0,0.05)',
        transformStyle: 'preserve-3d',
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Photo */}
        <div style={{ position: 'relative', height: 180, flexShrink: 0 }}>
          <img
            src={service.image}
            alt={service.imageAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: hovered ? 'brightness(1.05)' : 'brightness(0.95)',
              transition: 'filter 0.35s ease',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(to bottom, transparent 40%, ${service.accent}30 100%)`,
          }} />
          {/* Popular badge */}
          {service.tag && (
            <div style={{
              position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)',
              background: `linear-gradient(135deg, ${service.accent}, #fb923c)`,
              color: '#fff', fontSize: 10, fontWeight: 800,
              padding: '4px 14px', borderRadius: 999, textTransform: 'uppercase', letterSpacing: 1,
              boxShadow: `0 4px 14px ${service.glow}`,
              whiteSpace: 'nowrap',
            }}>
              ★ {service.tag}
            </div>
          )}
        </div>

        {/* Card body */}
        <div style={{ padding: '20px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* Background glow */}
        <div style={{
          position: 'absolute', top: 10, left: 16,
          width: 80, height: 80, borderRadius: '50%',
          background: `radial-gradient(circle, ${service.glow} 0%, transparent 70%)`,
          filter: 'blur(16px)',
          opacity: hovered ? 1.2 : 0.6,
          transition: 'opacity 0.3s',
          pointerEvents: 'none',
        }} />

        {/* Icon with 3D lift */}
        <div style={{
          transform: `translateZ(${hovered ? 18 : 0}px) scale(${hovered ? 1.05 : 1})`,
          transition: 'transform 0.35s ease',
          marginBottom: 18,
          display: 'inline-block',
          position: 'relative',
        }}>
          {service.icon}
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: 19, fontWeight: 700, color: '#111827', marginBottom: 6,
          transform: `translateZ(${hovered ? 8 : 0}px)`,
          transition: 'transform 0.35s ease',
        }}>
          {service.title}
        </h3>

        {/* Desc */}
        <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6, marginBottom: 18 }}>
          {service.desc}
        </p>

        {/* Divider line */}
        <div style={{
          height: 1.5, borderRadius: 2, marginBottom: 14,
          background: `linear-gradient(to right, ${service.accent}40, transparent)`,
        }} />

        {/* Features */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
          {service.features.map((f) => (
            <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, color: '#374151', fontWeight: 500 }}>
              <span style={{
                width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                background: service.accent + '18',
                border: `1px solid ${service.accent}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1.5 5l2.5 2.5 4.5-5" stroke={service.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`https://wa.me/31633721505?text=Hallo, ik wil graag ${service.title} boeken.`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: 22,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            padding: '11px 0', borderRadius: 14,
            background: hovered ? service.accent : 'transparent',
            border: `1.5px solid ${service.accent}`,
            color: hovered ? '#fff' : service.accent,
            fontSize: 13, fontWeight: 700,
            transition: 'all 0.25s ease',
            textDecoration: 'none',
            letterSpacing: 0.3,
          }}
        >
          Boek direct
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </a>
        </div>{/* end card body */}
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-amber-700 text-xs font-bold uppercase tracking-widest">Onze Diensten</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Taxi op maat
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Van vliegveld tot Eemshaven, van stadsrit tot grensoverschrijdend vervoer. Stil, snel en betrouwbaar.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
