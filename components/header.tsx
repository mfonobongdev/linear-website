import Link from 'next/link'
import Container from './container'
import Logo from './icons/logo'
import Button from './button'

export default function Header() {
  return (
    <header className='fixed left-0 top-0 w-full border-b border-white-a08 backdrop-blur-[12px]'>
      <Container className='flex h-[var(--navigation-height)] items-center'>
        <Link href={'/'}>
          <Logo className='mb-[0.2rem]' />
        </Link>

        <nav className='h-full'>
          <ul className='flex h-full items-center [&_a:hover]:text-grey [&_a]:text-sm [&_a]:transition-colors [&_li]:ml-6'>
            <li>
              <Link href={'#'}>Features</Link>
            </li>
            <li>
              <Link href={'#'}>Method</Link>
            </li>
            <li>
              <Link href={'#'}>Customers</Link>
            </li>
            <li>
              <Link href={'#'}>Changelog</Link>
            </li>
            <li>
              <Link href={'#'}>Pricing</Link>
            </li>
            <li>
              <Link href={'#'}>Company</Link>
            </li>
          </ul>
        </nav>

        <div className='ml-auto flex h-full items-center'>
          <Link className='mr-6 text-sm' href={'#'}>
            Log In
          </Link>
          <Button href='#'>Sign Up</Button>
        </div>
      </Container>
    </header>
  )
}
