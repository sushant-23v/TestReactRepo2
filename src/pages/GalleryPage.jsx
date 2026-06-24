import SectionHeading from '../components/ui/SectionHeading'

const photos = [
  { id: 1640772, alt: 'Coffee cup on wooden table' },
  { id: 958545, alt: 'Barista pouring latte art' },
  { id: 1640777, alt: 'Cozy cafe interior' },
  { id: 699953, alt: 'Fresh pastries on display' },
  { id: 1366919, alt: 'Coffee beans close-up' },
  { id: 4050315, alt: 'Minimal coffee setup' },
]

export default function GalleryPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <SectionHeading
          center
          eyebrow="Gallery"
          title="A Peek Inside Desxto"
          subtitle="Warm light, rich aromas, and a welcoming space made for you."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((p) => (
            <div key={p.id} className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src={`https://images.pexels.com/photos/${p.id}/pexels-photo-${p.id}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                alt={p.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
