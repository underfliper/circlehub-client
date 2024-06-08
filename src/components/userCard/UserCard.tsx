'use client'
import { CircleUser } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

interface UserCardProps {
  id: number
  avatar?: string
  name: string
  content?: React.ReactNode
}

const UserCard: FC<UserCardProps> = ({ id, avatar, name, content }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation()
  }

  return (
    <div className="flex gap-2">
      <Link
        href={`/profile/${id}`}
        className="flex-shrink-0 bg-background-50 rounded-full w-10 h-10 text-txt-500 overflow-hidden"
        onClick={handleClick}>
        {avatar ? (
          <Image src={avatar} alt={name} width={40} height={40} />
        ) : (
          <CircleUser size={40} />
        )}
      </Link>
      <div className="flex flex-col">
        <Link
          href={`/profile/${id}`}
          className="text-md line-clamp-1 font-semibold hover:text-primary-500"
          onClick={handleClick}>
          {name}
        </Link>
        {content}
      </div>
    </div>
  )
}

export default UserCard
