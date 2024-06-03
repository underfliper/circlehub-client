import Container from '@/components/layout/container/Container'
import '../globals.css'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Container className="flex gap-4 items-center justify-center h-full">
      {children}
    </Container>
  )
}
