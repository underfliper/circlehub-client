import Link from 'next/link'
import React, { FC } from 'react'
import ProfileNavbarItem from './ProfileNavbarItem'

interface ProfileNavbarProps {
  userId: number
}

const ProfileNavbar: FC<ProfileNavbarProps> = ({ userId }) => {
  return (
    <nav className="p-4 bg-background-50 rounded-xl">
      <ul className="flex gap-4">
        <ProfileNavbarItem url={`/profile/${userId}`}>
          All Posts
        </ProfileNavbarItem>
        <ProfileNavbarItem url={`/profile/${userId}/reposts`}>
          Reposts
        </ProfileNavbarItem>
        <ProfileNavbarItem url={`/profile/${userId}/likes`}>
          Likes
        </ProfileNavbarItem>
        <ProfileNavbarItem url={`/profile/${userId}/media`}>
          Media
        </ProfileNavbarItem>
      </ul>
    </nav>
  )
}

export default ProfileNavbar
