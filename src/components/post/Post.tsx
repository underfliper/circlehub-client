'use client'
import React, { FC } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import UserCard from '../userCard/UserCard'
import PostControls from './PostControls'
import { PostData } from '@/types/post.type'

interface PostProps {
  data: PostData
}

const getPublishDate = (date: string) => {
  const months: { [key: number]: string } = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  }

  const formatTime = (date: Date) => {
    let hours = date.getHours()
    let mins = date.getMinutes()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12
    const minutes = mins < 10 ? '0' + mins : mins
    const strTime = hours + ':' + minutes + ' ' + ampm
    return strTime
  }

  const publishDate = new Date(date)

  const strDay = `${publishDate.getDate()} ${months[publishDate.getMonth()]}`

  return `${strDay} at ${formatTime(publishDate)}`
}

const Post: FC<PostProps> = ({ data }) => {
  const router = useRouter()
  const { id, author, createdAt, content, attachments, _count, controls } = data
  const { id: authorId, profile } = author

  const handleClickPost = () => {
    router.push(`/post/${id}`)
  }

  const handleClickHashtag = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation()
    console.log('Hashtag clicked')
  }

  return (
    <div
      className="flex flex-col p-4 gap-4 bg-background-50 rounded-xl cursor-pointer"
      onClick={handleClickPost}>
      <UserCard
        id={authorId}
        name={`${profile.firstName} ${profile.lastName}`}
        avatar={profile.avatar}
        content={
          <span className="text-sm font-medium text-txt-500">
            {getPublishDate(createdAt)}
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
