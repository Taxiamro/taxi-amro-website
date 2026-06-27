import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import { computeFare, getDistanceKm, loadGoogleMaps, hasMapsKey, VEHICLES } from '../lib/fare'

const TEL = '+31633721505'
const fieldCls = 'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors'
const labelCls = 'text-gray-600 text-xs font-semibold uppercase tracking-wide block mb-1.5'

const validEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
const validNL = (t) => /^(\+31|0)\d{9}$/.test(String(t).replace(/[\s-]/g, ''))
const pad = (n) => String(n).padStart(2, '0')
const waNumber = (t) => { let n = String(t || '').replace(/\D/g, ''); if (n.startsWith('0')) n = '31' + n.slice(1); return n }

function useAutocomplete(ref) {
  useEffect(() => {
    if (!ref.current || !hasMapsKey) return
    let ac
    loadGoogleMaps().then((g) => { ac = new g.maps.places.Autocomplete(ref.current, { types: ['geocode'], componentRestrictions: { country: 'nl' } }) })
    return () => { if (ac) window.google?.maps?.event?.clearInstanceListeners(ac) }
  }, [ref])
}

const empty = { naam: '', telefoon: '', email: '', datum: '', tijd: '', personen: 1, retour: false, retourtijd: '', factuur: false, opmerking: '', voertuig: 'taxi' }

