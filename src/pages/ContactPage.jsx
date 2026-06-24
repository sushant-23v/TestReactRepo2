import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full rounded-xl border border-espresso/20 bg-cream-paper px-4 py-3 text-espresso focus:border-amber-dark focus:outline-none focus:ring-2 focus:ring-amber/40'

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Come Visit Us"
            subtitle="Stop by for a cup, or drop us a line — we'd love to hear from you."
          />
          <div className="mt-8 space-y-4 text-espresso-light">
            <p><span className="font-semibold text-espresso-dark">Address:</span> 123 Roastery Lane, Bean City</p>
            <p><span className="font-semibold text-espresso-dark">Email:</span> hello@desxtocoffee.com</p>
            <p><span className="font-semibold text-espresso-dark">Phone:</span> (555) 012-3456</p>
            <p><span className="font-semibold text-espresso-dark">Hours:</span> Mon–Sun, 7am – 7pm</p>
          </div>
        </div>

        <Card className="p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-espresso-dark">Thanks for reaching out!</h3>
              <p className="mt-3 text-espresso-light">We'll get back to you as soon as we can.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-espresso-dark mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-espresso-dark mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-espresso-dark mb-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={inputClass}
                  placeholder="How can we help?"
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  )
}
