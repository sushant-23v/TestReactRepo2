import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber text-espresso-dark font-bold">D</span>
            <span className="text-lg font-bold">Desxto Coffee</span>
          </div>
          <p className="mt-4 text-sm text-gray-300">
            Warm & cozy coffee, crafted with care. Your neighborhood spot for a perfect cup.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-amber">Home</Link></li>
            <li><Link to="/about" className="hover:text-amber">About</Link></li>
            <li><Link to="/menu" className="hover:text-amber">Menu</Link></li>
            <li><Link to="/gallery" className="hover:text-amber">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-amber">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber">Get in Touch</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>123 Roastery Lane, Bean City</li>
            <li>hello@desxtocoffee.com</li>
            <li>(555) 012-3456</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber">Facebook</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Desxto Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
