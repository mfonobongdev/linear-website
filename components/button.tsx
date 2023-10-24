import Link from 'next/link'
import { cva, VariantProps } from 'class-variance-authority'
import cn from 'classnames'

type ButtonProps = {
  children: React.ReactNode
  href: string
  className?: string
} & VariantProps<typeof buttonClasses>

const buttonClasses = cva('rounded-full inline-flex items-center', {
  variants: {
    variant: {
      primary: [
        'bg-primary-gradient hover:text-shadow hover:box-shadow-primary transition-[shadow,text-shadow]',
        '[&_.icon-wrapper]:ml-2'
      ],
      secondary: [
        'text-off-white bg-white/10 hover:bg-white/20 border border-transparent-white backdrop-filter-[12px] transition-colors ease-in',
        '[&_.icon-wrapper]:bg-transparent-white [&_.icon-wrapper]:rounded-full [&_.icon-wrapper]:px-1 [&_.icon-wrapper]:py-[0.1rem] [&_.icon-wrapper]:ml-2 [&_.icon-wrapper]:-mr-2'
      ],
      tertiary: ''
    },
    size: {
      small: 'text-xs px-3 h-7',
      medium: 'text-sm px-4 h-8',
      large: 'text-md px-6 h-12'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium'
  }
})

export function IconWrapper({ children }: { children: React.ReactNode }) {
  return <span className='icon-wrapper'>{children}</span>
}

export default function Button({
  children,
  className,
  href,
  variant,
  size
}: ButtonProps) {
  return (
    <div>
      <Link
        className={cn(buttonClasses({ variant, size }), className)}
        href={href}>
        {children}
      </Link>
    </div>
  )
}
