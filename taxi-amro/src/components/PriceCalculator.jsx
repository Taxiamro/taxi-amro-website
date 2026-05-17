import { useState, useEffect, useRef, useCallback } from 'react'

const PRICING = {
  startTarief: 7.50,
  prijsPerKm: 2.35,
  minimumPrijs: 15.00,
}
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

function loadGoogleMaps() {
  return new Promise((resolve, reject) => {
    if (window.google?.maps?.places) return resolve(window.google)
    if (document.getElementById('gmap-script')) {
      const check = setInterval(() => {
        if (window.google?.maps?.places) { clearInterval(check); resolve(window.google) }
      }, 100)
      return
    }
    const script = document.createElement('script')
    script.id = 'gmap-script'
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`
    script.async = true
    script.onload = () => resolve(window.google)
    script.onerror = reject
    document.head.appendChild(script)
  })
}

function useAutoComplete(inputRef, onPlace) {
  useEffect(() => {
    if (!inputRef.current || !API_KEY || API_KEY === 'YOUR_API_KEY_HERE') return
    let ac
    loadGoogleMaps().then((google) => {
      ac = new google.maps.places.Autocomplete(inputRef.current, {
        types: ['geocode'],
        componentRestrictions: { country: 'nl' },
      })
      ac.addListener('place_changed', () => {
        const place = ac.getPlace()
        if (place?.geometry) onPlace(place)
      })
    })
    return () => { if (ac) window.google?.maps?.event?.clearInstanceListeners(ac) }
  }, [inputRef, onPlace])
}

function AnimatedNumber({ value }) {
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    if (!value) return setDisplay(0)
    const target = parseFloat(value)
    const start = display
    const diff = target - start
    const steps = 40
    let i = 0
    const t = setInterval(() => {
      i++
      setDisplay(+(start + diff * (i / steps)).toFixed(2))
      if (i >= steps) clearInterval(t)
    }, 18)
    return () => clearInterval(t)
  }, [value])
  return <span>€ {display.toFixed(2)}</span>
}

function RouteAnimation({ active }) {
  return (
    <div className="relative h-2 rounded-full bg-gray-100 overflow-hidden my-4">
      <div
        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-1000"
        style={{ width: active ? '100%' : '0%' }}
      />
      {active && (
        <div className="absolute inset-y-0 right-0 w-4 h-full flex items-center justify-end pr-1">
          <div className="w-2 h-2 bg-white rounded-full shadow animate-ping" />
        </div>
      )}
    </div>
  )
}

export default function PriceCalculator() {
  const originRef = useRef(null)
  const destRef = useRef(null)
  const [originPlace, setOriginPlace] = useState(null)
  const [destPlace, setDestPlace] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef(null)
  const noKey = !API_KEY || API_KEY === 'YOUR_API_KEY_HERE'

  const onOriginPlace = useCallback((p) => setOriginPlace(p), [])
  const onDestPlace = useCallback((p) => setDestPlace(p), [])

  useAutoComplete(originRef, onOriginPlace)
  useAutoComplete(destRef, onDestPlace)

  const calculate = async () => {
    if (noKey) return
    const origin = originRef.current.value.trim()
    const dest = destRef.current.value.trim()
    if (!origin || !dest) return setError('Vul beide adressen in.')
    setError('')
    setLoading(true)
    setResult(null)
    try {
      const google = await loadGoogleMaps()
      const svc = new google.maps.DistanceMatrixService()
      svc.getDistanceMatrix(
        {
          origins: [origin],
          destinations: [dest],
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC,
        },
        (res, status) => {
          setLoading(false)
          if (status !== 'OK') return setError('Kon afstand niet berekenen. Bel +31 6 33721505.')
          const el = res.rows[0]?.elements[0]
          if (el?.status !== 'OK') return setError('Kon afstand niet berekenen. Bel +31 6 33721505.')
          const km = el.distance.value / 1000
          const ruwePrijs = PRICING.startTarief + (km * PRICING.prijsPerKm)
          const totalePrijs = Math.max(PRICING.minimumPrijs, ruwePrijs)
          const eindPrijs = Math.round(totalePrijs)
          setResult({
            km: km.toFixed(1),
            price: eindPrijs,
            distText: el.distance.text,
            durText: el.duration.text,
            origin: res.originAddresses[0],
            dest: res.destinationAddresses[0],
          })
        }
      )
    } catch {
      setLoading(false)
      setError('Fout bij laden van Google Maps.')
    }
  }

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const r = cardRef.current.getBoundingClientRect()
    setTilt({
      x: ((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) * -6,
      y: ((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) * 6,
    })
  }

  const handleWhatsApp = () => {
    if (!result) return
    const msg = encodeURIComponent(
      `Hallo, ik wil graag een rit boeken:\nVan: ${result.origin}\nNaar: ${result.dest}\nGeschatte prijs: €${result.price}`
    )
    window.open(`https://wa.me/31633721505?text=${msg}`, '_blank')
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50/50" id="tarief-berekenaar">
      <style>{`
        @keyframes spinOrb { from { transform: rotate(0deg) translateX(60px) rotate(0deg); } to { transform: rotate(360deg) translateX(60px) rotate(-360deg); } }
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes dotBounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }
        .spin-orb { animation: spinOrb 8s linear infinite; }
        .fade-slide-up { animation: fadeSlideUp 0.45s ease forwards; }
        .dot1 { animation: dotBounce 1.2s infinite 0s; }
        .dot2 { animation: dotBounce 1.2s infinite 0.2s; }
        .dot3 { animation: dotBounce 1.2s infinite 0.4s; }
        .input-glow:focus { box-shadow: 0 0 0 3px rgba(251,191,36,0.2); }
      `}</style>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-amber-500 font-semibold text-xs uppercase tracking-widest">Prijsberekening</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-3">
            Bereken uw ritprijs
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Voer uw route in — realtime afstand via Google Maps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left: Input panel */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }) }}
            style={{
              transform: hovered
                ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
                : 'perspective(800px) rotateX(0deg) rotateY(0deg)',
              transition: hovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease',
            }}
            className="relative bg-white rounded-3xl shadow-xl shadow-gray-200/80 p-8 overflow-hidden"
          >
            {/* decorative orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none">
              <div className="spin-orb w-3 h-3 rounded-full bg-amber-300/40 blur-sm" />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-amber-100/60 blur-3xl pointer-events-none" />

            {/* API key warning */}
            {noKey && (
              <div className="mb-5 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="none" width="18" height="18" className="flex-shrink-0 mt-0.5">
                  <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#d97706" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div>
                  <div className="text-amber-800 font-semibold text-xs mb-0.5">Google Maps API sleutel vereist</div>
                  <div className="text-amber-700 text-xs">Voeg <code className="bg-amber-100 px-1 rounded">VITE_GOOGLE_MAPS_API_KEY</code> toe aan <code className="bg-amber-100 px-1 rounded">.env</code></div>
                </div>
              </div>
            )}

            {/* From */}
            <div className="mb-4 relative">
              <label className="text-gray-500 text-xs font-semibold uppercase tracking-wide block mb-2">
                Van — Vertrekpunt
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow shadow-green-300" />
                </div>
                <input
                  ref={originRef}
                  type="text"
                  placeholder="bijv. Groningen Centrum"
                  disabled={noKey}
                  className="input-glow w-full pl-9 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-all disabled:opacity-50"
                />
              </div>
            </div>

            {/* Route line */}
            <div className="flex items-center gap-2 my-1 pl-3.5">
              <div className="flex flex-col gap-1">
                <div className="w-0.5 h-3 bg-gray-300 rounded ml-1" />
                <div className="w-0.5 h-3 bg-gray-200 rounded ml-1" />
              </div>
              <button
                onClick={() => {
                  const ov = originRef.current.value
                  const dv = destRef.current.value
                  originRef.current.value = dv
                  destRef.current.value = ov
                  setOriginPlace(destPlace)
                  setDestPlace(originPlace)
                  setResult(null)
                }}
                className="ml-auto text-xs text-gray-400 hover:text-amber-500 flex items-center gap-1 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                  <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Omwisselen
              </button>
            </div>

            {/* To */}
            <div className="mb-6 relative">
              <label className="text-gray-500 text-xs font-semibold uppercase tracking-wide block mb-2">
                Naar — Bestemming
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow shadow-amber-300" />
                </div>
                <input
                  ref={destRef}
                  type="text"
                  placeholder="bijv. Groningen Airport Eelde"
                  disabled={noKey}
                  className="input-glow w-full pl-9 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-all disabled:opacity-50"
                />
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-xs mb-4 flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                  <circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2"/>
                  <path d="M12 8v4m0 4h.01" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                {error}
              </p>
            )}

            <button
              onClick={calculate}
              disabled={noKey || loading}
              className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-gray-900/20 active:scale-95 flex items-center justify-center gap-2 text-sm"
            >
              {loading ? (
                <>
                  <div className="flex gap-1">
                    <div className="dot1 w-2 h-2 bg-white rounded-full" />
                    <div className="dot2 w-2 h-2 bg-white rounded-full" />
                    <div className="dot3 w-2 h-2 bg-white rounded-full" />
                  </div>
                  Berekening loopt...
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Bereken ritprijs
                </>
              )}
            </button>
          </div>

          {/* Right: Result panel */}
          <div className="space-y-4">
            {!result && !loading && (
              <div className="bg-white rounded-3xl border border-dashed border-gray-200 p-10 flex flex-col items-center justify-center text-center min-h-[320px]">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#f59e0b" strokeWidth="1.5"/>
                    <path d="M9 22V12h6v10" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">Voer een route in om de prijs te berekenen</p>
                <p className="text-gray-300 text-xs mt-1">Op basis van het officiële metertarief</p>
              </div>
            )}

            {loading && (
              <div className="bg-white rounded-3xl border border-gray-100 p-10 flex flex-col items-center justify-center min-h-[320px]">
                <div className="relative w-16 h-16 mb-4">
                  <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
                  <div className="absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent animate-spin" />
                </div>
                <p className="text-gray-500 text-sm font-medium">Route berekenen via Google Maps...</p>
              </div>
            )}

            {result && (
              <div className="fade-slide-up space-y-4">
                {/* Route info */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                    <div className="text-gray-700 text-xs leading-relaxed">{result.origin}</div>
                  </div>
                  <RouteAnimation active={!!result} />
                  <div className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-1 flex-shrink-0" />
                    <div className="text-gray-700 text-xs leading-relaxed">{result.dest}</div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
                    <div className="text-gray-400 text-xs mb-1">Afstand</div>
                    <div className="text-gray-900 font-bold text-xl">{result.distText}</div>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
                    <div className="text-gray-400 text-xs mb-1">Reistijd</div>
                    <div className="text-gray-900 font-bold text-xl">{result.durText}</div>
                  </div>
                </div>

                {/* Price card */}
                <div className="relative bg-gray-900 rounded-2xl p-6 overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-amber-400/10 blur-2xl" />
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-yellow-500/10 blur-xl" />
                  <div className="relative z-10">
                    <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">Geschatte ritprijs</div>
                    <div className="text-yellow-400 font-bold text-4xl mb-1">
                      € {result.price}
                    </div>
                    <div className="text-gray-400 text-sm mb-1">Afstand: {result.km.replace('.', ',')} km</div>
                    <div className="text-gray-600 text-xs mb-5">Indicatie. Definitieve prijs via WhatsApp.</div>
                    <button
                      onClick={handleWhatsApp}
                      className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-yellow-400/30 active:scale-95 flex items-center justify-center gap-2 text-sm"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Boek via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
