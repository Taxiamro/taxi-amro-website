// Boeking: stuurt klant een bevestiging en de eigenaar een melding (via Resend).
// Werkt pas e-mailen zodra RESEND_API_KEY is ingesteld; tot die tijd wordt de boeking
// geaccepteerd en toont de site de bevestiging (flow blijft werken).
const OWNER = 'taxiamro@outlook.com'
const FROM = process.env.RESEND_FROM || 'Taxi Amro <noreply@taxiamro.nl>'

function esc(s) { return String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c])) }
function waNumber(t) { let n = String(t || '').replace(/\D/g, ''); if (n.startsWith('0')) n = '31' + n.slice(1); return n }
function pad(n) { return String(n).padStart(2, '0') }

async function sendEmail(key, payload) {
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    return r.ok
  } catch { return false }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  let b = req.body
  if (typeof b === 'string') { try { b = JSON.parse(b) } catch { b = {} } }
  b = b || {}

  const required = ['naam', 'telefoon', 'email', 'ophaal', 'bestemming', 'datum', 'tijd']
  for (const k of required) { if (!b[k]) return res.status(400).json({ error: 'Ontbrekend veld: ' + k }) }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email)) return res.status(400).json({ error: 'Ongeldig e-mailadres' })

  const prijs = b.prijs != null && b.prijs !== '' ? ('€' + b.prijs) : 'op aanvraag'
  const retourTxt = b.retour ? ('Ja, retour ophalen ' + String(b.retourtijd || '').replace('T', ' ')) : 'Nee'
  const factuurTxt = b.factuur ? 'Ja' : 'Nee'

  const waText =
    `Hoi ${b.naam}, je taxirit is bevestigd bij Taxi Amro.\n` +
    `Datum: ${b.datum} om ${b.tijd}\nVan: ${b.ophaal}\nNaar: ${b.bestemming}\n` +
    `Prijs: ${prijs} vaste prijs all-in` +
    (b.retour ? `\nRetour: ophalen ${String(b.retourtijd || '').replace('T', ' ')}` : '') +
    (b.factuur ? `\nFactuur: ja` : '') +
    `\nTot dan. Vragen? Bel of app 0633721505.`
  const wa = 'https://wa.me/' + waNumber(b.telefoon) + '?text=' + encodeURIComponent(waText)

  const icsStart = String(b.datum).replace(/-/g, '') + 'T' + String(b.tijd).replace(':', '') + '00'
  const dt = new Date(`${b.datum}T${b.tijd}`); dt.setHours(dt.getHours() + 1)
  const icsEnd = `${dt.getFullYear()}${pad(dt.getMonth() + 1)}${pad(dt.getDate())}T${pad(dt.getHours())}${pad(dt.getMinutes())}00`
  const ics = 'https://www.taxiamro.nl/api/ics?summary=' + encodeURIComponent('Taxi ' + b.naam + ' naar ' + b.bestemming) +
    '&location=' + encodeURIComponent(b.ophaal) + '&start=' + icsStart + '&end=' + icsEnd +
    '&desc=' + encodeURIComponent('Telefoon: ' + b.telefoon + ' | Prijs: ' + prijs + (b.opmerking ? ' | ' + b.opmerking : ''))

  const key = process.env.RESEND_API_KEY
  let emailed = false
  if (key) {
    const ownerHtml =
      `<h2 style="font-family:Arial,sans-serif">Nieuwe boeking</h2>` +
      `<p style="font-family:Arial,sans-serif"><b>Naam:</b> ${esc(b.naam)}<br><b>Telefoon:</b> ${esc(b.telefoon)}<br><b>E-mail:</b> ${esc(b.email)}</p>` +
      `<p style="font-family:Arial,sans-serif"><b>Van:</b> ${esc(b.ophaal)}<br><b>Naar:</b> ${esc(b.bestemming)}<br><b>Datum:</b> ${esc(b.datum)} om ${esc(b.tijd)}<br><b>Personen:</b> ${esc(b.personen)}<br><b>Retour:</b> ${esc(retourTxt)}<br><b>Factuur:</b> ${esc(factuurTxt)}<br><b>Prijs:</b> ${esc(prijs)}</p>` +
      `<p style="font-family:Arial,sans-serif"><b>Opmerking:</b> ${esc(b.opmerking || '-')}</p>` +
      `<p><a href="${wa}" style="background:#22c55e;color:#fff;padding:11px 18px;border-radius:8px;text-decoration:none;font-family:Arial,sans-serif;font-weight:bold">WhatsApp klant</a>` +
      `&nbsp;&nbsp;<a href="${ics}" style="background:#111827;color:#fff;padding:11px 18px;border-radius:8px;text-decoration:none;font-family:Arial,sans-serif;font-weight:bold">Zet in agenda</a></p>`
    const custHtml =
      `<p style="font-family:Arial,sans-serif">Hoi ${esc(b.naam)},</p>` +
      `<p style="font-family:Arial,sans-serif">Bedankt voor je boeking bij Taxi Amro. We hebben je aanvraag ontvangen en bevestigen zo snel mogelijk.</p>` +
      `<p style="font-family:Arial,sans-serif"><b>Je rit</b><br>Van: ${esc(b.ophaal)}<br>Naar: ${esc(b.bestemming)}<br>Datum: ${esc(b.datum)} om ${esc(b.tijd)}<br>Personen: ${esc(b.personen)}<br>Prijs: ${esc(prijs)} vaste prijs all-in` +
      (b.retour ? `<br>Retour: ophalen ${esc(String(b.retourtijd || '').replace('T', ' '))}` : '') + `</p>` +
      `<p style="font-family:Arial,sans-serif">Vragen of wijzigingen? Bel of app 0633721505.</p>` +
      `<p style="font-family:Arial,sans-serif">Groet, Taxi Amro</p>`
    const a = await sendEmail(key, { from: FROM, to: [OWNER], reply_to: b.email, subject: `Nieuwe boeking: ${b.naam} naar ${b.bestemming} (${b.datum} ${b.tijd})`, html: ownerHtml })
    const c = await sendEmail(key, { from: FROM, to: [b.email], subject: 'Je taxirit bij Taxi Amro is ontvangen', html: custHtml })
    emailed = a && c
  }
  return res.status(200).json({ ok: true, emailed })
}
