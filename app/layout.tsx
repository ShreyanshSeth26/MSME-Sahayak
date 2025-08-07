import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MSME Sahayak - Digital Platform for Small Business Growth',
  description: 'Comprehensive digital platform connecting MSMEs with lenders, government schemes, and business resources for sustainable growth.',
  keywords: 'MSME, small business, loans, government schemes, business growth, digital platform',
  authors: [{ name: 'Government of India' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'MSME Sahayak - Digital Platform for Small Business Growth',
    description: 'Comprehensive digital platform connecting MSMEs with lenders, government schemes, and business resources.',
    type: 'website',
    locale: 'en_IN',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
