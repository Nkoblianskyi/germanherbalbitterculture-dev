import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-garamond',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'German Herbal Bitter Culture — Kräuterbitter & Kräuterlikör',
  description: 'Ein informativer Blog über deutsche Kräuterbitter und Kräuterlikör — traditionelle Rezepte, Regionen, Bars und Brauereien. Informativ, kein Verkauf.',
  keywords: 'Kräuterbitter, Kräuterlikör, deutsche Bitters, Digestif, Heilkräuter, Deutschland, Tradition',
  authors: [{ name: 'German Herbal Bitter Culture' }],
  openGraph: {
    title: 'German Herbal Bitter Culture',
    description: 'Entdecke die Welt der deutschen Kräuterbitter und Kräuterlikör',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${ebGaramond.variable} bg-background`}>
      <body className="font-serif antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
