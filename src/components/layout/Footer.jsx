import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-teal-400">South Goa Escape</h3>
          <p className="mt-3 text-sm text-gray-400">
            Calm crescent bays, starry Agonda nights & monsoon-friendly beach days — a 6-night family escape, thoughtfully planned.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-300">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li><Link to="/itinerary" className="hover:text-teal-400">Itinerary</Link></li>
            <li><Link to="/stays" className="hover:text-teal-400">Stays</Link></li>
            <li><Link to="/activities" className="hover:text-teal-400">Activities</Link></li>
            <li><Link to="/about" className="hover:text-teal-400">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-300">Get in Touch</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>Trip: 29 Jun – 5 Jul 2026</li>
            <li>Bases: Palolem &amp; Agonda</li>
            <li><Link to="/contact" className="hover:text-teal-400">Send an enquiry</Link></li>
            <li>
              <a href="https://www.goa-tourism.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">Goa Tourism</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <p className="max-w-7xl mx-auto px-4 md:px-8 py-6 text-xs text-gray-500">
          © {new Date().getFullYear()} South Goa Escape. Crafted for a quiet-but-lively coastal holiday.
        </p>
      </div>
    </footer>
  )
}
