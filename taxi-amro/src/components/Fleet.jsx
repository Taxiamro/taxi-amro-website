import { useState, useRef } from 'react'

const specs = [
  { label: 'Type', value: 'Hyundai Nexo', icon: '🚗' },
  { label: 'Aandrijving', value: 'Waterstof (FCEV)', icon: '💧' },
  { label: 'Emissies', value: '0 g CO₂/km', icon: '🌿' },
  { label: 'Actieradius', value: '~666 km', icon: '📍' },
  { label: 'Passagiers', value: 'Tot 4 — of bus (8 pax)', icon: '👥' },
  { label: 'Kofferbak', value: 'Ruime bagageruimte', icon: '🧳' },
]

const gallery = [
  { src: '/nexo-exterior.webp', label: 'Exterieur' },
  { src: '/nexo-interior.webp', label: 'Interieur' },
  { src: '/nexo-dashboard.webp', label: 'Dashboard' },
  { src: '/nexo-engine.webp', label: 'Waterstofmotor' },
]

function use3DTilt() {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const onMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setTilt({ x: dy * -8, y: dx * 8 })
  }
  const onMouseEnter = () => setHovered(true)
  const onMouseLeave = () => { setTilt({ x: 0, y: 0 }); setHovered(false) }

  return { ref, tilt, hovered, onMouseMove, onMouseEnter, onMouseLeave }
}

