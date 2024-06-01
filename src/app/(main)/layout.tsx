import cn from 'classnames'
import Container from '@/components/layout/container/Container'
import LeftSidebar from '@/components/layout/leftSidebar/LeftSidebar'
import RightSidebar from '@/components/layout/rightSidebar/RightSidebar'
import '../globals.css'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Container className="flex gap-4">
      <LeftSidebar />
      <div className="flex-1">{children}</div>
      <RightSidebar />
    </Container>
  )
}
