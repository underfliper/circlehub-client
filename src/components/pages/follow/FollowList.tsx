import React, { FC } from 'react'
import FollowListItem from './FollowListItem'
import { Follow } from '@/types/user.type'

interface FollowListProps {
  data: Array<Follow>
}

const FollowList: FC<FollowListProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      {data.map((user) => (
        <FollowListItem
          key={`follower${user.profile.firstName}${user.id}`}
          follow={user}
        />
      ))}
    </div>
  )
}

export default FollowList
