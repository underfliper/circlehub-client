import React, { FC } from 'react'
import ProfileNavbarItem from './ProfileNavbarItem'
import { UserCounts } from '@/types/user.type'

interface ProfileNavbarProps {
  userId: number
  counts: UserCounts
}

const ProfileNavbar: FC<ProfileNavbarProps> = ({ userId, counts }) => {
  return (
    <nav className="p-4 bg-background-50 rounded-xl">
      <ul className="flex gap-4">
        <ProfileNavbarItem url={`/profile/${userId}`}>
          {`All Posts ${counts.posts}`}
        </ProfileNavbarItem>
        <ProfileNavbarItem url={`/profile/${userId}/reposts`}>
          {`Reposts ${counts.reposts}`}
        </ProfileNavbarItem>
        <ProfileNavbarItem url={`/profile/${userId}/likes`}>
          {`Likes ${counts.likes}`}
        </ProfileNavbarItem>
      </ul>
    </nav>
  )
}

export default ProfileNavbar
