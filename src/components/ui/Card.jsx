export default function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden transition-shadow hover:shadow-md ${className}`}>
      {children}
    </div>
  )
}