export default function BoekenPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(empty)
  const [dist, setDist] = useState(null)       // {km, distText, durText}
  const [calc, setCalc] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(null)
  const ophaalRef = useRef(null)
  const bestRef = useRef(null)
  useAutocomplete(ophaalRef)
  useAutocomplete(bestRef)
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))
  const todayStr = new Date().toISOString().slice(0, 10)

  const priceFor = useCallback((veh) => {
    if (!dist) return null
    return computeFare(dist.km, { retour: form.retour, factor: veh.factor }).finalPrice
  }, [dist, form.retour])

  // ---- Stap 1: rit -> afstand berekenen ----
  async function nextFromRit(e) {
    e.preventDefault()
    const er = {}
    if (!ophaalRef.current?.value?.trim()) er.ophaal = 'Vul het ophaaladres in'
    if (!bestRef.current?.value?.trim()) er.bestemming = 'Vul de bestemming in'
    if (!form.datum || !form.tijd) er.datum = 'Kies datum en tijd'
    else if (new Date(`${form.datum}T${form.tijd}`) <= new Date()) er.datum = 'Datum en tijd moeten in de toekomst liggen'
    if (form.retour && !form.retourtijd) er.retourtijd = 'Vul de retour ophaaltijd in'
    else if (form.retour && form.retourtijd && form.datum && form.tijd && new Date(form.retourtijd) <= new Date(`${form.datum}T${form.tijd}`)) er.retourtijd = 'Retourtijd moet na de heenrit liggen'
    setErrors(er)
    if (Object.keys(er).length) return
    set('ophaal', ophaalRef.current.value.trim())
    set('bestemming', bestRef.current.value.trim())
    if (hasMapsKey) {
      setCalc(true)
      try { setDist(await getDistanceKm(ophaalRef.current.value.trim(), bestRef.current.value.trim())) }
      catch { setDist(null) } finally { setCalc(false) }
    }
    // bij meer dan 4 personen automatisch het busje voorstellen
    if (form.personen > 4) set('voertuig', 'busje')
    setStep(2)
  }

  function chooseVehicle(id) { set('voertuig', id); setStep(3) }

  async function submit(e) {
    e.preventDefault()
    const er = {}
    if (!form.naam.trim()) er.naam = 'Vul je naam in'
    if (!validNL(form.telefoon)) er.telefoon = 'Geldig NL nummer, bijv. 0612345678'
    if (!validEmail(form.email)) er.email = 'Geldig e-mailadres'
    setErrors(er)
    if (Object.keys(er).length) return
    const veh = VEHICLES.find((v) => v.id === form.voertuig) || VEHICLES[0]
    const prijs = dist ? computeFare(dist.km, { retour: form.retour, factor: veh.factor }).finalPrice : ''
    const payload = {
      ...form,
      ophaal: form.ophaal || ophaalRef.current?.value?.trim(),
      bestemming: form.bestemming || bestRef.current?.value?.trim(),
      voertuig: `${veh.label} (${veh.sub})`,
      prijs,
      km: dist ? Number(dist.km.toFixed(1)) : '',
    }
    setSubmitting(true)
    try { await fetch('/api/booking', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }) } catch {}
    setSubmitting(false)
    setDone(payload)
    setStep(4)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function reset() { setForm(empty); setDist(null); setErrors({}); setDone(null); setStep(1); if (ophaalRef.current) ophaalRef.current.value = ''; if (bestRef.current) bestRef.current.value = '' }

  return (
    <>
      <Seo title="Taxi boeken in Groningen | Direct online | Taxi Amro" description="Boek je taxi in Groningen direct online. Kies je voertuig, bereken je vaste prijs en boek in een paar stappen. Bevestiging per e-mail, 24/7." canonical="/boeken" />
      <div className="min-h-screen bg-white">
        <Navbar />
        <section className="relative pt-28 pb-8 bg-gradient-to-br from-amber-50 via-white to-blue-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Taxi boeken</h1>
            <p className="text-gray-500 text-sm sm:text-base">In een paar stappen geregeld. Je ontvangt een bevestiging per e-mail.</p>
          </div>
        </section>

        <section className="py-8 max-w-2xl mx-auto px-4 sm:px-6">
          {step < 4 && <Steps step={step} />}

          {step === 1 && (
            <form onSubmit={nextFromRit} className="bg-white border border-gray-100 rounded-3xl shadow-lg shadow-gray-100 p-5 sm:p-8 space-y-5">
              <div><label className={labelCls}>Ophaaladres</label>
                <input ref={ophaalRef} className={fieldCls} placeholder="bijv. Grote Markt, Groningen" defaultValue={form.ophaal} />
                {errors.ophaal && <p className="text-red-500 text-xs mt-1">{errors.ophaal}</p>}
              </div>
              <div><label className={labelCls}>Bestemming</label>
                <input ref={bestRef} className={fieldCls} placeholder="bijv. TT Circuit Assen" defaultValue={form.bestemming} />
                {errors.bestemming && <p className="text-red-500 text-xs mt-1">{errors.bestemming}</p>}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div><label className={labelCls}>Datum</label><input type="date" min={todayStr} className={fieldCls} value={form.datum} onChange={(e) => set('datum', e.target.value)} /></div>
                <div><label className={labelCls}>Tijd</label><input type="time" className={fieldCls} value={form.tijd} onChange={(e) => set('tijd', e.target.value)} /></div>
                <div><label className={labelCls}>Personen</label>
                  <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5">
                    <button type="button" onClick={() => set('personen', Math.max(1, form.personen - 1))} className="w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 font-bold">−</button>
                    <span className="font-semibold text-gray-900 text-sm">{form.personen}p</span>
                    <button type="button" onClick={() => set('personen', Math.min(8, form.personen + 1))} className="w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 font-bold">+</button>
                  </div>
                </div>
              </div>
              {errors.datum && <p className="text-red-500 text-xs -mt-2">{errors.datum}</p>}
              <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={() => set('retour', !form.retour)} className={`px-3 py-3 rounded-xl text-sm font-semibold border transition-all ${form.retour ? 'bg-green-50 border-green-400 text-green-700' : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-amber-300'}`}>🔄 Retour (10% korting) {form.retour && '✓'}</button>
                <button type="button" onClick={() => set('factuur', !form.factuur)} className={`px-3 py-3 rounded-xl text-sm font-semibold border transition-all ${form.factuur ? 'bg-blue-50 border-blue-400 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-amber-300'}`}>💼 Zakelijk / factuur {form.factuur && '✓'}</button>
              </div>
              {form.retour && (
                <div><label className={labelCls}>Retour ophaaltijd</label>
                  <input type="datetime-local" min={form.datum && form.tijd ? `${form.datum}T${form.tijd}` : undefined} className={fieldCls} value={form.retourtijd} onChange={(e) => set('retourtijd', e.target.value)} />
                  {errors.retourtijd && <p className="text-red-500 text-xs mt-1">{errors.retourtijd}</p>}
                </div>
              )}
              <div><label className={labelCls}>Opmerking (optioneel)</label>
                <textarea className={fieldCls} rows={2} value={form.opmerking} onChange={(e) => set('opmerking', e.target.value)} placeholder="Bijv. veel bagage, kinderzitje, vluchtnummer" />
              </div>
              <button type="submit" disabled={calc} className="w-full bg-amber-400 hover:bg-amber-300 disabled:bg-gray-200 text-gray-900 font-bold py-4 rounded-xl transition-all hover:scale-[1.01] shadow-md shadow-amber-200 text-sm">{calc ? 'Afstand berekenen...' : 'Volgende: kies voertuig'}</button>
              <p className="text-center text-xs text-gray-400">Liever bellen? <a href={`tel:${TEL}`} className="text-amber-600 font-medium">+31 6 33721505</a></p>
            </form>
          )}

          {step === 2 && (
            <div className="bg-white border border-gray-100 rounded-3xl shadow-lg shadow-gray-100 p-5 sm:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-1">Kies je voertuig</h2>
              {dist && <p className="text-gray-400 text-xs mb-5">{dist.distText} · {dist.durText}{form.retour && ' · incl. 10% retour korting'}</p>}
              <div className="space-y-3">
                {VEHICLES.map((v) => {
                  const tooSmall = form.personen > v.max
                  const prijs = priceFor(v)
                  return (
                    <button key={v.id} type="button" disabled={tooSmall} onClick={() => chooseVehicle(v.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-2xl border text-left transition-all ${tooSmall ? 'opacity-40 cursor-not-allowed border-gray-200' : 'border-gray-200 hover:border-amber-400 hover:shadow-md'}`}>
                      <span className="text-4xl">{v.icon}</span>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">{v.label}</div>
                        <div className="text-gray-400 text-xs">{v.sub}{tooSmall && ' · te klein voor jouw groep'}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-amber-500 font-bold text-2xl">{prijs != null ? `€${prijs}` : 'op aanvraag'}</div>
                        <div className="text-gray-400 text-xs">vaste prijs</div>
                      </div>
                    </button>
                  )
                })}
              </div>
              <button onClick={() => setStep(1)} className="mt-5 text-gray-500 hover:text-amber-600 text-sm font-medium">← Terug</button>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={submit} className="bg-white border border-gray-100 rounded-3xl shadow-lg shadow-gray-100 p-5 sm:p-8 space-y-5">
              <h2 className="text-lg font-bold text-gray-900">Jouw gegevens</h2>
              <div><label className={labelCls}>Naam</label><input className={fieldCls} value={form.naam} onChange={(e) => set('naam', e.target.value)} placeholder="Voor- en achternaam" />{errors.naam && <p className="text-red-500 text-xs mt-1">{errors.naam}</p>}</div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className={labelCls}>Telefoon</label><input className={fieldCls} value={form.telefoon} onChange={(e) => set('telefoon', e.target.value)} placeholder="0612345678" inputMode="tel" />{errors.telefoon && <p className="text-red-500 text-xs mt-1">{errors.telefoon}</p>}</div>
                <div><label className={labelCls}>E-mail</label><input className={fieldCls} value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="naam@email.nl" inputMode="email" />{errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 text-sm text-gray-600">
                <div className="flex justify-between"><span>Voertuig</span><span className="font-medium text-gray-800">{(VEHICLES.find(v=>v.id===form.voertuig)||VEHICLES[0]).label}</span></div>
                <div className="flex justify-between mt-1"><span>Vaste prijs</span><span className="font-bold text-amber-600">{priceFor(VEHICLES.find(v=>v.id===form.voertuig)||VEHICLES[0]) != null ? `€${priceFor(VEHICLES.find(v=>v.id===form.voertuig)||VEHICLES[0])}` : 'op aanvraag'}</span></div>
              </div>
              <button type="submit" disabled={submitting} className="w-full bg-amber-400 hover:bg-amber-300 disabled:bg-gray-200 text-gray-900 font-bold py-4 rounded-xl transition-all hover:scale-[1.01] shadow-md shadow-amber-200 text-sm">{submitting ? 'Versturen...' : 'Verstuur boeking'}</button>
              <button type="button" onClick={() => setStep(2)} className="w-full text-gray-500 hover:text-amber-600 text-sm font-medium">← Terug</button>
            </form>
          )}

          {step === 4 && done && <Confirmation b={done} onReset={reset} />}
        </section>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}

function Steps({ step }) {
  const labels = ['Rit', 'Voertuig', 'Gegevens']
  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      {labels.map((l, i) => (
        <div key={l} className="flex items-center gap-2">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${step >= i + 1 ? 'bg-amber-400 text-gray-900' : 'bg-gray-100 text-gray-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= i + 1 ? 'bg-gray-900 text-white' : 'bg-gray-300 text-white'}`}>{i + 1}</span>{l}
          </div>
          {i < labels.length - 1 && <div className="w-4 h-px bg-gray-200" />}
        </div>
      ))}
    </div>
  )
}

function Row({ label, value }) {
  return <div className="flex justify-between gap-4 py-2 border-b border-gray-100 text-sm"><span className="text-gray-400">{label}</span><span className="text-gray-800 font-medium text-right">{value}</span></div>
}

function Confirmation({ b, onReset }) {
  const prijs = b.prijs ? `€${b.prijs}` : 'op aanvraag'
  const lines = [
    `Hoi ${b.naam}, je taxirit is bevestigd bij Taxi Amro.`,
    `Datum: ${b.datum} om ${b.tijd}`, `Van: ${b.ophaal}`, `Naar: ${b.bestemming}`,
    `Voertuig: ${b.voertuig}`, `Personen: ${b.personen}`, `Prijs: ${prijs} vaste prijs all-in`,
  ]
  if (b.retour) lines.push(`Retour: ophalen ${String(b.retourtijd).replace('T', ' ')}`)
  if (b.factuur) lines.push('Factuur: ja, je ontvangt een factuur')
  lines.push(`Tot dan. Vragen? Bel of app ${TEL}.`)
  const wa = `https://wa.me/${waNumber(b.telefoon)}?text=${encodeURIComponent(lines.join('\n'))}`
  const start = `${b.datum.replace(/-/g, '')}T${b.tijd.replace(':', '')}00`
  const dt = new Date(`${b.datum}T${b.tijd}`); dt.setHours(dt.getHours() + 1)
  const end = `${dt.getFullYear()}${pad(dt.getMonth() + 1)}${pad(dt.getDate())}T${pad(dt.getHours())}${pad(dt.getMinutes())}00`
  const ics = `/api/ics?summary=${encodeURIComponent('Taxi ' + b.naam + ' naar ' + b.bestemming)}&location=${encodeURIComponent(b.ophaal)}&start=${start}&end=${end}&desc=${encodeURIComponent('Telefoon: ' + b.telefoon + ' | Voertuig: ' + b.voertuig + ' | Prijs: ' + prijs + (b.opmerking ? ' | ' + b.opmerking : ''))}`
  return (
    <div className="bg-white border border-gray-100 rounded-3xl shadow-lg shadow-gray-100 p-5 sm:p-8">
      <div className="text-center mb-6">
        <div className="w-14 h-14 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none"><path d="M5 13l4 4L19 7" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Bedankt, {b.naam}!</h2>
        <p className="text-gray-500 text-sm mt-1">Je aanvraag is verzonden. Je ontvangt een bevestiging op {b.email}.</p>
      </div>
      <div className="bg-gray-50 rounded-2xl p-5 mb-6">
        <Row label="Van" value={b.ophaal} /><Row label="Naar" value={b.bestemming} />
        <Row label="Datum" value={`${b.datum} om ${b.tijd}`} /><Row label="Voertuig" value={b.voertuig} />
        <Row label="Personen" value={`${b.personen}`} />
        {b.retour && <Row label="Retour" value={String(b.retourtijd).replace('T', ' ')} />}
        {b.factuur && <Row label="Factuur" value="Ja" />}
        <Row label="Vaste prijs" value={prijs} />
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-3.5 rounded-xl transition-all text-sm">💬 WhatsApp klant</a>
        <a href={ics} className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold py-3.5 rounded-xl transition-all text-sm">📅 Zet in agenda</a>
      </div>
      <button onClick={onReset} className="w-full mt-4 text-gray-500 hover:text-amber-600 text-sm font-medium">Nieuwe rit boeken</button>
      <p className="text-center mt-3"><Link to="/" className="text-amber-600 text-sm">← Terug naar home</Link></p>
    </div>
  )
}
