import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import cn from 'classnames'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | CircleHub',
    default: 'CircleHub',
  },
  description: 'Social network app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-background-50')}>
        {children}
      </body>
    </html>
  )
}
