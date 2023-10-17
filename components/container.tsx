import cn from 'classnames'
export default function Container({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('max-w-[120rem] mx-auto', className)}>{children}</div>
  )
}
