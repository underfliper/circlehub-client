import PostBredcrumbs from '@/components/post/PostBredcrumbs'

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col gap-4 pb-4">
      <PostBredcrumbs />
      {children}
    </div>
  )
}
