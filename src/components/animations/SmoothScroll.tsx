'use client'

import { useEffect, ReactNode } from 'react'
import Lenis from 'lenis'

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Inicializar Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      // smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // Request Animation Frame loop
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Limpiar al desmontar
    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}



