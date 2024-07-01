import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Menu } from '../components/menu'
import { AppBar } from '@/components/app-bar'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Blue Health Tech',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-foreground`}>
        <div className="flex h-full w-screen">
          <div className="h-screen w-80">
            <Menu />
          </div>
          <div className="flex-1">
            <AppBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
