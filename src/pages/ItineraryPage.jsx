import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const days = [
  {
    day: 'Day 1 · 29 Jun',
    base: 'Palolem',
    title: 'Arrive & settle in',
    text: 'Arrive in South Goa, transfer to Palolem and check in at Palolem Beach Resort. Easy evening at Palolem Beach with a relaxed café dinner.',
    img: '1366919',
  },
  {
    day: 'Day 2 · 30 Jun',
    base: 'Palolem',
    title: 'Kayaking in the bay',
    text: 'Morning kayaking or paddleboarding in calm Palolem Bay (best early). Backup plan ready if seas are rough. Mellow live-music evening.',
    img: '33109',
  },
  {
    day: 'Day 3 · 1 Jul',
    base: 'Palolem',
    title: 'Beach morning + Cabo de Rama',
    text: 'A relaxed Palolem beach morning, then drive out to Cabo de Rama Fort for a dramatic sunset viewpoint.',
    img: '346529',
  },
  {
    day: 'Day 4 · 2 Jul',
    base: 'Agonda',
    title: 'Transfer & slow down',
    text: 'Short 15–20 min transfer to Agonda and check in at Agonda Serenity Resort. A slow beach day and stargazing after dinner.',
    img: '417074',
  },
  {
    day: 'Day 5 · 3 Jul',
    base: 'Agonda',
    title: 'Cola Beach lagoon',
    text: 'Swim in the freshwater Cola Beach lagoon and soak in nearby viewpoints. Light, unhurried day.',
    img: '1640777',
  },
  {
    day: 'Day 6 · 4 Jul',
    base: 'Agonda',
    title: 'Quiet beaches & special dinner',
    text: 'Galgibaga & Talpona quiet-beach loop, or yoga and a massage to recharge — capped by a special family dinner in Agonda.',
    img: '699953',
  },
  {
    day: 'Day 7 · 5 Jul',
    base: 'Agonda',
    title: 'Wrap up & depart',
    text: 'Optional gentle morning by the sea, pack up and head out for the afternoon return journey home.',
    img: '958545',
  },
]

export default function ItineraryPage() {
  return (
    <div>
      <section className="bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold">Day-by-Day Itinerary</h1>
          <p className="mt-4 max-w-2xl text-teal-100">Six nights, two bases and an easy rhythm — built to flex with the monsoon.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <SectionHeading eyebrow="The Flow" title="From Palolem buzz to Agonda calm" />
        <div className="mt-12 space-y-8">
          {days.map((d, i) => (
            <Card key={d.day} className="md:flex">
              <img
                src={`https://images.pexels.com/photos/${d.img}/pexels-photo-${d.img}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                alt={d.title}
                loading="lazy"
                className="h-52 md:h-auto md:w-72 w-full object-cover"
              />
              <div className="p-6 flex-1">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1">{d.day}</span>
                  <span className="rounded-full bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1">{d.base}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-gray-900">{d.title}</h3>
                <p className="mt-2 text-gray-600">{d.text}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Button to="/activities">See the must-do experiences</Button>
        </div>
      </section>
    </div>
  )
}
