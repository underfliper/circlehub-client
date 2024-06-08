'use client'
import React, { FC, PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import cn from 'classnames'

interface FeedNavbarItemProps extends PropsWithChildren {
  url: string
}

const isUrlActive = (currentUrl: string, targetUrl: string) => {
  if (currentUrl === targetUrl) return true

  if (currentUrl.startsWith(`${targetUrl}/`)) return true

  return false
}

const FeedNavbarItem: FC<FeedNavbarItemProps> = ({ url, children }) => {
  const pathname = usePathname()
  const baseStyles =
    'w-1/2 text-center text-sm font-medium bg-background-100 rounded-lg transition-colors ease-in-out'
  const activeStyles = 'bg-primary-600 text-txt-50'
  const hoverStyles = 'hover:bg-accent-400 hover:text-txt-50'

  return (
    <li
      className={cn(baseStyles, hoverStyles, {
        [`${activeStyles}`]: isUrlActive(pathname, url),
      })}>
      <Link href={url} className="block p-2">
        {children}
      </Link>
    </li>
  )
}

export default FeedNavbarItem
