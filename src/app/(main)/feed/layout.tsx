import { Metadata } from 'next'
import FeedNavbar from '@/components/layout/feedNavbar/FeedNavbar'

export const metadata: Metadata = {
  title: 'Feed',
}

export default function FeedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col gap-4">
      <FeedNavbar />
      {children}
    </div>
  )
}
