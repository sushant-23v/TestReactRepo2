import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const musts = [
  {
    title: 'Butterfly Beach Sunrise Boat',
    text: 'A short 20–30 min boat from Palolem to a hidden cove. Best at sunrise when seas are calmest.',
    img: '33109',
    tag: 'From Palolem',
  },
  {
    title: 'Cola Beach Lagoon Swim',
    text: 'A serene freshwater lagoon meeting the sea — gentle and perfect for a relaxed family swim.',
    img: '1366919',
    tag: 'From Agonda',
  },
  {
    title: 'Galgibaga & Talpona Loop',
    text: 'A quiet-beach circuit on some of South Goa\u2019s emptiest sands — pure unwind time.',
    img: '346529',
    tag: 'From Agonda',
  },
]

const more = [
  { title: 'Kayaking in Palolem Bay', detail: 'Calm morning paddle, backup ready if rough.' },
  { title: 'Cabo de Rama Fort Sunset', detail: 'A dramatic clifftop viewpoint at golden hour.' },
  { title: 'Yoga & Massage in Agonda', detail: 'Slow, restorative mornings between beach days.' },
  { title: 'Special Family Dinner', detail: 'A celebratory meal in Agonda on 4 July.' },
]

export default function ActivitiesPage() {
  return (
    <div>
      <section className="bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold">Activities & Experiences</h1>
          <p className="mt-4 max-w-2xl text-teal-100">Easy energy, gentle seas and a budget of ₹500–₹1,000 per adult per day.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <SectionHeading eyebrow="Must-Do" title="The three signature outings" center />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {musts.map((m) => (
            <Card key={m.title}>
              <img
                src={`https://images.pexels.com/photos/${m.img}/pexels-photo-${m.img}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                alt={m.title}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <span className="rounded-full bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1">{m.tag}</span>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{m.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{m.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <SectionHeading eyebrow="Also On The List" title="Gentle extras to fill the days" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {more.map((m) => (
              <Card key={m.title} className="p-6">
                <h3 className="font-semibold text-gray-900">{m.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{m.detail}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-white border border-gray-100 p-6 md:p-8">
            <h3 className="text-lg font-semibold text-gray-900">Comfort notes</h3>
            <p className="mt-2 text-gray-700">Light rain is fine — we'll avoid rough seas and boats when conditions are poor. Up to two longer day trips (~2 hrs each way) are on the table, but most days stay close to base.</p>
            <div className="mt-6">
              <Button to="/contact">Customize the activities</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
