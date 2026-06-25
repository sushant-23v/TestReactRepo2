import { Link } from 'react-router-dom'

export default function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors'
  const variants = {
    primary: 'bg-teal-600 text-white hover:bg-teal-700',
    secondary: 'bg-white text-teal-700 hover:bg-teal-50 border border-teal-200',
    ghost: 'bg-white/10 text-white hover:bg-white/20 border border-white/30',
  }
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>
  }
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>{children}</a>
  }
  return <button className={classes} {...props}>{children}</button>
}
