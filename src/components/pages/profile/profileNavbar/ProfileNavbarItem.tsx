'use client'
import React, { FC, PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import cn from 'classnames'

interface ProfileNavbarItemProps extends PropsWithChildren {
  url: string
}

const isUrlActive = (currentUrl: string, targetUrl: string) => {
  if (currentUrl === targetUrl) return true

  return false
}

const ProfileNavbarItem: FC<ProfileNavbarItemProps> = ({ url, children }) => {
  const pathname = usePathname()

  return (
    <li
      className={cn(
        'rounded-lg cursor-pointer text-sm font-medium overflow-hidden hover:bg-primary-200 hover:text-primary-600 transition ease-in-out',
        { 'bg-primary-200 text-primary-600': isUrlActive(pathname, url) },
      )}>
      <Link className="block px-4 py-1" href={url}>
        {children}
      </Link>
    </li>
  )
}

export default ProfileNavbarItem
