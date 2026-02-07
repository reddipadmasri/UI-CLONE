import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ScrollProgress from './components/ScrollProgress'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds | Therapy in Denver, CO',
  description: 'Culturally-sensitive therapy for anxiety, depression & trauma. In-person in Cherry Creek or online across Colorado.',
  keywords: 'Denver therapist, Colorado trauma therapy, anxiety counseling, depression treatment, EMDR therapy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}