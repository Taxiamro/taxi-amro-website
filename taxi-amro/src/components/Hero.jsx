import { useState, useRef, useEffect } from 'react'

const MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

function initAutocomplete(inputEl) {
  if (!window.google?.maps?.places || !inputEl) return null
  return new window.google.maps.places.Autocomplete(inputEl, {
    types: ['geocode'],
    componentRestrictions: { country: 'nl' },
  })
}

const QUICK_ROUTES = [
  { label: 'Eelde Airport', msg: 'Ik wil graag naar Groningen Airport Eelde.' },
  { label: 'Schiphol', msg: 'Ik wil graag naar Schiphol Amsterdam.' },
  { label: 'Stadsrit Groningen', msg: 'Ik wil graag een stadsrit in Groningen.' },
  { label: 'Zakelijke rit', msg: 'Ik wil graag een zakelijke rit boeken.' },
]

const STATS = [
  { value: '4.7★', label: 'Beoordeling', sub: '29 reviews',  color: '#d97706', glow: 'rgba(245,158,11,0.25)', bg: 'linear-gradient(135deg,#fffbeb,#fef3c7)', border: '#fde68a', icon: '⭐', delay: '0s' },
  { value: '24/7', label: 'Beschikbaar',  sub: 'Dag & nacht', color: '#2563eb', glow: 'rgba(59,130,246,0.2)',  bg: 'linear-gradient(135deg,#eff6ff,#dbeafe)', border: '#bfdbfe', icon: '🕐', delay: '-1.1s' },
  { value: '100%', label: 'Elektrisch',   sub: 'Zero emissie', color: '#059669', glow: 'rgba(16,185,129,0.2)', bg: 'linear-gradient(135deg,#ecfdf5,#d1fae5)', border: '#a7f3d0', icon: '⚡', delay: '-2.2s' },
]

