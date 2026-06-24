import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const values = [
  { title: 'Sourced with Care', desc: 'We partner with growers who share our love for quality and sustainability.' },
  { title: 'Roasted Locally', desc: 'Our beans are roasted in small batches to bring out their best character.' },
  { title: 'Served with a Smile', desc: 'Friendly baristas who remember your name and your order.' },
]

export default function AboutPage() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Brewed from a Simple Idea"
              subtitle="Desxto Coffee began with a love for great coffee and warm conversation. What started as a tiny corner roaster has grown into a cozy neighborhood haven."
            />
            <p className="mt-6 text-espresso-light">
              Every morning we open our doors to friends old and new, pouring craft and hospitality into each cup. We believe coffee is more than a drink — it's a moment to slow down and connect.
            </p>
            <div className="mt-8">
              <Button to="/contact" variant="secondary">Come Say Hello</Button>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Cozy interior of Desxto Coffee"
            loading="lazy"
            className="rounded-2xl object-cover w-full h-96 shadow-sm"
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream-paper">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <SectionHeading center eyebrow="What We Value" title="The Heart of Desxto" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <Card key={v.title} className="p-6">
                <h3 className="text-xl font-semibold text-espresso-dark">{v.title}</h3>
                <p className="mt-2 text-espresso-light">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
