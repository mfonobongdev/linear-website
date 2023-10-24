import cn from 'classnames'

export default function Hero({ children }: HeroProps) {
  return <div className='text-center'>{children}</div>
}

export function HeroTitle({ children, className }: HeroElementProps) {
  return (
    <h1 className={cn('text-gradient my-6 text-6xl md:text-8xl', className)}>
      {children}
    </h1>
  )
}

export function HeroSubtitle({ children, className }: HeroElementProps) {
  return (
    <p className={cn('mb-12 text-lg text-primary-text md:text-xl', className)}>
      {children}
    </p>
  )
}

type HeroProps = {
  children: React.ReactNode
}

type HeroElementProps = {
  children: React.ReactNode
  className?: string
}
