import Link from 'next/link'
import { Heart, Coffee, Mountain, Users } from 'lucide-react'

export default function About() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-emerald-700 p-4 rounded-full">
            <Coffee className="text-amber-50" size={32} />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
          About RvBridgeSafe
        </h1>
        
        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
          Born from one too many "oh no" moments under a low bridge. 
          We believe RV travel should feel like a warm cup of tea: calming, safe, and enjoyable.
        </p>
      </section>

      {/* Story Section */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-8 md:p-12">
          <h2 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-3">
            <Heart className="text-emerald-700" size={28} />
            Our Story
          </h2>
          <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
            <p>
              Hi, I'm Sheri. Like you, I love the freedom of RV life. But I don't love the anxiety 
              of wondering "will I fit under that bridge?" 
            </p>
            <p>
              After a close call in Pennsylvania, I decided there had to be a better way. 
              RvBridgeSafe was built to give RVers the one thing GPS doesn't: peace of mind about bridge clearance.
            </p>
            <p>
              Think of us as your co-pilot with a cup of herbal tea. We handle the stressful route planning 
              so you can focus on the campfires, mountains, and memories.
            </p>
          </div>
        </div>
      </section>

      {/* Values Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
          <div className="bg-emerald-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Mountain className="text-amber-50" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-stone-800 mb-2">Safety First</h3>
          <p className="text-stone-600">We verify bridge heights using DOT data and real RVer reports.</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
          <div className="bg-emerald-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Coffee className="text-amber-50" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-stone-800 mb-2">Calm Planning</h3>
          <p className="text-stone-600">No jargon. No panic. Just clear, simple routes that work for your rig.</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
          <div className="bg-emerald-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Users className="text-amber-50" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-stone-800 mb-2">Built by RVers</h3>
          <p className="text-stone-600">Made by people who live this life. We know the roads because we drive them.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-700 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-amber-50 mb-4">
            Ready for stress-free RV travel?
          </h2>
          <p className="text-amber-100 mb-8 text-lg">
            Join thousands of RVers who plan with confidence.
          </p>
          <Link 
            href="/" 
            className="bg-amber-50 hover:bg-amber-100 text-emerald-700 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Plan Your First Route
          </Link>
        </div>
      </section>
    </div>
  )
}
