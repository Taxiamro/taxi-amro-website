import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import { computeFare, getDistanceKm, loadGoogleMaps, hasMapsKey } from '../lib/fare'

const TEL = '+31633721505'

function useAutocomplete(ref) {
  useEffect(() => {
    if (!ref.current || !hasMapsKey) return
    let ac
    loadGoogleMaps().then((google) => {
      ac = new google.maps.places.Autocomplete(ref.current, { types: ['geocode'], componentRestrictions: { country: 'nl' } })
    })
    return () => { if (ac) window.google?.maps?.event?.clearInstanceListeners(ac) }
  }, [ref])
}

const validEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
const validNL = (t) => /^(\+31|0)\d{9}$/.test(String(t).replace(/[\s-]/g, ''))
const pad = (n) => String(n).padStart(2, '0')
function waNumber(t) { let n = String(t || '').replace(/\D/g, ''); if (n.startsWith('0')) n = '31' + n.slice(1); return n }

const empty = { naam: '', telefoon: '', email: '', datum: '', tijd: '', personen: 1, retour: false, retourtijd: '', factuur: false, opmerking: '' }

const fieldCls = 'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors'
const labelCls = 'text-gray-600 text-xs font-semibold uppercase tracking-wide block mb-1.5'

export default function BoekenPage() {
  const [form, setForm] = useState(empty)
  const [fare, setFare] = useState(null)
  const [calc, setCalc] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(null)
  const ophaalRef = useRef(null)
  const bestRef = useRef(null)
  useAutocomplete(ophaalRef)
  useAutocomplete(bestRef)

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  // Prijs herberekenen wanneer retour aan/uit gaat (zelfde km, geen nieuwe lookup)
  useEffect(() => {
    setFare((prev) => (prev && prev.km != null ? { ...prev, ...computeFare(prev.km, { retour: form.retour }) } : prev))
  }, [form.retour])

  const computeNow = useCallback(async () => {
    const o = ophaalRef.current?.value?.trim()
    const d = bestRef.current?.value?.trim()
    if (!o || !d || !hasMapsKey) return null
    setCalc(true)
    try {
      const r = await getDistanceKm(o, d)
      const merged = { ...r, ...computeFare(r.km, { retour: form.retour }) }
      setFare(merged)
      return merged
    } catch {
      setFare(null)
      return null
    } finally {
      setCalc(false)
    }
  }, [form.retour])

  function validate() {
    const e = {}
    if (!form.naam.trim()) e.naam = 'Vul je naam in'
    if (!validNL(form.telefoon)) e.telefoon = 'Geldig NL nummer, bijv. 0612345678'
    if (!validEmail(form.email)) e.email = 'Geldig e-mailadres'
    if (!ophaalRef.current?.value?.trim()) e.ophaal = 'Vul het ophaaladres in'
    if (!bestRef.current?.value?.trim()) e.bestemming = 'Vul de bestemming in'
    if (!form.datum || !form.tijd) e.datum = 'Kies datum en tijd'
    else if (new Date(`${form.datum}T${form.tijd}`) <= new Date()) e.datum = 'Datum en tijd moeten in de toekomst liggen'
    if (form.retour && !form.retourtijd) e.retourtijd = 'Vul de retour ophaaltijd in'
    return e
  }

  async function submit(ev) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    let f = fare
    if (!f) f = await computeNow()
    const payload = {
      ...form,
      ophaal: ophaalRef.current.value.trim(),
      bestemming: bestRef.current.value.trim(),
      prijs: f?.finalPrice ?? '',
      km: f?.km != null ? Number(f.km.toFixed(1)) : '',
    }
    setSubmitting(true)
    try {
      await fetch('/api/booking', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    } catch { /* boeking lokaal tonen, ook als mail later komt */ }
    setSubmitting(false)
    setDone(payload)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // ---- Bevestiging: WhatsApp-klant + agenda ----
  function confirmLinks(b) {
    const prijs = b.prijs ? `€${b.prijs}` : 'op aanvraag'
    const lines = [
      `Hoi ${b.naam}, je taxirit is bevestigd bij Taxi Amro.`,
      `Datum: ${b.datum} om ${b.tijd}`,
      `Van: ${b.ophaal}`,
      `Naar: ${b.bestemming}`,
      `Personen: ${b.personen}`,
      `Prijs: ${prijs} vaste prijs all-in`,
    ]
    if (b.retour) lines.push(`Retour: ophalen ${String(b.retourtijd).replace('T', ' ')}`)
    if (b.factuur) lines.push('Factuur: ja, je ontvangt een factuur')
    lines.push(`Tot dan. Vragen? Bel of app ${TEL}.`)
    const wa = `https://wa.me/${waNumber(b.telefoon)}?text=${encodeURIComponent(lines.join('\n'))}`
    const start = `${b.datum.replace(/-/g, '')}T${b.tijd.replace(':', '')}00`
    const dt = new Date(`${b.datum}T${b.tijd}`); dt.setHours(dt.getHours() + 1)
    const end = `${dt.getFullYear()}${pad(dt.getMonth() + 1)}${pad(dt.getDate())}T${pad(dt.getHours())}${pad(dt.getMinutes())}00`
    const desc = `Telefoon: ${b.telefoon} | Prijs: ${prijs}${b.opmerking ? ' | ' + b.opmerking : ''}`
    const ics = `/api/ics?summary=${encodeURIComponent('Taxi ' + b.naam + ' naar ' + b.bestemming)}&location=${encodeURIComponent(b.ophaal)}&start=${start}&end=${end}&desc=${encodeURIComponent(desc)}`
    return { wa, ics }
  }

  return (
    <>
      <Seo
        title="Taxi boeken in Groningen | Direct online | Taxi Amro"
        description="Boek je taxi in Groningen direct online. Bereken je vaste prijs, kies datum en tijd, ook retour. Bevestiging per e-mail. 24/7 beschikbaar."
        canonical="/boeken"
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        <section className="relative pt-28 pb-10 bg-gradient-to-br from-amber-50 via-white to-blue-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Taxi boeken</h1>
            <p className="text-gray-500 text-base max-w-xl mx-auto">Vul je rit in, bereken je vaste prijs en boek direct. Je ontvangt een bevestiging per e-mail.</p>
          </div>
        </section>

        <section className="py-10 max-w-3xl mx-auto px-4 sm:px-6">
          {done ? (
            <Confirmation b={done} links={confirmLinks(done)} onReset={() => { setDone(null); setForm(empty); setFare(null); if (ophaalRef.current) ophaalRef.current.value = ''; if (bestRef.current) bestRef.current.value = '' }} />
          ) : (
            <form onSubmit={submit} className="bg-white border border-gray-100 rounded-3xl shadow-lg shadow-gray-100 p-5 sm:p-8 space-y-5">
              {!hasMapsKey && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-amber-800 text-xs">Prijsberekening vereist de Google Maps sleutel. Je kunt wel boeken; wij berekenen de vaste prijs en bevestigen per e-mail.</div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Naam</label>
                  <input className={fieldCls} value={form.naam} onChange={(e) => set('naam', e.target.value)} placeholder="Voor- en achternaam" />
                  {errors.naam && <p className="text-red-500 text-xs mt-1">{errors.naam}</p>}
                </div>
                <div>
                  <label className={labelCls}>Telefoon</label>
                  <input className={fieldCls} value={form.telefoon} onChange={(e) => set('telefoon', e.target.value)} placeholder="0612345678" inputMode="tel" />
                  {errors.telefoon && <p className="text-red-500 text-xs mt-1">{errors.telefoon}</p>}
                </div>
              </div>

              <div>
                <label className={labelCls}>E-mail</label>
                <input className={fieldCls} value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="naam@email.nl" inputMode="email" />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className={labelCls}>Ophaaladres</label>
                <input ref={ophaalRef} className={fieldCls} placeholder="bijv. Grote Markt, Groningen" onBlur={computeNow} />
                {errors.ophaal && <p className="text-red-500 text-xs mt-1">{errors.ophaal}</p>}
              </div>
              <div>
                <label className={labelCls}>Bestemming</label>
                <input ref={bestRef} className={fieldCls} placeholder="bijv. Groningen Airport Eelde" onBlur={computeNow} />
                {errors.bestemming && <p className="text-red-500 text-xs mt-1">{errors.bestemming}</p>}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <label className={labelCls}>Datum</label>
                  <input type="date" className={fieldCls} value={form.datum} onChange={(e) => set('datum', e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Tijd</label>
                  <input type="time" className={fieldCls} value={form.tijd} onChange={(e) => set('tijd', e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Personen</label>
                  <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5">
                    <button type="button" onClick={() => set('personen', Math.max(1, form.personen - 1))} className="w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 font-bold">−</button>
                    <span className="font-semibold text-gray-900 text-sm">{form.personen}p</span>
                    <button type="button" onClick={() => set('personen', Math.min(4, form.personen + 1))} className="w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 font-bold">+</button>
                  </div>
                </div>
              </div>
              {errors.datum && <p className="text-red-500 text-xs -mt-2">{errors.datum}</p>}

              {/* Retour + factuur */}
              <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={() => set('retour', !form.retour)} className={`flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-sm font-semibold border transition-all ${form.retour ? 'bg-green-50 border-green-400 text-green-700' : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-amber-300'}`}>
                  🔄 Retour rit (10% korting) {form.retour && '✓'}
                </button>
                <button type="button" onClick={() => set('factuur', !form.factuur)} className={`flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-sm font-semibold border transition-all ${form.factuur ? 'bg-blue-50 border-blue-400 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-amber-300'}`}>
                  💼 Zakelijk / factuur {form.factuur && '✓'}
                </button>
              </div>

              {form.retour && (
                <div>
                  <label className={labelCls}>Retour ophaaltijd</label>
                  <input type="datetime-local" className={fieldCls} value={form.retourtijd} onChange={(e) => set('retourtijd', e.target.value)} />
                  {errors.retourtijd && <p className="text-red-500 text-xs mt-1">{errors.retourtijd}</p>}
                </div>
              )}

              <div>
                <label className={labelCls}>Opmerking (optioneel)</label>
                <textarea className={fieldCls} rows={3} value={form.opmerking} onChange={(e) => set('opmerking', e.target.value)} placeholder="Bijv. veel bagage, kinderzitje, vluchtnummer" />
              </div>

              {/* Live prijs */}
              <div className="bg-gray-900 rounded-2xl p-5 text-center">
                {calc ? (
                  <p className="text-gray-300 text-sm">Prijs berekenen...</p>
                ) : fare ? (
                  <>
                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Vaste ritprijs</p>
                    <div className="flex items-end justify-center gap-2">
                      {(fare.discount.pct > 0 || form.retour) && <span className="text-gray-500 line-through text-lg">€{fare.rawPrice}</span>}
                      <span className="text-amber-400 font-bold text-4xl">€{fare.finalPrice}</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">Afstand: {fare.km.toFixed(1).replace('.', ',')} km {form.retour && '· incl. 10% retour korting'}</p>
                  </>
                ) : (
                  <button type="button" onClick={computeNow} className="text-amber-400 font-semibold text-sm underline">Bereken mijn vaste prijs</button>
                )}
              </div>

              <button type="submit" disabled={submitting} className="w-full bg-amber-400 hover:bg-amber-300 disabled:bg-gray-200 text-gray-900 font-bold py-4 rounded-xl transition-all hover:scale-[1.01] shadow-md shadow-amber-200 text-sm">
                {submitting ? 'Versturen...' : 'Verstuur boeking'}
              </button>
              <p className="text-center text-xs text-gray-400">Liever bellen? <a href={`tel:${TEL}`} className="text-amber-600 font-medium">+31 6 33721505</a></p>
            </form>
          )}
        </section>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-4 py-2 border-b border-gray-100 text-sm">
      <span className="text-gray-400">{label}</span>
      <span className="text-gray-800 font-medium text-right">{value}</span>
    </div>
  )
}

function Confirmation({ b, links, onReset }) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl shadow-lg shadow-gray-100 p-5 sm:p-8">
      <div className="text-center mb-6">
        <div className="w-14 h-14 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none"><path d="M5 13l4 4L19 7" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Bedankt, {b.naam}!</h2>
        <p className="text-gray-500 text-sm mt-1">Je aanvraag is verzonden. Je ontvangt een bevestiging per e-mail op {b.email}.</p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-5 mb-6">
        <Row label="Van" value={b.ophaal} />
        <Row label="Naar" value={b.bestemming} />
        <Row label="Datum" value={`${b.datum} om ${b.tijd}`} />
        <Row label="Personen" value={`${b.personen}`} />
        {b.retour && <Row label="Retour" value={String(b.retourtijd).replace('T', ' ')} />}
        {b.factuur && <Row label="Factuur" value="Ja" />}
        <Row label="Vaste prijs" value={b.prijs ? `€${b.prijs}` : 'op aanvraag'} />
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <a href={links.wa} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-3.5 rounded-xl transition-all text-sm">
          💬 WhatsApp klant
        </a>
        <a href={links.ics} className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold py-3.5 rounded-xl transition-all text-sm">
          📅 Zet in agenda
        </a>
      </div>

      <button onClick={onReset} className="w-full mt-4 text-gray-500 hover:text-amber-600 text-sm font-medium">Nieuwe rit boeken</button>
      <p className="text-center mt-3"><Link to="/" className="text-amber-600 text-sm">← Terug naar home</Link></p>
    </div>
  )
}
