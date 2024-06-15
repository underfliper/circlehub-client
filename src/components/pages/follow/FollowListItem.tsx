import React, { FC } from 'react'
import FollowButton from '@/components/followButton/FollowButton'
import UserCard from '@/components/userCard/UserCard'
import { Follow } from '@/types/user.type'

interface FollowListItemProps {
  follow: Follow
}

const FollowListItem: FC<FollowListItemProps> = ({ follow }) => {
  const { id, profile, username, state } = follow

  return (
    <div className="flex justify-between p-4 bg-background-50 rounded-xl">
      <div className="flex gap-3">
        <UserCard
          id={id}
          name={`${profile.firstName} ${profile.lastName}`}
          avatar={profile.avatar}
          content={
            <span className="text-xs font-medium text-primary-600">{`@${username}`}</span>
          }
        />
      </div>
      <FollowButton followId={id} isActive={state.follow} />
    </div>
  )
}

export default FollowListItem
