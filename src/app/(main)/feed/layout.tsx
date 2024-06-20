import { Metadata } from 'next'
import FeedNavbar from '@/components/layout/feedNavbar/FeedNavbar'
import NewPostForm from '@/components/pages/feed/NewPostForm'

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
      <NewPostForm />
      {children}
    </div>
  )
}
