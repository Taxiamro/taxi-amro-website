import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://www.taxiamro.nl'
const SITE_NAME = 'Taxi Amro Noord-Nederland'
const DEFAULT_IMAGE = `${BASE_URL}/nexo-exterior.webp`

export default function Seo({
  title,
  description,
  canonical,
  image,
  noindex = false,
  schema = null,
}) {
  const ogImage = image
    ? image.startsWith('http') ? image : `${BASE_URL}${image}`
    : DEFAULT_IMAGE
  const canonicalUrl = canonical
    ? canonical.startsWith('http') ? canonical : `${BASE_URL}${canonical}`
    : null

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="nl_NL" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}
