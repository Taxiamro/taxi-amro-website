const reviews = [
  {
    name: 'Martijn V.',
    rating: 5,
    text: 'Erg vriendelijke chauffeur, ruime auto en precies op tijd voor mijn vlucht. Zeker aanrader!',
    date: 'Februari 2025',
  },
  {
    name: 'Sarah K.',
    rating: 5,
    text: 'Professionele service. De Hyundai Nexo is een geweldig rijdende auto. Stil en comfortabel. Kom zeker terug!',
    date: 'Maart 2025',
  },
  {
    name: 'Ahmed B.',
    rating: 4,
    text: 'Betrouwbare taxiservice in Groningen. Makkelijk boeken via WhatsApp en altijd stipt aanwezig.',
    date: 'April 2025',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">
            Beoordelingen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Wat klanten zeggen
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < 5 ? 'text-yellow-400 text-2xl' : 'text-gray-300 text-2xl'}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.7</span>
            <span className="text-gray-500">· 29 beoordelingen</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <Stars count={review.rating} />
              <p className="text-gray-700 mt-4 text-sm leading-relaxed">"{review.text}"</p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{review.date}</div>
                </div>
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold text-sm">
                  {review.name[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
