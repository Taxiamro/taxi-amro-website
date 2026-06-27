import Seo from '../components/Seo'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import BookingWizard from '../components/BookingWizard'

export default function BoekenPage() {
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null
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
        <section className="py-8 px-4 sm:px-6">
          <BookingWizard prefillVan={params?.get('van') || ''} prefillNaar={params?.get('naar') || ''} />
        </section>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}
