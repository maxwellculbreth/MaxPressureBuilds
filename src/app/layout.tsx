import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Max Pressure Equipment | Custom Pressure Washing Equipment',
    template: '%s | Max Pressure Equipment',
  },
  description:
    'Custom trailer builds, surface cleaners, spray guns, and equipment consulting built for pressure washing contractors and business owners.',
  keywords: [
    'pressure washing equipment',
    'custom trailer builds',
    'pressure washer trailer',
    'surface cleaners',
    'spray guns',
    'pressure washing business',
    'contractor equipment',
  ],
  metadataBase: new URL('https://maxpressureequipment.com'),
  openGraph: {
    type: 'website',
    siteName: 'Max Pressure Equipment',
    title: 'Max Pressure Equipment | Custom Pressure Washing Equipment',
    description:
      'Custom trailer builds, surface cleaners, spray guns, and equipment consulting built for pressure washing contractors.',
    url: 'https://maxpressureequipment.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Max Pressure Equipment',
    description:
      'Custom pressure washing equipment built for contractors who demand commercial-grade performance.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-slate-900 text-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
