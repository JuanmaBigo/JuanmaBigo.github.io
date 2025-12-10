import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio - Tu Nombre',
  description: 'Portfolio personal de desarrollo web',
  keywords: ['portfolio', 'web developer', 'frontend', 'backend', 'full stack'],
  authors: [{ name: 'Tu Nombre' }],
  openGraph: {
    title: 'Portfolio - Tu Nombre',
    description: 'Portfolio personal de desarrollo web',
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
      <body>{children}</body>
    </html>
  )
}



