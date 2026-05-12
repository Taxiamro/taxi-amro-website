import { useRef, useState } from 'react'

const rates = [
  {
    label: 'Starttarief',
    value: '€ 4,15',
    desc: 'Per rit',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <circle cx="12" cy="12" r="10" stroke="#f59e0b" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Per kilometer',
    value: '€ 3,05',
    desc: 'Per km',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <path d="M3 12h18M3 12l4-4m-4 4l4 4" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="19" cy="12" r="2" fill="#f59e0b"/>
      </svg>
    ),
  },
  {
    label: 'Per minuut',
    value: '€ 0,50',
    desc: 'Wachttijd',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" stroke="#f59e0b" strokeWidth="2"/>
        <path d="M12 7v5l3 3" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Wachttarief',
    value: '€ 57,20',
    desc: 'Per uur',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <rect x="3" y="6" width="18" height="13" rx="2" stroke="#f59e0b" strokeWidth="2"/>
        <path d="M8 6V4m8 2V4" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Reinigingskosten',
    value: '€ 300+',
    desc: 'Bij bevuiling',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <path d="M12 2C8 2 5 6 5 10c0 5 7 12 7 12s7-7 7-12c0-4-3-8-7-8z" stroke="#f59e0b" strokeWidth="2"/>
        <circle cx="12" cy="10" r="2.5" fill="#f59e0b"/>
      </svg>
    ),
  },
]

const infoCards = []

function PriceCard({ rate, index }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2)
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2)
    setTilt({ x: dy * -8, y: dx * 8 })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }) }}
      style={{
        transform: hovered
          ? `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
          : 'perspective(600px) rotateX(0deg) rotateY(0deg)',
        transition: hovered ? 'transform 0.08s ease-out' : 'transform 0.4s ease',
        animationDelay: `${index * 0.07}s`,
      }}
      className="relative bg-gray-900 rounded-2xl p-5 flex items-center justify-between group cursor-default"
    >
      {/* glow */}
      <div
        style={{ opacity: hovered ? 0.15 : 0 }}
        className="absolute inset-0 rounded-2xl bg-yellow-400 transition-opacity duration-300 pointer-events-none"
      />
      <div className="flex items-center gap-4 z-10">
        <div
          style={{ transform: hovered ? 'translateZ(12px) scale(1.15)' : 'none', transition: 'transform 0.25s' }}
          className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0"
        >
          {rate.icon}
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{rate.label}</div>
          <div className="text-gray-500 text-xs">{rate.desc}</div>
        </div>
      </div>
      <div className="text-yellow-400 font-bold text-lg z-10 ml-4 whitespace-nowrap">{rate.value}</div>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/40">
      <style>{`
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-10px) rotate(-3deg); }
        }
        @keyframes orbPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 0.8; }
        }
        .orb-1 { animation: orbPulse 4s ease-in-out infinite; }
        .orb-2 { animation: orbPulse 5.5s ease-in-out infinite 1s; }
        .float-badge { animation: floatBadge 3.5s ease-in-out infinite; }
      `}</style>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-amber-500 font-semibold text-xs uppercase tracking-widest">Tarieven</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-3">
            Duidelijke tarieven
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Transparant en conform officiële taxitarieven.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Rate cards */}
          <div className="relative">
            {/* decorative orbs */}
            <div className="orb-1 absolute -top-8 -left-8 w-40 h-40 rounded-full bg-yellow-300/20 blur-3xl pointer-events-none" />
            <div className="orb-2 absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-amber-400/20 blur-2xl pointer-events-none" />

            {/* header chip */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-2 bg-gray-900 rounded-xl px-4 py-2">
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="#fbbf24" strokeWidth="2"/>
                  <path d="M8 21h8M12 17v4" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-white font-bold text-sm">Metertarief</span>
              </div>
              <div className="float-badge bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                Officieel
              </div>
            </div>

            <div className="space-y-3">
              {rates.map((rate, i) => (
                <PriceCard key={rate.label} rate={rate} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
