'use client'
import React, { FC, useCallback, useState } from 'react'
import cn from 'classnames'
import { userService } from '@/services/user/user.service'

interface FollowButtonProps {
  followId: number
}

const FollowButton: FC<FollowButtonProps> = ({ followId }) => {
  const [isFollow, setIsFollow] = useState(false)

  const baseStyles =
    'px-3 py-1 h-max rounded-md font-medium bg-primary-200 text-primary-600 transition-colors ease-in-out'
  const followStyles = 'hover:bg-primary-600 hover:text-txt-50'
  const unfollowStyles =
    'bg-red-100 text-red-500 hover:bg-red-500 hover:text-txt-50'

  const handleFollow = useCallback(() => {
    if (!isFollow) {
      userService.Follow(followId).then((value) => {
        const { data } = value
        setIsFollow(data.followStatus)
      })
    } else
      userService.Unfollow(followId).then((value) => {
        const { data } = value
        setIsFollow(data.followStatus)
      })
  }, [followId, isFollow])

  return (
    <button
      className={cn(baseStyles, {
        [`${followStyles}`]: !isFollow,
        [`${unfollowStyles}`]: isFollow,
      })}
      onClick={handleFollow}>
      {isFollow ? 'Unfollow' : 'Follow'}
    </button>
  )
}

export default FollowButton
