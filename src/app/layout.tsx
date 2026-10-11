import type { Metadata } from 'next'
import 'lenis/dist/lenis.css'
import './globals.css'
import { LenisScroll } from '@/components/animations/LenisScroll'

export const metadata: Metadata = {
  title: 'bigo',
  description: 'web developer portfolio',
  keywords: ['portfolio', 'web developer', 'frontend', 'backend', 'full stack'],
  authors: [{ name: 'juanmabigo' }],
  openGraph: {
    title: 'bigo',
    description: 'web developer portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <LenisScroll />
        {children}
      </body>
    </html>
  )
}



