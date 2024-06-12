'use client'
import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Ellipsis } from 'lucide-react'
import { PostComment } from '@/types/post.type'
import { getBeautifulDate } from '@/utils/getBeautifulDate'

interface CommentProps {
  comment: PostComment
}

const Comment: FC<CommentProps> = ({ comment }) => {
  const { text, createdAt, user } = comment
  const { id: authorId, username, profile } = user

  return (
    <div className="flex gap-4 p-4 bg-background-50 rounded-xl">
      <div className="h-10 w-10 rounded-full overflow-hidden">
        <Link href={`/profile/${authorId}`} className="block">
          <Image
            src={profile.avatar!}
            width={40}
            height={40}
            alt={`${profile.firstName} ${profile.lastName}`}
          />
        </Link>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <Link
            href={`/profile/${authorId}`}
            className="font-semibold hover:text-primary-500">{`${profile.firstName} ${profile.lastName}`}</Link>
          <Link
            href={`/profile/${authorId}`}
            className="text-sm text-txt-500">{`@${username}`}</Link>
          <span className="text-sm font-semibold text-txt-500">-</span>
          <span className="text-sm text-txt-500">
            {getBeautifulDate(createdAt)}
          </span>
        </div>
        <p>{text}</p>
      </div>
      <div className="text-txt-500">
        <button className="cursor-point">
          <Ellipsis size={20} />
        </button>
      </div>
    </div>
  )
}

export default Comment
