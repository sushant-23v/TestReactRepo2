import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'

const features = [
  {
    title: 'Small-Batch Roasts',
    desc: 'Beans roasted in-house every week for peak freshness and a rich, balanced flavor.',
    img: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Cozy Atmosphere',
    desc: 'Warm browns, soft light, and comfy corners — a space made for lingering.',
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Fresh Bakes Daily',
    desc: 'Pastries and treats baked fresh each morning to pair with your perfect cup.',
    img: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center">
        <img
          src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Freshly brewed coffee on a wooden table"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso-dark/70" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-24">
          <div className="max-w-2xl text-cream">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber">Warm & Cozy</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
              Desxto Coffee — Crafted for the Perfect Moment
            </h1>
            <p className="mt-6 text-lg text-cream/90">
              From rich espresso to silky lattes, every cup is brewed with care. Pull up a chair and stay a while.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/menu">Explore the Menu</Button>
              <Button to="/contact" variant="outline">Visit Us</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <SectionHeading
            center
            eyebrow="Why Desxto"
            title="A Better Way to Coffee"
            subtitle="We obsess over the details so every visit feels like coming home."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <Card key={f.title} className="overflow-hidden">
                <img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-espresso-dark">{f.title}</h3>
                  <p className="mt-2 text-espresso-light">{f.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream-paper">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Barista preparing coffee"
            loading="lazy"
            className="rounded-2xl object-cover w-full h-80 shadow-sm"
          />
          <div>
            <SectionHeading
              eyebrow="Our Promise"
              title="Quality in Every Cup"
              subtitle="Ethically sourced beans, skilled baristas, and a welcoming space — that's the Desxto difference."
            />
            <div className="mt-8">
              <Button to="/about" variant="secondary">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-espresso-dark">Ready for Your Next Cup?</h2>
          <p className="mt-4 text-espresso-light">
            Swing by today or browse our full menu of coffees, teas, and fresh-baked treats.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button to="/menu">View Menu</Button>
            <Button to="/contact" variant="secondary">Get Directions</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