export default function Hero() {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [passengers, setPassengers] = useState(1)
  const pickupRef = useRef(null)
  const destRef = useRef(null)

  useEffect(() => {
    if (!MAPS_KEY) return
    const existing = document.getElementById('gmap-script')
    const setup = () => {
      const acPickup = initAutocomplete(pickupRef.current)
      const acDest = initAutocomplete(destRef.current)
      if (acPickup) acPickup.addListener('place_changed', () => {
        const p = acPickup.getPlace()
        if (p?.formatted_address) setPickup(p.formatted_address)
        else if (p?.name) setPickup(p.name)
      })
      if (acDest) acDest.addListener('place_changed', () => {
        const p = acDest.getPlace()
        if (p?.formatted_address) setDestination(p.formatted_address)
        else if (p?.name) setDestination(p.name)
      })
    }
    if (window.google?.maps?.places) { setup(); return }
    if (!existing) {
      const script = document.createElement('script')
      script.id = 'gmap-script'
      script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}&libraries=places`
      script.async = true
      script.onload = setup
      document.head.appendChild(script)
    } else {
      const check = setInterval(() => {
        if (window.google?.maps?.places) { clearInterval(check); setup() }
      }, 100)
      return () => clearInterval(check)
    }
  }, [])

  const handleBook = (e) => {
    e.preventDefault()
    const pickupVal = pickupRef.current?.value || pickup
    const destVal = destRef.current?.value || destination
    const dateStr = date ? `\nDatum: ${date}` : ''
    const timeStr = time ? `\nTijd: ${time}` : ''
    const msg = encodeURIComponent(
      `Hallo, ik wil graag een taxi boeken.\n\nOphaaladres: ${pickupVal || '–'}\nBestemming: ${destVal || '–'}${dateStr}${timeStr}\nPassagiers: ${passengers}\n\nKan ik een prijs en bevestiging krijgen?`
    )
    window.open(`https://wa.me/31633721505?text=${msg}`, '_blank')
  }

  const handleQuick = (msg) => {
    window.open(`https://wa.me/31633721505?text=${encodeURIComponent('Hallo, ' + msg)}`, '_blank')
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #fffbeb 0%, #ffffff 50%, #ecfdf5 100%)' }}
    >
      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%       { opacity: 0.3; transform: scale(1.6); }
        }
        @keyframes floatImg {
          0%, 100% { transform: perspective(900px) rotateY(-8deg) rotateX(4deg) translateY(0px); }
          50%       { transform: perspective(900px) rotateY(-8deg) rotateX(4deg) translateY(-12px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .car-3d { animation: floatImg 5s ease-in-out infinite; }
        .stat-float { animation: floatCard 3.5s ease-in-out infinite; }
      `}</style>

      {/* background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(253,230,138,0.45) 0%, transparent 70%)', top: '-150px', left: '-150px' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(167,243,208,0.35) 0%, transparent 70%)', bottom: '-100px', right: '-80px' }} />
        <div className="absolute w-[350px] h-[350px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(191,219,254,0.3) 0%, transparent 70%)', top: '35%', right: '5%' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-24 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: 3D Car photo + stats ── */}
          <div className="flex flex-col items-center lg:items-start gap-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-amber-700 text-sm font-semibold">Groningen · 24/7 beschikbaar</span>
            </div>

            {/* 3D Car image card */}
            <div className="relative w-full max-w-lg">
              {/* Glow behind */}
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-40"
                style={{ background: 'linear-gradient(135deg, #fde68a 0%, #a7f3d0 100%)', transform: 'scale(0.95) translateY(12px)' }} />

              {/* Main card */}
              <div
                className="car-3d relative rounded-3xl overflow-hidden shadow-2xl"
                style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.1)' }}
              >
                <img
                  src="/nexo-exterior.webp"
                  alt="TaxiAmro Hyundai Nexo – Groningen"
                  className="w-full h-72 object-cover"
                  style={{ display: 'block' }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-base leading-tight">TaxiAmro Groningen</div>
                      <div className="text-white/70 text-xs mt-0.5">Hyundai Nexo · 100% elektrisch</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat chips — triangle layout */}
              {/* Top-right: ⭐ Beoordeling */}
              <div
                className="stat-float absolute -top-5 -right-5 rounded-2xl px-4 py-3 shadow-lg text-center"
                style={{
                  background: STATS[0].bg, border: `1.5px solid ${STATS[0].border}`,
                  boxShadow: `0 8px 24px ${STATS[0].glow}`, animationDelay: STATS[0].delay, minWidth: 90,
                }}
              >
                <div style={{ position: 'absolute', top: 7, right: 9, width: 6, height: 6, borderRadius: '50%', background: STATS[0].color, opacity: 0.7, animation: 'dotPulse 2s infinite' }} />
                <div style={{ fontSize: 16 }}>{STATS[0].icon}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: STATS[0].color, lineHeight: 1.1 }}>{STATS[0].value}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: 0.6, marginTop: 3 }}>{STATS[0].label}</div>
                <div style={{ fontSize: 9, color: '#9ca3af', marginTop: 1 }}>{STATS[0].sub}</div>
              </div>

              {/* Left-center: 🕐 Beschikbaar */}
              <div
                className="stat-float absolute top-1/2 -translate-y-1/2 -left-7 rounded-2xl px-4 py-3 shadow-lg text-center"
                style={{
                  background: STATS[1].bg, border: `1.5px solid ${STATS[1].border}`,
                  boxShadow: `0 8px 24px ${STATS[1].glow}`, animationDelay: STATS[1].delay, minWidth: 88,
                }}
              >
                <div style={{ position: 'absolute', top: 7, right: 9, width: 6, height: 6, borderRadius: '50%', background: STATS[1].color, opacity: 0.7, animation: 'dotPulse 2s infinite' }} />
                <div style={{ fontSize: 16 }}>{STATS[1].icon}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: STATS[1].color, lineHeight: 1.1 }}>{STATS[1].value}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: 0.6, marginTop: 3 }}>{STATS[1].label}</div>
                <div style={{ fontSize: 9, color: '#9ca3af', marginTop: 1 }}>{STATS[1].sub}</div>
              </div>

              {/* Bottom-right: ⚡ Elektrisch */}
              <div
                className="stat-float absolute -bottom-5 -right-5 rounded-2xl px-4 py-3 shadow-lg text-center"
                style={{
                  background: STATS[2].bg, border: `1.5px solid ${STATS[2].border}`,
                  boxShadow: `0 8px 24px ${STATS[2].glow}`, animationDelay: STATS[2].delay, minWidth: 90,
                }}
              >
                <div style={{ position: 'absolute', top: 7, right: 9, width: 6, height: 6, borderRadius: '50%', background: STATS[2].color, opacity: 0.7, animation: 'dotPulse 2s infinite' }} />
                <div style={{ fontSize: 16 }}>{STATS[2].icon}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: STATS[2].color, lineHeight: 1.1 }}>{STATS[2].value}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: 0.6, marginTop: 3 }}>{STATS[2].label}</div>
                <div style={{ fontSize: 9, color: '#9ca3af', marginTop: 1 }}>{STATS[2].sub}</div>
              </div>
            </div>

            {/* Quick routes */}
            <div className="w-full max-w-lg">
              <div className="text-gray-400 text-xs uppercase tracking-wide mb-2">Snel boeken:</div>
              <div className="flex flex-wrap gap-2">
                {QUICK_ROUTES.map((r) => (
                  <button key={r.label} onClick={() => handleQuick(r.msg)}
                    className="bg-white hover:bg-amber-50 border border-gray-200 hover:border-amber-300 text-gray-600 hover:text-amber-700 text-xs px-3 py-1.5 rounded-full transition-all shadow-sm">
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Booking widget ── */}
          <div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xl shadow-gray-100 text-left">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-gray-900 font-bold text-base leading-none">Rit boeken</h2>
                  <p className="text-gray-400 text-xs mt-0.5">Bevestiging via WhatsApp</p>
                </div>
              </div>

              <form onSubmit={handleBook}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 ring-2 ring-green-200" />
                    </div>
                    <input ref={pickupRef} type="text" defaultValue={pickup} onChange={(e) => setPickup(e.target.value)}
                      placeholder="Ophaaladres"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors text-sm" />
                  </div>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400 ring-2 ring-amber-200" />
                    </div>
                    <input ref={destRef} type="text" defaultValue={destination} onChange={(e) => setDestination(e.target.value)}
                      placeholder="Bestemming"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-2 py-3 text-gray-900 focus:outline-none focus:border-amber-400 transition-colors text-sm" />
                  </div>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-2 py-3 text-gray-900 focus:outline-none focus:border-amber-400 transition-colors text-sm" />
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 flex items-center justify-between">
                    <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <button type="button" onClick={() => setPassengers(p => Math.max(1, p - 1))}
                      className="w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 font-bold text-sm flex items-center justify-center transition-colors leading-none">−</button>
                    <span className="text-gray-900 font-semibold text-sm">{passengers}</span>
                    <button type="button" onClick={() => setPassengers(p => Math.min(4, p + 1))}
                      className="w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 font-bold text-sm flex items-center justify-center transition-colors leading-none">+</button>
                  </div>
                </div>

                <button type="submit"
                  className="w-full bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold py-3.5 rounded-xl transition-all hover:scale-[1.01] shadow-md shadow-amber-200 text-base flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Boek via WhatsApp
                </button>
              </form>

              <div className="flex items-center gap-3 mt-4">
                <div className="h-px flex-1 bg-gray-100" />
                <span className="text-gray-400 text-xs">of bellen</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <a href="tel:+31633721505"
                className="flex items-center justify-center gap-2 mt-3 text-gray-500 hover:text-amber-600 transition-colors text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +31 6 33721505
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-0.5 h-7 bg-gradient-to-b from-gray-300 to-transparent" />
      </div>
    </section>
  )
}
