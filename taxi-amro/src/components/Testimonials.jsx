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

        {/* Review CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">Tevreden over uw rit? Laat een review achter op Google.</p>
          <a
            href="https://g.page/r/CdjYeiWETNmqEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-amber-400 hover:bg-amber-50 text-gray-900 font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-sm text-sm"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#fbbf24" stroke="#fbbf24" strokeWidth="1" strokeLinejoin="round"/>
            </svg>
            Schrijf een Google review
          </a>
          <p className="text-gray-400 text-xs mt-3">Het duurt minder dan 1 minuut en helpt ons enorm.</p>
        </div>
      </div>
    </section>
  )
}
