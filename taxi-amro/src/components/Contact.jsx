export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Direct in contact
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Bel, app of mail ons — wij reageren snel en helpen u graag verder.
          </p>
        </div>

        <div className="space-y-4">
          <a href="tel:+31633721505"
            className="flex items-center gap-4 bg-white hover:bg-amber-50 border border-gray-200 hover:border-amber-300 rounded-2xl p-5 transition-colors group shadow-sm">
            <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">📞</div>
            <div>
              <div className="text-gray-500 text-sm">Bel ons</div>
              <div className="text-gray-900 font-semibold text-lg group-hover:text-amber-600 transition-colors">+31 6 33721505</div>
            </div>
          </a>

          <a href="https://wa.me/31633721505" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-2xl p-5 transition-colors group shadow-sm">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">💬</div>
            <div>
              <div className="text-gray-500 text-sm">WhatsApp</div>
              <div className="text-gray-900 font-semibold text-lg group-hover:text-green-600 transition-colors">Stuur een bericht</div>
            </div>
          </a>

          <a href="mailto:taxiamro@outlook.com"
            className="flex items-center gap-4 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-2xl p-5 transition-colors group shadow-sm">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">✉️</div>
            <div>
              <div className="text-gray-500 text-sm">E-mail</div>
              <div className="text-gray-900 font-semibold text-lg group-hover:text-blue-600 transition-colors">taxiamro@outlook.com</div>
            </div>
          </a>

          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: 220 }}>
            <iframe
              title="Groningen kaart"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37925.34890916774!2d6.522273636669637!3d53.21917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c83282ddf14e87%3A0x200827462e40e3ca!2sGroningen!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
