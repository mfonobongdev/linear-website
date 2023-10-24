import Container from '@/components/container'
import Hero, { HeroSubtitle, HeroTitle } from '@/components/hero'
import Image from 'next/image'
import heroImg from '@/public/img/hero.webp'
import Button, { IconWrapper } from '@/components/button'
import ArrowRight from '@/components/icons/arrowRight'

export default function Home() {
  return (
    <Container className='pt-[6.4rem]'>
      <Hero>
        <Button
          className='translate-y-[-1rem] animate-fade-in opacity-0'
          href='/'
          variant={'secondary'}
          size={'small'}>
          Announcing our $35M Series B
          <IconWrapper>
            <ArrowRight />
          </IconWrapper>
        </Button>
        <HeroTitle className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]'>
          Linear is a better way <br className='hidden md:block' />
          to build products
        </HeroTitle>
        <HeroSubtitle className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]'>
          Meet the new standard for modern software development.{' '}
          <br className='hidden md:block' />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubtitle>
        <Button
          className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]'
          href='/'
          size={'large'}>
          Get Started
          <IconWrapper>
            <ArrowRight />
          </IconWrapper>
        </Button>
        <Image
          className='mt-[12.8rem]'
          src={heroImg}
          alt='Screenshot of the Linear app showing the sidebar for the Encom workspace and a few of their projects in the roadmap.'
          priority={true}
        />
      </Hero>
    </Container>
  )
}
