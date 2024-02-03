import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Landing from './landing/page'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CalPal',
  description: 'Making Calgary more accessible to everyone.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <Landing />
        {children}
        <Footer />
      </body>
    </html>
  )
}
