import React from 'react'
import UserStatsCard from './userStats/UserStatsCard'
import Navbar from './navbar/Navbar'
import Link from 'next/link'

const LeftSidebar = () => {
  return (
    <aside className="sticky top-24 w-[22rem] h-full flex-shrink-0 flex flex-col gap-4">
      <UserStatsCard />
      <Navbar />
      <Link
        href="/post/add"
        className="p-3 text-center font-semibold bg-primary-600 text-txt-50 rounded-xl">
        Share Post
      </Link>
    </aside>
  )
}

export default LeftSidebar
