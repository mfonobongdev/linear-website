'use client'

import cn from 'classnames'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { useLockBodyScroll } from '@uidotdev/usehooks'
import type { NavigationItem } from '@/constants/navigationItems'

export default function NavigationList({
  navigationItems,
  isOpen
}: NavigationListProps) {
  useLockBodyScroll()

  // animations
  const navVariants = {
    isOpen: {
      opacity: 100,
      transition: { ease: 'easeIn', duration: 0.3 }
    },
    isClosed: {
      opacity: 0,
      transition: { ease: 'easeIn', duration: 0.1 }
    }
  }

  const ulVariants = {
    isOpen: { translateY: 0, transition: { duration: 0.3 } },
    isClosed: { translateY: 10 }
  }

  return (
    <motion.nav
      className={cn(
        'fixed left-0 top-navigation-height h-[calc(100vh_-_var(--navigation-height))] w-full overflow-y-auto bg-background'
      )}
      initial={false}
      animate={isOpen ? 'isOpen' : 'isClosed'}
      variants={navVariants}>
      <motion.ul
        className={cn('flex flex-col px-6 pb-6')}
        initial={false}
        animate={isOpen ? 'isOpen' : 'isClosed'}
        variants={ulVariants}>
        {navigationItems?.map((item) => (
          <li
            key={item.name}
            className={cn(
              'flex h-navigation-height w-full items-center border-b border-grey-dark text-md transition-colors hover:text-grey'
            )}>
            <Link href={item?.url}>{item?.name}</Link>
          </li>
        ))}
      </motion.ul>
    </motion.nav>
  )
}

type NavigationListProps = {
  navigationItems: NavigationItem[]
  isOpen: boolean
}
