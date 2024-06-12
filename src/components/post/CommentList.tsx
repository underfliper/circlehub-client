import { PostComment } from '@/types/post.type'
import React, { FC } from 'react'
import Comment from './Comment'

interface CommentListProps {
  data: Array<PostComment>
}

const CommentList: FC<CommentListProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      {data.map((comment) => (
        <Comment comment={comment} key={`comment${comment.id}`} />
      ))}
    </div>
  )
}

export default CommentList
