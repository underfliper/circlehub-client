import React from 'react'
import Container from '../container/Container'
import Image from 'next/image'

import logo from '@/assets/logo.svg'

const Header = () => {
  return (
    <header className="fixed top-0 w-full h-20 bg-background-50 z-10">
      <Container className="flex items-center py-4 h-full gap-4">
        <div className="w-80">
          <Image src={logo} alt="Logotype" height={36} />
        </div>
      </Container>
    </header>
  )
}

export default Header
