import React from 'react'
import UserStatsCard from './userStats/UserStatsCard'
import Navbar from './navbar/Navbar'

const LeftSidebar = () => {
  return (
    <aside className="sticky top-24 w-80 h-full flex flex-col gap-4">
      <UserStatsCard />
      <Navbar />
    </aside>
  )
}

export default LeftSidebar
