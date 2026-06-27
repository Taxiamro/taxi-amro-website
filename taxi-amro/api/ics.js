// Genereert een .ics agenda-bestand. Eén tik op iPhone opent Apple Calendar.
function esc(s) {
  return String(s == null ? '' : s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n')
}
export default function handler(req, res) {
  const q = req.query || {}
  const summary = q.summary || 'Taxirit'
  const location = q.location || ''
  const start = q.start || ''   // YYYYMMDDTHHMMSS
  const end = q.end || ''
  const desc = q.desc || ''
  const dtstamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Taxi Amro//Boeking//NL',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:' + Date.now() + '@taxiamro.nl',
    'DTSTAMP:' + dtstamp,
    'DTSTART:' + start,
    'DTEND:' + end,
    'SUMMARY:' + esc(summary),
    'LOCATION:' + esc(location),
    'DESCRIPTION:' + esc(desc),
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
  res.setHeader('Content-Type', 'text/calendar; charset=utf-8')
  res.setHeader('Content-Disposition', 'attachment; filename="taxirit.ics"')
  res.status(200).send(ics)
}
