import CommentFormSkeleton from '@/components/skeletons/CommentFormSkeleton'
import CommentSkeleton from '@/components/skeletons/CommentSkeleton'
import PostSkeleton from '@/components/skeletons/PostSkeleton'
import React from 'react'

const PagePostLoader = () => {
  return (
    <div className="flex flex-col gap-4">
      <PostSkeleton />
      <CommentFormSkeleton />
      <div className="flex flex-col gap-4">
        <CommentSkeleton />
        <CommentSkeleton />
        <CommentSkeleton />
      </div>
    </div>
  )
}

export default PagePostLoader
