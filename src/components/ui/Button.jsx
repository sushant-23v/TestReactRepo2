import { Link } from 'react-router-dom'

export default function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-colors shadow-sm'
  const variants = {
    primary: 'bg-amber text-espresso-dark hover:bg-amber-dark hover:text-white',
    secondary: 'bg-espresso text-cream hover:bg-espresso-dark',
    outline: 'border border-cream text-cream hover:bg-cream hover:text-espresso-dark',
  }
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
