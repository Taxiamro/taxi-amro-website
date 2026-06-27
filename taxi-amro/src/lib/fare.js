// Gedeelde prijslogica: 1 bron van waarheid voor alle calculators en het boekingsformulier.
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
export const hasMapsKey = !!API_KEY && API_KEY !== 'YOUR_API_KEY_HERE'

export const PRICING = {
  startTarief: 4.31,
  prijsPerKm: 3.17,
  minimumPrijs: 15.00,
}

export function getDiscount(km) {
  if (km > 100) return { pct: 0.25, label: '25% korting (>100 km)' }
  if (km >= 40)  return { pct: 0.20, label: '20% korting (40 tot 100 km)' }
  if (km >= 25)  return { pct: 0.15, label: '15% korting (>25 km)' }
  return { pct: 0, label: null }
}

// Bereken de vaste prijs uit de afstand. Retour = extra 10% korting (zelfde logica als de calculators).
export function computeFare(km, { retour = false } = {}) {
  const rawPrice = Math.max(PRICING.minimumPrijs, PRICING.startTarief + km * PRICING.prijsPerKm)
  const disc = getDiscount(km)
  const discountedPrice = Math.round(rawPrice * (1 - disc.pct))
  const finalPrice = retour ? Math.round(discountedPrice * 0.9) : discountedPrice
  return { rawPrice: Math.round(rawPrice), discountedPrice, finalPrice, discount: disc }
}

export function loadGoogleMaps() {
  return new Promise((resolve, reject) => {
    if (window.google?.maps?.places) return resolve(window.google)
    const existing = document.getElementById('gmap-script')
    if (existing) {
      const t = setInterval(() => {
        if (window.google?.maps?.places) { clearInterval(t); resolve(window.google) }
      }, 100)
      return
    }
    const s = document.createElement('script')
    s.id = 'gmap-script'
    s.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`
    s.async = true
    s.onload = () => resolve(window.google)
    s.onerror = reject
    document.head.appendChild(s)
  })
}

// Afstand + reistijd via Google Distance Matrix.
export function getDistanceKm(origin, dest) {
  return new Promise((resolve, reject) => {
    loadGoogleMaps().then((google) => {
      const svc = new google.maps.DistanceMatrixService()
      svc.getDistanceMatrix(
        { origins: [origin], destinations: [dest], travelMode: google.maps.TravelMode.DRIVING, unitSystem: google.maps.UnitSystem.METRIC },
        (res, status) => {
          if (status !== 'OK') return reject(new Error('distance status ' + status))
          const el = res.rows?.[0]?.elements?.[0]
          if (el?.status !== 'OK') return reject(new Error('element status'))
          resolve({
            km: el.distance.value / 1000,
            distText: el.distance.text,
            durText: el.duration.text,
            origin: res.originAddresses[0],
            dest: res.destinationAddresses[0],
          })
        }
      )
    }).catch(reject)
  })
}
