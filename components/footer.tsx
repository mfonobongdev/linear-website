import getFooterLinks from '@/constants/footerLinks'
import Container from './container'
import Link from 'next/link'
import Logo from './icons/logo'
import TwitterIcon from './icons/twitter'
import GithubIcon from './icons/github'
import SlackIcon from './icons/slack'

export default function Footer() {
  const footerLinks = getFooterLinks()

  return (
    <footer className='mt-12 border-t border-white-a08 py-[5.6rem] text-sm'>
      <Container className='flex flex-col justify-between lg:flex-row'>
        <div className='flex flex-row justify-between lg:flex-col'>
          <div className='flex items-center gap-2 text-grey'>
            <Logo className='w-16' /> - Designed Worldwide
          </div>
          <div className='mt-auto flex gap-5 text-grey'>
            <TwitterIcon />
            <GithubIcon />
            <SlackIcon />
          </div>
        </div>

        <div className='flex flex-wrap'>
          {footerLinks?.map((column) => (
            <div
              key={column?.title}
              className='mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]'>
              <h3 className='text-primary-text mb-5 font-medium'>
                {column?.title}
              </h3>
              <ul>
                {column?.links?.map((link) => (
                  <li key={link?.title} className='mb-5 block last:mb-0'>
                    <Link
                      className='text-grey transition-colors hover:text-white'
                      href={link?.href}>
                      {link?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  )
}
