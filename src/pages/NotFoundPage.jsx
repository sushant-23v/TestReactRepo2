import Button from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl font-bold text-amber-dark">404</p>
        <h1 className="mt-4 text-2xl font-bold text-espresso-dark">Page Not Found</h1>
        <p className="mt-2 text-espresso-light">Looks like this page brewed off somewhere else.</p>
        <div className="mt-8">
          <Button to="/">Back to Home</Button>
        </div>
      </div>
    </div>
  )
}
