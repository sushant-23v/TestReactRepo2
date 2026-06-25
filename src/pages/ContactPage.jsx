import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', travelers: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <section className="bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold">Plan With Us</h1>
          <p className="mt-4 max-w-2xl text-teal-100">Tell us your preferences and we'll fine-tune transfers, activities and stays.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Send an enquiry"
            subtitle="Share your travel dates and group details — we'll respond with a tailored plan."
          />
          <div className="mt-8 space-y-4 text-gray-700">
            <p><span className="font-semibold text-gray-900">Trip window:</span> 29 Jun – 5 Jul 2026</p>
            <p><span className="font-semibold text-gray-900">Bases:</span> Palolem (3N) &amp; Agonda (3N)</p>
            <p><span className="font-semibold text-gray-900">Group:</span> 2 adults + 1 child</p>
            <p>
              <span className="font-semibold text-gray-900">More info:</span>{' '}
              <a href="https://www.goa-tourism.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Goa Tourism</a>
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="mx-auto w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 text-2xl">✓</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Thanks, {form.name || 'traveler'}!</h3>
              <p className="mt-2 text-gray-600">Your enquiry is in. We'll get back to you with a tailored South Goa plan.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input id="name" name="name" value={form.name} onChange={handleChange} required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-teal-500 focus:ring-teal-500 outline-none" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-teal-500 focus:ring-teal-500 outline-none" />
              </div>
              <div>
                <label htmlFor="travelers" className="block text-sm font-medium text-gray-700">Travelers</label>
                <input id="travelers" name="travelers" value={form.travelers} onChange={handleChange} placeholder="e.g. 2 adults + 1 child"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-teal-500 focus:ring-teal-500 outline-none" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-teal-500 focus:ring-teal-500 outline-none" />
              </div>
              <Button type="submit" className="w-full">Send Enquiry</Button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
