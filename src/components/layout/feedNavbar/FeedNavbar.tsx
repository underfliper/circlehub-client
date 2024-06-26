import React from 'react'
import FeedNavbarItem from './FeedNavbarItem'

const FeedNavbar = () => {
  return (
    <div
      className="sticky top-24 z-10 
    before:content-start before:absolute before:-inset-4 before:bg-background-100 before:-z-10
    after:content-start after:absolute after:-bottom-12 after:w-full after:h-8 after:bg-transparent after:rounded-t-xl after:shadow-[0_-10px_0_0_#F1F1F1]">
      <nav className="bg-background-50 text-txt-900 rounded-xl">
        <ul className="flex gap-4 p-4 w-full">
          <FeedNavbarItem url="/feed/following">Following</FeedNavbarItem>
          <FeedNavbarItem url="/feed/suggested">Suggested</FeedNavbarItem>
        </ul>
      </nav>
    </div>
  )
}

export default FeedNavbar
