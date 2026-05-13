import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-6xl font-bold text-yellow-400 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">Pagina niet gevonden</p>
      <Link
        to="/"
        className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
      >
        Terug naar home
      </Link>
    </div>
  )
}
