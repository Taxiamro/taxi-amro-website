import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Pagina niet gevonden | Taxi Amro Noord-Nederland</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
        <div className="text-6xl mb-4">🚕</div>
        <h1 className="text-7xl font-bold text-amber-400 mb-2">404</h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Oeps, deze pagina bestaat niet</h2>
        <p className="text-gray-500 max-w-sm mb-8 text-sm leading-relaxed">
          De pagina die je zoekt is verplaatst of bestaat niet meer.
          Hieronder vind je waar je waarschijnlijk naar op zoek bent.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors">
            Home
          </Link>
          <Link to="/tarieven" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors">
            Tarieven
          </Link>
          <Link to="/blog" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors">
            Blog
          </Link>
          <a
            href="https://wa.me/31633721505"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-400 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
