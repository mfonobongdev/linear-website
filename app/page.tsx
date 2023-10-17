import Container from '@/components/container'
import Hero, { HeroSubtitle, HeroTitle } from '@/components/hero'
import Image from 'next/image'
import heroImg from '@/public/img/hero.webp'

export default function Home() {
  return (
    <Container>
      <Hero>
        <HeroTitle>
          Linear is a better way <br />
          to build products
        </HeroTitle>
        <HeroSubtitle>
          Meet the new standard for modern software development. <br />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubtitle>
        <Image
          src={heroImg}
          alt='Screenshot of the Linear app showing the sidebar for the Encom workspace and a few of their projects in the roadmap.'
        />
      </Hero>
    </Container>
  )
}
