import { useParams, Link, Navigate } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3)
  const fallbackRelated = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)
  const relatedPosts = related.length >= 2 ? related : fallbackRelated

  const pageUrl = `https://www.taxiamro.nl/blog/${post.slug}`

  function share(platform) {
    const encodedUrl = encodeURIComponent(pageUrl)
    const encodedTitle = encodeURIComponent(post.title)
    if (platform === 'whatsapp') window.open(`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`, '_blank')
    if (platform === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank')
    if (platform === 'copy') {
      navigator.clipboard.writeText(pageUrl).then(() => alert('Link gekopieerd!'))
    }
  }

  return (
    <>
      {/* SEO meta via helmet-style side effect — using document directly for SPA */}
      <DocumentMeta post={post} />
      <Navbar blogMode />
      <main className="pt-16 min-h-screen bg-white">
        {/* Hero image */}
        <div className="relative w-full overflow-hidden" style={{ height: 400 }}>
          <img
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />
          {/* Breadcrumb overlay */}
          <div className="absolute top-4 left-4 right-4">
            <nav className="flex items-center gap-2 text-sm text-white/80">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-white font-medium line-clamp-1">{post.title}</span>
            </nav>
          </div>
          {/* Category badge */}
          <div className="absolute bottom-6 left-4 sm:left-8">
            <span className="bg-amber-400 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        {/* Article content */}
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
          {/* Main column */}
          <article>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-5">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-100">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime} lezen
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {post.author}
              </span>
            </div>

            {/* Body */}
            <div
              className="prose-blog"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Social share */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="text-sm font-semibold text-gray-700 mb-3">Deel dit artikel:</p>
              <div className="flex gap-3">
                <button
                  onClick={() => share('whatsapp')}
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </button>
                <button
                  onClick={() => share('facebook')}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </button>
                <button
                  onClick={() => share('copy')}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Kopiëren
                </button>
              </div>
            </div>

            {/* CTA Box */}
            <div className="mt-10 bg-amber-400 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Klaar om te boeken?</h3>
              <p className="text-gray-800 mb-5 text-sm leading-relaxed">
                Bel ons voor een vaste prijs, of stuur een WhatsApp bericht. Wij bevestigen binnen 15 minuten.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+31633721505"
                  className="flex items-center justify-center gap-2 bg-gray-900 text-white font-bold px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Bel direct +31 6 33721505
                </a>
                <a
                  href="https://wa.me/31633721505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-5 py-3 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 text-sm"
                >
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Boek via WhatsApp
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              {/* Sticky CTA */}
              <div className="bg-gray-900 text-white rounded-2xl p-5 mb-6">
                <p className="font-bold text-base mb-1">Direct boeken?</p>
                <p className="text-gray-400 text-xs mb-4">24/7 bereikbaar voor een vaste prijs</p>
                <a
                  href="tel:+31633721505"
                  className="flex items-center gap-2 bg-amber-400 text-gray-900 font-bold px-4 py-3 rounded-xl hover:bg-amber-300 transition-colors text-sm w-full justify-center mb-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +31 6 33721505
                </a>
                <a
                  href="https://wa.me/31633721505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white font-bold px-4 py-2.5 rounded-xl hover:bg-green-600 transition-colors text-sm w-full justify-center"
                >
                  WhatsApp
                </a>
              </div>

              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Gerelateerde artikelen</h3>
                  <div className="flex flex-col gap-4">
                    {relatedPosts.map((p) => (
                      <Link key={p.slug} to={`/blog/${p.slug}`} className="flex gap-3 group">
                        <img
                          src={p.featuredImage}
                          alt={p.featuredImageAlt}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                          loading="lazy"
                        />
                        <div>
                          <p className="text-xs text-amber-600 font-medium mb-0.5">{p.category}</p>
                          <p className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-amber-600 transition-colors line-clamp-2">
                            {p.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Mobile related posts */}
        {relatedPosts.length > 0 && (
          <section className="lg:hidden max-w-6xl mx-auto px-4 pb-12">
            <h3 className="text-lg font-bold text-gray-900 mb-5">Gerelateerde artikelen</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="flex gap-3 group">
                  <img
                    src={p.featuredImage}
                    alt={p.featuredImageAlt}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-xs text-amber-600 font-medium mb-0.5">{p.category}</p>
                    <p className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-amber-600 transition-colors line-clamp-2">
                      {p.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

// Updates document title + meta description for this post
function DocumentMeta({ post }) {
  if (typeof document !== 'undefined') {
    document.title = `${post.title} | TaxiAmro Groningen`
    let desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', post.excerpt + ' Bel +31 6 33721505.')
  }
  return null
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })
}
