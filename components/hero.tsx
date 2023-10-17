export default function Hero({ children }: HeroProps) {
  return <div className='text-center'>{children}</div>
}

export function HeroTitle({ children }: HeroElementProps) {
  return <h1 className='text-5xl my-6'>{children}</h1>
}

export function HeroSubtitle({ children }: HeroElementProps) {
  return <p className='text-lg mb-12'>{children}</p>
}

type HeroProps = {
  children: React.ReactNode
}

type HeroElementProps = {
  children: React.ReactNode
}
