import { Bell, Bookmark, CalendarClock, Home, User, Image } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className="flex flex-col gap-4 w-full p-4 bg-background-50 rounded-xl">
      <h2 className="font-semibold text-xl text-txt-950">Navigation</h2>
      <span className="w-full h-[2px] block bg-background-100"></span>
      <nav>
        <ul className="flex flex-col gap-1 w-full">
          <NavbarItem url="/feed">
            <Home size={24} />
            Feed
          </NavbarItem>
          <NavbarItem url="/profile">
            <User size={24} />
            Profile
          </NavbarItem>
          <NavbarItem url="/events">
            <CalendarClock size={24} />
            Events
          </NavbarItem>
          <NavbarItem url="/notifications">
            <Bell size={24} />
            Notifications
          </NavbarItem>
          <NavbarItem url="/photos">
            <Image size={24} />
            Photos
          </NavbarItem>
          <NavbarItem url="/bookmarks">
            <Bookmark size={24} />
            Bookmarks
          </NavbarItem>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
