import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts, categories } from '../data/blogPosts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Seo from '../components/Seo'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Alle')
  const [search, setSearch] = useState('')
  const [visibleCount, setVisibleCount] = useState(6)

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchCat = activeCategory === 'Alle' || post.category === activeCategory
      const q = search.toLowerCase()
      const matchSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.keywords.some((k) => k.toLowerCase().includes(q))
      return matchCat && matchSearch
    })
  }, [activeCategory, search])

  const visible = filtered.slice(0, visibleCount)

  return (
    <>
      <Seo
        title="Taxi Blog | Tips, prijzen & routes in Noord-Nederland"
        description="Reisinformatie voor taxi naar Schiphol, Eemshaven, Groningen Airport en meer. Prijzen, reistijden en tips van Taxi Amro."
        canonical="/blog"
      />
      <Navbar blogMode />
      <main className="pt-16 min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gray-900 text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-2">Taxi blog</p>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Taxi blog — tips, prijzen en informatie</h1>
            <p className="text-gray-300 max-w-2xl text-base leading-relaxed">
              Alles over taxivervoer in Noord-Nederland: van luchthaventrips tot grensoverschrijdend vervoer.
              Vragen? Bel direct{' '}
              <a href="tel:+31633721505" className="text-amber-400 font-semibold hover:underline">
                +31 6 33721505
              </a>
              .
            </p>
          </div>
        </section>

        {/* Filters + Search */}
        <section className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setVisibleCount(6) }}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-amber-400 text-gray-900 shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-amber-50 hover:text-amber-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Search */}
            <div className="relative w-full sm:w-64">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Zoek in blog..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setVisibleCount(6) }}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
              />
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          {visible.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-xl mb-2">Geen blogs gevonden</p>
              <p className="text-sm">Probeer een andere categorie of zoekterm</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {/* Load more */}
          {filtered.length > visibleCount && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((v) => v + 6)}
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold px-8 py-3 rounded-xl transition-colors shadow-sm"
              >
                Meer laden ({filtered.length - visibleCount} over)
              </button>
            </div>
          )}
        </section>

        {/* CTA Banner */}
        <section className="bg-amber-400 py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Klaar om te boeken?</h2>
            <p className="text-gray-800 mb-6">Bel ons direct of stuur een WhatsApp bericht voor een vaste prijs.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+31633721505"
                className="flex items-center justify-center gap-2 bg-gray-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +31 6 33721505
              </a>
              <a
                href="https://wa.me/31633721505"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Boek via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

function BlogCard({ post }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col">
      {/* Image */}
      <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden" style={{ height: 200 }}>
        <img
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-amber-400 text-gray-900 text-xs font-bold px-2.5 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime} lezen</span>
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h2 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-amber-600 font-semibold text-sm hover:gap-2 transition-all"
        >
          Lees meer
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })
}
