import Link from 'next/link'
import { MapPin, Shield, Leaf } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-emerald-700 p-4 rounded-full">
            <Leaf className="text-amber-50" size={32} />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
          RvBridgeSafe
        </h1>
        
        <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
          Travel with peace of mind. Find RV-safe routes, avoid low bridges, 
          and enjoy the journey with our herbal-tea calm approach to road safety.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/routes" 
            className="bg-emerald-700 hover:bg-emerald-600 text-amber-50 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <MapPin size={20} />
            Find Safe Routes
          </Link>
          
          <Link 
            href="/about" 
            className="bg-stone-200 hover:bg-stone-300 text-stone-800 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Shield size={20} />
            How It Works
          </Link>
        </div>
      </section>

      {/* 3 Feature Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
          <div className="bg-emerald-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <MapPin className="text-amber-50" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-stone-800 mb-2">Low Bridge Alerts</h3>
          <p className="text-stone-600">Know your clearance. We check every bridge on your route.</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
          <div className="bg-emerald-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Shield className="text-amber-50" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-stone-800 mb-2">RV-Specific Routes</h3>
          <p className="text-stone-600">No more guessing. Routes built for your height, weight, and length.</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
          <div className="bg-emerald-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Leaf className="text-amber-50" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-stone-800 mb-2">Stress-Free Travel</h3>
          <p className="text-stone-600">Calm planning = calm driving. Enjoy the journey, not the anxiety.</p>
        </div>
      </section>
    </div>
  )
}
