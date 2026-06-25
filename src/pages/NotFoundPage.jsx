import Button from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl md:text-8xl font-bold text-teal-600">404</p>
        <h1 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-900">This beach doesn't exist</h1>
        <p className="mt-3 text-gray-600 max-w-md mx-auto">The page you're looking for drifted out with the tide. Let's get you back to shore.</p>
        <div className="mt-8">
          <Button to="/">Back to Home</Button>
        </div>
      </div>
    </section>
  )
}
