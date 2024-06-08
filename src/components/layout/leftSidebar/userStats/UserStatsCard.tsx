import React, { FC } from 'react'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '@/lib/auth/next-auth.lib'
import { userService } from '@/services/user/user.service'
import UserCard from '@/components/userCard/UserCard'
import Username from './Username'

const UserStatsCard: FC = async () => {
  const session = await getServerSession(nextAuthOptions)

  if (!session) return null

  const { user } = session

  const { data } = await userService.GetProfile(user.id)

  const { id, username, profile, _count } = data

  return (
    <div className="p-4 bg-background-50 rounded-xl">
      <div className="flex flex-col gap-5 p-4 bg-background-100 rounded-lg">
        <UserCard
          id={id}
          avatar={profile.avatar}
          name={`${profile.firstName} ${profile.lastName}`}
          content={<Username username={username} />}
        />
        <div className="flex w-full">
          <Link
            href={`/profile/${user.id}`}
            className="flex flex-col py-1 w-1/3 items-center rounded-lg hover:bg-background-200">
            <span className="block w-max text-txt-950 font-semibold">
              {_count.posts}
            </span>
            <span className="block w-max text-sm text-txt-700 font-semibold">
              Posts
            </span>
          </Link>
          <Link
            href={`/followers/${user.id}`}
            className="flex flex-col py-1 w-1/3 items-center rounded-lg hover:bg-background-200">
            <span className="block w-max text-txt-950 font-semibold">
              {_count.followers}
            </span>
            <span className="block w-max text-sm text-txt-700 font-semibold">
              Followers
            </span>
          </Link>
          <Link
            href={`/following/${user.id}`}
            className="flex flex-col py-1 w-1/3 items-center rounded-lg hover:bg-background-200">
            <span className="block w-max text-txt-950 font-semibold">
              {_count.following}
            </span>
            <span className="block w-max text-sm text-txt-700 font-semibold">
              Following
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserStatsCard
