export default function Hero({ children }: HeroProps) {
  return <div className='text-center'>{children}</div>
}

export function HeroTitle({ children }: HeroElementProps) {
  return (
    <h1 className='md:text-8xl text-6xl text-gradient my-6 text-transparent'>
      {children}
    </h1>
  )
}

export function HeroSubtitle({ children }: HeroElementProps) {
  return (
    <p className='md:text-xl text-primary-text mb-12 text-lg'>{children}</p>
  )
}

type HeroProps = {
  children: React.ReactNode
}

type HeroElementProps = {
  children: React.ReactNode
}
