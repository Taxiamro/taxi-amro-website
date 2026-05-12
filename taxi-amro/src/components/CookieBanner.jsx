import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      background: '#1e293b',
      borderTop: '1px solid rgba(251,191,36,0.2)',
      padding: '16px 20px',
      boxShadow: '0 -4px 24px rgba(0,0,0,0.3)',
    }}>
      <div style={{
        maxWidth: 1152,
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 12,
        justifyContent: 'space-between',
      }}>
        <div style={{ flex: 1, minWidth: 260 }}>
          <p style={{ color: '#e2e8f0', fontSize: 13, margin: 0, lineHeight: 1.5 }}>
            🍪 Wij gebruiken cookies om uw ervaring te verbeteren en bezoekersstatistieken bij te houden.
            Lees ons{' '}
            <a href="/privacybeleid.pdf" target="_blank" rel="noopener noreferrer"
              style={{ color: '#fbbf24', textDecoration: 'underline' }}>
              privacybeleid
            </a>.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          <button
            onClick={decline}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#94a3b8',
              borderRadius: 8,
              padding: '8px 16px',
              fontSize: 13,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
          >
            Weigeren
          </button>
          <button
            onClick={accept}
            style={{
              background: '#fbbf24',
              border: 'none',
              color: '#1a1a1a',
              borderRadius: 8,
              padding: '8px 20px',
              fontSize: 13,
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#f59e0b'}
            onMouseLeave={e => e.currentTarget.style.background = '#fbbf24'}
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  )
}
