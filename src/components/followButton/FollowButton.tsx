'use client'
import React, { FC, useCallback, useEffect, useState } from 'react'
import cn from 'classnames'
import { userService } from '@/services/user/user.service'

interface FollowButtonProps {
  followId: number
  isActive?: boolean
}

const FollowButton: FC<FollowButtonProps> = ({
  followId,
  isActive = false,
}) => {
  const [isFollow, setIsFollow] = useState(isActive)

  const baseStyles =
    'px-3 py-1 h-max min-w-24 rounded-md font-medium bg-primary-200 text-primary-600 transition-colors ease-in-out'
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

  useEffect(() => {
    userService.CheckFollow(followId).then((value) => setIsFollow(value))
  }, [])

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
