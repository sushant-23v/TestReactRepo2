import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'

const menu = [
  {
    category: 'Espresso & Milk',
    items: [
      { name: 'Espresso', price: '$3.00', desc: 'A rich, concentrated shot of our house blend.' },
      { name: 'Cappuccino', price: '$4.25', desc: 'Espresso with steamed milk and a velvety foam cap.' },
      { name: 'Caffè Latte', price: '$4.50', desc: 'Smooth espresso with silky steamed milk.' },
      { name: 'Flat White', price: '$4.25', desc: 'Double ristretto with microfoam milk.' },
    ],
  },
  {
    category: 'Brewed & Cold',
    items: [
      { name: 'Pour Over', price: '$4.00', desc: 'Hand-poured single origin, bright and clean.' },
      { name: 'Cold Brew', price: '$4.50', desc: 'Slow-steeped 18 hours for a smooth finish.' },
      { name: 'Iced Latte', price: '$4.75', desc: 'Espresso over ice with chilled milk.' },
      { name: 'Drip Coffee', price: '$3.00', desc: 'Our daily house roast, freshly brewed.' },
    ],
  },
  {
    category: 'Bakery',
    items: [
      { name: 'Butter Croissant', price: '$3.50', desc: 'Flaky, golden, baked fresh each morning.' },
      { name: 'Blueberry Muffin', price: '$3.25', desc: 'Bursting with juicy berries.' },
      { name: 'Banana Bread', price: '$3.00', desc: 'Moist and warmly spiced.' },
      { name: 'Almond Biscotti', price: '$2.50', desc: 'Crisp and perfect for dipping.' },
    ],
  },
]

export default function MenuPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <SectionHeading
          center
          eyebrow="Our Menu"
          title="Something for Every Mood"
          subtitle="Handcrafted drinks and fresh-baked treats, made daily with love."
        />
        <div className="mt-12 space-y-12">
          {menu.map((group) => (
            <div key={group.category}>
              <h3 className="text-2xl font-bold text-espresso-dark">{group.category}</h3>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.items.map((item) => (
                  <Card key={item.name} className="p-6 flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-espresso-dark">{item.name}</h4>
                      <p className="mt-1 text-sm text-espresso-light">{item.desc}</p>
                    </div>
                    <span className="shrink-0 rounded-lg bg-amber/20 px-3 py-1 text-sm font-semibold text-amber-dark">
                      {item.price}
                    </span>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
