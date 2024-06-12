'use client'
import React, { FC } from 'react'
import Post from '@/components/post/Post'
import CommentList from '@/components/post/CommentList'
import { PostComment, PostData } from '@/types/post.type'
import AddCommentForm from '@/components/post/AddCommentForm'

interface PagePostProps {
  post: PostData
  comments: Array<PostComment>
}

const PagePost: FC<PagePostProps> = ({ post, comments }) => {
  return (
    <div className="flex flex-col gap-4">
      <Post data={post} />
      <AddCommentForm />
      <CommentList data={comments} />
    </div>
  )
}

export default PagePost
