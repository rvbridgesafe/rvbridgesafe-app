export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        RV Bridge Safe
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Avoid low bridges. Travel safer. Enter your RV height and get turn-by-turn routes that keep you clear of low clearances.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
        Check My Route
      </button>
    </div>
  )
}