function SpecCard({ spec }) {
  const { ref, tilt, hovered, onMouseMove, onMouseEnter, onMouseLeave } = use3DTilt()

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ perspective: 600 }}
    >
      <div style={{
        background: hovered
          ? 'linear-gradient(135deg, #fffbeb 0%, #ffffff 100%)'
          : '#f9fafb',
        border: hovered ? '1.5px solid #fbbf24' : '1.5px solid #f3f4f6',
        borderRadius: 16,
        padding: '14px 10px',
        textAlign: 'center',
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${hovered ? 8 : 0}px)`,
        transition: hovered
          ? 'transform 0.06s ease, box-shadow 0.3s, border-color 0.3s, background 0.3s'
          : 'transform 0.5s ease, box-shadow 0.3s, border-color 0.3s, background 0.3s',
        boxShadow: hovered
          ? '0 12px 32px rgba(245,158,11,0.15), 0 4px 12px rgba(0,0,0,0.06)'
          : '0 1px 4px rgba(0,0,0,0.04)',
        transformStyle: 'preserve-3d',
        cursor: 'default',
      }}>
        <div style={{ fontSize: 20, marginBottom: 4 }}>{spec.icon}</div>
        <div style={{ color: '#6b7280', fontSize: 11, marginBottom: 3, fontWeight: 500 }}>{spec.label}</div>
        <div style={{
          color: '#111827',
          fontWeight: 700,
          fontSize: 13,
          transform: `translateZ(${hovered ? 6 : 0}px)`,
          transition: 'transform 0.3s ease',
        }}>{spec.value}</div>
      </div>
    </div>
  )
}

export default function Fleet() {
  const [active, setActive] = useState(0)
  const { ref, tilt, hovered, onMouseMove, onMouseEnter, onMouseLeave } = use3DTilt()

  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* Decorative 3D blobs */}
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(251,191,36,0.07) 0%, transparent 70%)',
        top: '10%', right: '-10%', pointerEvents: 'none',
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute', width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)',
        bottom: '5%', left: '-5%', pointerEvents: 'none',
        filter: 'blur(40px)',
      }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative' }}>
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">
            Onze vloot
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Rijden in de toekomst
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Wij rijden uitsluitend in de Hyundai Nexo — de meest geavanceerde waterstof-SUV ter wereld.
          </p>
        </div>

        <div className="max-w-2xl mx-auto w-full">
          {/* 3D Main image card */}
          <div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ perspective: 1000, marginBottom: 12 }}
          >
            <div style={{
              borderRadius: 20,
              overflow: 'hidden',
              background: '#111827',
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: hovered
                ? 'transform 0.06s ease, box-shadow 0.3s'
                : 'transform 0.55s ease, box-shadow 0.3s',
              boxShadow: hovered
                ? '0 40px 80px rgba(0,0,0,0.25), 0 12px 32px rgba(251,191,36,0.12)'
                : '0 8px 32px rgba(0,0,0,0.18)',
              transformStyle: 'preserve-3d',
              position: 'relative',
            }}>
              {gallery.map((item, i) => (
                <img
                  key={item.src}
                  src={item.src}
                  alt={item.label}
                  className="w-full object-cover transition-all duration-500"
                  style={{
                    height: 320,
                    display: i === active ? 'block' : 'none',
                    objectPosition: item.src.includes('interior') ? 'center center' : 'center 35%',
                    transform: hovered ? 'scale(1.03)' : 'scale(1)',
                    transition: 'transform 0.5s ease',
                  }}
                />
              ))}

              {/* Shine overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: hovered
                  ? `radial-gradient(ellipse at ${50 + tilt.y * 3}% ${50 + tilt.x * 3}%, rgba(255,255,255,0.08) 0%, transparent 60%)`
                  : 'none',
                pointerEvents: 'none',
                transition: 'background 0.1s',
              }} />

              {/* Bottom overlay */}
              <div className="absolute bottom-0 inset-x-0 px-5 py-4"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-sm"
                    style={{
                      transform: `translateZ(${hovered ? 14 : 0}px)`,
                      transition: 'transform 0.35s ease',
                    }}>
                    {gallery[active].label}
                  </span>
                  <div className="flex items-center gap-1.5 bg-green-500/20 border border-green-500/40 rounded-full px-3 py-1"
                    style={{
                      transform: `translateZ(${hovered ? 14 : 0}px)`,
                      transition: 'transform 0.35s ease',
                    }}>
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    <span className="text-green-400 text-xs font-medium">Zero Emissie</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail row */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {gallery.map((item, i) => (
              <button key={item.src} onClick={() => setActive(i)}
                className="relative rounded-xl overflow-hidden transition-all"
                style={{
                  outline: i === active ? '2px solid #eab308' : '2px solid transparent',
                  outlineOffset: 2,
                  opacity: i === active ? 1 : 0.6,
                  transform: i === active ? 'translateY(-2px) scale(1.02)' : 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: i === active ? '0 4px 12px rgba(234,179,8,0.3)' : 'none',
                }}>
                <img src={item.src} alt={item.label} className="w-full object-cover"
                  style={{ height: 60, objectPosition: 'center' }} />
                <div className="absolute inset-x-0 bottom-0 px-1.5 py-1"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                  <span className="text-white text-[10px] font-medium">{item.label}</span>
                </div>
              </button>
            ))}
          </div>

          {/* 3D Spec grid */}
          <div className="grid grid-cols-3 gap-3">
            {specs.map((spec) => (
              <SpecCard key={spec.label} spec={spec} />
            ))}
          </div>

          {/* Bus banner */}
          <a
            href="https://wa.me/31633721505?text=Hallo, ik wil graag een bus boeken voor 8 personen."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginTop: 16,
              padding: '16px 20px',
              borderRadius: 16,
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              border: '1.5px solid rgba(251,191,36,0.3)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
              textDecoration: 'none',
              transition: 'box-shadow 0.3s, transform 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(251,191,36,0.2), 0 4px 16px rgba(0,0,0,0.15)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)'
              e.currentTarget.style.transform = 'none'
            }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: 12, flexShrink: 0,
              background: 'rgba(251,191,36,0.15)',
              border: '1px solid rgba(251,191,36,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 22,
            }}>
              🚌
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: '#fbbf24', fontWeight: 700, fontSize: 14, marginBottom: 2 }}>
                Groepsvervoer beschikbaar
              </div>
              <div style={{ color: '#94a3b8', fontSize: 12 }}>
                Ruime bus voor tot <strong style={{ color: '#e2e8f0' }}>8 passagiers</strong> — ideaal voor groepen & uitstapjes
              </div>
            </div>
            <div style={{ color: '#fbbf24', fontSize: 20 }}>→</div>
          </a>
        </div>
      </div>
    </section>
  )
}
