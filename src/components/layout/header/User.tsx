'use client'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import { ChevronDown, ChevronUp } from 'lucide-react'
import HeaderUserSkeleton from '@/components/skeletons/HeaderUserSkeleton'

const User = () => {
  const { data } = useSession()
  const [dropdownToggle, setDropdownToggle] = useState(false)

  if (!data) return <HeaderUserSkeleton />

  const { user } = data

  return (
    <div className="relative flex gap-2 items-center">
      <div className="w-10 h-10 bg-background-100 rounded-full overflow-hidden">
        <Image
          src={user.image}
          width={40}
          height={40}
          alt={`${user.name} avatar`}
        />
      </div>
      <span className="font-semibold">{user.name}</span>
      <button onClick={() => setDropdownToggle(!dropdownToggle)}>
        {dropdownToggle ? <ChevronUp /> : <ChevronDown />}
      </button>
      <ul
        className={cn(
          'absolute top-full right-0 z-10 mt-4 w-3/4 bg-background-50 shadow-2xl rounded-xl overflow-hidden',
          { hidden: !dropdownToggle },
        )}>
        <li className="px-4 py-2 text-right hover:bg-accent-400 hover:text-txt-50">
          <Link href="/profile/edit">Edit Profile</Link>
        </li>
        <li className="px-4 py-2 text-right hover:bg-accent-400 hover:text-txt-50">
          <Link href="/settings">Settings</Link>
        </li>
        <li className="px-4 py-2 text-right hover:bg-accent-400 hover:text-txt-50">
          <Link href="/signout">Sign Out</Link>
        </li>
      </ul>
    </div>
  )
}

export default User
