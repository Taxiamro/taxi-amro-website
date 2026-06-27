import { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { PRICING, getDiscount } from '../lib/fare'

const MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY


const DISCOUNTS = [
  { id: 'retour',    label: 'Retour rit',     pct: 0.10, color: '#10b981', icon: '🔄' },
  { id: 'zakelijk',  label: 'Zakelijk / factuur', pct: 0,    color: '#3b82f6', icon: '💼' },
]

const QUICK_ROUTES = [
  { label: 'Eelde Airport', from: 'Groningen Centrum, Groningen', to: 'Groningen Airport Eelde, Eelde' },
  { label: 'Schiphol', from: 'Groningen Centrum, Groningen', to: 'Amsterdam Airport Schiphol, Amsterdam' },
  { label: 'Stadsrit Groningen', msg: 'Ik wil graag een stadsrit in Groningen boeken.' },
  { label: 'Hoogkerk', msg: 'Ik wil graag een taxi naar of vanuit Hoogkerk boeken.' },
  { label: 'Zakelijke rit', msg: 'Ik wil graag een zakelijke rit boeken.' },
]

const STATS = [
  { value: '4.7★', label: 'Beoordeling', sub: '29 reviews',   color: '#d97706', glow: 'rgba(245,158,11,0.25)',  bg: 'linear-gradient(135deg,#fffbeb,#fef3c7)', border: '#fde68a', icon: '⭐', delay: '0s' },
  { value: '24/7', label: 'Beschikbaar',  sub: 'Dag en nacht', color: '#2563eb', glow: 'rgba(59,130,246,0.2)',   bg: 'linear-gradient(135deg,#eff6ff,#dbeafe)', border: '#bfdbfe', icon: '🕐', delay: '-1.1s' },
  { value: '100%', label: 'Elektrisch',   sub: 'Zero emissie', color: '#059669', glow: 'rgba(16,185,129,0.2)',  bg: 'linear-gradient(135deg,#ecfdf5,#d1fae5)', border: '#a7f3d0', icon: '⚡', delay: '-2.2s' },
]

function loadGoogleMaps() {
  return new Promise((resolve) => {
    if (window.google?.maps?.places) return resolve(window.google)
    const existing = document.getElementById('gmap-script')
    const check = () => {
      const id = setInterval(() => {
        if (window.google?.maps?.places) { clearInterval(id); resolve(window.google) }
      }, 100)
    }
    if (existing) return check()
    const script = document.createElement('script')
    script.id = 'gmap-script'
    script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}&libraries=places`
    script.async = true
    script.onload = () => resolve(window.google)
    document.head.appendChild(script)
  })
}

export default function Hero() {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [passengers, setPassengers] = useState(1)
  const [activeDiscounts, setActiveDiscounts] = useState([])
  const [retourTijd, setRetourTijd] = useState('')
  const [priceResult, setPriceResult] = useState(null)
  const [calculating, setCalculating] = useState(false)
  const [step, setStep] = useState(1) // 1 = form, 2 = price+book
  const pickupRef = useRef(null)
  const destRef = useRef(null)

  // Google autocomplete setup
  useEffect(() => {
    if (!MAPS_KEY) return
    loadGoogleMaps().then((google) => {
      const acPickup = new google.maps.places.Autocomplete(pickupRef.current, { types: ['geocode'], componentRestrictions: { country: 'nl' } })
      const acDest = new google.maps.places.Autocomplete(destRef.current, { types: ['geocode'] })
      acPickup.addListener('place_changed', () => {
        const p = acPickup.getPlace()
        setPickup(p?.formatted_address || p?.name || '')
      })
      acDest.addListener('place_changed', () => {
        const p = acDest.getPlace()
        setDestination(p?.formatted_address || p?.name || '')
      })
    })
  }, [])

  const calculatePrice = async () => {
    const from = pickupRef.current?.value || pickup
    const to = destRef.current?.value || destination
    if (!from || !to) return
    setCalculating(true)
    setPriceResult(null)
    try {
      const google = await loadGoogleMaps()
      const svc = new google.maps.DistanceMatrixService()
      svc.getDistanceMatrix(
        { origins: [from], destinations: [to], travelMode: google.maps.TravelMode.DRIVING, unitSystem: google.maps.UnitSystem.METRIC },
        (res, status) => {
          setCalculating(false)
          if (status !== 'OK') return
          const el = res.rows[0]?.elements[0]
          if (el?.status !== 'OK') return
          const km = el.distance.value / 1000
          const rawPrice = Math.max(PRICING.minimumPrijs, PRICING.startTarief + km * PRICING.prijsPerKm)
          const disc = getDiscount(km)
          setPriceResult({
            km: km.toFixed(1),
            rawPrice: Math.round(rawPrice),
            discountedPrice: Math.round(rawPrice * (1 - disc.pct)),
            discount: disc,
            distText: el.distance.text,
            durText: el.duration.text,
            from: res.originAddresses[0],
            to: res.destinationAddresses[0],
          })
          setStep(2)
        }
      )
    } catch {
      setCalculating(false)
    }
  }

  const getFinalPrice = () => {
    if (!priceResult) return 0
    let p = priceResult.discountedPrice ?? priceResult.rawPrice
    const retour = activeDiscounts.includes('retour')
    if (retour) p = Math.round(p * 0.90)
    return p
  }

  const toggleDiscount = (id) => {
    setActiveDiscounts(prev => prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id])
  }

  const handleBook = () => {
    const from = priceResult?.from || pickupRef.current?.value || pickup
    const to = priceResult?.to || destRef.current?.value || destination
    const finalPrice = getFinalPrice()
    const discountLines = activeDiscounts.includes('retour') ? ('\n Retour korting: 10% toegepast' + (retourTijd ? '\n Retour ophaaltijd: ' + retourTijd.replace('T', ' ') : '')) : ''
    const zakelijk = activeDiscounts.includes('zakelijk') ? '\n Factuur gewenst: Ja' : ''
    const dateStr = date ? `\n Datum: ${date}` : ''
    const timeStr = time ? `\n Tijd: ${time}` : ''
    const msg = encodeURIComponent(
      `Hallo Taxi Amro, ik wil een rit boeken.\n\n` +
      ` Van: ${from}\n Naar: ${to}${dateStr}${timeStr}\n Passagiers: ${passengers}` +
      (priceResult ? `\n Geschatte prijs: €${finalPrice}${discountLines}` : '') +
      zakelijk +
      `\n\nKan ik bevestiging ontvangen?`
    )
    window.open(`https://wa.me/31633721505?text=${msg}`, '_blank')
  }

  const handleQuick = (route) => {
    if (route.msg) {
      window.open(`https://wa.me/31633721505?text=${encodeURIComponent('Hallo Taxi Amro, ' + route.msg)}`, '_blank')
      return
    }
    if (pickupRef.current) pickupRef.current.value = route.from
    if (destRef.current) destRef.current.value = route.to
    setPickup(route.from)
    setDestination(route.to)
    calculatePrice()
  }

  const finalPrice = getFinalPrice()
  const hasRetour = activeDiscounts.includes('retour')
  const savings = priceResult ? (priceResult.discountedPrice ?? priceResult.rawPrice) - finalPrice : 0

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #fffbeb 0%, #ffffff 50%, #ecfdf5 100%)' }}
    >
      <style>{`
        @keyframes floatCard { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes dotPulse  { 0%,100%{opacity:.7;transform:scale(1)} 50%{opacity:.3;transform:scale(1.6)} }
        @keyframes floatImg  { 0%,100%{transform:perspective(900px) rotateY(-8deg) rotateX(4deg) translateY(0)} 50%{transform:perspective(900px) rotateY(-8deg) rotateX(4deg) translateY(-12px)} }
        @keyframes fadeUp    { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .car-3d   { animation: floatImg 5s ease-in-out infinite; }
        .stat-float { animation: floatCard 3.5s ease-in-out infinite; }
        .price-pop { animation: fadeUp .35s ease forwards; }
      `}</style>

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full" style={{ background:'radial-gradient(circle,rgba(253,230,138,0.45) 0%,transparent 70%)',top:'-150px',left:'-150px' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full" style={{ background:'radial-gradient(circle,rgba(167,243,208,0.35) 0%,transparent 70%)',bottom:'-100px',right:'-80px' }} />
        <div className="absolute w-[350px] h-[350px] rounded-full" style={{ background:'radial-gradient(circle,rgba(191,219,254,0.3) 0%,transparent 70%)',top:'35%',right:'5%' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT: 3D Car + stats */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start gap-6">
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-amber-700 text-sm font-semibold">Taxichauffeur Groningen · 24/7</span>
            </div>

            <div className="relative w-full max-w-lg px-8 sm:px-10 lg:px-0">
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-40" style={{ background:'linear-gradient(135deg,#fde68a 0%,#a7f3d0 100%)',transform:'scale(0.95) translateY(12px)' }} />
              <div className="car-3d relative rounded-3xl overflow-hidden shadow-2xl" style={{ boxShadow:'0 30px 80px rgba(0,0,0,0.18),0 8px 24px rgba(0,0,0,0.1)' }}>
                <img src="/nexo-exterior.webp" alt="Taxichauffeur Groningen - Taxi Amro Hyundai Nexo elektrisch" className="w-full h-72 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                  <div className="text-white font-bold text-base leading-tight">TaxiAmro Groningen</div>
                  <div className="text-white/70 text-xs mt-0.5">Hyundai Nexo · 100% elektrisch</div>
                </div>
              </div>

              {STATS.map((s, i) => {
                const pos = i === 0
                  ? 'absolute -top-4 right-0 sm:-right-5'
                  : i === 1
                  ? 'absolute top-1/2 -translate-y-1/2 left-0 sm:-left-7'
                  : 'absolute -bottom-4 right-0 sm:-right-5'
                return (
                  <div key={s.label} className={`stat-float ${pos} rounded-2xl px-3 py-2 shadow-lg text-center`}
                    style={{ background:s.bg, border:`1.5px solid ${s.border}`, boxShadow:`0 8px 24px ${s.glow}`, animationDelay:s.delay, minWidth:90 }}>
                    <div style={{ position:'absolute',top:7,right:9,width:6,height:6,borderRadius:'50%',background:s.color,opacity:.7,animation:'dotPulse 2s infinite' }} />
                    <div style={{ fontSize:16 }}>{s.icon}</div>
                    <div style={{ fontSize:20,fontWeight:800,color:s.color,lineHeight:1.1 }}>{s.value}</div>
                    <div style={{ fontSize:10,fontWeight:700,color:'#374151',textTransform:'uppercase',letterSpacing:.6,marginTop:3 }}>{s.label}</div>
                    <div style={{ fontSize:9,color:'#9ca3af',marginTop:1 }}>{s.sub}</div>
                  </div>
                )
              })}
            </div>

            <div className="w-full max-w-lg">
              <div className="text-gray-400 text-xs uppercase tracking-wide mb-2">Snel berekenen:</div>
              <div className="flex flex-wrap gap-2">
                {QUICK_ROUTES.map((r) => (
                  <button key={r.label} onClick={() => handleQuick(r)}
                    className="bg-white hover:bg-amber-50 border border-gray-200 hover:border-amber-300 text-gray-600 hover:text-amber-700 text-xs px-3 py-1.5 rounded-full transition-all shadow-sm">
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Booking widget */}
          <div className="order-1 lg:order-2">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-100 overflow-hidden">

              {/* Widget header */}
              <div className="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-gray-900 font-bold text-base leading-none">Bereken je ritprijs</h2>
                  <p className="text-gray-400 text-xs mt-0.5">Vaste prijs · geen verrassingen</p>
                </div>
                {step === 2 && (
                  <button onClick={() => { setStep(1); setPriceResult(null) }}
                    className="text-xs text-gray-400 hover:text-gray-700 flex items-center gap-1 transition-colors">
                    ← Aanpassen
                  </button>
                )}
              </div>

              {/* Step 1: Route + details */}
              {step === 1 && (
                <div className="p-5">
                  {/* Route */}
                  <div className="space-y-2 mb-3">
                    <div className="relative">
                      <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 ring-2 ring-green-200" />
                      </div>
                      <input ref={pickupRef} type="text" defaultValue={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        placeholder="Ophaaladres"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors text-sm" />
                    </div>
                    <div className="relative">
                      <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400 ring-2 ring-amber-200" />
                      </div>
                      <input ref={destRef} type="text" defaultValue={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="Bestemming"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors text-sm" />
                    </div>
                  </div>

                  {/* Date + time + passengers */}
                  <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 mb-4">
                    <div className="relative">
                      <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-7 pr-1 py-3 text-gray-900 focus:outline-none focus:border-amber-400 transition-colors text-[11px]" />
                    </div>
                    <div className="relative">
                      <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <input type="time" value={time} onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-7 pr-1 py-3 text-gray-900 focus:outline-none focus:border-amber-400 transition-colors text-[11px]" />
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl px-2 py-2 flex items-center justify-between">
                      <button type="button" onClick={() => setPassengers(p => Math.max(1,p-1))}
                        className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 font-bold text-sm flex items-center justify-center transition-colors">−</button>
                      <span className="text-gray-900 font-semibold text-sm">{passengers}p</span>
                      <button type="button" onClick={() => setPassengers(p => Math.min(4,p+1))}
                        className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 font-bold text-sm flex items-center justify-center transition-colors">+</button>
                    </div>
                  </div>

                  <button onClick={calculatePrice} disabled={calculating}
                    className="w-full bg-amber-400 hover:bg-amber-300 disabled:bg-gray-200 text-gray-900 disabled:text-gray-400 font-bold py-3.5 rounded-xl transition-all hover:scale-[1.01] shadow-md shadow-amber-200 text-sm flex items-center justify-center gap-2">
                    {calculating ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Prijs berekenen...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Bereken mijn ritprijs
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-3 mt-3">
                    <div className="h-px flex-1 bg-gray-100" />
                    <span className="text-gray-400 text-xs">of bellen</span>
                    <div className="h-px flex-1 bg-gray-100" />
                  </div>
                  <a href="tel:+31633721505" className="flex items-center justify-center gap-2 mt-2.5 text-gray-500 hover:text-amber-600 transition-colors text-sm font-medium">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +31 6 33721505
                  </a>
                </div>
              )}

              {/* Step 2: Price result + discounts + book */}
              {step === 2 && priceResult && (
                <div className="price-pop">
                  {/* Route summary */}
                  <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
                    <div className="flex items-start gap-2 text-xs text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-1 flex-shrink-0" />
                      <span className="line-clamp-1 flex-1">{priceResult.from}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-gray-600 mt-1.5">
                      <div className="w-2 h-2 rounded-full bg-amber-400 mt-1 flex-shrink-0" />
                      <span className="line-clamp-1 flex-1">{priceResult.to}</span>
                    </div>
                    <div className="flex gap-4 mt-2 text-xs text-gray-400">
                      <span>{priceResult.distText}</span>
                      <span>·</span>
                      <span>{priceResult.durText}</span>
                    </div>
                  </div>

                  {/* Price display */}
                  <div className="px-5 pt-4 pb-2">
                    <div className="bg-gray-900 rounded-2xl p-4 text-center relative overflow-hidden mb-3">
                      <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400/10 rounded-full blur-xl" />
                      <p className="text-gray-400 text-xs mb-1">Vaste ritprijs</p>
                      <div className="flex items-end justify-center gap-2">
                        {(hasRetour || (priceResult.discount?.pct > 0)) && (
                          <span className="text-gray-500 line-through text-lg">€{priceResult.rawPrice}</span>
                        )}
                        <span className="text-amber-400 font-bold text-4xl">€{finalPrice}</span>
                      </div>
                      {priceResult.discount?.label && (
                        <div className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full mt-1">
                          ✓ {priceResult.discount.label}
                        </div>
                      )}
                      {hasRetour && (
                        <div className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full mt-1">
                          ✓ Extra 10% retour korting
                        </div>
                      )}
                      <p className="text-gray-500 text-xs mt-1.5">Incl. alle kosten · vaste prijs</p>
                    </div>

                    {/* Discount toggles */}
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Kortingen toepassen</p>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {DISCOUNTS.map((d) => {
                        const active = activeDiscounts.includes(d.id)
                        return (
                          <button key={d.id} onClick={() => toggleDiscount(d.id)}
                            className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
                              active
                                ? 'border-green-400 bg-green-50 text-green-700'
                                : 'border-gray-200 bg-gray-50 text-gray-500 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700'
                            }`}>
                            <span>{d.icon}</span>
                            <div className="text-left">
                              <div className="leading-tight">{d.label}</div>
                              {d.pct > 0 && <div className="text-green-600 font-bold">{(d.pct*100).toFixed(0)}% korting</div>}
                            </div>
                            {active && <span className="ml-auto text-green-500">✓</span>}
                          </button>
                        )
                      })}
                    </div>

                    {hasRetour && (
                      <div className="mb-3">
                        <label className="text-gray-500 text-xs font-semibold uppercase tracking-wide block mb-1.5">Retour ophaaltijd</label>
                        <input type="datetime-local" value={retourTijd} onChange={(e) => setRetourTijd(e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-3 text-gray-900 focus:outline-none focus:border-amber-400 transition-colors text-sm" />
                      </div>
                    )}
                    {/* Book button */}
                    <Link to={`/boeken?van=${encodeURIComponent(priceResult.from)}&naar=${encodeURIComponent(priceResult.to)}`}
                      className="w-full bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold py-3.5 rounded-xl transition-all hover:scale-[1.01] shadow-md shadow-amber-200 text-sm flex items-center justify-center gap-2 mb-2">
                      Boeken voor €{finalPrice} →
                    </Link>
                    <a href="tel:+31633721505"
                      className="flex items-center justify-center gap-2 text-gray-500 hover:text-amber-600 transition-colors text-xs font-medium">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Liever bellen? +31 6 33721505
                    </a>
                  </div>
                </div>
              )}

              {/* Trust footer */}
              <div className="px-5 py-3 border-t border-gray-100 flex justify-center gap-4 text-xs text-gray-400">
                <span>✓ Vaste prijs</span>
                <span>✓ Geen toeslag</span>
                <span>✓ 24/7</span>
              </div>
            </div>

            {/* Links below widget */}
            <div className="flex justify-center gap-4 mt-3 text-xs text-gray-400">
              <Link to="/tarieven" className="hover:text-amber-600 transition-colors">Bekijk alle tarieven →</Link>
              <Link to="/diensten" className="hover:text-amber-600 transition-colors">Onze diensten →</Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom scroll CTA */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <button onClick={() => document.getElementById('tarief-berekenaar')?.scrollIntoView({ behavior:'smooth' })}
          className="bg-green-700 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-full text-sm shadow-lg transition-all hover:scale-[1.03] whitespace-nowrap">
          Bekijk alle vaste tarieven
        </button>
      </div>
    </section>
  )
}
