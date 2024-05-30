import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import cn from 'classnames'
import Header from '@/components/layout/header/Header'
import Container from '@/components/layout/container/Container'
import LeftSidebar from '@/components/layout/leftSidebar/LeftSidebar'
import RightSidebar from '@/components/layout/rightSidebar/RightSidebar'
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
      <body className={cn(inter.className, 'bg-background-100 text-txt-950')}>
        <Header />
        <main className="pt-24">
          <Container className="flex gap-4 min-h-dvh">
            <LeftSidebar />
            <div className="flex-1">{children}</div>
            <RightSidebar />
          </Container>
        </main>
      </body>
    </html>
  )
}
