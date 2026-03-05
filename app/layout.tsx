import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vanthorpe Group — Building Tomorrow\'s World',
  description: 'Vanthorpe Group is a globally diversified holding company with operating businesses across telecommunications, media, consumer commerce, leisure, and essential services. 312 companies. 74 countries. Est. 1984.',
  metadataBase: new URL('https://vanthorpegroup.com'),
  openGraph: {
    title: 'Vanthorpe Group — Building Tomorrow\'s World',
    description: 'A globally diversified holding company. 312 portfolio companies. 74 countries. $847B in assets. Est. 1984, Houston, Texas.',
    url: 'https://vanthorpegroup.com',
    siteName: 'Vanthorpe Group',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vanthorpe Group — Building Tomorrow\'s World',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vanthorpe Group — Building Tomorrow\'s World',
    description: 'A globally diversified holding company. 312 portfolio companies. 74 countries. Est. 1984.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
