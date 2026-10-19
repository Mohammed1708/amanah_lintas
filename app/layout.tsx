import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Biro Jasa Pengurusan Surat Kendaraan | Amanah Lintas Nusantara',
  description: 'Amanah Lintas Nusantara melayani konsultasi pengurusan balik nama kendaraan, perpanjangan STNK tahunan dan lima tahunan, serta STNK hilang.',
  keywords: ['biro jasa pengurusan surat kendaraan', 'jasa balik nama kendaraan', 'perpanjangan STNK', 'STNK hilang', 'konsultan administrasi kendaraan'],
  generator: 'v0.app',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Amanah Lintas Nusantara | Administrasi Kendaraan',
    description: 'Biro jasa dan konsultan pengurusan administrasi kendaraan yang profesional dan terarah.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
