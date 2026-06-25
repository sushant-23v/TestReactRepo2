import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'

const facts = [
  { label: 'Travelers', value: '2 adults + 1 child (age 6)' },
  { label: 'Dates', value: '29 Jun – 5 Jul 2026 (6 nights)' },
  { label: 'Origin', value: 'Pune (PNQ) via flight / sleeper bus' },
  { label: 'Region', value: 'South Goa — Palolem & Agonda' },
  { label: 'Room', value: '1 triple room, strict beachfront' },
  { label: 'Budget', value: '₹28,000 per person, ₹84,000 total' },
]

export default function AboutPage() {
  return (
    <div>
      <section className="relative">
        <img
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Coastal palms in South Goa"
          loading="lazy"
          className="h-72 md:h-96 w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full text-white">
            <h1 className="text-4xl md:text-5xl font-bold">About This Trip</h1>
            <p className="mt-4 max-w-xl text-gray-200">A carefully planned, low-key family holiday on Goa's southern coast.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="The Story"
            title="Slow days, mellow evenings"
            subtitle="This isn't a party trip — it's a restful escape built around calm beaches by day and quiet time together by night."
          />
          <p className="mt-6 text-gray-700">
            We chose South Goa for its softer pace. Palolem opens the trip with a walkable café scene and gentle live music, while Agonda closes it with wide empty sands, yoga mornings and starry skies. With a six-year-old in tow, energy is dialed to an easy 2 out of 5 — early dinners, board games and never more than two longer day trips.
          </p>
          <p className="mt-4 text-gray-700">
            Because it's monsoon season, the plan stays flexible: sunrise boats only when seas are calm, lagoon swims at Cola, and cosy indoor evenings whenever the rain rolls in. A special family dinner in Agonda on 4 July marks the highlight of the week.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 content-start">
          {facts.map((f) => (
            <Card key={f.label} className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">{f.label}</p>
              <p className="mt-2 text-gray-900 font-medium">{f.value}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <SectionHeading eyebrow="The Vibe" title="What we optimized for" center />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900">Quiet-plus-cafés</h3>
              <p className="mt-2 text-sm text-gray-600">Mostly peaceful, with a little café culture and live music to break the silence.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900">Beachfront-first</h3>
              <p className="mt-2 text-sm text-gray-600">Strict beachfront stays so the sea is always a few steps away, with breakfast included.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900">Family-easy</h3>
              <p className="mt-2 text-sm text-gray-600">Short transfers, gentle activities and plenty of downtime for a six-year-old.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
