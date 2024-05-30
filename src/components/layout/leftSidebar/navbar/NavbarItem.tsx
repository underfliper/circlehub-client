'use client'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC, PropsWithChildren } from 'react'

interface NavbarItemProps extends PropsWithChildren {
  url: string
}

const isUrlActive = (currentUrl: string, targetUrl: string) => {
  if (currentUrl === targetUrl) return true

  if (currentUrl.startsWith(`${targetUrl}/`)) return true

  return false
}

const NavbarItem: FC<NavbarItemProps> = ({ url, children }) => {
  const pathname = usePathname()

  return (
    <li
      className={classNames(
        'w-full rounded-lg cursor-pointer hover:bg-accent-400 hover:text-txt-50 transition ease-in-out',
        { 'bg-primary-600 text-txt-50': isUrlActive(pathname, url) },
      )}>
      <Link href={url} className="flex gap-4 p-3">
        {children}
      </Link>
    </li>
  )
}

export default NavbarItem
