import PostSkeleton from '@/components/skeletons/PostSkeleton'
import React from 'react'

const FeedLoader = () => {
  return (
    <>
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </>
  )
}

export default FeedLoader
