'use client'

import React from 'react'
import Link from 'next/link'
import Container from './container'
import Logo from './icons/logo'
import Button from './button'
import HamburgerIcon from './icons/hamburger'
import getNavigationItems from '@/constants/navigationItems'
import NavigationRow from './navigationRow'
import NavigationList from './navigationList'

export default function Header() {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = React.useState(false)
  const navigationItems = getNavigationItems()

  return (
    <header className='fixed left-0 top-0 w-full border-b border-white-a08 backdrop-blur-[12px]'>
      <Container className='flex h-navigation-height items-center'>
        <Link href={'/'}>
          <Logo className='mb-[0.2rem]' />
        </Link>

        <div className='hidden md:block'>
          <NavigationRow navigationItems={navigationItems} />
        </div>

        <div className='block md:hidden'>
          <NavigationList
            navigationItems={navigationItems}
            isOpen={hamburgerMenuIsOpen}
          />
        </div>

        <div className='ml-auto flex h-full items-center'>
          <Link className='mr-6 text-sm' href={'#'}>
            Log In
          </Link>
          <Button href='#'>Sign Up</Button>
        </div>

        <button
          className='ml-6 md:hidden'
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}>
          <span className='sr-only'>Toggle Menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  )
}
