const features = [
  {
    icon: '⚡',
    title: '100% Elektrisch',
    desc: 'Wij rijden uitsluitend in de Hyundai Nexo. Schoon, stil en duurzaam. Goed voor u en het milieu.',
  },
  {
    icon: '🕐',
    title: 'Altijd op tijd',
    desc: 'Stipt ophalen en afzetten, ook voor vroege ochtendvluchten. U hoeft nooit te wachten.',
  },
  {
    icon: '🛡️',
    title: 'Veilig & betrouwbaar',
    desc: 'Professionele chauffeur met jarenlange ervaring. Uw veiligheid staat altijd voorop.',
  },
  {
    icon: '💳',
    title: 'Transparante prijs',
    desc: 'Geen verborgen kosten. U weet van tevoren precies wat u betaalt. Contant of per bank.',
  },
  {
    icon: '📱',
    title: 'Makkelijk boeken',
    desc: 'Boek snel via WhatsApp, telefoon of e-mail. Wij reageren snel en bevestigen direct.',
  },
  {
    icon: '🌍',
    title: '24/7 beschikbaar',
    desc: 'Ook op zon- en feestdagen beschikbaar. Dag en nacht klaar voor uw rit.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
            Waarom Taxi Amro
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Kwaliteit die u kunt voelen
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Een premium rijervaring die u telkens opnieuw kiest.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-reveal
              className={`fade-up stagger-${i + 1} bg-white border border-gray-100 rounded-2xl p-6 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-50 transition-all`}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
