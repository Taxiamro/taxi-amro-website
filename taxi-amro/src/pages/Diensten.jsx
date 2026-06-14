import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Services from '../components/Services'
import Seo from '../components/Seo'

export default function Diensten() {
  return (
    <>
      <Seo
        title="Onze diensten | Taxi Amro Noord-Nederland"
        description="Schiphol transfer, Eemshaven taxi, zakelijk vervoer, nachttaxi en grensoverschrijdende ritten naar Duitsland. 24/7 in Groningen, Friesland & Drenthe."
        canonical="/diensten"
      />
      <div className="min-h-screen bg-white">
        <Navbar blogMode />
        <main className="pt-16">
          <Services />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}
