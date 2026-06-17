import { Link } from 'react-router-dom'
import Seo from '../../components/Seo'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import { blogPosts } from '../../data/blogPosts'

const WA = 'https://wa.me/31633721505?text=Hallo%20Taxi%20Amro%2C%20ik%20wil%20graag%20een%20taxi%20boeken.'

export default function BlogCategory({ category }) {
  const posts = blogPosts.filter(p => category.slugs.includes(p.slug))

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.title,
    description: category.description,
    url: `https://www.taxiamro.nl${category.path}`,
    hasPart: posts.map(p => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `https://www.taxiamro.nl/blog/${p.slug}`,
    })),
  }

  return (
    <>
      <Seo
        title={category.seoTitle}
        description={category.seoDesc}
        canonical={category.path}
        schema={schema}
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className={`relative pt-28 pb-14 overflow-hidden ${category.heroBg}`}>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <Link to="/blog" className="inline-flex items-center gap-1 text-gray-400 hover:text-amber-600 text-sm mb-5 transition-colors">
              ← Alle blogs
            </Link>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-gray-200 text-gray-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-sm">
              <span className="text-base">{category.icon}</span>
              {category.label}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {category.h1}
            </h1>
            <p className="text-base sm:text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              {category.intro}
            </p>
          </div>
        </section>

        {/* Blog posts grid */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
          {posts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map(post => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-amber-300 transition-all group"
                >
                  <div className="text-2xl mb-3">{post.emoji || category.icon}</div>
                  <h2 className="font-bold text-gray-900 text-sm leading-snug mb-2 group-hover:text-amber-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                    {post.excerpt || post.content?.substring(0, 120) + '…'}
                  </p>
                  <span className="inline-block mt-3 text-amber-600 text-xs font-semibold group-hover:underline">
                    Lees meer →
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400">Geen blogs gevonden in deze categorie.</p>
          )}
        </section>

        {/* Andere categorieën */}
        <section className="bg-gray-50 border-t border-gray-100 py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-sm text-gray-500 mb-4">Andere categorieën</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/blog/luchthaven" className="bg-white border border-gray-200 hover:border-amber-400 hover:text-amber-600 text-gray-700 text-sm px-4 py-2 rounded-lg transition-all">✈️ Luchthaven</Link>
              <Link to="/blog/zakelijk" className="bg-white border border-gray-200 hover:border-amber-400 hover:text-amber-600 text-gray-700 text-sm px-4 py-2 rounded-lg transition-all">💼 Zakelijk</Link>
              <Link to="/blog/evenementen" className="bg-white border border-gray-200 hover:border-amber-400 hover:text-amber-600 text-gray-700 text-sm px-4 py-2 rounded-lg transition-all">🎉 Evenementen</Link>
              <Link to="/blog" className="bg-white border border-gray-200 hover:border-amber-400 hover:text-amber-600 text-gray-700 text-sm px-4 py-2 rounded-lg transition-all">📰 Alle blogs</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 py-12">
          <div className="max-w-xl mx-auto px-4 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Direct een taxi boeken?</h2>
            <p className="text-gray-400 text-sm mb-5">24/7 beschikbaar · Vaste prijs · Waterstof taxi</p>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-7 py-3 rounded-xl text-sm transition-all hover:scale-105">
              💬 Boek via WhatsApp
            </a>
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}
