'use client'
import React, { FC, useReducer } from 'react'
import { Bookmark, Heart, MessageCircle, Repeat } from 'lucide-react'
import { postService } from '@/services/post/post.service'
import PostControl from './PostControl'

interface PostControlsProps {
  postId: number
  _count: {
    likes: number
    comments: number
    reposts: number
  }
  controlsStatus: {
    isLiked: boolean
    isReposted: boolean
  }
}

interface ControlStateItem {
  status: boolean
  count: number
}

interface ControlState {
  likes: ControlStateItem
  reposts: ControlStateItem
}

enum ControlActionKind {
  ADD_LIKE = 'ADD_LIKE',
  REMOVE_LIKE = 'REMOVE_LIKE',
  ADD_REPOST = 'ADD_REPOST',
  REMOVE_REPOST = 'REMOVE_REPOST',
}

interface ControlAction {
  type: ControlActionKind
  payload: {
    status: boolean
  }
}

const controlReducer = (state: ControlState, action: ControlAction) => {
  switch (action.type) {
    case ControlActionKind.ADD_LIKE: {
      return {
        ...state,
        likes: {
          status: action.payload.status,
          count: state.likes.count + 1,
        },
      }
    }
    case ControlActionKind.REMOVE_LIKE: {
      return {
        ...state,
        likes: {
          status: action.payload.status,
          count: state.likes.count - 1,
        },
      }
    }
    case ControlActionKind.ADD_REPOST: {
      return {
        ...state,
        reposts: {
          status: action.payload.status,
          count: state.reposts.count + 1,
        },
      }
    }
    case ControlActionKind.REMOVE_REPOST:
      {
        return {
          ...state,
          reposts: {
            status: action.payload.status,
            count: state.reposts.count - 1,
          },
        }
      }

      throw Error('Unknown action: ' + action.type)
  }
}

const PostControls: FC<PostControlsProps> = ({
  postId,
  _count,
  controlsStatus,
}) => {
  const [state, dispatch] = useReducer(controlReducer, {
    likes: { status: controlsStatus.isLiked, count: _count.likes },
    reposts: { status: controlsStatus.isReposted, count: _count.reposts },
  })

  const handleClickLike = () => {
    if (!state.likes.status)
      postService.AddLike(postId).then((value) =>
        dispatch({
          type: ControlActionKind.ADD_LIKE,
          payload: { status: value },
        }),
      )
    else
      postService.RemoveLike(postId).then((value) =>
        dispatch({
          type: ControlActionKind.REMOVE_LIKE,
          payload: { status: value },
        }),
      )
  }

  const handleClickRepost = () => {
    if (!state.reposts.status)
      postService.AddRepost(postId).then((value) =>
        dispatch({
          type: ControlActionKind.ADD_REPOST,
          payload: { status: value },
        }),
      )
    else
      postService.RemoveRepost(postId).then((value) =>
        dispatch({
          type: ControlActionKind.REMOVE_REPOST,
          payload: { status: value },
        }),
      )
  }

  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <PostControl
          title="Like"
          className={`${
            state.likes.status ? 'text-rose-500 bg-rose-500/10' : 'text-txt-500'
          } hover:text-rose-500 hover:bg-rose-500/10`}
          isActive={state.likes.status}
          onClick={handleClickLike}>
          <Heart size={18} strokeWidth={2} />
          <span>{state.likes.count}</span>
        </PostControl>
        <PostControl
          title="Comment"
          className="text-txt-500 hover:text-primary-500 hover:bg-primary-500/10">
          <MessageCircle size={18} strokeWidth={2} />
          <span>{_count.comments}</span>
        </PostControl>
        <PostControl
          title="Repost"
          className={`${
            state.reposts.status
              ? 'text-green-500 bg-green-500/10'
              : 'text-txt-500'
          } hover:text-green-500 hover:bg-green-500/10`}
          isActive={state.reposts.status}
          onClick={handleClickRepost}>
          <Repeat size={18} strokeWidth={2} />
          <span>{state.reposts.count}</span>
        </PostControl>
      </div>
      <div>
        <PostControl
          title="Bookmark"
          className="text-txt-500 hover:text-yellow-500 hover:bg-yellow-500/10">
          <Bookmark size={18} />
        </PostControl>
      </div>
    </div>
  )
}

export default PostControls
