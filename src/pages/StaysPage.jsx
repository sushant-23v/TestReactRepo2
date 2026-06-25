import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const stays = [
  {
    name: 'Palolem Beach Resort',
    base: 'Palolem · 29 Jun – 2 Jul',
    nights: '3 nights',
    price: '₹11,250 total (₹3,750 / night)',
    img: '1640777',
    status: 'Confirmed',
    features: ['Strict beachfront', 'Breakfast included', 'Triple room with extra bed', 'Walkable café scene'],
  },
  {
    name: 'Agonda Serenity Resort',
    base: 'Agonda · 2 Jul – 5 Jul',
    nights: '3 nights',
    price: '₹11,250 total (₹3,750 / night)',
    img: '1640772',
    status: 'Confirmed',
    features: ['Beachfront cottages', 'Breakfast included', 'Quiet, nature-forward', 'Stargazing skies'],
  },
]

export default function StaysPage() {
  return (
    <div>
      <section className="relative">
        <img
          src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Beachfront resort in South Goa"
          loading="lazy"
          className="h-72 md:h-96 w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full text-white">
            <h1 className="text-4xl md:text-5xl font-bold">Where We Stay</h1>
            <p className="mt-4 max-w-xl text-gray-200">Two confirmed beachfront stays, ₹22,500 total for six nights.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <SectionHeading
          eyebrow="Accommodation"
          title="Confirmed beachfront bookings"
          subtitle="Both stays meet the must-haves: strict beachfront, breakfast and a triple room for the family."
          center
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {stays.map((s) => (
            <Card key={s.name}>
              <div className="relative">
                <img
                  src={`https://images.pexels.com/photos/${s.img}/pexels-photo-${s.img}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                  alt={s.name}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
                <span className="absolute top-4 left-4 rounded-full bg-teal-600 text-white text-xs font-semibold px-3 py-1">{s.status}</span>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">{s.base}</p>
                <h3 className="mt-1 text-xl font-semibold text-gray-900">{s.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{s.nights} · {s.price}</p>
                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-700">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-2"><span className="text-teal-600">✓</span>{f}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-teal-50 border border-teal-100 p-6 md:p-8">
          <h3 className="text-lg font-semibold text-gray-900">Budget snapshot</h3>
          <p className="mt-2 text-gray-700">Accommodation totals ₹22,500 across both bases — comfortably inside the ₹28,000 per-person plan, leaving room for travel, activities and that special family dinner.</p>
          <div className="mt-6">
            <Button to="/contact">Ask about upgrades</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
