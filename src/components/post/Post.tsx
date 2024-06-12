'use client'
import React, { FC } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import UserCard from '../userCard/UserCard'
import PostControls from './PostControls'
import { PostData } from '@/types/post.type'
import { getBeautifulDate } from '@/utils/getBeautifulDate'

interface PostProps {
  data: PostData
  redirectOnClickPost?: boolean
}

const Post: FC<PostProps> = ({ data, redirectOnClickPost }) => {
  const router = useRouter()
  const { id, author, createdAt, content, attachments, _count, controls } = data
  const { id: authorId, profile } = author

  const handleClickHashtag = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation()
    console.log('Hashtag clicked')
  }

  const handleClickPost = () => {
    router.push(`/post/${id}`)
  }

  return (
    <div
      className={`flex flex-col p-4 gap-4 bg-background-50 rounded-xl${
        redirectOnClickPost ? ' cursor-pointer' : ''
      }`}
      onClick={() => {
        redirectOnClickPost && handleClickPost()
      }}>
      <UserCard
        id={authorId}
        name={`${profile.firstName} ${profile.lastName}`}
        avatar={profile.avatar}
        content={
          <span className="text-sm font-medium text-txt-500">
            {getBeautifulDate(createdAt)}
          </span>
        }
      />
      <p>
        {content.split(' ').map((word, index) => {
          if (word.startsWith('#')) {
            return (
              <span
                key={index}
                className="text-primary-600 cursor-pointer hover:underline hover:underline-offset-4"
                onClick={handleClickHashtag}>
                {word}{' '}
              </span>
            )
          }
          return word + ' '
        })}
      </p>
      <div className="rounded-xl overflow-hidden">
        <Image
          src={attachments[0].url}
          alt={content}
          className="w-full"
          width={600}
          height={600}
        />
      </div>
      <PostControls postId={id} _count={_count} controlsStatus={controls} />
    </div>
  )
}

export default Post
