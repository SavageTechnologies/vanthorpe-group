import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vanthorpe Group — Building Tomorrow\'s World',
  description: 'Vanthorpe Group is a globally diversified holding company with operating businesses across telecommunications, media, consumer commerce, leisure, and essential services.',
  icons: {
    icon: '/favicon.svg',
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
