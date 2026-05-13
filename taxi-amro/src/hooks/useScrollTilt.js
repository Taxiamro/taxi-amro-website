import { useState, useEffect, useRef } from 'react'

/**
 * Combined mouse-tilt (desktop) + scroll-tilt (mobile) hook.
 * Uses requestAnimationFrame for smooth 60fps mobile performance.
 */
export function useScrollTilt(intensity = 8) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  // --- Desktop: mouse tracking ---
  const onMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
    setTilt({ x: dy * -intensity, y: dx * intensity })
  }
  const onMouseEnter = () => setHovered(true)
  const onMouseLeave = () => { setTilt({ x: 0, y: 0 }); setHovered(false) }

  // --- Mobile: scroll-based tilt with RAF ---
  useEffect(() => {
    // Only run on touch/hover:none devices
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches
    if (!isTouchDevice) return

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let rafId = null
    let lastY = window.scrollY

    const compute = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 when bottom at viewport bottom, 1 when top at viewport top
      const progress = 1 - (rect.bottom / (vh + rect.height))
      const norm = Math.max(-1, Math.min(1, (progress - 0.5) * 2.2))
      setTilt({ x: norm * intensity * 0.6, y: 0 })
      rafId = null
    }

    const onScroll = () => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(compute)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    compute() // initial
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [intensity])

  // CSS hint for GPU compositing
  const style = { willChange: 'transform' }

  return { ref, tilt, hovered, onMouseMove, onMouseEnter, onMouseLeave, style }
}
