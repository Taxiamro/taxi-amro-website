// Boeking: professionele bevestigingsmail naar de klant + melding naar de eigenaar (Resend).
// Mailen gebeurt alleen als RESEND_API_KEY is gezet; anders wordt de boeking geaccepteerd en toont de site de bevestiging.
const OWNER = 'taxiamro@outlook.com'
const FROM = process.env.RESEND_FROM || 'Taxi Amro <noreply@taxiamro.nl>'

function esc(s) { return String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c])) }
function waNumber(t) { let n = String(t || '').replace(/\D/g, ''); if (n.startsWith('0')) n = '31' + n.slice(1); return n }
function pad(n) { return String(n).padStart(2, '0') }

function shell(inner) {
  return `<!DOCTYPE html><html lang="nl"><body style="margin:0;background:#f3f4f6;padding:24px 12px;font-family:Arial,Helvetica,sans-serif;">` +
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">` +
    `<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 14px rgba(0,0,0,0.07);">` +
    `<tr><td style="background:#0f172a;padding:22px 32px;">` +
    `<span style="font-size:22px;font-weight:800;color:#ffffff;">Taxi</span><span style="font-size:22px;font-weight:800;color:#fbbf24;">Amro</span>` +
    `<div style="color:#94a3b8;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;margin-top:3px;">Taxichauffeur Groningen &middot; 24/7</div>` +
    `</td></tr><tr><td style="padding:30px 32px;">${inner}</td></tr>` +
    `<tr><td style="background:#f8fafc;padding:18px 32px;border-top:1px solid #eef2f7;color:#94a3b8;font-size:12px;line-height:1.6;">` +
    `Taxi Amro &middot; Groningen, Friesland en Drenthe<br>Bel of WhatsApp: +31 6 33721505 &middot; <a href="https://www.taxiamro.nl" style="color:#94a3b8;">taxiamro.nl</a>` +
    `</td></tr></table></td></tr></table></body></html>`
}
function detailRows(rows) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:6px 0;">` +
    rows.filter(Boolean).map(([k, v]) => `<tr><td style="padding:9px 0;color:#64748b;font-size:13px;border-bottom:1px solid #f1f5f9;">${esc(k)}</td><td style="padding:9px 0;color:#0f172a;font-size:13px;font-weight:600;text-align:right;border-bottom:1px solid #f1f5f9;">${esc(v)}</td></tr>`).join('') +
    `</table>`
}
function priceCard(prijs) {
  return `<div style="background:#0f172a;border-radius:12px;padding:18px;text-align:center;margin:18px 0;"><div style="color:#94a3b8;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;">Vaste prijs all-in</div><div style="color:#fbbf24;font-size:34px;font-weight:800;line-height:1.2;">${esc(prijs)}</div></div>`
}
async function sendEmail(key, payload) {
  try {
    const r = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
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
  if (!/^(\+31|0)\d{9}$/.test(String(b.telefoon).replace(/[\s-]/g, ''))) return res.status(400).json({ error: 'Ongeldig telefoonnummer' })
  // Datum niet in het verleden (backstop; de site checkt de exacte tijd in lokale tijd)
  const today = new Date(); today.setHours(0, 0, 0, 0)
  const d = new Date(`${b.datum}T00:00:00`)
  if (isNaN(d.getTime()) || d < today) return res.status(400).json({ error: 'Datum ligt in het verleden' })
  if (b.retour && b.retourtijd) {
    const rt = new Date(b.retourtijd), ot = new Date(`${b.datum}T${b.tijd}`)
    if (!isNaN(rt.getTime()) && !isNaN(ot.getTime()) && rt <= ot) return res.status(400).json({ error: 'Retourtijd moet na de heenrit liggen' })
  }

  const prijs = b.prijs != null && b.prijs !== '' ? ('€' + b.prijs) : 'op aanvraag'
  const voertuig = b.voertuig || 'Taxi'
  const retourStr = b.retour ? ('Ja, ophalen ' + String(b.retourtijd || '').replace('T', ' ')) : null
  const factuurStr = b.factuur ? 'Ja' : null

  const waText = `Hoi ${b.naam}, je taxirit is bevestigd bij Taxi Amro.\nDatum: ${b.datum} om ${b.tijd}\nVan: ${b.ophaal}\nNaar: ${b.bestemming}\nVoertuig: ${voertuig}\nPrijs: ${prijs} vaste prijs all-in` +
    (b.retour ? `\nRetour: ophalen ${String(b.retourtijd || '').replace('T', ' ')}` : '') +
    (b.factuur ? `\nFactuur: ja` : '') + `\nTot dan. Vragen? Bel of app 0633721505.`
  const wa = 'https://wa.me/' + waNumber(b.telefoon) + '?text=' + encodeURIComponent(waText)
  const icsStart = String(b.datum).replace(/-/g, '') + 'T' + String(b.tijd).replace(':', '') + '00'
  const dt = new Date(`${b.datum}T${b.tijd}`); dt.setHours(dt.getHours() + 1)
  const icsEnd = `${dt.getFullYear()}${pad(dt.getMonth() + 1)}${pad(dt.getDate())}T${pad(dt.getHours())}${pad(dt.getMinutes())}00`
  const ics = 'https://www.taxiamro.nl/api/ics?summary=' + encodeURIComponent('Taxi ' + b.naam + ' naar ' + b.bestemming) +
    '&location=' + encodeURIComponent(b.ophaal) + '&start=' + icsStart + '&end=' + icsEnd +
    '&desc=' + encodeURIComponent('Telefoon: ' + b.telefoon + ' | Voertuig: ' + voertuig + ' | Prijs: ' + prijs + (b.opmerking ? ' | ' + b.opmerking : ''))

  const rideRows = [['Van', b.ophaal], ['Naar', b.bestemming], ['Datum', `${b.datum} om ${b.tijd}`], ['Voertuig', voertuig], ['Personen', b.personen], retourStr && ['Retour', retourStr], factuurStr && ['Factuur', factuurStr]]

  const confirmSubject = 'Bevestiging van je taxirit bij Taxi Amro'
  const confirmBody = `Hoi ${b.naam},\n\nJe taxirit is bevestigd:\nDatum: ${b.datum} om ${b.tijd}\nVan: ${b.ophaal}\nNaar: ${b.bestemming}\nVoertuig: ${voertuig}\nPrijs: ${prijs} vaste prijs all-in`
    + (b.retour ? `\nRetour: ophalen ${String(b.retourtijd || '').replace('T', ' ')}` : '')
    + (b.factuur ? `\nFactuur: je ontvangt een factuur` : '')
    + `\n\nTot dan. Vragen? Bel of app 0633721505.\n\nGroet, Taxi Amro`
  const mailto = 'mailto:' + b.email + '?subject=' + encodeURIComponent(confirmSubject) + '&body=' + encodeURIComponent(confirmBody)

  const key = process.env.RESEND_API_KEY
  let emailed = false
  if (key) {
    const custInner = `<h1 style="margin:0 0 8px;font-size:20px;color:#0f172a;">Bedankt voor je boeking, ${esc(b.naam)}</h1>` +
      `<p style="margin:0;color:#475569;font-size:14px;line-height:1.6;">We hebben je aanvraag ontvangen en bevestigen zo snel mogelijk. Hieronder je ritgegevens.</p>` +
      priceCard(prijs) + detailRows(rideRows) +
      (b.opmerking ? `<p style="margin:14px 0 0;color:#475569;font-size:13px;"><b>Opmerking:</b> ${esc(b.opmerking)}</p>` : '') +
      `<p style="margin:20px 0 0;color:#475569;font-size:13px;line-height:1.6;">Vragen of iets wijzigen? Bel of app <a href="tel:+31633721505" style="color:#d97706;font-weight:bold;">+31 6 33721505</a>. We zien je graag.</p>`
    const btn = (href, bg, col, txt) => `<a href="${href}" style="background:${bg};color:${col};padding:12px 22px;border-radius:10px;text-decoration:none;font-weight:bold;font-size:14px;display:inline-block;margin:0 8px 8px 0;">${txt}</a>`
    const ownerBtns = `<div style="margin:20px 0 4px;">` + btn(mailto, '#fbbf24', '#0f172a', 'Bevestig per e-mail') + btn(wa, '#22c55e', '#ffffff', 'WhatsApp klant') + btn(ics, '#0f172a', '#ffffff', 'Zet in agenda') + `</div>`
    const ownerInner = `<h1 style="margin:0 0 8px;font-size:20px;color:#0f172a;">Nieuwe boeking</h1>` +
      `<p style="margin:0;color:#475569;font-size:14px;">Van ${esc(b.naam)} &middot; ${esc(b.telefoon)} &middot; ${esc(b.email)}</p>` +
      priceCard(prijs) + detailRows(rideRows) +
      (b.opmerking ? `<p style="margin:14px 0 0;color:#475569;font-size:13px;"><b>Opmerking:</b> ${esc(b.opmerking)}</p>` : '') + ownerBtns
    const a = await sendEmail(key, { from: FROM, to: [OWNER], reply_to: b.email, subject: `Nieuwe boeking: ${b.naam} naar ${b.bestemming} (${b.datum} ${b.tijd})`, html: shell(ownerInner) })
    const c = await sendEmail(key, { from: FROM, to: [b.email], reply_to: OWNER, subject: 'Bevestiging: je taxirit bij Taxi Amro', html: shell(custInner) })
    emailed = a && c
  }
  return res.status(200).json({ ok: true, emailed })
}
