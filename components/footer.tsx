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
    <footer className='mt-12 border-t border-transparent-white py-[5.6rem] text-sm'>
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
              <h3 className='mb-5 font-medium text-primary-text'>
                {column?.title}
              </h3>
              <ul>
                {column?.links?.map((link) => (
                  <li key={link?.title} className='mb-5 block last:mb-0'>
                    <Link
                      className='text-grey transition-colors hover:text-off-white'
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
