'use client'
import React, { FC } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { UserInfo } from '@/types/user.type'
import FollowButton from '@/components/followButton/FollowButton'
import { getMonthYear } from '@/utils/formatDate'

interface ProfileInfoProps {
  data: UserInfo
}

const ProfileInfo: FC<ProfileInfoProps> = ({ data }) => {
  const { data: session } = useSession()
  const { id, username, createdAt, profile, _count } = data
  const { firstName, lastName, bio, avatar } = profile
  const registerDate = new Date(createdAt)

  return (
    <div className="w-full flex flex-col gap-4 p-4 rounded-xl bg-background-50">
      <div className="flex gap-4">
        <div className="w-25 h-25 bg-background-100 rounded-full overflow-hidden">
          <Image
            src={avatar!}
            width={100}
            height={100}
            alt={`${firstName} ${lastName} avatar`}
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-semibold">{`${firstName} ${lastName}`}</span>
            <span className="text-sm font-medium text-primary-600">{`@${username}`}</span>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-1 items-center font-semibold">
              <span className="text-md">{_count.posts}</span>
              <span className="text-sm text-txt-700">Posts</span>
            </div>
            <div className="flex gap-1 items-center font-semibold">
              <span className="text-md">{_count.followers}</span>
              <span className="text-sm text-txt-700">Followers</span>
            </div>
            <div className="flex gap-1 items-center font-semibold">
              <span className="text-md">{_count.following}</span>
              <span className="text-sm text-txt-700">Following</span>
            </div>
          </div>
          <span className="text-sm font-medium text-txt-500">{`Registered since ${getMonthYear(
            createdAt,
          )}`}</span>
        </div>
        <div>
          {session?.user.id === id ? (
            <button className="px-3 py-1 h-max min-w-24 rounded-md font-medium bg-primary-200 text-primary-600 transition-colors ease-in-out hover:bg-primary-600 hover:text-txt-50">
              Edit
            </button>
          ) : (
            <FollowButton followId={id} />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-md font-semibold">Bio</span>
        <p className="text-sm">{bio}</p>
      </div>
    </div>
  )
}

export default ProfileInfo
