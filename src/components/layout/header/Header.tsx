'use client'
import React from 'react'
import Container from '../container/Container'
import Image from 'next/image'
import logo from '@/assets/logo.svg'
import SearchField from './SearchField'
import User from './User'
import { useSession } from 'next-auth/react'

const Header = () => {
  const { data: session } = useSession()

  return (
    <header className="fixed top-0 w-full h-20 bg-background-50 z-10">
      <Container className="flex items-center py-4 h-full gap-4">
        <div className="w-[22rem]">
          <Image src={logo} alt="Logotype" height={36} />
        </div>
        {session && (
          <>
            <div className="flex-1">
              <SearchField />
            </div>
            <div>
              <User />
            </div>
          </>
        )}
      </Container>
    </header>
  )
}

export default Header
