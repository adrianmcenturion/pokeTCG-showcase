import { Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Poke TCG',
  description: "Here you'll find your favorite cards",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative no-scrollbar`}>
        <Navbar />
        <main className=''>
          {children}
        </main>
        </body>
    </html>
  )
}
