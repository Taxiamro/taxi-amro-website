import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts, categories } from '../data/blogPosts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Seo from '../components/Seo'
import { useScrollRevealAll } from '../hooks/useScrollReveal'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })
}

const CATEGORY_STYLES = {
  'Luchthaven': { bg: 'from-blue-600 to-blue-400',    icon: '✈️', pattern: '#3b82f6' },
  'Prijzen':    { bg: 'from-amber-500 to-yellow-400',  icon: '💶', pattern: '#f59e0b' },
  'Eemshaven':  { bg: 'from-teal-600 to-emerald-400',  icon: '⚓', pattern: '#10b981' },
  'Zakelijk':   { bg: 'from-slate-700 to-slate-500',   icon: '💼', pattern: '#64748b' },
  'Tips':       { bg: 'from-purple-600 to-violet-400', icon: '💡', pattern: '#7c3aed' },
  'Evenementen':{ bg: 'from-pink-600 to-rose-400',     icon: '🎉', pattern: '#e11d48' },
  'Groningen':  { bg: 'from-green-600 to-lime-400',    icon: '🏙️', pattern: '#16a34a' },
  'Duitsland':  { bg: 'from-gray-700 to-gray-500',     icon: '🇩🇪', pattern: '#374151' },
}

function BlogCard({ post }) {
  const style = CATEGORY_STYLES[post.category] || { bg: 'from-gray-600 to-gray-400', icon: '📰', pattern: '#6b7280' }
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
      {/* Gradient header — geen lage-kwaliteit afbeeldingen */}
      <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden" style={{ height: 180 }}>
        <div className={`w-full h-full bg-gradient-to-br ${style.bg} flex items-center justify-center relative`}>
          {/* Decoratieve cirkels */}
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20" style={{ background: 'white', transform: 'translate(30%, -30%)' }} />
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-10" style={{ background: 'white', transform: 'translate(-30%, 30%)' }} />
          {/* Emoji icoon */}
          <span className="text-6xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10 select-none">
            {post.emoji || style.icon}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur text-gray-800 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
            {post.category}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/20 to-transparent" />
      </Link>
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
        <Link to={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-amber-600 font-semibold text-sm hover:gap-2 transition-all">
          Lees meer
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

export default function BlogPage() {
  useScrollRevealAll()
  const [activeCategory, setActiveCategory] = useState('Alle')
  const [search, setSearch] = useState('')
  const [visibleCount, setVisibleCount] = useState(6)

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchCat = activeCategory === 'Alle' || post.category === activeCategory
      const q = search.toLowerCase()
      const matchSearch = !q || post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.keywords.some((k) => k.toLowerCase().includes(q))
      return matchCat && matchSearch
    })
  }, [activeCategory, search])

  const visible = filtered.slice(0, visibleCount)

  return (
    <>
      <Seo
        title="Taxi Blog | Prijzen, Routes en Tips | Taxi Amro Groningen"
        description="Alles over taxivervoer in Noord-Nederland. Wat kost een taxi naar Schiphol? Hoe lang duurt de rit naar Eemshaven? Tips en vaste prijzen van Taxi Amro."
        canonical="/blog"
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-1/4 w-72 h-72 bg-amber-500 rounded-full opacity-10 blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-56 h-56 bg-blue-500 rounded-full opacity-10 blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link to="/" className="inline-flex items-center gap-1.5 text-gray-400 hover:text-amber-400 text-sm mb-6 transition-colors">
              ← Terug naar home
            </Link>
            <div data-reveal className="fade-in">
              <span className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider border border-amber-400/30">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                Taxi Blog
              </span>
            </div>
            <h1 data-reveal className="fade-up stagger-1 text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Tips, prijzen & routes<br className="hidden md:block" /> in Noord-Nederland
            </h1>
            <p data-reveal className="fade-up stagger-2 text-gray-400 max-w-xl mx-auto text-lg">
              Alles over taxivervoer: van luchthaventrips tot grensoverschrijdend vervoer. Vragen?{' '}
              <a href="tel:+31633721505" className="text-amber-400 font-semibold hover:underline">Bel +31 6 33721505</a>.
            </p>
          </div>
        </section>

        {/* Sticky filters */}
        <section className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button key={cat} onClick={() => { setActiveCategory(cat); setVisibleCount(6) }}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-amber-400 text-gray-900 shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-amber-50 hover:text-amber-700'
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Zoek in blog..." value={search}
                onChange={(e) => { setSearch(e.target.value); setVisibleCount(6) }}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />
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
              {visible.map((post) => <BlogCard key={post.slug} post={post} />)}
            </div>
          )}
          {filtered.length > visibleCount && (
            <div className="text-center mt-10">
              <button onClick={() => setVisibleCount((v) => v + 6)}
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold px-8 py-3 rounded-xl transition-all hover:scale-105 shadow-sm">
                Meer laden ({filtered.length - visibleCount} over)
              </button>
            </div>
          )}
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-gray-900">
          <div data-reveal className="fade-up max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Klaar om te boeken?</h2>
            <p className="text-gray-400 mb-8">Bel ons direct of stuur een WhatsApp voor een vaste prijs.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/31633721505" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-7 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-amber-900/30 text-sm">
                💬 Boek via WhatsApp
              </a>
              <Link to="/tarieven"
                 className="inline-flex items-center gap-2 border border-gray-600 hover:border-amber-400 text-gray-300 hover:text-amber-400 font-semibold px-7 py-3.5 rounded-xl transition-all text-sm">
                Bekijk tarieven →
              </Link>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}
