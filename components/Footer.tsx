import Link from 'next/link'
import { Home, Info } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-emerald-700 text-amber-50 border-t border-emerald-600">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-around items-center">
        <Link href="/" className="flex flex-col items-center text-sm hover:text-amber-100">
          <Home size={24} />
          <span>Home</span>
        </Link>
        <Link href="/about" className="flex flex-col items-center text-sm hover:text-amber-100">
          <Info size={24} />
          <span>About</span>
        </Link>
      </div>
    </footer>
  )
}
