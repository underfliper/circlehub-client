'use client'
import React, { FC, useReducer } from 'react'
import Post from '@/components/post/Post'
import CommentList from '@/components/post/CommentList'
import { PostComment, PostData } from '@/types/post.type'
import AddCommentForm from '@/components/post/AddCommentForm'
import { comment } from 'postcss'

interface PagePostProps {
  post: PostData
  comments: Array<PostComment>
}

export enum CommentsActionKind {
  ADD_COMMENT = 'ADD_COMMENT',
}

export interface CommentsAction {
  type: CommentsActionKind
  payload: {
    comment: PostComment
  }
}

interface CommentsState {
  data: PostComment[]
}

const commentsReducer = (state: CommentsState, action: CommentsAction) => {
  switch (action.type) {
    case CommentsActionKind.ADD_COMMENT: {
      return { ...state, data: [action.payload.comment, ...state.data] }
    }
    default:
      throw Error('Unknown action: ' + action.type)
  }
}

const PagePost: FC<PagePostProps> = ({ post, comments }) => {
  const [state, dispatch] = useReducer(commentsReducer, { data: comments })
  return (
    <div className="flex flex-col gap-4">
      <Post data={post} />
      <AddCommentForm postId={post.id} dispatch={dispatch} />
      <CommentList data={state.data} />
    </div>
  )
}

export default PagePost
