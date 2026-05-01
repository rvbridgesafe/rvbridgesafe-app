import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 py-8">
      <div className="max-w-4xl mx-auto px-6 text-center text-gray-600">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="/terms" className="hover:text-blue-600">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
        <p className="text-sm">
          © 2026 RV Bridge Safe. For informational purposes only. Verify all routes.
        </p>
      </div>
    </footer>
  )
}import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 py-8">
      <div className="max-w-4xl mx-auto px-6 text-center text-gray-600">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="/terms" className="hover:text-blue-600">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
        <p className="text-sm">
          © 2026 RV Bridge Safe. For informational purposes only. Verify all routes.
        </p>
      </div>
    </footer>
  )
}