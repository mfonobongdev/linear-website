import Link from 'next/link'
import { cva, VariantProps } from 'class-variance-authority'

type ButtonProps = {
  children: React.ReactNode
  href: string
} & VariantProps<typeof buttonClasses>

const buttonClasses = cva('rounded-full inline-flex items-center', {
  variants: {
    variant: {
      primary: 'bg-primary-gradient hover:text-shadow hover:box-shadow-primary',
      secondary: '',
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

export default function Button({ children, href, variant, size }: ButtonProps) {
  return (
    <div>
      <Link className={buttonClasses({ variant, size })} href={href}>
        {children}
      </Link>
    </div>
  )
}
