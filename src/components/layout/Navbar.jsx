import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/itinerary', label: 'Itinerary' },
  { to: '/stays', label: 'Stays' },
  { to: '/activities', label: 'Activities' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
    }`

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-teal-700">
          <span className="inline-block w-3 h-3 rounded-full bg-teal-500" />
          South Goa Escape
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-2 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
          >
            Plan With Us
          </Link>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-base font-medium ${
                  isActive ? 'bg-teal-50 text-teal-700' : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
