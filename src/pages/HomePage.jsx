import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'

const highlights = [
  {
    title: 'Palolem — 3 Nights',
    text: 'A calm crescent bay with safe swimming, walkable cafés and mellow live music in the evenings.',
    img: '1366919',
  },
  {
    title: 'Agonda — 3 Nights',
    text: 'Serene, uncrowded and nature-forward. Long beach walks, yoga mornings and starry skies.',
    img: '346529',
  },
  {
    title: 'Monsoon-Friendly',
    text: 'Planned for light rain and gentle seas — sunrise boats when calm, cosy café dinners when not.',
    img: '417074',
  },
]

const stats = [
  { value: '6', label: 'Nights' },
  { value: '2', label: 'Beach Bases' },
  { value: '3', label: 'Travelers' },
  { value: '₹28k', label: 'Per Person' },
]

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center">
        <img
          src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Quiet South Goa beach at golden hour"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">29 Jun – 5 Jul 2026</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            A quiet-but-lively South Goa beach escape
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-xl">
            Six unhurried nights split between Palolem and Agonda — beachfront stays, sunrise boats, lagoon swims and slow café evenings for a family of three.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/itinerary">View the Itinerary</Button>
            <Button to="/stays" variant="ghost">See Our Stays</Button>
          </div>
        </div>
      </section>

      <section className="bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold">{s.value}</div>
              <div className="mt-1 text-sm text-teal-100">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <SectionHeading
          eyebrow="The Plan"
          title="Two bases, one easygoing rhythm"
          subtitle="We split the stay so the trip never feels rushed — variety up front in Palolem, then deep calm in Agonda."
          center
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {highlights.map((h) => (
            <Card key={h.title}>
              <img
                src={`https://images.pexels.com/photos/${h.img}/pexels-photo-${h.img}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                alt={h.title}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{h.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{h.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid gap-10 lg:grid-cols-2 items-center">
          <img
            src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Palm-lined Goan shoreline"
            loading="lazy"
            className="rounded-2xl object-cover w-full h-80"
          />
          <div>
            <SectionHeading
              eyebrow="Why This Works"
              title="Designed around 2 adults + 1 child"
              subtitle="Easy energy (2/5), early dinners, board-game evenings and never more than two longer day trips."
            />
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="text-teal-600">●</span> Strict beachfront triple rooms with breakfast</li>
              <li className="flex gap-3"><span className="text-teal-600">●</span> Short 15–20 min inter-base transfer</li>
              <li className="flex gap-3"><span className="text-teal-600">●</span> A special family dinner in Agonda on 4 Jul</li>
              <li className="flex gap-3"><span className="text-teal-600">●</span> Budget kept to ₹28,000 per person</li>
            </ul>
            <div className="mt-8">
              <Button to="/activities">Explore Activities</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="rounded-3xl bg-teal-700 px-6 md:px-12 py-12 md:py-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to lock it in?</h2>
          <p className="mt-4 text-teal-100 max-w-xl mx-auto">
            Hotels are confirmed. Tell us your preferences and we'll finalize transfers, activities and that special dinner.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button to="/contact" variant="secondary">Start Planning</Button>
            <Button to="/itinerary" variant="ghost">See Day-by-Day</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
