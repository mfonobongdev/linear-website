'use client'

import cn from 'classnames'
import Link from 'next/link'
import React from 'react'
import type { NavigationItem } from '@/constants/navigationItems'

export default function NavigationRow({ navigationItems }: NavigationRowProps) {
  return (
    <nav className={cn('relative h-auto w-auto bg-transparent')}>
      <ul className={cn('flex h-full flex-row')}>
        {navigationItems?.map((item) => (
          <li
            key={item.url}
            className={cn(
              'ml-6 text-sm transition-colors hover:text-grey',
              item?.important ? 'block' : 'md:hidden lg:block'
            )}>
            <Link href={item?.url}>{item?.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

type NavigationRowProps = {
  navigationItems: NavigationItem[]
}
